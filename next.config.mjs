/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (options.dev) {
      config.devtool = 'eval-source-map'
    } else {
      config.devtool = 'hidden-source-map'
    }
    return config
  }
}

export default nextConfig
