import {tableHeaders, testValues} from "@/features/purchase-table/model/constants";


export const TariffTable = () => {
    return (
            <table className="w-full table-fixed border-collapse border-[rgba(190,_218,_233,_1)] text-center">
                <thead>
                <tr className="bg-[linear-gradient(90deg,_#DFF3FD_0%,_#CDEEFF_100%)]">
                    {tableHeaders.map((item, index) => (
                        <th key={index} className="w-1/4 px-3 py-7 text-black font-semibold border-[rgba(190,_218,_233,_1)] border">{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr className="text-black transition-colors border-b">
                    {testValues.map((item, index) => (
                        <td key={index} className="w-1/4 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">{item}</td>
                    ))}
                </tr>
                </tbody>
            </table>
    );
};