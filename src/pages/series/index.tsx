// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'

// Component
const SeriesPage: FunctionComponent = () => {
  return (
    <div>
      <p>series page</p>
    </div>
  )
}

// Display Name
SeriesPage.displayName = SeriesPage.name

export default memo(SeriesPage)
