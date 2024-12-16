interface Props {
    question?: string;
}

export const FeedbackForm:React.FC<Props> = ({question}) => {
    return (
        <div className="flex flex-col gap-[50px]">
            <div className="flex w-full gap-[50px]">
                <div className="flex w-full flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                    <h4>Your Name</h4>
                    <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                        <input className="bg-transparent w-full focus:outline-none focus:ring-0"
                               placeholder="Anticipate the information " type="text"/>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                    <h4>{question}</h4>
                    <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                        <input className="bg-transparent w-full focus:outline-none focus:ring-0"
                               placeholder="Anticipate the information " type="text"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                <h4>Your question</h4>
                <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                    <input className="bg-transparent w-full focus:outline-none focus:ring-0"
                           placeholder="Anticipate the information " type="text"/>
                </div>
            </div>
        </div>
    )
}