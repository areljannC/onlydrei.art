// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// SHARED IMPORTS
import { Layout } from '../shared/components';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const router = useRouter();

  return router.pathname.includes('/admin') ? (
    <props.Component {...props.pageProps} />
  ) : (
    <Fragment>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            heading: `'Red Rose', cursive`,
            body: `'Red Rose', cursive`,
            mono: `'Red Rose', cursive`
          }
        })}
      >
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
};

// Display Name
App.displayName = App.name;

export default memo(App);
