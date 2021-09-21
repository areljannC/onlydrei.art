// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <ChakraProvider>
      <props.Component {...props.pageProps} />
    </ChakraProvider>
  </Fragment>
)

// Display Name
App.displayName = App.name

export default memo(App)
