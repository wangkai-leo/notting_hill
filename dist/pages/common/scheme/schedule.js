"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

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
            schedule_type: ['预定', '锁定', '试菜'],
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
            all_month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            // one_wekk_tit: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], //星期简称
            // all_month: ['JANUARY', 'FEBURARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'], //月份全称
            // short_month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], 
            show_month_num: 0,
            show_year: 2019,
            week_name_cn: '',
            session_list: null,
            schedule_type_index: 2,
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/schedule'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiY3VzdG9tZXIiLCJpZCIsInNjaGVkdWxlX3R5cGUiLCJkYXRlX3RpbWUiLCJub3ciLCJEYXRlIiwiY2hlY2tfZm9ybWF0Iiwic2hvd193ZWVrX2RhdGUiLCJzaG93X21vbnRoX2RhdGUiLCJvbmVfd2Vla190aXRfY24iLCJvbmVfd2VlayIsImZ1bGxfb25lX3dlZWsiLCJmdWxsX29uZV93ZWVrX2hhcyIsImZ1bGxfb25lX21vbnRoIiwiYWxsX21vbnRoIiwic2hvd19tb250aF9udW0iLCJzaG93X3llYXIiLCJ3ZWVrX25hbWVfY24iLCJzZXNzaW9uX2xpc3QiLCJzY2hlZHVsZV90eXBlX2luZGV4Iiwic2NoZWR1bGVfcmVtYWluX2RhdGUiLCJhaW5kZXgiLCJzaW5kZXgiLCJvcmRlcl9pZCIsImhhc19zY2hlZHVsZSIsIm1ldGhvZHMiLCJjYW5jZWwiLCJ0aGF0IiwicnEiLCJnZXQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCIkYXBwbHkiLCJzdWJtaXQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImpzb25fY29kZSIsImFyZWFfaWQiLCJzZXNzaW9uIiwiYXBpIiwic2NoZWR1bGVfZGF0ZSIsInNjaGVkdWxlX2VuZF9kYXRlIiwic2NoZWR1bGVfaWQiLCJqc29uX2RhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlY2tlZFNlc3Npb24iLCJlIiwiaXNfYm9vayIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYmluZFNjaGVkdWxlUmVtYWluQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kU2NoZWR1bGVUeXBlQ2hhbmdlIiwicHJlTW9udGgiLCJzaG93X2NhdGVnb3J5Iiwic2hvd19kYXlzX2NhdGVnb3J5IiwiY3VyX2QiLCJkYXQiLCJkYXRlRm9ybWF0IiwiY29uc29sZSIsImxvZyIsImdldFByZU1vbnRoIiwicmVwbGFjZSIsInNldE9uZU1vbnRoIiwibmV4dE1vbnRoIiwiZ2V0TmV4dE1vbnRoIiwic2VsZWN0RGF5IiwiaXNfY3VycmVudF9tb250aCIsImN1cnJlbnQiLCJkYXRlIiwibm9fZW1wdHkiLCJoYXMiLCJnZXRNb250aCIsInNob3dfbW9udGgiLCJnZXRBcmVhU2Vzc2lvbiIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJjX2RhdGUiLCJyZXN1bHQiLCJ3ZWVrX2luZGV4IiwiZ2V0V2VlayIsInBhcnNlIiwiZ2V0TW9udGhFdmVyeURheSIsImdldFllYXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLGdCQUFJLEVBTEQ7QUFNSEMsMkJBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FOWjtBQU9IQyx1QkFBVztBQUNQQyxxQkFBSyxJQUFJQyxJQUFKLEVBREUsRUFDVTtBQUNqQkMsOEJBQWMsRUFGUCxFQUVXO0FBQ2xCQyxnQ0FBZ0IsRUFIVCxFQUdhO0FBQ3BCQyxpQ0FB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O0FBQ0Q7Ozs7b0NBQ1lBLE0sRUFBUTtBQUNoQixpQkFBS3ZFLGNBQUwsR0FBc0JrRCxlQUFJMEIsZ0JBQUosQ0FBcUJMLE1BQXJCLENBQXRCLENBRGdCLENBQ29DO0FBQ3BEbkIsb0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVksS0FBS3JELGNBQWpCO0FBQ0EsaUJBQUtFLGNBQUwsR0FBc0JnRCxlQUFJZSxRQUFKLENBQWFNLE1BQWIsQ0FBdEIsQ0FKZ0IsQ0FJNEI7QUFDNUMsaUJBQUtwRSxTQUFMLEdBQWlCK0MsZUFBSTJCLE9BQUosQ0FBWU4sTUFBWixDQUFqQixDQUxnQixDQUtzQjtBQUN6Qzs7O2lDQUNRLENBQUU7Ozs7RUF2TW9CdEQsZUFBSzZELEk7O2tCQUFuQnRHLEsiLCJmaWxlIjoic2NoZWR1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuICAgIGltcG9ydCBycSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3RcIjtcbiAgICBpbXBvcnQgdG9vbCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2xcIjtcbiAgICBpbXBvcnQgZGF0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZVwiO1xuICAgIGltcG9ydCBjc3MgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY3NzXCI7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6IFwi5ama56S85qGj5pyfXCIsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcbiAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgc2NoZWR1bGVfdHlwZTogWyfpooTlrponLCAn6ZSB5a6aJywgJ+ivleiPnCddLFxuICAgICAgICAgICAgZGF0ZV90aW1lOiB7XG4gICAgICAgICAgICAgICAgbm93OiBuZXcgRGF0ZSgpLCAvL2N1cnJlbnQgdGltZVxuICAgICAgICAgICAgICAgIGNoZWNrX2Zvcm1hdDogJycsIC8vIOmAieaLqeeahOagvOW8j+WMluaXtumXtCAgeXl5eS1NTS1kZFxuICAgICAgICAgICAgICAgIHNob3dfd2Vla19kYXRlOiAnJywgLy/ml6XmnJ/ml7bpl7QsIOeUqOadpeiOt+WPluivpeaXtumXtOeCueeahOS4gOWRqOaXtumXtFxuICAgICAgICAgICAgICAgIHNob3dfbW9udGhfZGF0ZTogJycgLy/nlKjmnaXmmL7npLrmnIjku73nmoTml7bpl7RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmVfd2Vla190aXRfY246IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sIC8v5pif5pyf566A56ewXG4gICAgICAgICAgICBvbmVfd2VlazogW10sIC8vTWRkIC8v5pi+56S655qE5pel5pyfXG4gICAgICAgICAgICBmdWxsX29uZV93ZWVrOiBbXSwgLy95eXl5LU1NLWRkIC8v5a6M5pW055qE5pel5pyfXG4gICAgICAgICAgICBmdWxsX29uZV93ZWVrX2hhczogW10sIC8v5Yik5pat5LiA5ZGo5pe26Ze055qE5p+Q5LiA5aSp5piv5ZCm5YW35pyJ5rS75YqoXG4gICAgICAgICAgICBmdWxsX29uZV9tb250aDogW10sIC8v6K+l5pyI55qE5pel5pyfXG4gICAgICAgICAgICBhbGxfbW9udGg6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXSwgXG4gICAgICAgICAgICAvLyBvbmVfd2Vra190aXQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sIC8v5pif5pyf566A56ewXG4gICAgICAgICAgICAvLyBhbGxfbW9udGg6IFsnSkFOVUFSWScsICdGRUJVUkFSWScsICdNQVJDSCcsICdBUFJJTCcsICdNQVknLCAnSlVORScsICdKVUxZJywgJ0FVR1VTVCcsICdTRVBURU1CRVInLCAnT0NUT0JFUicsICdOT1ZFTUJFUicsICdERUNFTUJFUiddLCAvL+aciOS7veWFqOensFxuICAgICAgICAgICAgLy8gc2hvcnRfbW9udGg6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ10sIFxuICAgICAgICAgICAgc2hvd19tb250aF9udW06IDAsXG4gICAgICAgICAgICBzaG93X3llYXI6IDIwMTksXG4gICAgICAgICAgICB3ZWVrX25hbWVfY246ICcnLFxuICAgICAgICAgICAgc2Vzc2lvbl9saXN0OiBudWxsLFxuICAgICAgICAgICAgc2NoZWR1bGVfdHlwZV9pbmRleDogMixcbiAgICAgICAgICAgIHNjaGVkdWxlX3JlbWFpbl9kYXRlOiAnJyxcbiAgICAgICAgICAgIGFpbmRleDogLTEsXG4gICAgICAgICAgICBzaW5kZXg6IC0xLFxuICAgICAgICAgICAgb3JkZXJfaWQ6IC0xLFxuICAgICAgICAgICAgaGFzX3NjaGVkdWxlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2FuY2VsKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2NhbmNlbFdlZGRpbmdTY2hlZHVsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlX3R5cGU6IHRoYXQuc2NoZWR1bGVfdHlwZVt0aGF0LnNjaGVkdWxlX3R5cGVfaW5kZXhdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NoZWR1bGVfdHlwZV9pbmRleCA9PSAwICYmIHRoaXMuc2NoZWR1bGVfcmVtYWluX2RhdGUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nmoaPmnJ/pooTnlZnml7bpl7QnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5haW5kZXggPT0gLTEgfHwgdGhpcy5zaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6npnIDopoHpooTlrprnmoTlnLrmrKEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGpzb25fY29kZT0nXCJbe1wiYXJlYV9pZFwiOicrdGhhdC5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLmFyZWFfaWQrJyxcInNlc3Npb25cIjonKyh0aGlzLnNpbmRleCsxKSsnfV1cIidcbiAgICAgICAgICAgICAgICBsZXQganNvbl9jb2RlID0gW3tcbiAgICAgICAgICAgICAgICAgICAgYXJlYV9pZDogdGhhdC5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLmFyZWFfaWQsXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb246ICh0aGlzLnNpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICBsZXQgYXBpID0gJydcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5oYXNfc2NoZWR1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpID0gJ2VkaXRXZWRkaW5nU2NoZWR1bGUnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpID0gJ2FkZFdlZGRpbmdTY2hlZHVsZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnEuZ2V0KGFwaSwge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV9kYXRlOiB0aGF0LmRhdGVfdGltZS5jaGVja19mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV9lbmRfZGF0ZTogdGhhdC5zY2hlZHVsZV9yZW1haW5fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVfdHlwZTogdGhhdC5zY2hlZHVsZV90eXBlW3RoYXQuc2NoZWR1bGVfdHlwZV9pbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlX2lkOiB0aGF0LmlkLFxuICAgICAgICAgICAgICAgICAgICBqc29uX2RhdGE6IOOAgEpTT04uc3RyaW5naWZ5KGpzb25fY29kZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrZWRTZXNzaW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5haW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uX2xpc3RbdGhpcy5haW5kZXhdLnNlc3Npb25bdGhpcy5zaW5kZXhdLmlzX2Jvb2sgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYWluZGV4ID0gdGhpcy5haW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5haW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmRleCA9IHRoaXMuc2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbl9saXN0W2FpbmRleF0uc2Vzc2lvbltzaW5kZXhdLmlzX2Jvb2sgPSAxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRTY2hlZHVsZVJlbWFpbkNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZV9yZW1haW5fZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRTY2hlZHVsZVR5cGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfdHlwZV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5LiK5LiA5Liq5pyIXG4gICAgICAgICAgICBwcmVNb250aCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfZGF5c19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBjdXJfZCA9IGRhdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgdGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b2T5YmN5pi+56S65pe26Ze077yaJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VyX2QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfbW9udGhfZGF0ZSA9IG5ldyBEYXRlKGRhdC5nZXRQcmVNb250aChjdXJfZCkucmVwbGFjZSgvLS9nLCBcIi9cIikpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0T25lTW9udGgodGhpcy5kYXRlX3RpbWUuc2hvd19tb250aF9kYXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL+S4i+S4gOS4quaciFxuICAgICAgICAgICAgbmV4dE1vbnRoKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19kYXlzX2NhdGVnb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGN1cl9kID0gZGF0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3mmL7npLrml7bpl7TvvJonKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUgPSBuZXcgRGF0ZShkYXQuZ2V0TmV4dE1vbnRoKGN1cl9kKS5yZXBsYWNlKC8tL2csIFwiL1wiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPbmVNb250aCh0aGlzLmRhdGVfdGltZS5zaG93X21vbnRoX2RhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5b2T5YmN5pel5pyfXG4gICAgICAgICAgICBzZWxlY3REYXkoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpc19jdXJyZW50X21vbnRoID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAoIWlzX2N1cnJlbnRfbW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfY2F0ZWdvcnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfZGF5c19jYXRlZ29yeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZV90aW1lLmNoZWNrX2Zvcm1hdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGU7IC8v6YCJ5oup55qE5pel5pyfXG4gICAgICAgICAgICAgICAgdGhpcy5ub19lbXB0eSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmhhcztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfbW9udGhfbnVtID0gZGF0LmdldE1vbnRoKG5ldyBEYXRlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfbW9udGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVfdGltZS5zaG93X3dlZWtfZGF0ZSA9IG5ldyBEYXRlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRhdGUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0T25lTW9udGgobmV3IERhdGUoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGF0ZSkpO1xuICAgICAgICAgICAgICAgIC8vU2VhcmNoIHNlc3Npb24gZm9yIGN1cnJlbnQgZGF5LlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXJlYVNlc3Npb24odGhpcy5kYXRlX3RpbWUuY2hlY2tfZm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGF0Lm9yZGVyX2lkID0gb3B0aW9ucy5vcmRlcl9pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+PicpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNjaGVkdWxlX2RhdGUgJiYgb3B0aW9ucy5zY2hlZHVsZV9kYXRlICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQgPSBvcHRpb25zLnNjaGVkdWxlX2RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNfc2NoZWR1bGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQgPSBkYXQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIHRoaXMuZGF0ZV90aW1lLm5vdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zY2hlZHVsZV9lbmRfZGF0ZSAmJiBvcHRpb25zLnNjaGVkdWxlX2VuZF9kYXRlICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlX3JlbWFpbl9kYXRlID0gb3B0aW9ucy5zY2hlZHVsZV9lbmRfZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfd2Vla19kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZV90aW1lLnNob3dfbW9udGhfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9uZU1vbnRoKG5ldyBEYXRlKCkpOyAvL+iuvue9ruS4gOS4quaciFxuICAgICAgICAgICAgdGhpcy5nZXRBcmVhU2Vzc2lvbih0aGlzLmRhdGVfdGltZS5jaGVja19mb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGdldEFyZWFTZXNzaW9uKGNfZGF0ZSkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRBcmVhU2Vzc2lvbicsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2Vzc2lvbl9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdlZWtfaW5kZXggPSBkYXQuZ2V0V2VlayhuZXcgRGF0ZShEYXRlLnBhcnNlKGNfZGF0ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC53ZWVrX25hbWVfY24gPSB0aGF0Lm9uZV93ZWVrX3RpdF9jblt3ZWVrX2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5haW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVfZGF0ZTogY19kYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8v6K6+572u5LiA5pyI5YaF5piv5ZCm5YW35pyJ5rS75YqoXG4gICAgICAgIHNldE9uZU1vbnRoKGNfZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5mdWxsX29uZV9tb250aCA9IGRhdC5nZXRNb250aEV2ZXJ5RGF5KGNfZGF0ZSk7IC8v5LiA5pyI55qE5omA5pyJ5pel5pyfXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5pyI5Lu9Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1bGxfb25lX21vbnRoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd19tb250aF9udW0gPSBkYXQuZ2V0TW9udGgoY19kYXRlKTsgLy8g6K6+572u6K+l5pe26Ze055qE5pyI5Lu9XG4gICAgICAgICAgICB0aGlzLnNob3dfeWVhciA9IGRhdC5nZXRZZWFyKGNfZGF0ZSk7IC8v6K6+572u6K+l5pe26Ze055qE5bm05Lu9XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=