// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import { HStack, Link } from '@chakra-ui/react';

// Component
const Navlinks: FunctionComponent = () => (
  <HStack spacing='16px' display={{ base: 'none', lg: 'block' }}>
    <NextLink href='/' passHref>
      <Link color='#FEFEFE'>Home</Link>
    </NextLink>
    <NextLink href='/about' passHref>
      <Link color='#FEFEFE'>About</Link>
    </NextLink>
    <NextLink href='/art' passHref>
      <Link color='#FEFEFE'>Art</Link>
    </NextLink>
    <NextLink href='/series' passHref>
      <Link color='#FEFEFE'>Series</Link>
    </NextLink>
  </HStack >
);

// Display Name
Navlinks.displayName = Navlinks.name;

export default memo(Navlinks);
