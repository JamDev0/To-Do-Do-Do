import { Check, Trash } from "phosphor-react";

interface ToDoProps {
    id: number;
    content: string;
    isChecked: boolean;
    clickEvent: (arg: number) => void;
    removeEvent: (arg: number) => void;
}

export function ToDo({content, isChecked, id, clickEvent, removeEvent}:ToDoProps) {
    console.log('Elemento de id: ', id, 'Esta checado?: ', isChecked);

    return (
        <div className={`flex order-50 gap-x-3 items-start p-5 bg-brand-base-gray-500 rounded-lg border-brand-base-gray-400 border ${isChecked ? 'order-last' : 'order-first' }`}>
            
            <div
             tabIndex={0}
             className={`rounded-full w-[1.25rem] h-[1.254rem] max-w-[1.254rem] max-h-[1.254rem] min-h-[1.254rem] min-w-[1.254rem] cursor-pointer grow transition-colors duration-300 ${isChecked ? 'bg-brand-purple-500 flex justify-center items-center border-0 hover:bg-brand-purple-400 focus:bg-brand-purple-400' : 'border-2 border-brand-blue-400 hover:bg-brand-blue-400 hover:bg-opacity-30 focus:bg-brand-blue-400 focus:bg-opacity-30'}`}
             onClick={() => clickEvent(id)}
            >
                {
                    isChecked ?
                        <Check weight="bold" className="text-brand-base-gray-100 w-[70%] aspect-auto"/>
                    :
                        null
                }
            </div>

            <p className={`text-brand-base-gray-100 text-sm grow-0 ${isChecked ? 'text-brand-base-gray-300 line-through' : ''}`}>{content}</p>

            <Trash 
             tabIndex={0}
             className="text-brand-base-gray-300 transition-colors duration-200 outline-1 max-w-[1.7rem] max-h-[1.7rem] min-h-[1.7rem] min-w-[1.7rem] cursor-pointer ml-auto grow p-1 rounded hover:bg-brand-base-gray-400 hover:text-brand-base-danger-400 focus:bg-brand-base-gray-400 focus:text-brand-base-danger-400"
             onClick={() => { removeEvent(id) }}
            />
        </div>
    )
}