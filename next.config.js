/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    path: '',
  },
  env: {
    KHALTI: process.env.KHALTI,
    MONGODB: process.env.MONGODB,
  },
};

module.exports = nextConfig;
