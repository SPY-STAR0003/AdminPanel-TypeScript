// react
import React, { useState, useEffect } from "react";

// assets
import infinityLoading from "./../../../assets/icons/Infinity-1s-200px.svg";
import noDataError from "../../../assets/icons/No-Data-Error.gif";

// redux
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/slices/users";

// types
import useSWR from "swr";
import ErrorIcon from "../../global/error/errorIcon";
import TableContent from "./content";

// services
import { GetUsersWithSWR } from "../../../services/users";


const UsersTable : React.FC = () => {

  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch();

  const {data : users , error} = useSWR(
    ["https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript" , page],
    GetUsersWithSWR
  )
  
  useEffect(() => {
    dispatch(setUsers({users, error}))
  }, [users, error, dispatch])

  const loading = !users || !error

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
              <TableContent />
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