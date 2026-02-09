import { readFile } from 'fs/promises';
import { join } from 'path';

export async function getCaseStudyContent(slug: string) {
  try {
    const filePath = join(process.cwd(), 'content', 'case-studies', `${slug}.mdx`);
    const content = await readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    return null;
  }
}

export function getAllCaseStudySlugs() {
  // In a real implementation, this would read from the filesystem
  // For now, return the known slugs
  return ['property-management-platform', 'automation-pipeline', 'data-quality-system'];
}
