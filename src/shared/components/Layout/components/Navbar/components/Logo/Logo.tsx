// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Flex flexDirection='column' alignItems='center'>
    <Text fontSize='18px' color='#FEFEFE'>
      Andrei Likmuan
    </Text>
    <Text fontSize='36px' color='#FEFEFE' lineHeight='18px'>
      Porfolio
    </Text>
  </Flex>
);

// Display Name
Logo.displayName = Logo.name;

export default memo(Logo);
