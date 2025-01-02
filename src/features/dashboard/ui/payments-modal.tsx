import React from "react";

interface Props{
    className?: string;
}

export const PaymentsModal:React.FC<Props> = ({className}) => {
    return (
        <div className="max-h-[600px] w-[90%] overflow-y-auto">
            {/*<table className="min-w-full table-auto">*/}
            {/*    <thead className="sticky top-0 bg-white">*/}
            {/*    <tr className="sml:table-row hidden border-b-[1px] border-[#BEDAE9] text-left font-normal text-[18px] text-[#4B5167]">*/}
            {/*        <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Type</th>*/}
            {/*        <th className="mds:px-[46px] sml:px-[20px] px-[5px] font-normal py-[20px]">Count</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    123*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    )
}