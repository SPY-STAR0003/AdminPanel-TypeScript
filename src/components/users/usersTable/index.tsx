// react
import React from "react";

// next ui
import { Table } from "@nextui-org/react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { setUsers } from "../../../store/slices/users";
// components
import RenderCells from "./renderCells";

// schema
import { tableColumns } from "../../../schema/users"

// types
import { UserType } from "../../../types/users";

// services
import { DeleteUser, GetUsers } from "../../../services/users";

const UsersTable : React.FC = () => {

  const users : UserType[] = useSelector((state : RootState ) => state.users.usersList )
  
  const dispatch = useDispatch<AppDispatch>()

  const deleteHandler = async (id : number) => {
    await DeleteUser(id)
    let newUsers = await GetUsers()
    dispatch(setUsers(newUsers))
  }

  return (
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header columns={tableColumns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item: UserType) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{RenderCells({item, deleteHandler}, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
  );
}

export default UsersTable;