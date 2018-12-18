'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async index() {
    const ctx = this.ctx;
    // const user = await ctx.service.mysql.getInfo();
    await this.app.redis.set('foo', 'bar');
    // get
    ctx.body = await this.app.redis.get('foo');
    // ctx.body = user;
  }
}

module.exports = MysqlController;
