import { useEffect, useState } from "react";

import { ToDo } from "../ToDo";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";

interface ToDosInterface {
    id: number;
    isChecked: boolean;
    content: string;
}

export function ToDos() {
    const [ToDos, setToDos] = useState<ToDosInterface[] | []>([]);

    async function getToDos() {
        return fetch('../../../Jsons/ToDos.json').then(res => res.json()).then(data => {return data})
    }

    function doToDosExists() {
        return ToDos.length > 0;
    }

    useEffect(()=>{

        getToDos().then(data => setToDos(data));
    }, [])

    return (
        <section>
            <Header
              ToDos={ToDos}
            />
            <Main
             ToDos={ToDos}
            />
        </section>
    )
}