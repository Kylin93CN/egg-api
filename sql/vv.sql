CREATE TABLE `movie` (
  `id` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `movie_name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `current_time` int(11) unsigned NOT NULL DEFAULT '0',
  `total_time` int(11) unsigned NOT NULL DEFAULT '0',
  `is_live` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `score` int(11) unsigned NOT NULL DEFAULT '0',

  PRIMARY KEY (`id`,`movie_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT="Movie's infomations.";

CREATE TABLE `user` (
  `id` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user_name` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pass_word` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `score` int(11) unsigned NOT NULL DEFAULT '0',
  `phone_number` int(11) unsigned DEFAULT '0',
  `photo_url` char(64) COLLATE utf8_bin DEFAULT '',

  PRIMARY KEY (`id`,`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT="User's infomations.";