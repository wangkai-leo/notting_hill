"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

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
      header: _header2.default
    }, _this.data = {
      isopacity: true,
      title: "婚礼档期",
      isback: true,
      customer: null,
      id: "",
      schedule_type: ['预定', '锁定'],
      date_time: {
        now: new Date(), //current time
        check_format: '', // 选择的格式化时间  yyyy-MM-dd
        show_week_date: '', //日期时间, 用来获取该时间点的一周时间
        show_month_date: '' //用来显示月份的时间
      },
      one_week_tit_cn: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'], //星期简称
      one_week: [], //Mdd //显示的日期
      full_one_week: [], //yyyy-MM-dd //完整的日期
      full_one_week_has: [], //判断一周时间的某一天是否具有活动
      full_one_month: [], //该月的日期
      all_month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'], //月份简称
      show_month_num: 0,
      show_year: 2019,
      week_name_cn: '',
      session_list: null,
      schedule_type_index: 0,
      schedule_remain_date: '',
      aindex: -1,
      sindex: -1,
      order_id: -1,
      has_schedule: false
    }, _this.methods = {
      cancel: function cancel() {
        var that = this;
        _request2.default.get('cancelWeddingSchedule', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            that.$apply();
          }
        }, {
          order_id: that.order_id,
          schedule_type: that.schedule_type[that.schedule_type_index]
        });
      },
      submit: function submit() {
        if (this.schedule_type_index == 0 && this.schedule_remain_date == '') {
          _wepy2.default.showToast({
            title: '请选择档期预留时间', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        } else if (this.aindex == -1 || this.sindex == -1) {
          _wepy2.default.showToast({
            title: '请选择需要预定的场次', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        var that = this;
        // let json_code='"[{"area_id":'+that.session_list[this.aindex].area_id+',"session":'+(this.sindex+1)+'}]"'
        var json_code = [{
          area_id: that.session_list[this.aindex].area_id,
          session: this.sindex + 1
        }];
        var api = '';
        if (that.has_schedule) {
          api = 'editWeddingSchedule';
        } else {
          api = 'addWeddingSchedule';
        }
        _request2.default.get(api, {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            that.$apply();
          }
        }, {
          schedule_date: that.date_time.check_format,
          order_id: that.order_id,
          schedule_end_date: that.schedule_remain_date,
          schedule_type: that.schedule_type[that.schedule_type_index],
          schedule_id: that.id,
          json_data: JSON.stringify(json_code)
        });
      },
      checkedSession: function checkedSession(e) {
        if (this.aindex != -1) {
          this.session_list[this.aindex].session[this.sindex].is_book = 0;
        }
        var aindex = this.aindex = e.currentTarget.dataset.aindex;
        var sindex = this.sindex = e.currentTarget.dataset.sindex;
        this.session_list[aindex].session[sindex].is_book = 1;
      },
      bindScheduleRemainChange: function bindScheduleRemainChange(e) {
        this.schedule_remain_date = e.detail.value;
      },
      bindScheduleTypeChange: function bindScheduleTypeChange(e) {
        this.schedule_type_index = e.detail.value;
      },

      //上一个月
      preMonth: function preMonth() {
        this.show_category = false;
        this.show_days_category = false;
        var cur_d = _date2.default.dateFormat('yyyy-MM-dd', this.date_time.show_month_date);
        console.log('当前显示时间：');
        console.log(cur_d);
        this.date_time.show_month_date = new Date(_date2.default.getPreMonth(cur_d).replace(/-/g, "/"));
        this.setOneMonth(this.date_time.show_month_date);
      },

      //下一个月
      nextMonth: function nextMonth() {
        this.show_category = false;
        this.show_days_category = false;
        var cur_d = _date2.default.dateFormat('yyyy-MM-dd', this.date_time.show_month_date);
        console.log('当前显示时间：');
        this.date_time.show_month_date = new Date(_date2.default.getNextMonth(cur_d).replace(/-/g, "/"));
        this.setOneMonth(this.date_time.show_month_date);
      },

      //当前日期
      selectDay: function selectDay(e) {
        var is_current_month = e.currentTarget.dataset.current;
        if (!is_current_month) {
          return false;
        }
        this.show_category = false;
        this.show_days_category = false;
        this.date_time.check_format = e.currentTarget.dataset.date; //选择的日期
        this.no_empty = e.currentTarget.dataset.has;
        this.show_month_num = _date2.default.getMonth(new Date(e.currentTarget.dataset.date));
        this.show_month = false;
        this.date_time.show_week_date = new Date(e.currentTarget.dataset.date);
        // this.setOneMonth(new Date(e.currentTarget.dataset.date));
        //Search session for current day.
        this.getAreaSession(this.date_time.check_format);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.id = options.id;
      that.order_id = options.order_id;
      console.log('>>');
      console.log(options);
      if (options.schedule_date && options.schedule_date != "undefined") {
        this.date_time.check_format = options.schedule_date;
        this.has_schedule = true;
      } else {
        this.date_time.check_format = _date2.default.dateFormat('yyyy-MM-dd', this.date_time.now);
      }
      if (options.schedule_end_date && options.schedule_end_date != "undefined") {
        this.schedule_remain_date = options.schedule_end_date;
      }
      this.date_time.show_week_date = new Date();
      this.date_time.show_month_date = new Date();
      this.setOneMonth(new Date()); //设置一个月
      this.getAreaSession(this.date_time.check_format);
    }
  }, {
    key: "getAreaSession",
    value: function getAreaSession(c_date) {
      var that = this;
      _request2.default.get('getAreaSession', {
        200: function _(result) {
          that.session_list = result.data.data;
          var week_index = _date2.default.getWeek(new Date(Date.parse(c_date.replace(/-/g, "/"))));
          that.week_name_cn = that.one_week_tit_cn[week_index];
          that.aindex = -1;
          that.sindex = -1;
          that.$apply();
        }
      }, {
        schedule_date: c_date
      });
    }
    //设置一月内是否具有活动

  }, {
    key: "setOneMonth",
    value: function setOneMonth(c_date) {
      this.full_one_month = _date2.default.getMonthEveryDay(c_date); //一月的所有日期
      console.log('月份');
      console.log(this.full_one_month);
      this.show_month_num = _date2.default.getMonth(c_date); // 设置该时间的月份
      this.show_year = _date2.default.getYear(c_date); //设置该时间的年份
    }
  }, {
    key: "onShow",
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/schedule'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiY3VzdG9tZXIiLCJpZCIsInNjaGVkdWxlX3R5cGUiLCJkYXRlX3RpbWUiLCJub3ciLCJEYXRlIiwiY2hlY2tfZm9ybWF0Iiwic2hvd193ZWVrX2RhdGUiLCJzaG93X21vbnRoX2RhdGUiLCJvbmVfd2Vla190aXRfY24iLCJvbmVfd2VlayIsImZ1bGxfb25lX3dlZWsiLCJmdWxsX29uZV93ZWVrX2hhcyIsImZ1bGxfb25lX21vbnRoIiwiYWxsX21vbnRoIiwic2hvd19tb250aF9udW0iLCJzaG93X3llYXIiLCJ3ZWVrX25hbWVfY24iLCJzZXNzaW9uX2xpc3QiLCJzY2hlZHVsZV90eXBlX2luZGV4Iiwic2NoZWR1bGVfcmVtYWluX2RhdGUiLCJhaW5kZXgiLCJzaW5kZXgiLCJvcmRlcl9pZCIsImhhc19zY2hlZHVsZSIsIm1ldGhvZHMiLCJjYW5jZWwiLCJ0aGF0IiwicnEiLCJnZXQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCIkYXBwbHkiLCJzdWJtaXQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImpzb25fY29kZSIsImFyZWFfaWQiLCJzZXNzaW9uIiwiYXBpIiwic2NoZWR1bGVfZGF0ZSIsInNjaGVkdWxlX2VuZF9kYXRlIiwic2NoZWR1bGVfaWQiLCJqc29uX2RhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlY2tlZFNlc3Npb24iLCJlIiwiaXNfYm9vayIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYmluZFNjaGVkdWxlUmVtYWluQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kU2NoZWR1bGVUeXBlQ2hhbmdlIiwicHJlTW9udGgiLCJzaG93X2NhdGVnb3J5Iiwic2hvd19kYXlzX2NhdGVnb3J5IiwiY3VyX2QiLCJkYXQiLCJkYXRlRm9ybWF0IiwiY29uc29sZSIsImxvZyIsImdldFByZU1vbnRoIiwicmVwbGFjZSIsInNldE9uZU1vbnRoIiwibmV4dE1vbnRoIiwiZ2V0TmV4dE1vbnRoIiwic2VsZWN0RGF5IiwiaXNfY3VycmVudF9tb250aCIsImN1cnJlbnQiLCJkYXRlIiwibm9fZW1wdHkiLCJoYXMiLCJnZXRNb250aCIsInNob3dfbW9udGgiLCJnZXRBcmVhU2Vzc2lvbiIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJjX2RhdGUiLCJyZXN1bHQiLCJ3ZWVrX2luZGV4IiwiZ2V0V2VlayIsInBhcnNlIiwiZ2V0TW9udGhFdmVyeURheSIsImdldFllYXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQTtBQUZFLEssUUFJWkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsYUFBTyxNQUZGO0FBR0xDLGNBQVEsSUFISDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLFVBQUksRUFMQztBQU1MQyxxQkFBZSxDQUFDLElBQUQsRUFBTyxJQUFQLENBTlY7QUFPTEMsaUJBQVc7QUFDVEMsYUFBSyxJQUFJQyxJQUFKLEVBREksRUFDUTtBQUNqQkMsc0JBQWMsRUFGTCxFQUVTO0FBQ2xCQyx3QkFBZ0IsRUFIUCxF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QUF0QixDQURrQixDQUNrQztBQUNwRG5CLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxLQUFLckQsY0FBakI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCZ0QsZUFBSWUsUUFBSixDQUFhTSxNQUFiLENBQXRCLENBSmtCLENBSTBCO0FBQzVDLFdBQUtwRSxTQUFMLEdBQWlCK0MsZUFBSTJCLE9BQUosQ0FBWU4sTUFBWixDQUFqQixDQUxrQixDQUtvQjtBQUN2Qzs7OzZCQUNRLENBQUc7Ozs7RUFwTXFCdEQsZUFBSzZELEk7O2tCQUFuQnRHLEsiLCJmaWxlIjoic2NoZWR1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuaW1wb3J0IHJxIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHRvb2wgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sXCI7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZVwiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlXCI7XG5pbXBvcnQgZGF0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IGZpbGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlXCI7XG5cblxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiBcIuWpmuekvOaho+acn1wiLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBpZDogXCJcIixcbiAgICBzY2hlZHVsZV90eXBlOiBbJ+mihOWumicsICfplIHlrponXSxcbiAgICBkYXRlX3RpbWU6IHtcbiAgICAgIG5vdzogbmV3IERhdGUoKSwgLy9jdXJyZW50IHRpbWVcbiAgICAgIGNoZWNrX2Zvcm1hdDogJycsIC8vIOmAieaLqeeahOagvOW8j+WMluaXtumXtCAgeXl5eS1NTS1kZFxuICAgICAgc2hvd193ZWVrX2RhdGU6ICcnLCAvL+aXpeacn+aXtumXtCwg55So5p2l6I635Y+W6K+l5pe26Ze054K555qE5LiA5ZGo5pe26Ze0XG4gICAgICBzaG93X21vbnRoX2RhdGU6ICcnIC8v55So5p2l5pi+56S65pyI5Lu955qE5pe26Ze0XG4gICAgfSxcbiAgICBvbmVfd2Vla190aXRfY246IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sIC8v5pif5pyf566A56ewXG4gICAgb25lX3dlZWs6IFtdLCAvL01kZCAvL+aYvuekuueahOaXpeacn1xuICAgIGZ1bGxfb25lX3dlZWs6IFtdLCAvL3l5eXktTU0tZGQgLy/lrozmlbTnmoTml6XmnJ9cbiAgICBmdWxsX29uZV93ZWVrX2hhczogW10sIC8v5Yik5pat5LiA5ZGo5pe26Ze055qE5p+Q5LiA5aSp5piv5ZCm5YW35pyJ5rS75YqoXG4gICAgZnVsbF9vbmVfbW9udGg6IFtdLCAvL+ivpeaciOeahOaXpeacn1xuICAgIGFsbF9tb250aDogWyfkuIDmnIgnLCAn5LqM5pyIJywgJ+S4ieaciCcsICflm5vmnIgnLCAn5LqU5pyIJywgJ+WFreaciCcsICfkuIPmnIgnLCAn5YWr5pyIJywgJ+S5neaciCcsICfljYHmnIgnLCAn5Y2B5LiA5pyIJywgJ+WNgeS6jOaciCddLCAvL+aciOS7veeugOensFxuICAgIHNob3dfbW9udGhfbnVtOiAwLFxuICAgIHNob3dfeWVhcjogMjAxOSxcbiAgICB3ZWVrX25hbWVfY246ICcnLFxuICAgIHNlc3Npb25fbGlzdDogbnVsbCxcbiAgICBzY2hlZHVsZV90eXBlX2luZGV4OiAwLFxuICAgIHNjaGVkdWxlX3JlbWFpbl9kYXRlOiAnJyxcbiAgICBhaW5kZXg6IC0xLFxuICAgIHNpbmRleDogLTEsXG4gICAgb3JkZXJfaWQ6IC0xLFxuICAgIGhhc19zY2hlZHVsZTogZmFsc2VcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBjYW5jZWwoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ2NhbmNlbFdlZGRpbmdTY2hlZHVsZScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICBzY2hlZHVsZV90eXBlOiB0aGF0LnNjaGVkdWxlX3R5cGVbdGhhdC5zY2hlZHVsZV90eXBlX2luZGV4XVxuICAgICAgfSlcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVkdWxlX3R5cGVfaW5kZXggPT0gMCAmJiB0aGlzLnNjaGVkdWxlX3JlbWFpbl9kYXRlID09ICcnKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeaho+acn+mihOeVmeaXtumXtCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5haW5kZXggPT0gLTEgfHwgdGhpcy5zaW5kZXggPT0gLTEpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup6ZyA6KaB6aKE5a6a55qE5Zy65qyhJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgLy8gbGV0IGpzb25fY29kZT0nXCJbe1wiYXJlYV9pZFwiOicrdGhhdC5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLmFyZWFfaWQrJyxcInNlc3Npb25cIjonKyh0aGlzLnNpbmRleCsxKSsnfV1cIidcbiAgICAgIGxldCBqc29uX2NvZGUgPSBbe1xuICAgICAgICBhcmVhX2lkOiB0aGF0LnNlc3Npb25fbGlzdFt0aGlzLmFpbmRleF0uYXJlYV9pZCxcbiAgICAgICAgc2Vzc2lvbjogKHRoaXMuc2luZGV4ICsgMSlcbiAgICAgIH1dXG4gICAgICBsZXQgYXBpID0gJydcbiAgICAgIGlmICh0aGF0Lmhhc19zY2hlZHVsZSkge1xuICAgICAgICBhcGkgPSAnZWRpdFdlZGRpbmdTY2hlZHVsZSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwaSA9ICdhZGRXZWRkaW5nU2NoZWR1bGUnXG4gICAgICB9XG4gICAgICBycS5nZXQoYXBpLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBzY2hlZHVsZV9kYXRlOiB0aGF0LmRhdGVfdGltZS5jaGVja19mb3JtYXQsXG4gICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICBzY2hlZHVsZV9lbmRfZGF0ZTogdGhhdC5zY2hlZHVsZV9yZW1haW5fZGF0ZSxcbiAgICAgICAgc2NoZWR1bGVfdHlwZTogdGhhdC5zY2hlZHVsZV90eXBlW3RoYXQuc2NoZWR1bGVfdHlwZV9pbmRleF0sXG4gICAgICAgIHNjaGVkdWxlX2lkOiB0aGF0LmlkLFxuICAgICAgICBqc29uX2RhdGE6IEpTT04uc3RyaW5naWZ5KGpzb25fY29kZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaGVja2VkU2Vzc2lvbihlKSB7XG4gICAgICBpZiAodGhpcy5haW5kZXggIT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLnNlc3Npb25bdGhpcy5zaW5kZXhdLmlzX2Jvb2sgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IGFpbmRleCA9IHRoaXMuYWluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWluZGV4O1xuICAgICAgbGV0IHNpbmRleCA9IHRoaXMuc2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2luZGV4O1xuICAgICAgdGhpcy5zZXNzaW9uX2xpc3RbYWluZGV4XS5zZXNzaW9uW3NpbmRleF0uaXNfYm9vayA9IDE7XG4gICAgfSxcbiAgICBiaW5kU2NoZWR1bGVSZW1haW5DaGFuZ2UoZSkge1xuICAgICAgdGhpcy5zY2hlZHVsZV9yZW1haW5fZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZFNjaGVkdWxlVHlwZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlX3R5cGVfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIC8v5LiK5LiA5Liq5pyIXG4gICAgcHJlTW9udGgoKSB7XG4gICAgICB0aGlzLnNob3dfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd19kYXlzX2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICBsZXQgY3VyX2QgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIHRoaXMuZGF0ZV90aW1lLnNob3dfbW9udGhfZGF0ZSk7XG4gICAgICBjb25zb2xlLmxvZygn5b2T5YmN5pi+56S65pe26Ze077yaJyk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJfZCk7XG4gICAgICB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUgPSBuZXcgRGF0ZShkYXQuZ2V0UHJlTW9udGgoY3VyX2QpLnJlcGxhY2UoLy0vZywgXCIvXCIpKTtcbiAgICAgIHRoaXMuc2V0T25lTW9udGgodGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlKTtcbiAgICB9LFxuICAgIC8v5LiL5LiA5Liq5pyIXG4gICAgbmV4dE1vbnRoKCkge1xuICAgICAgdGhpcy5zaG93X2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dfZGF5c19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgbGV0IGN1cl9kID0gZGF0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeaYvuekuuaXtumXtO+8micpO1xuICAgICAgdGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlID0gbmV3IERhdGUoZGF0LmdldE5leHRNb250aChjdXJfZCkucmVwbGFjZSgvLS9nLCBcIi9cIikpO1xuICAgICAgdGhpcy5zZXRPbmVNb250aCh0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgIH0sXG4gICAgLy/lvZPliY3ml6XmnJ9cbiAgICBzZWxlY3REYXkoZSkge1xuICAgICAgbGV0IGlzX2N1cnJlbnRfbW9udGggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jdXJyZW50O1xuICAgICAgaWYgKCFpc19jdXJyZW50X21vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93X2RheXNfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGU7IC8v6YCJ5oup55qE5pel5pyfXG4gICAgICB0aGlzLm5vX2VtcHR5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaGFzO1xuICAgICAgdGhpcy5zaG93X21vbnRoX251bSA9IGRhdC5nZXRNb250aChuZXcgRGF0ZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kYXRlKSk7XG4gICAgICB0aGlzLnNob3dfbW9udGggPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfd2Vla19kYXRlID0gbmV3IERhdGUoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGF0ZSk7XG4gICAgICAvLyB0aGlzLnNldE9uZU1vbnRoKG5ldyBEYXRlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgICAgIC8vU2VhcmNoIHNlc3Npb24gZm9yIGN1cnJlbnQgZGF5LlxuICAgICAgdGhpcy5nZXRBcmVhU2Vzc2lvbih0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQpO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgdGhhdC5vcmRlcl9pZCA9IG9wdGlvbnMub3JkZXJfaWQ7XG4gICAgY29uc29sZS5sb2coJz4+JylcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5zY2hlZHVsZV9kYXRlICYmIG9wdGlvbnMuc2NoZWR1bGVfZGF0ZSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQgPSBvcHRpb25zLnNjaGVkdWxlX2RhdGU7XG4gICAgICB0aGlzLmhhc19zY2hlZHVsZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IGRhdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgdGhpcy5kYXRlX3RpbWUubm93KTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2NoZWR1bGVfZW5kX2RhdGUgJiYgb3B0aW9ucy5zY2hlZHVsZV9lbmRfZGF0ZSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlX3JlbWFpbl9kYXRlID0gb3B0aW9ucy5zY2hlZHVsZV9lbmRfZGF0ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRlX3RpbWUuc2hvd193ZWVrX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfbW9udGhfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zZXRPbmVNb250aChuZXcgRGF0ZSgpKTsgLy/orr7nva7kuIDkuKrmnIhcbiAgICB0aGlzLmdldEFyZWFTZXNzaW9uKHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCk7XG4gIH1cbiAgZ2V0QXJlYVNlc3Npb24oY19kYXRlKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZ2V0QXJlYVNlc3Npb24nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuc2Vzc2lvbl9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgbGV0IHdlZWtfaW5kZXggPSBkYXQuZ2V0V2VlayhuZXcgRGF0ZShEYXRlLnBhcnNlKGNfZGF0ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSkpKTtcbiAgICAgICAgdGhhdC53ZWVrX25hbWVfY24gPSB0aGF0Lm9uZV93ZWVrX3RpdF9jblt3ZWVrX2luZGV4XTtcbiAgICAgICAgdGhhdC5haW5kZXggPSAtMTtcbiAgICAgICAgdGhhdC5zaW5kZXggPSAtMTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBzY2hlZHVsZV9kYXRlOiBjX2RhdGVcbiAgICB9KVxuICB9XG4gIC8v6K6+572u5LiA5pyI5YaF5piv5ZCm5YW35pyJ5rS75YqoXG4gIHNldE9uZU1vbnRoKGNfZGF0ZSkge1xuICAgIHRoaXMuZnVsbF9vbmVfbW9udGggPSBkYXQuZ2V0TW9udGhFdmVyeURheShjX2RhdGUpOyAvL+S4gOaciOeahOaJgOacieaXpeacn1xuICAgIGNvbnNvbGUubG9nKCfmnIjku70nKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxfb25lX21vbnRoKTtcbiAgICB0aGlzLnNob3dfbW9udGhfbnVtID0gZGF0LmdldE1vbnRoKGNfZGF0ZSk7IC8vIOiuvue9ruivpeaXtumXtOeahOaciOS7vVxuICAgIHRoaXMuc2hvd195ZWFyID0gZGF0LmdldFllYXIoY19kYXRlKTsgLy/orr7nva7or6Xml7bpl7TnmoTlubTku71cbiAgfVxuICBvblNob3coKSB7IH1cbn1cbiJdfQ==