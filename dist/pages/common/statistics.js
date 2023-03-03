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

var _statisticsserver = require('./../../components/statisticsserver.js');

var _statisticsserver2 = _interopRequireDefault(_statisticsserver);

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
      statisticsserver: _statisticsserver2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJzdGF0aXN0aWNzc2VydmVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNfaGlkZSIsInBhZ2VfZGF0YSIsInVzZXIiLCJ1c2VyX2FjdCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsInBheV9kYXRlX3N0YXJ0IiwicGF5X2RhdGVfZW5kIiwibWV0aG9kcyIsIm5hdmlNaXNzQ291bnQiLCJlIiwibWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYXZpVG9Ub3RhbCIsImluZGV4IiwiaXQiLCJ1c2VycyIsImVtcGxveWVlX2lkcyIsInVzZXJfc3RhdHVzIiwicGFybSIsIm5hdmlUb1NjaGVtZUxpc3QiLCJ0eXBlIiwibmF2aVRvTGlzdCIsIm5hdmlDdXN0b21lcmxpc3QiLCJzdGF0aXN0aWNzX2FycmF5IiwiY2hhbm5lbF9pZCIsImludGVudGlvbl9pZCIsImludGVudGlvbl9jaXR5IiwiaXNfYWNoaWV2ZW1lbnQiLCJ0dXJuIiwidGhhdCIsImlzX2xvY2siLCJycSIsImdldCIsIm9ubGluZV9zdGF0dXMiLCIkYXBwbHkiLCJuYXZpQ2hhbmdlRHVyYXRpb24iLCJwYXkiLCJzdGFydCIsImVuZCIsIm9wdGlvbnMiLCJzZXRTdG9yYWdlU3luYyIsInJlc3VsdCIsIm5vdyIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF0IiwiZGF0ZUZvcm1hdCIsImdldFN0b3JhZ2VTeW5jIiwicGlja190aW1lIiwiaXNfc2NoZW1lIiwiaXNfcGF5IiwicmVkaXJlY3RUbyIsImFwaV9uYW1l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RCxFQUF6RDtBQUNBMUIsYUFBS25DLFFBQUwsQ0FBYzBELFNBQWQsR0FBMEJHLFdBQVcsNkJBQXJDLEdBQXFFLEVBQXJFO0FBQ0ExQixhQUFLbkMsUUFBTCxDQUFjK0QsU0FBZCxHQUEwQkYsV0FBVyxtQkFBckMsR0FBMkQsRUFBM0Q7O0FBRUEsWUFBSXBFLE9BQU8sRUFBWDtBQUNBLFlBQUkwQyxLQUFLbkMsUUFBTCxDQUFjMEQsU0FBbEIsRUFBNkI7QUFDM0JqRSxpQkFBTztBQUNMWSw0QkFBZ0I4QixLQUFLOUIsY0FEaEI7QUFFTEMsMEJBQWM2QixLQUFLN0IsWUFGZDtBQUdMSCw4QkFBa0JnQyxLQUFLaEMsZ0JBSGxCO0FBSUxDLDRCQUFnQitCLEtBQUsvQjtBQUpoQixXQUFQO0FBTUQsU0FQRCxNQU9PO0FBQ0xYLGlCQUFPO0FBQ0xRLHdCQUFZa0MsS0FBS2xDLFVBRFo7QUFFTEMsc0JBQVVpQyxLQUFLakM7QUFGVixXQUFQO0FBSUQ7QUFDRCxZQUFJMkQsUUFBSixFQUFjO0FBQ1p4Qiw0QkFBR0MsR0FBSCxDQUFPdUIsUUFBUCxFQUFpQjtBQUNmLGlCQUFLLG1CQUFVO0FBQ2IxQixtQkFBS3JDLFNBQUwsR0FBaUJpRCxPQUFPdEQsSUFBUCxDQUFZQSxJQUE3QjtBQUNBMEMsbUJBQUtLLE1BQUw7QUFDRDtBQUpjLFdBQWpCLEVBS0cvQyxJQUxIO0FBTUQ7QUFDRjtBQUNGOzs7O0VBMUtnQ3NCLGVBQUtpRCxJOztrQkFBbkIvRSxLIiwiZmlsZSI6InN0YXRpc3RpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBkYXQgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBzdGF0aXN0aWNzc2VydmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc3NlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgc3RhdGlzdGljc3NlcnZlcjogc3RhdGlzdGljc3NlcnZlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzYmFjazogZmFsc2UsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWEJyxcbiAgICBpc19oaWRlOiB0cnVlLFxuICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICB1c2VyOiBudWxsLFxuICAgIHVzZXJfYWN0OiBudWxsLFxuICAgIHN0YXJ0X2RhdGU6ICcnLFxuICAgIGVuZF9kYXRlOiAnJyxcbiAgICBvcmRlcl9kYXRlX3N0YXJ0OiAnJyxcbiAgICBvcmRlcl9kYXRlX2VuZDogJycsXG4gICAgcGF5X2RhdGVfc3RhcnQ6ICcnLFxuICAgIHBheV9kYXRlX2VuZDogJycsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2aU1pc3NDb3VudChlKSB7XG4gICAgICBsZXQgbWFwID0gSlNPTi5zdHJpbmdpZnkoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFwKTtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9taXNzY291bnQ/bWFwPScgKyBtYXBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aVRvVG90YWwoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgaXQgPSB0aGlzLnBhZ2VfZGF0YS51c2Vyc1tpbmRleF07XG4gICAgICBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMuc3RhcnRfZGF0ZTtcbiAgICAgIGxldCBlbmRfZGF0ZSA9IHRoaXMuZW5kX2RhdGU7XG4gICAgICBsZXQgZW1wbG95ZWVfaWRzID0gaXQuZW1wbG95ZWVfaWRzO1xuICAgICAgbGV0IHVzZXJfc3RhdHVzID0gaXQudXNlcl9zdGF0dXM7XG4gICAgICBsZXQgcGFybSA9ICdzdGFydF9kYXRlPScgKyBzdGFydF9kYXRlICsgJyZlbmRfZGF0ZT0nICsgZW5kX2RhdGUgKyAnJmVtcGxveWVlX2lkcz0nICsgZW1wbG95ZWVfaWRzICsgJyZ1c2VyX3N0YXR1cz0nICsgdXNlcl9zdGF0dXM7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL2N1c3RvbWVybGlzdD8nICsgcGFybVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuYXZpVG9TY2hlbWVMaXN0KGUpIHtcbiAgICAgIGxldCBwYXJtID0gJ29yZGVyX2RhdGVfc3RhcnQ9JyArIHRoaXMub3JkZXJfZGF0ZV9zdGFydCArXG4gICAgICAgICcmb3JkZXJfZGF0ZV9lbmQ9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmQgK1xuICAgICAgICAnJnBheV9kYXRlX3N0YXJ0PScgKyB0aGlzLnBheV9kYXRlX3N0YXJ0ICtcbiAgICAgICAgJyZwYXlfZGF0ZV9lbmQ9JyArIHRoaXMucGF5X2RhdGVfZW5kICtcbiAgICAgICAgJyZkYXRhX3R5cGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL2N1c3RvbWVybGlzdD8nICsgcGFybVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuYXZpVG9MaXN0KGUpIHtcbiAgICAgIGxldCBtYXAgPSBKU09OLnN0cmluZ2lmeShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tYXApO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3Q/bWFwPScgKyBtYXBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aUN1c3RvbWVybGlzdChlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGxldCBpdCA9IHRoaXMucGFnZV9kYXRhLnN0YXRpc3RpY3NfYXJyYXlbaW5kZXhdO1xuICAgICAgbGV0IHN0YXJ0X2RhdGUgPSB0aGlzLnN0YXJ0X2RhdGU7XG4gICAgICBsZXQgZW5kX2RhdGUgPSB0aGlzLmVuZF9kYXRlO1xuICAgICAgbGV0IGNoYW5uZWxfaWQgPSBpdC5jaGFubmVsX2lkO1xuICAgICAgbGV0IGludGVudGlvbl9pZCA9IGl0LmludGVudGlvbl9pZDtcbiAgICAgIGxldCBpbnRlbnRpb25fY2l0eSA9IGl0LmludGVudGlvbl9jaXR5O1xuICAgICAgbGV0IGlzX2FjaGlldmVtZW50ID0gaXQuaXNfYWNoaWV2ZW1lbnQ7XG4gICAgICBsZXQgZW1wbG95ZWVfaWRzID0gaXQuZW1wbG95ZWVfaWRzO1xuICAgICAgbGV0IHBhcm0gPSAnc3RhcnRfZGF0ZT0nICsgc3RhcnRfZGF0ZSArICcmZW5kX2RhdGU9JyArIGVuZF9kYXRlICsgJyZjaGFubmVsX2lkPScgKyBjaGFubmVsX2lkICsgJyZpbnRlbnRpb25faWQ9JyArIGludGVudGlvbl9pZCArICcmaW50ZW50aW9uX2NpdHk9JyArIGludGVudGlvbl9jaXR5ICsgJyZpc19hY2hpZXZlbWVudD0nICsgaXNfYWNoaWV2ZW1lbnQgKyAnJmVtcGxveWVlX2lkcz0nICsgZW1wbG95ZWVfaWRzO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3Q/JyArIHBhcm1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdHVybigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuaXNfbG9jayA9IHRydWU7XG4gICAgICBycS5nZXQoJ2NoYW5nZU9ubGluZVN0YXR1cycsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuaXNfbG9jayA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGF0LnVzZXIub25saW5lX3N0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICB0aGF0LnVzZXIub25saW5lX3N0YXR1cyA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoYXQudXNlci5vbmxpbmVfc3RhdHVzID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge30pXG4gICAgfSxcbiAgICBuYXZpQ2hhbmdlRHVyYXRpb24oZSkge1xuICAgICAgbGV0IHBheSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBheTtcbiAgICAgIGxldCBzdGFydCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnN0YXJ0O1xuICAgICAgbGV0IGVuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmVuZDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9zdGFkdXJhdGlvbj9zdGFydF9kYXRlPScgKyBzdGFydCArICcmZW5kX2RhdGU9JyArIGVuZCArICcmcGF5PScgKyBwYXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygncGlja19kYXRlJywgZmFsc2UpO1xuICAgIHJxLmdldCgnZ2V0TXlJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnVzZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgbGV0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKVxuICAgIHRoYXQub3JkZXJfZGF0ZV9zdGFydCA9IHRoYXQucGF5X2RhdGVfc3RhcnQgPSB0aGF0LnN0YXJ0X2RhdGUgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSk7XG4gICAgdGhhdC5vcmRlcl9kYXRlX2VuZCA9IHRoYXQucGF5X2RhdGVfZW5kID0gdGhhdC5lbmRfZGF0ZSA9IGRhdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlciA9IHRoYXQudXNlcl9hY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgbGV0IHBpY2tfdGltZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3BpY2tfZGF0ZScpO1xuICAgIGlmIChwaWNrX3RpbWUpIHtcbiAgICAgIGlmICghdXNlci5pc19zY2hlbWUpIHtcbiAgICAgICAgdGhhdC5vcmRlcl9kYXRlX3N0YXJ0ID0gdGhhdC5zdGFydF9kYXRlID0gcGlja190aW1lLnN0YXJ0X2RhdGU7XG4gICAgICAgIHRoYXQub3JkZXJfZGF0ZV9lbmQgPSB0aGF0LmVuZF9kYXRlID0gcGlja190aW1lLmVuZF9kYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBpY2tfdGltZS5pc19wYXkgPT0gJ3llcycpIHtcbiAgICAgICAgICB0aGF0LnBheV9kYXRlX3N0YXJ0ID0gcGlja190aW1lLnN0YXJ0X2RhdGU7XG4gICAgICAgICAgdGhhdC5wYXlfZGF0ZV9lbmQgPSBwaWNrX3RpbWUuZW5kX2RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5vcmRlcl9kYXRlX3N0YXJ0ID0gcGlja190aW1lLnN0YXJ0X2RhdGU7XG4gICAgICAgICAgdGhhdC5vcmRlcl9kYXRlX2VuZCA9IHBpY2tfdGltZS5lbmRfZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpO1xuICAgICAgbGV0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKVxuICAgICAgdGhhdC5zdGFydF9kYXRlID0gdGhhdC5lbmRfZGF0ZSA9IGRhdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSk7XG4gICAgfVxuICAgIGlmICghdGhhdC51c2VyX2FjdCkge1xuICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhcGlfbmFtZSA9ICcnO1xuICAgICAgdGhhdC51c2VyX2FjdC5pc19zYWxlID8gYXBpX25hbWUgPSAnZ2V0RGF0YVN0YXRpc3RpY3MnIDogJyc7XG4gICAgICB0aGF0LnVzZXJfYWN0LmlzX3NjaGVtZSA/IGFwaV9uYW1lID0gJ2dldEltcGxlbWVudE9yZGVyU3RhdGlzdGljcycgOiAnJztcbiAgICAgIHRoYXQudXNlcl9hY3QuaXNfZXhjdXRlID8gYXBpX25hbWUgPSAnZ2V0RGF0YVN0YXRpc3RpY3MnIDogJyc7XG5cbiAgICAgIGxldCBkYXRhID0ge307XG4gICAgICBpZiAodGhhdC51c2VyX2FjdC5pc19zY2hlbWUpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBwYXlfZGF0ZV9zdGFydDogdGhhdC5wYXlfZGF0ZV9zdGFydCxcbiAgICAgICAgICBwYXlfZGF0ZV9lbmQ6IHRoYXQucGF5X2RhdGVfZW5kLFxuICAgICAgICAgIG9yZGVyX2RhdGVfc3RhcnQ6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgICAgICBvcmRlcl9kYXRlX2VuZDogdGhhdC5vcmRlcl9kYXRlX2VuZCxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBzdGFydF9kYXRlOiB0aGF0LnN0YXJ0X2RhdGUsXG4gICAgICAgICAgZW5kX2RhdGU6IHRoYXQuZW5kX2RhdGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwaV9uYW1lKSB7XG4gICAgICAgIHJxLmdldChhcGlfbmFtZSwge1xuICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19