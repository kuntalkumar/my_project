import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import logo from "../asset/LOGO.png";

const BottomSection = () => {
  return (
    <Flex 
     bg="#3A5A40" 
      color="#D3D3D3"
      flexDirection={'column'}  justifyContent={'center'}>

      <Flex 
      justify="space-between" // Adjusted for consistent spacing
      p={2} 
      pt="25px" 
      pb="10px"
      flexDirection={["column", "row"]} // Stack items vertically on smaller screens
      textAlign={["center", "left"]} // Center text on smaller screens
    >
        <Box fontSize="lg" fontWeight="bold">
          <img src={logo} alt="Logo" width={{ base: "120px", md: "150px", lg: "200px" }} />
        </Box>
      
      
      <Flex 
        justify="center" // Centering the links
        gap={5} 
        direction={["column", "row"]} // Stack links vertically on small screens
        align="center"
        mb={[4, 0]} // Add margin bottom for small screens
      >
        <Text as="a" href="/disclaimer" _hover={{ textDecoration: 'underline', color: "#A9A9A9" }} p={2}>Disclaimer</Text>
        <Text as="a" href="/privacy-policy" _hover={{ textDecoration: 'underline', color: "#A9A9A9" }} p={2}>Privacy Policy</Text>
        <Text as="a" href="/terms-of-use" _hover={{ textDecoration: 'underline', color: "#A9A9A9" }} p={2}>Terms of Use</Text>
        <Text as="a" href="/contact" _hover={{ textDecoration: 'underline', color: "#A9A9A9" }} p={2}>Contact</Text>
      </Flex>
      
    </Flex>
    <Flex justifyContent={'center'}>

    <Text p={2} fontSize={{ base: 'sm', md: 'md' }}>
          Ⓒ 2024 Kuntal Retreats LLP. All rights reserved.
        </Text>
    </Flex>
    </Flex>
  );
};

export default BottomSection;
