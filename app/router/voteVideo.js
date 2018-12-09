'use strict';

module.exports = app => {
  app.router.get('/vv/list', app.controller.vv.list);
  app.router.get('/vv/detail', app.controller.vv.detail);
};
