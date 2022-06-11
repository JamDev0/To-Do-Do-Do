import { PlusCircle } from 'phosphor-react';

import { useState } from 'react';

interface CreateNewToDoProps {
    createButtonClickEvent: (arg: string) => void;
}

export function CreateNewToDo({ createButtonClickEvent }: CreateNewToDoProps) {
    const [inputValue, setInputValue] = useState<string>('');


    return(
        <form className="flex w-full mb-[30px] h-[54px] gap-x-2 -translate-y-[60%]">
            <input
             type='text'
             className="grow text-brand-base-gray-100 bg-brand-base-gray-500 p-4 rounded-lg font-brand-gray-300:placeholder border-brand-base-gray-700 border focus:border-transparent"
             placeholder='Adicione uma nova tarefa'
             onChange={ event => {setInputValue(event.target.value)}}
             value={inputValue}
            >
            
            </input> 
            <button
             className="transition-colors duration-200 grow-0 p-4 rounded-lg align-middle bg-brand-blue-500 text-sm font-bold flex gap-x-2 justify-center items-center text-brand-base-gray-100 hover:bg-brand-blue-400 focus:bg-brand-blue-400"
             onClick={ event => {event.preventDefault(); createButtonClickEvent(inputValue); setInputValue('')}}
            >
                Criar <PlusCircle weight='bold' className='w-5 h-5'/>
            </button>
        </form>
    )
}