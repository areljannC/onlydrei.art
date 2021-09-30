// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import NextLink from 'next/link';
import {
  useDisclosure,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  VStack,
  Link
} from '@chakra-ui/react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

// Component
const MobileNav: FunctionComponent = () => {
  const disclosure = useDisclosure();

  return (
    <Fragment>
      <IconButton
        onClick={disclosure.onOpen}
        icon={<Icon as={RiMenu3Fill} color='#FEFEFE' width='24px' height='24px' />}
        aria-label='Open Nav Menu'
        colorScheme='blackAlpha'
        display={{ lg: 'none' }}
        backgroundColor='transparent'
        border='none'
      />
      <Drawer isOpen={disclosure.isOpen} onClose={disclosure.onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent backgroundColor='#FEFEFE'>
          <Flex flexDirection='column' alignItems='flex-start' padding='4'>
            <IconButton
              onClick={disclosure.onClose}
              icon={<Icon as={RiCloseFill} color='#202020' width='24px' height='24px' />}
              aria-label='Close Nav Menu'
              colorScheme='blackAlpha'
              width='fit-content'
              marginLeft='auto'
              backgroundColor='transparent'
              border='none'
            />
            <VStack alignItems='flex-start' marginBottom='12'>
              <NextLink href='/' passHref>
                <Link color='#202020' fontSize='24' onClick={disclosure.onClose}>
                  Home
                </Link>
              </NextLink>
              <NextLink href='/about' passHref>
                <Link color='#202020' fontSize='24' onClick={disclosure.onClose}>
                  About
                </Link>
              </NextLink>
              <NextLink href='/art' passHref>
                <Link color='#202020' fontSize='24' onClick={disclosure.onClose}>
                  Art
                </Link>
              </NextLink>
              <Link
                color='#202020'
                fontSize='24'
                onClick={disclosure.onClose}
                href='https://www.instagram.com/_justdreii'
                target='_blank'
              >
                Instagram
              </Link>
            </VStack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

// Display Name
MobileNav.displayName = MobileNav.name;

export default memo(MobileNav);
