import { Box, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import "../helper/style.css"


const Facilities = () => {
  return (
    <Box>
      <Flex justifyContent={'center'} 
      className='defaultPageParagraph' 
      fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} // Responsive font size
      fontWeight={"bold"}>
        Amenities 
      </Flex>
        <Flex className='defaultPageParagraph' fontSize={{ base: 'md', md: 'lg' }} justifyContent={"center"}>Luxury Living with Unmatched Features</Flex>
      <Flex wrap="wrap" justify="space-around" align="center" m={12}>
        {/* Cards Array */}
        {[
          { src: "https://www.svgrepo.com/show/509507/tennis-court.svg", alt: "Tennis Court", label: "Tennis Court" },
          { src: "https://www.svgrepo.com/show/403152/cricket-game.svg", alt: "Cricket Arena", label: "Cricket Arena" },
          { src: "https://www.svgrepo.com/show/480495/basketball-6.svg", alt: "Basketball Court", label: "Basketball Court" },
          { src: "https://www.svgrepo.com/show/67357/childs-playing-in-playgrpound.svg", alt: "Kids Play Area", label: "Kids Play Area" },
          { src: "https://www.svgrepo.com/show/220987/stadium.svg", alt: "Amphitheatre", label: "Amphitheatre" },
          { src: "https://www.svgrepo.com/show/166532/man-meditating.svg", alt: "Meditation Platform", label: "Meditation Platform" },
          { src: "https://www.svgrepo.com/show/383978/cycle-cycling-cyclist.svg", alt: "Cycling Path", label: "Cycling Path" },
          { src: "https://www.svgrepo.com/show/323600/walk.svg", alt: "Jogging Track", label: "Jogging Track" },
          { src: "https://www.svgrepo.com/show/29884/river.svg", alt: "Modern Landscaping", label: "Modern Landscaping" },
          { src: "https://www.svgrepo.com/show/212752/pull-up-gym.svg", alt: "Outdoor Gym", label: "Outdoor Gym" },
          { src: "https://www.svgrepo.com/show/286339/fountain.svg", alt: "Fountains", label: "Fountains" },
          { src: "https://www.svgrepo.com/show/359771/dog-park.svg", alt: "Dog Park", label: "Dog Park" },
        ].map((facility, index) => (
          <Box 
            key={index}
            textAlign="center" 
            p={4} 
            width={{ base: '40%', sm: '40%', md: '22%', lg: '15%' }} // 2 cards on mobile, 4 on tablet, 6 on desktop
            height={{ base: '140px', md: '180px' }}  // Set a height for medium and larger screens
            boxShadow="sm" 
            bg="#f2f7f4" 
            borderRadius="md"
            m={2} // Adds some margin between the boxes
          >
            <Image 
              src={facility.src}
              alt={facility.alt}
              width="60%" 
              objectFit="contain" 
              mx="auto"
            />
            <Text className='defaultPageParagraph' mt={2} fontSize={{ base: 'sm', md: 'md' }}> {/* Adjust font size for readability */}
              {facility.label}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Facilities;
