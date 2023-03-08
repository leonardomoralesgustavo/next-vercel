module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDFRONT: process.env.CLOUDFRONT
  },
  experimental: {
    outputStandalone: true
  }
}