/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['via.placeholder.com'],
    domains: ['images.pexels.com'],
  },
};
