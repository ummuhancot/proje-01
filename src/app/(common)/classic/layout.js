import ClassicMenu from '@/components/classicMenu';
import React from 'react'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
  return <div> 
   
    <ClassicMenu />
    <Container>
    {children}
    </Container>
    </div>;
}

export default Layout