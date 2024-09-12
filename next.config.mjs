/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'avatar.baram.nexon.com'
      ]
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://ggamt.info:8090/api/:path*',
          // destination: 'http://localhost:8090/api/:path*',
        },
      ];
    },
  };
export default nextConfig;
