import { create } from 'zustand';

interface BalanceState {
    balance: number;
    setBalance: (newBalance: number) => void;
    updateBalance: (amount: number) => void;
}

export const useBalanceStore = create<BalanceState>((set) => ({
    balance: 0,
    setBalance: (newBalance) => set({ balance: newBalance }),
    updateBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
}));
