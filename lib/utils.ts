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

/**
 * Get the basePath for static assets
 * Uses env var in server components, detects from URL in client components
 */
export function getBasePath(): string {
  // In server components or build time, use env var
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_BASE_PATH || '/AA-Studio';
  }
  // In client components, detect from URL
  const pathname = window.location.pathname;
  if (pathname.startsWith('/AA-Studio')) {
    return '/AA-Studio';
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || '/AA-Studio';
}

/**
 * Get the full path for a static asset (image, etc.)
 * Prepends basePath if needed for absolute paths
 * Works in both server and client components
 */
export function getAssetPath(path: string): string {
  if (!path.startsWith('/')) {
    return path; // Relative paths don't need basePath
  }
  const basePath = getBasePath();
  // Only prepend basePath if path doesn't already include it
  if (!path.startsWith(basePath)) {
    return `${basePath}${path}`;
  }
  return path;
}
