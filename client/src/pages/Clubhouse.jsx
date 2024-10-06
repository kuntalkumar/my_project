import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import "../helper/style.css";

const Clubhouse = () => {
  return (
    <Box mt={12} mb={12} textAlign="center">
      {/* Page Heading */}
      <Text
        className="pageHeading"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Responsive font size
        fontWeight="bold"
        mb={4}
      >
        Clubhouse Masterplan
      </Text>

      {/* Image */}
      <Image
        // src="https://cdn.prod.website-files.com/619f269ed5aa1e062de9e2ce/667295810e4937572f4648c0_updated%20plan-p-2000.jpeg"  // intentionally remove pic of club hpuse
        src=""
        alt="Clubhouse Masterplan image asset not available "
        width="100%"
        height={{ base: "50vh", md: "80vh", lg: "95vh" }} // Responsive height
        objectFit="cover"
        mt={4}
        borderRadius="lg" // Adds rounded corners for a cleaner look
      />
    </Box>
  );
};

export default Clubhouse;
