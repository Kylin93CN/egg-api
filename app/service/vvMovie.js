'use strict';

const Service = require('egg').Service;

class VvMovieService extends Service {
  // 初始化电影播放 并定时设置电影的当前时间
  async initTask() {
    // const info = await this.app.mysql.select('movie', { // 搜索 post 表
    //   where: { is_live: 'N' }, // WHERE 条件
    //   // columns: ['author', 'title'], // 要查询的表字段
    //   // orders: [['created_at','desc'], ['id','desc']], // 排序方式
    //   limit: 10, // 返回数据量
    //   offset: 0, // 数据偏移量
    // });
    const info = await this.app.mysql.get('movie', {
      is_live: 'Y',
    });

    // 存在的话
    if (info) {
      console.log(info);
    } else {
      const movies = await this.app.mysql.select('movie', {
        orders: [[ 'score', 'desc' ]],
        limit: 1,
      });
      const movie = movies[0];
      const { id } = movie;
      const row = {
        id,
        is_live: 'Y',
      };
      await this.app.mysql.update('movie', row); // 更新 posts 表中的记录
    }
    console.log(JSON.stringify(info));
    // return { info };
  }
}

module.exports = VvMovieService;
