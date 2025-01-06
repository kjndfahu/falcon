'use client'

interface Props{
    className?:string,
    graphic: string,
    setGraphic:(graphic: string) => void,
}

export const GraphicSwitcher:React.FC<Props> = ({graphic, setGraphic}) => {

    return (
        <div className="flex w-[250px]">
            <div className="flex flex-col text-[18px] gap-3">
                <div
                    className="rounded-[15px] font-medium border-[1px] border-[#DDE6EF] bg-[#F3F5F9] px-[16px] py-[18px]">
                    <select
                        id="role"
                        value={graphic}
                        onChange={(e) => setGraphic(e.target.value)}
                        required
                        className="bg-transparent w-full focus:outline-none focus:ring-0"
                    >
                        <option value="Sells">Сумма всех продаж</option>
                        <option value="Resellers">Сумма продаж всех реселлеров</option>
                        <option value="Referrals">Сумма продаж пользователей по реф ссылке</option>
                    </select>
                </div>
            </div>
        </div>
    )
}