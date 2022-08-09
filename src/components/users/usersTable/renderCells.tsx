// react
import React from "react";

// next ui
import { Row, Col, Tooltip, User, Text } from "@nextui-org/react";

// redux


// assets
import { StyledBadge } from "../../../assets/icons/badge";
import { EyeIcon } from "../../../assets/icons/eye";
import { EditIcon } from "../../../assets/icons/edit";
import { DeleteIcon } from "../../../assets/icons/delete";
import { IconButton } from "../../../assets/icons/iconBtn";
import UserIcon from "../../../assets/icons/user.svg";

const RenderCells : React.FC = (item: any, columnKey: React.Key) => {
  
  const { item : user, deleteHandler } = item;

  const cellValue = user[columnKey];

  switch (columnKey) {
    case "name":
      return (
        <User squared src={UserIcon} name={cellValue} css={{ p: 0 }}>
          {user?.email}
        </User>
      );

    case "role":
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </Row>
          <Row>
            <Text b size={13} css={{mt: ".5rem", tt: "capitalize", color: "$accents7" }}>
              {user?.phone}
            </Text>
          </Row>
        </Col>
      );

    case "status":
      return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;

    case "actions":
      return (
        <Row justify="center" align="center">
          <Col css={{ d: "flex" }}>
            <Tooltip content="Details">
              <IconButton onClick={() => console.log("View user", user?.id)}>
                <EyeIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip content="Edit user">
              <IconButton onClick={() => console.log("Edit user", user?.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip
              content="Delete user"
              color="error"
              onClick={() => deleteHandler(user?.id)}
            >
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};

export default RenderCells;