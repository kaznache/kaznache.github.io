module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/photo_fetcher/dist/'
    : '/'
};
