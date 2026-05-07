import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ordersProp = {
    icon: string;
    name: string;
    code: string;
    status: string;
    local: string;
    date: string;

}


const ordersList = [
    {
        icon: "/correios-logo.png",
        name: "Teclado Mecânico",
        code: "BR123456789BR",
        status: 'Em trânsito',
        local: "Centro de Distribuição - São Paulo/SP",
        date: "Hoje, 10:23",
    },
]

export const Orders = () => {
    const getStatusColor = (status: string) => {
        let statusColor = ''
        switch (status) {
            case "Em trânsito":
                statusColor = "bg-blue-900 text-blue-300"
                break;
            case "Saiu para Entrega":
                statusColor = "bg-orange-900 text-orange-300"
                break;
            case "Entregue":
                statusColor = "bg-green-900 text-green-300"
                break;
            case "Atrasado":
                statusColor = "bg-red-900 text-red-300"
                break;
            default:
                break;
        }
        return statusColor
    }
    return (
        <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex justify-between border-b pb-4 border-gray-200">
                <h3 className="font-bold text-xl">Minhas Encomendas</h3>
                <Link href="/encomendas" className="text-blue-900">Ver Todas</Link>
            </div>
            {ordersList.map((order) => (
                <div className="flex flex-row items-center justify-between" key={order.code}>
                    <div className="inline-flex items-center gap-2">
                        <img className="w-10 h-10 object-contain" src={order.icon} alt="imagem Transportadora" />
                        <div className="flex flex-col">
                            <h6 className="font-bold text-base">{order.name}</h6>
                            <span className="text-gray-500 text-sm">{order.code}</span>
                        </div>
                    </div>
                    <div><span className={`${getStatusColor(order.status)} rounded-2xl px-4 py-2`}>{order.status}</span></div>
                    <div><span className="text-gray-500 text-sm">{order.local}</span></div>
                    <div className="flex flex-row items-center"><span className="text-gray-500 text-sm">{order.date}</span> <div><ChevronRight className="text-gray-500" /></div></div>
                </div>
            ))}
        </div>

    )
}
