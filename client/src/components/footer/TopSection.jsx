import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const TopSection = () => {
  return (
    <Flex 
      color={'grey'} 
      justifyContent={'space-around'} 
      alignItems={'center'} 
      p={10} 
      flexDirection={["column", "row"]} // Stack items on small screens
    >
      {/* Section for MAIL */}
      <Box textAlign="center" mb={[4, 0]}> {/* Margin bottom for smaller screens */}
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">MAIL</Text>
        <a className="contact-button" href="mailto:kkuntal75@gmail.com">
          <Text color={'green'} mt={6} fontSize={{ base: 'md', md: 'lg' }}>kkuntal75@gmail.com</Text>
        </a>
      </Box>
      
      {/* Section for CALL */}
      <Box textAlign="center" mb={[4, 0]}> {/* Margin bottom for smaller screens */}
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">CALL</Text>
        <a className="contact-button" href="tel:+917908295742">
          <Text color={'blue'} mt={6} fontSize={{ base: 'md', md: 'lg' }}>7908295742</Text>
        </a>
      </Box>
      
      {/* Section for CONNECT AND FOLLOW */}
      <Box textAlign="center">
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">CONNECT AND FOLLOW</Text>
        <Flex m={4} gap={2} justifyContent="center">
          {/* WhatsApp Icon */}
          <Box 
            p={1} 
            borderRadius="full" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            _hover={{ bg: 'green.100' }} // Hover effect
          >
            <a
              href="https://wa.me/917908295742"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color='green' />
            </a>
          </Box>
          
          {/* Phone Icon */}
          <Box 
            p={1} 
            borderRadius="full" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            _hover={{ bg: 'blue.100' }} // Hover effect
          >
            <a className="contact-button" href="tel:+917908295742" aria-label="Call">
              <FontAwesomeIcon icon={faPhone} size="lg" color='blue' />
            </a>
          </Box>

          {/* Facebook Icon */}
          <Box 
            p={1} 
            borderRadius="full" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            _hover={{ bg: 'blue.100' }} // Hover effect
          >
            <a
              href="https://www.facebook.com/profile.php?id=100006958637782"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" color='blue' />
            </a>
          </Box>

          {/* Instagram Icon */}
          <Box 
            p={1} 
            borderRadius="full" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            _hover={{ bg: 'pink.100' }} // Hover effect
          >
            <a
              href="https://www.instagram.com/i_am_kkuntal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" color='brown' />
            </a>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TopSection;
