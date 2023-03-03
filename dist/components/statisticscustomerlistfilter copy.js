'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ntitem from "./common/ntitem";

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      // ntitema:ntitem
    }, _this.props = {
      origin_list: {
        type: Array,
        default: []
      },
      approval_search: { //true: is approval filter search; false: is salesman filter 
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.data = {
      readonly: false,

      filter_option: {
        start_date: '',
        end_date: '',
        order_id: '',
        channel_name: '',
        intention_name: '',
        sales_name: '',
        intention_city_name: '',

        order_id_str: '', //option for salesman filter
        user_mobile: '', //option for salesman filter
        wechat_id: '' //option for salesman filter
      },
      channel_arr: [],
      intention_arr: [],
      sales_arr: [],
      intention_city_arr: []
    }, _this.watch = {
      origin_list: function origin_list() {
        var _this2 = this;

        this.origin_list.forEach(function (element) {
          if (!_this2.arrayHaveItem(_this2.channel_arr, element.channel_name)) {
            _this2.channel_arr.push(element.channel_name);
          }
          if (!_this2.arrayHaveItem(_this2.intention_arr, element.intention_name)) {
            _this2.intention_arr.push(element.intention_name);
          }
          if (!_this2.arrayHaveItem(_this2.sales_arr, element.sales_name)) {
            _this2.sales_arr.push(element.sales_name);
          }
          if (!_this2.arrayHaveItem(_this2.intention_city_arr, element.intention_city_name)) {
            _this2.intention_city_arr.push(element.intention_city_name);
          }
        });
        console.log(this.intention_arr);
      }
    }, _this.methods = {
      approvalSearch: function approvalSearch() {
        var that = this;
        if (!that.filter_option.order_id_str && !that.filter_option.user_mobile && !that.filter_option.wechat_id) {
          _wepy2.default.showToast({
            title: '请输入至少一项', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        rq.get('searchAllUser', {
          200: function _(result) {
            that.show_search = false;
            that.$emit('search', result.data.data);
            that.$apply();
          }
        }, {
          order_id_str: that.filter_option.order_id_str,
          user_mobile: that.filter_option.user_mobile,
          wechat_id: that.filter_option.wechat_id
        });
      },
      bindCityChange: function bindCityChange(e) {
        this.filter_option.intention_city_name = this.intention_city_arr[e.detail.value];
      },
      bindInputOrderIdStr: function bindInputOrderIdStr(e) {
        this.filter_option.order_id_str = e.detail.value;
      },
      bindInputMobile: function bindInputMobile(e) {
        this.filter_option.user_mobile = e.detail.value;
      },
      bindInputwechat: function bindInputwechat(e) {
        this.filter_option.wechat_id = e.detail.value;
      },
      bindStartChange: function bindStartChange(e) {
        this.filter_option.start_date = e.detail.value;
      },
      bindEndChange: function bindEndChange(e) {
        this.filter_option.end_date = e.detail.value;
      },
      bindInputOrderId: function bindInputOrderId(e) {
        this.filter_option.order_id = e.detail.value;
      },
      bindSalesChange: function bindSalesChange(e) {
        this.filter_option.sales_name = this.sales_arr[e.detail.value];
      },
      bindIntentionChange: function bindIntentionChange(e) {
        this.filter_option.intention_name = this.intention_arr[e.detail.value];
      },
      bindChannelChange: function bindChannelChange(e) {
        this.filter_option.channel_name = this.channel_arr[e.detail.value];
      },
      localSearch: function localSearch() {
        var _this3 = this;

        var pur = [];
        this.origin_list.forEach(function (element) {
          var is_add = true;
          var s_order_id = _this3.filter_option.order_id;
          {
            if (!element.create_time || element.create_time < new Date(_this3.filter_option.start_date).getTime() / 1000 || element.create_time > new Date(_this3.filter_option.end_date).getTime() / 1000) {
              is_add = false;
            };
          }
          if (s_order_id && element.order_id.indexOf(s_order_id) < 0) {
            is_add = false;
          }
          if (_this3.filter_option.channel_name && element.channel_name != _this3.filter_option.channel_name) {
            is_add = false;
          }
          if (_this3.filter_option.intention_name && element.intention_name != _this3.filter_option.intention_name) {
            is_add = false;
          }
          if (_this3.filter_option.sales_name && element.sales_name != _this3.filter_option.sales_name) {
            is_add = false;
          }
          if (_this3.filter_option.intention_city_name && element.intention_city_name != _this3.filter_option.intention_city_name) {
            is_add = false;
          }
          if (is_add) {
            pur.push(element);
          }
        });
        this.$emit('search', pur);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'arrayHaveItem',
    value: function arrayHaveItem(list, it) {
      var has = false;
      list.forEach(function (el) {
        if (el == it) {
          has = true;
        }
      });
      if (!it) {
        has = true;
      }
      return has;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXIgY29weS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJwcm9wcyIsIm9yaWdpbl9saXN0IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImFwcHJvdmFsX3NlYXJjaCIsIkJvb2xlYW4iLCJ0d29XYXkiLCJkYXRhIiwicmVhZG9ubHkiLCJmaWx0ZXJfb3B0aW9uIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwib3JkZXJfaWQiLCJjaGFubmVsX25hbWUiLCJpbnRlbnRpb25fbmFtZSIsInNhbGVzX25hbWUiLCJpbnRlbnRpb25fY2l0eV9uYW1lIiwib3JkZXJfaWRfc3RyIiwidXNlcl9tb2JpbGUiLCJ3ZWNoYXRfaWQiLCJjaGFubmVsX2FyciIsImludGVudGlvbl9hcnIiLCJzYWxlc19hcnIiLCJpbnRlbnRpb25fY2l0eV9hcnIiLCJ3YXRjaCIsImZvckVhY2giLCJhcnJheUhhdmVJdGVtIiwiZWxlbWVudCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImFwcHJvdmFsU2VhcmNoIiwidGhhdCIsIndlcHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCJzaG93X3NlYXJjaCIsIiRlbWl0IiwicmVzdWx0IiwiJGFwcGx5IiwiYmluZENpdHlDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRPcmRlcklkU3RyIiwiYmluZElucHV0TW9iaWxlIiwiYmluZElucHV0d2VjaGF0IiwiYmluZFN0YXJ0Q2hhbmdlIiwiYmluZEVuZENoYW5nZSIsImJpbmRJbnB1dE9yZGVySWQiLCJiaW5kU2FsZXNDaGFuZ2UiLCJiaW5kSW50ZW50aW9uQ2hhbmdlIiwiYmluZENoYW5uZWxDaGFuZ2UiLCJsb2NhbFNlYXJjaCIsInB1ciIsImlzX2FkZCIsInNfb3JkZXJfaWQiLCJjcmVhdGVfdGltZSIsIkRh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dCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuLy8gaW1wb3J0IG50aXRlbSBmcm9tIFwiLi9jb21tb24vbnRpdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb21wb25lbnRzID0ge1xuICAgIC8vIG50aXRlbWE6bnRpdGVtXG4gIH1cbiAgcHJvcHMgPSB7XG4gICAgb3JpZ2luX2xpc3Q6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDpbXVxuICAgIH0sXG4gICAgYXBwcm92YWxfc2VhcmNoOiB7IC8vdHJ1ZTogaXMgYXBwcm92YWwgZmlsdGVyIHNlYXJjaDsgZmFsc2U6IGlzIHNhbGVzbWFuIGZpbHRlciBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHR3b1dheTp0cnVlXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuXG4gICAgZmlsdGVyX29wdGlvbjoge1xuICAgICAgc3RhcnRfZGF0ZTogJycsXG4gICAgICBlbmRfZGF0ZTogJycsXG4gICAgICBvcmRlcl9pZDogJycsXG4gICAgICBjaGFubmVsX25hbWU6ICcnLFxuICAgICAgaW50ZW50aW9uX25hbWU6ICcnLFxuICAgICAgc2FsZXNfbmFtZTogJycsXG4gICAgICBpbnRlbnRpb25fY2l0eV9uYW1lOiAnJyxcblxuICAgICAgb3JkZXJfaWRfc3RyOiAnJywgLy9vcHRpb24gZm9yIHNhbGVzbWFuIGZpbHRlclxuICAgICAgdXNlcl9tb2JpbGU6ICcnLCAvL29wdGlvbiBmb3Igc2FsZXNtYW4gZmlsdGVyXG4gICAgICB3ZWNoYXRfaWQ6ICcnLCAvL29wdGlvbiBmb3Igc2FsZXNtYW4gZmlsdGVyXG4gICAgfSxcbiAgICBjaGFubmVsX2FycjogW10sXG4gICAgaW50ZW50aW9uX2FycjogW10sXG4gICAgc2FsZXNfYXJyOiBbXSxcbiAgICBpbnRlbnRpb25fY2l0eV9hcnI6IFtdLFxuICB9O1xuICB3YXRjaCA9IHtcbiAgICBvcmlnaW5fbGlzdCgpIHtcbiAgICAgIHRoaXMub3JpZ2luX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5jaGFubmVsX2FyciwgZWxlbWVudC5jaGFubmVsX25hbWUpKSB7XG4gICAgICAgICAgdGhpcy5jaGFubmVsX2Fyci5wdXNoKGVsZW1lbnQuY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXJyYXlIYXZlSXRlbSh0aGlzLmludGVudGlvbl9hcnIsIGVsZW1lbnQuaW50ZW50aW9uX25hbWUpKSB7XG4gICAgICAgICAgdGhpcy5pbnRlbnRpb25fYXJyLnB1c2goZWxlbWVudC5pbnRlbnRpb25fbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5zYWxlc19hcnIsIGVsZW1lbnQuc2FsZXNfbmFtZSkpIHtcbiAgICAgICAgICB0aGlzLnNhbGVzX2Fyci5wdXNoKGVsZW1lbnQuc2FsZXNfbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5pbnRlbnRpb25fY2l0eV9hcnIsIGVsZW1lbnQuaW50ZW50aW9uX2NpdHlfbmFtZSkpIHtcbiAgICAgICAgICB0aGlzLmludGVudGlvbl9jaXR5X2Fyci5wdXNoKGVsZW1lbnQuaW50ZW50aW9uX2NpdHlfbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5pbnRlbnRpb25fYXJyKVxuICAgIH1cbiAgfVxuICBhcnJheUhhdmVJdGVtKGxpc3QsIGl0KSB7XG4gICAgbGV0IGhhcyA9IGZhbHNlO1xuICAgIGxpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwgPT0gaXQpIHtcbiAgICAgICAgaGFzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWl0KSB7XG4gICAgICBoYXMgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXBwcm92YWxTZWFyY2goKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBpZiAoIXRoYXQuZmlsdGVyX29wdGlvbi5vcmRlcl9pZF9zdHIgJiYgIXRoYXQuZmlsdGVyX29wdGlvbi51c2VyX21vYmlsZSAmJiAhdGhhdC5maWx0ZXJfb3B0aW9uLndlY2hhdF9pZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXoh7PlsJHkuIDpobknLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBycS5nZXQoJ3NlYXJjaEFsbFVzZXInLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LnNob3dfc2VhcmNoID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC4kZW1pdCgnc2VhcmNoJywgcmVzdWx0LmRhdGEuZGF0YSlcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9yZGVyX2lkX3N0cjogdGhhdC5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkX3N0cixcbiAgICAgICAgdXNlcl9tb2JpbGU6IHRoYXQuZmlsdGVyX29wdGlvbi51c2VyX21vYmlsZSxcbiAgICAgICAgd2VjaGF0X2lkOiB0aGF0LmZpbHRlcl9vcHRpb24ud2VjaGF0X2lkXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBiaW5kQ2l0eUNoYW5nZShlKSB7XG4gICAgICB0aGlzLmZpbHRlcl9vcHRpb24uaW50ZW50aW9uX2NpdHlfbmFtZSA9IHRoaXMuaW50ZW50aW9uX2NpdHlfYXJyW2UuZGV0YWlsLnZhbHVlXTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dE9yZGVySWRTdHIoZSkge1xuICAgICAgdGhpcy5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkX3N0ciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0TW9iaWxlKGUpIHtcbiAgICAgIHRoaXMuZmlsdGVyX29wdGlvbi51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0d2VjaGF0KGUpIHtcbiAgICAgIHRoaXMuZmlsdGVyX29wdGlvbi53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRTdGFydENoYW5nZShlKSB7XG4gICAgICB0aGlzLmZpbHRlcl9vcHRpb24uc3RhcnRfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZEVuZENoYW5nZShlKSB7XG4gICAgICB0aGlzLmZpbHRlcl9vcHRpb24uZW5kX2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dE9yZGVySWQoZSkge1xuICAgICAgdGhpcy5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kU2FsZXNDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5maWx0ZXJfb3B0aW9uLnNhbGVzX25hbWUgPSB0aGlzLnNhbGVzX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgfSxcbiAgICBiaW5kSW50ZW50aW9uQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fbmFtZSA9IHRoaXMuaW50ZW50aW9uX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgfSxcbiAgICBiaW5kQ2hhbm5lbENoYW5nZShlKSB7XG4gICAgICB0aGlzLmZpbHRlcl9vcHRpb24uY2hhbm5lbF9uYW1lID0gdGhpcy5jaGFubmVsX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgfSxcbiAgICBsb2NhbFNlYXJjaCgpIHtcbiAgICAgIGxldCBwdXIgPSBbXTtcbiAgICAgIHRoaXMub3JpZ2luX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGlzX2FkZCA9IHRydWU7XG4gICAgICAgIGxldCBzX29yZGVyX2lkID0gdGhpcy5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkO1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKCFlbGVtZW50LmNyZWF0ZV90aW1lIHx8IGVsZW1lbnQuY3JlYXRlX3RpbWUgPCBuZXcgRGF0ZSh0aGlzLmZpbHRlcl9vcHRpb24uc3RhcnRfZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCB8fCBlbGVtZW50LmNyZWF0ZV90aW1lID4gbmV3IERhdGUodGhpcy5maWx0ZXJfb3B0aW9uLmVuZF9kYXRlKS5nZXRUaW1lKCkgLyAxMDAwKSB7XG4gICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzX29yZGVyX2lkICYmIGVsZW1lbnQub3JkZXJfaWQuaW5kZXhPZihzX29yZGVyX2lkKSA8IDApIHtcbiAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJfb3B0aW9uLmNoYW5uZWxfbmFtZSAmJiBlbGVtZW50LmNoYW5uZWxfbmFtZSAhPSB0aGlzLmZpbHRlcl9vcHRpb24uY2hhbm5lbF9uYW1lKSB7XG4gICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fbmFtZSAmJiBlbGVtZW50LmludGVudGlvbl9uYW1lICE9IHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fbmFtZSkge1xuICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcl9vcHRpb24uc2FsZXNfbmFtZSAmJiBlbGVtZW50LnNhbGVzX25hbWUgIT0gdGhpcy5maWx0ZXJfb3B0aW9uLnNhbGVzX25hbWUpIHtcbiAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJfb3B0aW9uLmludGVudGlvbl9jaXR5X25hbWUgJiYgZWxlbWVudC5pbnRlbnRpb25fY2l0eV9uYW1lICE9IHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fY2l0eV9uYW1lKSB7XG4gICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX2FkZCkge1xuICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHB1cilcbiAgICB9LFxuICB9O1xuICBvbkxvYWQoKSB7XG5cbiAgfVxuICBvblNob3coKSB7XG4gIH1cbn1cbiJdfQ==