import { getStatusColor } from "../packages/getStatusColor"

export const Status = ({ prop }: { prop: string }) => {
    return (
        <div><span className={` ${getStatusColor(prop)} w-1/5 rounded-2xl px-4 py-2`}> {prop} </span></div>
    )
}