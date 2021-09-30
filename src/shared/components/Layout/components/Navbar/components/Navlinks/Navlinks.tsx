// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import { HStack, Link, Icon } from '@chakra-ui/react';
import { SiInstagram } from 'react-icons/si';

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
    <Link href='https://www.instagram.com/_justdreii' target='_blank'>
      <Icon as={SiInstagram} color='#FEFEFE' width='24px' height='24px' />
    </Link>
  </HStack>
);

// Display Name
Navlinks.displayName = Navlinks.name;

export default memo(Navlinks);
