// api for vote-video-by-chat
// https://github.com/Kylin93CN/vote-video-by-chat
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/routes')(app);

  // app.io.of('/')
  // app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
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
