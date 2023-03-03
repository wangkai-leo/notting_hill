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

var _statisticscustomerlistsale = require('./../../components/statisticscustomerlistsale.js');

var _statisticscustomerlistsale2 = _interopRequireDefault(_statisticscustomerlistsale);

var _statisticscustomerlistfilter = require('./../../components/statisticscustomerlistfilter.js');

var _statisticscustomerlistfilter2 = _interopRequireDefault(_statisticscustomerlistfilter);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomerlistsale": { "v-bind:list.sync": "list", "xmlns:wx": "" }, "statisticscustomerlistfilter": { "v-bind:origin_list.sync": "origin_list", "xmlns:v-on": "" } }, _this.$events = { "statisticscustomerlistfilter": { "v-on:search": "search" } }, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      statisticscustomerlistsale: _statisticscustomerlistsale2.default,
      statisticscustomerlistfilter: _statisticscustomerlistfilter2.default
    }, _this.data = {
      isback: true,
      isopacity: true,
      title: '客资',
      user: null,

      list: [],
      origin_list: [],

      list_success: [],
      params: null,
      display_filter: false
    }, _this.methods = {
      search: function search(list) {
        this.display_filter = false;
        this.list = list;
      },
      editStatus: function editStatus() {
        this.display_filter = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.params = _tool2.default.decodeQrCodeParam(options);
      that.user = _wepy2.default.getStorageSync('user');
      if (that.user.is_sale) {
        _request2.default.get('getDataStatisticsDetail', {
          200: function _(result) {
            that.list = that.origin_list = result.data.data;
            that.$apply();
          }
        }, {
          map: that.params.map
        });
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlIGNvcHkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ0b3BiYXIiLCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSIsInN0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJ1c2VyIiwibGlzdCIsIm9yaWdpbl9saXN0IiwibGlzdF9zdWNjZXNzIiwicGFyYW1zIiwiZGlzcGxheV9maWx0ZXIiLCJtZXRob2RzIiwic2VhcmNoIiwiZWRpdFN0YXR1cyIsIm9wdGlvbnMiLCJ0aGF0IiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiaXNfc2FsZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwibWFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILDhCQUE2QixFQUFDLG9CQUFtQixNQUFwQixFQUEyQixZQUFXLEVBQXRDLEVBQXpKLEVBQW1NLGdDQUErQixFQUFDLDJCQUEwQixhQUEzQixFQUF5QyxjQUFhLEVBQXRELEVBQWxPLEUsUUFDVEMsTyxHQUFVLEVBQUMsZ0NBQStCLEVBQUMsZUFBYyxRQUFmLEVBQWhDLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyxrQ0FBNEJBLG9DQUpsQjtBQUtWQyxvQ0FBOEJBO0FBTHBCLEssUUFPWkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxZQUFNLElBSkQ7O0FBTUxDLFlBQU0sRUFORDtBQU9MQyxtQkFBYSxFQVBSOztBQVNMQyxvQkFBYyxFQVRUO0FBVUxDLGNBQVEsSUFWSDtBQVdMQyxzQkFBZ0I7QUFYWCxLLFFBYVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNETixJQURDLEVBQ0k7QUFDVixhQUFLSSxjQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBS0osSUFBTCxHQUFVQSxJQUFWO0FBQ0QsT0FKTztBQUtSTyxnQkFMUSx3QkFLSztBQUNYLGFBQUtILGNBQUwsR0FBc0IsSUFBdEI7QUFDRDtBQVBPLEs7Ozs7OzJCQVNISSxPLEVBQVM7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS04sTUFBTCxHQUFjTyxlQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBZDtBQUNBQyxXQUFLVixJQUFMLEdBQVlhLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBLFVBQUlKLEtBQUtWLElBQUwsQ0FBVWUsT0FBZCxFQUF1QjtBQUNyQkMsMEJBQUdDLEdBQUgsQ0FBTyx5QkFBUCxFQUFrQztBQUNoQyxlQUFLLG1CQUFVO0FBQ2JQLGlCQUFLVCxJQUFMLEdBQVlTLEtBQUtSLFdBQUwsR0FBbUJnQixPQUFPdEIsSUFBUCxDQUFZQSxJQUEzQztBQUNBYyxpQkFBS1MsTUFBTDtBQUNEO0FBSitCLFNBQWxDLEVBS0c7QUFDREMsZUFBS1YsS0FBS04sTUFBTCxDQUFZZ0I7QUFEaEIsU0FMSDtBQVFEO0FBQ0Y7Ozs2QkFDUSxDQUVSOzs7O0VBbERnQ1AsZUFBS1EsSTs7a0JBQW5CbkMsSyIsImZpbGUiOiJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSBjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHRvcGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RvcGJhcic7XG5pbXBvcnQgc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSc7XG5pbXBvcnQgc3RhdGlzdGljc2N1c3RvbWVybGlzdGZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGVcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCIsXCJ4bWxuczp3eFwiOlwiXCJ9LFwic3RhdGlzdGljc2N1c3RvbWVybGlzdGZpbHRlclwiOntcInYtYmluZDpvcmlnaW5fbGlzdC5zeW5jXCI6XCJvcmlnaW5fbGlzdFwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInN0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXJcIjp7XCJ2LW9uOnNlYXJjaFwiOlwic2VhcmNoXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgdG9wYmFyOiB0b3BiYXIsXG4gICAgc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGU6IHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlLFxuICAgIHN0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXI6IHN0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWEJyxcbiAgICB1c2VyOiBudWxsLFxuXG4gICAgbGlzdDogW10sXG4gICAgb3JpZ2luX2xpc3Q6IFtdLFxuXG4gICAgbGlzdF9zdWNjZXNzOiBbXSxcbiAgICBwYXJhbXM6IG51bGwsXG4gICAgZGlzcGxheV9maWx0ZXI6IGZhbHNlXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNoKGxpc3Qpe1xuICAgICAgdGhpcy5kaXNwbGF5X2ZpbHRlcj1mYWxzZTtcbiAgICAgIHRoaXMubGlzdD1saXN0O1xuICAgIH0sXG4gICAgZWRpdFN0YXR1cygpIHtcbiAgICAgIHRoaXMuZGlzcGxheV9maWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5wYXJhbXMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBpZiAodGhhdC51c2VyLmlzX3NhbGUpIHtcbiAgICAgIHJxLmdldCgnZ2V0RGF0YVN0YXRpc3RpY3NEZXRhaWwnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0Lmxpc3QgPSB0aGF0Lm9yaWdpbl9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG1hcDogdGhhdC5wYXJhbXMubWFwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxufVxuIl19