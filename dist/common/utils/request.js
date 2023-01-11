'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //框架
//配置
//全局
//接口配追文件
//接口配追文件


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _global = require('./../global.js');

var _global2 = _interopRequireDefault(_global);

var _api = require('./../api.js');

var _api2 = _interopRequireDefault(_api);

var _storage = require('./storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _filter = require('./../filter.js');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * 
   * 检查key3rd的值方法1
   */
  key3rdPromise: function key3rdPromise(fn) {
    var that = this;
    _global2.default.openid ? fn() : setTimeout(function () {
      that.key3rdPromise(fn);
    }, 100);
  },


  /**
   * 
   *  检查key3rd的值方法2
   */
  key3rdPromiseInter: function key3rdPromiseInter(fn) {
    var intval = setInterval(function () {
      var user_info = _storage2.default.get('user_info');
      console.log(user_info);
      if (user_info) {
        fn();
        clearInterval(intval);
      }
    }, 100);
  },


  /**
   * 
   * 发起请求
   */
  get: function get(name, cb, data, is_filter, fake) {
    var request = _api2.default[name];
    var url = request.url;
    console.log('----------------------');
    console.log(url);
    this.requestAndresponse(url, cb, data, fake, name, is_filter);
  },


  /**
   * 请求数据接口
   * param:api:接口名字
   * data:求情的参数
   * id:假数据id
   */
  requestUrl: function requestUrl(api, data, id) {
    var fake = '';
    if (id) {
      fake = _config2.default.ENV_METHOD === 'GET' ? '/' + api + id + '' : '';
    };
    if (data) {
      return _wepy2.default.request({
        url: _config2.default.ENV_URL + api + fake,
        method: _config2.default.ENV_METHOD,
        data: data,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    } else {
      return _wepy2.default.request({
        url: _config2.default.ENV_URL + api + fake,
        method: _config2.default.ENV_METHOD,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    }
  },


  /**
   * 
   * @param {返回结果回调} cb 
   * @param {返回结果} result 
   */
  response: function response(cb, result) {
    var fn = cb[result.data.code];
    if (_config2.default.SHOW_LOADING) _wepy2.default.hideLoading();
    console.log('--------');
    if (result.data.code == 500) {
      _wepy2.default.reLaunch({
        url: '/pages/login'
      });
      return false;
    } else if (result.data.code == 600) {
      _wepy2.default.reLaunch({
        url: '/pages/white'
      });
      return false;
    }

    fn != undefined ? cb[result.data.code](result) : _config2.default.DEBUGING ? console.log('异常的状态，状态码为：' + result.data) : false;
  },


  /**
   * 
   * @param {请求的接口名称} api 
   * @param {成功的回调方法} cb 
   * @param {请求的参数} data 
   * @param {假数据接口} fakeid 
   */
  requestAndresponse: function requestAndresponse(api, cb, data, fakeid, name, is_filter) {
    var that = this;
    if (!data) {
      data = {};
    }
    if (_config2.default.SHOW_LOADING && !data.hide_loading) {
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {}
      });
    }
    if (data.no_key) {
      _config2.default.DEBUGING ? console.log('请求接口:' + api) : false;
      that.requestUrl(api, data, fakeid).then(function (result) {
        console.log('结果', result.data);
        that.convertNull(result.data);
        var filter = name;
        _filter2.default[filter] && is_filter ? that.response(cb, _filter2.default[filter](result)) : that.response(cb, result); //结果处理
      });
    } else {
      that.key3rdPromiseInter(function () {
        //只有ke3rd才会请求接口
        _config2.default.DEBUGING ? console.log('请求接口:' + api) : false;
        that.requestUrl(api, data, fakeid).then(function (result) {
          console.log('结果', result.data);
          that.convertNull(result.data);
          if (result.data.code == 202 || result.data.code == 201 || result.data.code == 400) {
            _wepy2.default.showToast({
              title: result.data.msg, //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: function success(res) {}
            });
            if (result.data.code == 400) {
              _wepy2.default.redirectTo({ url: '/pages/login' });
            }
          }
          var filter = name;
          _filter2.default[filter] && is_filter ? that.response(cb, _filter2.default[filter](result)) : that.response(cb, result); //结果处理
        });
      });
    }
  },
  convertNull: function convertNull(data) {
    var has_next = false;
    var that = this;
    for (var key in data) {
      if (_typeof(data[key]) === 'object') {
        has_next = true;
      } else if (typeof data[key] === 'array') {
        has_next = true;
      }
      if (data[key] == null) {
        data[key] = '';
        // data[key]='';
      }
      if (has_next) {
        that.convertNull(data[key]);
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsia2V5M3JkUHJvbWlzZSIsImZuIiwidGhhdCIsIkciLCJvcGVuaWQiLCJzZXRUaW1lb3V0Iiwia2V5M3JkUHJvbWlzZUludGVyIiwiaW50dmFsIiwic2V0SW50ZXJ2YWwiLCJ1c2VyX2luZm8iLCJzdG9yYWdlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJuYW1lIiwiY2IiLCJkYXRhIiwiaXNfZmlsdGVyIiwiZmFrZSIsInJlcXVlc3QiLCJhcGkiLCJ1cmwiLCJyZXF1ZXN0QW5kcmVzcG9uc2UiLCJyZXF1ZXN0VXJsIiwiaWQiLCJDIiwiRU5WX01FVEhPRCIsIndlcHkiLCJFTlZfVVJMIiwibWV0aG9kIiwiaGVhZGVyIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJjb2RlIiwiU0hPV19MT0FESU5HIiwiaGlkZUxvYWRpbmciLCJyZUxhdW5jaCIsInVuZGVmaW5lZCIsIkRFQlVHSU5HIiwiZmFrZWlkIiwiaGlkZV9sb2FkaW5nIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwibm9fa2V5IiwidGhlbiIsImNvbnZlcnROdWxsIiwiZmlsdGVyIiwiRiIsInNob3dUb2FzdCIsIm1zZyIsImljb24iLCJkdXJhdGlvbiIsInJlZGlyZWN0VG8iLCJoYXNfbmV4dCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzhRQUF5QjtBQUNFO0FBQ0E7QUFDRDtBQUNPOzs7QUFKakM7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYjs7OztBQUlBQSxlQUxhLHlCQUtDQyxFQUxELEVBS0s7QUFDaEIsUUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHFCQUFFQyxNQUFGLEdBQVdILElBQVgsR0FBa0JJLFdBQVcsWUFBWTtBQUN2Q0gsV0FBS0YsYUFBTCxDQUFtQkMsRUFBbkI7QUFDRCxLQUZpQixFQUVmLEdBRmUsQ0FBbEI7QUFHRCxHQVZZOzs7QUFZ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QUNBLFNBQUssSUFBSXVELEdBQVQsSUFBZ0J4QyxJQUFoQixFQUFzQjtBQUNwQixVQUFJLFFBQU9BLEtBQUt3QyxHQUFMLENBQVAsTUFBcUIsUUFBekIsRUFBbUM7QUFDakNELG1CQUFXLElBQVg7QUFDRCxPQUZELE1BRU8sSUFBSSxPQUFPdkMsS0FBS3dDLEdBQUwsQ0FBUCxLQUFxQixPQUF6QixFQUFrQztBQUN2Q0QsbUJBQVcsSUFBWDtBQUNEO0FBQ0QsVUFBSXZDLEtBQUt3QyxHQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDckJ4QyxhQUFLd0MsR0FBTCxJQUFZLEVBQVo7QUFDQTtBQUNEO0FBQ0QsVUFBSUQsUUFBSixFQUFjO0FBQ1p0RCxhQUFLOEMsV0FBTCxDQUFpQi9CLEtBQUt3QyxHQUFMLENBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBcEtZLEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknOyAvL+ahhuaetlxuaW1wb3J0IEMgZnJvbSAnLi4vY29uZmlnJzsgLy/phY3nva5cbmltcG9ydCBHIGZyb20gJy4uL2dsb2JhbCc7IC8v5YWo5bGAXG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaSc7IC8v5o6l5Y+j6YWN6L+95paH5Lu2XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnOyAvL+aOpeWPo+mFjei/veaWh+S7tlxuaW1wb3J0IEYgZnJvbSAnLi4vZmlsdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBcbiAgICog5qOA5p+la2V5M3Jk55qE5YC85pa55rOVMVxuICAgKi9cbiAga2V5M3JkUHJvbWlzZShmbikge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBHLm9wZW5pZCA/IGZuKCkgOiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQua2V5M3JkUHJvbWlzZShmbilcbiAgICB9LCAxMDApXG4gIH0sXG5cbiAgLyoqXG4gICAqIFxuICAgKiAg5qOA5p+la2V5M3Jk55qE5YC85pa55rOVMlxuICAgKi9cbiAga2V5M3JkUHJvbWlzZUludGVyKGZuKSB7XG4gICAgbGV0IGludHZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB1c2VyX2luZm8gPSBzdG9yYWdlLmdldCgndXNlcl9pbmZvJyk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xuICAgICAgaWYgKHVzZXJfaW5mbykge1xuICAgICAgICBmbigpO1xuICAgICAgICBjbGVhckludGVydmFsKGludHZhbCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfSxcblxuICAvKipcbiAgICogXG4gICAqIOWPkei1t+ivt+axglxuICAgKi9cbiAgZ2V0KG5hbWUsIGNiLCBkYXRhLCBpc19maWx0ZXIsIGZha2UpIHtcbiAgICBsZXQgcmVxdWVzdCA9IGFwaVtuYW1lXTtcbiAgICBsZXQgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIHRoaXMucmVxdWVzdEFuZHJlc3BvbnNlKHVybCwgY2IsIGRhdGEsIGZha2UsIG5hbWUsIGlzX2ZpbHRlcik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOivt+axguaVsOaNruaOpeWPo1xuICAgKiBwYXJhbTphcGk65o6l5Y+j5ZCN5a2XXG4gICAqIGRhdGE65rGC5oOF55qE5Y+C5pWwXG4gICAqIGlkOuWBh+aVsOaNrmlkXG4gICAqL1xuICByZXF1ZXN0VXJsKGFwaSwgZGF0YSwgaWQpIHtcbiAgICBsZXQgZmFrZSA9ICcnO1xuICAgIGlmIChpZCkge1xuICAgICAgZmFrZSA9IEMuRU5WX01FVEhPRCA9PT0gJ0dFVCcgPyAnLycgKyBhcGkgKyBpZCArICcnIDogJyc7XG4gICAgfTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogQy5FTlZfVVJMICsgYXBpICsgZmFrZSxcbiAgICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogQy5FTlZfVVJMICsgYXBpICsgZmFrZSxcbiAgICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge+i/lOWbnue7k+aenOWbnuiwg30gY2IgXG4gICAqIEBwYXJhbSB76L+U5Zue57uT5p6cfSByZXN1bHQgXG4gICAqL1xuICByZXNwb25zZShjYiwgcmVzdWx0KSB7XG4gICAgbGV0IGZuID0gY2JbcmVzdWx0LmRhdGEuY29kZV07XG4gICAgaWYgKEMuU0hPV19MT0FESU5HKSB3ZXB5LmhpZGVMb2FkaW5nKCk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tJyk7XG4gICAgaWYgKHJlc3VsdC5kYXRhLmNvZGUgPT0gNTAwKSB7XG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZGF0YS5jb2RlID09IDYwMCkge1xuICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgIHVybDogJy9wYWdlcy93aGl0ZSdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZuICE9IHVuZGVmaW5lZCA/IGNiW3Jlc3VsdC5kYXRhLmNvZGVdKHJlc3VsdCkgOiAoQy5ERUJVR0lORyA/IGNvbnNvbGUubG9nKCflvILluLjnmoTnirbmgIHvvIznirbmgIHnoIHkuLrvvJonICsgcmVzdWx0LmRhdGEpIDogZmFsc2UpO1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge+ivt+axgueahOaOpeWPo+WQjeensH0gYXBpIFxuICAgKiBAcGFyYW0ge+aIkOWKn+eahOWbnuiwg+aWueazlX0gY2IgXG4gICAqIEBwYXJhbSB76K+35rGC55qE5Y+C5pWwfSBkYXRhIFxuICAgKiBAcGFyYW0ge+WBh+aVsOaNruaOpeWPo30gZmFrZWlkIFxuICAgKi9cbiAgcmVxdWVzdEFuZHJlc3BvbnNlKGFwaSwgY2IsIGRhdGEsIGZha2VpZCwgbmFtZSwgaXNfZmlsdGVyKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IHt9O1xuICAgIH1cbiAgICBpZiAoQy5TSE9XX0xPQURJTkcgJiYgIWRhdGEuaGlkZV9sb2FkaW5nKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5ub19rZXkpIHtcbiAgICAgIEMuREVCVUdJTkcgPyBjb25zb2xlLmxvZygn6K+35rGC5o6l5Y+jOicgKyBhcGkpIDogZmFsc2U7XG4gICAgICB0aGF0LnJlcXVlc3RVcmwoYXBpLCBkYXRhLCBmYWtlaWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn57uT5p6cJywgcmVzdWx0LmRhdGEpO1xuICAgICAgICB0aGF0LmNvbnZlcnROdWxsKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgbGV0IGZpbHRlciA9IG5hbWU7XG4gICAgICAgIChGW2ZpbHRlcl0gJiYgaXNfZmlsdGVyKSA/IHRoYXQucmVzcG9uc2UoY2IsIEZbZmlsdGVyXShyZXN1bHQpKTogdGhhdC5yZXNwb25zZShjYiwgcmVzdWx0KTsgLy/nu5PmnpzlpITnkIZcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQua2V5M3JkUHJvbWlzZUludGVyKGZ1bmN0aW9uICgpIHsgLy/lj6rmnIlrZTNyZOaJjeS8muivt+axguaOpeWPo1xuICAgICAgICBDLkRFQlVHSU5HID8gY29uc29sZS5sb2coJ+ivt+axguaOpeWPozonICsgYXBpKSA6IGZhbHNlO1xuICAgICAgICB0aGF0LnJlcXVlc3RVcmwoYXBpLCBkYXRhLCBmYWtlaWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfnu5PmnpwnLCByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgdGhhdC5jb252ZXJ0TnVsbChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgaWYocmVzdWx0LmRhdGEuY29kZT09MjAyfHxyZXN1bHQuZGF0YS5jb2RlPT0yMDF8fHJlc3VsdC5kYXRhLmNvZGU9PTQwMCl7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQuZGF0YS5tc2csIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuY29kZT09NDAwKXtcbiAgICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6Jy9wYWdlcy9sb2dpbid9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZmlsdGVyID0gbmFtZTtcbiAgICAgICAgICAoRltmaWx0ZXJdICYmIGlzX2ZpbHRlcikgPyB0aGF0LnJlc3BvbnNlKGNiLCBGW2ZpbHRlcl0ocmVzdWx0KSk6IHRoYXQucmVzcG9uc2UoY2IsIHJlc3VsdCk7IC8v57uT5p6c5aSE55CGXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29udmVydE51bGwoZGF0YSkge1xuICAgIGxldCBoYXNfbmV4dCA9IGZhbHNlO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGhhc19uZXh0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBoYXNfbmV4dCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVtrZXldID09IG51bGwpIHtcbiAgICAgICAgZGF0YVtrZXldID0gJyc7XG4gICAgICAgIC8vIGRhdGFba2V5XT0nJztcbiAgICAgIH1cbiAgICAgIGlmIChoYXNfbmV4dCkge1xuICAgICAgICB0aGF0LmNvbnZlcnROdWxsKGRhdGFba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19