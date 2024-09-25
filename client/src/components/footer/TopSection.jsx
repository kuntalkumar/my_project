import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const TopSection = () => {
  return (
    <Flex color={'grey'} justifyContent={'space-around'} alignItems={'center'} p={10}>
      <div>
        <Text fontSize="lg" fontWeight="bold">MAIL</Text>

        <a
            className="contact-button"
            href="mailto:kkuntal75@gmail.com"
          >
      <Text color={'green'} justifyContent={'center'} mt={4}>kkuntal75@gmail.com</Text>  
            </a>
      </div>
      <div>
        <Text fontSize="lg" fontWeight="bold">CALL</Text>
        <a
            className="contact-button"
            href="tel:+917908295742"
          >
        <Text color={'blue'} mt={4}>7908295742</Text>
        </a>
      </div>
      <div>
        <Text fontSize="lg" fontWeight="bold">CONNECT AND FOLLOW</Text>
        <Flex justifyContent={'space-around'} m={4}>


        <a
    href="https://wa.me/917908295742"
    target="_blank"
    rel="noopener noreferrer"
  >

          <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ margin: '0 8px' }} color='green' />
  </a>
          <a
            className="contact-button"
            href="tel:+917908295742"
          >
          <FontAwesomeIcon icon={faPhone} size="lg" style={{ margin: '0 8px' }} color='blue'/>
          </a>


   <a
    href="https://www.facebook.com/profile.php?id=100006958637782"
    target="_blank"
    rel="noopener noreferrer"
  >
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ margin: '0 8px' }} color='blue'/>
</a>



   <a
    href="https://www.instagram.com/i_am_kkuntal/"
    target="_blank"
    rel="noopener noreferrer"
  >
          <FontAwesomeIcon icon={faInstagram} size="lg"  style={{ margin: '0 8px' }} color='brown' />
          </a>
        </Flex>
      </div>
    </Flex>
  );
};

export default TopSection;
