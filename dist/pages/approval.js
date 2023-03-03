'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _approval = require('./../components/approval.js');

var _approval2 = _interopRequireDefault(_approval);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      approval: _approval2.default
    }, _this.data = {
      isback: false,
      isopacity: true,
      title: '菜单'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/approval'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiYXBwcm92YWwiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJtZXRob2RzIiwib3B0aW9ucyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxnQkFBU0E7QUFIQyxLLFFBS1pDLEksR0FBTztBQUNMQyxjQUFRLEtBREg7QUFFTEMsaUJBQVcsSUFGTjtBQUdMQyxhQUFPO0FBSEYsSyxRQUtQQyxPLEdBQVUsRTs7Ozs7MkJBRUhDLE8sRUFBUyxDQUNmOzs7NkJBQ1EsQ0FBRzs7OztFQWxCcUJDLGVBQUtDLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJhcHByb3ZhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IGFwcHJvdmFsIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwcm92YWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIGFwcHJvdmFsOmFwcHJvdmFsXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiBmYWxzZSxcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICfoj5zljZUnLFxuICB9O1xuICBtZXRob2RzID0ge1xuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19