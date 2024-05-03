export const orderStatusses: Record<string, { title: string; bgColor: string }> = {
    PAID: {
        title: "Оплачен",
        bgColor: "before:bg-[#24D17E]",
    },
    WAITING_PAYMENT: {
        title: "Ожидает оплаты",
        bgColor: "before:bg-[#FFC700]",
    },
    CANCELED: {
        title: "Отменен",
        bgColor: "before:bg-[#FF0000]",
    },
};