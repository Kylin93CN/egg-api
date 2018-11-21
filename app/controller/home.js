'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log(this.app.cities);
    this.ctx.body = 'hello controller';
  }
  async xxx() {
    this.ctx.redirect('http://cn.bing.com/search?q=react');
    this.ctx.body = 'xxxxxx';
  }
}

module.exports = HomeController;
