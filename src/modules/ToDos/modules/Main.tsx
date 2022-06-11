import { ClipboardText } from "phosphor-react"
import { useEffect, useState } from "react"
import { ToDo } from "../../ToDo";

interface MainProps {
    ToDos: {
        id: number;
        isChecked: boolean;
        content: string;
    }[];
    toDoCheckEvent: (arg: number) => void;
    toDoRemoveEvent: (arg: number) => void;
}

export function Main({ ToDos, toDoCheckEvent, toDoRemoveEvent }:MainProps) {
    const [toDosState, setToDosState] = useState<MainProps['ToDos'] | []>([]);

    useEffect(()=>{
        setToDosState(ToDos);
    }, [ToDos]);

    function doToDosExists() {
        return toDosState.length > 0 ? true : false;
    }

    return (
        <main className={`w-full relative ${!doToDosExists() ? 'flex items-center justify-center px-20 py-[50px] rounded-lg border-brand-base-gray-400 border-t-2' : 'flex flex-col gap-y-[12px]'}`}>
            {
                doToDosExists() ?
                    (
                        toDosState.map( props => {
                            return <ToDo key={props.id} clickEvent={toDoCheckEvent} removeEvent={toDoRemoveEvent} {...props}/>
                        })
                    )
                :
                    (
                        <div className="flex flex-col items-center justify-center gap-y-[16px]">
                            <ClipboardText className="w-[4.5rem] h-[4.5rem] text-brand-base-gray-400"/>

                            <div className="flex flex-col items-center text-base text-brand-base-gray-300">
                                <h2 className="font-bold">Você ainda não tem tarefas cadastradas</h2>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </div>
                    )
            }
        </main>
    )
}