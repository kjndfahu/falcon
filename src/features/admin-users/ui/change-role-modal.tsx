'use client'
import {XLogo} from "@/shared/ui/pc-icons";
import {useActionState} from "@/shared/lib/react";
import {changeRoleAction, ChangeRoleState} from "@/features/admin-users/actions/change-role";
import { useState, useTransition } from "react";

interface Props {
    activeModal: string | null;
    setActiveModal: (modal: string | null) => void;
}

export const ChangeRoleModal: React.FC<Props> = ({activeModal, setActiveModal}) => {
    const [formState, action] = useActionState(changeRoleAction, {} as ChangeRoleState);
    const [isPending, startTransition] = useTransition();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('USER');
    const [discountRate, setDiscountRate] = useState('0');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !role || !discountRate) {
            return;
        }

        startTransition(async () => {
            try {
                const formData = new FormData();
                formData.append('email', email);
                formData.append('role', role);
                formData.append('discountRate', discountRate);

                console.log('Changing user:', { email, role, discountRate });
                const result = await action(formData);
                console.log('Change result:', result);

                if (!result.errors) {
                    setActiveModal(null);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        });
    };

    return (
        <div 
            className="flex z-[10] items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setActiveModal(null);
                }
            }}
        >
            <div 
                className="flex flex-col w-[800px] items-center gap-[50px] p-[50px] bg-[#F3F8FD] text-[#b0b0b0] rounded-[20px]"
                onClick={e => e.stopPropagation()}
            >
                <form 
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-[50px]"
                >
                    <div className="flex items-center w-full text-black justify-between">
                        Сменить роль
                        <div className="cursor-pointer" onClick={() => setActiveModal(null)}>
                            <XLogo/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full text-[#0A131D] gap-[25px]">
                        <div className="flex flex-col text-[18px] gap-3">
                            <label htmlFor="email">Email</label>
                            <div className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                    className="bg-transparent w-full focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="flex gap-[50px]">
                            <div className="flex flex-col text-[18px] gap-3">
                                <label htmlFor="role">Role</label>
                                <div
                                    className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                                    <select
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                                    >
                                        <option value="USER">USER</option>
                                        <option value="ADMIN">ADMIN</option>
                                        <option value="RESELLER">RESELLER</option>
                                        <option value="PARTNER">PARTNER</option>
                                        <option value="VIPPARTNER">VIPPARTNER</option>
                                        <option value="DISTRIBUTOR">DISTRIBUTOR</option>
                                        <option value="INFLUENCER">INFLUENCER</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col text-[18px] gap-3">
                                <label htmlFor="discountRate">Discount Percent</label>
                                <div className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                                    <input
                                        type="number"
                                        id="discountRate"
                                        value={discountRate}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
                                                setDiscountRate(value);
                                            }
                                        }}
                                        placeholder="Enter percent (0-100)"
                                        required
                                        min="0"
                                        max="100"
                                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                                    />
                                </div>
                                {formState.errors?.discountRate && (
                                    <div className="text-red-500 text-sm">{formState.errors.discountRate}</div>
                                )}
                            </div>
                        </div>
                        {formState.errors?._errors && (
                            <div className="text-red-500">{formState.errors._errors}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isPending || !email || !role || !discountRate}
                        className={`w-full flex items-center justify-center text-[18px] mt-[25px] py-4 font-light text-white rounded-[15px] bg-[#0057FF] ${(isPending || !email || !role || !discountRate) ? 'opacity-50' : ''}`}
                    >
                        {isPending ? "Processing..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};