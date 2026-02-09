export default function imageLoader({ src, width, quality }) {
  // Get basePath - use env var (available at build and runtime)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/AA-Studio';
  
  // If src already includes basePath, return as is
  if (src.startsWith(basePath)) {
    return src;
  }
  
  // If src starts with /, prepend basePath
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  // Relative paths return as is
  return src;
}
