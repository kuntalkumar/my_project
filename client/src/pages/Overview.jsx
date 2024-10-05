import { Text, Box } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Box id="master" width="100%" textAlign="center" mt={8} mb={3}>
      <Text
        className="pageHeading"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Responsive font size
        fontWeight="bold"
      >
        Overview
      </Text>
      <Text
        className="defaultPageParagraph"
        fontSize={{ base: "md", md: "lg" }}
        mb={4}
      >
        Nestled in 300 acres of lush greenery, this serene retreat perfectly
        balances nature and convenience. Just 5 minutes from the national
        highway and close to the International Airport and Isha Foundation, this
        hidden gem connects you to tranquility while keeping you within reach.
        Embrace rolling hills, flowing streams, and the soothing song of
        birds—all just a short drive from the city
      </Text>
    </Box>
  );
};

export default Overview;
