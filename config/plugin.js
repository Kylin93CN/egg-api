'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.redis = {
  enable: false,
  package: 'egg-redis',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
