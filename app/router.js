'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // api for vote-video-by-chat
  // https://github.com/Kylin93CN/vote-video-by-chat

  require('./router/routes')(app);

  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/news', 'news.list');
  // router.get('/search', controller.test.index);
  // router.get('/mysql', controller.mysql.index);
  // router.get('/user/:id/:name', controller.test.info);
  // router.post('/form', controller.test.post);
  // router.post('/user', controller.user.create);
  // router.get('index', '/home/index', controller.home.xxx);
  // router.get('/index', controller.home.xxx);
};
