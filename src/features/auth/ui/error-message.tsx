interface Props{
    error?:string;
}

export const ErrorMessage:React.FC<Props> = ({error}) => {
    if (error) {
        return (
            <div className="pt-5 text-[18px] font-normal text-red-500">
                <h3>{error}</h3>
            </div>
        )
    }
    return null
}