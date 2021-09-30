// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { VStack } from '@chakra-ui/react';

// SHARED IMPORTS
import { NAVBAR_HEIGHT } from '../../shared/constants';

// LOCAL IMPORTS
import { ArtPostCard } from './components';

// Types
type PropsType = {
  artPosts: Array<any>;
};

// Component
const Art: FunctionComponent<PropsType> = (props: PropsType) => (
  <VStack
    width='100%'
    height='100%'
    minHeight={`calc(100vh - ${NAVBAR_HEIGHT.DESKTOP})`}
    paddingX={{ base: '4', lg: '36', xl: '64' }}
    justifyContent='flex-start'
    alignItems='center'
    flexWrap='wrap'
    spacing='8'
    backgroundColor='#202020'
  >
    {props.artPosts.map((artPost, index: number) => (
      <ArtPostCard key={index} artPost={artPost} />
    ))}
  </VStack>
);

// Display Name
Art.displayName = Art.name;

export default memo(Art);
