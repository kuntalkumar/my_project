import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../../theme"
import Gallery from '../../pages/Galary'
import DashboardHome from './DashboardHome'
const Dashboard = () => {
  return (
    <ChakraProvider theme={theme}>
    
      <Navbar/>
      <DashboardHome/>
      <Footer/>
    </ChakraProvider>
  )
}

export default Dashboard
