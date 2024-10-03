import { Flex, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';
import "../helper/style.css"
const PlotsAvailability = () => {
  return (
    <div>
      <Flex 
        direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
        justify="space-around" 
        align="center" 
        m={12}
        gap={{ base: 4, md: 8 }} // Set gap between boxes (4 for mobile, 8 for larger screens)
      >
        {/* First Image */}
        <Box 
          textAlign="center" 
          boxSize={{ base: '180px', md: '180px' }} 
          p={4} 
          boxShadow="sm" 
          borderRadius="md" 
          bg="#f2f7f4"
        >
          <Image 
            src="https://www.svgrepo.com/show/241430/map-maps-and-location.svg"
            alt="Area Map"
            boxSize="70%" // Adjusted size of image
            objectFit="contain"
            mx="auto"
          />
          <Text className='defaultPageParagraph' mt={2} fontSize={{ base: 'sm', md: 'md' }}>
            54 Acres
          </Text>
        </Box>
        
        {/* Second Image */}
        <Box 
          textAlign="center" 
          boxSize={{ base: '180px', md: '180px' }} 
          p={4} 
          boxShadow="sm" 
          borderRadius="md" 
          bg="#f2f7f4"
        >
          <Image 
            src="https://www.svgrepo.com/show/377309/drop-area.svg"
            alt="Plot Icon"
            boxSize="70%" 
            objectFit="contain"
            mx="auto"
          />
          <Text className='defaultPageParagraph' mt={2} fontSize={{ base: 'sm', md: 'md' }}>
            Only 141 Plots
          </Text>
        </Box>
        
        {/* Third Image */}
        <Box 
          textAlign="center" 
          boxSize={{ base: '180px', md: '180px' }} 
          p={4} 
          boxShadow="sm" 
          borderRadius="md" 
          bg="#f2f7f4"
        >
          <Image 
            src="https://www.svgrepo.com/show/481600/forest.svg"
            alt="Forest"
            boxSize="70%" 
            objectFit="contain"
            mx="auto"
          />
          <Text className='defaultPageParagraph' mt={2} fontSize={{ base: 'sm', md: 'md' }}>
            32 Acres of Open Spaces
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default PlotsAvailability;
