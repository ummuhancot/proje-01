import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const ButtonEditProducts = ({ id }) => {
  return (
    <Button
      variant="link"
      as={Link}
      href={`/dashboard/products/${id}`}
      style={{ color: "yellow", fontSize: "20px" }}
    >
      <FaEdit />
    </Button>
  );
};

export default ButtonEditProducts;
