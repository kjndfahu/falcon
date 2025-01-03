interface Props{
    label1: string,
    label2: string,
    activeType: string;
    setActiveType: (activeType: string) => void;
}
export const BalanceType:React.FC<Props> = ({activeType, label1, label2, setActiveType}) => {
    const plans = [
        { label: label1 },
        { label: label2 },
    ];
    return (
            <div className="flex w-full gap-[30px] bg-[#f8fbff]  rounded-[12px]">
                {plans.map((plan) => (
                    <div
                        key={plan.label}
                        onClick={() => setActiveType(plan.label)}
                        className={` flex w-full justify-center items-center rounded-[10px] gap-[10px] p-[5px] text-[22px] leading-[23px] font-medium cursor-pointer transition ${
                            activeType === plan.label
                                ? 'bg-[#005dff] text-white'
                                : 'bg-white text-[#000] border border-[#d7e7ff]'
                        }`}
                    >
                        {plan.label}
                    </div>
                ))}
            </div>

    )
}