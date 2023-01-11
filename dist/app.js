'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./common/api.js');

var _api2 = _interopRequireDefault(_api);

var _global = require('./common/global.js');

var _global2 = _interopRequireDefault(_global);

var _common = require('./common/common.js');

var _common2 = _interopRequireDefault(_common);

var _config = require('./common/config.js');

var _config2 = _interopRequireDefault(_config);

var _media = require('./common/utils/media.js');

var _media2 = _interopRequireDefault(_media);

var _storage = require('./common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _request = require('./common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

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
      pages: 'is_dev' ? [
      //////////////////////////////////////////////////公共
      'pages/index', 'pages/login', 'pages/profile', 'pages/statistics', //只有婚庆才有
      'pages/dashbaord', 'pages/common/changpw', 'pages/common/customerlist', 'pages/common/statisticscustomer', //统计数据客资
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
      'pages/artcenter/scheme/admin/task'] : ['pages/index', 'pages/login', 'pages/profile', 'pages/statistics', //只有婚庆才有
      'pages/dashbaord'],
      subpackages: 'is_dev' ? [] : [{
        "root": "pages/common",
        "pages": ['changpw', 'customerlist', 'statisticscustomer', //统计数据客资
        'server/publish', 'server/union', 'server/customer', 'scheme/task', //婚礼任务单
        'scheme/taste', //试菜列表 
        'scheme/tastedetail', //发起试菜申请 
        'scheme/feedback', //试菜反馈 
        'scheme/depot', //礼品存放申请 
        'scheme/depotlist', //礼品存放申请 
        'scheme/ordermenu', //试菜详情 
        'scheme/schedule', //试菜档期
        'execute/trydishlist', //试菜列表
        'execute/trydetail', //试菜列表
        'execute/task', //执行任务单
        'execute/taste', //执行试菜申请列表
        'execute/depotlist', //礼品存放列表
        'execute/depot', //礼品存放详情
        'sale/chargeback', //退客申请
        'sale/editcurstomerinfo', //编辑客资信息
        'sale/editlog', //添加客资跟进
        'sale/turninfo', //客资转让信息
        'sale/editturn', //新建转让
        'sale/customer', //客资信息 
        'sale/nav/takeorders', //接单列表
        'sale/nav/distribute', //强制分配
        'sale/ordercomplete', //完成订单
        'sale/prepay', //意向定金
        'sale/refund', //申请退单
        'sale/orderpay', //订单支付证明
        'sale/nav/admin/audit', //订单审核
        'sale/nav/admin/reject', //驳回订单支付
        'sale/nav/admin/auditdetail', //订单审核
        'sale/nav/admin/team', //团队列表
        'sale/nav/admin/department', //部门详情
        'sale/nav/admin/unsubscribe', //退客申请列表
        'sale/nav/admin/statistics', //数据统计
        'sale/nav/admin/transdetail', //转让性情
        'sale/nav/admin/auditchargeback', //退客和已死客资审核
        'sale/nav/admin/teamorders']
      }, {
        "root": "pages/artcenter",
        "pages": [
        //客服
        'server/statistics',
        //销售
        'sale/ordermsg', //订单信息
        'sale/schedule', //婚礼档期
        'sale/ordermenu', //菜单信息
        'sale/contract', //合同列表
        'sale/contractedit', //创建合同
        'sale/contractdetail', //创建合同
        //策划
        'scheme/customer', //客资信息 
        'scheme/admin/audit', //试菜档期
        'scheme/admin/taste', //试菜档期
        'scheme/admin/task']
      }, {
        "root": "pages/marry",
        "pages": ['misscount', 'staduration',
        //客服
        'server/unipublish',
        //销售
        'sale/ordermsg', //订单信息
        'sale/schedule', //婚礼档期
        'sale/ordermenu', //菜单信息
        'sale/contract', //合同列表
        'sale/contractedit', //创建合同
        'sale/contractdetail', //创建合同
        'sale/checkfour', //客资信息 
        //策划
        'scheme/customer', //客资信息 
        'scheme/requestpay', //请款申请
        'scheme/reqpaylist', //请款列表
        'scheme/reqauditlist', //请款审核列表
        'scheme/reqaudit', //请款审核
        'scheme/web']
      }],

      tabBar: 'wxad7c32c969fca3be' ? {
        "color": "#777",
        "selectedColor": "#000",
        "backgroundColor": "#fff",
        "list": [{
          "selectedIconPath": "./images/tab-a-action.png",
          "iconPath": "./images/tab-a.png",
          "pagePath": "pages/index",
          "text": "客资"
        }, {
          "selectedIconPath": "./images/tab-b-action.png",
          "iconPath": "./images/tab-b.png",
          "pagePath": "pages/dashbaord",
          "text": "菜单"
        }, {
          "selectedIconPath": "./images/tab-c-action.png",
          "iconPath": "./images/tab-c.png",
          "pagePath": "pages/profile",
          "text": "我的"
        }]
      } : {
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
          "pagePath": "pages/dashbaord",
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
        _wepy2.default.setStorageSync('appid', 'wxad7c32c969fca3be');
      } else {
        _wepy2.default.setStorageSync('employee_company', 3);
        _wepy2.default.setStorageSync('appid', 'wx7e38e3128978153b');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInN1YnBhY2thZ2VzIiwidGFiQmFyIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInVzZSIsImludGVyY2VwdCIsInAiLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsInVzZXJfaW5mbyIsImRhdGEiLCJ1aWQiLCJzdG9yYWdlIiwiZ2V0IiwiZW1wbG95ZWVfY29tcGFueSIsIl90IiwiRGF0ZSIsInVybCIsImNvZGUiLCJ3ZXB5IiwicmVxdWVzdCIsIkMiLCJMT0dJTl9VUkwiLCJFTlZfTUVUSE9EIiwiaGVhZGVyIiwib3BlbmlkIiwiRU5WX1VSTCIsImNvdW50IiwidGhhdCIsImxvZ2luIiwidGhlbiIsInJlc3VsdCIsImdldE9wZW5JZCIsInNldCIsInVzZXJfb3Blbl9pZCIsInVzZXJfbWluaV9vcGVuX2lkIiwidXNlcl91bmlvbl9pZCIsInNldFN0b3JhZ2VTeW5jIiwiT0ZGTElDRV9MSU5FIiwibWluaSIsImF1dG9VcGRhdGUiLCJpc0lwaG9uZXgiLCJsb2dDb25maWdNc2ciLCJsb2FkTGFuZ3VhZ2VQYWNrYWdlIiwiZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AiLCJIQVNfQkdNIiwibWVkaWEiLCJzdGFydEJhY2tncm91bmRNdXNpYyIsInB1YXNlQmFja2dyb3VuZE11c2ljIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUF3UEUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXRQZEEsTUFzUGMsR0F0UEw7QUFDUEMsYUFBTyxXQUFTO0FBQ2Q7QUFD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cEIsRUFBd0MsQ0FBeEM7QUFDQWxCLHVCQUFLa0IsY0FBTCxDQUFvQixPQUFwQixFQUE2QixvQkFBN0I7QUFDRCxPQUhELE1BR087QUFDTGxCLHVCQUFLa0IsY0FBTCxDQUFvQixrQkFBcEIsRUFBd0MsQ0FBeEM7QUFDQWxCLHVCQUFLa0IsY0FBTCxDQUFvQixPQUFwQixFQUE2QixvQkFBN0I7QUFDRDtBQUNEO0FBQ0FFLHVCQUFLQyxVQUFMO0FBQ0E7QUFDQUQsdUJBQUtFLFNBQUw7QUFDQTtBQUNBRix1QkFBS0csWUFBTDtBQUNBO0FBQ0FILHVCQUFLSSxtQkFBTDtBQUNBO0FBQ0FKLHVCQUFLSywwQkFBTDtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJdkIsaUJBQUV3QixPQUFOLEVBQWU7QUFDYkMsd0JBQU1DLG9CQUFOO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQ1AsVUFBSTFCLGlCQUFFd0IsT0FBTixFQUFlO0FBQ2JDLHdCQUFNRSxvQkFBTjtBQUNEO0FBQ0Y7Ozs7RUE1VjBCN0IsZUFBSzhCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbic7XG5pbXBvcnQgYXBpIGZyb20gJy4vY29tbW9uL2FwaSc7XG5pbXBvcnQgRyBmcm9tICcuL2NvbW1vbi9nbG9iYWwnO1xuaW1wb3J0IG1pbmkgZnJvbSAnLi9jb21tb24vY29tbW9uJztcbmltcG9ydCBDIGZyb20gJy4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi9jb21tb24vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgcnEgZnJvbSAnLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiAnaXNfZGV2Jz9bXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+WFrOWFsVxuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9sb2dpbicsXG4gICAgICAncGFnZXMvcHJvZmlsZScsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcycsIC8v5Y+q5pyJ5ama5bqG5omN5pyJXG4gICAgICAncGFnZXMvZGFzaGJhb3JkJyxcblxuICAgICAgJ3BhZ2VzL2NvbW1vbi9jaGFuZ3B3JyxcbiAgICAgICdwYWdlcy9jb21tb24vY3VzdG9tZXJsaXN0JyxcbiAgICAgICdwYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVyJywgLy/nu5/orqHmlbDmja7lrqLotYRcbiAgICAgIC8v5a6i5pyNXG4gICAgICAncGFnZXMvY29tbW9uL3NlcnZlci9wdWJsaXNoJyxcbiAgICAgICdwYWdlcy9jb21tb24vc2VydmVyL3VuaW9uJyxcbiAgICAgICdwYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyJyxcbiAgICAgIC8v562W5YiSXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS90YXNrJywgLy/lqZrnpLzku7vliqHljZVcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL3Rhc3RlJywgLy/or5Xoj5zliJfooaggXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS90YXN0ZWRldGFpbCcsIC8v5Y+R6LW36K+V6I+c55Sz6K+3IFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvZmVlZGJhY2snLCAvL+ivleiPnOWPjemmiCBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL2RlcG90JywgLy/npLzlk4HlrZjmlL7nlLPor7cgXG4gICAgICAncGFnZXMvY29tbW9uL3NjaGVtZS9kZXBvdGxpc3QnLCAvL+ekvOWTgeWtmOaUvueUs+ivtyBcbiAgICAgICdwYWdlcy9jb21tb24vc2NoZW1lL29yZGVybWVudScsIC8v6K+V6I+c6K+m5oOFIFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zY2hlbWUvc2NoZWR1bGUnLCAvL+ivleiPnOaho+acn1xuXG4gICAgICAvL+i/kOiQpVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL3RyeWRpc2hsaXN0JywgLy/or5Xoj5zliJfooahcbiAgICAgICdwYWdlcy9jb21tb24vZXhlY3V0ZS90cnlkZXRhaWwnLCAvL+ivleiPnOWIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL3Rhc2snLC8v5omn6KGM5Lu75Yqh5Y2VXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvdGFzdGUnLC8v5omn6KGM6K+V6I+c55Sz6K+35YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL2V4ZWN1dGUvZGVwb3RsaXN0JywvL+ekvOWTgeWtmOaUvuWIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9leGVjdXRlL2RlcG90JywvL+ekvOWTgeWtmOaUvuivpuaDhVxuXG4gICAgICAvL+WFrOWFsemUgOWUrlxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL2NoYXJnZWJhY2snLCAvL+mAgOWuoueUs+ivt1xuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRjdXJzdG9tZXJpbmZvJywgLy/nvJbovpHlrqLotYTkv6Hmga9cbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9lZGl0bG9nJywgLy/mt7vliqDlrqLotYTot5/ov5tcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS90dXJuaW5mbycsIC8v5a6i6LWE6L2s6K6p5L+h5oGvXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvZWRpdHR1cm4nLCAvL+aWsOW7uui9rOiuqVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L3Rha2VvcmRlcnMnLCAvL+aOpeWNleWIl+ihqFxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9kaXN0cmlidXRlJywgLy/lvLrliLbliIbphY1cbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9vcmRlcmNvbXBsZXRlJywgLy/lrozmiJDorqLljZVcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9wcmVwYXknLCAvL+aEj+WQkeWumumHkVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL3JlZnVuZCcsIC8v55Sz6K+36YCA5Y2VXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXknLCAvL+iuouWNleaUr+S7mOivgeaYjlxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9hdWRpdCcsIC8v6K6i5Y2V5a6h5qC4XG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3JlamVjdCcsIC8v6amz5Zue6K6i5Y2V5pSv5LuYXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL2F1ZGl0ZGV0YWlsJywgLy/orqLljZXlrqHmoLhcbiAgICAgICdwYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vdGVhbScsIC8v5Zui6Zif5YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL2RlcGFydG1lbnQnLCAvL+mDqOmXqOivpuaDhVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi91bnN1YnNjcmliZScsIC8v6YCA5a6i55Sz6K+35YiX6KGoXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3N0YXRpc3RpY3MnLCAvL+aVsOaNrue7n+iuoVxuICAgICAgJ3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi90cmFuc2RldGFpbCcsIC8v6L2s6K6p5oCn5oOFXG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL2F1ZGl0Y2hhcmdlYmFjaycsIC8v6YCA5a6i5ZKM5bey5q275a6i6LWE5a6h5qC4XG4gICAgICAncGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3RlYW1vcmRlcnMnLFxuXG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+WpmuW6hlxuICAgICAgJ3BhZ2VzL21hcnJ5L21pc3Njb3VudCcsXG4gICAgICAncGFnZXMvbWFycnkvc3RhZHVyYXRpb24nLFxuICAgICAgLy/lrqLmnI1cbiAgICAgICdwYWdlcy9tYXJyeS9zZXJ2ZXIvdW5pcHVibGlzaCcsXG4gICAgICAvL+mUgOWUrlxuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvb3JkZXJtc2cnLCAvL+iuouWNleS/oeaBr1xuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvc2NoZWR1bGUnLCAvL+WpmuekvOaho+acn1xuICAgICAgJ3BhZ2VzL21hcnJ5L3NhbGUvb3JkZXJtZW51JywgLy/oj5zljZXkv6Hmga9cbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL2NvbnRyYWN0JywgLy/lkIjlkIzliJfooahcbiAgICAgICdwYWdlcy9tYXJyeS9zYWxlL2NvbnRyYWN0ZWRpdCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9jb250cmFjdGRldGFpbCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgICAncGFnZXMvbWFycnkvc2FsZS9jaGVja2ZvdXInLCAvL+Wuoui1hOS/oeaBryBcbiAgICAgIC8v562W5YiSXG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAncGFnZXMvbWFycnkvc2NoZW1lL3JlcXVlc3RwYXknLCAvL+ivt+asvueUs+ivt1xuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS9yZXFwYXlsaXN0JywgLy/or7fmrL7liJfooahcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvcmVxYXVkaXRsaXN0JywgLy/or7fmrL7lrqHmoLjliJfooahcbiAgICAgICdwYWdlcy9tYXJyeS9zY2hlbWUvcmVxYXVkaXQnLCAvL+ivt+asvuWuoeaguFxuICAgICAgJ3BhZ2VzL21hcnJ5L3NjaGVtZS93ZWInLCAvL+ivleiPnOaho+acn1xuXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+iJuuacr+S4reW/g1xuICAgICAgLy/lrqLmnI1cbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2VydmVyL3N0YXRpc3RpY3MnLFxuICAgICAgLy/plIDllK5cbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2FsZS9vcmRlcm1zZycsIC8v6K6i5Y2V5L+h5oGvXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NhbGUvc2NoZWR1bGUnLCAvL+WpmuekvOaho+acn1xuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL29yZGVybWVudScsIC8v6I+c5Y2V5L+h5oGvXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NhbGUvY29udHJhY3QnLCAvL+WQiOWQjOWIl+ihqFxuICAgICAgJ3BhZ2VzL2FydGNlbnRlci9zYWxlL2NvbnRyYWN0ZWRpdCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NhbGUvY29udHJhY3RkZXRhaWwnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgLy/nrZbliJJcbiAgICAgICdwYWdlcy9hcnRjZW50ZXIvc2NoZW1lL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9hZG1pbi9hdWRpdCcsIC8v6K+V6I+c5qGj5pyfXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9hZG1pbi90YXN0ZScsIC8v6K+V6I+c5qGj5pyfXG4gICAgICAncGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9hZG1pbi90YXNrJywgLy/or5Xoj5zmoaPmnJ9cbiAgICBdOltcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgJ3BhZ2VzL3Byb2ZpbGUnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MnLCAvL+WPquacieWpmuW6huaJjeaciVxuICAgICAgJ3BhZ2VzL2Rhc2hiYW9yZCcsXG4gICAgXSxcbiAgICBzdWJwYWNrYWdlczogJ2lzX2Rldic/W106W3tcbiAgICAgIFwicm9vdFwiOiBcInBhZ2VzL2NvbW1vblwiLFxuICAgICAgXCJwYWdlc1wiOiBbXG4gICAgICAgICAgJ2NoYW5ncHcnLFxuICAgICAgICAgICdjdXN0b21lcmxpc3QnLFxuICAgICAgICAgICdzdGF0aXN0aWNzY3VzdG9tZXInLCAvL+e7n+iuoeaVsOaNruWuoui1hFxuICAgICAgICAgICdzZXJ2ZXIvcHVibGlzaCcsXG4gICAgICAgICAgJ3NlcnZlci91bmlvbicsXG4gICAgICAgICAgJ3NlcnZlci9jdXN0b21lcicsXG4gICAgICAgICAgJ3NjaGVtZS90YXNrJywgLy/lqZrnpLzku7vliqHljZVcbiAgICAgICAgICAnc2NoZW1lL3Rhc3RlJywgLy/or5Xoj5zliJfooaggXG4gICAgICAgICAgJ3NjaGVtZS90YXN0ZWRldGFpbCcsIC8v5Y+R6LW36K+V6I+c55Sz6K+3IFxuICAgICAgICAgICdzY2hlbWUvZmVlZGJhY2snLCAvL+ivleiPnOWPjemmiCBcbiAgICAgICAgICAnc2NoZW1lL2RlcG90JywgLy/npLzlk4HlrZjmlL7nlLPor7cgXG4gICAgICAgICAgJ3NjaGVtZS9kZXBvdGxpc3QnLCAvL+ekvOWTgeWtmOaUvueUs+ivtyBcbiAgICAgICAgICAnc2NoZW1lL29yZGVybWVudScsIC8v6K+V6I+c6K+m5oOFIFxuICAgICAgICAgICdzY2hlbWUvc2NoZWR1bGUnLCAvL+ivleiPnOaho+acn1xuICAgICAgICAgICdleGVjdXRlL3RyeWRpc2hsaXN0JywgLy/or5Xoj5zliJfooahcbiAgICAgICAgICAnZXhlY3V0ZS90cnlkZXRhaWwnLCAvL+ivleiPnOWIl+ihqFxuICAgICAgICAgICdleGVjdXRlL3Rhc2snLC8v5omn6KGM5Lu75Yqh5Y2VXG4gICAgICAgICAgJ2V4ZWN1dGUvdGFzdGUnLC8v5omn6KGM6K+V6I+c55Sz6K+35YiX6KGoXG4gICAgICAgICAgJ2V4ZWN1dGUvZGVwb3RsaXN0JywvL+ekvOWTgeWtmOaUvuWIl+ihqFxuICAgICAgICAgICdleGVjdXRlL2RlcG90JywvL+ekvOWTgeWtmOaUvuivpuaDhVxuICAgICAgICAgICdzYWxlL2NoYXJnZWJhY2snLCAvL+mAgOWuoueUs+ivt1xuICAgICAgICAgICdzYWxlL2VkaXRjdXJzdG9tZXJpbmZvJywgLy/nvJbovpHlrqLotYTkv6Hmga9cbiAgICAgICAgICAnc2FsZS9lZGl0bG9nJywgLy/mt7vliqDlrqLotYTot5/ov5tcbiAgICAgICAgICAnc2FsZS90dXJuaW5mbycsIC8v5a6i6LWE6L2s6K6p5L+h5oGvXG4gICAgICAgICAgJ3NhbGUvZWRpdHR1cm4nLCAvL+aWsOW7uui9rOiuqVxuICAgICAgICAgICdzYWxlL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAgICAgJ3NhbGUvbmF2L3Rha2VvcmRlcnMnLCAvL+aOpeWNleWIl+ihqFxuICAgICAgICAgICdzYWxlL25hdi9kaXN0cmlidXRlJywgLy/lvLrliLbliIbphY1cbiAgICAgICAgICAnc2FsZS9vcmRlcmNvbXBsZXRlJywgLy/lrozmiJDorqLljZVcbiAgICAgICAgICAnc2FsZS9wcmVwYXknLCAvL+aEj+WQkeWumumHkVxuICAgICAgICAgICdzYWxlL3JlZnVuZCcsIC8v55Sz6K+36YCA5Y2VXG4gICAgICAgICAgJ3NhbGUvb3JkZXJwYXknLCAvL+iuouWNleaUr+S7mOivgeaYjlxuICAgICAgICAgICdzYWxlL25hdi9hZG1pbi9hdWRpdCcsIC8v6K6i5Y2V5a6h5qC4XG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL3JlamVjdCcsIC8v6amz5Zue6K6i5Y2V5pSv5LuYXG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL2F1ZGl0ZGV0YWlsJywgLy/orqLljZXlrqHmoLhcbiAgICAgICAgICAnc2FsZS9uYXYvYWRtaW4vdGVhbScsIC8v5Zui6Zif5YiX6KGoXG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL2RlcGFydG1lbnQnLCAvL+mDqOmXqOivpuaDhVxuICAgICAgICAgICdzYWxlL25hdi9hZG1pbi91bnN1YnNjcmliZScsIC8v6YCA5a6i55Sz6K+35YiX6KGoXG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL3N0YXRpc3RpY3MnLCAvL+aVsOaNrue7n+iuoVxuICAgICAgICAgICdzYWxlL25hdi9hZG1pbi90cmFuc2RldGFpbCcsIC8v6L2s6K6p5oCn5oOFXG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL2F1ZGl0Y2hhcmdlYmFjaycsIC8v6YCA5a6i5ZKM5bey5q275a6i6LWE5a6h5qC4XG4gICAgICAgICAgJ3NhbGUvbmF2L2FkbWluL3RlYW1vcmRlcnMnLFxuICAgICAgXVxuICAgIH0se1xuICAgICAgXCJyb290XCI6IFwicGFnZXMvYXJ0Y2VudGVyXCIsXG4gICAgICBcInBhZ2VzXCI6IFtcbiAgICAgICAgLy/lrqLmnI1cbiAgICAgICAgJ3NlcnZlci9zdGF0aXN0aWNzJyxcbiAgICAgICAgLy/plIDllK5cbiAgICAgICAgJ3NhbGUvb3JkZXJtc2cnLCAvL+iuouWNleS/oeaBr1xuICAgICAgICAnc2FsZS9zY2hlZHVsZScsIC8v5ama56S85qGj5pyfXG4gICAgICAgICdzYWxlL29yZGVybWVudScsIC8v6I+c5Y2V5L+h5oGvXG4gICAgICAgICdzYWxlL2NvbnRyYWN0JywgLy/lkIjlkIzliJfooahcbiAgICAgICAgJ3NhbGUvY29udHJhY3RlZGl0JywgLy/liJvlu7rlkIjlkIxcbiAgICAgICAgJ3NhbGUvY29udHJhY3RkZXRhaWwnLCAvL+WIm+W7uuWQiOWQjFxuICAgICAgICAvL+etluWIklxuICAgICAgICAnc2NoZW1lL2N1c3RvbWVyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAgICdzY2hlbWUvYWRtaW4vYXVkaXQnLCAvL+ivleiPnOaho+acn1xuICAgICAgICAnc2NoZW1lL2FkbWluL3Rhc3RlJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAgICAgJ3NjaGVtZS9hZG1pbi90YXNrJywgLy/or5Xoj5zmoaPmnJ9cbiAgICAgIF1cbiAgICB9LHtcbiAgICAgIFwicm9vdFwiOiBcInBhZ2VzL21hcnJ5XCIsXG4gICAgICBcInBhZ2VzXCI6IFtcbiAgICAgICAgJ21pc3Njb3VudCcsXG4gICAgICAgICdzdGFkdXJhdGlvbicsXG4gICAgICAgIC8v5a6i5pyNXG4gICAgICAgICdzZXJ2ZXIvdW5pcHVibGlzaCcsXG4gICAgICAgIC8v6ZSA5ZSuXG4gICAgICAgICdzYWxlL29yZGVybXNnJywgLy/orqLljZXkv6Hmga9cbiAgICAgICAgJ3NhbGUvc2NoZWR1bGUnLCAvL+WpmuekvOaho+acn1xuICAgICAgICAnc2FsZS9vcmRlcm1lbnUnLCAvL+iPnOWNleS/oeaBr1xuICAgICAgICAnc2FsZS9jb250cmFjdCcsIC8v5ZCI5ZCM5YiX6KGoXG4gICAgICAgICdzYWxlL2NvbnRyYWN0ZWRpdCcsIC8v5Yib5bu65ZCI5ZCMXG4gICAgICAgICdzYWxlL2NvbnRyYWN0ZGV0YWlsJywgLy/liJvlu7rlkIjlkIxcbiAgICAgICAgJ3NhbGUvY2hlY2tmb3VyJywgLy/lrqLotYTkv6Hmga8gXG4gICAgICAgIC8v562W5YiSXG4gICAgICAgICdzY2hlbWUvY3VzdG9tZXInLCAvL+Wuoui1hOS/oeaBryBcbiAgICAgICAgJ3NjaGVtZS9yZXF1ZXN0cGF5JywgLy/or7fmrL7nlLPor7dcbiAgICAgICAgJ3NjaGVtZS9yZXFwYXlsaXN0JywgLy/or7fmrL7liJfooahcbiAgICAgICAgJ3NjaGVtZS9yZXFhdWRpdGxpc3QnLCAvL+ivt+asvuWuoeaguOWIl+ihqFxuICAgICAgICAnc2NoZW1lL3JlcWF1ZGl0JywgLy/or7fmrL7lrqHmoLhcbiAgICAgICAgJ3NjaGVtZS93ZWInLCAvL+ivleiPnOaho+acn1xuICAgICAgXVxuICAgIH1dLFxuICAgIFxuICAgIHRhYkJhcjogJ3d4YWQ3YzMyYzk2OWZjYTNiZSc/e1xuICAgICAgXCJjb2xvclwiOiBcIiM3NzdcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMwMDBcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1hLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1hLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5kZXhcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5a6i6LWEXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWItYWN0aW9uLnBuZ1wiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWIucG5nXCIsXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9kYXNoYmFvcmRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6I+c5Y2VXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMtYWN0aW9uLnBuZ1wiLFxuICAgICAgICBcImljb25QYXRoXCI6IFwiLi9pbWFnZXMvdGFiLWMucG5nXCIsXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9wcm9maWxlXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXG4gICAgICB9XVxuICAgIH06e1xuICAgICAgXCJjb2xvclwiOiBcIiM3NzdcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMwMDBcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1kLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvc3RhdGlzdGljc1wiLFxuICAgICAgICBcInRleHRcIjogXCLnu5/orqFcIlxuICAgICAgfSwge1xuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS1hY3Rpb24ucG5nXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIuL2ltYWdlcy90YWItYS5wbmdcIixcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuWuoui1hFwiXG4gICAgICB9LCB7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1iLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvZGFzaGJhb3JkXCIsXG4gICAgICAgIFwidGV4dFwiOiBcIuiPnOWNlVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1jLWFjdGlvbi5wbmdcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi4vaW1hZ2VzL3RhYi1jLnBuZ1wiLFxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvcHJvZmlsZVwiLFxuICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIlxuICAgICAgfV1cbiAgICB9LFxuXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0xvYWRpbmcuLi4nLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25TdHlsZTogJ2N1c3RvbScgLy/lhajlsY9cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gICAgLy8gcmVxdWVzdOaLpuaIquWZqCzmr4/mrKHkuI7mnI3liqHlmajkuqTkupLvvIzluKbkuIprZXnlgLxcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcbiAgICAgIC8vIHJlcXVlc3Qg55qE5oum5oiq5Zmo77yM5Zyo5q+P5qyh5Y+R6YCBcmVxdWVzdOivt+axguaXtumDveS8muWKoOS4inNlc3Npb25cbiAgICAgIGNvbmZpZyhwKSB7XG4gICAgICAgIGlmIChwLm1ldGhvZCAmJiBwLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAvLyDlj6rmnIlQT1NU55qE5oOF5Ya15omN5rOo5YWlICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBsZXQgdXNlcl9pbmZvID0gcC5kYXRhLnVpZCA/IHAuZGF0YS51aWQgOiBzdG9yYWdlLmdldCgndXNlcl9pbmZvJyk7XG4gICAgICAgICAgbGV0IGVtcGxveWVlX2NvbXBhbnkgPSBzdG9yYWdlLmdldCgnZW1wbG95ZWVfY29tcGFueScpO1xuICAgICAgICAgIGlmICh1c2VyX2luZm8pIHtcbiAgICAgICAgICAgIGlmIChwLmRhdGEpIHtcbiAgICAgICAgICAgICAgcC5kYXRhLnVpZCA9IHVzZXJfaW5mbztcbiAgICAgICAgICAgICAgcC5kYXRhLmVtcGxveWVlX2NvbXBhbnkgPSBlbXBsb3llZV9jb21wYW55O1xuICAgICAgICAgICAgICAvLyBwLmRhdGEudWlkPSdrZS5zb25nQG5pa2UuY29tJztcbiAgICAgICAgICAgICAgcC5kYXRhLl90ID0gK25ldyBEYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgdWlkOiB1c2VyX2luZm8sXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVfY29tcGFueTogZW1wbG95ZWVfY29tcGFueSxcbiAgICAgICAgICAgICAgICBfdDogK25ldyBEYXRlKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocC5tZXRob2QgJiYgcC5tZXRob2QudG9VcHBlckNhc2UoKSA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICBwLnVybCA9IHAudXJsICsgJy5qc29uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldE9wZW5JZChjb2RlKSB7XG4gICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IEMuTE9HSU5fVVJMLFxuICAgICAgbWV0aG9kOiBDLkVOVl9NRVRIT0QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6IGNvZGVcbiAgICAgIH0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaXNCaW5kKG9wZW5pZCkge1xuICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBDLkVOVl9VUkwgKyAnaXNCaW5kJyxcbiAgICAgIG1ldGhvZDogQy5FTlZfTUVUSE9ELFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IG9wZW5pZFxuICAgICAgfSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRvTG9naW4oY291bnQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd2VweS5sb2dpbigpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhhdC5nZXRPcGVuSWQocmVzdWx0LmNvZGUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBzdG9yYWdlLnNldCgndXNlcl9pbmZvJywge1xuICAgICAgICAgIHVzZXJfb3Blbl9pZDogcmVzdWx0LmRhdGEudXNlcl9taW5pX29wZW5faWRcbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCd1c2VyX3VuaW9uX2lkJywgcmVzdWx0LmRhdGEudXNlcl91bmlvbl9pZCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnLCBDLk9GRkxJQ0VfTElORSk7XG4gICAgaWYgKEMuT0ZGTElDRV9MSU5FID09ICdhcnRjZW50ZXInKSB7XG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdlbXBsb3llZV9jb21wYW55JywgMSk7XG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcHBpZCcsICd3eGFkN2MzMmM5NjlmY2EzYmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZW1wbG95ZWVfY29tcGFueScsIDMpO1xuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXBwaWQnLCAnd3g3ZTM4ZTMxMjg5NzgxNTNiJyk7XG4gICAgfVxuICAgIC8v5o+Q6YaS6Ieq5Yqo5pu05pawXG4gICAgbWluaS5hdXRvVXBkYXRlKCk7XG4gICAgLy/mo4DmtYvmmK/lkKbmmK9pcGhvbmV45bGP5bmV5bC65a+4XG4gICAgbWluaS5pc0lwaG9uZXgoKTtcbiAgICAvL+aJk+WNsOmFjee9ruS/oeaBr1xuICAgIG1pbmkubG9nQ29uZmlnTXNnKCk7XG4gICAgLy/lpJror63oqIBcbiAgICBtaW5pLmxvYWRMYW5ndWFnZVBhY2thZ2UoKTtcbiAgICAvL+iOt+WPlumhtemdouagh+mimOaWh+ahiOS4reW/g+S6jumhtumDqOeahOi3neemu1xuICAgIG1pbmkuZ2V0Qm91bmRpbmdDbGllbnRDZW50ZXJUb3AoKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgaWYgKEMuSEFTX0JHTSkge1xuICAgICAgbWVkaWEuc3RhcnRCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICB9XG4gIH1cbiAgb25IaWRlKCkge1xuICAgIGlmIChDLkhBU19CR00pIHtcbiAgICAgIG1lZGlhLnB1YXNlQmFja2dyb3VuZE11c2ljKCk7XG4gICAgfVxuICB9XG59XG4iXX0=