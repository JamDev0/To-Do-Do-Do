import { ClipboardText } from "phosphor-react"
import { useState } from "react"
import { ToDo } from "../../ToDo";

interface MainProps {
    ToDos: {
        id: number;
        isChecked: boolean;
        content: string;
    }[]
}

export function Main({ ToDos }:MainProps) {
    const [doToDosExists, setDoToDosExists] = useState<boolean>(false)

    return (
        <main className={`w-full relative rounded-lg border-brand-base-gray-400 border-t-2 ${!doToDosExists ? 'flex items-center justify-center px-20 py-[50px]' : ''}`}>
            {
                doToDosExists ?
                    (
                        ToDos.map( props => {
                            return <ToDo {...props}/>
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