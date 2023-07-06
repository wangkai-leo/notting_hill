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
      title: {
        type: String,
        default: ''
      },
      iphonex: Boolean,
      bounding_center_top: Number,
      isback: {
        type: Boolean,
        default: false
      },
      isopacity: {
        type: Boolean,
        default: true
      }
    }, _this.data = {}, _this.components = {}, _this.methods = {
      backHistory: function backHistory() {
        var cps = getCurrentPages();
        // console.log('************')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJpcGhvbmV4IiwiQm9vbGVhbiIsImJvdW5kaW5nX2NlbnRlcl90b3AiLCJOdW1iZXIiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJkYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJiYWNrSGlzdG9yeSIsImNwcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsInJvdXRlIiwid2VweSIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInN3aXRjaFRhYiIsInVybCIsImJhY2tIb21lIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGlCQUFTO0FBRkosT0FERDtBQUtOQyxlQUFTQyxPQUxIO0FBTU5DLDJCQUFxQkMsTUFOZjtBQU9OQyxjQUFRO0FBQ05QLGNBQU1JLE9BREE7QUFFTkYsaUJBQVM7QUFGSCxPQVBGO0FBV05NLGlCQUFXO0FBQ1RSLGNBQU1JLE9BREc7QUFFVEYsaUJBQVM7QUFGQTtBQVhMLEssUUFnQlJPLEksR0FBTyxFLFFBQ1BDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLFlBQUlDLE1BQU1DLGlCQUFWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJRCxJQUFJRSxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDbEIsY0FBSUYsSUFBSUUsTUFBSixJQUFjLENBQWQsS0FDRUYsSUFBSSxDQUFKLEVBQU9HLEtBQVAsSUFBZ0IsOEJBQWhCLElBQWtESCxJQUFJLENBQUosRUFBT0csS0FBUCxJQUFnQiw0QkFEcEUsQ0FBSixFQUVFO0FBQ0FDLDJCQUFLQyxjQUFMLENBQW9CLGVBQXBCLEVBQXFDLEtBQXJDO0FBQ0Q7QUFDREQseUJBQUtFLFlBQUwsQ0FBa0I7QUFDaEJDLG1CQUFPLENBRFMsRUFDTjtBQUNWQyxrQkFBTSxtQkFBTztBQUNYQyxzQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFKZSxXQUFsQjtBQU1ELFNBWkQsTUFZTztBQUNMUCx5QkFBS1EsU0FBTCxDQUFlO0FBQ2JDLGlCQUFLO0FBRFEsV0FBZjtBQUdEO0FBQ0YsT0F4Qk87QUF5QlJDLGNBekJRLHNCQXlCRztBQUNUVix1QkFBS1EsU0FBTCxDQUFlO0FBQ2JDLGVBQUs7QUFEUSxTQUFmO0FBR0Q7QUE3Qk8sSyxRQStCVkUsTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7OzZCQUNGLENBQUc7Ozs2QkFDSCxDQUFHOzs7O0VBdERzQmIsZUFBS2MsUzs7a0JBQXBCbEMsTSIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIGlwaG9uZXg6IEJvb2xlYW4sXG4gICAgYm91bmRpbmdfY2VudGVyX3RvcDogTnVtYmVyLFxuICAgIGlzYmFjazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpc29wYWNpdHk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7fVxuICBjb21wb25lbnRzID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICBiYWNrSGlzdG9yeSgpIHtcbiAgICAgIGxldCBjcHMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcqKioqKioqKioqKionKVxuICAgICAgLy8gY29uc29sZS5sb2coY3BzKVxuICAgICAgLy8gY29uc29sZS5sb2coY3BzWzFdKVxuICAgICAgLy8gY29uc29sZS5sb2coY3BzWzFdLnJvdXRlKVxuICAgICAgaWYgKGNwcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChjcHMubGVuZ3RoID09IDJcbiAgICAgICAgICAmJiAoY3BzWzFdLnJvdXRlID09ICdwYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyJyB8fCBjcHNbMV0ucm91dGUgPT0gJ3BhZ2VzL2NvbW1vbi9zYWxlL2N1c3RvbWVyJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnaW5kZXhfcmVmcmVzaCcsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMSwgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGJhY2tIb21lKCkge1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBldmVudHMgPSB7fVxuICB3YXRjaCA9IHt9XG4gIGNvbXB1dGVkID0ge31cbiAgb25Mb2FkKCkgeyB9O1xuICBvblNob3coKSB7IH07XG59XG4iXX0=