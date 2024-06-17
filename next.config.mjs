/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
