
// components
import TableHeader from "./header";
import TableBody from "./body";

const TableContent : React.FC = () => {

    return (
        <>
            <header className={"relative flex justify-center mt-4 mb-8"}>
                <h2 className={"first-letter:text-4xl first-letter:font-bold text-2xl text-gray-500"}> Website Users </h2>
            </header>
            <table className={"w-full"}>
                <TableHeader />
                <TableBody />
            </table>
        </>
    )
}

export default TableContent;