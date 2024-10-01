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
        src="https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/d58a1838-9262-40f6-a0c5-5cc5f4e29ffd/photoshop+plan_27-09-2024+%281%29.jpg " 
        alt="Masterplan" 
        style={{ width: '98%',height:"100vh",margin:"auto",  objectFit: 'cover',marginTop:24}} 
      />
    </div>
  );
};

export default Masterplan;
