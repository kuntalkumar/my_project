import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      backgroundImage='url("https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg")'
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      height='83vh'
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      padding={10}
      alignItems='center'
      color='white'  // Change text color for better visibility on background
    >
      <Box textAlign='center' mb={4}>
        <Text fontSize='3xl' w={500} fontWeight='bold'>
          Embrace Endless Natural Beauty Right at Your Doorstep
        </Text>
        <Text fontSize='lg'>
          RERA Approved Forest View Plots
        </Text>
      </Box>

      <Flex
        justifyContent='space-between'
        width='full'
        // px={10}
        // position='absolute'
        bottom={4}
        color=''
      >
        <Box>LOGO</Box>
        <Box textAlign='right'>
          <Text>Plot size 5,000 - 15,000 sq.ft</Text>
          <Text>INR 1.25 Cr onwards</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
