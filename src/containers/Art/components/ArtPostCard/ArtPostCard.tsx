// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, FlexProps, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Types
type PropsType = {
  artPost: any;
};

// Component
const ArtPostCard: FunctionComponent<PropsType> = (props: PropsType) => {
  const router = useRouter();

  return (
    <MotionFlex
      width={{ base: '100%', lg: '60%' }}
      height='275px'
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent={{ base: 'center', lg: 'initial' }}
      alignItems={{ base: 'center', lg: 'initial' }}
      cursor='pointer'
      borderBottomWidth={{ base: 'none', lg: '1px' }}
      borderBottomStyle={{ base: 'none', lg: 'solid' }}
      borderBottomColor={{ base: 'none', lg: '#FEFEFE' }}
      onClick={() => router.push(props.artPost.slug)}
      transformTemplate={({ scale }) => `scale(${scale})`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: '0.3' }}
    >
      <Image width='250px' height='250px' src={`/${props.artPost.image}`} objectFit='cover' />
      <Flex
        height='100%'
        marginLeft='16'
        flexDirection='column'
        display={{ base: 'none', lg: 'initial' }}
      >
        <Heading
          as='h2'
          fontSize='24px'
          color='#FEFEFE'
          marginBottom='4'
          children={props.artPost.title}
        />
        <Text fontSize='18px' color='#FEFEFE' children={props.artPost.description} />
      </Flex>
    </MotionFlex>
  );
};

const MotionFlex = motion<FlexProps>(Flex);

// Display Name
ArtPostCard.displayName = ArtPostCard.name;
MotionFlex.displayName = MotionFlex.name;

export default memo(ArtPostCard);
