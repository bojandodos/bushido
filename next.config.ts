/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // ✅ this is the correct property
    },
  },
};

module.exports = nextConfig;
