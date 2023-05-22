/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/open-calm-chat",
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
