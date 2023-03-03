'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _topbar = require('./../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _statisticscustomerlistserver = require('./../../components/statisticscustomerlistserver.js');

var _statisticscustomerlistserver2 = _interopRequireDefault(_statisticscustomerlistserver);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomerlistserver": { "v-bind:list.sync": "list", "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      statisticscustomerlistserver: _statisticscustomerlistserver2.default
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
      if (that.user.is_server || that.user.is_server_offline) {
        _request2.default.get('getServerUserList', {
          200: function _(result) {
            that.list = result.data.data.list;
            that.$apply();
          }
        }, that.params);
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/statisticscustomerlistserver'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ0b3BiYXIiLCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwidXNlciIsImxpc3QiLCJsaXN0X3N1Y2Nlc3MiLCJwYXJhbXMiLCJtZXRob2RzIiwib3B0aW9ucyIsInRoYXQiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ2aWV3IiwiSlNPTiIsInN0cmluZ2lmeSIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NlcnZlciIsImlzX3NlcnZlcl9vZmZsaW5lIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILGdDQUErQixFQUFDLG9CQUFtQixNQUFwQixFQUEyQixZQUFXLEVBQXRDLEVBQTNKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFPQSxnQkFIRztBQUlWQyxvQ0FBOEJBO0FBSnBCLEssUUFNWkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxZQUFNLElBSkQ7O0FBTUxDLFlBQU0sRUFORDtBQU9MQyxvQkFBYyxFQVBUO0FBUUxDLGNBQVE7QUFSSCxLLFFBVVBDLE8sR0FBVSxFOzs7OzsyQkFHSEMsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtILE1BQUwsR0FBY0ksZUFBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWQ7QUFDQSxVQUFJLENBQUNDLEtBQUtILE1BQUwsQ0FBWU0sSUFBakIsRUFBdUI7QUFDckJILGFBQUtILE1BQUwsQ0FBWSxXQUFaLElBQTJCTyxLQUFLQyxTQUFMLENBQWVDLGVBQUtDLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBZixDQUEzQjtBQUNEO0FBQ0RQLFdBQUtOLElBQUwsR0FBWVksZUFBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0EsVUFBSVAsS0FBS04sSUFBTCxDQUFVYyxTQUFWLElBQXVCUixLQUFLTixJQUFMLENBQVVlLGlCQUFyQyxFQUF1RDtBQUNyREMsMEJBQUdDLEdBQUgsQ0FBTyxtQkFBUCxFQUE0QjtBQUMxQixlQUFLLG1CQUFVO0FBQ2JYLGlCQUFLTCxJQUFMLEdBQVlpQixPQUFPdEIsSUFBUCxDQUFZQSxJQUFaLENBQWlCSyxJQUE3QjtBQUNBSyxpQkFBS2EsTUFBTDtBQUNEO0FBSnlCLFNBQTVCLEVBS0diLEtBQUtILE1BTFI7QUFNRDtBQUNGOzs7NkJBQ1EsQ0FFUjs7OztFQXpDZ0NTLGVBQUtRLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoic3RhdGlzdGljc2N1c3RvbWVybGlzdHNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB0b3BiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b3BiYXInO1xuaW1wb3J0IHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXJcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCIsXCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICB0b3BiYXI6dG9wYmFyLFxuICAgIHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXI6IHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXIsXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+Wuoui1hCcsXG4gICAgdXNlcjogbnVsbCxcblxuICAgIGxpc3Q6IFtdLFxuICAgIGxpc3Rfc3VjY2VzczogW10sXG4gICAgcGFyYW1zOiBudWxsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG5cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5wYXJhbXMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGlmICghdGhhdC5wYXJhbXMudmlldykge1xuICAgICAgdGhhdC5wYXJhbXNbJ3doZXJlX21hcCddID0gSlNPTi5zdHJpbmdpZnkod2VweS5nZXRTdG9yYWdlU3luYygnY2hhbm5lbCcpKVxuICAgIH1cbiAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKHRoYXQudXNlci5pc19zZXJ2ZXIgfHwgdGhhdC51c2VyLmlzX3NlcnZlcl9vZmZsaW5lKXtcbiAgICAgIHJxLmdldCgnZ2V0U2VydmVyVXNlckxpc3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0Lmxpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmxpc3Q7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhhdC5wYXJhbXMpXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcblxuICB9XG59XG4iXX0=