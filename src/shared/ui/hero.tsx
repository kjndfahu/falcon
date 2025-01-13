interface Props{
    title: string;
    text?:string;
    banner: string;

}
export const Hero:React.FC<Props> = ({title, text, banner}) => {
    return (
        <div className={`flex flex-col ${banner} bg-cover mds:bg-center bg-[center_80%] mds:mx-0 mx-4 mds:my-0 my-4 mds:rounded-[0px] rounded-[15px] items-start text-white gap-[30px] mds:justify-center mds:px-[220px] mds:text-[96px] sml:text-[48px] text-[32px] mds:leading-[87px] leading-[52px] mds:p-0 p-[40px] sml:font-medium font-semibold mds:h-[600px] h-[631px]`}>
            {title}
            <p className="sml:text-[18px] text-[16px] font-normal leading-[28px]">{text}</p>
        </div>
    )
}