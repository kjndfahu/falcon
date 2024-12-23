interface Props{
    title?:string,
    logo?:React.ReactNode,
    styles?: string;
    child?:React.ReactNode;
    isClicked:boolean;
    setIsClicked:(isClicked:boolean) => void;
}

export const AdminBlocks:React.FC<Props> = ({title, isClicked, setIsClicked, logo, child, styles}) => {
    return (
        <div onClick={() => setIsClicked(true)} className={`flex items-center justify-center gap-[40px] font-semibold w-[413px] ${styles} px-[25px] pt-[28px] pb-[34px] border-[1px] text-black text-[25px] rounded-[15px] border-[#BEDAE9]`}>
            {title}
            {logo}
            {isClicked && child}
        </div>
    )
}