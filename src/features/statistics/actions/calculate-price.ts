export const calculateTotalPrice = (sells: { createdAt: Date; price: number}[]): number => {
    return sells.reduce((total, item) => total + item.price, 0);
};