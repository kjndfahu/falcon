import {LogoBlock} from "@/shared/ui/logo-block";
import {Arrow} from "@/shared/ui/icons";
import {QuestionsItem} from "@/features/commands/model/constants";

interface AccordionProps {
    data: QuestionsItem[];
    openId: number | null;
    toggleAccordion: (id: number) => void;
}

export const QuestionsAccordion: React.FC<AccordionProps> = ({ data, openId, toggleAccordion }) => {
    return (
        <div className="flex flex-col w-full gap-[25px] pb-[70px]">
            {data.map((item) => (
                <div key={item.id} className="rounded-[15px] border-[1px] border-[#BEDAE9]">
                    <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full rounded-[15px] text-left px-[42px] py-12 flex justify-between items-center bg-white"
                    >
                        <span className="font-semibold text-[24px] leading-[30px] text-black">{item.title}</span>
                        <span
                            className={`transform transition-transform ${
                                openId === item.id ? "rotate-180" : "rotate-0"
                            }`}
                        >
                            <LogoBlock logo={<Arrow/>}/>
                        </span>
                    </button>
                    {openId === item.id && (
                        <div className="rounded-b-[15px] px-[42px] py-[25px] text-[18px] text-[#4B5167] bg-white">
                            {item.content.map((contentItem, index) => (
                                <div key={index} className="mb-6 cursor-pointer hover:bg-[#EDF9FF]">
                                    <p className="font-semibold text-black">{contentItem.head}</p>
                                    <p className="text-[#4B5167]">{contentItem.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
