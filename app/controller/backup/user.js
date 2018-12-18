
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const ctx = this.ctx;
    const createRule = {
      username: {
        type: 'email',
      },
      password: {
        type: 'password',
        compare: 're-password',
      },
    };
    ctx.validate(createRule);
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;

