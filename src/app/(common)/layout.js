import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import sun from "@/../public/dogafoto/sunminoto.jpg"

const Layout = ({children}) => {
  return (
    <>
      <Container className="sunny">
        <Header />
      </Container>
      
      <Container>{children}</Container>

      <Container className="night" style={{display:"flex"
        ,justifyContent:"end"
        ,alignItems:"center"
        ,height:"100vh"
      }}>
        <Footer />
      </Container>
    </>
  );
}

export default Layout