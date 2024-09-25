import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import LocateUs from './pages/LocateUs';
import EnquiryForm from './pages/EnquiryForm';
import Navbar from './components/navbar/Navbar';
import { Box, ChakraProvider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import theme from './theme';  // Import the custom theme
import Home from './pages/Home';
import Galary from './pages/Galary';
import Masterplan from './pages/Masterplan';
import Clubhouse from './pages/Clubhouse';
import PlotsAvailability from './pages/PlotsAvailability';
import Facilities from './pages/Facilities';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Home />
        <PlotsAvailability/>
        <Galary />
        <Masterplan />
        <Clubhouse />
        <Facilities/>
        <LocateUs />
        <Footer />



        {/* Modal for EnquiryForm */}
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent mt={20} bg={'#3c6148'} color={""}>
            <ModalHeader>Enquiry Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EnquiryForm />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" type="submit" form="enquiry-form">
                Submit
              </Button>
              <Button colorScheme="red" ml={3} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default App;
