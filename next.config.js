/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // GitHub Pages 배포 설정
  basePath: process.env.NODE_ENV === 'production' ? '/webpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webpage/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 