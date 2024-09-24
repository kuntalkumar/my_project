import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="green.600" p={4} color="white">
      <Flex justify="space-between" align="center">
        {/* Logo Section */}
        <Box fontWeight="bold" fontSize="lg">
          Logo
        </Box>

        {/* Links Section */}
          <Box cursor="pointer">Gallery</Box>
          <Box cursor="pointer">Master Plan</Box>
          <Box cursor="pointer">Location</Box>

        {/* Enquiry Button */}
        <Button bg="#e6e4e3" color={'black'} variant="solid">
          ENQUIRY
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
