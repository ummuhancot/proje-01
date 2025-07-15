import Minato from '@/components/minato';
import React from 'react'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
  return (
    <div>
      
      <Minato/>
      <Container>
        {children}
        </Container>
    </div>
  );
}

export default Layout