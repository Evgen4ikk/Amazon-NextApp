/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL
  },
  images: {
    domains: ['picsum.photos', 'loremflickr.com', 'microless.com', 'avatars.githubusercontent.com']
  },
  transpilePackages: ['@acme/ui', 'lodash-es'],

}

module.exports = nextConfig