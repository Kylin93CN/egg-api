/*
 Navicat Premium Data Transfer

 Source Server         : local-mysql
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : vv

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 10/12/2018 10:51:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `id` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `movie_name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `movie_url` char(64) COLLATE utf8_bin NOT NULL,
  `current_time` int(11) unsigned NOT NULL DEFAULT '0',
  `total_time` int(11) unsigned NOT NULL DEFAULT '0',
  `is_live` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `score` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`movie_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Movie''s infomations.';

-- ----------------------------
-- Records of movie
-- ----------------------------
BEGIN;
INSERT INTO `movie` VALUES ('1001', '白色风车', 'http://lvxiang.site/public/白色风车.mp4', 0, 274, 'N', 0);
INSERT INTO `movie` VALUES ('1002', '龙卷风', 'http://lvxiang.site/public/龙卷风.mp4', 0, 254, 'N', 0);
INSERT INTO `movie` VALUES ('1003', '听爸爸的话', 'http://lvxiang.site/public/听爸爸的话.mp4', 0, 273, 'N', 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;


CREATE TABLE `user` (
  `id` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user_name` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pass_word` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `score` int(11) unsigned NOT NULL DEFAULT '0',
  `phone_number` int(11) unsigned DEFAULT '0',
  `photo_url` char(64) COLLATE utf8_bin DEFAULT '',

  PRIMARY KEY (`id`,`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT="User's infomations.";