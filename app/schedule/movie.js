'use strict';

const Subscription = require('egg').Subscription;

class Movie extends Subscription {
  static get schedule() {
    return {
      interval: '3s', // 时间间隔 可用毫秒数或者字符串  或者使用cron
      type: 'all',
      disable: true, // 定时失效
    };
  }

  async subscribe() {
    await this.ctx.service.movie.initTask();
  }
}

module.exports = Movie;
