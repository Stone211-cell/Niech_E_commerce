/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zpdrpttwsgamubhemwnn.supabase.co',
      },
    ],
  },
  
  eslint: {
    ignoreDuringBuilds: true, // ป้องกัน lint error ทำให้ build fail
  },
};

module.exports = nextConfig;
