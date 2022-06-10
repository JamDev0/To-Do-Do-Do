import TextLogo from '../../public/TextLogo.svg'

export function Header() {
    return (
        <header className="h-[200px] w-full bg-brand-base-gray-700 flex justify-center">
            <img
             src={TextLogo}
             className="w-36 aspect-auto"
            />
        </header>
    )
}