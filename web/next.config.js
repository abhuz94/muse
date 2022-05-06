module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/(.*)',
        destination: '/api',
      },
    ];
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
