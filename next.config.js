/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix:"",
  images: {
    domains: [
      ''
    ]
  }
}

module.exports = nextConfig
