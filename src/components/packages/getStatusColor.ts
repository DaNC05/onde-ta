export const getStatusColor = (status: string) => {
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