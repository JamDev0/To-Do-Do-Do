import TextLogo from '../../public/TextLogo.svg'

export function Header() {
    return (
        <header
         className="
            h-[130px] w-full bg-brand-base-gray-700 flex justify-center mb-[40px]
            lg:h-[200px] lg:mb-0
         "
        >
            <img
             src={TextLogo}
             className="
                w-36 aspect-auto
             "
            />
        </header>
    )
}