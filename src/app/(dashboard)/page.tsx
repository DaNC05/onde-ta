import { Orders } from "@/components/layout/orders";
import { QuickTrack } from "@/components/layout/quicktrack";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Box, CheckCircle, Clock, Search, Truck } from "lucide-react";

const listCards = [
    {
        title: "Total de Encomendas",
        value: "12",
        subtitle: "Todas cadastradas",
        icon: <Box />,
        iconColor: "bg-blue-500"
    },
    {
        title: "Em Trânsito",
        value: "5",
        subtitle: "A caminho do destino",
        icon: <Truck />,
        iconColor: "bg-yellow-500"
    },
    {
        title: "Entregues",
        value: "6",
        subtitle: "Com sucesso",
        icon: <CheckCircle />,
        iconColor: "bg-green-500"
    },
    {
        title: "Atrasados",
        value: "1",
        subtitle: "Precisam de atenção",
        icon: <Clock />,
        iconColor: "bg-purple-500"
    },
]
export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-8 p-8">
            <div className="flex justify-between p-8 border-b border-gray-200">
                <div className="">
                    <h1 className="text-3xl">Bem-vindo de volta!</h1>
                    <h3 className="text-gray-500 text-sm">Acompanhe o status de todas as suas encomendasem um só lugar.</h3>
                </div>
                <div className="">
                    <Input placeholder={`Buscar Encomendas`} className="border-2 border-gray-500 rounded px-4 py-2" />
                </div>
            </div>
            <div className="grid gap-4 grid-cols-4">
                {
                    listCards.map((card, index) => (
                        <Card key={index} className=" bg-white border border-gray-200 rounded-2xl p-8">
                            <div className="flex flex-row justify-between ">
                                <div className={`flex items-center justify-center rounded-full h-16 w-16 m-2 text-white ${card.iconColor} `}>
                                    {card.icon}
                                </div>
                                <CardContent className="flex flex-col">
                                    <p className="font-bold">{card.title}</p>
                                    <h3 className="font-bold text-3xl">{card.value}</h3>
                                    <p className="text-gray-500 text-sm">{card.subtitle}</p>
                                </CardContent>
                            </div>
                        </Card>
                    ))
                }
            </div>
            <div className=" grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Orders />
                </div>
                <div className="col-span-1 flex flex-col gap-8">
                    <QuickTrack />
                </div>
            </div>
        </div >
    )
}