import { useState } from "react";

export function useAmountInput() {
    const [amount, setAmount] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9.]/g, ""); // Убираем символы, кроме чисел и точки
        setAmount(value ? `$ ${value}` : ""); // Добавляем знак `$`
    };

    return { amount, handleChange };
}
