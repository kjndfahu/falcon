import { EnterLogo } from "@/shared/ui/icons";
import * as React from "react";

interface Props {
    title?: string;
    isPending?: boolean;
    styles?: string;
}

export const Button: React.FC<Props> = ({ isPending, title, styles }) => {
    console.log(isPending);
    return (
        <button disabled={isPending} type="submit" className={`flex ${styles} cursor-pointer items-center font-normal p-2 gap-2`}>
            <EnterLogo />
            {title}
        </button>
    );
};
