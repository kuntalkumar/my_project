import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <Box bg="green.600" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Box fontWeight="bold" fontSize="lg">
          <ScrollLink to="home" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
            Logo
          </ScrollLink>
        </Box>

        <ScrollLink to="gallery" smooth={true} duration={500} style={{ textDecoration: 'none', margin: '0 8px' }}>
          Gallery
        </ScrollLink>
        <ScrollLink to="master" smooth={true} duration={500} style={{ textDecoration: 'none', margin: '0 8px' }}>
          Master Plan
        </ScrollLink>
        <ScrollLink to="location" smooth={true} duration={500} style={{ textDecoration: 'none', margin: '0 8px' }}>
          Location
        </ScrollLink>

        <Button bg="#e6e4e3" color={'black'} variant="solid">
          <ScrollLink to="enquiry" smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}>
            ENQUIRY
          </ScrollLink>
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
