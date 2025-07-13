import React from 'react'
import SweetMenu from '@/components/sweetMenu'
import { Container } from 'react-bootstrap'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    <Container>
        {children}
    </Container>
    <Footer />
    
    </>
  )
}

export default Layout