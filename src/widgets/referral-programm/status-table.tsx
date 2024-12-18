import {statusValues} from "@/features/referral-programm/model/constants";

interface Props{
    className?:string,
}
export const StatusTable:React.FC<Props> = ({className}) => {
    return (
        <div className="px-[220px]">
            <table className="w-full table-fixed border-collapse border-[rgba(190,_218,_233,_1)] text-center">
                <thead>
                <tr className="bg-[linear-gradient(90deg,_#DFF3FD_0%,_#CDEEFF_100%)]">
                    {statusValues.map((item, index) => (
                        <th key={index}
                            className="w-1/5 px-3 py-7 text-black font-semibold border-[rgba(190,_218,_233,_1)] border">{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr className="text-black transition-colors border-b">
                    {statusValues.map((item, index) => (
                            <td key={index}
                                className="w-1/5 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">{item}</td>
                    ))}
                </tr>
                </tbody>
            </table>
</div>
)
}