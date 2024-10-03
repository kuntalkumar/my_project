import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import logo from "../components/asset/LOGO.png"
const Home = () => {
  return (
    <Box id="home"
      backgroundImage='url("https://plus.unsplash.com/premium_photo-1676757789342-83f83f3534ca?")'
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      height='95vh'
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      padding={10}
      alignItems='center'
      // color='yellow.800'  // Change text color for better visibility on background
    >
      <Box textAlign='center'  w={"45%"} mb={4}>
        <Text fontSize='6xl' fontWeight='bold'>
          Riverstone 
        </Text>
        <div style={{border:"1px solid black", width:"400px" ,margin:"auto"}}></div>
        <Text fontSize='lg'>
Chickballapur
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
        <Box fontSize="lg" fontWeight="bold">

            {/* <img src="https://www.svgrepo.com/show/476986/forest.svg" alt="" style={{borderRadius:"5px",width:"50px"}} /> */}
           <img src={logo} alt="Logo" width={"200px"}/>
      </Box>
            <Box textAlign='right'>
          <Text>Plot size 5,000 - 15,000 sq.ft</Text>
          <Text>INR 1.25 Cr onwards</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
