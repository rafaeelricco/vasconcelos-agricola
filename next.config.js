/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_HOST_DOMAIN}`]
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
