'use strict';

const Service = require('egg').Service;

class VvMovieService extends Service {
  // 初始化电影播放 并定时设置电影的当前时间
  async initTask() {
    const info = await this.app.mysql.get('movie', {
      is_live: 'Y',
    });

    // 存在的话
    if (info) {
      console.log(info);
      const { id, total_time } = info;
      let { current_time } = info;
      current_time += 3;
      if (current_time > total_time) {
        // 此片播放结束，初始化 然后播放分数第一
        const row = {
          id,
          is_live: 'N',
          score: 0,
          current_time: 0,
        };
        await this.app.mysql.update('movie', row);
        const movies = await this.app.mysql.select('movie', {
          orders: [[ 'score', 'desc' ]],
          limit: 1,
        });
        const newId = movies[0].id;
        const row1 = {
          id: newId,
          is_live: 'Y',
        };
        await this.app.mysql.update('movie', row1);
      } else {
        const row = {
          id,
          current_time,
        };
        await this.app.mysql.update('movie', row);
      }
    } else {
      const movies = await this.app.mysql.select('movie', {
        orders: [[ 'score', 'desc' ]],
        limit: 1,
      });
      const { id } = movies[0];
      const row = {
        id,
        is_live: 'Y',
      };
      await this.app.mysql.update('movie', row);
    }
    console.log(JSON.stringify(info));
  }

  async ping() {
    const info = await this.app.mysql.get('movie', {
      is_live: 'Y',
    });
    return info;
  }
}

module.exports = VvMovieService;
