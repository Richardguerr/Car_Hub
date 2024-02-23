/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ["cdn.imagin.studio"]
      
    },
    experimental: {
        images: {
          unoptimized: true,
        },
      },
  }
   
export default nextConfig

  