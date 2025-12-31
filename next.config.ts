/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://10.162.91.110:3000'
  ],

  // <-- แก้เป็น relative path
  distDir: '.next-cache',


   experimental:{
    serverActions:{
      bodySizeLimit: '5mb'
    }
  },images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'zpdrpttwsgamubhemwnn.supabase.co'
      }
    ]
  },
  eslint: {
    ignoreBuildErrors: true,
  }

  
};

module.exports = nextConfig;
