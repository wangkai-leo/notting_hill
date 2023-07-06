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

var _date = require('./../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _ntinlinepicker = require('./../../components/common/ntinlinepicker.js');

var _ntinlinepicker2 = _interopRequireDefault(_ntinlinepicker);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {}, _this.watch = {}, _this.$repeat = {}, _this.$props = { "ntinlinepicker": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:ntrange.sync": "city_list", "ntkey": "city_name", "v-bind:checked_index.sync": "city_check_index" } }, _this.$events = { "ntinlinepicker": { "v-on:change": "handleCityChange" } }, _this.components = {
      ntinlinepicker: _ntinlinepicker2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NmaXRlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZGF0YSIsIndhdGNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRpbmxpbmVwaWNrZXIiLCJtZXRob2RzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPLEUsUUFFUEMsSyxHQUFRLEUsUUFFVEMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsY0FBYSxFQUFkLEVBQWlCLGdCQUFlLEVBQWhDLEVBQW1DLHVCQUFzQixXQUF6RCxFQUFxRSxTQUFRLFdBQTdFLEVBQXlGLDZCQUE0QixrQkFBckgsRUFBbEIsRSxRQUNUQyxPLEdBQVUsRUFBQyxrQkFBaUIsRUFBQyxlQUFjLGtCQUFmLEVBQWxCLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHNCQUFnQkE7QUFETixLLFFBR1pDLE8sR0FBVSxFOzs7Ozs2QkFHRCxDQUNSOzs7O0VBakJnQ0MsZUFBS0MsSTs7a0JBQW5CWCxLIiwiZmlsZSI6InN0YXRpc3RpY3NmaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgZHQgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IG50aW5saW5lcGlja2VyIGZyb20gICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGlubGluZXBpY2tlcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgcHJvcHMgPSB7XG4gIH07XG4gIGRhdGEgPSB7XG4gIH1cbiAgd2F0Y2ggPSB7XG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm50aW5saW5lcGlja2VyXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwiY2l0eV9saXN0XCIsXCJudGtleVwiOlwiY2l0eV9uYW1lXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJjaXR5X2NoZWNrX2luZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcIm50aW5saW5lcGlja2VyXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUNpdHlDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBudGlubGluZXBpY2tlcjogbnRpbmxpbmVwaWNrZXJcbiAgfVxuICBtZXRob2RzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=