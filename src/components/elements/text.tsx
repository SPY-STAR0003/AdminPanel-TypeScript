
interface TextProps {
    label ?: string
    text ?: string
}

const Text : React.FC<TextProps> = ({text, label}) => {

    return (
        <p className={"hover:translate-x-2 transition"}>
            <span className={"text-lg text-gray-400 mr-4 font-medium"}> {label} </span>
            <span className="text-xl text-gray-600"> {text} </span>
        </p>
    )
}


export default Text;