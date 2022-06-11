import { useEffect, useState } from "react";

import { CreateNewToDo } from "./CreateNewToDo";
import { ToDos } from "./ToDos";

interface ToDosInterface {
    id: number;
    isChecked: boolean;
    content: string;
}

export function Main() {
    const [toDos, setToDos] = useState<ToDosInterface[] | []>([]);

    async function getToDos() {
        return fetch('../../../Jsons/ToDos.json').then(res => res.json()).then(data => {return data})
    }

    useEffect(()=>{
        getToDos().then(data => setToDos(data));
    }, []);

    function handleToDoCheck(submitterId: number) {
        let toDosElements = toDos;
        let submitter = toDosElements.find(element => element.id === submitterId)!;
        submitter.isChecked = !submitter.isChecked;
        let toDosElementsWithSubmitterAltered = toDosElements.map(element => element.id !== submitterId ? element : submitter);

        setToDos(toDosElementsWithSubmitterAltered);
    }

    function handleToDoDeletion(submitterId: number) {
        let toDosWithoutSubmitter = toDos.filter(element => element.id !== submitterId);

        setToDos(toDosWithoutSubmitter);
    }

    function handleToDoCreation(submitterText: string) {
        setToDos([...toDos, {
            id: toDos.length + 1,
            content: submitterText,
            isChecked: false,
        }])
    }

    return(
        <main className="w-3/5 mx-auto mb-[100px]">
            <CreateNewToDo
             createButtonClickEvent={handleToDoCreation}
            />

            <ToDos
             ToDos={toDos}
             toDoCheckEvent={handleToDoCheck}
             toDoRemoveEvent={handleToDoDeletion}
            />
        </main>
    )
}