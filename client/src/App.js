import React from 'react';
import Footer from './components/footer/Footer';
import LocateUs from './pages/LocateUs';
import EnquiryForm from './pages/EnquiryForm';
import Navbar from './components/navbar/Navbar';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';  // Import the custom theme
import Home from './pages/Home';
import Galary from './pages/Galary';
import Masterplan from './pages/Masterplan';
import Clubhouse from './pages/Clubhouse';
import Allroutes from './routes/Allroutes';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
      
        <Navbar />
        <Home/>
        <Galary/>
        <Masterplan/>
        <Clubhouse/>
        <EnquiryForm />
        <LocateUs />

        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
// position 
// ..aapp
// email 
// user otp
// map view pin 
