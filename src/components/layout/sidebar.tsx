import Link from "next/link"
import { Bell, ChartColumnIncreasing, Clock, Heart, Home, Mail } from "lucide-react"

type sideBarLinkProp = {
    name: string;
    url: string;
    icon: React.ReactNode;
}
const sideBarLinkList = [
    {
        name: 'Dashboard',
        url: '/',
        icon: <Home />
    },
    {
        name: 'Minhas Encomendas',
        url: '/encomendas',
        icon: <Mail />
    },
    {
        name: 'Favoritos',
        url: '/favoritos',
        icon: <Heart />
    },
    {
        name: 'Alertas',
        url: '/alertas',
        icon: <Bell />
    },
    {
        name: 'Histórico',
        url: '/historico',
        icon: <Clock />
    },
    {
        name: 'Estatísticas',
        url: '/estatisticas',
        icon: <ChartColumnIncreasing />
    },
    {
        name: 'Configurações',
        url: '/configuracoes',
        icon: <Home />
    },

]

export const SideBar = () => {
    return (
        <aside className="w-1/5 border-r border-gray-200 p-4">
            <nav className="flex flex-col gap-2 ">
                {
                    sideBarLinkList.map((prop) => (
                        <Link className="flex items-center w-full p-3 gap-4 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none" key={prop.name} href={prop.url}>{prop.icon} {prop.name}</Link>)
                    )
                }
            </nav>
        </aside>
    )

}