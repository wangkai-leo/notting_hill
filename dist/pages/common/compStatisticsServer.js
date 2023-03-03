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

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _statisticscustomer = require('./server/statisticscustomer.js');

var _statisticscustomer2 = _interopRequireDefault(_statisticscustomer);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomer": { "v-bind:list.sync": "list", "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      statisticscustomer: _statisticscustomer2.default
    }, _this.data = {
      isback: true,
      isopacity: true,
      title: '客资',
      user: null,

      list: [],
      list_success: [],
      params: null
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.params = _tool2.default.decodeQrCodeParam(options);
      if (!that.params.view) {
        that.params['where_map'] = JSON.stringify(_wepy2.default.getStorageSync('channel'));
      }
      that.user = _wepy2.default.getStorageSync('user');
      if (that.user.is_server || that.user.is_server_offline) _request2.default.get('getServerUserList', {
        200: function _(result) {
          that.list = result.data.data.list;
          that.$apply();
        }
      }, that.params);
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBTdGF0aXN0aWNzU2VydmVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwic3RhdGlzdGljc2N1c3RvbWVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwidXNlciIsImxpc3QiLCJsaXN0X3N1Y2Nlc3MiLCJwYXJhbXMiLCJtZXRob2RzIiwib3B0aW9ucyIsInRoYXQiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ2aWV3IiwiSlNPTiIsInN0cmluZ2lmeSIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NlcnZlciIsImlzX3NlcnZlcl9vZmZsaW5lIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCxzQkFBcUIsRUFBQyxvQkFBbUIsTUFBcEIsRUFBMkIsWUFBVyxFQUF0QyxFQUFqSixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxXQUFLQSxhQURLLEVBQ0E7QUFDVkMsY0FBUUEsZ0JBRkU7QUFHVkMsMEJBQW9CQTtBQUhWLEssUUFLWkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxZQUFNLElBSkQ7O0FBTUxDLFlBQU0sRUFORDtBQU9MQyxvQkFBYSxFQVBSO0FBUUxDLGNBQVE7QUFSSCxLLFFBVVBDLE8sR0FBVSxFOzs7OzsyQkFHSEMsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtILE1BQUwsR0FBY0ksZUFBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWQ7QUFDQSxVQUFHLENBQUNDLEtBQUtILE1BQUwsQ0FBWU0sSUFBaEIsRUFBcUI7QUFDbkJILGFBQUtILE1BQUwsQ0FBWSxXQUFaLElBQXlCTyxLQUFLQyxTQUFMLENBQWVDLGVBQUtDLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBZixDQUF6QjtBQUNEO0FBQ0RQLFdBQUtOLElBQUwsR0FBWVksZUFBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0EsVUFBSVAsS0FBS04sSUFBTCxDQUFVYyxTQUFWLElBQXVCUixLQUFLTixJQUFMLENBQVVlLGlCQUFyQyxFQUNFQyxrQkFBR0MsR0FBSCxDQUFPLG1CQUFQLEVBQTRCO0FBQzFCLGFBQUssbUJBQVU7QUFDYlgsZUFBS0wsSUFBTCxHQUFZaUIsT0FBT3RCLElBQVAsQ0FBWUEsSUFBWixDQUFpQkssSUFBN0I7QUFDQUssZUFBS2EsTUFBTDtBQUNEO0FBSnlCLE9BQTVCLEVBS0diLEtBQUtILE1BTFI7QUFNSDs7OzZCQUNRLENBRVI7Ozs7RUF2Q2dDUyxlQUFLUSxJOztrQkFBbkJoQyxLIiwiZmlsZSI6ImNvbXBTdGF0aXN0aWNzU2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHN0YXRpc3RpY3NjdXN0b21lciBmcm9tICcuL3NlcnZlci9zdGF0aXN0aWNzY3VzdG9tZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic3RhdGlzdGljc2N1c3RvbWVyXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwieG1sbnM6d3hcIjpcIlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgc3RhdGlzdGljc2N1c3RvbWVyOiBzdGF0aXN0aWNzY3VzdG9tZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWEJyxcbiAgICB1c2VyOiBudWxsLFxuXG4gICAgbGlzdDogW10sXG4gICAgbGlzdF9zdWNjZXNzOltdLFxuICAgIHBhcmFtczogbnVsbFxuICB9O1xuICBtZXRob2RzID0ge1xuXG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQucGFyYW1zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBpZighdGhhdC5wYXJhbXMudmlldyl7XG4gICAgICB0aGF0LnBhcmFtc1snd2hlcmVfbWFwJ109SlNPTi5zdHJpbmdpZnkod2VweS5nZXRTdG9yYWdlU3luYygnY2hhbm5lbCcpKVxuICAgIH1cbiAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKHRoYXQudXNlci5pc19zZXJ2ZXIgfHwgdGhhdC51c2VyLmlzX3NlcnZlcl9vZmZsaW5lKVxuICAgICAgcnEuZ2V0KCdnZXRTZXJ2ZXJVc2VyTGlzdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQubGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEubGlzdDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGF0LnBhcmFtcylcbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxufVxuIl19