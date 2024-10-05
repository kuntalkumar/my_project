import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import "../helper/style.css";

const EnquiryForm = () => {
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7w040re",
        "template_f5l9xbd",
        e.target,
        "NrggkZIu0ufDSreuy"
      )
      .then(
        (result) => {
          toast({
            title: "Email sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: "Error sending email.",
            description: error.text,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
    e.target.reset(); // Clear the form after submission
  };

  return (
    <Box
      id="enquiry"
      p={4}
      maxW={{ base: "90%", md: "50%", lg: "40%" }}
      m="auto"
      mt={6}
    >
      <form id="enquiry-form" onSubmit={handleFormSubmit}>
        {/* Name Field */}
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name:</FormLabel>
          <Input type="text" name="name" placeholder="Enter your name" />
        </FormControl>

        {/* Phone Field */}
        <FormControl id="phone" mb={4} isRequired>
          <FormLabel>Phone:</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </FormControl>

        {/* Email Field */}
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email:</FormLabel>
          <Input type="email" name="email" placeholder="Enter your email" />
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" colorScheme="teal" width="full" mt={4}>
          Submit Enquiry
        </Button>
      </form>
    </Box>
  );
};

export default EnquiryForm;
