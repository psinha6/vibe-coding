/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'localhost'],
    unoptimized: true,
  },
  // Ensure public files can be requested correctly
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ]
  },
}

module.exports = nextConfig 