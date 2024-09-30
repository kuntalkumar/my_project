import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const BottomSection = () => {
  return (
    <Flex bg="#3A5A40" color={"#D3D3D3"} justify="space-between"  p={2} pt={"25px"} pb={"10px"}>
      <Flex justify="space-between" gap={5} >
        <Text as="a" href="" _hover={{ textDecoration: 'underline' }} p={2}>Disclaimer</Text>
        <Text as="a" href="" _hover={{ textDecoration: 'underline' }} p={2}>Privacy Policy</Text>
        <Text as="a" href="" _hover={{ textDecoration: 'underline' }} p={2}>Terms of Use</Text>
        <Text as="a" href="" _hover={{ textDecoration: 'underline' }}p={2}>Contact</Text>
      </Flex>

      <Text textAlign="center"  p={2}>
        Ⓒ 2024 Kuntal Retreats LLP. All rights reserved.
      </Text>
    </Flex>
  );
};

export default BottomSection;
