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
      }
    }, _this.$repeat = {}, _this.$props = { "ntmodeaa": { "label": "接单信息" }, "ntmodeab": { "label": "接单状态" }, "ntmodeac": { "label": "客资状态" }, "ntmodead": { "label": "客资最新信息" }, "ntlistba": { "label": "接单团队", "xmlns:v-bind": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "team_name" }, "ntlistbb": { "label": "客户意向", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "intention_name" }, "ntlistbc": { "label": "销售", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "sales_name" }, "ntlistbd": { "label": "分配时间", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "distribution_date" }, "ntlistbe": { "label": "转让人", "xmlns:wx": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "transferor" }, "ntlistbf": { "label": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "accept_date" }, "ntlistbg": { "v-bind:ntvalue.sync": "ntvalue", "ntkey": "status_name" }, "ntlistbh": { "label": "新人称呼", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_name" }, "ntlistbi": { "label": "电话", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_mobile" }, "ntlistbj": { "label": "婚期", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_date" }, "ntlistbk": { "label": "结婚城市", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_city_name" }, "ntlistbl": { "label": "酒店桌数", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "hotel_tables_number" }, "ntlistbm": { "label": "预算", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_budget" }, "ntlistbo": { "label": "微信号", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wechat_id" }, "maintain": { "label": "跟进备注", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "change_log" } }, _this.$events = {}, _this.components = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyZm9sbG93LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpZCIsInR5cGUiLCJOdW1iZXIiLCJjdXN0b21lciIsIk9iamVjdCIsInR3b1dheSIsIm50dmFsdWUiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRtb2RlYWEiLCJudG1vZGUiLCJudG1vZGVhYiIsIm50bW9kZWFjIiwibnRtb2RlYWQiLCJudGxpc3RiYSIsIm50bGlzdCIsIm50bGlzdGJiIiwibnRsaXN0YmMiLCJudGxpc3RiZCIsIm50bGlzdGJlIiwibnRsaXN0YmYiLCJudGxpc3RiZyIsIm50bGlzdGJoIiwibnRsaXN0YmkiLCJudGxpc3RiaiIsIm50bGlzdGJrIiwibnRsaXN0YmwiLCJudGxpc3RibSIsIm50bGlzdGJuIiwibnRsaXN0Ym8iLCJtYWludGFpbiIsImRhdGEiLCJ1c2VyIiwiZGVwYXJ0bWVudCIsIm1ldGhvZHMiLCJnb1RvRWRpdFVzZXJNc2ciLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9Mb2dFZGl0IiwiZHJvcEN1c3RvbWVyIiwiZHJvcF9pZCIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsVUFBRztBQUNEQyxjQUFNQztBQURMLE9BREc7QUFJTkMsZ0JBQVM7QUFDUEYsY0FBTUcsTUFEQztBQUVQQyxnQkFBUTtBQUZELE9BSkg7QUFRTkMsZUFBUztBQUNQTCxjQUFNRyxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FSSDtBQVlORSxnQkFBUztBQUNQTixjQUFNTyxPQURDO0FBRVBDLGlCQUFRLEtBRkQ7QUFHUEosZ0JBQU87QUFIQTtBQVpI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QU5RLHlCQU1NO0FBQ1pILHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssbUNBQW1DLEtBQUszQztBQUQvQixTQUFoQjtBQUdELE9BVk87QUFXUjZDLGtCQVhRLDBCQVdPO0FBQ2JKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssc0NBQXNDLEtBQUszQyxFQUEzQyxHQUE4QyxXQUE5QyxHQUEwRCxLQUFLTSxPQUFMLENBQWF3QztBQUQ5RCxTQUFoQjtBQUdEO0FBZk8sSzs7Ozs7MkJBaUJIQyxPLEVBQVM7QUFDZCxXQUFLVixJQUFMLEdBQVlJLGVBQUtPLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBLFdBQUtWLFVBQUwsR0FBZ0JHLGVBQUtPLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBaEI7QUFDRDs7OzZCQUNRLENBQ1I7Ozs7RUF2RWdDUCxlQUFLUSxTOztrQkFBbkJuRCxLIiwiZmlsZSI6ImN1c3RvbWVyZm9sbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBudG1vZGUgZnJvbSAnLi9udG1vZGUnO1xuaW1wb3J0IG50bGlzdCBmcm9tICcuL250bGlzdCc7XG5pbXBvcnQgbWFpbnRhaW4gZnJvbSAnLi9tYWludGFpbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaWQ6e1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgY3VzdG9tZXI6e1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBudHZhbHVlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHJlYWRvbmx5OntcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OmZhbHNlLFxuICAgICAgdHdvV2F5OnRydWVcbiAgICB9XG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm50bW9kZWFhXCI6e1wibGFiZWxcIjpcIuaOpeWNleS/oeaBr1wifSxcIm50bW9kZWFiXCI6e1wibGFiZWxcIjpcIuaOpeWNleeKtuaAgVwifSxcIm50bW9kZWFjXCI6e1wibGFiZWxcIjpcIuWuoui1hOeKtuaAgVwifSxcIm50bW9kZWFkXCI6e1wibGFiZWxcIjpcIuWuoui1hOacgOaWsOS/oeaBr1wifSxcIm50bGlzdGJhXCI6e1wibGFiZWxcIjpcIuaOpeWNleWboumYn1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ0ZWFtX25hbWVcIn0sXCJudGxpc3RiYlwiOntcImxhYmVsXCI6XCLlrqLmiLfmhI/lkJFcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJpbnRlbnRpb25fbmFtZVwifSxcIm50bGlzdGJjXCI6e1wibGFiZWxcIjpcIumUgOWUrlwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInNhbGVzX25hbWVcIn0sXCJudGxpc3RiZFwiOntcImxhYmVsXCI6XCLliIbphY3ml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJkaXN0cmlidXRpb25fZGF0ZVwifSxcIm50bGlzdGJlXCI6e1wibGFiZWxcIjpcIui9rOiuqeS6ulwiLFwieG1sbnM6d3hcIjpcIlwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInRyYW5zZmVyb3JcIn0sXCJudGxpc3RiZlwiOntcImxhYmVsXCI6XCJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJhY2NlcHRfZGF0ZVwifSxcIm50bGlzdGJnXCI6e1widi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInN0YXR1c19uYW1lXCJ9LFwibnRsaXN0YmhcIjp7XCJsYWJlbFwiOlwi5paw5Lq656ew5ZG8XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwidXNlcl9uYW1lXCJ9LFwibnRsaXN0YmlcIjp7XCJsYWJlbFwiOlwi55S16K+dXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIn0sXCJudGxpc3RialwiOntcImxhYmVsXCI6XCLlqZrmnJ9cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2RhdGVcIn0sXCJudGxpc3Ria1wiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2NpdHlfbmFtZVwifSxcIm50bGlzdGJsXCI6e1wibGFiZWxcIjpcIumFkuW6l+ahjOaVsFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcImhvdGVsX3RhYmxlc19udW1iZXJcIn0sXCJudGxpc3RibVwiOntcImxhYmVsXCI6XCLpooTnrpdcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2J1ZGdldFwifSxcIm50bGlzdGJvXCI6e1wibGFiZWxcIjpcIuW+ruS/oeWPt1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcIndlY2hhdF9pZFwifSxcIm1haW50YWluXCI6e1wibGFiZWxcIjpcIui3n+i/m+Wkh+azqFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcImNoYW5nZV9sb2dcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50bW9kZWFhOiBudG1vZGUsXG4gICAgbnRtb2RlYWI6IG50bW9kZSxcbiAgICBudG1vZGVhYzogbnRtb2RlLFxuICAgIG50bW9kZWFkOiBudG1vZGUsXG5cbiAgICBudGxpc3RiYTogbnRsaXN0LFxuICAgIG50bGlzdGJiOiBudGxpc3QsXG4gICAgbnRsaXN0YmM6IG50bGlzdCxcbiAgICBudGxpc3RiZDogbnRsaXN0LFxuICAgIG50bGlzdGJlOiBudGxpc3QsXG4gICAgbnRsaXN0YmY6IG50bGlzdCxcbiAgICBudGxpc3RiZzogbnRsaXN0LFxuICAgIG50bGlzdGJoOiBudGxpc3QsXG4gICAgbnRsaXN0Ymk6IG50bGlzdCxcbiAgICBudGxpc3RiajogbnRsaXN0LFxuICAgIG50bGlzdGJrOiBudGxpc3QsXG4gICAgbnRsaXN0Ymw6IG50bGlzdCxcbiAgICBudGxpc3RibTogbnRsaXN0LFxuICAgIG50bGlzdGJuOiBudGxpc3QsXG4gICAgbnRsaXN0Ym86IG50bGlzdCxcbiAgICBtYWludGFpbjptYWludGFpblxuICB9O1xuICBkYXRhID0ge1xuICAgIHVzZXI6bnVsbCxcbiAgICBkZXBhcnRtZW50OicnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29Ub0VkaXRVc2VyTXNnKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRjdXJzdG9tZXJpbmZvP2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdvVG9Mb2dFZGl0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRsb2c/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJvcEN1c3RvbWVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2NoYXJnZWJhY2s/aWQ9JyArIHRoaXMuaWQrJyZkcm9wX2lkPScrdGhpcy5udHZhbHVlLmRyb3BfaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoaXMuZGVwYXJ0bWVudD13ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxufVxuIl19