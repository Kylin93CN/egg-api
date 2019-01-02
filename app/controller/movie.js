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
    const data = ctx.request.body;
    console.log(data);
    try {
      ctx.validate(getListRuler, data);
    } catch (err) {
      ctx.body = err.message;
    }
    const result = await ctx.service.movie.addScore(data);
    if (result.affectedRows === 1) {
      ctx.status = 200;
    }
  }
}

module.exports = MovieController;
