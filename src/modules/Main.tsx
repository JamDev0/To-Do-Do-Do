import { CreateNewToDo } from "./CreateNewToDo";

import { ToDos } from "./ToDos";

export function Main() {
    return(
        <main className="w-3/5 mx-auto">
            <CreateNewToDo/>

            <ToDos />
        </main>
    )
}