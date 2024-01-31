/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com",
      "cdn-kansino-staging-cdn-bucket.s3.eu-central-1.amazonaws.com",
      "cloudinary.kansino.nl",
    ],
  },
};

module.exports = nextConfig;
