"use client"
import React from 'react';
import { Button } from 'react-bootstrap';
import { MdDeleteSweep } from "react-icons/md";

const ButtonDeleteProducts = ({ id }) => {
  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete this product?")
    if (confirmDelete) return;
  };

  return (
    <Button variant="link" onClick={handleDelete} style={{ color: "red", fontSize:"25px"}}>
      <MdDeleteSweep />
    </Button>
  );
};

export default ButtonDeleteProducts;
