import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // add other config options if needed
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
