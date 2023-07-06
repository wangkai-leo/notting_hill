'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _topbar = require('./../../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.sync": "isopacity" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default
    }, _this.props = {}, _this.data = {
      isopacity: true,
      title: '销售客资数据',
      isback: true,
      list: []
    }, _this.methods = {
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
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      _request2.default.get('getSalesUserDataGroupDetail', {
        200: function _(result) {
          that.list = result.data.data;
          that.$apply();
        }
      }, {
        where_map: options.where_map
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/statisticfilterslist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY2ZpbHRlcnNsaXN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwidG9wYmFyIiwicHJvcHMiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJsaXN0IiwibWV0aG9kcyIsImdvVG9EZXRhaWwiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlzX29sZCIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJ0b191cmwiLCJpc19zZWFyY2giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInRoYXQiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsIndoZXJlX21hcCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQTtBQUhFLEssUUFLWkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsYUFBTyxRQUZGO0FBR0xDLGNBQVEsSUFISDtBQUlMQyxZQUFNO0FBSkQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLFlBQUlDLEtBQUtELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUFqQztBQUNBLFlBQUksS0FBS0csTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCQyx5QkFBS0MsU0FBTCxDQUFlO0FBQ2JYLG1CQUFPLE9BRE07QUFFYlksa0JBQU0sTUFGTztBQUdiQyxzQkFBVTtBQUhHLFdBQWY7QUFLQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxZQUFJQyxTQUFTLG9DQUFvQ1IsRUFBakQ7QUFDQSxZQUFJLEtBQUtTLFNBQVQsRUFBb0I7QUFDbEJELG1CQUFTQSxTQUFTLGdCQUFsQjtBQUNEO0FBQ0RKLHVCQUFLTSxVQUFMLENBQWdCLEVBQUVDLEtBQUtILE1BQVAsRUFBaEI7QUFDRDtBQWhCTyxLOzs7OzsyQkFrQkhJLE8sRUFBUztBQUNkQSxnQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxVQUFJRyxPQUFPLElBQVg7QUFDQUMsd0JBQUdDLEdBQUgsQ0FBTyw2QkFBUCxFQUFzQztBQUNwQyxhQUFLLG1CQUFVO0FBQ2JGLGVBQUtuQixJQUFMLEdBQVlzQixPQUFPMUIsSUFBUCxDQUFZQSxJQUF4QjtBQUNBdUIsZUFBS0ksTUFBTDtBQUNEO0FBSm1DLE9BQXRDLEVBS0c7QUFDREMsbUJBQVdSLFFBQVFRO0FBRGxCLE9BTEg7QUFRRDs7OzZCQUNRLENBRVI7Ozs7RUFqRGdDaEIsZUFBS2lCLEk7O2tCQUFuQnRDLEsiLCJmaWxlIjoic3RhdGlzdGljZmlsdGVyc2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b3BiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90b3BiYXInO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5zeW5jXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHRvcGJhcjogdG9wYmFyLFxuICB9O1xuICBwcm9wcyA9IHtcbiAgfVxuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+mUgOWUruWuoui1hOaVsOaNricsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGxpc3Q6IFtdXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGlmICh0aGlzLmlzX29sZCA9PSAxKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+i/meaYr+iAgeWuoui1hCcsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCB0b191cmwgPSAnL3BhZ2VzL2NvbW1vbi9zYWxlL2N1c3RvbWVyP2lkPScgKyBpZDtcbiAgICAgIGlmICh0aGlzLmlzX3NlYXJjaCkge1xuICAgICAgICB0b191cmwgPSB0b191cmwgKyAnJmlzX3NlYXJjaD15ZXMnXG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IHRvX3VybCB9KTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZ2V0U2FsZXNVc2VyRGF0YUdyb3VwRGV0YWlsJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0Lmxpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHdoZXJlX21hcDogb3B0aW9ucy53aGVyZV9tYXBcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcblxuICB9XG59XG4iXX0=