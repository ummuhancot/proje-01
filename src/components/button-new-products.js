"use client"
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegPlusSquare } from "react-icons/fa";

const ButtonNewProducts = ({ id }) => {


  return (
    <Button variant="success" 
    style={{ color: "yellow",fontSize:"10px"}}>
      <FaRegPlusSquare /> New
    </Button>
  );
};

export default ButtonNewProducts;
