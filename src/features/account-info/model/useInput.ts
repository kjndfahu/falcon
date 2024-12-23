import { useState } from "react";

export function useAmountInput() {
    const [amount, setAmount] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAmount(value);
    };

    return { amount, handleChange };
}
