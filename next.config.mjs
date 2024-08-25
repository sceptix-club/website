/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sceptix-club.github.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
