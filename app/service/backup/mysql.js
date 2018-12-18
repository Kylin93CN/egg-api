'use strict';

const Service = require('egg').Service;

class MysqlService extends Service {
  async getInfo() {
    const info = await this.app.mysql.get('user', { user: 'lvxiang' });
    return { info };
  }
}

module.exports = MysqlService;
