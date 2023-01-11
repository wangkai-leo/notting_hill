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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "serverstatisticscustomer": { "v-bind:list.sync": "list", "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      serverstatisticscustomer: _statisticscustomer2.default
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/statisticscustomer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsInNlcnZlcnN0YXRpc3RpY3NjdXN0b21lciIsInN0YXRpc3RpY3NjdXN0b21lciIsImRhdGEiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJ0aXRsZSIsInVzZXIiLCJsaXN0IiwibGlzdF9zdWNjZXNzIiwicGFyYW1zIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJ0aGF0IiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidmlldyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zZXJ2ZXIiLCJpc19zZXJ2ZXJfb2ZmbGluZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRUFBNEgsNEJBQTJCLEVBQUMsb0JBQW1CLE1BQXBCLEVBQTJCLFlBQVcsRUFBdEMsRUFBdkosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBLGdCQUZFO0FBR1ZDLGdDQUEwQkM7QUFIaEIsSyxRQUtaQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsYUFBTyxJQUhGO0FBSUxDLFlBQU0sSUFKRDs7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLG9CQUFhLEVBUFI7QUFRTEMsY0FBUTtBQVJILEssUUFVUEMsTyxHQUFVLEU7Ozs7OzJCQUdIQyxPLEVBQVM7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS0gsTUFBTCxHQUFjSSxlQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBZDtBQUNBLFVBQUcsQ0FBQ0MsS0FBS0gsTUFBTCxDQUFZTSxJQUFoQixFQUFxQjtBQUNuQkgsYUFBS0gsTUFBTCxDQUFZLFdBQVosSUFBeUJPLEtBQUtDLFNBQUwsQ0FBZUMsZUFBS0MsY0FBTCxDQUFvQixTQUFwQixDQUFmLENBQXpCO0FBQ0Q7QUFDRFAsV0FBS04sSUFBTCxHQUFZWSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxVQUFJUCxLQUFLTixJQUFMLENBQVVjLFNBQVYsSUFBdUJSLEtBQUtOLElBQUwsQ0FBVWUsaUJBQXJDLEVBQ0VDLGtCQUFHQyxHQUFILENBQU8sbUJBQVAsRUFBNEI7QUFDMUIsYUFBSyxtQkFBVTtBQUNiWCxlQUFLTCxJQUFMLEdBQVlpQixPQUFPdEIsSUFBUCxDQUFZQSxJQUFaLENBQWlCSyxJQUE3QjtBQUNBSyxlQUFLYSxNQUFMO0FBQ0Q7QUFKeUIsT0FBNUIsRUFLR2IsS0FBS0gsTUFMUjtBQU1IOzs7NkJBQ1EsQ0FFUjs7OztFQXZDZ0NTLGVBQUtRLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoic3RhdGlzdGljc2N1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHN0YXRpc3RpY3NjdXN0b21lciBmcm9tICcuL3NlcnZlci9zdGF0aXN0aWNzY3VzdG9tZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic2VydmVyc3RhdGlzdGljc2N1c3RvbWVyXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwieG1sbnM6d3hcIjpcIlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgc2VydmVyc3RhdGlzdGljc2N1c3RvbWVyOiBzdGF0aXN0aWNzY3VzdG9tZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWEJyxcbiAgICB1c2VyOiBudWxsLFxuXG4gICAgbGlzdDogW10sXG4gICAgbGlzdF9zdWNjZXNzOltdLFxuICAgIHBhcmFtczogbnVsbFxuICB9O1xuICBtZXRob2RzID0ge1xuXG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQucGFyYW1zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBpZighdGhhdC5wYXJhbXMudmlldyl7XG4gICAgICB0aGF0LnBhcmFtc1snd2hlcmVfbWFwJ109SlNPTi5zdHJpbmdpZnkod2VweS5nZXRTdG9yYWdlU3luYygnY2hhbm5lbCcpKVxuICAgIH1cbiAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKHRoYXQudXNlci5pc19zZXJ2ZXIgfHwgdGhhdC51c2VyLmlzX3NlcnZlcl9vZmZsaW5lKVxuICAgICAgcnEuZ2V0KCdnZXRTZXJ2ZXJVc2VyTGlzdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQubGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEubGlzdDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGF0LnBhcmFtcylcbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxufVxuIl19