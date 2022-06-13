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
    const [wasComponentRendered, setWasComponentRendered] = useState<boolean>(false)

    async function getToDos() {
        return JSON.parse(localStorage.getItem('ToDos')!);
    }

    useEffect(()=>{
        if(localStorage.getItem('ToDos') !== null)
        {
            getToDos().then(data => setToDos(data));
        }
        setWasComponentRendered(true);
    }, []);

    useEffect(()=>{
        if(wasComponentRendered)
        {
            localStorage.setItem('ToDos', JSON.stringify(toDos))
        }
    }, [toDos, wasComponentRendered])

    function handleToDoCheck(submitterId: number) {
        let toDosElements = toDos;
        let submitter = toDosElements.find(element => element.id === submitterId)!;
        submitter.isChecked = !submitter.isChecked;
        let toDosElementsWithSubmitterAltered = [];
        if(submitter.isChecked)
        {
            toDosElementsWithSubmitterAltered = toDos.filter(element => element.id !== submitterId);
            toDosElementsWithSubmitterAltered.push(submitter);
        } else {
            toDosElementsWithSubmitterAltered = toDosElements.map(element => element.id !== submitterId ? element : submitter);
        }

        setToDos(toDosElementsWithSubmitterAltered);
    }

    function handleToDoDeletion(submitterId: number) {
        let toDosWithoutSubmitter = toDos.filter(element => element.id !== submitterId);

        setToDos(toDosWithoutSubmitter);
    }

    function handleToDoCreation(submitterText: string) {
        setToDos([{
            id: toDos.length + 1,
            content: submitterText,
            isChecked: false,
        }, ...toDos])
    }


    return(
        <main
         className="
            w-5/6 mx-auto mb-[100px]
            lg:w-3/5
         "
        >
            <CreateNewToDo
             handleCreateToDoEvent={handleToDoCreation}
            />

            <ToDos
             ToDos={toDos}
             toDoCheckEvent={handleToDoCheck}
             toDoRemoveEvent={handleToDoDeletion}
            />
        </main>
    )
}