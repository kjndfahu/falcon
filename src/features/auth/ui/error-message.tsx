interface Props{
    error?:string;
}

export const ErrorMessage:React.FC<Props> = ({error}) => {
    if (error) {
        return (
            <div>
                <h3>{error}</h3>
            </div>
        )
    }
    return null
}