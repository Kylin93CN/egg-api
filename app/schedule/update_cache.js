'use strict';

const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      interval: '10s', // 时间间隔 可用毫秒数或者字符串  或者使用cron
      type: 'all',
      disable: true, // 定时失效
    };
  }

  async subscribe() {
    console.log(`*****${new Date()}`);
    const res = await this.ctx.curl('http://www.api.com/cache', {
      dataType: 'json',
    });
    this.ctx.app.cache = res.data;
  }
}

module.exports = UpdateCache;
