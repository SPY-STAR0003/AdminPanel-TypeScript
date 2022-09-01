// assets
import noUsers from "../../../../assets/icons/noUsers.gif";

const EmptyTable : React.FC = () => {
    return (
        <tr>
            <td colSpan={6}>
                <div className="flex flex-col items-center justify-center">
                    <img className="w-96 h-96" src={noUsers} alt="There is No Users ..." />
                    <span className={"text-sky-600 text-lg font-semibold"}> Your users list is empty ! </span>
                </div>
            </td>
        </tr>
    )
}

export default EmptyTable;