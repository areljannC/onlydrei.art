// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { HStack, Link, Icon } from '@chakra-ui/react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { MdShare } from 'react-icons/md';

// Component
const Socials: FunctionComponent = () => (
  <HStack spacing='16px' display={{ base: 'none', lg: 'block' }}>
    <Link href='https://www.instagram.com/' target='_blank'>
      <Icon as={SiInstagram} color='#FEFEFE' width='24px' height='24px' />
    </Link>
    <Link href='https://www.tiktok.com/en/' target='_blank'>
      <Icon as={SiTiktok} color='#FEFEFE' width='24px' height='24px' />
    </Link>
    <Icon as={MdShare} color='#FEFEFE' width='24px' height='24px' />
  </HStack>
);

// Display Name
Socials.displayName = Socials.name;

export default memo(Socials);
