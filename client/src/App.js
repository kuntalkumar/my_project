import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import LocateUs from './pages/LocateUs';
import EnquiryForm from './pages/EnquiryForm';
import Navbar from './components/navbar/Navbar';
import { Box, ChakraProvider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Flex } from '@chakra-ui/react';
import theme from './theme';  // Import the custom theme
import Home from './pages/Home';
import Galary from './pages/Galary';
import Masterplan from './pages/Masterplan';
import Clubhouse from './pages/Clubhouse';
import PlotsAvailability from './pages/PlotsAvailability';
import Facilities from './pages/Facilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./helper/style.css"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const buttonStyle = {
    w: "65%",
    bg: "#ede1f5",
    _hover: { bg: "teal" },
    color: "black",
    variant: "solid",
    cursor: "pointer"
  };

  return (
    <ChakraProvider theme={theme}>
      <Box gap={10}>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Home />

        <Flex 
          position="fixed" 
          bottom={4} 
          right={4} 
          flexDirection="column" 
          alignItems="center" 
          gap={2}
          zIndex="1500"
        >
          <Button {...buttonStyle}>
            <a href="tel:+917908295742" aria-label="Call us">
              <FontAwesomeIcon icon={faPhone} size="lg" color="blue" />
            </a>
          </Button>

          <Button {...buttonStyle}>
            <a
              href="https://wa.me/917908295742"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ margin: '0 8px' }} color='green' />
            </a>
          </Button>

          <Button {...buttonStyle} onClick={() => setIsOpen(true)}>
            <img src="https://www.svgrepo.com/show/308408/article-story-report-piece.svg" alt="Enquiry Form" style={{ width: "50px" }} />
          </Button>
        </Flex>

        <PlotsAvailability />
        <Galary />
        <Masterplan />
        <Clubhouse />
        <Facilities />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button w={"250px"} h={"50px"} onClick={() => setIsOpen(true)} color={'white'} bg={'#074f07'} _hover={{ bg: "#011701" }} p={"10px"} variant="solid" cursor={'pointer'}>
            Download
             Brochure
          </Button>
        </div>

        <LocateUs />
        <Footer />

        {/* Modal for EnquiryForm */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={20} bg="" color="white">
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
