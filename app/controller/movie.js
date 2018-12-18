'use strict';

const Controller = require('egg').Controller;

class MovieController extends Controller {
  async ping() {
    const ctx = this.ctx;
    const movie = await ctx.service.movie.ping();
    ctx.body = movie;
    ctx.status = 200;
  }
}

module.exports = MovieController;
