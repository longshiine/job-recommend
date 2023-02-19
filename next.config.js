/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://seer-f00cd.web.app//", // 배포 경로
  },
};

module.exports = nextConfig;
