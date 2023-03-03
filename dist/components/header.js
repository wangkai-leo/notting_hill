'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_wepy$component) {
  _inherits(Header, _wepy$component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: String,
      iphonex: Boolean,
      bounding_center_top: Number,
      isback: Boolean,
      isopacity: Boolean
    }, _this.data = {}, _this.components = {}, _this.methods = {
      backHistory: function backHistory() {
        var cps = getCurrentPages();
        console.log('************');
        // console.log(cps)
        // console.log(cps[1])
        // console.log(cps[1].route)
        if (cps.length > 1) {
          if (cps.length == 2 && (cps[1].route == 'pages/common/server/customer' || cps[1].route == 'pages/common/sale/customer')) {
            _wepy2.default.setStorageSync('index_refresh', false);
          }
          _wepy2.default.navigateBack({
            delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            fail: function fail(res) {
              console.log(res);
            }
          });
        } else {
          _wepy2.default.switchTab({
            url: '/pages/index'
          });
        }
      },
      backHome: function backHome() {
        _wepy2.default.switchTab({
          url: '/pages/index'
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Header;
}(_wepy2.default.component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiaXBob25leCIsIkJvb2xlYW4iLCJib3VuZGluZ19jZW50ZXJfdG9wIiwiTnVtYmVyIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiYmFja0hpc3RvcnkiLCJjcHMiLCJnZXRDdXJyZW50UGFnZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicm91dGUiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImZhaWwiLCJyZXMiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJiYWNrSG9tZSIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DLE1BREQ7QUFFTkMsZUFBU0MsT0FGSDtBQUdOQywyQkFBcUJDLE1BSGY7QUFJTkMsY0FBUUgsT0FKRjtBQUtOSSxpQkFBV0o7QUFMTCxLLFFBT1JLLEksR0FBTyxFLFFBQ1BDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLFlBQUlDLE1BQU1DLGlCQUFWO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUlILElBQUlJLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQixjQUFJSixJQUFJSSxNQUFKLElBQWMsQ0FBZCxLQUNFSixJQUFJLENBQUosRUFBT0ssS0FBUCxJQUFnQiw4QkFBaEIsSUFBa0RMLElBQUksQ0FBSixFQUFPSyxLQUFQLElBQWdCLDRCQURwRSxDQUFKLEVBRUU7QUFDQUMsMkJBQUtDLGNBQUwsQ0FBb0IsZUFBcEIsRUFBcUMsS0FBckM7QUFDRDtBQUNERCx5QkFBS0UsWUFBTCxDQUFrQjtBQUNoQkMsbUJBQU8sQ0FEUyxFQUNOO0FBQ1ZDLGtCQUFNLG1CQUFPO0FBQ1hSLHNCQUFRQyxHQUFSLENBQVlRLEdBQVo7QUFDRDtBQUplLFdBQWxCO0FBTUQsU0FaRCxNQVlPO0FBQ0xMLHlCQUFLTSxTQUFMLENBQWU7QUFDYkMsaUJBQUs7QUFEUSxXQUFmO0FBR0Q7QUFDRixPQXhCTztBQXlCUkMsY0F6QlEsc0JBeUJHO0FBQ1RSLHVCQUFLTSxTQUFMLENBQWU7QUFDYkMsZUFBSztBQURRLFNBQWY7QUFHRDtBQTdCTyxLLFFBK0JWRSxNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRSxRQUNSQyxRLEdBQVcsRTs7Ozs7NkJBQ0YsQ0FBRzs7OzZCQUNILENBQUc7Ozs7RUE3Q3NCWCxlQUFLWSxTOztrQkFBcEJoQyxNIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBpcGhvbmV4OiBCb29sZWFuLFxuICAgIGJvdW5kaW5nX2NlbnRlcl90b3A6IE51bWJlcixcbiAgICBpc2JhY2s6IEJvb2xlYW4sXG4gICAgaXNvcGFjaXR5OiBCb29sZWFuXG4gIH1cbiAgZGF0YSA9IHt9XG4gIGNvbXBvbmVudHMgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGJhY2tIaXN0b3J5KCkge1xuICAgICAgbGV0IGNwcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKicpXG4gICAgICAvLyBjb25zb2xlLmxvZyhjcHMpXG4gICAgICAvLyBjb25zb2xlLmxvZyhjcHNbMV0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhjcHNbMV0ucm91dGUpXG4gICAgICBpZiAoY3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGNwcy5sZW5ndGggPT0gMlxuICAgICAgICAgICYmIChjcHNbMV0ucm91dGUgPT0gJ3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvY3VzdG9tZXInIHx8IGNwc1sxXS5yb3V0ZSA9PSAncGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXInKVxuICAgICAgICApIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdpbmRleF9yZWZyZXNoJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxLCAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgZmFpbDogcmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYmFja0hvbWUoKSB7XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHt9XG4gIHdhdGNoID0ge31cbiAgY29tcHV0ZWQgPSB7fVxuICBvbkxvYWQoKSB7IH07XG4gIG9uU2hvdygpIHsgfTtcbn1cbiJdfQ==