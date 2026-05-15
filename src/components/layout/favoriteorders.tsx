import { Star } from "lucide-react";
import { getStatusColor } from "../packages/getStatusColor";
import { Status } from "../ui/status";

type ordersProp = {
  icon: string;
  name: string;
  code: string;
  status: string;
};

const favoriteOrdersList = [
  {
    icon: "/correios-logo.png",
    name: "Teclado Mecânico",
    code: "BR123456789BR",
    status: "Em trânsito",
  },
];

export const FavoriteOrders = () => {
  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-[#111827] text-zinc-900 dark:text-white border-gray-200 dark:border-[#1E293B]">
      <div className="flex justify-between border-b pb-4 border-gray-200">
        <h3 className="font-bold text-xl">Meu Favoritos</h3>
      </div>
      {favoriteOrdersList.map((order) => (
        <div
          className="flex flex-row items-center justify-between"
          key={order.code}
        >
          <div className="inline-flex items-center gap-2">
            <img
              className="w-10 h-10 object-contain"
              src={order.icon}
              alt="imagem Transportadora"
            />
            <div className="flex flex-col">
              <h6 className="font-bold text-base">{order.name}</h6>
              <span className="text-gray-500 text-sm">{order.code}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Status prop={order.status} />
            <Star className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      ))}
    </div>
  );
};
