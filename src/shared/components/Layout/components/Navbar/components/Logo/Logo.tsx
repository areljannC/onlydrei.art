// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Flex flexDirection='column' alignItems='center'>
    <Text fontSize={{ base: '12px', lg: '18px' }} color='#FEFEFE'>
      Andrei Likmuan
    </Text>
    <Text fontSize={{ base: '24px', lg: '36px' }} color='#FEFEFE' lineHeight='18px'>
      Porfolio
    </Text>
  </Flex>
);

// Display Name
Logo.displayName = Logo.name;

export default memo(Logo);
