// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, memo } from 'react';
import { GetStaticProps } from 'next';

// SHARED IMPORTS
import { parseMarkdown } from '../shared/utils';

// LOCAL IMPORTS
import { About } from '../containers';

// Types
type PropsType = {
  children?: ReactNode;
  content: {
    headline: string;
    summary: string;
  };
};

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const { data } = parseMarkdown('content/pages', 'about');
  return { props: { content: data } };
};

// Component
const AboutPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <About content={props.content} />
);

// Display Name
AboutPage.displayName = AboutPage.name;

export default memo(AboutPage);
