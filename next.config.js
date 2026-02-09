/** @type {import('next').NextConfig} */
const basePath = '/AA-Studio';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
