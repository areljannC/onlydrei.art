// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, memo } from 'react';
import { Box } from '@chakra-ui/react';

// LOCAL IMPORTS
import { Navbar } from './components';

// Types
type PropsType = {
  children?: ReactNode;
};

// Component
const Layout: FunctionComponent<PropsType> = (props: PropsType) => (
  <Box>
    <Navbar />
    <Box as='main'>{props.children}</Box>
  </Box>
);

// Display Name
Layout.displayName = Layout.name;

export default memo(Layout);
