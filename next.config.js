/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["event-buddy-uploads.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
