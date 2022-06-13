import { PlusCircle } from 'phosphor-react';

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

interface CreateNewToDoProps {
    handleCreateToDoEvent: (arg: string) => void;
}

export function CreateNewToDo({ handleCreateToDoEvent }: CreateNewToDoProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    function toggleIsInputFocused() {
        setIsInputFocused(!isInputFocused);
    }

    return(
        <form
         className="
            flex flex-col gap-y-[10px] w-full mb-[50px] gap-x-2
            lg:flex-row lg:-translate-y-[60%] lg:h-[54px] lg:mb-[30px]
         "
        >
            
        
            <input
             type='text'
             name='createToDoInput'
             className="grow text-brand-base-gray-100 bg-brand-base-gray-500 p-4 rounded-lg font-brand-gray-300:placeholder border-brand-base-gray-700 border focus:border-transparent"
             placeholder='Adicione uma nova tarefa'
             onChange={ event => {setInputValue(event.target.value)}}
             onFocus={ () => !isInputFocused ? toggleIsInputFocused() : null }
             onBlur={ event => {event.relatedTarget?.name === 'createNewToDoButton' ? null : toggleIsInputFocused()} }
             value={inputValue}
            >
            
            </input> 

            {
                isDesktop ?
                    (
                        <button
                         name='createNewToDoButton'
                         className="transition-colors duration-200 grow-0 p-4 rounded-lg align-middle bg-brand-blue-500 text-sm font-bold flex gap-x-2 justify-center items-center text-brand-base-gray-100 hover:bg-brand-blue-400 focus:bg-brand-blue-400"
                         onClick={ event => {event.preventDefault(); handleCreateToDoEvent(inputValue); setInputValue('')}}
                        >
                            Criar <PlusCircle weight='bold' className='w-5 h-5'/>
                        </button>
                    )
                :
                    (
                        isInputFocused ?
                            (
                                <button
                                 name='createNewToDoButton'
                                 className="transition-colors duration-200 grow-0 p-4 rounded-lg align-middle bg-brand-blue-500 text-sm font-bold flex gap-x-2 justify-center items-center text-brand-base-gray-100 hover:bg-brand-blue-400 focus:bg-brand-blue-400"
                                 onClick={ event => {event.preventDefault(); handleCreateToDoEvent(inputValue); setInputValue('')}}
                                 onBlur={ event => {event.relatedTarget?.name === 'createToDoInput' ? null : toggleIsInputFocused()} }
                                >
                                    Criar <PlusCircle weight='bold' className='w-5 h-5'/>
                                </button>
                            )
                        :
                            null
                    )
            }
            
        </form>
    )
}