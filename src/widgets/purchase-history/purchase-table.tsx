import {tableHeaders} from "@/features/purchase-table/model/constants";
import {formatDate} from "@/shared/lib/formatDate";
import {formatType} from "@/shared/lib/formatType";

interface Props {
    activeSubs: any[];
}

export const TariffTable: React.FC<Props> = ({activeSubs}) => {
    return (
        <table className="w-full table-fixed border-collapse border-[rgba(190,_218,_233,_1)] text-center">
            <thead>
                <tr className="bg-[linear-gradient(90deg,_#DFF3FD_0%,_#CDEEFF_100%)]">
                    {tableHeaders.map((item, index) => (
                        <th 
                            key={index} 
                            className="w-1/4 px-3 py-7 text-black font-semibold border-[rgba(190,_218,_233,_1)] border"
                        >
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {activeSubs.map((item, index) => (
                    <tr key={index} className="text-black transition-colors border-b">
                        <td className="w-1/4 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">
                            {formatDate(item.createdAt)}
                        </td>
                        <td className="w-1/4 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">
                            #{item.trackingNumber}
                        </td>
                        <td className="w-1/4 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">
                            {formatType(item.type)}
                        </td>
                        <td className="w-1/4 px-3 py-7 border-[rgba(190,_218,_233,_1)] border">
                            {item.price}$
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};