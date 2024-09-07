/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Legg til Sanity CDN-domenet
  },
};

export default nextConfig;
