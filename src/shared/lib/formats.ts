export const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export const formatSystem = (type: string)=> {
    switch (type) {
        case "ADMINRECHARGE":
            return "Admin Recharge"
        case "USDT":
            return "USDT"
    }
}