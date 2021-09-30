// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// SHARED IMPORTS
import { NAVBAR_HEIGHT } from '../../shared/constants';

// Types
type PropsType = {
  content: {
    headline: string;
    summary: string;
  };
};

// Component
const About: FunctionComponent<PropsType> = (props: PropsType) => (
  <Flex
    width='100%'
    height='100%'
    minHeight={{
      base: `calc(100vh - ${NAVBAR_HEIGHT.MOBILE})`,
      lg: `calc(100vh - ${NAVBAR_HEIGHT.DESKTOP})`
    }}
    paddingX={{ base: '4', lg: '36', xl: '64' }}
    flexDirection='column'
    justifyContent='center'
    alignItems={{ base: 'flex-start', lg: 'center' }}
    flexWrap='wrap'
    backgroundColor='#202020'
  >
    <ReactMarkdown
      children={props.content.headline}
      components={ChakraUIRenderer({
        p: (props) => (
          <Text color='#FEFEFE' fontSize='32px'>
            {props.children}
          </Text>
        )
      })}
    />
    <ReactMarkdown
      children={props.content.summary}
      components={ChakraUIRenderer({
        p: (props) => (
          <Text color='#FEFEFE' fontSize='20px'>
            {props.children}
          </Text>
        )
      })}
    />
  </Flex>
);

// Display Name
About.displayName = About.name;

export default memo(About);
