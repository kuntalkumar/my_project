import { Text } from '@chakra-ui/react';
import React from 'react';

const Masterplan = () => {
  return (
    <div id='master' style={{ width: '100%', textAlign: 'center',marginTop:"20px" }} >
    <div style={{color:"green"}}>
      <Text fontSize={"5xl"} fontWeight={"bold"}>Masterplan</Text>
    <p>Nature-inspired living in every sq.ft</p>
    </div>
   
      <img 
        src="https://cdn.prod.website-files.com/619f269ed5aa1e062de9e2ce/66aa5e3d7d5afedf81c6db99_master%20update3.png" 
        alt="Masterplan" 
        style={{ width: '90%',height:"80%",margin:"auto", height: 'auto', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default Masterplan;
