import { Text } from '@chakra-ui/react';
import React from 'react';

const Masterplan = () => {
  return (
    <div id='master' style={{ width: '100%', textAlign: 'center',marginTop:"20px" , marginBottom:12 }} >
    <div>
    <Text className='pageHeading'>
    Masterplan</Text>
    <p className='defaultPageParagraph'>
    Nature-inspired living in every sq.ft</p>
    </div>
   
      <img 
        src="https://cdn.prod.website-files.com/619f269ed5aa1e062de9e2ce/66aa5e3d7d5afedf81c6db99_master%20update3.png" 
        alt="Masterplan" 
        style={{ width: '100%',height:"80%",margin:"auto", height: 'auto', objectFit: 'cover',marginTop:24}} 
      />
    </div>
  );
};

export default Masterplan;
