'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        twoWay: true
      }
    }, _this.data = {}, _this.watch = {}, _this.methods = {
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({ url: '/pages/common/server/customer?id=' + id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJBcnJheSIsInR3b1dheSIsImRhdGEiLCJ3YXRjaCIsIm1ldGhvZHMiLCJnb1RvRGV0YWlsIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLEtBREY7QUFFSkMsZ0JBQVE7QUFGSjtBQURBLEssUUFNUkMsSSxHQUFPLEUsUUFFUEMsSyxHQUFRLEUsUUFFUkMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ0s7QUFDWCxZQUFJQyxLQUFHRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsRUFBL0I7QUFDQUcsdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSSxzQ0FBb0NMLEVBQXpDLEVBQWhCO0FBQ0Q7QUFKTyxLOzs7Ozs2QkFNRCxDQUVSOzs7NkJBQ1EsQ0FFUjs7OztFQXRCZ0NHLGVBQUtHLFM7O2tCQUFuQmpCLEsiLCJmaWxlIjoic3RhdGlzdGljc2N1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgfTtcbiAgd2F0Y2ggPSB7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb1RvRGV0YWlsKGUpe1xuICAgICAgbGV0IGlkPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6Jy9wYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyP2lkPScraWR9KTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxufVxuIl19