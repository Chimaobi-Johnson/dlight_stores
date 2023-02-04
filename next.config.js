/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/marvtech/**',
      },
    ],
  }
}

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '',
//         pathname: '/marvtech/**',
//       },
//     ],
//   },
// }

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// }

module.exports = nextConfig
