/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'e1.pxfuel.com',
            pathname: '/**',
          },
        ],}
};

export default nextConfig;
