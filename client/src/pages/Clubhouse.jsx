import { Text } from '@chakra-ui/react'
import React from 'react'

const Clubhouse = () => {
  return (
    <div>
      <Text fontSize="5xl" fontWeight={"bold"} textAlign="center" color="green" mb={4}>
      Clubhouse Masterplan</Text>
      <img src="https://cdn.prod.website-files.com/619f269ed5aa1e062de9e2ce/667295810e4937572f4648c0_updated%20plan-p-2000.jpeg" alt="" 
                style={{ width: '90%',height:"80%",margin:"auto", height: 'auto', objectFit: 'cover' }} 

      />
    </div>
  )
}

export default Clubhouse
