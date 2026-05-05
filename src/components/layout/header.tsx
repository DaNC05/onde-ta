import { Bell } from "lucide-react"


export const Header = () => {
    return (
        <header className="flex justify-between p-4 border-b border-gray-200">
            <div className="">
                <p>=</p>
            </div>
            <div className="inline-flex gap-2 items-center">
                <Bell />
                <p>Perfil</p>
            </div>
        </header>

    )
}