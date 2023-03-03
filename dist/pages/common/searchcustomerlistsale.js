'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _topbar = require('./../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _statisticscustomerlistsale = require('./../../components/statisticscustomerlistsale.js');

var _statisticscustomerlistsale2 = _interopRequireDefault(_statisticscustomerlistsale);

var _customerlistfilter = require('./../../components/customerlistfilter.js');

var _customerlistfilter2 = _interopRequireDefault(_customerlistfilter);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomerlistsale": { "v-bind:is_search.sync": "is_search", "v-bind:is_old.sync": "is_old", "v-bind:list.sync": "list", "xmlns:wx": "" }, "customerlistfilter": { "v-bind:approval_search.sync": "approval_search", "xmlns:v-on": "" } }, _this.$events = { "customerlistfilter": { "v-on:search": "search" } }, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      statisticscustomerlistsale: _statisticscustomerlistsale2.default,
      customerlistfilter: _customerlistfilter2.default
    }, _this.data = {
      isback: true,
      isopacity: true,
      title: '客资搜索',
      approval_search: true,
      list: [],
      display_filter: true,
      is_old: 0,

      is_search: true
    }, _this.methods = {
      search: function search(list, is_old) {
        if (is_old) {
          this.is_old = is_old;
        }
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
    value: function onLoad(options) {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/searchcustomerlistsale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGN1c3RvbWVybGlzdHNhbGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ0b3BiYXIiLCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSIsImN1c3RvbWVybGlzdGZpbHRlciIsImRhdGEiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJ0aXRsZSIsImFwcHJvdmFsX3NlYXJjaCIsImxpc3QiLCJkaXNwbGF5X2ZpbHRlciIsImlzX29sZCIsImlzX3NlYXJjaCIsIm1ldGhvZHMiLCJzZWFyY2giLCJlZGl0U3RhdHVzIiwib3B0aW9ucyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCw4QkFBNkIsRUFBQyx5QkFBd0IsV0FBekIsRUFBcUMsc0JBQXFCLFFBQTFELEVBQW1FLG9CQUFtQixNQUF0RixFQUE2RixZQUFXLEVBQXhHLEVBQXpKLEVBQXFRLHNCQUFxQixFQUFDLCtCQUE4QixpQkFBL0IsRUFBaUQsY0FBYSxFQUE5RCxFQUExUixFLFFBQ1RDLE8sR0FBVSxFQUFDLHNCQUFxQixFQUFDLGVBQWMsUUFBZixFQUF0QixFLFFBQ1RDLFUsR0FBYTtBQUNWQyxXQUFLQSxhQURLLEVBQ0E7QUFDVkMsY0FBUUEsZ0JBRkU7QUFHVkMsY0FBUUEsZ0JBSEU7QUFJVkMsa0NBQTRCQSxvQ0FKbEI7QUFLVkMsMEJBQW9CQTtBQUxWLEssUUFPWkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sTUFIRjtBQUlMQyx1QkFBZ0IsSUFKWDtBQUtMQyxZQUFNLEVBTEQ7QUFNTEMsc0JBQWdCLElBTlg7QUFPTEMsY0FBTyxDQVBGOztBQVNMQyxpQkFBVTtBQVRMLEssUUFXUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RMLElBREMsRUFDSUUsTUFESixFQUNXO0FBQ2pCLFlBQUdBLE1BQUgsRUFBVTtBQUNSLGVBQUtBLE1BQUwsR0FBWUEsTUFBWjtBQUNEO0FBQ0QsYUFBS0QsY0FBTCxHQUFvQixLQUFwQjtBQUNBLGFBQUtELElBQUwsR0FBVUEsSUFBVjtBQUNELE9BUE87QUFRUk0sZ0JBUlEsd0JBUUs7QUFDWCxhQUFLTCxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7QUFWTyxLOzs7OzsyQkFZSE0sTyxFQUFTLENBQ2Y7Ozs2QkFDUSxDQUVSOzs7O0VBdENnQ0MsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJzZWFyY2hjdXN0b21lcmxpc3RzYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgdG9wYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdG9wYmFyJztcbmltcG9ydCBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlJztcbmltcG9ydCBjdXN0b21lcmxpc3RmaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jdXN0b21lcmxpc3RmaWx0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGVcIjp7XCJ2LWJpbmQ6aXNfc2VhcmNoLnN5bmNcIjpcImlzX3NlYXJjaFwiLFwidi1iaW5kOmlzX29sZC5zeW5jXCI6XCJpc19vbGRcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJjdXN0b21lcmxpc3RmaWx0ZXJcIjp7XCJ2LWJpbmQ6YXBwcm92YWxfc2VhcmNoLnN5bmNcIjpcImFwcHJvdmFsX3NlYXJjaFwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImN1c3RvbWVybGlzdGZpbHRlclwiOntcInYtb246c2VhcmNoXCI6XCJzZWFyY2hcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICB0b3BiYXI6IHRvcGJhcixcbiAgICBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZTogc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUsXG4gICAgY3VzdG9tZXJsaXN0ZmlsdGVyOiBjdXN0b21lcmxpc3RmaWx0ZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWE5pCc57SiJyxcbiAgICBhcHByb3ZhbF9zZWFyY2g6dHJ1ZSxcbiAgICBsaXN0OiBbXSxcbiAgICBkaXNwbGF5X2ZpbHRlcjogdHJ1ZSxcbiAgICBpc19vbGQ6MCxcblxuICAgIGlzX3NlYXJjaDp0cnVlXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNoKGxpc3QsaXNfb2xkKXtcbiAgICAgIGlmKGlzX29sZCl7XG4gICAgICAgIHRoaXMuaXNfb2xkPWlzX29sZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGxheV9maWx0ZXI9ZmFsc2U7XG4gICAgICB0aGlzLmxpc3Q9bGlzdDtcbiAgICB9LFxuICAgIGVkaXRTdGF0dXMoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfZmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gIH1cbiAgb25TaG93KCkge1xuXG4gIH1cbn1cbiJdfQ==