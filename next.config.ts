import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.designveloper.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
  devServer: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1757093458406.cluster-ulqnojp5endvgve6krhe7klaws.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
