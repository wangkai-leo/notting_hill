'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _common = require('./common/common.js');

var _common2 = _interopRequireDefault(_common);

var _config = require('./common/config.js');

var _config2 = _interopRequireDefault(_config);

var _media = require('./common/utils/media.js');

var _media2 = _interopRequireDefault(_media);

var _storage = require('./common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      //////////////////////////////////////////////////公共
      'pages/index', 'pages/login', 'pages/profile', 'pages/statistics', 'pages/approval', 'pages/common/changpw',
      // 'pages/common/customerlist',
      'pages/common/statisticscustomerlistserver', //统计数据-客服客资列表
      'pages/common/statisticscustomerlistsale', //统计数据-销售客资列表
      'pages/common/searchcustomerlistsale', //统计数据-销售客资列表

      //客服
      'pages/common/server/publish', 'pages/common/server/union', 'pages/common/server/customer',
      //策划
      'pages/common/scheme/task', //婚礼任务单
      'pages/common/scheme/taste', //试菜列表 
      'pages/common/scheme/tastedetail', //发起试菜申请 
      'pages/common/scheme/feedback', //试菜反馈 
      'pages/common/scheme/depot', //礼品存放申请 
      'pages/common/scheme/depotlist', //礼品存放申请 
      'pages/common/scheme/ordermenu', //试菜详情 
      'pages/common/scheme/schedule', //试菜档期

      //运营
      'pages/common/execute/trydishlist', //试菜列表
      'pages/common/execute/trydetail', //试菜列表
      'pages/common/execute/task', //执行任务单
      'pages/common/execute/taste', //执行试菜申请列表
      'pages/common/execute/depotlist', //礼品存放列表
      'pages/common/execute/depot', //礼品存放详情

      //公共销售
      'pages/common/sale/chargeback', //退客申请
      'pages/common/sale/editcurstomerinfo', //编辑客资信息
      'pages/common/sale/editlog', //添加客资跟进
      'pages/common/sale/turninfo', //客资转让信息
      'pages/common/sale/editturn', //新建转让
      'pages/common/sale/customer', //客资信息 
      'pages/common/sale/nav/takeorders', //接单列表
      'pages/common/sale/nav/distribute', //强制分配
      'pages/common/sale/ordercomplete', //完成订单
      'pages/common/sale/prepay', //意向定金
      'pages/common/sale/refund', //申请退单
      'pages/common/sale/orderpay', //订单支付证明
      'pages/common/sale/nav/admin/audit', //订单审核
      'pages/common/sale/nav/admin/reject', //驳回订单支付
      'pages/common/sale/nav/admin/auditdetail', //订单审核
      'pages/common/sale/nav/admin/team', //团队列表
      'pages/common/sale/nav/admin/department', //部门详情
      'pages/common/sale/nav/admin/unsubscribe', //退客申请列表
      'pages/common/sale/nav/admin/statistics', //数据统计
      'pages/common/sale/nav/admin/transdetail', //转让性情
      'pages/common/sale/nav/admin/auditchargeback', //退客和已死客资审核
      'pages/common/sale/nav/admin/teamorders',

      //////////////////////////////////////////////////婚庆
      'pages/marry/misscount', 'pages/marry/staduration',
      //客服
      'pages/marry/server/unipublish',
      //销售
      'pages/marry/sale/ordermsg', //订单信息
      'pages/marry/sale/schedule', //婚礼档期
      'pages/marry/sale/ordermenu', //菜单信息
      'pages/marry/sale/contract', //合同列表
      'pages/marry/sale/contractedit', //创建合同
      'pages/marry/sale/contractdetail', //创建合同
      'pages/marry/sale/checkfour', //客资信息 
      //策划
      'pages/marry/scheme/customer', //客资信息 
      'pages/marry/scheme/requestpay', //请款申请
      'pages/marry/scheme/reqpaylist', //请款列表
      'pages/marry/scheme/reqauditlist', //请款审核列表
      'pages/marry/scheme/reqaudit', //请款审核
      'pages/marry/scheme/web', //试菜档期

      // //////////////////////////////////////////////////艺术中心
      //客服
      'pages/artcenter/server/statistics',
      //销售
      'pages/artcenter/sale/ordermsg', //订单信息
      'pages/artcenter/sale/schedule', //婚礼档期
      'pages/artcenter/sale/ordermenu', //菜单信息
      'pages/artcenter/sale/contract', //合同列表
      'pages/artcenter/sale/contractedit', //创建合同
      'pages/artcenter/sale/contractdetail', //创建合同
      //策划
      'pages/artcenter/scheme/customer', //客资信息 
      'pages/artcenter/scheme/admin/audit', //试菜档期
      'pages/artcenter/scheme/admin/taste', //试菜档期
      'pages/artcenter/scheme/admin/task'],

      // subpackages:[{
      //   "root": "pages/common",
      //   "pages": [
      //       'changpw',
      //       'customerlist',
      //       'statisticscustomer', //统计数据客资
      //       'server/publish',
      //       'server/union',
      //       'server/customer',
      //       'scheme/task', //婚礼任务单
      //       'scheme/taste', //试菜列表 
      //       'scheme/tastedetail', //发起试菜申请 
      //       'scheme/feedback', //试菜反馈 
      //       'scheme/depot', //礼品存放申请 
      //       'scheme/depotlist', //礼品存放申请 
      //       'scheme/ordermenu', //试菜详情 
      //       'scheme/schedule', //试菜档期
      //       'execute/trydishlist', //试菜列表
      //       'execute/trydetail', //试菜列表
      //       'execute/task',//执行任务单
      //       'execute/taste',//执行试菜申请列表
      //       'execute/depotlist',//礼品存放列表
      //       'execute/depot',//礼品存放详情
      //       'sale/chargeback', //退客申请
      //       'sale/editcurstomerinfo', //编辑客资信息
      //       'sale/editlog', //添加客资跟进
      //       'sale/turninfo', //客资转让信息
      //       'sale/editturn', //新建转让
      //       'sale/customer', //客资信息 
      //       'sale/nav/takeorders', //接单列表
      //       'sale/nav/distribute', //强制分配
      //       'sale/ordercomplete', //完成订单
      //       'sale/prepay', //意向定金
      //       'sale/refund', //申请退单
      //       'sale/orderpay', //订单支付证明
      //       'sale/nav/admin/audit', //订单审核
      //       'sale/nav/admin/reject', //驳回订单支付
      //       'sale/nav/admin/auditdetail', //订单审核
      //       'sale/nav/admin/team', //团队列表
      //       'sale/nav/admin/department', //部门详情
      //       'sale/nav/admin/unsubscribe', //退客申请列表
      //       'sale/nav/admin/statistics', //数据统计
      //       'sale/nav/admin/transdetail', //转让性情
      //       'sale/nav/admin/auditchargeback', //退客和已死客资审核
      //       'sale/nav/admin/teamorders',
      //   ]
      // },{
      //   "root": "pages/artcenter",
      //   "pages": [
      //     //客服
      //     'server/statistics',
      //     //销售
      //     'sale/ordermsg', //订单信息
      //     'sale/schedule', //婚礼档期
      //     'sale/ordermenu', //菜单信息
      //     'sale/contract', //合同列表
      //     'sale/contractedit', //创建合同
      //     'sale/contractdetail', //创建合同
      //     //策划
      //     'scheme/customer', //客资信息 
      //     'scheme/admin/audit', //试菜档期
      //     'scheme/admin/taste', //试菜档期
      //     'scheme/admin/task', //试菜档期
      //   ]
      // },{
      //   "root": "pages/marry",
      //   "pages": [
      //     'misscount',
      //     'staduration',
      //     //客服
      //     'server/unipublish',
      //     //销售
      //     'sale/ordermsg', //订单信息
      //     'sale/schedule', //婚礼档期
      //     'sale/ordermenu', //菜单信息
      //     'sale/contract', //合同列表
      //     'sale/contractedit', //创建合同
      //     'sale/contractdetail', //创建合同
      //     'sale/checkfour', //客资信息 
      //     //策划
      //     'scheme/customer', //客资信息 
      //     'scheme/requestpay', //请款申请
      //     'scheme/reqpaylist', //请款列表
      //     'scheme/reqauditlist', //请款审核列表
      //     'scheme/reqaudit', //请款审核
      //     'scheme/web', //试菜档期
      //   ]
      // }],

      tabBar: {
        "color": "#777",
        "selectedColor": "#000",
        "backgroundColor": "#fff",
        "list": [{
          "selectedIconPath": "./images/tab-d-action.png",
          "iconPath": "./images/tab-d.png",
          "pagePath": "pages/statistics",
          "text": "统计"
        }, {
          "selectedIconPath": "./images/tab-a-action.png",
          "iconPath": "./images/tab-a.png",
          "pagePath": "pages/index",
          "text": "客资"
        }, {
          "selectedIconPath": "./images/tab-b-action.png",
          "iconPath": "./images/tab-b.png",
          "pagePath": "pages/approval",
          "text": "菜单"
        }, {
          "selectedIconPath": "./images/tab-c-action.png",
          "iconPath": "./images/tab-c.png",
          "pagePath": "pages/profile",
          "text": "我的"
        }]
      },

      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Loading...',
        navigationBarTextStyle: 'black',
        navigationStyle: 'custom' //全屏
      }
    };

    _this.use('requestfix');
    _this.use('promisify');
    // request拦截器,每次与服务器交互，带上key值
    _this.intercept('request', {
      // request 的拦截器，在每次发送request请求时都会加上session
      config: function config(p) {
        if (p.method && p.method.toUpperCase() === 'POST') {
          // 只有POST的情况才注入                    
          var user_info = p.data.uid ? p.data.uid : _storage2.default.get('user_info');
          var employee_company = _storage2.default.get('employee_company');
          if (user_info) {
            if (p.data) {
              p.data.uid = user_info;
              p.data.employee_company = employee_company;
              // p.data.uid='ke.song@nike.com';
              p.data._t = +new Date();
            } else {
              p.data = {
                uid: user_info,
                employee_company: employee_company,
                _t: +new Date()
              };
            }
          }
        } else if (p.method && p.method.toUpperCase() === 'GET') {
          p.url = p.url + '.json';
        }
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'getOpenId',
    value: function getOpenId(code) {
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
    }
  }, {
    key: 'isBind',
    value: function isBind(openid) {
      return _wepy2.default.request({
        url: _config2.default.ENV_URL + 'isBind',
        method: _config2.default.ENV_METHOD,
        data: {
          openid: openid
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    }
  }, {
    key: 'doLogin',
    value: function doLogin(count) {
      var that = this;
      _wepy2.default.login().then(function (result) {
        that.getOpenId(result.code).then(function (result) {
          _storage2.default.set('user_info', {
            user_open_id: result.data.user_mini_open_id
          });
          _storage2.default.set('user_union_id', result.data.user_union_id);
        });
      });
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      var that = this;
      _wepy2.default.setStorageSync('office_line', _config2.default.OFFLICE_LINE);
      if (_config2.default.OFFLICE_LINE == 'artcenter') {
        _wepy2.default.setStorageSync('employee_company', 1);
        _wepy2.default.setStorageSync('appid', "wxad7c32c969fca3be");
      } else {
        _wepy2.default.setStorageSync('employee_company', 3);
        _wepy2.default.setStorageSync('appid', "wx7e38e3128978153b");
      }
      //提醒自动更新
      _common2.default.autoUpdate();
      //检测是否是iphonex屏幕尺寸
      _common2.default.isIphonex();
      //打印配置信息
      _common2.default.logConfigMsg();
      //多语言
      _common2.default.loadLanguagePackage();
      //获取页面标题文案中心于顶部的距离
      _common2.default.getBoundingClientCenterTop();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      if (_config2.default.HAS_BGM) {
        _media2.default.startBackgroundMusic();
      }
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      if (_config2.default.HAS_BGM) {
        _media2.default.puaseBackgroundMusic();
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uU3R5bGUiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwibWV0aG9kIiwidG9VcHBlckNhc2UiLCJ1c2VyX2luZm8iLCJkYXRhIiwidWlkIiwic3RvcmFnZSIsImdldCIsImVtcGxveWVlX2NvbXBhbnkiLCJfdCIsIkRhdGUiLCJ1cmwiLCJjb2RlIiwid2VweSIsInJlcXVlc3QiLCJDIiwiTE9HSU5fVVJMIiwiRU5WX01FVEhPRCIsImhlYWRlciIsIm9wZW5pZCIsIkVOVl9VUkwiLCJjb3VudCIsInRoYXQiLCJsb2dpbiIsInRoZW4iLCJyZXN1bHQiLCJnZXRPcGVuSWQiLCJzZXQiLCJ1c2VyX29wZW5faWQiLCJ1c2VyX21pbmlfb3Blbl9pZCIsInVzZXJfdW5pb25faWQiLCJzZXRTdG9yYWdlU3luYyIsIk9GRkxJQ0VfTElORSIsIm1pbmkiLCJhdXRvVXBkYXRlIiwiaXNJcGhvbmV4IiwibG9nQ29uZmlnTXNnIiwibG9hZExhbmd1YWdlUGFja2FnZSIsImdldEJvdW5kaW5nQ2xpZW50Q2VudGVyVG9wIiwiSEFTX0JHTSIsIm1lZGlhIiwic3RhcnRCYWNrZ3JvdW5kTXVzaWMiLCJwdWFzZUJhY2tncm91bmRNdXNpYyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBa09FLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFoT2RBLE1BZ09jLEdBaE9MO0FBQ1BDLGFBQU07QUFDSjtBQUNBLG1CQUZJLEVBR0osYUFISSxFQUlKLGVBSkksRUFLSixrQkFMSSxFQU1K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dFUwQjdCLGVBQUs4QixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuaW1wb3J0IG1pbmkgZnJvbSAnLi9jb21tb24vY29tbW9uJztcbmltcG9ydCBDIGZyb20gJy4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi9jb21tb24vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOltcbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5YWs5YWxXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICdwYWdlcy9wcm9maWxlJyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzJyxcbiAgICAgICdwYWdlcy9hcHByb3ZhbCcsXG5cbiAgICAgICdwYWdlcy9jb21tb24vY2hhbmdwdycsXG4gICAgICAvLyAncGFnZXMvY29tbW9uL2N1c3RvbWVybGlzdCcsXG4gICAgICAncGFnZXMvY29tbW9uL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXInLCAvL+e7n+iuoeaVsOaNri3lrqLmnI3lrqLotYTliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUnLCAvL+e7n+iuoeaVsOaNri3plIDllK7lrqLotYTliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vc2VhcmNoY3VzdG9tZXJsaXN0c2FsZScsIC8v57uf6K6h5pWw5o2uLemUgOWUruWuoui1hOWIl+ihqFxuICAgICAgXG4gICAgICAvL+WuouacjVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvcHVibGlzaCcsXG4gICAgICAncGFnZXMvY29tbW9uL3NlcnZlci91bmlvbicsXG4gICAgICAncGFnZXMvY29tbW9uL3NlcnZlci9jdXN0b21lcicsXG4gICAgICAvL+etluWIklxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvdGFzaycsIC8v5ama56S85Lu75Yqh5Y2VXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS90YXN0ZScsIC8v6K+V6I+c5YiX6KGoIFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvdGFzdGVkZXRhaWwnLCAvL+WPkei1t+ivleiPnOeUs+ivtyBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL2ZlZWRiYWNrJywgLy/or5Xoj5zlj43ppoggXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS9kZXBvdCcsIC8v56S85ZOB5a2Y5pS+55Sz6K+3IFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvZGVwb3RsaXN0JywgLy/npLzlk4HlrZjmlL7nlLPor7cgXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS9vcmRlcm1lbnUnLCAvL+ivleiPnOivpuaDhSBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL3NjaGVkdWxlJywgLy/or5Xoj5zmoaPmnJ9cblxuICAgICAgLy/ov5DokKVcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS90cnlkaXNobGlzdCcsIC8v6K+V6I+c5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvdHJ5ZGV0YWlsJywgLy/or5Xoj5zliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS90YXNrJywvL+aJp+ihjOS7u+WKoeWNlVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL3Rhc3RlJywvL+aJp+ihjOivleiPnOeUs+ivt+WIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL2RlcG90bGlzdCcsLy/npLzlk4HlrZjmlL7liJfooahcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS9kZXBvdCcsLy/npLzlk4HlrZjmlL7or6bmg4VcblxuICAgICAgLy/lhazlhbHplIDllK5cbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9jaGFyZ2ViYWNrJywgLy/pgIDlrqLnlLPor7dcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9lZGl0Y3Vyc3RvbWVyaW5mbycsIC8v57yW6L6R5a6i6LWE5L+h5oGvXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvZWRpdGxvZycsIC8v5re75Yqg5a6i6LWE6Lef6L+bXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvdHVybmluZm8nLCAvL+Wuoui1hOi9rOiuqeS/oeaBr1xuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXR0dXJuJywgLy/mlrDlu7rovazorqlcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi90YWtlb3JkZXJzJywgLy/mjqXljZXliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvZGlzdHJpYnV0ZScsIC8v5by65Yi25YiG6YWNXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvb3JkZXJjb21wbGV0ZScsIC8v5a6M5oiQ6K6i5Y2VXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvcHJlcGF5JywgLy/mhI/lkJHlrprph5FcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9yZWZ1bmQnLCAvL+eUs+ivt+mAgOWNlVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL29yZGVycGF5JywgLy/orqLljZXmlK/ku5jor4HmmI5cbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vYXVkaXQnLCAvL+iuouWNleWuoeaguFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9yZWplY3QnLCAvL+mps+WbnuiuouWNleaUr+S7mFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9hdWRpdGRldGFpbCcsIC8v6K6i5Y2V5a6h5qC4XG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3RlYW0nLCAvL+WboumYn+WIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9kZXBhcnRtZW50JywgLy/pg6jpl6jor6bmg4VcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vdW5zdWJzY3JpYmUnLCAvL+mAgOWuoueUs+ivt+WIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9zdGF0aXN0aWNzJywgLy/mlbDmja7nu5/orqFcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vdHJhbnNkZXRhaWwnLCAvL+i9rOiuqeaAp+aDhVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9hdWRpdGNoYXJnZWJhY2snLCAvL+mAgOWuouWSjOW3suatu+Wuoui1hOWuoeaguFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi90ZWFtb3JkZXJzJyxcblxuICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/lqZrluoZcbiAgICAgICdwYWdlcy9tYXJyeS9taXNzY291bnQnLFxuICAgICAgJ3BhZ2VzL21hcnJ5L3N0YWR1cmF0aW9uJyxcbiAgICAgIC8v5a6i5pyNXG4gICAgICAncGFnZXMvbWFycnkvc2VydmVyL3VuaXB1Ymxpc2gnLFxuICAgICAgLy/plIDllK5cbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL29yZGVybXNnJywgLy/orqLljZXkv6Hmga9cbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL3NjaGVkdWxlJywgLy/lqZrnpLzmoaPmnJ9cbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL29yZGVybWVudScsIC8v6I+c5Y2V5L+h5oGvXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9jb250cmFjdCcsIC8v5ZCI5ZCM5YiX6KGoXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9jb250cmFjdGVkaXQnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvY29udHJhY3RkZXRhaWwnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvY2hlY2tmb3VyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAvL+etluWIklxuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS9yZXF1ZXN0cGF5JywgLy/or7fmrL7nlLPor7dcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvcmVxcGF5bGlzdCcsIC8v6K+35qy+5YiX6KGoXG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL3JlcWF1ZGl0bGlzdCcsIC8v6K+35qy+5a6h5qC45YiX6KGoXG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL3JlcWF1ZGl0JywgLy/or7fmrL7lrqHmoLhcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvd2ViJywgLy/or5Xoj5zmoaPmnJ9cblxuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/oibrmnK/kuK3lv4NcbiAgICAgIC8v5a6i5pyNXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NlcnZlci9zdGF0aXN0aWNzJyxcbiAgICAgIC8v6ZSA5ZSuXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NhbGUvb3JkZXJtc2cnLCAvL+iuouWNleS/oeaBr1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL3NjaGVkdWxlJywgLy/lqZrnpLzmoaPmnJ9cbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL2NvbnRyYWN0JywgLy/lkIjlkIzliJfooahcbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9jb250cmFjdGVkaXQnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAgIC8v562W5YiSXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vYXVkaXQnLCAvL+ivleiPnOaho+acn1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vdGFzdGUnLCAvL+ivleiPnOaho+acn1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vdGFzaycsIC8v6K+V6I+c5qGj5pyfXG4gICAgXSxcblxuICAgIC8vIHN1YnBhY2thZ2VzOlt7XG4gICAgLy8gICBcInJvb3RcIjogXCJwYWdlcy9jb21tb25cIixcbiAgICAvLyAgIFwicGFnZXNcIjogW1xuICAgIC8vICAgICAgICdjaGFuZ3B3JyxcbiAgICAvLyAgICAgICAnY3VzdG9tZXJsaXN0JyxcbiAgICAvLyAgICAgICAnc3RhdGlzdGljc2N1c3RvbWVyJywgLy/nu5/orqHmlbDmja7lrqLotYRcbiAgICAvLyAgICAgICAnc2VydmVyL3B1Ymxpc2gnLFxuICAgIC8vICAgICAgICdzZXJ2ZXIvdW5pb24nLFxuICAgIC8vICAgICAgICdzZXJ2ZXIvY3VzdG9tZXInLFxuICAgIC8vICAgICAgICdzY2hlbWUvdGFzaycsIC8v5ama56S85Lu75Yqh5Y2VXG4gICAgLy8gICAgICAgJ3NjaGVtZS90YXN0ZScsIC8v6K+V6I+c5YiX6KGoIFxuICAgIC8vICAgICAgICdzY2hlbWUvdGFzdGVkZXRhaWwnLCAvL+WPkei1t+ivleiPnOeUs+ivtyBcbiAgICAvLyAgICAgICAnc2NoZW1lL2ZlZWRiYWNrJywgLy/or5Xoj5zlj43ppoggXG4gICAgLy8gICAgICAgJ3NjaGVtZS9kZXBvdCcsIC8v56S85ZOB5a2Y5pS+55Sz6K+3IFxuICAgIC8vICAgICAgICdzY2hlbWUvZGVwb3RsaXN0JywgLy/npLzlk4HlrZjmlL7nlLPor7cgXG4gICAgLy8gICAgICAgJ3NjaGVtZS9vcmRlcm1lbnUnLCAvL+ivleiPnOivpuaDhSBcbiAgICAvLyAgICAgICAnc2NoZW1lL3NjaGVkdWxlJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgICAgICAnZXhlY3V0ZS90cnlkaXNobGlzdCcsIC8v6K+V6I+c5YiX6KGoXG4gICAgLy8gICAgICAgJ2V4ZWN1dGUvdHJ5ZGV0YWlsJywgLy/or5Xoj5zliJfooahcbiAgICAvLyAgICAgICAnZXhlY3V0ZS90YXNrJywvL+aJp+ihjOS7u+WKoeWNlVxuICAgIC8vICAgICAgICdleGVjdXRlL3Rhc3RlJywvL+aJp+ihjOivleiPnOeUs+ivt+WIl+ihqFxuICAgIC8vICAgICAgICdleGVjdXRlL2RlcG90bGlzdCcsLy/npLzlk4HlrZjmlL7liJfooahcbiAgICAvLyAgICAgICAnZXhlY3V0ZS9kZXBvdCcsLy/npLzlk4HlrZjmlL7or6bmg4VcbiAgICAvLyAgICAgICAnc2FsZS9jaGFyZ2ViYWNrJywgLy/pgIDlrqLnlLPor7dcbiAgICAvLyAgICAgICAnc2FsZS9lZGl0Y3Vyc3RvbWVyaW5mbycsIC8v57yW6L6R5a6i6LWE5L+h5oGvXG4gICAgLy8gICAgICAgJ3NhbGUvZWRpdGxvZycsIC8v5re75Yqg5a6i6LWE6Lef6L+bXG4gICAgLy8gICAgICAgJ3NhbGUvdHVybmluZm8nLCAvL+Wuoui1hOi9rOiuqeS/oeaBr1xuICAgIC8vICAgICAgICdzYWxlL2VkaXR0dXJuJywgLy/mlrDlu7rovazorqlcbiAgICAvLyAgICAgICAnc2FsZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAgICdzYWxlL25hdi90YWtlb3JkZXJzJywgLy/mjqXljZXliJfooahcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvZGlzdHJpYnV0ZScsIC8v5by65Yi25YiG6YWNXG4gICAgLy8gICAgICAgJ3NhbGUvb3JkZXJjb21wbGV0ZScsIC8v5a6M5oiQ6K6i5Y2VXG4gICAgLy8gICAgICAgJ3NhbGUvcHJlcGF5JywgLy/mhI/lkJHlrprph5FcbiAgICAvLyAgICAgICAnc2FsZS9yZWZ1bmQnLCAvL+eUs+ivt+mAgOWNlVxuICAgIC8vICAgICAgICdzYWxlL29yZGVycGF5JywgLy/orqLljZXmlK/ku5jor4HmmI5cbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vYXVkaXQnLCAvL+iuouWNleWuoeaguFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9yZWplY3QnLCAvL+mps+WbnuiuouWNleaUr+S7mFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9hdWRpdGRldGFpbCcsIC8v6K6i5Y2V5a6h5qC4XG4gICAgLy8gICAgICAgJ3NhbGUvbmF2L2FkbWluL3RlYW0nLCAvL+WboumYn+WIl+ihqFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9kZXBhcnRtZW50JywgLy/pg6jpl6jor6bmg4VcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vdW5zdWJzY3JpYmUnLCAvL+mAgOWuoueUs+ivt+WIl+ihqFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9zdGF0aXN0aWNzJywgLy/mlbDmja7nu5/orqFcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vdHJhbnNkZXRhaWwnLCAvL+i9rOiuqeaAp+aDhVxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9hdWRpdGNoYXJnZWJhY2snLCAvL+mAgOWuouWSjOW3suatu+Wuoui1hOWuoeaguFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi90ZWFtb3JkZXJzJyxcbiAgICAvLyAgIF1cbiAgICAvLyB9LHtcbiAgICAvLyAgIFwicm9vdFwiOiBcInBhZ2VzL2FydGNlbnRlclwiLFxuICAgIC8vICAgXCJwYWdlc1wiOiBbXG4gICAgLy8gICAgIC8v5a6i5pyNXG4gICAgLy8gICAgICdzZXJ2ZXIvc3RhdGlzdGljcycsXG4gICAgLy8gICAgIC8v6ZSA5ZSuXG4gICAgLy8gICAgICdzYWxlL29yZGVybXNnJywgLy/orqLljZXkv6Hmga9cbiAgICAvLyAgICAgJ3NhbGUvc2NoZWR1bGUnLCAvL+WpmuekvOaho+acn1xuICAgIC8vICAgICAnc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgIC8vICAgICAnc2FsZS9jb250cmFjdCcsIC8v5ZCI5ZCM5YiX6KGoXG4gICAgLy8gICAgICdzYWxlL2NvbnRyYWN0ZWRpdCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgLy8gICAgICdzYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAvLyAgICAgLy/nrZbliJJcbiAgICAvLyAgICAgJ3NjaGVtZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAnc2NoZW1lL2FkbWluL2F1ZGl0JywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgICAgJ3NjaGVtZS9hZG1pbi90YXN0ZScsIC8v6K+V6I+c5qGj5pyfXG4gICAgLy8gICAgICdzY2hlbWUvYWRtaW4vdGFzaycsIC8v6K+V6I+c5qGj5pyfXG4gICAgLy8gICBdXG4gICAgLy8gfSx7XG4gICAgLy8gICBcInJvb3RcIjogXCJwYWdlcy9tYXJyeVwiLFxuICAgIC8vICAgXCJwYWdlc1wiOiBbXG4gICAgLy8gICAgICdtaXNzY291bnQnLFxuICAgIC8vICAgICAnc3RhZHVyYXRpb24nLFxuICAgIC8vICAgICAvL+WuouacjVxuICAgIC8vICAgICAnc2VydmVyL3VuaXB1Ymxpc2gnLFxuICAgIC8vICAgICAvL+mUgOWUrlxuICAgIC8vICAgICAnc2FsZS9vcmRlcm1zZycsIC8v6K6i5Y2V5L+h5oGvXG4gICAgLy8gICAgICdzYWxlL3NjaGVkdWxlJywgLy/lqZrnpLzmoaPmnJ9cbiAgICAvLyAgICAgJ3NhbGUvb3JkZXJtZW51JywgLy/oj5zljZXkv6Hmga9cbiAgICAvLyAgICAgJ3NhbGUvY29udHJhY3QnLCAvL+WQiOWQjOWIl+ihqFxuICAgIC8vICAgICAnc2FsZS9jb250cmFjdGVkaXQnLCAvL+WIm+W7uuWQiOWQjFxuICAgIC8vICAgICAnc2FsZS9jb250cmFjdGRldGFpbCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgLy8gICAgICdzYWxlL2NoZWNrZm91cicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAvL+etluWIklxuICAgIC8vICAgICAnc2NoZW1lL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgLy8gICAgICdzY2hlbWUvcmVxdWVzdHBheScsIC8v6K+35qy+55Sz6K+3XG4gICAgLy8gICAgICdzY2hlbWUvcmVxcGF5bGlzdCcsIC8v6K+35qy+5YiX6KGoXG4gICAgLy8gICAgICdzY2hlbWUvcmVxYXVkaXRsaXN0JywgLy/or7fmrL7lrqHmoLjliJfooahcbiAgICAvLyAgICAgJ3NjaGVtZS9yZXFhdWRpdCcsIC8v6K+35qy+5a6h5qC4XG4gICAgLy8gICAgICdzY2hlbWUvd2ViJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgIF1cbiAgICAvLyB9XSxcbiAgICBcbiAgICB0YWJCYXI6e1xuICAgICAgXCJjb2xvclwiOiBcIiM3NzdcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMwMDBcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvc3RhdGlzdGljc1wiLFxuICAgICAgICBcInRleHRcIjogXCLnu5/orqFcIlxuICAgICAgfSwge1xuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS1hY3Rpb24ucG5nXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS5wbmdcIixcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuWuoui1hFwiXG4gICAgICB9LCB7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvYXBwcm92YWxcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6I+c5Y2VXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMtYWN0aW9uLnBuZ1wiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMucG5nXCIsXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9wcm9maWxlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXG4gICAgICB9XVxuICAgIH0sXG5cbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTG9hZGluZy4uLicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJyAvL+WFqOWxj1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgICAvLyByZXF1ZXN05oum5oiq5ZmoLOavj+asoeS4juacjeWKoeWZqOS6pOS6ku+8jOW4puS4imtleeWAvFxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgLy8gcmVxdWVzdCDnmoTmi6bmiKrlmajvvIzlnKjmr4/mrKHlj5HpgIFyZXF1ZXN06K+35rGC5pe26YO95Lya5Yqg5LiKc2Vzc2lvblxuICAgICAgY29uZmlnKHApIHtcbiAgICAgICAgaWYgKHAubWV0aG9kICYmIHAubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09ICdQT1NUJykge1xuICAgICAgICAgIC8vIOWPquaciVBPU1TnmoTmg4XlhrXmiY3ms6jlhaUgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIGxldCB1c2VyX2luZm8gPSBwLmRhdGEudWlkID8gcC5kYXRhLnVpZCA6IHN0b3JhZ2UuZ2V0KCd1c2VyX2luZm8nKTtcbiAgICAgICAgICBsZXQgZW1wbG95ZWVfY29tcGFueSA9IHN0b3JhZ2UuZ2V0KCdlbXBsb3llZV9jb21wYW55Jyk7XG4gICAgICAgICAgaWYgKHVzZXJfaW5mbykge1xuICAgICAgICAgICAgaWYgKHAuZGF0YSkge1xuICAgICAgICAgICAgICBwLmRhdGEudWlkID0gdXNlcl9pbmZvO1xuICAgICAgICAgICAgICBwLmRhdGEuZW1wbG95ZWVfY29tcGFueSA9IGVtcGxveWVlX2NvbXBhbnk7XG4gICAgICAgICAgICAgIC8vIHAuZGF0YS51aWQ9J2tlLnNvbmdAbmlrZS5jb20nO1xuICAgICAgICAgICAgICBwLmRhdGEuX3QgPSArbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHAuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1aWQ6IHVzZXJfaW5mbyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZV9jb21wYW55OiBlbXBsb3llZV9jb21wYW55LFxuICAgICAgICAgICAgICAgIF90OiArbmV3IERhdGUoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwLm1ldGhvZCAmJiBwLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJykge1xuICAgICAgICAgIHAudXJsID0gcC51cmwgKyAnLmpzb24nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0T3BlbklkKGNvZGUpIHtcbiAgICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogQy5MT0dJTl9VUkwsXG4gICAgICBtZXRob2Q6IEMuRU5WX01FVEhPRCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBpc0JpbmQob3BlbmlkKSB7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IEMuRU5WX1VSTCArICdpc0JpbmQnLFxuICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogb3BlbmlkXG4gICAgICB9LFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZG9Mb2dpbihjb3VudCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3ZXB5LmxvZ2luKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGF0LmdldE9wZW5JZChyZXN1bHQuY29kZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCd1c2VyX2luZm8nLCB7XG4gICAgICAgICAgdXNlcl9vcGVuX2lkOiByZXN1bHQuZGF0YS51c2VyX21pbmlfb3Blbl9pZFxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmFnZS5zZXQoJ3VzZXJfdW5pb25faWQnLCByZXN1bHQuZGF0YS51c2VyX3VuaW9uX2lkKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScsIEMuT0ZGTElDRV9MSU5FKTtcbiAgICBpZiAoQy5PRkZMSUNFX0xJTkUgPT0gJ2FydGNlbnRlcicpIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VtcGxveWVlX2NvbXBhbnknLCAxKTtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FwcGlkJywgXCJ3eGFkN2MzMmM5NjlmY2EzYmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VtcGxveWVlX2NvbXBhbnknLCAzKTtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FwcGlkJywgXCJ3eDdlMzhlMzEyODk3ODE1M2JcIik7XG4gICAgfVxuICAgIC8v5o+Q6YaS6Ieq5Yqo5pu05pawXG4gICAgbWluaS5hdXRvVXBkYXRlKCk7XG4gICAgLy/mo4DmtYvmmK/lkKbmmK9pcGhvbmV45bGP5bmV5bC65a+4XG4gICAgbWluaS5pc0lwaG9uZXgoKTtcbiAgICAvL+aJk+WNsOmFjee9ruS/oeaBr1xuICAgIG1pbmkubG9nQ29uZmlnTXNnKCk7XG4gICAgLy/lpJror63oqIBcbiAgICBtaW5pLmxvYWRMYW5ndWFnZVBhY2thZ2UoKTtcbiAgICAvL+iOt+WPlumhtemdouagh+mimOaWh+ahiOS4reW/g+S6jumhtumDqOeahOi3neemu1xuICAgIG1pbmkuZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AoKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgaWYgKEMuSEFTX0JHTSkge1xuICAgICAgbWVkaWEuc3RhcnRCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICB9XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGlmIChDLkhBU19CR00pIHtcbiAgICAgIG1lZGlhLnB1YXNlQmFja2dyb3VuZE11c2ljKCk7XG4gICAgfVxuICB9XG59XG4iXX0=