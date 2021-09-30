// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';

// SHARED IMPORTS
import { parseMarkdown } from '../../shared/utils';

// LOCAL IMPORTS
import { ArtPostTemplate } from '../../containers/Art/components';

// Types
type PropsType = {
  artPost: any;
};

// Static Render
const artPostsDirectory = path.join(process.cwd(), 'content/art');
const fileNames: string[] = fs.readdirSync(artPostsDirectory);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = fileNames
    .filter((fileName: string): boolean => fileName.endsWith('.md'))
    .map((fileName: string): string => parseMarkdown(artPostsDirectory, fileName).data.slug);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params.artPostSlug as string;
  const fileName: string = fileNames
    .filter((fileName: string): boolean => fileName.endsWith('.md'))
    .find((fileName: string): boolean => {
      const { data } = parseMarkdown(artPostsDirectory, fileName);
      return data.slug.substring(5, data.slug.length) === slug;
    });
  return { props: { artPost: parseMarkdown(artPostsDirectory, fileName).data } };
};

// Component
const ArtPostPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <ArtPostTemplate artPost={props.artPost} />
);

// Display Name
ArtPostPage.displayName = ArtPostPage.name;

export default memo(ArtPostPage);
