// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Text } from '@chakra-ui/react';

// Component
const Home: FunctionComponent = () => {
  return <Text>Home Page</Text>
}

// Display Name
Home.displayName = Home.name

export default memo(Home)
