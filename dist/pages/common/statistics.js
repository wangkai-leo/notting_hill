'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _date = require('./../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _statistics = require('./../../components/common/server/statistics.js');

var _statistics2 = _interopRequireDefault(_statistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      statistics: _statistics2.default
    }, _this.data = {
      isback: false,
      isopacity: true,
      title: '客资',
      is_hide: true,
      page_data: null,
      user: null,
      user_act: null,
      start_date: '',
      end_date: '',
      order_date_start: '',
      order_date_end: '',
      pay_date_start: '',
      pay_date_end: ''
    }, _this.methods = {
      naviMissCount: function naviMissCount(e) {
        var map = JSON.stringify(e.currentTarget.dataset.map);
        _wepy2.default.navigateTo({
          url: '/pages/marry/misscount?map=' + map
        });
      },
      naviToTotal: function naviToTotal(e) {
        var index = e.currentTarget.dataset.index;
        var it = this.page_data.users[index];
        var start_date = this.start_date;
        var end_date = this.end_date;
        var employee_ids = it.employee_ids;
        var user_status = it.user_status;
        var parm = 'start_date=' + start_date + '&end_date=' + end_date + '&employee_ids=' + employee_ids + '&user_status=' + user_status;
        _wepy2.default.navigateTo({
          url: '/pages/common/customerlist?' + parm
        });
      },
      naviToSchemeList: function naviToSchemeList(e) {
        var parm = 'order_date_start=' + this.order_date_start + '&order_date_end=' + this.order_date_end + '&pay_date_start=' + this.pay_date_start + '&pay_date_end=' + this.pay_date_end + '&data_type=' + e.currentTarget.dataset.type;
        _wepy2.default.navigateTo({
          url: '/pages/common/customerlist?' + parm
        });
      },
      naviToList: function naviToList(e) {
        var map = JSON.stringify(e.currentTarget.dataset.map);
        _wepy2.default.navigateTo({
          url: '/pages/common/customerlist?map=' + map
        });
      },
      naviCustomerlist: function naviCustomerlist(e) {
        var index = e.currentTarget.dataset.index;
        var it = this.page_data.statistics_array[index];
        var start_date = this.start_date;
        var end_date = this.end_date;
        var channel_id = it.channel_id;
        var intention_id = it.intention_id;
        var intention_city = it.intention_city;
        var is_achievement = it.is_achievement;
        var employee_ids = it.employee_ids;
        var parm = 'start_date=' + start_date + '&end_date=' + end_date + '&channel_id=' + channel_id + '&intention_id=' + intention_id + '&intention_city=' + intention_city + '&is_achievement=' + is_achievement + '&employee_ids=' + employee_ids;
        _wepy2.default.navigateTo({
          url: '/pages/common/customerlist?' + parm
        });
      },
      turn: function turn() {
        var that = this;
        that.is_lock = true;
        _request2.default.get('changeOnlineStatus', {
          200: function _(result) {
            that.is_lock = false;
            if (that.user.online_status == 1) {
              that.user.online_status = 0;
            } else {
              that.user.online_status = 1;
            }
            that.$apply();
          }
        }, {});
      },
      naviChangeDuration: function naviChangeDuration(e) {
        var pay = e.currentTarget.dataset.pay;
        var start = e.currentTarget.dataset.start;
        var end = e.currentTarget.dataset.end;
        _wepy2.default.navigateTo({
          url: '/pages/marry/staduration?start_date=' + start + '&end_date=' + end + '&pay=' + pay
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      _wepy2.default.setStorageSync('pick_date', false);
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.user = result.data.data;
          that.$apply();
        }
      });

      var now = new Date();
      var month = now.getMonth();
      var year = now.getFullYear();
      that.order_date_start = that.pay_date_start = that.start_date = _date2.default.dateFormat('yyyy-MM-dd', new Date(year, month, 1));
      that.order_date_end = that.pay_date_end = that.end_date = _date2.default.dateFormat('yyyy-MM-dd', new Date());
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      var user = that.user_act = _wepy2.default.getStorageSync('user');
      var pick_time = _wepy2.default.getStorageSync('pick_date');
      if (pick_time) {
        if (!user.is_scheme) {
          that.order_date_start = that.start_date = pick_time.start_date;
          that.order_date_end = that.end_date = pick_time.end_date;
        } else {
          if (pick_time.is_pay == 'yes') {
            that.pay_date_start = pick_time.start_date;
            that.pay_date_end = pick_time.end_date;
          } else {
            that.order_date_start = pick_time.start_date;
            that.order_date_end = pick_time.end_date;
          }
        }
      } else {
        var now = new Date();
        var month = now.getMonth();
        var year = now.getFullYear();
        that.start_date = that.end_date = _date2.default.dateFormat('yyyy-MM-dd', new Date());
      }
      if (!that.user_act) {
        _wepy2.default.redirectTo({
          url: '/pages/login'
        });
      } else {
        var api_name = '';
        that.user_act.is_sale ? api_name = 'getDataStatistics' : '';
        that.user_act.is_scheme ? api_name = 'getImplementOrderStatistics' : '';
        that.user_act.is_excute ? api_name = 'getDataStatistics' : '';

        var data = {};
        if (that.user_act.is_scheme) {
          data = {
            pay_date_start: that.pay_date_start,
            pay_date_end: that.pay_date_end,
            order_date_start: that.order_date_start,
            order_date_end: that.order_date_end
          };
        } else {
          data = {
            start_date: that.start_date,
            end_date: that.end_date
          };
        }
        if (api_name) {
          _request2.default.get(api_name, {
            200: function _(result) {
              that.page_data = result.data.data;
              that.$apply();
            }
          }, data);
        }
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJzdGF0aXN0aWNzIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNfaGlkZSIsInBhZ2VfZGF0YSIsInVzZXIiLCJ1c2VyX2FjdCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsInBheV9kYXRlX3N0YXJ0IiwicGF5X2RhdGVfZW5kIiwibWV0aG9kcyIsIm5hdmlNaXNzQ291bnQiLCJlIiwibWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYXZpVG9Ub3RhbCIsImluZGV4IiwiaXQiLCJ1c2VycyIsImVtcGxveWVlX2lkcyIsInVzZXJfc3RhdHVzIiwicGFybSIsIm5hdmlUb1NjaGVtZUxpc3QiLCJ0eXBlIiwibmF2aVRvTGlzdCIsIm5hdmlDdXN0b21lcmxpc3QiLCJzdGF0aXN0aWNzX2FycmF5IiwiY2hhbm5lbF9pZCIsImludGVudGlvbl9pZCIsImludGVudGlvbl9jaXR5IiwiaXNfYWNoaWV2ZW1lbnQiLCJ0dXJuIiwidGhhdCIsImlzX2xvY2siLCJycSIsImdldCIsIm9ubGluZV9zdGF0dXMiLCIkYXBwbHkiLCJuYXZpQ2hhbmdlRHVyYXRpb24iLCJwYXkiLCJzdGFydCIsImVuZCIsIm9wdGlvbnMiLCJzZXRTdG9yYWdlU3luYyIsInJlc3VsdCIsIm5vdyIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF0IiwiZGF0ZUZvcm1hdCIsImdldFN0b3JhZ2VTeW5jIiwicGlja190aW1lIiwiaXNfc2NoZW1lIiwiaXNfcGF5IiwicmVkaXJlY3RUbyIsImFwaV9uYW1lIiwiaXNf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O0FBQ0ExQixhQUFLbkMsUUFBTCxDQUFjMEQsU0FBZCxHQUEwQkcsV0FBVyw2QkFBckMsR0FBcUUsRUFBckU7QUFDQTFCLGFBQUtuQyxRQUFMLENBQWMrRCxTQUFkLEdBQTBCRixXQUFXLG1CQUFyQyxHQUEyRCxFQUEzRDs7QUFFQSxZQUFJcEUsT0FBTyxFQUFYO0FBQ0EsWUFBSTBDLEtBQUtuQyxRQUFMLENBQWMwRCxTQUFsQixFQUE2QjtBQUMzQmpFLGlCQUFPO0FBQ0xZLDRCQUFnQjhCLEtBQUs5QixjQURoQjtBQUVMQywwQkFBYzZCLEtBQUs3QixZQUZkO0FBR0xILDhCQUFrQmdDLEtBQUtoQyxnQkFIbEI7QUFJTEMsNEJBQWdCK0IsS0FBSy9CO0FBSmhCLFdBQVA7QUFNRCxTQVBELE1BT087QUFDTFgsaUJBQU87QUFDTFEsd0JBQVlrQyxLQUFLbEMsVUFEWjtBQUVMQyxzQkFBVWlDLEtBQUtqQztBQUZWLFdBQVA7QUFJRDtBQUNELFlBQUkyRCxRQUFKLEVBQWM7QUFDWnhCLDRCQUFHQyxHQUFILENBQU91QixRQUFQLEVBQWlCO0FBQ2YsaUJBQUssbUJBQVU7QUFDYjFCLG1CQUFLckMsU0FBTCxHQUFpQmlELE9BQU90RCxJQUFQLENBQVlBLElBQTdCO0FBQ0EwQyxtQkFBS0ssTUFBTDtBQUNEO0FBSmMsV0FBakIsRUFLRy9DLElBTEg7QUFNRDtBQUNGO0FBQ0Y7Ozs7RUExS2dDc0IsZUFBS2lELEk7O2tCQUFuQi9FLEsiLCJmaWxlIjoic3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IGRhdCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHN0YXRpc3RpY3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vc2VydmVyL3N0YXRpc3RpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHN0YXRpc3RpY3M6IHN0YXRpc3RpY3NcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IGZhbHNlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+Wuoui1hCcsXG4gICAgaXNfaGlkZTogdHJ1ZSxcbiAgICBwYWdlX2RhdGE6IG51bGwsXG4gICAgdXNlcjogbnVsbCxcbiAgICB1c2VyX2FjdDogbnVsbCxcbiAgICBzdGFydF9kYXRlOiAnJyxcbiAgICBlbmRfZGF0ZTogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIHBheV9kYXRlX3N0YXJ0OiAnJyxcbiAgICBwYXlfZGF0ZV9lbmQ6ICcnLFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIG5hdmlNaXNzQ291bnQoZSkge1xuICAgICAgbGV0IG1hcCA9IEpTT04uc3RyaW5naWZ5KGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1hcCk7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvbWlzc2NvdW50P21hcD0nICsgbWFwXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG5hdmlUb1RvdGFsKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IGl0ID0gdGhpcy5wYWdlX2RhdGEudXNlcnNbaW5kZXhdO1xuICAgICAgbGV0IHN0YXJ0X2RhdGUgPSB0aGlzLnN0YXJ0X2RhdGU7XG4gICAgICBsZXQgZW5kX2RhdGUgPSB0aGlzLmVuZF9kYXRlO1xuICAgICAgbGV0IGVtcGxveWVlX2lkcyA9IGl0LmVtcGxveWVlX2lkcztcbiAgICAgIGxldCB1c2VyX3N0YXR1cyA9IGl0LnVzZXJfc3RhdHVzO1xuICAgICAgbGV0IHBhcm0gPSAnc3RhcnRfZGF0ZT0nICsgc3RhcnRfZGF0ZSArICcmZW5kX2RhdGU9JyArIGVuZF9kYXRlICsgJyZlbXBsb3llZV9pZHM9JyArIGVtcGxveWVlX2lkcyArICcmdXNlcl9zdGF0dXM9JyArIHVzZXJfc3RhdHVzO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3Q/JyArIHBhcm1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aVRvU2NoZW1lTGlzdChlKSB7XG4gICAgICBsZXQgcGFybSA9ICdvcmRlcl9kYXRlX3N0YXJ0PScgKyB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgK1xuICAgICAgICAnJm9yZGVyX2RhdGVfZW5kPScgKyB0aGlzLm9yZGVyX2RhdGVfZW5kICtcbiAgICAgICAgJyZwYXlfZGF0ZV9zdGFydD0nICsgdGhpcy5wYXlfZGF0ZV9zdGFydCArXG4gICAgICAgICcmcGF5X2RhdGVfZW5kPScgKyB0aGlzLnBheV9kYXRlX2VuZCArXG4gICAgICAgICcmZGF0YV90eXBlPScgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3Q/JyArIHBhcm1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgbWFwID0gSlNPTi5zdHJpbmdpZnkoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFwKTtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vY3VzdG9tZXJsaXN0P21hcD0nICsgbWFwXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG5hdmlDdXN0b21lcmxpc3QoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgaXQgPSB0aGlzLnBhZ2VfZGF0YS5zdGF0aXN0aWNzX2FycmF5W2luZGV4XTtcbiAgICAgIGxldCBzdGFydF9kYXRlID0gdGhpcy5zdGFydF9kYXRlO1xuICAgICAgbGV0IGVuZF9kYXRlID0gdGhpcy5lbmRfZGF0ZTtcbiAgICAgIGxldCBjaGFubmVsX2lkID0gaXQuY2hhbm5lbF9pZDtcbiAgICAgIGxldCBpbnRlbnRpb25faWQgPSBpdC5pbnRlbnRpb25faWQ7XG4gICAgICBsZXQgaW50ZW50aW9uX2NpdHkgPSBpdC5pbnRlbnRpb25fY2l0eTtcbiAgICAgIGxldCBpc19hY2hpZXZlbWVudCA9IGl0LmlzX2FjaGlldmVtZW50O1xuICAgICAgbGV0IGVtcGxveWVlX2lkcyA9IGl0LmVtcGxveWVlX2lkcztcbiAgICAgIGxldCBwYXJtID0gJ3N0YXJ0X2RhdGU9JyArIHN0YXJ0X2RhdGUgKyAnJmVuZF9kYXRlPScgKyBlbmRfZGF0ZSArICcmY2hhbm5lbF9pZD0nICsgY2hhbm5lbF9pZCArICcmaW50ZW50aW9uX2lkPScgKyBpbnRlbnRpb25faWQgKyAnJmludGVudGlvbl9jaXR5PScgKyBpbnRlbnRpb25fY2l0eSArICcmaXNfYWNoaWV2ZW1lbnQ9JyArIGlzX2FjaGlldmVtZW50ICsgJyZlbXBsb3llZV9pZHM9JyArIGVtcGxveWVlX2lkcztcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vY3VzdG9tZXJsaXN0PycgKyBwYXJtXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHR1cm4oKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmlzX2xvY2sgPSB0cnVlO1xuICAgICAgcnEuZ2V0KCdjaGFuZ2VPbmxpbmVTdGF0dXMnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LmlzX2xvY2sgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhhdC51c2VyLm9ubGluZV9zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgdGhhdC51c2VyLm9ubGluZV9zdGF0dXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGF0LnVzZXIub25saW5lX3N0YXR1cyA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHt9KVxuICAgIH0sXG4gICAgbmF2aUNoYW5nZUR1cmF0aW9uKGUpIHtcbiAgICAgIGxldCBwYXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXk7XG4gICAgICBsZXQgc3RhcnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zdGFydDtcbiAgICAgIGxldCBlbmQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5lbmQ7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvc3RhZHVyYXRpb24/c3RhcnRfZGF0ZT0nICsgc3RhcnQgKyAnJmVuZF9kYXRlPScgKyBlbmQgKyAnJnBheT0nICsgcGF5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3BpY2tfZGF0ZScsIGZhbHNlKTtcbiAgICBycS5nZXQoJ2dldE15SW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC51c2VyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpO1xuICAgIGxldCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgICB0aGF0Lm9yZGVyX2RhdGVfc3RhcnQgPSB0aGF0LnBheV9kYXRlX3N0YXJ0ID0gdGhhdC5zdGFydF9kYXRlID0gZGF0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgIHRoYXQub3JkZXJfZGF0ZV9lbmQgPSB0aGF0LnBheV9kYXRlX2VuZCA9IHRoYXQuZW5kX2RhdGUgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXIgPSB0aGF0LnVzZXJfYWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGxldCBwaWNrX3RpbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdwaWNrX2RhdGUnKTtcbiAgICBpZiAocGlja190aW1lKSB7XG4gICAgICBpZiAoIXVzZXIuaXNfc2NoZW1lKSB7XG4gICAgICAgIHRoYXQub3JkZXJfZGF0ZV9zdGFydCA9IHRoYXQuc3RhcnRfZGF0ZSA9IHBpY2tfdGltZS5zdGFydF9kYXRlO1xuICAgICAgICB0aGF0Lm9yZGVyX2RhdGVfZW5kID0gdGhhdC5lbmRfZGF0ZSA9IHBpY2tfdGltZS5lbmRfZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwaWNrX3RpbWUuaXNfcGF5ID09ICd5ZXMnKSB7XG4gICAgICAgICAgdGhhdC5wYXlfZGF0ZV9zdGFydCA9IHBpY2tfdGltZS5zdGFydF9kYXRlO1xuICAgICAgICAgIHRoYXQucGF5X2RhdGVfZW5kID0gcGlja190aW1lLmVuZF9kYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQub3JkZXJfZGF0ZV9zdGFydCA9IHBpY2tfdGltZS5zdGFydF9kYXRlO1xuICAgICAgICAgIHRoYXQub3JkZXJfZGF0ZV9lbmQgPSBwaWNrX3RpbWUuZW5kX2RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKTtcbiAgICAgIGxldCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgICAgIHRoYXQuc3RhcnRfZGF0ZSA9IHRoYXQuZW5kX2RhdGUgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgICBpZiAoIXRoYXQudXNlcl9hY3QpIHtcbiAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXBpX25hbWUgPSAnJztcbiAgICAgIHRoYXQudXNlcl9hY3QuaXNfc2FsZSA/IGFwaV9uYW1lID0gJ2dldERhdGFTdGF0aXN0aWNzJyA6ICcnO1xuICAgICAgdGhhdC51c2VyX2FjdC5pc19zY2hlbWUgPyBhcGlfbmFtZSA9ICdnZXRJbXBsZW1lbnRPcmRlclN0YXRpc3RpY3MnIDogJyc7XG4gICAgICB0aGF0LnVzZXJfYWN0LmlzX2V4Y3V0ZSA/IGFwaV9uYW1lID0gJ2dldERhdGFTdGF0aXN0aWNzJyA6ICcnO1xuXG4gICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgaWYgKHRoYXQudXNlcl9hY3QuaXNfc2NoZW1lKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgcGF5X2RhdGVfc3RhcnQ6IHRoYXQucGF5X2RhdGVfc3RhcnQsXG4gICAgICAgICAgcGF5X2RhdGVfZW5kOiB0aGF0LnBheV9kYXRlX2VuZCxcbiAgICAgICAgICBvcmRlcl9kYXRlX3N0YXJ0OiB0aGF0Lm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICAgICAgb3JkZXJfZGF0ZV9lbmQ6IHRoYXQub3JkZXJfZGF0ZV9lbmQsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgc3RhcnRfZGF0ZTogdGhhdC5zdGFydF9kYXRlLFxuICAgICAgICAgIGVuZF9kYXRlOiB0aGF0LmVuZF9kYXRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcGlfbmFtZSkge1xuICAgICAgICBycS5nZXQoYXBpX25hbWUsIHtcbiAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==