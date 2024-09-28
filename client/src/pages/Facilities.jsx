import { Box, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const Facilities = () => {
  return (
    <Box>
<Flex justifyContent={'center'} className='defaultPageParagraph' fontSize={"2xl"} fontWeight={"bold"}>
Open Air Amenities & Experiences
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
          src="https://www.svgrepo.com/show/224039/forest-mountain.svg"
          alt="Forest Trails"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Forest Trails</Text>
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
          src="https://www.svgrepo.com/show/224022/river.svg"
          alt="Stream Front Promenade"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Stream Front Promenade</Text>
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
        7 Water Bodies</Text>
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
          src="https://www.svgrepo.com/show/433171/sun-set.svg"
          alt="Sunrise & Sunset View Points"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Sunrise & Sunset View Points</Text>
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
          src="https://www.svgrepo.com/show/140202/volleyball.svg"
          alt="Sand Volleyball Court"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Sand Volleyball Court</Text>
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
          src="https://www.svgrepo.com/show/166746/vegetables.svg"
          alt="Vegetable farming"
          width="60%" 
          objectFit="contain" 
          mx="auto"
        />
        <Text className='defaultPageParagraph' mt={2}>
        Vegetable farming</Text>
      </Box>
    </Flex>
    </Box>
  )
}

export default Facilities;
