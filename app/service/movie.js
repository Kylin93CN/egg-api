'use strict';

const Service = require('egg').Service;

class VvMovieService extends Service {
  // 初始化电影播放 并定时设置电影的当前时间
  async initTask() {
    const info = await this.app.mysql.get('movie', {
      isLive: 'Y',
    });

    // 存在的话
    if (info) {
      console.log(info);
      const { id, totalTime } = info;
      let { currentTime } = info;
      currentTime += 3;
      if (currentTime > totalTime) {
        // 此片播放结束，初始化 然后播放分数第一
        const row = {
          id,
          isLive: 'N',
          score: 0,
          currentTime: 0,
        };
        await this.app.mysql.update('movie', row);
        const movies = await this.app.mysql.select('movie', {
          orders: [[ 'score', 'desc' ]],
          limit: 1,
        });
        const newId = movies[0].id;
        const row1 = {
          id: newId,
          isLive: 'Y',
        };
        await this.app.mysql.update('movie', row1);
      } else {
        const row = {
          id,
          currentTime,
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
        isLive: 'Y',
      };
      await this.app.mysql.update('movie', row);
    }
    console.log(JSON.stringify(info));
  }

  async ping() {
    const info = await this.app.mysql.get('movie', {
      isLive: 'Y',
    });
    return info;
  }
}

module.exports = VvMovieService;
