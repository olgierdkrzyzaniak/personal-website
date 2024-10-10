/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/'],
    },
  },
};

export default nextConfig;
