// react
import React, { useState, useEffect } from "react";

// assets
import infinityLoading from "./../../../assets/icons/infinityLoading.svg";
import noDataError from "../../../assets/icons/noData.gif";

// redux
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/slices/users";

// types
import useSWR from "swr";
import ErrorIcon from "../../global/error/errorIcon";
import TableContent from "./content";

// services
import { GetUsersWithSWR } from "../../../services/users";
import Pagination from "../../global/pagination";


const UsersTable : React.FC = () => {

  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch();

  const {data , error} = useSWR(
    ["https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript" , page],
    GetUsersWithSWR
  )
  
  useEffect(() => {
    dispatch(setUsers({error, data, page}))
  }, [data, error,page, dispatch])

  const loading = !data?.users || !error

  return (
    <>
      {
        loading
        ?
          error?.message === "Failed to fetch"
            ? 
              <ErrorIcon
                icon={noDataError}
                text={"Opos! No Data Found ! Please Refersh the Page ! "}
              />
            :
              <>
                <TableContent />
                <Pagination page={page} setPage={setPage} totalPages={data?.meta.totalPages} />
              </>
        :
          <ErrorIcon
            icon={infinityLoading}
            text={"Getting data form server ..."}
          />
      }
    </>
  );
}

export default UsersTable;