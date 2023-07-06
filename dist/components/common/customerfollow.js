'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ntmode = require('./ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _ntlist = require('./ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _maintain = require('./maintain.js');

var _maintain2 = _interopRequireDefault(_maintain);

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
      id: {
        type: Number
      },
      customer: {
        type: Object,
        twoWay: true
      },
      ntvalue: {
        type: Object,
        twoWay: true
      },
      readonly: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      is_search: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.$repeat = {}, _this.$props = { "ntmodeaa": { "label": "接单信息" }, "ntmodeab": { "label": "接单状态" }, "ntmodeac": { "label": "客资状态" }, "ntmodead": { "label": "客资最新信息" }, "ntlistba": { "label": "接单团队", "xmlns:v-bind": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "team_name" }, "ntlistbb": { "label": "客户意向", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "intention_name" }, "ntlistbc": { "label": "销售", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "sales_name" }, "ntlistbd": { "label": "分配时间", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "distribution_date" }, "ntlistbe": { "label": "转让人", "xmlns:wx": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "transferor" }, "ntlistbf": { "label": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "accept_date" }, "ntlistbg": { "v-bind:ntvalue.sync": "ntvalue", "ntkey": "status_name" }, "ntlistbh": { "label": "新人称呼", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_name" }, "ntlistbi": { "label": "电话", "v-bind:is_search.sync": "is_search", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_mobile" }, "ntlistbj": { "label": "婚期", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_date" }, "ntlistbk": { "label": "结婚城市", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_city_name" }, "ntlistbl": { "label": "酒店桌数", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "hotel_tables_number" }, "ntlistbm": { "label": "预算", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_budget" }, "ntlistbo": { "label": "微信号", "v-bind:is_search.sync": "is_search", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wechat_id" }, "maintain": { "label": "跟进备注", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "change_log" } }, _this.$events = {}, _this.components = {
      ntmodeaa: _ntmode2.default,
      ntmodeab: _ntmode2.default,
      ntmodeac: _ntmode2.default,
      ntmodead: _ntmode2.default,

      ntlistba: _ntlist2.default,
      ntlistbb: _ntlist2.default,
      ntlistbc: _ntlist2.default,
      ntlistbd: _ntlist2.default,
      ntlistbe: _ntlist2.default,
      ntlistbf: _ntlist2.default,
      ntlistbg: _ntlist2.default,
      ntlistbh: _ntlist2.default,
      ntlistbi: _ntlist2.default,
      ntlistbj: _ntlist2.default,
      ntlistbk: _ntlist2.default,
      ntlistbl: _ntlist2.default,
      ntlistbm: _ntlist2.default,
      ntlistbn: _ntlist2.default,
      ntlistbo: _ntlist2.default,
      maintain: _maintain2.default
    }, _this.data = {
      user: null,
      department: ''
    }, _this.methods = {
      goToEditUserMsg: function goToEditUserMsg() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editcurstomerinfo?id=' + this.id
        });
      },
      goToLogEdit: function goToLogEdit() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editlog?id=' + this.id
        });
      },
      dropCustomer: function dropCustomer() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/chargeback?id=' + this.id + '&drop_id=' + this.ntvalue.drop_id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.user = _wepy2.default.getStorageSync('user');
      this.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyZm9sbG93LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpZCIsInR5cGUiLCJOdW1iZXIiLCJjdXN0b21lciIsIk9iamVjdCIsInR3b1dheSIsIm50dmFsdWUiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNfc2VhcmNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRtb2RlYWEiLCJudG1vZGUiLCJudG1vZGVhYiIsIm50bW9kZWFjIiwibnRtb2RlYWQiLCJudGxpc3RiYSIsIm50bGlzdCIsIm50bGlzdGJiIiwibnRsaXN0YmMiLCJudGxpc3RiZCIsIm50bGlzdGJlIiwibnRsaXN0YmYiLCJudGxpc3RiZyIsIm50bGlzdGJoIiwibnRsaXN0YmkiLCJudGxpc3RiaiIsIm50bGlzdGJrIiwibnRsaXN0YmwiLCJudGxpc3RibSIsIm50bGlzdGJuIiwibnRsaXN0Ym8iLCJtYWludGFpbiIsImRhdGEiLCJ1c2VyIiwiZGVwYXJ0bWVudCIsIm1ldGhvZHMiLCJnb1RvRWRpdFVzZXJNc2ciLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9Mb2dFZGl0IiwiZHJvcEN1c3RvbWVyIiwiZHJvcF9pZCIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsVUFBRztBQUNEQyxjQUFNQztBQURMLE9BREc7QUFJTkMsZ0JBQVM7QUFDUEYsY0FBTUcsTUFEQztBQUVQQyxnQkFBUTtBQUZELE9BSkg7QUFRTkMsZUFBUztBQUNQTCxjQUFNRyxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FSSDtBQVlORSxnQkFBUztBQUNQTixjQUFNTyxPQURDO0FBRVBDLGlCQUFRLEtBRkQ7QUFHUEosZ0JB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O0FBRk4sSyxRQUlQQyxPLEdBQVU7QUFDUkMscUJBRFEsNkJBQ1U7QUFDaEJDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssNkNBQTZDLEtBQUs1QztBQUR6QyxTQUFoQjtBQUdELE9BTE87QUFNUjZDLGlCQU5RLHlCQU1NO0FBQ1pILHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssbUNBQW1DLEtBQUs1QztBQUQvQixTQUFoQjtBQUdELE9BVk87QUFXUjhDLGtCQVhRLDBCQVdPO0FBQ2JKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssc0NBQXNDLEtBQUs1QyxFQUEzQyxHQUE4QyxXQUE5QyxHQUEwRCxLQUFLTSxPQUFMLENBQWF5QztBQUQ5RCxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7MkJBaUJIQyxPLEVBQVM7QUFDZCxXQUFLVixJQUFMLEdBQVlJLGVBQUtPLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBLFdBQUtWLFVBQUwsR0FBZ0JHLGVBQUtPLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBaEI7QUFDRDs7OzZCQUNRLENBQ1I7Ozs7RUE1RWdDUCxlQUFLUSxTOztrQkFBbkJwRCxLIiwiZmlsZSI6ImN1c3RvbWVyZm9sbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBudG1vZGUgZnJvbSAnLi9udG1vZGUnO1xuaW1wb3J0IG50bGlzdCBmcm9tICcuL250bGlzdCc7XG5pbXBvcnQgbWFpbnRhaW4gZnJvbSAnLi9tYWludGFpbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaWQ6e1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgY3VzdG9tZXI6e1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBudHZhbHVlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHJlYWRvbmx5OntcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OmZhbHNlLFxuICAgICAgdHdvV2F5OnRydWVcbiAgICB9LFxuICAgIGlzX3NlYXJjaDp7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDpmYWxzZSxcbiAgICAgIHR3b1dheTp0cnVlXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudG1vZGVhYVwiOntcImxhYmVsXCI6XCLmjqXljZXkv6Hmga9cIn0sXCJudG1vZGVhYlwiOntcImxhYmVsXCI6XCLmjqXljZXnirbmgIFcIn0sXCJudG1vZGVhY1wiOntcImxhYmVsXCI6XCLlrqLotYTnirbmgIFcIn0sXCJudG1vZGVhZFwiOntcImxhYmVsXCI6XCLlrqLotYTmnIDmlrDkv6Hmga9cIn0sXCJudGxpc3RiYVwiOntcImxhYmVsXCI6XCLmjqXljZXlm6LpmJ9cIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwidGVhbV9uYW1lXCJ9LFwibnRsaXN0YmJcIjp7XCJsYWJlbFwiOlwi5a6i5oi35oSP5ZCRXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGxpc3RiY1wiOntcImxhYmVsXCI6XCLplIDllK5cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJzYWxlc19uYW1lXCJ9LFwibnRsaXN0YmRcIjp7XCJsYWJlbFwiOlwi5YiG6YWN5pe26Ze0XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiZGlzdHJpYnV0aW9uX2RhdGVcIn0sXCJudGxpc3RiZVwiOntcImxhYmVsXCI6XCLovazorqnkurpcIixcInhtbG5zOnd4XCI6XCJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ0cmFuc2Zlcm9yXCJ9LFwibnRsaXN0YmZcIjp7XCJsYWJlbFwiOlwiXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiYWNjZXB0X2RhdGVcIn0sXCJudGxpc3RiZ1wiOntcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJzdGF0dXNfbmFtZVwifSxcIm50bGlzdGJoXCI6e1wibGFiZWxcIjpcIuaWsOS6uuensOWRvFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwifSxcIm50bGlzdGJpXCI6e1wibGFiZWxcIjpcIueUteivnVwiLFwidi1iaW5kOmlzX3NlYXJjaC5zeW5jXCI6XCJpc19zZWFyY2hcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ1c2VyX21vYmlsZVwifSxcIm50bGlzdGJqXCI6e1wibGFiZWxcIjpcIuWpmuacn1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcIndlZGRpbmdfZGF0ZVwifSxcIm50bGlzdGJrXCI6e1wibGFiZWxcIjpcIue7k+WpmuWfjuW4glwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcIndlZGRpbmdfY2l0eV9uYW1lXCJ9LFwibnRsaXN0YmxcIjp7XCJsYWJlbFwiOlwi6YWS5bqX5qGM5pWwXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiaG90ZWxfdGFibGVzX251bWJlclwifSxcIm50bGlzdGJtXCI6e1wibGFiZWxcIjpcIumihOeul1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcIndlZGRpbmdfYnVkZ2V0XCJ9LFwibnRsaXN0Ym9cIjp7XCJsYWJlbFwiOlwi5b6u5L+h5Y+3XCIsXCJ2LWJpbmQ6aXNfc2VhcmNoLnN5bmNcIjpcImlzX3NlYXJjaFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcIndlY2hhdF9pZFwifSxcIm1haW50YWluXCI6e1wibGFiZWxcIjpcIui3n+i/m+Wkh+azqFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcImNoYW5nZV9sb2dcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50bW9kZWFhOiBudG1vZGUsXG4gICAgbnRtb2RlYWI6IG50bW9kZSxcbiAgICBudG1vZGVhYzogbnRtb2RlLFxuICAgIG50bW9kZWFkOiBudG1vZGUsXG5cbiAgICBudGxpc3RiYTogbnRsaXN0LFxuICAgIG50bGlzdGJiOiBudGxpc3QsXG4gICAgbnRsaXN0YmM6IG50bGlzdCxcbiAgICBudGxpc3RiZDogbnRsaXN0LFxuICAgIG50bGlzdGJlOiBudGxpc3QsXG4gICAgbnRsaXN0YmY6IG50bGlzdCxcbiAgICBudGxpc3RiZzogbnRsaXN0LFxuICAgIG50bGlzdGJoOiBudGxpc3QsXG4gICAgbnRsaXN0Ymk6IG50bGlzdCxcbiAgICBudGxpc3RiajogbnRsaXN0LFxuICAgIG50bGlzdGJrOiBudGxpc3QsXG4gICAgbnRsaXN0Ymw6IG50bGlzdCxcbiAgICBudGxpc3RibTogbnRsaXN0LFxuICAgIG50bGlzdGJuOiBudGxpc3QsXG4gICAgbnRsaXN0Ym86IG50bGlzdCxcbiAgICBtYWludGFpbjptYWludGFpblxuICB9O1xuICBkYXRhID0ge1xuICAgIHVzZXI6bnVsbCxcbiAgICBkZXBhcnRtZW50OicnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29Ub0VkaXRVc2VyTXNnKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRjdXJzdG9tZXJpbmZvP2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdvVG9Mb2dFZGl0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRsb2c/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJvcEN1c3RvbWVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2NoYXJnZWJhY2s/aWQ9JyArIHRoaXMuaWQrJyZkcm9wX2lkPScrdGhpcy5udHZhbHVlLmRyb3BfaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoaXMuZGVwYXJ0bWVudD13ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxufVxuIl19