'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = `search: ${ctx.query.name}`;
  }
  async info() {
    const ctx = this.ctx;
    ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
  }
  async post() {
    const ctx = this.ctx;
    ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
  }
}

module.exports = TestController;
