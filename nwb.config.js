module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'test-',
      externals: {
        react: 'React'
      }
    }
  }
}
