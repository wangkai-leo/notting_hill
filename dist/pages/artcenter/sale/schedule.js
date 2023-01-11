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
      schedule_type: ['选定', '预定', '锁定'],
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
      has_schedule: false,
      del_flg: 0
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
          // wepy.showToast({
          //     title: '请选择档期预留时间', //提示的内容,
          //     icon: 'none', //图标,
          //     duration: 2000, //延迟时间,
          //     mask: true, //显示透明蒙层，防止触摸穿透,
          //     success: res => {}
          // });
          // return false;
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
        var data = {};
        if (this.del_flg == 2) {
          data = {
            schedule_date: that.date_time.check_format,
            order_id: that.order_id,
            schedule_type: that.schedule_type[that.schedule_type_index],
            schedule_id: that.id,
            json_data: JSON.stringify(json_code),
            del_flg: 2
          };
        } else {
          data = {
            schedule_date: that.date_time.check_format,
            order_id: that.order_id,
            schedule_end_date: that.schedule_remain_date,
            schedule_type: that.schedule_type[that.schedule_type_index],
            schedule_id: that.id,
            json_data: JSON.stringify(json_code)
          };
        }
        _request2.default.get(api, {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            that.$apply();
          }
        }, data);
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
      bindScheduleDateChange: function bindScheduleDateChange(e) {
        this.date_time.check_format = e.detail.value;
        this.getAreaSession(this.date_time.check_format);
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
      this.del_flg = options.del_flg;
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/schedule'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiY3VzdG9tZXIiLCJpZCIsInNjaGVkdWxlX3R5cGUiLCJkYXRlX3RpbWUiLCJub3ciLCJEYXRlIiwiY2hlY2tfZm9ybWF0Iiwic2hvd193ZWVrX2RhdGUiLCJzaG93X21vbnRoX2RhdGUiLCJvbmVfd2Vla190aXRfY24iLCJvbmVfd2VlayIsImZ1bGxfb25lX3dlZWsiLCJmdWxsX29uZV93ZWVrX2hhcyIsImZ1bGxfb25lX21vbnRoIiwiYWxsX21vbnRoIiwic2hvd19tb250aF9udW0iLCJzaG93X3llYXIiLCJ3ZWVrX25hbWVfY24iLCJzZXNzaW9uX2xpc3QiLCJzY2hlZHVsZV90eXBlX2luZGV4Iiwic2NoZWR1bGVfcmVtYWluX2RhdGUiLCJhaW5kZXgiLCJzaW5kZXgiLCJvcmRlcl9pZCIsImhhc19zY2hlZHVsZSIsImRlbF9mbGciLCJtZXRob2RzIiwiY2FuY2VsIiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiJGFwcGx5Iiwic3VibWl0Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJqc29uX2NvZGUiLCJhcmVhX2lkIiwic2Vzc2lvbiIsImFwaSIsInNjaGVkdWxlX2RhdGUiLCJzY2hlZHVsZV9pZCIsImpzb25fZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzY2hlZHVsZV9lbmRfZGF0ZSIsImNoZWNrZWRTZXNzaW9uIiwiZSIsImlzX2Jvb2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImJpbmRTY2hlZHVsZVJlbWFpbkNoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiYmluZFNjaGVkdWxlRGF0ZUNoYW5nZSIsImdldEFyZWFTZXNzaW9uIiwiYmluZFNjaGVkdWxlVHlwZUNoYW5nZSIsInByZU1vbnRoIiwic2hvd19jYXRlZ29yeSIsInNob3dfZGF5c19jYXRlZ29yeSIsImN1cl9kIiwiZGF0IiwiZGF0ZUZvcm1hdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcmVNb250aCIsInJlcGxhY2UiLCJzZXRPbmVNb250aCIsIm5leHRNb250aCIsImdldE5leHRNb250aCIsInNlbGVjdERheSIsImlzX2N1cnJlbnRfbW9udGgiLCJjdXJyZW50IiwiZGF0ZSIsIm5vX2VtcHR5IiwiaGFzIiwiZ2V0TW9udGgiLCJzaG93X21vbnRoIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsImNfZGF0ZSIsInJlc3VsdCIsIndlZWtfaW5kZXgiLCJnZXRXZWVrIiwicGFyc2UiLCJnZXRNb250aEV2ZXJ5RGF5IiwiZ2V0WWVhciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBO0FBRkUsSyxRQUlaQyxJLEdBQU87QUFDTEMsaUJBQVcsSUFETjtBQUVMQyxhQUFPLE1BRkY7QUFHTEMsY0FBUSxJQUhIO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsVUFBSSxFQUxDO0FBTUxDLHFCQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBTlY7QUFPTEMsaUJBQVc7QUFDVEMsYUFBSyxJQUFJQyxJQUFKLEVBREksRUFD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QSxJQUFoQztBQUNBLGNBQUk0RixhQUFhdEIsZUFBSXVCLE9BQUosQ0FBWSxJQUFJcEYsSUFBSixDQUFTQSxLQUFLcUYsS0FBTCxDQUFXSixPQUFPZixPQUFQLENBQWUsSUFBZixFQUFxQixHQUFyQixDQUFYLENBQVQsQ0FBWixDQUFqQjtBQUNBM0MsZUFBS1gsWUFBTCxHQUFvQlcsS0FBS25CLGVBQUwsQ0FBcUIrRSxVQUFyQixDQUFwQjtBQUNBNUQsZUFBS1AsTUFBTCxHQUFjLENBQUMsQ0FBZjtBQUNBTyxlQUFLTixNQUFMLEdBQWMsQ0FBQyxDQUFmO0FBQ0FNLGVBQUtNLE1BQUw7QUFDRDtBQVJzQixPQUF6QixFQVNHO0FBQ0RXLHVCQUFleUM7QUFEZCxPQVRIO0FBWUQ7QUFDRDs7OztnQ0FDWUEsTSxFQUFRO0FBQ2xCLFdBQUt6RSxjQUFMLEdBQXNCcUQsZUFBSXlCLGdCQUFKLENBQXFCTCxNQUFyQixDQUF0QixDQURrQixDQUNrQztBQUNwRGxCLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxLQUFLeEQsY0FBakI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCbUQsZUFBSWUsUUFBSixDQUFhSyxNQUFiLENBQXRCLENBSmtCLENBSTBCO0FBQzVDLFdBQUt0RSxTQUFMLEdBQWlCa0QsZUFBSTBCLE9BQUosQ0FBWU4sTUFBWixDQUFqQixDQUxrQixDQUtvQjtBQUN2Qzs7OzZCQUNRLENBQUc7Ozs7RUFyTnFCdkQsZUFBSzhELEk7O2tCQUFuQnhHLEsiLCJmaWxlIjoic2NoZWR1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuaW1wb3J0IHJxIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHRvb2wgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sXCI7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZVwiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlXCI7XG5pbXBvcnQgZGF0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IGZpbGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlXCI7XG5cblxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiBcIuWpmuekvOaho+acn1wiLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBpZDogXCJcIixcbiAgICBzY2hlZHVsZV90eXBlOiBbJ+mAieWumicsICfpooTlrponLCAn6ZSB5a6aJ10sXG4gICAgZGF0ZV90aW1lOiB7XG4gICAgICBub3c6IG5ldyBEYXRlKCksIC8vY3VycmVudCB0aW1lXG4gICAgICBjaGVja19mb3JtYXQ6ICcnLCAvLyDpgInmi6nnmoTmoLzlvI/ljJbml7bpl7QgIHl5eXktTU0tZGRcbiAgICAgIHNob3dfd2Vla19kYXRlOiAnJywgLy/ml6XmnJ/ml7bpl7QsIOeUqOadpeiOt+WPluivpeaXtumXtOeCueeahOS4gOWRqOaXtumXtFxuICAgICAgc2hvd19tb250aF9kYXRlOiAnJyAvL+eUqOadpeaYvuekuuaciOS7veeahOaXtumXtFxuICAgIH0sXG4gICAgb25lX3dlZWtfdGl0X2NuOiBbJ+WRqOaXpScsICflkajkuIAnLCAn5ZGo5LqMJywgJ+WRqOS4iScsICflkajlm5snLCAn5ZGo5LqUJywgJ+WRqOWFrSddLCAvL+aYn+acn+eugOensFxuICAgIG9uZV93ZWVrOiBbXSwgLy9NZGQgLy/mmL7npLrnmoTml6XmnJ9cbiAgICBmdWxsX29uZV93ZWVrOiBbXSwgLy95eXl5LU1NLWRkIC8v5a6M5pW055qE5pel5pyfXG4gICAgZnVsbF9vbmVfd2Vla19oYXM6IFtdLCAvL+WIpOaWreS4gOWRqOaXtumXtOeahOafkOS4gOWkqeaYr+WQpuWFt+aciea0u+WKqFxuICAgIGZ1bGxfb25lX21vbnRoOiBbXSwgLy/or6XmnIjnmoTml6XmnJ9cbiAgICBhbGxfbW9udGg6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXSwgLy/mnIjku73nroDnp7BcbiAgICBzaG93X21vbnRoX251bTogMCxcbiAgICBzaG93X3llYXI6IDIwMTksXG4gICAgd2Vla19uYW1lX2NuOiAnJyxcbiAgICBzZXNzaW9uX2xpc3Q6IG51bGwsXG4gICAgc2NoZWR1bGVfdHlwZV9pbmRleDogMCxcbiAgICBzY2hlZHVsZV9yZW1haW5fZGF0ZTogJycsXG4gICAgYWluZGV4OiAtMSxcbiAgICBzaW5kZXg6IC0xLFxuICAgIG9yZGVyX2lkOiAtMSxcbiAgICBoYXNfc2NoZWR1bGU6IGZhbHNlLFxuICAgIGRlbF9mbGc6IDBcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBjYW5jZWwoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ2NhbmNlbFdlZGRpbmdTY2hlZHVsZScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICBzY2hlZHVsZV90eXBlOiB0aGF0LnNjaGVkdWxlX3R5cGVbdGhhdC5zY2hlZHVsZV90eXBlX2luZGV4XVxuICAgICAgfSlcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVkdWxlX3R5cGVfaW5kZXggPT0gMCAmJiB0aGlzLnNjaGVkdWxlX3JlbWFpbl9kYXRlID09ICcnKSB7XG4gICAgICAgIC8vIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgLy8gICAgIHRpdGxlOiAn6K+36YCJ5oup5qGj5pyf6aKE55WZ5pe26Ze0JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIC8vICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAvLyAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAvLyAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5haW5kZXggPT0gLTEgfHwgdGhpcy5zaW5kZXggPT0gLTEpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup6ZyA6KaB6aKE5a6a55qE5Zy65qyhJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgLy8gbGV0IGpzb25fY29kZT0nXCJbe1wiYXJlYV9pZFwiOicrdGhhdC5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLmFyZWFfaWQrJyxcInNlc3Npb25cIjonKyh0aGlzLnNpbmRleCsxKSsnfV1cIidcbiAgICAgIGxldCBqc29uX2NvZGUgPSBbe1xuICAgICAgICBhcmVhX2lkOiB0aGF0LnNlc3Npb25fbGlzdFt0aGlzLmFpbmRleF0uYXJlYV9pZCxcbiAgICAgICAgc2Vzc2lvbjogKHRoaXMuc2luZGV4ICsgMSlcbiAgICAgIH1dXG4gICAgICBsZXQgYXBpID0gJydcbiAgICAgIGlmICh0aGF0Lmhhc19zY2hlZHVsZSkge1xuICAgICAgICBhcGkgPSAnZWRpdFdlZGRpbmdTY2hlZHVsZSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwaSA9ICdhZGRXZWRkaW5nU2NoZWR1bGUnXG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgaWYgKHRoaXMuZGVsX2ZsZyA9PSAyKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgc2NoZWR1bGVfZGF0ZTogdGhhdC5kYXRlX3RpbWUuY2hlY2tfZm9ybWF0LFxuICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICAgIHNjaGVkdWxlX3R5cGU6IHRoYXQuc2NoZWR1bGVfdHlwZVt0aGF0LnNjaGVkdWxlX3R5cGVfaW5kZXhdLFxuICAgICAgICAgIHNjaGVkdWxlX2lkOiB0aGF0LmlkLFxuICAgICAgICAgIGpzb25fZGF0YTogSlNPTi5zdHJpbmdpZnkoanNvbl9jb2RlKSxcbiAgICAgICAgICBkZWxfZmxnOiAyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgc2NoZWR1bGVfZGF0ZTogdGhhdC5kYXRlX3RpbWUuY2hlY2tfZm9ybWF0LFxuICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICAgIHNjaGVkdWxlX2VuZF9kYXRlOiB0aGF0LnNjaGVkdWxlX3JlbWFpbl9kYXRlLFxuICAgICAgICAgIHNjaGVkdWxlX3R5cGU6IHRoYXQuc2NoZWR1bGVfdHlwZVt0aGF0LnNjaGVkdWxlX3R5cGVfaW5kZXhdLFxuICAgICAgICAgIHNjaGVkdWxlX2lkOiB0aGF0LmlkLFxuICAgICAgICAgIGpzb25fZGF0YTogSlNPTi5zdHJpbmdpZnkoanNvbl9jb2RlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBycS5nZXQoYXBpLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGF0YSlcbiAgICB9LFxuICAgIGNoZWNrZWRTZXNzaW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmFpbmRleCAhPSAtMSkge1xuICAgICAgICB0aGlzLnNlc3Npb25fbGlzdFt0aGlzLmFpbmRleF0uc2Vzc2lvblt0aGlzLnNpbmRleF0uaXNfYm9vayA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgYWluZGV4ID0gdGhpcy5haW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5haW5kZXg7XG4gICAgICBsZXQgc2luZGV4ID0gdGhpcy5zaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaW5kZXg7XG4gICAgICB0aGlzLnNlc3Npb25fbGlzdFthaW5kZXhdLnNlc3Npb25bc2luZGV4XS5pc19ib29rID0gMTtcbiAgICB9LFxuICAgIGJpbmRTY2hlZHVsZVJlbWFpbkNoYW5nZShlKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlX3JlbWFpbl9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kU2NoZWR1bGVEYXRlQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5nZXRBcmVhU2Vzc2lvbih0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQpO1xuICAgIH0sXG4gICAgYmluZFNjaGVkdWxlVHlwZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlX3R5cGVfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIC8v5LiK5LiA5Liq5pyIXG4gICAgcHJlTW9udGgoKSB7XG4gICAgICB0aGlzLnNob3dfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd19kYXlzX2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICBsZXQgY3VyX2QgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIHRoaXMuZGF0ZV90aW1lLnNob3dfbW9udGhfZGF0ZSk7XG4gICAgICBjb25zb2xlLmxvZygn5b2T5YmN5pi+56S65pe26Ze077yaJyk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJfZCk7XG4gICAgICB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUgPSBuZXcgRGF0ZShkYXQuZ2V0UHJlTW9udGgoY3VyX2QpLnJlcGxhY2UoLy0vZywgXCIvXCIpKTtcbiAgICAgIHRoaXMuc2V0T25lTW9udGgodGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlKTtcbiAgICB9LFxuICAgIC8v5LiL5LiA5Liq5pyIXG4gICAgbmV4dE1vbnRoKCkge1xuICAgICAgdGhpcy5zaG93X2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dfZGF5c19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgbGV0IGN1cl9kID0gZGF0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgICAgY29uc29sZS5sb2coJ+W9k+WJjeaYvuekuuaXtumXtO+8micpO1xuICAgICAgdGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlID0gbmV3IERhdGUoZGF0LmdldE5leHRNb250aChjdXJfZCkucmVwbGFjZSgvLS9nLCBcIi9cIikpO1xuICAgICAgdGhpcy5zZXRPbmVNb250aCh0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgIH0sXG4gICAgLy/lvZPliY3ml6XmnJ9cbiAgICBzZWxlY3REYXkoZSkge1xuICAgICAgbGV0IGlzX2N1cnJlbnRfbW9udGggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jdXJyZW50O1xuICAgICAgaWYgKCFpc19jdXJyZW50X21vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93X2RheXNfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGU7IC8v6YCJ5oup55qE5pel5pyfXG4gICAgICB0aGlzLm5vX2VtcHR5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaGFzO1xuICAgICAgdGhpcy5zaG93X21vbnRoX251bSA9IGRhdC5nZXRNb250aChuZXcgRGF0ZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kYXRlKSk7XG4gICAgICB0aGlzLnNob3dfbW9udGggPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfd2Vla19kYXRlID0gbmV3IERhdGUoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGF0ZSk7XG4gICAgICAvLyB0aGlzLnNldE9uZU1vbnRoKG5ldyBEYXRlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgICAgIC8vU2VhcmNoIHNlc3Npb24gZm9yIGN1cnJlbnQgZGF5LlxuICAgICAgdGhpcy5nZXRBcmVhU2Vzc2lvbih0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQpO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgdGhhdC5vcmRlcl9pZCA9IG9wdGlvbnMub3JkZXJfaWQ7XG4gICAgdGhpcy5kZWxfZmxnID0gb3B0aW9ucy5kZWxfZmxnO1xuICAgIGlmIChvcHRpb25zLnNjaGVkdWxlX2RhdGUgJiYgb3B0aW9ucy5zY2hlZHVsZV9kYXRlICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IG9wdGlvbnMuc2NoZWR1bGVfZGF0ZTtcbiAgICAgIHRoaXMuaGFzX3NjaGVkdWxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlX3RpbWUuY2hlY2tfZm9ybWF0ID0gZGF0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCB0aGlzLmRhdGVfdGltZS5ub3cpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zY2hlZHVsZV9lbmRfZGF0ZSAmJiBvcHRpb25zLnNjaGVkdWxlX2VuZF9kYXRlICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVfcmVtYWluX2RhdGUgPSBvcHRpb25zLnNjaGVkdWxlX2VuZF9kYXRlO1xuICAgIH1cbiAgICB0aGlzLmRhdGVfdGltZS5zaG93X3dlZWtfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnNldE9uZU1vbnRoKG5ldyBEYXRlKCkpOyAvL+iuvue9ruS4gOS4quaciFxuICAgIHRoaXMuZ2V0QXJlYVNlc3Npb24odGhpcy5kYXRlX3RpbWUuY2hlY2tfZm9ybWF0KTtcbiAgfVxuICBnZXRBcmVhU2Vzc2lvbihjX2RhdGUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRBcmVhU2Vzc2lvbicsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5zZXNzaW9uX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICBsZXQgd2Vla19pbmRleCA9IGRhdC5nZXRXZWVrKG5ldyBEYXRlKERhdGUucGFyc2UoY19kYXRlLnJlcGxhY2UoLy0vZywgXCIvXCIpKSkpO1xuICAgICAgICB0aGF0LndlZWtfbmFtZV9jbiA9IHRoYXQub25lX3dlZWtfdGl0X2NuW3dlZWtfaW5kZXhdO1xuICAgICAgICB0aGF0LmFpbmRleCA9IC0xO1xuICAgICAgICB0aGF0LnNpbmRleCA9IC0xO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHNjaGVkdWxlX2RhdGU6IGNfZGF0ZVxuICAgIH0pXG4gIH1cbiAgLy/orr7nva7kuIDmnIjlhoXmmK/lkKblhbfmnInmtLvliqhcbiAgc2V0T25lTW9udGgoY19kYXRlKSB7XG4gICAgdGhpcy5mdWxsX29uZV9tb250aCA9IGRhdC5nZXRNb250aEV2ZXJ5RGF5KGNfZGF0ZSk7IC8v5LiA5pyI55qE5omA5pyJ5pel5pyfXG4gICAgY29uc29sZS5sb2coJ+aciOS7vScpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZnVsbF9vbmVfbW9udGgpO1xuICAgIHRoaXMuc2hvd19tb250aF9udW0gPSBkYXQuZ2V0TW9udGgoY19kYXRlKTsgLy8g6K6+572u6K+l5pe26Ze055qE5pyI5Lu9XG4gICAgdGhpcy5zaG93X3llYXIgPSBkYXQuZ2V0WWVhcihjX2RhdGUpOyAvL+iuvue9ruivpeaXtumXtOeahOW5tOS7vVxuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19