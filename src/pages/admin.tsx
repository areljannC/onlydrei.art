// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// LOCAL IMPORTS
import config from '../../cms/config';

// CMS Setup
const CMS = dynamic(
  (): any =>
    import('netlify-cms-app').then((cms: any) => {
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

// Component
const AdminPage: FunctionComponent = () => (
  <Fragment>
    <Head>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
    </Head>
    <CMS />
  </Fragment>
);

// Display Name
AdminPage.displayName = AdminPage.name;

export default memo(AdminPage);
