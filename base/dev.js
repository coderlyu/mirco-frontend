module.exports = {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/main/static': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/main': ''
      }
    },
    '/custom/static': {
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/custom': ''
      }
    },
  }
}