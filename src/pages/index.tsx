// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'

// LOCAL IMPORTS
// import { attributes, react as HomeContent } from '../../content/home.md';
import { Home } from '../containers';

// Component
const IndexPage: FunctionComponent = () => {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

// Display Name
IndexPage.displayName = IndexPage.name

export default memo(IndexPage)
