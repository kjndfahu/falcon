'use client';


export const FindUserEmail=  ( ) => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col mb-5 text-[18px] gap-3">
                <div
                    className="rounded-[15px] font-normal sml:w-[528px] w-full border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <input
                        type="email"
                        placeholder="Enter new email"
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    />
                </div>

            </div>
        </div>
    )
};