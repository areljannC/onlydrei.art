// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';

// LOCAL IMPORTS
import { Navlinks, Logo, Socials, MobileNav } from './components';

// Component
const Navbar: FunctionComponent = () => (
  <Flex
    as='nav'
    width='100%'
    height='120px'
    paddingX={{ base: '4', lg: '36', xl: '64' }}
    justifyContent='space-between'
    alignItems='center'
    backgroundColor='#202020'
  >
    <Navlinks />
    <Logo />
    <Socials />
    <MobileNav />
  </Flex>
);

// Display Name
Navbar.displayName = Navbar.name;

export default memo(Navbar);
