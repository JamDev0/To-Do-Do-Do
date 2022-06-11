import { useEffect, useState } from "react";

import { ToDo } from "../ToDo";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";

interface ToDosProps {
    ToDos: {
        id: number;
        isChecked: boolean;
        content: string;
    }[];
    toDoCheckEvent: (arg: number) => void;
    toDoRemoveEvent: (arg: number) => void;
}

export function ToDos({ ToDos, toDoCheckEvent, toDoRemoveEvent }: ToDosProps) {
    return (
        <section>
            <Header
              ToDos={ToDos}
            />
            <Main
             ToDos={ToDos}
             toDoCheckEvent={toDoCheckEvent}
             toDoRemoveEvent={toDoRemoveEvent}
            />
        </section>
    )
}