'use strict';

const Controller = require('egg').Controller;

const getListRuler = {
  id: 'string',
  score: 'string',
};
class MovieController extends Controller {
  // 前端定时发送请求或者当前电影信息
  async ping() {
    const ctx = this.ctx;
    const movie = await ctx.service.movie.ping();
    ctx.body = movie;
    ctx.status = 200;
  }
  // 获取电影列表及积分
  async getList() {
    const ctx = this.ctx;
    const list = await ctx.service.movie.getList();
    ctx.body = list;
    ctx.status = 200;
  }
  // 加分
  async addScore() {
    const ctx = this.ctx;
    ctx.validate(getListRuler, ctx.request.body);
    ctx.status = 200;
  }
}

module.exports = MovieController;
