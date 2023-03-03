'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _statisticsserver = require('./../components/statisticsserver.js');

var _statisticsserver2 = _interopRequireDefault(_statisticsserver);

var _statisticssale = require('./../components/statisticssale.js');

var _statisticssale2 = _interopRequireDefault(_statisticssale);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "serverstatistics": { "v-bind:is_request.sync": "is_request" }, "salestatistics": { "v-bind:is_request.sync": "is_request" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      serverstatistics: _statisticsserver2.default,
      salestatistics: _statisticssale2.default
    }, _this.data = {
      isback: false,
      isopacity: true,
      title: '统计',
      is_request: false
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.user = result.data.data;
          that.$apply();
        }
      });
    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ0b3BiYXIiLCJzZXJ2ZXJzdGF0aXN0aWNzIiwic2FsZXN0YXRpc3RpY3MiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc19yZXF1ZXN0IiwibWV0aG9kcyIsInRoYXQiLCJycSIsImdldCIsInVzZXIiLCJyZXN1bHQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCxvQkFBbUIsRUFBQywwQkFBeUIsWUFBMUIsRUFBL0ksRUFBdUwsa0JBQWlCLEVBQUMsMEJBQXlCLFlBQTFCLEVBQXhNLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyx3QkFBa0JBLDBCQUpSO0FBS1ZDLHNCQUFlQTtBQUxMLEssUUFPWkMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxrQkFBVztBQUpOLEssUUFNUEMsTyxHQUFVLEU7Ozs7OzZCQUVEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHdCQUFHQyxHQUFILENBQU8sV0FBUCxFQUFvQjtBQUNsQixhQUFLLG1CQUFVO0FBQ2JGLGVBQUtHLElBQUwsR0FBWUMsT0FBT1YsSUFBUCxDQUFZQSxJQUF4QjtBQUNBTSxlQUFLSyxNQUFMO0FBQ0Q7QUFKaUIsT0FBcEI7QUFNRDs7OzZCQUNRO0FBQ1AsV0FBS1AsVUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7NkJBQ087QUFDTixXQUFLQSxVQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7Ozs7RUFqQ2dDUSxlQUFLQyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6InN0YXRpc3RpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgc2VydmVyc3RhdGlzdGljcyBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3NzZXJ2ZXInO1xuaW1wb3J0IHNhbGVzdGF0aXN0aWNzIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc3NhbGUnO1xuaW1wb3J0IHRvcGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy90b3BiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic2VydmVyc3RhdGlzdGljc1wiOntcInYtYmluZDppc19yZXF1ZXN0LnN5bmNcIjpcImlzX3JlcXVlc3RcIn0sXCJzYWxlc3RhdGlzdGljc1wiOntcInYtYmluZDppc19yZXF1ZXN0LnN5bmNcIjpcImlzX3JlcXVlc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHRvcGJhcjogdG9wYmFyLFxuICAgIHNlcnZlcnN0YXRpc3RpY3M6IHNlcnZlcnN0YXRpc3RpY3MsXG4gICAgc2FsZXN0YXRpc3RpY3M6c2FsZXN0YXRpc3RpY3NcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IGZhbHNlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+e7n+iuoScsXG4gICAgaXNfcmVxdWVzdDpmYWxzZVxuICB9O1xuICBtZXRob2RzID0ge1xuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZ2V0TXlJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnVzZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmlzX3JlcXVlc3Q9dHJ1ZTtcbiAgfVxuICBvbkhpZGUoKXtcbiAgICB0aGlzLmlzX3JlcXVlc3Q9ZmFsc2VcbiAgfVxufVxuIl19