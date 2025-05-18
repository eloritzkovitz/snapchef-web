/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export if needed
  // Configure rewrites to handle static HTML pages
  async rewrites() {
    return [
      {
        source: '/landing',
        destination: '/pages/index.html',
      },
      {
        source: '/about-static',
        destination: '/pages/about.html',
      },
      {
        source: '/demo-static',
        destination: '/pages/demo.html',
      },
    ];
  },
};

module.exports = nextConfig;