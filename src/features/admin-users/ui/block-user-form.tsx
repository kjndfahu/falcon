'use client'

interface Props {
    errors?: {
        email?: string;
        _errors?: string;
    };
}

export const BlockUserForm: React.FC<Props> = ({ errors }) => {
    return (
        <div className="flex flex-col w-full gap-[15px]">
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="email" className="text-black">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-[#E5E5E5] rounded-[10px] p-[15px]"
                    placeholder="Enter user email"
                />
                {errors?.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                )}
            </div>
            {errors?._errors && (
                <span className="text-red-500 text-sm">{errors._errors}</span>
            )}
        </div>
    );
};