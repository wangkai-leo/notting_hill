'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _global = require('./global.js');

var _global2 = _interopRequireDefault(_global);

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

var _language = require('./language.js');

var _language2 = _interopRequireDefault(_language);

var _storage = require('./utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * auth:leo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 功能:小程序通用文件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
//框架
//配置
//全局
//接口文件


exports.default = {
  //获取key3rd值
  chk3rdKey: function chk3rdKey(code) {
    return _wepy2.default.request({
      url: _config2.default.LOGIN_URL,
      method: _config2.default.ENV_METHOD,
      data: {
        code: code
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  },

  //保存key3rd
  set3rdKey: function set3rdKey(key) {
    _global2.default.openid = key;
    _storage2.default.set('openid', key);
  },

  //微信账号登录
  doLogin: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.login().then(function (res) {
                return _this.chk3rdKey(res.code);
              }).then(function (res) {
                _this.set3rdKey(
                //保存session_key
                _config2.default.ENV_METHOD === 'GET' ? res.data.key : res.data);
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function doLogin() {
      return _ref.apply(this, arguments);
    }

    return doLogin;
  }(),


  //微信登录
  login: function login() {
    var _this2 = this;

    /**
     *微信授权登录小程序
     */
    //查询配置是否自动登陆
    if (_config2.default.AUTO_LOGIN) {
      // 检查登录是否过期
      _wepy2.default.checkSession().then(function (res) {
        //如果登录没有过期
        var openid = _wepy2.default.getStorageSync('openid');
        if (openid) {
          //重新保存下客户端session
          _this2.set3rdKey(openid);
        } else {
          //客户端session过期，重新登录
          _this2.doLogin();
        }
      }).catch(function (res) {
        //登录过期，重新登录
        _config2.default.DEBUGING ? console.log('微信端已过期，重新登录') : '';
        _this2.doLogin();
      });
    } else {
      //不做登录验证
      this.set3rdKey('fake_key3rd');
    }
  },


  //检查小程序版本及跟新
  autoUpdate: function autoUpdate() {
    if (_config2.default.AUTO_UPDATE) {
      if (wx.canIUse("getUpdateManager")) {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          console.log(res.hasUpdate);
        });
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              } else if (res.cancel) {
                return false;
              }
            }
          });
        });
        updateManager.onUpdateFailed(function () {
          // 新的版本下载失败
          wx.hideLoading();
          wx.showModal({
            title: '升级失败',
            content: '新版本下载失败，请检查网络！',
            showCancel: false
          });
        });
      }
    }
  },


  //或是屏幕是否是iphonex比例
  isIphonex: function isIphonex() {
    wx.getSystemInfo({
      success: function success(res) {
        if (res.model.search('iPhone X') != -1 || res.screenHeight / res.screenWidth >= 1.9) {
          _global2.default.iphonex = true;
        }
        _config2.default.DEBUGING ? console.log('查看是否是iphonex:' + _global2.default.iphonex) : false;
      }
    });
  },


  // 加载语言
  loadLanguagePackage: function loadLanguagePackage() {
    if (_config2.default.MULTILINGUAL) {
      var lang = _storage2.default.get(_config2.default.LANGU_STORAGE_KEY);
      if (!lang) {
        _global2.default.language = _language2.default[_config2.default.DEFAULT_LANG];
        _storage2.default.set(_config2.default.LANGU_STORAGE_KEY, _global2.default.language);
      }
    }
  },


  //打印小程序配置及模式信息
  logConfigMsg: function logConfigMsg() {
    if (_config2.default.DEBUGING) {
      console.log('配置文件信息如下..........');
      console.log('当前是否为开发模式:' + (_config2.default.ENV_METHOD === 'GET' ? '是' : '否'));
      console.log('数据接口是否为json假数据:' + (_config2.default.ENV_METHOD === 'GET' ? '是' : '否'));
      console.log('小程序开启微信登陆:' + (_config2.default.AUTO_LOGIN === _config2.default.AUTO_LOGIN ? '是' : '否'));
      console.log('再次打开小程序是否提示更新最新版:' + (_config2.default.AUTO_UPDATE ? '是' : '否'));
      console.log('所有接口如下：');
      console.log('**********************************************************************');
      var count = 0;
      for (var key in _api2.default) {
        count++;
        console.log('接口' + count + '-------------------------------------');
        console.log(_api2.default[key].descript + ':' + key);
        if (_config2.default.LOG_API_DETAIL) {
          if (_api2.default[key].request_data) {
            console.log('请求格式：');
            console.log(_api2.default[key].request_data);
          }
          console.log('返回格式：');
          console.log(_api2.default[key].response_data);
          console.log('');
          console.log('');
        }
      }
      console.log('**********************************************************************');
    }
  },
  getBoundingClientCenterTop: function getBoundingClientCenterTop() {
    var bound = wx.getMenuButtonBoundingClientRect();
    _global2.default.bounding_center_top = bound.top + bound.height / 2;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJjaGszcmRLZXkiLCJjb2RlIiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJDIiwiTE9HSU5fVVJMIiwibWV0aG9kIiwiRU5WX01FVEhPRCIsImRhdGEiLCJoZWFkZXIiLCJzZXQzcmRLZXkiLCJrZXkiLCJHIiwib3BlbmlkIiwic3RvcmFnZSIsInNldCIsImRvTG9naW4iLCJsb2dpbiIsInRoZW4iLCJyZXMiLCJBVVRPX0xPR0lOIiwiY2hlY2tTZXNzaW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJjYXRjaCIsIkRFQlVHSU5HIiwiY29uc29sZSIsImxvZyIsImF1dG9VcGRhdGUiLCJBVVRPX1VQREFURSIsInd4IiwiY2FuSVVzZSIsInVwZGF0ZU1hbmFnZXIiLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsImhhc1VwZGF0ZSIsIm9uVXBkYXRlUmVhZHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsImFwcGx5VXBkYXRlIiwiY2FuY2VsIiwib25VcGRhdGVGYWlsZWQiLCJoaWRlTG9hZGluZyIsInNob3dDYW5jZWwiLCJpc0lwaG9uZXgiLCJnZXRTeXN0ZW1JbmZvIiwibW9kZWwiLCJzZWFyY2giLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW5XaWR0aCIsImlwaG9uZXgiLCJsb2FkTGFuZ3VhZ2VQYWNrYWdlIiwiTVVMVElMSU5HVUFMIiwibGFuZyIsImdldCIsIkxBTkdVX1NUT1JBR0VfS0VZIiwibGFuZ3VhZ2UiLCJsYW4iLCJERUZBVUxUX0xBTkciLCJsb2dDb25maWdNc2ciLCJjb3VudCIsImFwaSIsImRlc2NyaXB0IiwiTE9HX0FQSV9ERVRBSUwiLCJyZXF1ZXN0X2RhdGEiLCJyZXNwb25zZV9kYXRhIiwiZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AiLCJib3VuZCIsImdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZGluZ19jZW50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QVF4QyxHQUFHeUMsK0JBQUgsRUFBWjtBQUNBMUQscUJBQUUyRCxtQkFBRixHQUF3QkYsTUFBTUcsR0FBTixHQUFZSCxNQUFNSSxNQUFOLEdBQWUsQ0FBbkQ7QUFDRDtBQTNKWSxDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYXV0aDpsZW9cbiAqIOWKn+iDvTrlsI/nqIvluo/pgJrnlKjmlofku7ZcbiAqL1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7IC8v5qGG5p62XG5pbXBvcnQgQyBmcm9tICcuL2NvbmZpZyc7IC8v6YWN572uXG5pbXBvcnQgRyBmcm9tICcuL2dsb2JhbCc7IC8v5YWo5bGAXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJzsgLy/mjqXlj6Pmlofku7ZcbmltcG9ydCBsYW4gZnJvbSAnLi9sYW5ndWFnZSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3V0aWxzL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8v6I635Y+Wa2V5M3Jk5YC8XG4gIGNoazNyZEtleShjb2RlKSB7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IEMuTE9HSU5fVVJMLFxuICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvL+S/neWtmGtleTNyZFxuICBzZXQzcmRLZXkoa2V5KSB7XG4gICAgRy5vcGVuaWQgPSBrZXk7XG4gICAgc3RvcmFnZS5zZXQoJ29wZW5pZCcsIGtleSk7XG4gIH0sXG4gIC8v5b6u5L+h6LSm5Y+355m75b2VXG4gIGFzeW5jIGRvTG9naW4oKSB7XG4gICAgLy/nmbvlvZUs55So55m75b2V5Yet6K+B5Y675pyN5Yqh5Zmo56uv5o2i5Y+Wc2Vzc2lvbl9rZXks5bm25L+d5a2YXG4gICAgYXdhaXQgd2VweS5sb2dpbigpXG4gICAgICAudGhlbihyZXMgPT4gdGhpcy5jaGszcmRLZXkocmVzLmNvZGUpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXQzcmRLZXkoXG4gICAgICAgICAgLy/kv53lrZhzZXNzaW9uX2tleVxuICAgICAgICAgIEMuRU5WX01FVEhPRCA9PT0gJ0dFVCcgPyByZXMuZGF0YS5rZXkgOiByZXMuZGF0YVxuICAgICAgICApXG4gICAgICB9KVxuICB9LFxuXG4gIC8v5b6u5L+h55m75b2VXG4gIGxvZ2luKCkge1xuICAgIC8qKlxuICAgICAq5b6u5L+h5o6I5p2D55m75b2V5bCP56iL5bqPXG4gICAgICovXG4gICAgLy/mn6Xor6LphY3nva7mmK/lkKboh6rliqjnmbvpmYZcbiAgICBpZiAoQy5BVVRPX0xPR0lOKSB7XG4gICAgICAvLyDmo4Dmn6XnmbvlvZXmmK/lkKbov4fmnJ9cbiAgICAgIHdlcHkuY2hlY2tTZXNzaW9uKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAvL+WmguaenOeZu+W9leayoeaciei/h+acn1xuICAgICAgICBsZXQgb3BlbmlkID0gd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbmlkJyk7XG4gICAgICAgIGlmIChvcGVuaWQpIHtcbiAgICAgICAgICAvL+mHjeaWsOS/neWtmOS4i+WuouaIt+err3Nlc3Npb25cbiAgICAgICAgICB0aGlzLnNldDNyZEtleShvcGVuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5a6i5oi356uvc2Vzc2lvbui/h+acn++8jOmHjeaWsOeZu+W9lVxuICAgICAgICAgIHRoaXMuZG9Mb2dpbigpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xuICAgICAgICAvL+eZu+W9lei/h+acn++8jOmHjeaWsOeZu+W9lVxuICAgICAgICBDLkRFQlVHSU5HP2NvbnNvbGUubG9nKCflvq7kv6Hnq6/lt7Lov4fmnJ/vvIzph43mlrDnmbvlvZUnKTonJztcbiAgICAgICAgdGhpcy5kb0xvZ2luKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/kuI3lgZrnmbvlvZXpqozor4FcbiAgICAgIHRoaXMuc2V0M3JkS2V5KCdmYWtlX2tleTNyZCcpO1xuICAgIH1cbiAgfSxcblxuICAvL+ajgOafpeWwj+eoi+W6j+eJiOacrOWPiui3n+aWsFxuICBhdXRvVXBkYXRlKCkge1xuICAgIGlmIChDLkFVVE9fVVBEQVRFKSB7XG4gICAgICBpZiAod3guY2FuSVVzZShcImdldFVwZGF0ZU1hbmFnZXJcIikpIHtcbiAgICAgICAgbGV0IHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKCk7XG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZSgocmVzKSA9PiB7XG4gICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmhhc1VwZGF0ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeSgoKSA9PiB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pu05paw5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzmmK/lkKbph43lkK/lupTnlKjvvJ8nLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKCgpID0+IHtcbiAgICAgICAgICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WNh+e6p+Wksei0pScsXG4gICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5LiL6L295aSx6LSl77yM6K+35qOA5p+l572R57uc77yBJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvL+aIluaYr+Wxj+W5leaYr+WQpuaYr2lwaG9uZXjmr5TkvotcbiAgaXNJcGhvbmV4KCkge1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzLm1vZGVsLnNlYXJjaCgnaVBob25lIFgnKSAhPSAtMSB8fCByZXMuc2NyZWVuSGVpZ2h0IC8gcmVzLnNjcmVlbldpZHRoID49IDEuOSkge1xuICAgICAgICAgIEcuaXBob25leCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgQy5ERUJVR0lORz9jb25zb2xlLmxvZygn5p+l55yL5piv5ZCm5pivaXBob25leDonICsgRy5pcGhvbmV4KTpmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8vIOWKoOi9veivreiogFxuICBsb2FkTGFuZ3VhZ2VQYWNrYWdlKCkge1xuICAgIGlmIChDLk1VTFRJTElOR1VBTCkge1xuICAgICAgbGV0IGxhbmcgPSBzdG9yYWdlLmdldChDLkxBTkdVX1NUT1JBR0VfS0VZKTtcbiAgICAgIGlmICghbGFuZykge1xuICAgICAgICBHLmxhbmd1YWdlID0gbGFuW0MuREVGQVVMVF9MQU5HXTtcbiAgICAgICAgc3RvcmFnZS5zZXQoQy5MQU5HVV9TVE9SQUdFX0tFWSwgRy5sYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG5cbiAgLy/miZPljbDlsI/nqIvluo/phY3nva7lj4rmqKHlvI/kv6Hmga9cbiAgbG9nQ29uZmlnTXNnKCkge1xuICAgIGlmIChDLkRFQlVHSU5HKSB7XG4gICAgICBjb25zb2xlLmxvZygn6YWN572u5paH5Lu25L+h5oGv5aaC5LiLLi4uLi4uLi4uLicpO1xuICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeaYr+WQpuS4uuW8gOWPkeaooeW8jzonICsgKEMuRU5WX01FVEhPRCA9PT0gJ0dFVCcgPyAn5pivJyA6ICflkKYnKSlcbiAgICAgIGNvbnNvbGUubG9nKCfmlbDmja7mjqXlj6PmmK/lkKbkuLpqc29u5YGH5pWw5o2uOicgKyAoQy5FTlZfTUVUSE9EID09PSAnR0VUJyA/ICfmmK8nIDogJ+WQpicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCflsI/nqIvluo/lvIDlkK/lvq7kv6HnmbvpmYY6JyArIChDLkFVVE9fTE9HSU4gPT09IEMuQVVUT19MT0dJTiA/ICfmmK8nIDogJ+WQpicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCflho3mrKHmiZPlvIDlsI/nqIvluo/mmK/lkKbmj5DnpLrmm7TmlrDmnIDmlrDniYg6JyArIChDLkFVVE9fVVBEQVRFID8gJ+aYrycgOiAn5ZCmJykpO1xuICAgICAgY29uc29sZS5sb2coJ+aJgOacieaOpeWPo+WmguS4i++8micpO1xuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gYXBpKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGNvbnNvbGUubG9nKCfmjqXlj6MnICsgY291bnQgKyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcGlba2V5XS5kZXNjcmlwdCArICc6JyArIGtleSk7XG4gICAgICAgIGlmIChDLkxPR19BUElfREVUQUlMKSB7XG4gICAgICAgICAgaWYgKGFwaVtrZXldLnJlcXVlc3RfZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguagvOW8j++8micpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXBpW2tleV0ucmVxdWVzdF9kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ+i/lOWbnuagvOW8j++8micpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFwaVtrZXldLnJlc3BvbnNlX2RhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gICAgfVxuICB9LFxuXG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AoKXtcbiAgICBsZXQgYm91bmQgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgRy5ib3VuZGluZ19jZW50ZXJfdG9wID0gYm91bmQudG9wICsgYm91bmQuaGVpZ2h0IC8gMjtcbiAgfVxufVxuIl19