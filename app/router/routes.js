'use strict';

module.exports = app => {
  console.log(app);
  app.router.get('/ping', app.controller.movie.ping);
};

