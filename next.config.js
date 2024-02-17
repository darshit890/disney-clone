/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "image.tmdb.org",
        },
  
        {
          protocol: "https",
          hostname: "links.papareact.com",
        },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;