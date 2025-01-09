import { create } from 'zustand';

interface State {
    balance: number;
    newSum: number;
    setBalance: (newSum: number) => void;
}

export const useBalanceStore = create<State>((set) => ({
    balance: 0,
    newSum: 0,
    setBalance: (newSum) => set((state) => ({ balance: state.balance + newSum })),
})); 