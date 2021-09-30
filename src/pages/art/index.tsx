// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

// SHARED IMPORTS
import { parseMarkdown } from '../../shared/utils';

// LOCAL IMPORTS
import { Art } from '../../containers';

// Types
type PropsType = {
  artPosts: Array<any>;
};

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const artPostsDirectory = path.join(process.cwd(), 'content/art');
  const fileNames: string[] = fs.readdirSync(artPostsDirectory);
  const artPosts: { artPost: any }[] = fileNames
    .filter((file: string): boolean => file.endsWith('.md'))
    .map((fileName: string): { artPost: any } => parseMarkdown(artPostsDirectory, fileName).data)
    .sort((a: any, b: any): any => {
      const aSplit = a.date.split(' ');
      const bSplit = b.date.split(' ');
      return (
        new Date(
          parseInt(bSplit[2], 10),
          parseInt(bSplit[1], 10) - 1,
          parseInt(bSplit[0], 10)
        ).valueOf() -
        new Date(
          parseInt(aSplit[2], 10),
          parseInt(aSplit[1], 10) - 1,
          parseInt(aSplit[0], 10)
        ).valueOf()
      );
    });

  return { props: { artPosts } };
};

// Component
const ArtPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Art artPosts={props.artPosts} />
);

// Display Name
ArtPage.displayName = ArtPage.name;

export default memo(ArtPage);
