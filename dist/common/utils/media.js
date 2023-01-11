'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _global = require('./../global.js');

var _global2 = _interopRequireDefault(_global);

var _storage = require('./storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//配置
exports.default = {
  /**
   * 播放背景音乐
   */
  startBackgroundMusic: function startBackgroundMusic() {
    var that = this;
    var play_status = _storage2.default.get(_config2.default.BG_STORAGE_KEY);
    if (!play_status) {
      _global2.default.bgMusicMan = wx.getBackgroundAudioManager();
      _global2.default.bgMusicMan.src = _config2.default.BG_MUSIC;
      _global2.default.bgMusicMan.title = 'Tassel';
      _global2.default.bgMusicMan.play(); // 开始播放
      _global2.default.bgMusicMan.onEnded(function () {
        that.startBackgroundMusic();
      });
      _storage2.default.set(_config2.default.BG_STORAGE_KEY, false);
    }
  },


  //停止背景音乐
  puaseBackgroundMusic: function puaseBackgroundMusic() {
    if (_global2.default.bgMusicMan) {
      _global2.default.bgMusicMan.pause();
    }
  },


  //打开或关闭按钮
  palyOrStopBackgroundMusic: function palyOrStopBackgroundMusic() {
    var play_status = _storage2.default.get(_config2.default.BG_STORAGE_KEY);
    if (!play_status) {
      _global2.default.bgMusicMan.pause();
      this.setStorage(_config2.default.BG_STORAGE_KEY, true);
    } else {
      this.setStorage(_config2.default.BG_STORAGE_KEY, false);
      this.startBackgroundMusic();
    }
  }
}; //全局
//框架
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbInN0YXJ0QmFja2dyb3VuZE11c2ljIiwidGhhdCIsInBsYXlfc3RhdHVzIiwic3RvcmFnZSIsImdldCIsIkMiLCJCR19TVE9SQUdFX0tFWSIsIkciLCJiZ011c2ljTWFuIiwid3giLCJnZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyIiwic3JjIiwiQkdfTVVTSUMiLCJ0aXRsZSIsInBsYXkiLCJvbkVuZGVkIiwic2V0IiwicHVhc2VCYWNrZ3JvdW5kTXVzaWMiLCJwYXVzZSIsInBhbHlPclN0b3BCYWNrZ3JvdW5kTXVzaWMiLCJzZXRTdG9yYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRjJCO2tCQUlaO0FBQ2I7OztBQUdBQSxzQkFKYSxrQ0FJVTtBQUNyQixRQUFJQyxPQUFPLElBQVg7QUFDQSxRQUFJQyxjQUFjQyxrQkFBUUMsR0FBUixDQUFZQyxpQkFBRUMsY0FBZCxDQUFsQjtBQUNBLFFBQUksQ0FBQ0osV0FBTCxFQUFrQjtBQUNoQkssdUJBQUVDLFVBQUYsR0FBZUMsR0FBR0MseUJBQUgsRUFBZjtBQUNBSCx1QkFBRUMsVUFBRixDQUFhRyxHQUFiLEdBQW1CTixpQkFBRU8sUUFBckI7QUFDQUwsdUJBQUVDLFVBQUYsQ0FBYUssS0FBYixHQUFtQixRQUFuQjtBQUNBTix1QkFBRUMsVUFBRixDQUFhTSxJQUFiLEdBSmdCLENBSUk7QUFDcEJQLHVCQUFFQyxVQUFGLENBQWFPLE9BQWIsQ0FBcUIsWUFBTTtBQUN6QmQsYUFBS0Qsb0JBQUw7QUFDRCxPQUZEO0FBR0FHLHdCQUFRYSxHQUFSLENBQVlYLGlCQUFFQyxjQUFkLEVBQThCLEtBQTlCO0FBQ0Q7QUFDRixHQWpCWTs7O0FBbUJiO0FBQ0FXLHNCQXBCYSxrQ0FvQlU7QUFDckIsUUFBSVYsaUJBQUVDLFVBQU4sRUFBa0I7QUFDaEJELHVCQUFFQyxVQUFGLENBQWFVLEtBQWI7QUFDRDtBQUNGLEdBeEJZOzs7QUEwQmI7QUFDQUMsMkJBM0JhLHVDQTJCZTtBQUMxQixRQUFJakIsY0FBY0Msa0JBQVFDLEdBQVIsQ0FBWUMsaUJBQUVDLGNBQWQsQ0FBbEI7QUFDQSxRQUFJLENBQUNKLFdBQUwsRUFBa0I7QUFDaEJLLHVCQUFFQyxVQUFGLENBQWFVLEtBQWI7QUFDQSxXQUFLRSxVQUFMLENBQWdCZixpQkFBRUMsY0FBbEIsRUFBa0MsSUFBbEM7QUFDRCxLQUhELE1BR087QUFDTCxXQUFLYyxVQUFMLENBQWdCZixpQkFBRUMsY0FBbEIsRUFBa0MsS0FBbEM7QUFDQSxXQUFLTixvQkFBTDtBQUNEO0FBQ0Y7QUFwQ1ksQyxFQUhZO0FBRkYiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JzsgLy/moYbmnrZcbmltcG9ydCBDIGZyb20gJy4uL2NvbmZpZyc7IC8v6YWN572uXG5pbXBvcnQgRyBmcm9tICcuLi9nbG9iYWwnOyAvL+WFqOWxgFxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAqL1xuICBzdGFydEJhY2tncm91bmRNdXNpYygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBsYXlfc3RhdHVzID0gc3RvcmFnZS5nZXQoQy5CR19TVE9SQUdFX0tFWSk7XG4gICAgaWYgKCFwbGF5X3N0YXR1cykge1xuICAgICAgRy5iZ011c2ljTWFuID0gd3guZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xuICAgICAgRy5iZ011c2ljTWFuLnNyYyA9IEMuQkdfTVVTSUM7XG4gICAgICBHLmJnTXVzaWNNYW4udGl0bGU9J1Rhc3NlbCc7XG4gICAgICBHLmJnTXVzaWNNYW4ucGxheSgpIC8vIOW8gOWni+aSreaUvlxuICAgICAgRy5iZ011c2ljTWFuLm9uRW5kZWQoKCkgPT4ge1xuICAgICAgICB0aGF0LnN0YXJ0QmFja2dyb3VuZE11c2ljKCk7XG4gICAgICB9KTtcbiAgICAgIHN0b3JhZ2Uuc2V0KEMuQkdfU1RPUkFHRV9LRVksIGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgLy/lgZzmraLog4zmma/pn7PkuZBcbiAgcHVhc2VCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgaWYgKEcuYmdNdXNpY01hbikge1xuICAgICAgRy5iZ011c2ljTWFuLnBhdXNlKCk7XG4gICAgfVxuICB9LFxuICBcbiAgLy/miZPlvIDmiJblhbPpl63mjInpkq5cbiAgcGFseU9yU3RvcEJhY2tncm91bmRNdXNpYygpIHtcbiAgICBsZXQgcGxheV9zdGF0dXMgPSBzdG9yYWdlLmdldChDLkJHX1NUT1JBR0VfS0VZKTtcbiAgICBpZiAoIXBsYXlfc3RhdHVzKSB7XG4gICAgICBHLmJnTXVzaWNNYW4ucGF1c2UoKTtcbiAgICAgIHRoaXMuc2V0U3RvcmFnZShDLkJHX1NUT1JBR0VfS0VZLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdG9yYWdlKEMuQkdfU1RPUkFHRV9LRVksIGZhbHNlKTtcbiAgICAgIHRoaXMuc3RhcnRCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICB9XG4gIH0sXG59XG4iXX0=