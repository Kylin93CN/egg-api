'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541989938176_5913';

  // add your config here
  config.middleware = [];

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // news config
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // FIXME: dev config
  config.security = {
    csrf: false,
  };

  config.mysql = {
    client: {
      host: '',
      port: '',
      user: '',
      password: '',
      database: '',
    },
    app: true,
    agent: false,
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '', // Redis host
      password: '',
      db: 0,
    },
  };

  return config;
};
