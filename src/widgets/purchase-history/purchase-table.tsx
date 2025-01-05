import {tableHeaders, testValues} from "@/features/purchase-table/model/constants";
import {formatDate, formatType} from "@/shared/lib/formats";

interface Props {
    subs: any[];
}


export const TariffTable: React.FC<Props> = ({subs}) => {
    const filteredSubs = subs.map(({createdAt, price, trackingNumber, type}) => ({
        createdAt,
        price,
        trackingNumber,
        type
    }))

    console.log(filteredSubs)

    return (
        <table className="w-full table-fixed border-collapse border-[rgba(190,_218,_233,_1)] text-center">
            <thead>
            <tr className="sm:bg-[linear-gradient(90deg,_#DFF3FD_0%,_#CDEEFF_100%)]">
                {tableHeaders.map((item, index) => (
                    <th key={index}
                        className="w-1/4 sm:px-3 px-1 sm:py-7 py-2 text-black font-semibold border-[rgba(190,_218,_233,_1)] sm:border">{item}</th>
                ))}
            </tr>
            </thead>
            <tbody>

            {filteredSubs.map((item, index) => (
                <tr
                    key={index}
                    className="text-black transition-colors border-b"
                >
                    <td className="w-1/4 sm:px-3 px-1 sm:py-7 py-2 border-[rgba(190,_218,_233,_1)] sm:border">{formatDate(item.createdAt)}</td>
                    <td className="w-1/4 sm:px-3 px-1 sm:py-7 py-2 border-[rgba(190,_218,_233,_1)] sm:border">#{item.trackingNumber}</td>
                    <td className="w-1/4 sm:px-3 px-1 sm:py-7 py-2 border-[rgba(190,_218,_233,_1)] sm:border">{formatType(item.type)}</td>
                    <td className="w-1/4 sm:px-3 px-1 sm:py-7 py-2 border-[rgba(190,_218,_233,_1)] sm:border">{item.price}$</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};