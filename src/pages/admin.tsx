// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react'
import dynamic from 'next/dynamic'

// LOCAL IMPORTS
import config from '../../cms/config'

// CMS Setup
const CMS = dynamic(
  (): any =>
    import('netlify-cms-app').then((cms: any) => {
      cms.init({ config })
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
)

// Component
const AdminPage: FunctionComponent = () => <CMS />

// Display Name
AdminPage.displayName = AdminPage.name

export default memo(AdminPage)
