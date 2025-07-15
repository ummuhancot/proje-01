"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import { NavLink } from 'react-bootstrap';

//header ve footer kısmının active kısmını özelleştirdim
export const Linker = (props) => {


    const pathname = usePathname();

  return (
    <NavLink {...props} className={pathname === props.href ? "active" : ""} >
      {props.children}
    </NavLink>
  );
}

