// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'

// Component
const ArtPage: FunctionComponent = () => {
  return (
    <div>
      <p>art page</p>
    </div>
  )
}

// Display Name
ArtPage.displayName = ArtPage.name

export default memo(ArtPage)
