import { useState } from "react"

export function Header() {
    const [numOfCreatedToDos, setNumOfCreatedToDos] = useState<number>(5);
    const [numOfConcludedToDos, setNumOfConcludedToDos] = useState<number>(5);

    return (
        <header className="flex w-full justify-between mb-[24px] font-bold text-sm">
            <div className="flex items-center gap-x-2">
                <span className="text-brand-blue-400">Tarefas criadas</span>
                <span className="text-brand-base-gray-200 bg-brand-base-gray-400 rounded-full px-3 py-1 text-xs">{numOfCreatedToDos}</span>
            </div>

            <div className="flex items-center gap-x-2">
                <span className="text-brand-purple-400">Concluídas</span>
                <span className="text-brand-base-gray-200 bg-brand-base-gray-400 rounded-full px-3 py-1 text-xs">{numOfCreatedToDos > numOfConcludedToDos ? numOfConcludedToDos + ' de ' + numOfCreatedToDos : numOfCreatedToDos}</span>
            </div>
        </header>
    )
}