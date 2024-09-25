import { Box, Text, Image, Flex } from '@chakra-ui/react'
import React from 'react'

const Facilities = () => {
  return (
    <Flex wrap="wrap" justify="space-around" align="center" mt={10}>
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/224039/forest-mountain.svg"
          alt="Forest Trails"
        //   boxSize="100px"
        width={"80%"}
          objectFit="contain"
        />
        <Text color="green" mt={2}>Forest Trails</Text>
      </Box>
      
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/224022/river.svg"
          alt="Stream Front Promenade"
        //   boxSize="100px"
        width={"80%"}

          objectFit="contain"
        />
        <Text color="green" mt={2}>Stream Front Promenade</Text>
      </Box>
      
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/29884/river.svg"
          alt="7 Water Bodies"
        //   boxSize="100px"
        width={"80%"}

          objectFit="contain"
        />
        <Text color="green" mt={2}>7 Water Bodies</Text>
      </Box>
      
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/433171/sun-set.svg"
          alt="Sunrise & Sunset View Points"
        //   boxSize="100px"
        width={"80%"}

          objectFit="contain"
        />
        <Text color="green" mt={2}>Sunrise & Sunset View Points</Text>
      </Box>
      
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/140202/volleyball.svg"
          alt="Sand Volleyball Court"
        //   boxSize="100px"
        width={"80%"}

          objectFit="contain"
        />
        <Text color="green" mt={2}>Sand Volleyball Court</Text>
      </Box>
      
      <Box textAlign="center" p={4} width={{ base: '100%', md: '12%' }}>
        <Image 
          src="https://www.svgrepo.com/show/166746/vegetables.svg"
          alt="Vegetable farming"
        //   boxSize="100px"
        width={"80%"}

          objectFit="contain"
        />
        <Text color="green" mt={2}>Vegetable farming</Text>
      </Box>
    </Flex>
  )
}

export default Facilities
