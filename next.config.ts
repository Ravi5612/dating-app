/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/', // ✅ Use leading slash
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
