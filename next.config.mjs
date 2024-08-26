/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures that every page is served with a trailing slash (e.g., /about/ instead of /about)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
