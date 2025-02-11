/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Desativa PWA no modo desenvolvimento
})

module.exports = {
  ...withPWA,
  reactStrictMode: true,
}
