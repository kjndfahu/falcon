import { useCallback, useState, useTransition } from "react";

export function useActionState<TState, TArg = FormData>(
    action: (state: TState, arg: TArg) => Promise<TState>,
    initialState: TState
): [TState, (arg: TArg) => Promise<TState>, boolean] {
    const [state, setState] = useState<TState>(initialState);
    const [isPending, startTransition] = useTransition();

    const dispatch = useCallback(async (arg: TArg) => {
        const result = await action(state, arg);
        startTransition(() => {
            setState(result);
        });
        return result;
    }, [action, state]);

    return [state, dispatch, isPending];
}