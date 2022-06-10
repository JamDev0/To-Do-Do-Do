import { PlusCircle } from 'phosphor-react'

export function CreateNewToDo() {
    return(
        <form className="flex w-full mb-[30px] h-[54px] gap-x-2 -translate-y-[60%]">
            <input
             type='text'
             className="grow bg-brand-base-gray-500 p-4 rounded-lg font-brand-gray-300:placeholder border-brand-base-gray-700 border"
             placeholder='Adicione uma nova tarefa'
            >
            
            </input> 
            <button className="grow-0 p-4 rounded-lg align-middle bg-brand-blue-500 text-sm font-bold flex gap-x-2 justify-center items-center text-brand-base-gray-100">
                Criar <PlusCircle weight='bold' className='w-5 h-5'/>
            </button>
        </form>
    )
}