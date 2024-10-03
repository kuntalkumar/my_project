import { Box, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const Facilities = () => {
  return (
    <Box>
<Flex justifyContent={'center'} className='defaultPageParagraph' fontSize={"2xl"} fontWeight={"bold"}>
 Amenities 
</Flex>
    <Flex wrap="wrap" justify="space-around" align="center" m={12}>
      {/* First Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} // Set same width for all
        height="170px" // Set same height for all
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/509507/tennis-court.svg"
          alt="Forest Trails"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Tennis Court</Text>
      </Box>
      
      {/* Second Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/403152/cricket-game.svg"
          alt="Stream Front Promenade"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Cricket Arena</Text>
      </Box>
      
      {/* Third Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/480495/basketball-6.svg"
          alt="7 Water Bodies"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Basketball Court</Text>
      </Box>
      
      {/* Fourth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/67357/childs-playing-in-playgrpound.svg"
          alt="Sunrise & Sunset View Points"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Kids Play Area</Text>
      </Box>
      
      {/* Fifth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/220987/stadium.svg"
          alt="Sand Volleyball Court"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
       Amphitheatre</Text>
      </Box>
      
      {/* Sixth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/166532/man-meditating.svg"
          alt="Vegetable farming"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Meditation Platform</Text>
      </Box>
    </Flex>





    <Flex wrap="wrap" justify="space-around" align="center" m={12}>
      {/* First Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} // Set same width for all
        height="170px" // Set same height for all
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/383978/cycle-cycling-cyclist.svg"
          alt="Forest Trails"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Cycling Path</Text>
      </Box>
      
      {/* Second Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/323600/walk.svg"
          alt="Stream Front Promenade"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Jogging Track</Text>
      </Box>
      
      {/* Third Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/29884/river.svg"
          alt="7 Water Bodies"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Modern Landcaping</Text>
      </Box>
      
      {/* Fourth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/212752/pull-up-gym.svg"
          alt="Sunrise & Sunset View Points"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Outdoor Gym</Text>
      </Box>
      
      {/* Fifth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/286339/fountain.svg"
          alt="Sand Volleyball Court"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
       Fountains</Text>
      </Box>
      
      {/* Sixth Box */}
      <Box 
        textAlign="center" 
        p={4} 
        width={{ base: '140px', md: '180px' }} 
        height="170px" 
        boxShadow="sm" 
        bg="#f2f7f4" 
        borderRadius="md"
      >
        <Image 
          src="https://www.svgrepo.com/show/100489/gate-of-india.svg"
          alt="Vegetable farming"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Grand Gated Entrance</Text>
      </Box>
    </Flex>
    </Box>
  )
}

export default Facilities;
