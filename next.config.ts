import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Common category name variations
      {
        source: '/tools/design-tools',
        destination: '/tools/design',
        permanent: true,
      },
      {
        source: '/tools/data-analysis',
        destination: '/tools/analytics',
        permanent: true,
      },
      {
        source: '/tools/ai-tools',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tools/writing-tools',
        destination: '/tools/writing',
        permanent: true,
      },
      {
        source: '/tools/image-tools',
        destination: '/tools/images',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
