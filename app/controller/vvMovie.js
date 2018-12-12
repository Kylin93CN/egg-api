'use strict';

const Controller = require('egg').Controller;

class MovieController extends Controller {
  async ping() {
    console.log('ctrl');
    const ctx = this.ctx;
    const movie = await ctx.service.vvMovie.ping();
    ctx.body(movie);
    ctx.status = 200;
  }
}

module.exports = MovieController;
