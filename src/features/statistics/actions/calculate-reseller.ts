export const calculateTotalReseller = (sells: { createdAt: Date; price: number; userId: UserId | null }[]): number => {
    return sells.reduce((total, item) => {
        if (item.userId !== null) {
            return total + item.price;
        }
        return total;
    }, 0);
};