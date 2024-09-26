import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.600" p={4} color="white">
      <Flex justify="space-between" align="center">
        {/* Logo Section */}
        <Box fontWeight="bold" fontSize="lg">
          Logo
        </Box>

        {/* Links Section */}
        <Flex gap={6}>
          <Box cursor="pointer">Gallery</Box>
          <Box cursor="pointer">Master Plan</Box>
          <Box cursor="pointer">Location</Box>
        </Flex>

        {/* Enquiry Button */}
        <Button colorScheme="teal" variant="solid">
          ENQUIRY
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
