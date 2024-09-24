import React from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const EnquiryForm = () => {
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_7w040re', 'template_f5l9xbd', e.target, 'NrggkZIu0ufDSreuy')
      .then((result) => {
        toast({
          title: 'Email sent successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }, (error) => {
        toast({
          title: 'Error sending email.',
          description: error.text,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box color={'grey'} maxWidth="600px" mx="auto" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <form onSubmit={handleFormSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name:</FormLabel>
          <Input type="text" name="name" />
        </FormControl>

        <FormControl id="phone" mb={4} isRequired>
          <FormLabel>Phone:</FormLabel>
          <Input type="tel" name="phone" />
        </FormControl>

        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email:</FormLabel>
          <Input type="email" name="email" />
        </FormControl>

        <Button colorScheme="blue" type="submit" width="full">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default EnquiryForm;
