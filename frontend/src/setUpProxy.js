// this fle is necessary to Delete "proxy": "http://localhost:6000". 
// from package.json file because it don't run npm start command so to 
// replace "proxy" we used this file and install npm install http-proxy-middleware --save.

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:8800/api",
      changeOrigin: true,
    })
  );
};