import { LeftSign, RightSign } from "../../../assets/icons/icons";


interface PaginationProps {
    page : number,
    setPage : React.Dispatch<React.SetStateAction<number>>,
    totalPages : number
}

const Pagination : React.FC<PaginationProps> = ({page, setPage, totalPages}) => {

    const nextUsersPage  = () : void => {
        page === totalPages ? setPage(1) : setPage(++page)
    }

    const prevUsersPage  = () : void => {
        page === 1 ? setPage(totalPages) : setPage(--page)
    }

    return (
        <div className={"flex space-x-3 justify-center mt-8"}>
            <div onClick={prevUsersPage} className="w-10 h-10 text-lg flex items-center justify-center bg-gray-200/80 text-gray-500 transition hover:bg-gray-800 hover:text-gray-200 cursor-pointer p-3 rounded-full">
                <LeftSign classes="w-6 h-6" />
            </div>
                {
                    Array.from(Array(totalPages).keys()).map((item : number, index : number) => (
                        <div onClick={() => setPage(item+1)} className="w-10 h-10 text-lg flex items-center justify-center bg-gray-200/80 text-gray-500 transition hover:bg-gray-800 hover:text-gray-200 cursor-pointer p-3 rounded-full" key={index}>
                            {item + 1 }
                        </div>
                    ))
                }
            <div onClick={nextUsersPage} className="w-10 h-10 text-lg flex items-center justify-center bg-gray-200/80 text-gray-500 transition hover:bg-gray-800 hover:text-gray-200 cursor-pointer p-3 rounded-full">
                <RightSign classes="w-6 h-6"  />
            </div>
        </div>
    )
}

export default Pagination;