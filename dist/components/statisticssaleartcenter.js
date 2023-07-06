'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _date = require('./../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _ntinlinepicker = require('./common/ntinlinepicker.js');

var _ntinlinepicker2 = _interopRequireDefault(_ntinlinepicker);

var _multiSelect = require('./multiSelect.js');

var _multiSelect2 = _interopRequireDefault(_multiSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      is_request: {
        type: Boolean,
        twoWay: true
      }
    }, _this.data = {
      page_old_data: null,
      page_data: null,
      employee_list: [],
      department: '',
      order_date_start: '',
      order_date_end: '',
      employee_check_index: 0,
      page_success_data: null,
      tab_index: 0,
      user_act: null,
      city_list: [],
      employee_id: 0,
      intention_city: 0,
      city_check_index: 0,
      selected_value_array: [],
      office_line: {}
    }, _this.watch = {
      is_request: function is_request() {
        if (this.is_request) {
          var user_act = this.user_act = _wepy2.default.getStorageSync('user');
          var office_line = this.office_line = _wepy2.default.getStorageSync('office_line');
          if (user_act.is_sale && office_line == 'artcenter') {
            this.getSalesDataList();
          }
        }
      }
    }, _this.$repeat = {}, _this.$props = { "ntinlinepickerb": { "v-bind:checked_name.sync": "order_date_end", "ntpickertype": "date" }, "ntinlinepickerc": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:checked_name.sync": "order_date_start", "ntpickertype": "date" }, "MultiSelecta": { "ntlabel": "人员", "v-bind:range_data.sync": "employee_list", "range_key": "employee_name", "range_value_key": "employee_id", "v-bind:selected_value_array.once": "selected_value_array" }, "MultiSelectb": { "ntlabel": "城市", "v-bind:range_data.sync": "city_list", "range_key": "city_name", "range_value_key": "intention_city", "v-bind:selected_value_array.once": "city_check_index" } }, _this.$events = { "ntinlinepickerb": { "v-on:change": "handleEndChange" }, "ntinlinepickerc": { "v-on:change": "handleBeginChange" }, "MultiSelecta": { "v-on:confirm": "getNewEmployeesData" }, "MultiSelectb": { "v-on:confirm": "getNewCitysData" } }, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default,
      ntinlinepickera: _ntinlinepicker2.default,
      ntinlinepickerd: _ntinlinepicker2.default,
      MultiSelecta: _multiSelect2.default,
      MultiSelectb: _multiSelect2.default
    }, _this.methods = {
      getNewEmployeesData: function getNewEmployeesData(employee_id) {
        this.employee_id = employee_id;
        this.getSalesDataList();
      },
      getNewCitysData: function getNewCitysData(intention_city) {
        this.intention_city = intention_city;
        this.getSalesDataList();
      },
      toggleTab: function toggleTab(e) {
        this.tab_index = e.currentTarget.dataset.index;
      },
      handleBeginChange: function handleBeginChange(date) {
        this.order_date_start = date;
        this.getSalesDataList();
      },
      handleEndChange: function handleEndChange(date) {
        this.order_date_end = date;
        this.getSalesDataList();
      },
      naviToList: function naviToList(e) {
        var datatype = e.currentTarget.dataset.datatype;
        var params = 'start_time=' + this.order_date_start + '&end_time=' + this.order_date_end + '&datatype=' + datatype + '&employee_id=' + this.employee_id + '&intention_city=' + this.intention_city;
        _wepy2.default.navigateTo({
          url: '/pages/artcenter/sale/statisticsfiter?' + params
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getSalesDataList',
    value: function getSalesDataList() {
      var that = this;
      var params = {
        start_date: that.order_date_start,
        end_date: that.order_date_end,
        employee_id: that.employee_id,
        intention_city: that.intention_city
      };
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {}
      });
      _request2.default.get('getSalesUserData', {
        200: function _(result) {
          that.page_data = result.data.data;
          _wepy2.default.hideLoading();
          that.$apply();
        }
      }, params);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth();
      var count_day = new Date(year, month, 0).getDate();
      this.order_date_start = _date2.default.dateFormat('yyyy-MM-dd', new Date(year, month, 1));
      this.order_date_end = _date2.default.dateFormat('yyyy-MM-dd', new Date(year, month, count_day - 1));

      var that = this;
      _request2.default.get('getCityEmployeeList', {
        200: function _(result) {
          that.employee_list = result.data.employee_list;
          if (!that.employee_id) {
            that.employee_list[0].checked = true;
          }
          if (!that.intention_city) {
            that.city_list = result.data.city_list;
            that.city_list.unshift({
              city_name: "全部",
              checked: true,
              intention_city: 0
            });
            that.intention_city = 0;
          }
          _wepy2.default.hideLoading();
          that.$apply();
        }
      }, {});
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzYWxlYXJ0Y2VudGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpc19yZXF1ZXN0IiwidHlwZSIsIkJvb2xlYW4iLCJ0d29XYXkiLCJkYXRhIiwicGFnZV9vbGRfZGF0YSIsInBhZ2VfZGF0YSIsImVtcGxveWVlX2xpc3QiLCJkZXBhcnRtZW50Iiwib3JkZXJfZGF0ZV9zdGFydCIsIm9yZGVyX2RhdGVfZW5kIiwiZW1wbG95ZWVfY2hlY2tfaW5kZXgiLCJwYWdlX3N1Y2Nlc3NfZGF0YSIsInRhYl9pbmRleCIsInVzZXJfYWN0IiwiY2l0eV9saXN0IiwiZW1wbG95ZWVfaWQiLCJpbnRlbnRpb25fY2l0eSIsImNpdHlfY2hlY2tfaW5kZXgiLCJzZWxlY3RlZF92YWx1ZV9hcnJheSIsIm9mZmljZV9saW5lIiwid2F0Y2giLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zYWxlIiwiZ2V0U2FsZXNEYXRhTGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm50aW5saW5lcGlja2VyYiIsIm50aW5saW5lcGlja2VyIiwibnRpbmxpbmVwaWNrZXJjIiwibnRpbmxpbmVwaWNrZXJhIiwibnRpbmxpbmVwaWNrZXJkIiwiTXVsdGlTZWxlY3RhIiwiTXVsdGlTZWxlY3QiLCJNdWx0aVNlbGVjdGIiLCJtZXRob2RzIiwiZ2V0TmV3RW1wbG95ZWVzRGF0YSIsImdldE5ld0NpdHlzRGF0YSIsInRvZ2dsZVRhYiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiaGFuZGxlQmVnaW5DaGFuZ2UiLCJkYXRlIiwiaGFuZGxlRW5kQ2hhbmdlIiwibmF2aVRvTGlzdCIsImRhdGF0eXBlIiwicGFyYW1zIiwibmF2aWdhdGVUbyIsInVybCIsInRoYXQiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJycSIsImdldCIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNvdW50X2RheSIsImdldERhdGUiLCJkdCIsImRhdGVGb3JtYXQiLCJjaGVja2VkIiwidW5zaGlmdCIsImNpdHlfbmFtZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxjQUFNQyxPQURJO0FBRVZDLGdCQUFRO0FBRkU7QUFETixLLFFBTVJDLEksR0FBTztBQUNMQyxxQkFBZSxJQURWO0FBRUxDLGlCQUFXLElBRk47QUFHTEMscUJBQWUsRUFIVjtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLHdCQUFrQixFQUxiO0FBTUxDLHNCQUFnQixFQU5YO0FBT0xDLDRCQUFzQixDQVBqQjtBQVFMQyx5QkFBbUIsSUFSZDtBQVNMQyxpQkFBVyxDQVROO0FBVUxDLGdCQUFVLElBVkw7QUFXTEMsaUJBQVcsRUFYTjtBQVlMQyxtQkFBYSxDQVpSO0FBYUxDLHNCQUFnQixDQWJYO0FBY0xDLHdCQUFrQixDQWRiO0FBZUxDLDRCQUFzQixFQWZqQjtBQWdCTEMsbUJBQVk7QUFoQlAsSyxRQWtCUEMsSyxHQUFRO0FBQ05yQixnQkFETSx3QkFDTztBQUNYLFlBQUksS0FBS0EsVUFBVCxFQUFxQjtBQUNuQixjQUFJYyxXQUFXLEtBQUtBLFFBQUwsR0FBZ0JRLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBL0I7QUFDQSxjQUFJSCxjQUFjLEtBQUtBLFdBQUwsR0FBbUJFLGVBQUtDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBckM7QUFDQSxjQUFJVCxTQUFTVSxPQUFULElBQW9CSixlQUFlLFdBQXZDLEVBQW9EO0FBQ2xELGlCQUFLSyxnQkFBTDtBQUNEO0FBQ0Y7QUFDRjtBQVRLLEss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QUFHckIzRCw4QkFBZ0I7QUFISyxhQUF2QjtBQUtBcUMsaUJBQUtyQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0Q7QUFDREsseUJBQUswQyxXQUFMO0FBQ0FWLGVBQUtXLE1BQUw7QUFDRDtBQWpCMkIsT0FBOUIsRUFrQkcsRUFsQkg7QUFtQkQ7Ozs7RUE1SGdDM0MsZUFBS3lELFM7O2tCQUFuQmpGLEsiLCJmaWxlIjoic3RhdGlzdGljc3NhbGVhcnRjZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IGR0IGZyb20gJy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCBudGlubGluZXBpY2tlciBmcm9tICcuL2NvbW1vbi9udGlubGluZXBpY2tlcic7XG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSBcIi4vbXVsdGlTZWxlY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBpc19yZXF1ZXN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IFtdLFxuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfc3RhcnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfZW5kOiAnJyxcbiAgICBlbXBsb3llZV9jaGVja19pbmRleDogMCxcbiAgICBwYWdlX3N1Y2Nlc3NfZGF0YTogbnVsbCxcbiAgICB0YWJfaW5kZXg6IDAsXG4gICAgdXNlcl9hY3Q6IG51bGwsXG4gICAgY2l0eV9saXN0OiBbXSxcbiAgICBlbXBsb3llZV9pZDogMCxcbiAgICBpbnRlbnRpb25fY2l0eTogMCxcbiAgICBjaXR5X2NoZWNrX2luZGV4OiAwLFxuICAgIHNlbGVjdGVkX3ZhbHVlX2FycmF5OiBbXSxcbiAgICBvZmZpY2VfbGluZTp7fVxuICB9XG4gIHdhdGNoID0ge1xuICAgIGlzX3JlcXVlc3QoKSB7XG4gICAgICBpZiAodGhpcy5pc19yZXF1ZXN0KSB7XG4gICAgICAgIGxldCB1c2VyX2FjdCA9IHRoaXMudXNlcl9hY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIGxldCBvZmZpY2VfbGluZSA9IHRoaXMub2ZmaWNlX2xpbmUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICAgICAgICBpZiAodXNlcl9hY3QuaXNfc2FsZSAmJiBvZmZpY2VfbGluZSA9PSAnYXJ0Y2VudGVyJykge1xuICAgICAgICAgIHRoaXMuZ2V0U2FsZXNEYXRhTGlzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfZW5kXCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfc3RhcnRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifSxcIk11bHRpU2VsZWN0YVwiOntcIm50bGFiZWxcIjpcIuS6uuWRmFwiLFwidi1iaW5kOnJhbmdlX2RhdGEuc3luY1wiOlwiZW1wbG95ZWVfbGlzdFwiLFwicmFuZ2Vfa2V5XCI6XCJlbXBsb3llZV9uYW1lXCIsXCJyYW5nZV92YWx1ZV9rZXlcIjpcImVtcGxveWVlX2lkXCIsXCJ2LWJpbmQ6c2VsZWN0ZWRfdmFsdWVfYXJyYXkub25jZVwiOlwic2VsZWN0ZWRfdmFsdWVfYXJyYXlcIn0sXCJNdWx0aVNlbGVjdGJcIjp7XCJudGxhYmVsXCI6XCLln47luIJcIixcInYtYmluZDpyYW5nZV9kYXRhLnN5bmNcIjpcImNpdHlfbGlzdFwiLFwicmFuZ2Vfa2V5XCI6XCJjaXR5X25hbWVcIixcInJhbmdlX3ZhbHVlX2tleVwiOlwiaW50ZW50aW9uX2NpdHlcIixcInYtYmluZDpzZWxlY3RlZF92YWx1ZV9hcnJheS5vbmNlXCI6XCJjaXR5X2NoZWNrX2luZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcIm50aW5saW5lcGlja2VyYlwiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVFbmRDaGFuZ2VcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlQmVnaW5DaGFuZ2VcIn0sXCJNdWx0aVNlbGVjdGFcIjp7XCJ2LW9uOmNvbmZpcm1cIjpcImdldE5ld0VtcGxveWVlc0RhdGFcIn0sXCJNdWx0aVNlbGVjdGJcIjp7XCJ2LW9uOmNvbmZpcm1cIjpcImdldE5ld0NpdHlzRGF0YVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmE6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyZDogbnRpbmxpbmVwaWNrZXIsXG4gICAgTXVsdGlTZWxlY3RhOiBNdWx0aVNlbGVjdCxcbiAgICBNdWx0aVNlbGVjdGI6IE11bHRpU2VsZWN0LFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2V0TmV3RW1wbG95ZWVzRGF0YShlbXBsb3llZV9pZCkge1xuICAgICAgdGhpcy5lbXBsb3llZV9pZCA9IGVtcGxveWVlX2lkO1xuICAgICAgdGhpcy5nZXRTYWxlc0RhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBnZXROZXdDaXR5c0RhdGEoaW50ZW50aW9uX2NpdHkpIHtcbiAgICAgIHRoaXMuaW50ZW50aW9uX2NpdHkgPSBpbnRlbnRpb25fY2l0eTtcbiAgICAgIHRoaXMuZ2V0U2FsZXNEYXRhTGlzdCgpO1xuICAgIH0sXG4gICAgdG9nZ2xlVGFiKGUpIHtcbiAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgfSxcbiAgICBoYW5kbGVCZWdpbkNoYW5nZShkYXRlKSB7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgPSBkYXRlO1xuICAgICAgdGhpcy5nZXRTYWxlc0RhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGRhdGU7XG4gICAgICB0aGlzLmdldFNhbGVzRGF0YUxpc3QoKTtcbiAgICB9LFxuICAgIG5hdmlUb0xpc3QoZSkge1xuICAgICAgbGV0IGRhdGF0eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGF0YXR5cGU7XG4gICAgICBsZXQgcGFyYW1zID0gJ3N0YXJ0X3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9zdGFydCArICcmZW5kX3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmQgKyAnJmRhdGF0eXBlPScgKyBkYXRhdHlwZSArICcmZW1wbG95ZWVfaWQ9JyArIHRoaXMuZW1wbG95ZWVfaWQgKyAnJmludGVudGlvbl9jaXR5PScgKyB0aGlzLmludGVudGlvbl9jaXR5O1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2FydGNlbnRlci9zYWxlL3N0YXRpc3RpY3NmaXRlcj8nICsgcGFyYW1zXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0U2FsZXNEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF9kYXRlOiB0aGF0Lm9yZGVyX2RhdGVfZW5kLFxuICAgICAgZW1wbG95ZWVfaWQ6IHRoYXQuZW1wbG95ZWVfaWQsXG4gICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5pbnRlbnRpb25fY2l0eVxuICAgIH1cbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgfSk7XG4gICAgcnEuZ2V0KCdnZXRTYWxlc1VzZXJEYXRhJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcylcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgY291bnRfZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBjb3VudF9kYXkgLSAxKSk7XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRDaXR5RW1wbG95ZWVMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICBpZiAoIXRoYXQuZW1wbG95ZWVfaWQpIHtcbiAgICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3RbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGF0LmludGVudGlvbl9jaXR5KSB7XG4gICAgICAgICAgdGhhdC5jaXR5X2xpc3QgPSByZXN1bHQuZGF0YS5jaXR5X2xpc3Q7XG4gICAgICAgICAgdGhhdC5jaXR5X2xpc3QudW5zaGlmdCh7XG4gICAgICAgICAgICBjaXR5X25hbWU6IFwi5YWo6YOoXCIsXG4gICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgaW50ZW50aW9uX2NpdHk6IDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoYXQuaW50ZW50aW9uX2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHt9KVxuICB9XG59XG4iXX0=