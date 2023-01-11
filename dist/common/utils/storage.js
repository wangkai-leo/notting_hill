'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//框架

exports.default = {
  //保存数据到本地，同步版
  set: function set(key, value) {
    _wepy2.default.setStorageSync(key, value);
  },

  //获取本地的数据，同步版
  get: function get(key) {
    return _wepy2.default.getStorageSync(key);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UuanMiXSwibmFtZXMiOlsic2V0Iiwia2V5IiwidmFsdWUiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJnZXQiLCJnZXRTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUF5Qjs7a0JBRVY7QUFDYjtBQUNBQSxLQUZhLGVBRVRDLEdBRlMsRUFFSkMsS0FGSSxFQUVHO0FBQ2RDLG1CQUFLQyxjQUFMLENBQW9CSCxHQUFwQixFQUF5QkMsS0FBekI7QUFDRCxHQUpZOztBQUtiO0FBQ0FHLEtBTmEsZUFNVEosR0FOUyxFQU1KO0FBQ1AsV0FBT0UsZUFBS0csY0FBTCxDQUFvQkwsR0FBcEIsQ0FBUDtBQUNEO0FBUlksQyIsImZpbGUiOiJzdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7IC8v5qGG5p62XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy/kv53lrZjmlbDmja7liLDmnKzlnLDvvIzlkIzmraXniYhcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKGtleSwgdmFsdWUpO1xuICB9LFxuICAvL+iOt+WPluacrOWcsOeahOaVsOaNru+8jOWQjOatpeeJiFxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHdlcHkuZ2V0U3RvcmFnZVN5bmMoa2V5KTtcbiAgfVxufVxuIl19