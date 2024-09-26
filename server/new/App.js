import React from 'react';
import Footer from './components/footer/Footer';
import LocateUs from './pages/LocateUs';
import EnquiryForm from './pages/EnquiryForm';
import Navbar from './components/navbar/Navbar';
import { Box, ChakraProvider } from '@chakra-ui/react'; // Correct import

const App = () => {
  return (
    <ChakraProvider  >
    <Box bg={'none'}>
    <Navbar />
      <EnquiryForm />
      <LocateUs />
      <Footer />
    </Box>
     
    </ChakraProvider>
  );
};

export default App;
