/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

module.exports = () => {
  const plugins = [withPWA]
  const config = plugins.reduce((acc, next) => next(acc))
  return config
}

