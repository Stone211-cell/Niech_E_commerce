/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zpdrpttwsgamubhemwnn.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;