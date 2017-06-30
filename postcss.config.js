module.exports = {
  plugins: {
    cssnano: {
      autoprefixer: {
        add: true,
        flexbox: 'no-2009',
      },
      safe: true,
    },
  },
};
