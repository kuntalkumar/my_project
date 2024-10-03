import React, { useState, useEffect } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../asset/LOGO.png';
import './Navbar.css'; // Import CSS for animations

const Navbar = ({ setIsOpen }) => {
  const [buttonText, setButtonText] = useState("Enquiry");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyPress = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'i') {
      event.preventDefault();
      handleClickEnq();
    }
  };

  const handleClickEnq = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setButtonText(prevText => (prevText === "Enquiry" ? "Ctrl + i" : "Enquiry"));
        setIsAnimating(false);
      }, 300); // Duration of the fade-out effect
    }, 3000);

    const keyPressHandler = (event) => handleKeyPress(event);
    window.addEventListener('keydown', keyPressHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  return (
    <Box bg="#1B4D3E" p={4} color="#D3D3D3" fontSize="lg" pt={2} fontFamily="'Poppins', sans-serif">
      <Flex justify="space-between" align="center">
        <Box fontSize="lg" fontWeight="bold">
          <ScrollLink to="home" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
            <img src={logo} alt="Logo" width={"150px"} />
          </ScrollLink>
        </Box>
        <Flex justifyContent="space-around" gap={5}>
          {['gallery', 'master', 'location'].map((section) => (
            <div key={section} className='navText'>
              <ScrollLink to={section} smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </div>
          ))}
          <Button 
            bg="#e6e4e3" 
            onClick={handleClickEnq} 
            color={'black'} 
            variant="solid" 
            cursor={'pointer'}
            _hover={{ bg: "#d0cfcd" }} 
            w={"100px"}
          >
            <span className={isAnimating ? 'fade-out' : 'fade-in'}>
              {buttonText}
            </span>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
