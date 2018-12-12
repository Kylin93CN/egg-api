'use strict';

module.exports = app => {
  console.log(app);
  app.router.get('/vv/ping', app.controller.vvMovie.ping);
  // app.router.get('/vv/detail', app.controller.vv.detail);
};
