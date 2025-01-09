'use client';

interface Props {
    activeDays: string;
    setActiveDays: (days: string) => void;
}

export const DaysBlock: React.FC<Props> = ({ activeDays, setActiveDays }) => {
    const plans = [
        { label: '30', save: null },
        { label: '90', save: 'Save 10%' },
        { label: '180', save: 'Save 50%' },
    ];

    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex mds:flex-row flex-col w-full mdbvp:gap-[30px] gap-[10px] bg-[#f8fbff] border border-[#d7e7ff] mdbvp:p-5 p-2 rounded-[12px]">
                {plans.map((plan) => (
                    <div
                        key={plan.label}
                        onClick={() => setActiveDays(plan.label)}
                        className={`flex w-full justify-center items-center rounded-[10px] gap-[10px] p-[5px] mdbvp:text-[22px] text-[18px] leading-[23px] font-medium cursor-pointer transition ${
                            activeDays === plan.label
                                ? 'bg-[#005dff] text-white'
                                : 'bg-white text-[#000] border border-[#d7e7ff]'
                        }`}
                    >
                        {plan.label} days
                        {plan.save && (
                            <span className={`text-[14px] rounded-[5px] font-bold px-[5px] py-[7px] ${
                                activeDays === plan.label
                                    ? 'bg-[#003d99] text-white'
                                    : 'bg-[#d7e7ff] font-normal text-white bg-[linear-gradient(102.67deg,_#6072B1_3.55%,_#1725A4_100%)]'
                            }`}>
                                {plan.save}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
