import Link from "next/link";
import {
  Bell,
  ChartColumnIncreasing,
  Clock,
  Heart,
  Home,
  Mail,
  Settings,
} from "lucide-react";

type sideBarLinkProp = {
  name: string;
  url: string;
  icon: React.ReactNode;
};
type SideBarProps = {
  isMenuOpen: boolean;
};
const sideBarLinkList = [
  {
    name: "Dashboard",
    url: "/",
    icon: <Home />,
  },
  {
    name: "Minhas Encomendas",
    url: "/encomendas",
    icon: <Mail />,
  },
  {
    name: "Favoritos",
    url: "/favoritos",
    icon: <Heart />,
  },
  {
    name: "Alertas",
    url: "/alertas",
    icon: <Bell />,
  },
  {
    name: "Histórico",
    url: "/historico",
    icon: <Clock />,
  },
  {
    name: "Estatísticas",
    url: "/estatisticas",
    icon: <ChartColumnIncreasing />,
  },
  {
    name: "Configurações",
    url: "/configuracoes",
    icon: <Settings />,
  },
];

export const SideBar = ({ isMenuOpen }: SideBarProps) => {
  return (
    <aside
      className={`
    ${isMenuOpen ? "w-1/5 p-4 border-r" : "w-0 p-0 border-0"}

    bg-white dark:bg-[#111827] text-zinc-900 dark:text-white border-gray-200 dark:border-[#1E293B]
    dark:bg-[#0B111D]
    dark:text-white
    dark:border-[#1E293B]

    transition-all
    duration-300
    overflow-hidden
    whitespace-nowrap
  `}
    >
      {" "}
      <nav className="flex flex-col gap-2 ">
        {sideBarLinkList.map((prop) => (
          <Link
            className="flex items-center w-full p-3 gap-4 rounded-lg text-start leading-tight transition-all outline-none hover:bg-blue-50 hover:text-blue-900 dark:hover:bg-[#111827] dark:hover:text-white"
            key={prop.name}
            href={prop.url}
          >
            {prop.icon} {prop.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
