'use client'
import {useId, useState} from "react";
import { $Enums } from "@prisma/client";

interface Props {
    formData?: FormData;
    errors?: {
        email?: string;
        role?: string;
        _errors?: string;
    }
}

export const ChangeRoleInput: React.FC<Props> = ({formData, errors}) => {
    const roles: { id: $Enums.Role; name: string }[] = [
        { id: 'USER', name: 'User' },
        { id: 'RESELLER', name: 'Reseller' },
        { id: 'PARTNER', name: 'Partner' },
        { id: 'VIPPARTNER', name: 'VIP Partner' },
        { id: 'DISTRIBUTOR', name: 'Distributor' },
        { id: 'INFLUENCER', name: 'Influencer' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<$Enums.Role | ''>('');
    const emailId = useId();

    const handleRoleSelect = (roleId: $Enums.Role) => {
        setSelectedRole(roleId);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col w-full text-[#0A131D] gap-[25px]">
            <div className="flex flex-col text-[18px] gap-3">
                <label htmlFor={emailId}>Email</label>
                <div className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        id={emailId}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                        defaultValue={formData?.get("email")?.toString()}
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>
                {errors?.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="flex items-center text-[18px] gap-[50px]">
                Роль:
                <div className="relative inline-block text-left">
                    <input type="hidden" name="role" value={selectedRole} />
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-4 py-2 text-[18px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {selectedRole ? roles.find(role => role.id === selectedRole)?.name : 'Выберите роль'}
                    </button>

                    {isOpen && (
                        <div className="absolute z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {roles.map((role) => (
                                    <button
                                        type="button"
                                        key={role.id}
                                        onClick={() => handleRoleSelect(role.id)}
                                        className="block w-full px-4 py-2 text-[18px] text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        {role.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {errors?._errors && <div className="text-red-500">{errors._errors}</div>}
        </div>
    );
};