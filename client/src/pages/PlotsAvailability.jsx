import { Flex, Text, Image, Box } from '@chakra-ui/react'
import React from 'react'

const PlotsAvailability = () => {
  return (
    <div>
      <Flex justify="space-around" align="center" mt={5} mb={20}>
        {/* First Image */}
        <Box textAlign="center" boxSize={{ base: '100px', md: '150px' }} p={4}>
          <Image 
            src="https://www.svgrepo.com/show/241430/map-maps-and-location.svg"
            alt="Area Map"
            boxSize="100%"
            objectFit="cover"
          />
          <Text color="green" mt={2}>54 Acres</Text>
        </Box>
        
        {/* Second Image */}
        <Box textAlign="center" boxSize={{ base: '100px', md: '150px' }} p={4}>
          <Image 
            src="https://www.svgrepo.com/show/238052/map-maps-and-location.svg"
            alt="Plot Icon"
            boxSize="100%"
            objectFit="cover"
          />
          <Text color="green" mt={2}>Only 141 Plots</Text>
        </Box>
        
        {/* Third Image */}
        <Box textAlign="center" boxSize={{ base: '100px', md: '150px' }} p={4}>
          <Image 
            src="https://www.svgrepo.com/show/481600/forest.svg"
            alt="Forest"
            boxSize="100%"
            objectFit="cover"
          />
          <Text color="green" mt={2}>32 Acres of Open Spaces</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default PlotsAvailability
