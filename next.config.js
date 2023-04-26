/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn.torten.lol"
    ]
  }
}

module.exports = nextConfig
