import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const TopSection = () => {
  return (
    <Flex color={'grey'} justifyContent={'space-around'} alignItems={'center'} p={10}>
      {/* Section for MAIL */}
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="bold">MAIL</Text>
        
        <a className="contact-button" href="mailto:kkuntal75@gmail.com">
          <Text color={'green'} mt={6} fontSize={20}>kkuntal75@gmail.com</Text>  
        </a>
      </Box>
      
      {/* Section for CALL */}
      <Box textAlign="center">
        <Text fontSize="xl" fontWeight="bold">CALL</Text>
        <a className="contact-button" href="tel:+917908295742">
          <Text color={'blue'} mt={6} fontSize={20}>7908295742</Text>
        </a>
      </Box>
      
      {/* Section for CONNECT AND FOLLOW */}
      <Box textAlign="center" mt={3}>
        <Text fontSize="xl" fontWeight="bold">CONNECT AND FOLLOW</Text>
        <Flex m={4} gap={2} justifyContent="center">
          <Box 
            p={1} 
            borderRadius="100" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
          >
            <a
              href="https://wa.me/917908295742"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="xl" color='green' />
            </a>
          </Box>
          
          <Box 
            p={1} 
            borderRadius="100" 
            boxShadow="md" 
            bg="white" 
            
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
          >
            <a className="contact-button" href="tel:+917908295742">
              <FontAwesomeIcon icon={faPhone} size="lg" color='blue' />
            </a>
          </Box>

          <Box 
            p={1} 
            borderRadius="100" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100006958637782"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" color='blue' />
            </a>
          </Box>

          <Box 
            p={1} 
            borderRadius="100" 
            boxShadow="md" 
            bg="white" 
            height="40px" 
            width="40px" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
          >
            <a
              href="https://www.instagram.com/i_am_kkuntal/"
              target="_blank"
              rel="noopener noreferrer"
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
