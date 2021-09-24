// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'

// Component
const AboutPage: FunctionComponent = () => {
  return (
    <div>
      <p>about page</p>
    </div>
  )
}

// Display Name
AboutPage.displayName = AboutPage.name

export default memo(AboutPage)
