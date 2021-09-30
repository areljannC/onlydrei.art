import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const parseMarkdown = (directory: string, slug: string): { content: string; data: any } => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(fileContents);
  return { content: parsed.content, data: parsed.data };
};
