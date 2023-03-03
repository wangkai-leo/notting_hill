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
      total: {
        type: Number,
        twoWay: true
      },
      list: {
        type: Array,
        twoWay: true
      },
      is_old: {
        type: Number,
        default: 0,
        twoWay: true
      },
      is_search: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.data = {}, _this.watch = {}, _this.methods = {
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        if (this.is_old == 1) {
          _wepy2.default.showToast({
            title: '这是老客资',
            icon: 'none',
            duration: 2000
          });
          return false;
        }
        var to_url = '/pages/common/sale/customer?id=' + id;
        if (this.is_search) {
          to_url = to_url + '&is_search=yes';
        }
        _wepy2.default.navigateTo({ url: to_url });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ0b3RhbCIsInR5cGUiLCJOdW1iZXIiLCJ0d29XYXkiLCJsaXN0IiwiQXJyYXkiLCJpc19vbGQiLCJkZWZhdWx0IiwiaXNfc2VhcmNoIiwiQm9vbGVhbiIsImRhdGEiLCJ3YXRjaCIsIm1ldGhvZHMiLCJnb1RvRGV0YWlsIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ0b191cmwiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsZ0JBQVE7QUFGSCxPQUREO0FBS05DLFlBQU07QUFDSkgsY0FBTUksS0FERjtBQUVKRixnQkFBUTtBQUZKLE9BTEE7QUFTTkcsY0FBUTtBQUNOTCxjQUFNQyxNQURBO0FBRU5LLGlCQUFTLENBRkg7QUFHTkosZ0JBQVE7QUFIRixPQVRGO0FBY05LLGlCQUFXO0FBQ1RQLGNBQU1RLE9BREc7QUFFVEYsaUJBQVMsS0FGQTtBQUdUSixnQkFBUTtBQUhDO0FBZEwsSyxRQW9CUk8sSSxHQUFPLEUsUUFFUEMsSyxHQUFRLEUsUUFFUkMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsRUFBakM7QUFDQSxZQUFJLEtBQUtULE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNwQlkseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxPQURNO0FBRWJDLGtCQUFNLE1BRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsWUFBSUMsU0FBUyxvQ0FBb0NSLEVBQWpEO0FBQ0EsWUFBSSxLQUFLUCxTQUFULEVBQW9CO0FBQ2xCZSxtQkFBU0EsU0FBUyxnQkFBbEI7QUFDRDtBQUNETCx1QkFBS00sVUFBTCxDQUFnQixFQUFFQyxLQUFLRixNQUFQLEVBQWhCO0FBQ0Q7QUFoQk8sSzs7Ozs7NkJBa0JELENBRVI7Ozs2QkFDUSxDQUVSOzs7O0VBaERnQ0wsZUFBS1EsUzs7a0JBQW5CNUIsSyIsImZpbGUiOiJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgdG90YWw6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGlzX29sZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgaXNfc2VhcmNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgfTtcbiAgd2F0Y2ggPSB7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnb1RvRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgaWYgKHRoaXMuaXNfb2xkID09IDEpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6L+Z5piv6ICB5a6i6LWEJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHRvX3VybCA9ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkO1xuICAgICAgaWYgKHRoaXMuaXNfc2VhcmNoKSB7XG4gICAgICAgIHRvX3VybCA9IHRvX3VybCArICcmaXNfc2VhcmNoPXllcydcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogdG9fdXJsIH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKCkge1xuXG4gIH1cbiAgb25TaG93KCkge1xuXG4gIH1cbn1cbiJdfQ==