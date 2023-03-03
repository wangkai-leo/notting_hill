'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      label: {
        type: String
      },
      ntvalue: {
        type: Object,
        twoWay: true
      },
      ntkey: {
        type: String
      }
    }, _this.watch = {
      ntvalue: function ntvalue() {
        this.ntvalue[this.ntkey].forEach(function (element) {
          if (element.status_file) element.status_file = element.status_file.split(',');
          console.log(element.status_file);
        });
      }
    }, _this.components = {}, _this.data = {
      user: null,
      department: ''
    }, _this.methods = {
      displayImg: function displayImg(e) {
        var i = e.currentTarget.dataset.parent;
        var j = e.currentTarget.dataset.index;
        _wepy2.default.previewImage({
          current: this.ntvalue[this.ntkey][i].status_file[j],
          urls: this.ntvalue[this.ntkey][i].status_file //需要预览的图片链接列表,
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.user = _wepy2.default.getStorageSync('user');
      this.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50YWluLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJudHZhbHVlIiwiT2JqZWN0IiwidHdvV2F5IiwibnRrZXkiLCJ3YXRjaCIsImZvckVhY2giLCJlbGVtZW50Iiwic3RhdHVzX2ZpbGUiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRzIiwiZGF0YSIsInVzZXIiLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsImRpc3BsYXlJbWciLCJlIiwiaSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicGFyZW50IiwiaiIsImluZGV4Iiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiZ2V0U3RvcmFnZVN5bmMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUM7QUFERCxPQUREO0FBSU5DLGVBQVM7QUFDUEYsY0FBTUcsTUFEQztBQUVQQyxnQkFBUTtBQUZELE9BSkg7QUFRTkMsYUFBTztBQUNMTCxjQUFNQztBQUREO0FBUkQsSyxRQVlSSyxLLEdBQVE7QUFDTkosYUFETSxxQkFDSTtBQUNSLGFBQUtBLE9BQUwsQ0FBYSxLQUFLRyxLQUFsQixFQUF5QkUsT0FBekIsQ0FBaUMsbUJBQVc7QUFDMUMsY0FBSUMsUUFBUUMsV0FBWixFQUNFRCxRQUFRQyxXQUFSLEdBQXNCRCxRQUFRQyxXQUFSLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixDQUF0QjtBQUNGQyxrQkFBUUMsR0FBUixDQUFZSixRQUFRQyxXQUFwQjtBQUNELFNBSkQ7QUFLRDtBQVBLLEssUUFTUkksVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLFlBQU0sSUFERDtBQUVMQyxrQkFBWTtBQUZQLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxJQUFJRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsTUFBaEM7QUFDQSxZQUFJQyxJQUFJTCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkcsS0FBaEM7QUFDQUMsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLG1CQUFTLEtBQUsxQixPQUFMLENBQWEsS0FBS0csS0FBbEIsRUFBeUJlLENBQXpCLEVBQTRCWCxXQUE1QixDQUF3Q2UsQ0FBeEMsQ0FETztBQUVoQkssZ0JBQU0sS0FBSzNCLE9BQUwsQ0FBYSxLQUFLRyxLQUFsQixFQUF5QmUsQ0FBekIsRUFBNEJYLFdBRmxCLENBRThCO0FBRjlCLFNBQWxCO0FBSUQ7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQLFdBQUtNLElBQUwsR0FBWVcsZUFBS0ksY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0EsV0FBS2QsVUFBTCxHQUFrQlUsZUFBS0ksY0FBTCxDQUFvQixhQUFwQixDQUFsQjtBQUNEOzs7NkJBQ1EsQ0FDUjs7OztFQTNDZ0NKLGVBQUtLLFM7O2tCQUFuQmxDLEsiLCJmaWxlIjoibWFpbnRhaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50dmFsdWU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbnRrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgbnR2YWx1ZSgpIHtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXNfZmlsZSlcbiAgICAgICAgICBlbGVtZW50LnN0YXR1c19maWxlID0gZWxlbWVudC5zdGF0dXNfZmlsZS5zcGxpdCgnLCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuc3RhdHVzX2ZpbGUpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICB1c2VyOiBudWxsLFxuICAgIGRlcGFydG1lbnQ6ICcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgZGlzcGxheUltZyhlKSB7XG4gICAgICBsZXQgaSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmVudDtcbiAgICAgIGxldCBqID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XVtpXS5zdGF0dXNfZmlsZVtqXSxcbiAgICAgICAgdXJsczogdGhpcy5udHZhbHVlW3RoaXMubnRrZXldW2ldLnN0YXR1c19maWxlIC8v6ZyA6KaB6aKE6KeI55qE5Zu+54mH6ZO+5o6l5YiX6KGoLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGlzLmRlcGFydG1lbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpXG4gIH1cbiAgb25TaG93KCkge1xuICB9XG59XG4iXX0=