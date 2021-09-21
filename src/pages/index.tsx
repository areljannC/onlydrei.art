// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'

// Component
const HomePage: FunctionComponent = () => {
  return <div>hello</div>
}

// Display Name
HomePage.displayName = HomePage.name

export default memo(HomePage)
