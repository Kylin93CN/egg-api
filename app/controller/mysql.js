'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async index() {
    const ctx = this.ctx;
    const user = await ctx.service.mysql.getInfo();
    ctx.body = user;
  }
}

module.exports = MysqlController;
