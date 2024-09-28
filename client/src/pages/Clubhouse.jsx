import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import "../helper/style.css"
const Clubhouse = () => {
  return (
    <Box mt={12} mb={12} >
      <Text className='pageHeading' >
      Clubhouse Masterplan</Text>
      <img src="https://cdn.prod.website-files.com/619f269ed5aa1e062de9e2ce/667295810e4937572f4648c0_updated%20plan-p-2000.jpeg" alt="" 
                style={{ width: '100%',height:"80%",margin:"auto", height: 'auto', objectFit: 'cover',marginTop:"10px" }} 

      />
    </Box>
  )
}

export default Clubhouse
