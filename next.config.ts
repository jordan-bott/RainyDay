import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://tenor.com/bdgAb.gif')],
  },
}

export default nextConfig
