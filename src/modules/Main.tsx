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
        let toDosElements = toDos.filter(element => element.id !== submitterId);;
        let submitter = toDos.find(element => element.id === submitterId)!;
        submitter.isChecked = !submitter.isChecked;
        if(submitter.isChecked)
        {
            toDosElements.push(submitter);
        } else {
            toDosElements.unshift(submitter);
        }

        setToDos(toDosElements);
    }

    function handleToDoDeletion(submitterId: number) {
        let toDosWithoutSubmitter = toDos.filter(element => element.id !== submitterId);

        setToDos(toDosWithoutSubmitter);
    }

    function getBiggestToDoId() {
        let biggestId: number;
        if(toDos.length > 0)
        {
            let array = toDos;
            biggestId = array[0].id;

        array.forEach(toDo => {if(toDo.id > biggestId){biggestId = toDo.id}})
        } else {
            biggestId = -1;
        }
        

        return biggestId;
    }


    function handleToDoCreation(submitterText: string) {
        setToDos(recent => [{
            id: getBiggestToDoId() + 1,
            content: submitterText,
            isChecked: false,
        }, ...toDos]);
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