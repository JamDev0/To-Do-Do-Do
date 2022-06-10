import { Check, Trash } from "phosphor-react";

interface ToDoProps {
    content: string;
    isChecked: boolean;
}

export function ToDo({content, isChecked}:ToDoProps) {
    return (
        <div className="flex gap-x-3 items-start p-5 bg-brand-base-gray-500 rounded-lg border-brand-base-gray-400 border">
            
            <div className={`rounded-full w-[1.1rem] h-[1.1rem] cursor-pointer ${isChecked ? 'bg-brand-purple-500 flex justify-center items-center border-0' : 'border-2 border-brand-blue-400'}`}>
                {
                    isChecked ?
                        <Check weight="bold" className="text-brand-base-gray-100 w-3 h-3"/>
                    :
                        null
                }
            </div>

            <p className={`text-brand-base-gray-100 text-sm ${isChecked ? 'text-brand-base-gray-300 line-through' : ''}`}>{content}</p>

            <Trash className="text-brand-base-gray-300 w-[1.25rem] h-[1.254rem] cursor-pointer ml-auto"/>
        </div>
    )
}