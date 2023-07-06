'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _statisticsserver = require('./../components/statisticsserver.js');

var _statisticsserver2 = _interopRequireDefault(_statisticsserver);

var _statisticssale = require('./../components/statisticssale.js');

var _statisticssale2 = _interopRequireDefault(_statisticssale);

var _statisticssaleartcenter = require('./../components/statisticssaleartcenter.js');

var _statisticssaleartcenter2 = _interopRequireDefault(_statisticssaleartcenter);

var _topbar = require('./../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "serverstatistics": { "v-bind:is_request.sync": "is_request" }, "weddingsalestatistics": { "v-bind:is_request.sync": "is_request" }, "statisticssaleartcenter": { "v-bind:is_request.sync": "is_request" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      serverstatistics: _statisticsserver2.default,
      weddingsalestatistics: _statisticssale2.default,
      statisticssaleartcenter: _statisticssaleartcenter2.default
    }, _this.data = {
      isback: false,
      isopacity: true,
      title: '统计',
      is_request: false
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      this.is_request = true;
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      this.is_request = false;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/statistics'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ0b3BiYXIiLCJzZXJ2ZXJzdGF0aXN0aWNzIiwid2VkZGluZ3NhbGVzdGF0aXN0aWNzIiwic3RhdGlzdGljc3NhbGVhcnRjZW50ZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc19yZXF1ZXN0IiwibWV0aG9kcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILG9CQUFtQixFQUFDLDBCQUF5QixZQUExQixFQUEvSSxFQUF1TCx5QkFBd0IsRUFBQywwQkFBeUIsWUFBMUIsRUFBL00sRUFBdVAsMkJBQTBCLEVBQUMsMEJBQXlCLFlBQTFCLEVBQWpSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyx3QkFBa0JBLDBCQUpSO0FBS1ZDLDZCQUF1QkEsd0JBTGI7QUFNVkMsK0JBQXlCQTtBQU5mLEssUUFRWkMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxrQkFBWTtBQUpQLEssUUFNUEMsTyxHQUFVLEU7Ozs7OzZCQUVELENBQ1I7Ozs2QkFDUTtBQUNQLFdBQUtELFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS0EsVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7O0VBM0JnQ0UsZUFBS0MsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJzdGF0aXN0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgc2VydmVyc3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NzZXJ2ZXInO1xuaW1wb3J0IHdlZGRpbmdzYWxlc3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NzYWxlJztcbmltcG9ydCBzdGF0aXN0aWNzc2FsZWFydGNlbnRlciBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NzYWxlYXJ0Y2VudGVyJztcblxuaW1wb3J0IHRvcGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy90b3BiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic2VydmVyc3RhdGlzdGljc1wiOntcInYtYmluZDppc19yZXF1ZXN0LnN5bmNcIjpcImlzX3JlcXVlc3RcIn0sXCJ3ZWRkaW5nc2FsZXN0YXRpc3RpY3NcIjp7XCJ2LWJpbmQ6aXNfcmVxdWVzdC5zeW5jXCI6XCJpc19yZXF1ZXN0XCJ9LFwic3RhdGlzdGljc3NhbGVhcnRjZW50ZXJcIjp7XCJ2LWJpbmQ6aXNfcmVxdWVzdC5zeW5jXCI6XCJpc19yZXF1ZXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICB0b3BiYXI6IHRvcGJhcixcbiAgICBzZXJ2ZXJzdGF0aXN0aWNzOiBzZXJ2ZXJzdGF0aXN0aWNzLFxuICAgIHdlZGRpbmdzYWxlc3RhdGlzdGljczogd2VkZGluZ3NhbGVzdGF0aXN0aWNzLFxuICAgIHN0YXRpc3RpY3NzYWxlYXJ0Y2VudGVyOiBzdGF0aXN0aWNzc2FsZWFydGNlbnRlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzYmFjazogZmFsc2UsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn57uf6K6hJyxcbiAgICBpc19yZXF1ZXN0OiBmYWxzZSxcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgfTtcbiAgb25Mb2FkKCkge1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmlzX3JlcXVlc3QgPSB0cnVlO1xuICB9XG4gIG9uSGlkZSgpIHtcbiAgICB0aGlzLmlzX3JlcXVlc3QgPSBmYWxzZVxuICB9XG59XG4iXX0=