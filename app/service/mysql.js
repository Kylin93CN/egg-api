'use strict';

const Service = require('egg').Service;

class MysqlService extends Service {
  async getInfo() {
    const info = await this.app.mysql.get('user', { user: 'lvxiang' });
    console.log(`******${JSON.stringify(info)}`);
    return { info };
  }
}

module.exports = MysqlService;
