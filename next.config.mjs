/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ["cdn.imagin.studio"]
      
    },
    typescript: {
        ignoreBuildErrors:true,
    }
  }
   
export default nextConfig

  