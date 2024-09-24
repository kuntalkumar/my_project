import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const TopSection = () => {
  return (
    <Flex color={'silver'} justifyContent={'space-around'} alignItems={'center'} p={10}>
      <div>
        <Text fontSize="lg" fontWeight="bold">MAIL</Text>
        <Text color={'green'}>sales@example.co.in</Text>
      </div>
      <div>
        <Text fontSize="lg" fontWeight="bold">CALL</Text>
        <Text color={'green'}>9090909090</Text>
      </div>
      <div>
        <Text fontSize="lg" fontWeight="bold">CONNECT AND FOLLOW</Text>
        <Flex justifyContent={'space-around'}>
          <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ margin: '0 8px' }} color='green' />
          <FontAwesomeIcon icon={faPhone} size="lg" style={{ margin: '0 8px' }} color='blue'/>
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ margin: '0 8px' }} color='blue'/>
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ margin: '0 8px' }} color='brown' />
        </Flex>
      </div>
    </Flex>
  );
};

export default TopSection;
