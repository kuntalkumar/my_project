import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({setIsOpen,isOpen}) => {
// console.log(isOpen)
  return (
    <Box bg="green.700" p={4} color="white"   fontSize={"lg"} pt={2}>
      <Flex justify="space-between" align="center">
        <Box fontSize="lg" fontWeight="bold">
          <ScrollLink to="home" smooth={true} duration={500} style={{ textDecoration: 'none',cursor:"pointer" }} >
            <img src="https://www.svgrepo.com/show/476986/forest.svg" alt="" style={{borderRadius:"5px",width:"50px"}} />
          </ScrollLink>
        </Box>
<Flex justifyContent={'space-around'} gap={5}>

        <ScrollLink to="gallery" smooth={true} duration={500} style={{ textDecoration: 'none',  margin: '0 8px' ,cursor:"pointer" }}>
          Gallery
        </ScrollLink>
        <ScrollLink to="master" smooth={true} duration={500} style={{ textDecoration: 'none', margin: '0 8px',cursor:"pointer"  }}>
          Master Plan
        </ScrollLink>
        <ScrollLink to="location" smooth={true} duration={500} style={{ textDecoration: 'none', margin: '0 8px',cursor:"pointer"  }}>
          Location
        </ScrollLink>

        <Button bg="#e6e4e3" onClick={() => setIsOpen(true)} color={'black'} variant="solid" cursor={'pointer'}>
        {/* <ScrollLink to="enquiry" smooth={true} duration={500} style={{ textDecoration: 'none', color: 'black' }}> */}
            ENQUIRY
          {/* </ScrollLink> */}
        </Button>
        </Flex>

      </Flex>
    </Box>
  );
};

export default Navbar;
