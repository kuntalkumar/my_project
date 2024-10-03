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
import LocateUsG from './pages/LocateUsG';
import "./helper/style.css"
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

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
        <Button 
           w={"65%"}

            bg="#ede1f5" 
            _hover={{ bg: "teal" }} 
            // onClick={() => setIsOpen(true)} 
            color="black"
            variant="solid"
            cursor="pointer"
          >
          <a href="tel:+917908295742">
            <FontAwesomeIcon icon={faPhone} size="lg" color="blue" />
          </a>
          </Button>

          <Button 
                    w={"65%"}

            bg="#ede1f5" 
            _hover={{ bg: "teal" }} 
            // onClick={() => setIsOpen(true)} 
            color="black"
            variant="solid"
            cursor="pointer"
          >
         <a
    href="https://wa.me/917908295742"
    target="_blank"
    rel="noopener noreferrer"
  >

          <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ margin: '0 8px' }} color='green' />
  </a>
          </Button>


          <Button 
             w={"65%"}

             bg="#ede1f5" 
            _hover={{ bg: "teal" }} 
            onClick={() => setIsOpen(true)} 
            color="black"
            variant="solid"
            cursor="pointer">
            <img src="https://www.svgrepo.com/show/308408/article-story-report-piece.svg" alt="" style={{width:"50px"}}/>
          </Button>
          
        </Flex>






        <PlotsAvailability />
        <Galary />
        <Masterplan />
        <Clubhouse />
        <Facilities />
        <div style={{display:"flex",justifyContent:"center",margin:"20px"}} >
        <Button  onClick={() => setIsOpen(true)} color={'white'} bg={'#074f07'} _hover={{bg:"#011701"}} variant="solid" cursor={'pointer'}>
          Download Brochure
          </Button>
        </div>
        <LocateUs />

        {/* <LocateUsG/> */}
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
