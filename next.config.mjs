/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  // The dev-tools badge would leak into reviewer/validator screenshots.
  devIndicators: false,
};
export default nextConfig;
