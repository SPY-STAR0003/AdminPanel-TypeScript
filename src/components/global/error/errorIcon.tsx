

interface ErrorIconProps {
    icon : any,
    text: string
}

const ErrorIcon : React.FC<ErrorIconProps> = ({icon, text}) => (

    <div className="w-full h-full flex flex-col items-center justify-center">
        <img className={"w-96 h-96"} src={icon} alt="Loading" />
        <span className={"text-sky-600 text-lg font-semibold"}> {text} </span>
    </div>

)


export default ErrorIcon;