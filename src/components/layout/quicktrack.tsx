import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const QuickTrack = () => {
    return (
        <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="font-bold text-xl">Rastreamento Rápido</h3>
            <p className="text-gray-500 text-sm">Cole o código de rastreio para acompanhar sua encomenda.</p>
            <Input placeholder="Ex: BR123456789BR" />
            <Button className="w-3/5">Rastrear</Button>
        </div>
    )
}