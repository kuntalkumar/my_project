import { Text, Box } from "@chakra-ui/react";
import React from "react";
import "../helper/style.css";

const Masterplan = () => {
  return (
    <Box id="master" width="100%" textAlign="center" mt={8} mb={3}>
      <Text
        className="pageHeading"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Responsive font size
        fontWeight="bold"
      >
        Masterplan
      </Text>
      <Text
        className="defaultPageParagraph"
        fontSize={{ base: "md", md: "lg" }}
        mb={4}
      >
        A Blueprint for Sustainable Luxury{" "}
      </Text>
      <img
        src="https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/d58a1838-9262-40f6-a0c5-5cc5f4e29ffd/photoshop+plan_27-09-2024+%281%29.jpg"
        alt="Masterplan"
        style={{
          width: "98%",
          height: "95vh",
          margin: "auto",
          objectFit: "cover",
          marginTop: "24px",
        
        }}
      />
    </Box>
  );
};

export default Masterplan;
