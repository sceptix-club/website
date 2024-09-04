/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "sceptix-club.github.io",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default withPlaiceholder(nextConfig);
