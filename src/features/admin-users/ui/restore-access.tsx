import {XLogo} from "@/shared/ui/pc-icons";
import {BlueBtn} from "@/shared/ui/blue-btn";
import {RestoreAccessForm} from "@/features/admin-users/ui/restore-access-firm";
import {useActionState} from "@/shared/lib/react";
import {restoreAccessAction, RestoreAccessState} from "@/features/admin-users/actions/restore-access";
import {handleBalanceForm} from "@/features/admin-users/actions/handle-balance-form";

interface Props{
    activeModal: string | null;
    setActiveModal: (modal: string | null) => void;
}

export const RestoreAccessModal:React.FC<Props> = ({ setActiveModal}) => {
    const [formState, action] = useActionState(restoreAccessAction, {} as RestoreAccessState);


    return (
        <div className="flex items-center justify-center z-[10] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
            <form
                action={async (formData: FormData) => {
                    const result = await action(formData);
                    if (result && !result.errors) {
                        setActiveModal(null);
                    }
                }}
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
            >
                <div className="flex items-center w-full text-black justify-between">
                    Восстановить доступ
                    <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                        <XLogo/>
                    </div>
                </div>
                <RestoreAccessForm {...formState}/>
                <BlueBtn
                    styles="w-full"
                    title="Submit"
                />
            </form>
        </div>
    )
}