/** @type {import('next').NextConfig} */
const basePath = '/AA-Studio';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
