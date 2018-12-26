'use strict';

module.exports = app => {
  console.log(app);
  app.router.get('/ping', app.controller.movie.ping);
  app.router.get('/getList', app.controller.movie.getList);
  app.router.put('/addScore', app.controller.movie.addScore);
};

