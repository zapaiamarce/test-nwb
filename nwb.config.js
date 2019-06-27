module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "testNWB",
      externals: {
        react: "React"
      }
    }
  }
};
