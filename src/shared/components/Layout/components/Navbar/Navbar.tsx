// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';

// SHARED IMPORTS
import { NAVBAR_HEIGHT } from '../../../../constants';

// LOCAL IMPORTS
import { Navlinks, Logo, Socials, MobileNav } from './components';

// Component
const Navbar: FunctionComponent = () => (
  <Flex
    as='nav'
    width='100%'
    height={{ base: NAVBAR_HEIGHT.MOBILE, lg: NAVBAR_HEIGHT.DESKTOP }}
    paddingX={{ base: '4', lg: '36', xl: '64' }}
    justifyContent='space-between'
    alignItems='center'
    backgroundColor='#202020'
  >
    <Logo />
    <Navlinks />
    <MobileNav />
  </Flex>
);

// Display Name
Navbar.displayName = Navbar.name;

export default memo(Navbar);
