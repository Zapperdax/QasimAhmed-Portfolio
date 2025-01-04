const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**", // Matches all paths
      },
    ],
  },
};

export default nextConfig;
