// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, memo } from 'react';
import { GetStaticProps } from 'next';

// SHARED IMPORTS
import { parseMarkdown } from '../shared/utils';

// LOCAL IMPORTS
import { Home } from '../containers';

// Types
type FeaturedPieceType = {
  coverImage: string;
  name: string;
  description: string;
  slug: string;
};

type PropsType = {
  children?: ReactNode;
  featuredPieces: Array<FeaturedPieceType>;
};

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const { data } = parseMarkdown('content/pages', 'home');
  return { props: { featuredPieces: data.featuredPieces } };
};

// Component
const IndexPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Home featuredPieces={props.featuredPieces} />
);

// Display Name
IndexPage.displayName = IndexPage.name;

export default memo(IndexPage);
