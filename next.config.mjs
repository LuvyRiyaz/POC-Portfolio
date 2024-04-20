/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables Image Optimization
  },
};

export default nextConfig;
