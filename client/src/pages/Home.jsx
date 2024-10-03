import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import logo from "../components/asset/LOGO.png";
import "../helper/style.css"

const Home = () => {
  return (
    <Box
      id="home"
      backgroundImage='url("https://plus.unsplash.com/premium_photo-1676757789342-83f83f3534ca?")'
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      height='95vh'
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      padding={{ base: 4, md: 10 }} // Responsive padding
      alignItems='center'
    >
      {/* Heading and Subtitle */}
      <Box textAlign='center' w={{ base: '90%', md: '60%', lg: '45%' }} mb={4}>
        <Text fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} fontWeight='bold' color="white">
          Riverstone
        </Text>
        <div style={{ border: "1px solid white", width: "200px", margin: "auto" }}></div>
        <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">Chickballapur</Text>
      </Box>

      {/* Logo and Plot Info */}
      <Flex
        justifyContent='space-between'
        width='full'
        px={{ base: 4, md: 10 }} // Responsive padding
        alignItems="center"
        position="relative"
        bottom={4}
        color="white" // Set text color to white for better contrast
      >
        {/* Logo */}
        <Box fontSize="lg" fontWeight="bold">
          <img src={logo} alt="Logo" width={{ base: "120px", md: "150px", lg: "200px" }} />
        </Box>

        {/* Plot Information */}
        <Box textAlign={{ base: 'center', md: 'right' }}>
          <Text fontSize={{ base: 'sm', lg: 'lg' }}>Plot size 5,000 - 15,000 sq.ft</Text>
          <Text fontSize={{ base: 'sm', lg: 'lg' }}>INR 1.25 Cr onwards</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
