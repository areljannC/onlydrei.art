// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';

// SHARED IMPORTS
import { NAVBAR_HEIGHT } from '../../../../shared/constants';

// Types
type PropsType = {
  artPost: any;
};

// Component
const ArtPostTemplate: FunctionComponent<PropsType> = (props: PropsType) => (
  <Flex
    width='100%'
    height='100%'
    minHeight={{
      base: `calc(100vh - ${NAVBAR_HEIGHT.MOBILE})`,
      lg: `calc(100vh - ${NAVBAR_HEIGHT.DESKTOP})`
    }}
    paddingX={{ base: '4', lg: '36', xl: '64' }}
    flexDirection='column'
    justifyContent='flex-start'
    alignItems='center'
    flexWrap='wrap'
    backgroundColor='#202020'
  >
    <Heading as='h1' color='#FEFEFE' margin='8' children={props.artPost.title} />
    <Image
      src={`/${props.artPost.image}`}
      maxWidth={{ base: '100%', lg: '800px' }}
      maxHeight={{ base: '100%', lg: '800px' }}
      marginBottom='8'
      objectFit='cover'
    />
    <Text color='#FEFEFE' margin='8' children={props.artPost.description} />
  </Flex>
);

// Display Name
ArtPostTemplate.displayName = ArtPostTemplate.name;

export default memo(ArtPostTemplate);
