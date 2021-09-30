// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Image, ImageProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// SHARED IMPORTS
import { NAVBAR_HEIGHT } from '../../shared/constants';

// Types
type FeaturedPieceType = {
  coverImage: string;
  name: string;
  description: string;
  slug: string;
};

type PropsType = {
  featuredPieces: Array<FeaturedPieceType>;
};

// Component
const Home: FunctionComponent<PropsType> = (props: PropsType) => {
  const router = useRouter();

  return (
    <Flex
      width='100%'
      height='100%'
      minHeight={{
        base: `calc(100vh - ${NAVBAR_HEIGHT.MOBILE})`,
        lg: `calc(100vh - ${NAVBAR_HEIGHT.DESKTOP})`
      }}
      paddingX={{ base: '4', lg: '36', xl: '64' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent='space-around'
      alignItems='center'
      flexWrap='wrap'
      backgroundColor='#202020'
    >
      {props.featuredPieces.map((featuredPiece: FeaturedPieceType, index: number) => (
        <MotionImage
          key={index}
          src={`/${featuredPiece.coverImage}`}
          width={{ base: '100%', lg: '250px', xl: '350px' }}
          height={{ base: '600px' }}
          marginBottom='8'
          objectFit='cover'
          cursor='pointer'
          onClick={() => router.push(featuredPiece.slug)}
          transformTemplate={({ scale }) => `scale(${scale})`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: '0.3' }}
        />
      ))}
    </Flex>
  );
};

const MotionImage = motion<ImageProps>(Image);

// Display Name
Home.displayName = Home.name;
MotionImage.displayName = MotionImage.name;

export default memo(Home);
