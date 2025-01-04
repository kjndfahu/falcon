export const getDiscountedPrice = (price: string, role: string) => {
    const numericPrice = parseFloat(price.replace('$', ''));
    let discount = 0;

    switch (role) {
        case 'RESELLER':
            discount = 0.05;
            break;
        case 'PARTNER':
            discount = 0.10;
            break;
        case 'VIPPARTNER':
            discount = 0.15;
            break;
        case 'DISTRIBUTOR':
            discount = 0.20;
            break;
        default:
            discount = 0;
    }

    const discountedPrice = numericPrice * (1 - discount);
    return `${discountedPrice.toFixed(0)} $`;
};