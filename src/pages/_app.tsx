// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// SHARED IMPORTS
import { Layout } from '../shared/components';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <ChakraProvider theme={extendTheme({
      fonts: {
        heading: `'Red Rose', cursive`,
        body: `'Red Rose', cursive`,
        mono: `'Red Rose', cursive`,
      }
    })}>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </ChakraProvider>
  </Fragment>
);

// Display Name
App.displayName = App.name;

export default memo(App);
