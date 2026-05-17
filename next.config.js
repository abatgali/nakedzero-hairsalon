const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next.js 16: `domains` is deprecated; use `remotePatterns` for safer host whitelisting.
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "logos-world.net" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
};

module.exports = nextConfig;
