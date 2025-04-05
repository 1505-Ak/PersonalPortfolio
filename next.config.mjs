/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    domains: [
      'img.icons8.com',
      'logos-world.net',
      'www.sas.com',
      'hadoop.apache.org',
      'spark.apache.org',
      'pytorch.org',
      'scikit-learn.org'
    ],
  },
};

export default nextConfig; 