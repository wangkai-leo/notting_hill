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
      'pages/artcenter/sale/statisticsfiter', //统计刷选
      'pages/artcenter/sale/statisticfilterslist', //筛选列表
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uU3R5bGUiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwibWV0aG9kIiwidG9VcHBlckNhc2UiLCJ1c2VyX2luZm8iLCJkYXRhIiwidWlkIiwic3RvcmFnZSIsImdldCIsImVtcGxveWVlX2NvbXBhbnkiLCJfdCIsIkRhdGUiLCJ1cmwiLCJjb2RlIiwid2VweSIsInJlcXVlc3QiLCJDIiwiTE9HSU5fVVJMIiwiRU5WX01FVEhPRCIsImhlYWRlciIsIm9wZW5pZCIsIkVOVl9VUkwiLCJjb3VudCIsInRoYXQiLCJsb2dpbiIsInRoZW4iLCJyZXN1bHQiLCJnZXRPcGVuSWQiLCJzZXQiLCJ1c2VyX29wZW5faWQiLCJ1c2VyX21pbmlfb3Blbl9pZCIsInVzZXJfdW5pb25faWQiLCJzZXRTdG9yYWdlU3luYyIsIk9GRkxJQ0VfTElORSIsIm1pbmkiLCJhdXRvVXBkYXRlIiwiaXNJcGhvbmV4IiwibG9nQ29uZmlnTXNnIiwibG9hZExhbmd1YWdlUGFja2FnZSIsImdldEJvdW5kaW5nQ2xpZW50Q2VudGVyVG9wIiwiSEFTX0JHTSIsIm1lZGlhIiwic3RhcnRCYWNrZ3JvdW5kTXVzaWMiLCJwdWFzZUJhY2tncm91bmRNdXNpYyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBb09FLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFsT2RBLE1Ba09jLEdBbE9MO0FBQ1BDLGFBQU07QUFDSjtBQUNBLG1CQUZJLEVBR0osYUFISSxFQUlKLGVBSkksRUFLSixrQkFMSSxFQU1K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LEVBQWU7QUFDYkMsd0JBQU1FLG9CQUFOO0FBQ0Q7QUFDRjs7OztFQXhVMEI3QixlQUFLOEIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcbmltcG9ydCBtaW5pIGZyb20gJy4vY29tbW9uL2NvbW1vbic7XG5pbXBvcnQgQyBmcm9tICcuL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IG1lZGlhIGZyb20gJy4vY29tbW9uL3V0aWxzL21lZGlhJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczpbXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+WFrOWFsVxuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9sb2dpbicsXG4gICAgICAncGFnZXMvcHJvZmlsZScsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcycsXG4gICAgICAncGFnZXMvYXBwcm92YWwnLFxuXG4gICAgICAncGFnZXMvY29tbW9uL2NoYW5ncHcnLFxuICAgICAgLy8gJ3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3QnLFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyJywgLy/nu5/orqHmlbDmja4t5a6i5pyN5a6i6LWE5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlJywgLy/nu5/orqHmlbDmja4t6ZSA5ZSu5a6i6LWE5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL3NlYXJjaGN1c3RvbWVybGlzdHNhbGUnLCAvL+e7n+iuoeaVsOaNri3plIDllK7lrqLotYTliJfooahcbiAgICAgIFxuICAgICAgLy/lrqLmnI1cbiAgICAgICdwYWdlcy9jb21tb24vc2VydmVyL3B1Ymxpc2gnLFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvdW5pb24nLFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvY3VzdG9tZXInLFxuICAgICAgLy/nrZbliJJcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL3Rhc2snLCAvL+WpmuekvOS7u+WKoeWNlVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvdGFzdGUnLCAvL+ivleiPnOWIl+ihqCBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL3Rhc3RlZGV0YWlsJywgLy/lj5Hotbfor5Xoj5znlLPor7cgXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS9mZWVkYmFjaycsIC8v6K+V6I+c5Y+N6aaIIFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvZGVwb3QnLCAvL+ekvOWTgeWtmOaUvueUs+ivtyBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL2RlcG90bGlzdCcsIC8v56S85ZOB5a2Y5pS+55Sz6K+3IFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvb3JkZXJtZW51JywgLy/or5Xoj5zor6bmg4UgXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS9zY2hlZHVsZScsIC8v6K+V6I+c5qGj5pyfXG5cbiAgICAgIC8v6L+Q6JClXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvdHJ5ZGlzaGxpc3QnLCAvL+ivleiPnOWIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL3RyeWRldGFpbCcsIC8v6K+V6I+c5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvdGFzaycsLy/miafooYzku7vliqHljZVcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS90YXN0ZScsLy/miafooYzor5Xoj5znlLPor7fliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS9kZXBvdGxpc3QnLC8v56S85ZOB5a2Y5pS+5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvZGVwb3QnLC8v56S85ZOB5a2Y5pS+6K+m5oOFXG5cbiAgICAgIC8v5YWs5YWx6ZSA5ZSuXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvY2hhcmdlYmFjaycsIC8v6YCA5a6i55Sz6K+3XG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvZWRpdGN1cnN0b21lcmluZm8nLCAvL+e8lui+keWuoui1hOS/oeaBr1xuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRsb2cnLCAvL+a3u+WKoOWuoui1hOi3n+i/m1xuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL3R1cm5pbmZvJywgLy/lrqLotYTovazorqnkv6Hmga9cbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9lZGl0dHVybicsIC8v5paw5bu66L2s6K6pXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXInLCAvL+Wuoui1hOS/oeaBryBcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvdGFrZW9yZGVycycsIC8v5o6l5Y2V5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2Rpc3RyaWJ1dGUnLCAvL+W8uuWItuWIhumFjVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL29yZGVyY29tcGxldGUnLCAvL+WujOaIkOiuouWNlVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL3ByZXBheScsIC8v5oSP5ZCR5a6a6YeRXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvcmVmdW5kJywgLy/nlLPor7fpgIDljZVcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheScsIC8v6K6i5Y2V5pSv5LuY6K+B5piOXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL2F1ZGl0JywgLy/orqLljZXlrqHmoLhcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vcmVqZWN0JywgLy/pqbPlm57orqLljZXmlK/ku5hcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vYXVkaXRkZXRhaWwnLCAvL+iuouWNleWuoeaguFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi90ZWFtJywgLy/lm6LpmJ/liJfooahcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vZGVwYXJ0bWVudCcsIC8v6YOo6Zeo6K+m5oOFXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3Vuc3Vic2NyaWJlJywgLy/pgIDlrqLnlLPor7fliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vc3RhdGlzdGljcycsIC8v5pWw5o2u57uf6K6hXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3RyYW5zZGV0YWlsJywgLy/ovazorqnmgKfmg4VcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vYXVkaXRjaGFyZ2ViYWNrJywgLy/pgIDlrqLlkozlt7LmrbvlrqLotYTlrqHmoLhcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vdGVhbW9yZGVycycsXG5cbiAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5ama5bqGXG4gICAgICAncGFnZXMvbWFycnkvbWlzc2NvdW50JyxcbiAgICAgICdwYWdlcy9tYXJyeS9zdGFkdXJhdGlvbicsXG4gICAgICAvL+WuouacjVxuICAgICAgJ3BhZ2VzL21hcnJ5L3NlcnZlci91bmlwdWJsaXNoJyxcbiAgICAgIC8v6ZSA5ZSuXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9vcmRlcm1zZycsIC8v6K6i5Y2V5L+h5oGvXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9zY2hlZHVsZScsIC8v5ama56S85qGj5pyfXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvY29udHJhY3QnLCAvL+WQiOWQjOWIl+ihqFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvY29udHJhY3RlZGl0JywgLy/liJvlu7rlkIjlkIxcbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL2NoZWNrZm91cicsIC8v5a6i6LWE5L+h5oGvIFxuICAgICAgLy/nrZbliJJcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvY3VzdG9tZXInLCAvL+Wuoui1hOS/oeaBryBcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvcmVxdWVzdHBheScsIC8v6K+35qy+55Sz6K+3XG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL3JlcXBheWxpc3QnLCAvL+ivt+asvuWIl+ihqFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS9yZXFhdWRpdGxpc3QnLCAvL+ivt+asvuWuoeaguOWIl+ihqFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS9yZXFhdWRpdCcsIC8v6K+35qy+5a6h5qC4XG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL3dlYicsIC8v6K+V6I+c5qGj5pyfXG5cbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v6Im65pyv5Lit5b+DXG4gICAgICAvL+WuouacjVxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zZXJ2ZXIvc3RhdGlzdGljcycsXG4gICAgICAvL+mUgOWUrlxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL29yZGVybXNnJywgLy/orqLljZXkv6Hmga9cbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9zdGF0aXN0aWNzZml0ZXInLCAvL+e7n+iuoeWIt+mAiVxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL3N0YXRpc3RpY2ZpbHRlcnNsaXN0JywvL+etm+mAieWIl+ihqFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL3NjaGVkdWxlJywgLy/lqZrnpLzmoaPmnJ9cbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL2NvbnRyYWN0JywgLy/lkIjlkIzliJfooahcbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9jb250cmFjdGVkaXQnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAgIC8v562W5YiSXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vYXVkaXQnLCAvL+ivleiPnOaho+acn1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vdGFzdGUnLCAvL+ivleiPnOaho+acn1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vdGFzaycsIC8v6K+V6I+c5qGj5pyfXG4gICAgXSxcblxuICAgIC8vIHN1YnBhY2thZ2VzOlt7XG4gICAgLy8gICBcInJvb3RcIjogXCJwYWdlcy9jb21tb25cIixcbiAgICAvLyAgIFwicGFnZXNcIjogW1xuICAgIC8vICAgICAgICdjaGFuZ3B3JyxcbiAgICAvLyAgICAgICAnY3VzdG9tZXJsaXN0JyxcbiAgICAvLyAgICAgICAnc3RhdGlzdGljc2N1c3RvbWVyJywgLy/nu5/orqHmlbDmja7lrqLotYRcbiAgICAvLyAgICAgICAnc2VydmVyL3B1Ymxpc2gnLFxuICAgIC8vICAgICAgICdzZXJ2ZXIvdW5pb24nLFxuICAgIC8vICAgICAgICdzZXJ2ZXIvY3VzdG9tZXInLFxuICAgIC8vICAgICAgICdzY2hlbWUvdGFzaycsIC8v5ama56S85Lu75Yqh5Y2VXG4gICAgLy8gICAgICAgJ3NjaGVtZS90YXN0ZScsIC8v6K+V6I+c5YiX6KGoIFxuICAgIC8vICAgICAgICdzY2hlbWUvdGFzdGVkZXRhaWwnLCAvL+WPkei1t+ivleiPnOeUs+ivtyBcbiAgICAvLyAgICAgICAnc2NoZW1lL2ZlZWRiYWNrJywgLy/or5Xoj5zlj43ppoggXG4gICAgLy8gICAgICAgJ3NjaGVtZS9kZXBvdCcsIC8v56S85ZOB5a2Y5pS+55Sz6K+3IFxuICAgIC8vICAgICAgICdzY2hlbWUvZGVwb3RsaXN0JywgLy/npLzlk4HlrZjmlL7nlLPor7cgXG4gICAgLy8gICAgICAgJ3NjaGVtZS9vcmRlcm1lbnUnLCAvL+ivleiPnOivpuaDhSBcbiAgICAvLyAgICAgICAnc2NoZW1lL3NjaGVkdWxlJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgICAgICAnZXhlY3V0ZS90cnlkaXNobGlzdCcsIC8v6K+V6I+c5YiX6KGoXG4gICAgLy8gICAgICAgJ2V4ZWN1dGUvdHJ5ZGV0YWlsJywgLy/or5Xoj5zliJfooahcbiAgICAvLyAgICAgICAnZXhlY3V0ZS90YXNrJywvL+aJp+ihjOS7u+WKoeWNlVxuICAgIC8vICAgICAgICdleGVjdXRlL3Rhc3RlJywvL+aJp+ihjOivleiPnOeUs+ivt+WIl+ihqFxuICAgIC8vICAgICAgICdleGVjdXRlL2RlcG90bGlzdCcsLy/npLzlk4HlrZjmlL7liJfooahcbiAgICAvLyAgICAgICAnZXhlY3V0ZS9kZXBvdCcsLy/npLzlk4HlrZjmlL7or6bmg4VcbiAgICAvLyAgICAgICAnc2FsZS9jaGFyZ2ViYWNrJywgLy/pgIDlrqLnlLPor7dcbiAgICAvLyAgICAgICAnc2FsZS9lZGl0Y3Vyc3RvbWVyaW5mbycsIC8v57yW6L6R5a6i6LWE5L+h5oGvXG4gICAgLy8gICAgICAgJ3NhbGUvZWRpdGxvZycsIC8v5re75Yqg5a6i6LWE6Lef6L+bXG4gICAgLy8gICAgICAgJ3NhbGUvdHVybmluZm8nLCAvL+Wuoui1hOi9rOiuqeS/oeaBr1xuICAgIC8vICAgICAgICdzYWxlL2VkaXR0dXJuJywgLy/mlrDlu7rovazorqlcbiAgICAvLyAgICAgICAnc2FsZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAgICdzYWxlL25hdi90YWtlb3JkZXJzJywgLy/mjqXljZXliJfooahcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvZGlzdHJpYnV0ZScsIC8v5by65Yi25YiG6YWNXG4gICAgLy8gICAgICAgJ3NhbGUvb3JkZXJjb21wbGV0ZScsIC8v5a6M5oiQ6K6i5Y2VXG4gICAgLy8gICAgICAgJ3NhbGUvcHJlcGF5JywgLy/mhI/lkJHlrprph5FcbiAgICAvLyAgICAgICAnc2FsZS9yZWZ1bmQnLCAvL+eUs+ivt+mAgOWNlVxuICAgIC8vICAgICAgICdzYWxlL29yZGVycGF5JywgLy/orqLljZXmlK/ku5jor4HmmI5cbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vYXVkaXQnLCAvL+iuouWNleWuoeaguFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9yZWplY3QnLCAvL+mps+WbnuiuouWNleaUr+S7mFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9hdWRpdGRldGFpbCcsIC8v6K6i5Y2V5a6h5qC4XG4gICAgLy8gICAgICAgJ3NhbGUvbmF2L2FkbWluL3RlYW0nLCAvL+WboumYn+WIl+ihqFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9kZXBhcnRtZW50JywgLy/pg6jpl6jor6bmg4VcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vdW5zdWJzY3JpYmUnLCAvL+mAgOWuoueUs+ivt+WIl+ihqFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9zdGF0aXN0aWNzJywgLy/mlbDmja7nu5/orqFcbiAgICAvLyAgICAgICAnc2FsZS9uYXYvYWRtaW4vdHJhbnNkZXRhaWwnLCAvL+i9rOiuqeaAp+aDhVxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi9hdWRpdGNoYXJnZWJhY2snLCAvL+mAgOWuouWSjOW3suatu+Wuoui1hOWuoeaguFxuICAgIC8vICAgICAgICdzYWxlL25hdi9hZG1pbi90ZWFtb3JkZXJzJyxcbiAgICAvLyAgIF1cbiAgICAvLyB9LHtcbiAgICAvLyAgIFwicm9vdFwiOiBcInBhZ2VzL2FydGNlbnRlclwiLFxuICAgIC8vICAgXCJwYWdlc1wiOiBbXG4gICAgLy8gICAgIC8v5a6i5pyNXG4gICAgLy8gICAgICdzZXJ2ZXIvc3RhdGlzdGljcycsXG4gICAgLy8gICAgIC8v6ZSA5ZSuXG4gICAgLy8gICAgICdzYWxlL29yZGVybXNnJywgLy/orqLljZXkv6Hmga9cbiAgICAvLyAgICAgJ3NhbGUvc2NoZWR1bGUnLCAvL+WpmuekvOaho+acn1xuICAgIC8vICAgICAnc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgIC8vICAgICAnc2FsZS9jb250cmFjdCcsIC8v5ZCI5ZCM5YiX6KGoXG4gICAgLy8gICAgICdzYWxlL2NvbnRyYWN0ZWRpdCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgLy8gICAgICdzYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAvLyAgICAgLy/nrZbliJJcbiAgICAvLyAgICAgJ3NjaGVtZS9jdXN0b21lcicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAnc2NoZW1lL2FkbWluL2F1ZGl0JywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgICAgJ3NjaGVtZS9hZG1pbi90YXN0ZScsIC8v6K+V6I+c5qGj5pyfXG4gICAgLy8gICAgICdzY2hlbWUvYWRtaW4vdGFzaycsIC8v6K+V6I+c5qGj5pyfXG4gICAgLy8gICBdXG4gICAgLy8gfSx7XG4gICAgLy8gICBcInJvb3RcIjogXCJwYWdlcy9tYXJyeVwiLFxuICAgIC8vICAgXCJwYWdlc1wiOiBbXG4gICAgLy8gICAgICdtaXNzY291bnQnLFxuICAgIC8vICAgICAnc3RhZHVyYXRpb24nLFxuICAgIC8vICAgICAvL+WuouacjVxuICAgIC8vICAgICAnc2VydmVyL3VuaXB1Ymxpc2gnLFxuICAgIC8vICAgICAvL+mUgOWUrlxuICAgIC8vICAgICAnc2FsZS9vcmRlcm1zZycsIC8v6K6i5Y2V5L+h5oGvXG4gICAgLy8gICAgICdzYWxlL3NjaGVkdWxlJywgLy/lqZrnpLzmoaPmnJ9cbiAgICAvLyAgICAgJ3NhbGUvb3JkZXJtZW51JywgLy/oj5zljZXkv6Hmga9cbiAgICAvLyAgICAgJ3NhbGUvY29udHJhY3QnLCAvL+WQiOWQjOWIl+ihqFxuICAgIC8vICAgICAnc2FsZS9jb250cmFjdGVkaXQnLCAvL+WIm+W7uuWQiOWQjFxuICAgIC8vICAgICAnc2FsZS9jb250cmFjdGRldGFpbCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgLy8gICAgICdzYWxlL2NoZWNrZm91cicsIC8v5a6i6LWE5L+h5oGvIFxuICAgIC8vICAgICAvL+etluWIklxuICAgIC8vICAgICAnc2NoZW1lL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgLy8gICAgICdzY2hlbWUvcmVxdWVzdHBheScsIC8v6K+35qy+55Sz6K+3XG4gICAgLy8gICAgICdzY2hlbWUvcmVxcGF5bGlzdCcsIC8v6K+35qy+5YiX6KGoXG4gICAgLy8gICAgICdzY2hlbWUvcmVxYXVkaXRsaXN0JywgLy/or7fmrL7lrqHmoLjliJfooahcbiAgICAvLyAgICAgJ3NjaGVtZS9yZXFhdWRpdCcsIC8v6K+35qy+5a6h5qC4XG4gICAgLy8gICAgICdzY2hlbWUvd2ViJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAvLyAgIF1cbiAgICAvLyB9XSxcbiAgICBcbiAgICB0YWJCYXI6e1xuICAgICAgXCJjb2xvclwiOiBcIiM3NzdcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMwMDBcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvc3RhdGlzdGljc1wiLFxuICAgICAgICBcInRleHRcIjogXCLnu5/orqFcIlxuICAgICAgfSwge1xuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS1hY3Rpb24ucG5nXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS5wbmdcIixcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuWuoui1hFwiXG4gICAgICB9LCB7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvYXBwcm92YWxcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6I+c5Y2VXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMtYWN0aW9uLnBuZ1wiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMucG5nXCIsXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9wcm9maWxlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXG4gICAgICB9XVxuICAgIH0sXG5cbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTG9hZGluZy4uLicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvblN0eWxlOiAnY3VzdG9tJyAvL+WFqOWxj1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgICAvLyByZXF1ZXN05oum5oiq5ZmoLOavj+asoeS4juacjeWKoeWZqOS6pOS6ku+8jOW4puS4imtleeWAvFxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgLy8gcmVxdWVzdCDnmoTmi6bmiKrlmajvvIzlnKjmr4/mrKHlj5HpgIFyZXF1ZXN06K+35rGC5pe26YO95Lya5Yqg5LiKc2Vzc2lvblxuICAgICAgY29uZmlnKHApIHtcbiAgICAgICAgaWYgKHAubWV0aG9kICYmIHAubWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09ICdQT1NUJykge1xuICAgICAgICAgIC8vIOWPquaciVBPU1TnmoTmg4XlhrXmiY3ms6jlhaUgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIGxldCB1c2VyX2luZm8gPSBwLmRhdGEudWlkID8gcC5kYXRhLnVpZCA6IHN0b3JhZ2UuZ2V0KCd1c2VyX2luZm8nKTtcbiAgICAgICAgICBsZXQgZW1wbG95ZWVfY29tcGFueSA9IHN0b3JhZ2UuZ2V0KCdlbXBsb3llZV9jb21wYW55Jyk7XG4gICAgICAgICAgaWYgKHVzZXJfaW5mbykge1xuICAgICAgICAgICAgaWYgKHAuZGF0YSkge1xuICAgICAgICAgICAgICBwLmRhdGEudWlkID0gdXNlcl9pbmZvO1xuICAgICAgICAgICAgICBwLmRhdGEuZW1wbG95ZWVfY29tcGFueSA9IGVtcGxveWVlX2NvbXBhbnk7XG4gICAgICAgICAgICAgIC8vIHAuZGF0YS51aWQ9J2tlLnNvbmdAbmlrZS5jb20nO1xuICAgICAgICAgICAgICBwLmRhdGEuX3QgPSArbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHAuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1aWQ6IHVzZXJfaW5mbyxcbiAgICAgICAgICAgICAgICBlbXBsb3llZV9jb21wYW55OiBlbXBsb3llZV9jb21wYW55LFxuICAgICAgICAgICAgICAgIF90OiArbmV3IERhdGUoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwLm1ldGhvZCAmJiBwLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJykge1xuICAgICAgICAgIHAudXJsID0gcC51cmwgKyAnLmpzb24nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0T3BlbklkKGNvZGUpIHtcbiAgICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogQy5MT0dJTl9VUkwsXG4gICAgICBtZXRob2Q6IEMuRU5WX01FVEhPRCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBpc0JpbmQob3BlbmlkKSB7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IEMuRU5WX1VSTCArICdpc0JpbmQnLFxuICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogb3BlbmlkXG4gICAgICB9LFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZG9Mb2dpbihjb3VudCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3ZXB5LmxvZ2luKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGF0LmdldE9wZW5JZChyZXN1bHQuY29kZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCd1c2VyX2luZm8nLCB7XG4gICAgICAgICAgdXNlcl9vcGVuX2lkOiByZXN1bHQuZGF0YS51c2VyX21pbmlfb3Blbl9pZFxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmFnZS5zZXQoJ3VzZXJfdW5pb25faWQnLCByZXN1bHQuZGF0YS51c2VyX3VuaW9uX2lkKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScsIEMuT0ZGTElDRV9MSU5FKTtcbiAgICBpZiAoQy5PRkZMSUNFX0xJTkUgPT0gJ2FydGNlbnRlcicpIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VtcGxveWVlX2NvbXBhbnknLCAxKTtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FwcGlkJywgXCJ3eGFkN2MzMmM5NjlmY2EzYmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2VtcGxveWVlX2NvbXBhbnknLCAzKTtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FwcGlkJywgXCJ3eDdlMzhlMzEyODk3ODE1M2JcIik7XG4gICAgfVxuICAgIC8v5o+Q6YaS6Ieq5Yqo5pu05pawXG4gICAgbWluaS5hdXRvVXBkYXRlKCk7XG4gICAgLy/mo4DmtYvmmK/lkKbmmK9pcGhvbmV45bGP5bmV5bC65a+4XG4gICAgbWluaS5pc0lwaG9uZXgoKTtcbiAgICAvL+aJk+WNsOmFjee9ruS/oeaBr1xuICAgIG1pbmkubG9nQ29uZmlnTXNnKCk7XG4gICAgLy/lpJror63oqIBcbiAgICBtaW5pLmxvYWRMYW5ndWFnZVBhY2thZ2UoKTtcbiAgICAvL+iOt+WPlumhtemdouagh+mimOaWh+ahiOS4reW/g+S6jumhtumDqOeahOi3neemu1xuICAgIG1pbmkuZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AoKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgaWYgKEMuSEFTX0JHTSkge1xuICAgICAgbWVkaWEuc3RhcnRCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICB9XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGlmIChDLkhBU19CR00pIHtcbiAgICAgIG1lZGlhLnB1YXNlQmFja2dyb3VuZE11c2ljKCk7XG4gICAgfVxuICB9XG59XG4iXX0=