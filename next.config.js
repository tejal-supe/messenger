/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // swcPlugins: [["next-superjson-plugin", {}]]
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',

      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      
      },
    ]
    // domains:[
    //   "res.cloudinary.com",
    //   "lh3.googleusercontent.com"
    // ]
  }
} 

module.exports = nextConfig
