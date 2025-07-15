import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Layout = ({children}) => {
  return (
    <>
      <Container className="sunny">
        <Header />
      </Container>
      
      <Container>{children}</Container>

      <Container className="night">
        <Footer />
      </Container>
    </>
  );
}

export default Layout