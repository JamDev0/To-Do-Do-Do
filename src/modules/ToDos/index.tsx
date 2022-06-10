import { ToDo } from "../ToDo";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";

export function ToDos() {
    // function handleToDoCheck(ToDoId) {

    // }

    return (
        <section>
            <Header/>
            <Main/>
            <ToDo content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." isChecked={true}/>
        </section>
    )
}