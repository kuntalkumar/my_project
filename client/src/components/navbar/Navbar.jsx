import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ setIsOpen, isOpen }) => {
  return (
    <Box bg="#1B4D3E" p={4} color="#D3D3D3" fontSize="lg" pt={2} fontFamily="'Poppins', sans-serif">
      <Flex justify="space-between" align="center">
        <Box fontSize="lg" fontWeight="bold">
          <ScrollLink to="home" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
            My Logo
          </ScrollLink>
        </Box>
        <Flex justifyContent="space-around" gap={5}>
          <div className='navText'>
            <ScrollLink to="gallery" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
              Gallery
            </ScrollLink>
          </div>
          <div className='navText'>
            <ScrollLink to="master" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
              Master Plan
            </ScrollLink>
          </div>
          <div className='navText'>
            <ScrollLink to="location" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer"}}>
              Location
            </ScrollLink>
          </div>
          <Button 
            bg="#e6e4e3" 
            onClick={() => setIsOpen(true)} 
            color={'black'} 
            variant="solid" 
            cursor={'pointer'}
            _hover={{ bg: "#d0cfcd" }} // Add a hover effect
          >
            ENQUIRY
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
