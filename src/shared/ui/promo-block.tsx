interface Props{
    styles:string;
    title:string;
}

export const PromoBlock:React.FC<Props> = ({styles, title}) => {
    return (
        <div className={`${styles} font-light rounded-[5px] text-white leading-4 text-[14px] px-1 py-[7px]`}>
            {title}
        </div>
    )
}