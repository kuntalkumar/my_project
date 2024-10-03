import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, IconButton, Collapse, useDisclosure } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../asset/LOGO.png';
import './Navbar.css'; // Import CSS for animations

const Navbar = ({ setIsOpen }) => {
  const { isOpen, onToggle } = useDisclosure(); // For hamburger menu toggle
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
        {/* Logo */}
        <Box fontSize="lg" fontWeight="bold">
          <ScrollLink to="home" smooth={true} duration={500} style={{ textDecoration: 'none', cursor: "pointer" }}>
            <img src={logo} alt="Logo" width={"150px"} />
          </ScrollLink>
        </Box>

        {/* Desktop Navigation */}
        <Flex display={["none", "none", "flex"]} justifyContent="space-around" gap={5}>
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

        {/* Hamburger Menu Icon for Mobile */}
        <IconButton 
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} 
          display={["flex", "flex", "none"]} 
          onClick={onToggle}
          bg="transparent" 
          color="white"
          _hover={{ bg: "transparent" }} 
        />
      </Flex>

      {/* Mobile Navigation (Hamburger) */}
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" align="center" bg="#1B4D3E" pb={4} mt={2} display={["flex", "flex", "none"]}>
          {['gallery', 'master', 'location'].map((section) => (
            <div key={section} className='navText'>
              <ScrollLink 
                to={section} 
                smooth={true} 
                duration={500} 
                style={{ textDecoration: 'none', cursor: "pointer" }}
                onClick={onToggle} // Close the menu after a link is clicked
              >
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
      </Collapse>
    </Box>
  );
};

export default Navbar;
