import { Text, Box } from '@chakra-ui/react';
import React from 'react';

const Masterplan = () => {
  return (
    <Box id='master' width='100%' textAlign='center' mt={8} mb={3}>
      <Text className='pageHeading' fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight='bold'>
        Masterplan
      </Text>
      <Text className='defaultPageParagraph' fontSize={{ base: 'md', md: 'lg' }} mb={4}>
        Nature-inspired living in every sq.ft
      </Text>
      <img 
        src="https://kelsa-clients-production.s3.ap-south-1.amazonaws.com/uploads/accounts/5/pipelines/10/files/d58a1838-9262-40f6-a0c5-5cc5f4e29ffd/photoshop+plan_27-09-2024+%281%29.jpg" 
        alt="Masterplan" 
        style={{ width: '98%', height: 'auto', margin: 'auto', objectFit: 'cover', marginTop: '24px' }} 
      />
    </Box>
  );
};

export default Masterplan;
