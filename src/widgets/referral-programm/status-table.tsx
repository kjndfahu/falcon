import {statusHeaders, statusValues} from "@/features/referral-programm/model/constants";

interface Props{
    className?:string,
}
export const StatusTable:React.FC<Props> = ({}) => {
    return (
        <div className="md:flex hidden px-[220px]">
            <table className="w-full text-black table-fixed border-collapse border-[rgba(190,_218,_233,_1)] text-center">
                <thead>
                <tr className="bg-[linear-gradient(90deg,_#DFF3FD_0%,_#CDEEFF_100%)]">
                    {statusHeaders.map((item, index) => (
                        <th key={index}
                            className="w-1/5 px-3 py-7 text-black border-[rgba(190,_218,_233,_1)] border">{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {statusValues.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className=""
                    >
                        <td className="px-4 py-[28px] border border-gray-200">
                            {row.label}
                        </td>
                        {row.values.map((value, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-4 py-2 border border-gray-200"
                            >
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}