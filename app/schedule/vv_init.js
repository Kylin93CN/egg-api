'use strict';

const Subscription = require('egg').Subscription;

class VVInit extends Subscription {
  static get schedule() {
    return {
      interval: '3s', // 时间间隔 可用毫秒数或者字符串  或者使用cron
      type: 'all',
      disable: false, // 定时失效
    };
  }

  async subscribe() {
    await this.ctx.service.vvMovie.initTask();
  }
}

module.exports = VVInit;
