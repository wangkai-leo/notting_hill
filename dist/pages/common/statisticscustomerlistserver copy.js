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

var _topbar = require('./../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _statisticscustomerlistserver = require('./../../components/statisticscustomerlistserver.js');

var _statisticscustomerlistserver2 = _interopRequireDefault(_statisticscustomerlistserver);

var _statisticscustomerlistsale = require('./../../components/statisticscustomerlistsale.js');

var _statisticscustomerlistsale2 = _interopRequireDefault(_statisticscustomerlistsale);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomerlistserver": { "v-bind:list.sync": "list", "xmlns:wx": "" }, "statisticscustomerlistsale": { "v-bind:list.sync": "list" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      statisticscustomerlistserver: _statisticscustomerlistserver2.default,
      statisticscustomerlistsale: _statisticscustomerlistsale2.default
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
      } else if (that.user.is_sale) {
        // rq.get('getDataStatisticsDetail', {
        //   200: result => {
        //     that.list = result.data.data.list;
        //     that.$apply();
        //   }
        // }, that.params)
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXIgY29weS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsInRvcGJhciIsInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXIiLCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSIsImRhdGEiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJ0aXRsZSIsInVzZXIiLCJsaXN0IiwibGlzdF9zdWNjZXNzIiwicGFyYW1zIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJ0aGF0IiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidmlldyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zZXJ2ZXIiLCJpc19zZXJ2ZXJfb2ZmbGluZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwiaXNfc2FsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCxnQ0FBK0IsRUFBQyxvQkFBbUIsTUFBcEIsRUFBMkIsWUFBVyxFQUF0QyxFQUEzSixFQUFxTSw4QkFBNkIsRUFBQyxvQkFBbUIsTUFBcEIsRUFBbE8sRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBLGdCQUZFO0FBR1ZDLGNBQU9BLGdCQUhHO0FBSVZDLG9DQUE4QkEsc0NBSnBCO0FBS1ZDLGtDQUEyQkE7QUFMakIsSyxRQU9aQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsYUFBTyxJQUhGO0FBSUxDLFlBQU0sSUFKRDs7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLG9CQUFjLEVBUFQ7QUFRTEMsY0FBUTtBQVJILEssUUFVUEMsTyxHQUFVLEU7Ozs7OzJCQUdIQyxPLEVBQVM7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0gsTUFBTCxHQUFjSSxlQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBZDtBQUNBLFVBQUksQ0FBQ0MsS0FBS0gsTUFBTCxDQUFZTSxJQUFqQixFQUF1QjtBQUNyQkgsYUFBS0gsTUFBTCxDQUFZLFdBQVosSUFBMkJPLEtBQUtDLFNBQUwsQ0FBZUMsZUFBS0MsY0FBTCxDQUFvQixTQUFwQixDQUFmLENBQTNCO0FBQ0Q7QUFDRFAsV0FBS04sSUFBTCxHQUFZWSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxVQUFJUCxLQUFLTixJQUFMLENBQVVjLFNBQVYsSUFBdUJSLEtBQUtOLElBQUwsQ0FBVWUsaUJBQXJDLEVBQXVEO0FBQ3JEQywwQkFBR0MsR0FBSCxDQUFPLG1CQUFQLEVBQTRCO0FBQzFCLGVBQUssbUJBQVU7QUFDYlgsaUJBQUtMLElBQUwsR0FBWWlCLE9BQU90QixJQUFQLENBQVlBLElBQVosQ0FBaUJLLElBQTdCO0FBQ0FLLGlCQUFLYSxNQUFMO0FBQ0Q7QUFKeUIsU0FBNUIsRUFLR2IsS0FBS0gsTUFMUjtBQU1ELE9BUEQsTUFPTSxJQUFHRyxLQUFLTixJQUFMLENBQVVvQixPQUFiLEVBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7Ozs2QkFDUSxDQUVSOzs7O0VBakRnQ1IsZUFBS1MsSTs7a0JBQW5CbkMsSyIsImZpbGUiOiJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyIGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgdG9wYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdG9wYmFyJztcbmltcG9ydCBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RhdGlzdGljc2N1c3RvbWVybGlzdHNlcnZlcic7XG5pbXBvcnQgc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwieG1sbnM6d3hcIjpcIlwifSxcInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgdG9wYmFyOnRvcGJhcixcbiAgICBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyOiBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2VydmVyLFxuICAgIHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlOnN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+Wuoui1hCcsXG4gICAgdXNlcjogbnVsbCxcblxuICAgIGxpc3Q6IFtdLFxuICAgIGxpc3Rfc3VjY2VzczogW10sXG4gICAgcGFyYW1zOiBudWxsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG5cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5wYXJhbXMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGlmICghdGhhdC5wYXJhbXMudmlldykge1xuICAgICAgdGhhdC5wYXJhbXNbJ3doZXJlX21hcCddID0gSlNPTi5zdHJpbmdpZnkod2VweS5nZXRTdG9yYWdlU3luYygnY2hhbm5lbCcpKVxuICAgIH1cbiAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKHRoYXQudXNlci5pc19zZXJ2ZXIgfHwgdGhhdC51c2VyLmlzX3NlcnZlcl9vZmZsaW5lKXtcbiAgICAgIHJxLmdldCgnZ2V0U2VydmVyVXNlckxpc3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0Lmxpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmxpc3Q7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhhdC5wYXJhbXMpXG4gICAgfWVsc2UgaWYodGhhdC51c2VyLmlzX3NhbGUpe1xuICAgICAgLy8gcnEuZ2V0KCdnZXREYXRhU3RhdGlzdGljc0RldGFpbCcsIHtcbiAgICAgIC8vICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgLy8gICAgIHRoYXQubGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEubGlzdDtcbiAgICAgIC8vICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9LCB0aGF0LnBhcmFtcylcbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuXG4gIH1cbn1cbiJdfQ==