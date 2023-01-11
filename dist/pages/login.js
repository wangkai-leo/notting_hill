'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _config = require('./../common/config.js');

var _config2 = _interopRequireDefault(_config);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      css: _css2.default //样式表
    }, _this.data = {
      employee_account: '',
      employee_password: ''
    }, _this.methods = {
      bindInputCount: function bindInputCount(e) {
        this.employee_account = e.detail.value;
      },
      bindInputPass: function bindInputPass(e) {
        this.employee_password = e.detail.value;
      },
      submit: function submit(e) {
        var that = this;

        _request2.default.get('login', {
          200: function _(result) {
            result.data.data.is_sale = result.data.data.employee_type == 4 || result.data.data.employee_type == 3 || result.data.data.employee_type == 2 ? true : false;

            result.data.data.is_sale_leader = result.data.data.employee_type == 3 || result.data.data.employee_type == 2 ? true : false;

            result.data.data.is_server = result.data.data.employee_type == 13 ? true : false;

            result.data.data.is_server_offline = result.data.data.employee_type == 16 ? true : false;

            result.data.data.is_scheme = result.data.data.employee_type == 8 || result.data.data.employee_type == 7 ? true : false;

            result.data.data.is_scheme_leader = result.data.data.employee_type == 7 ? true : false;

            result.data.data.is_excute = result.data.data.employee_type == 14 || result.data.data.employee_type == 15 ? true : false;

            result.data.data.is_excute_leader = result.data.data.employee_type == 15 ? true : false;

            _wepy2.default.setStorageSync('user', result.data.data);
            _wepy2.default.setStorageSync('user_info', result.data.data.uid);
            _wepy2.default.setStorageSync('office_line', _config2.default.OFFLICE_LINE);
            _wepy2.default.switchTab({
              url: '/pages/index'
            });
          },
          202: function _(result) {
            _wepy2.default.showToast({
              title: '账号或者密码错误', //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: function success(res) {}
            });
          }
        }, {
          no_key: true,
          employee_account: this.employee_account,
          employee_password: this.employee_password,
          employee_company: _wepy2.default.getStorageSync('employee_company')
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29tcG9uZW50cyIsImNzcyIsImRhdGEiLCJlbXBsb3llZV9hY2NvdW50IiwiZW1wbG95ZWVfcGFzc3dvcmQiLCJtZXRob2RzIiwiYmluZElucHV0Q291bnQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRQYXNzIiwic3VibWl0IiwidGhhdCIsInJxIiwiZ2V0IiwicmVzdWx0IiwiaXNfc2FsZSIsImVtcGxveWVlX3R5cGUiLCJpc19zYWxlX2xlYWRlciIsImlzX3NlcnZlciIsImlzX3NlcnZlcl9vZmZsaW5lIiwiaXNfc2NoZW1lIiwiaXNfc2NoZW1lX2xlYWRlciIsImlzX2V4Y3V0ZSIsImlzX2V4Y3V0ZV9sZWFkZXIiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJ1aWQiLCJDIiwiT0ZGTElDRV9MSU5FIiwic3dpdGNoVGFiIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIm5vX2tleSIsImVtcGxveWVlX2NvbXBhbnkiLCJnZXRTdG9yYWdlU3luYyIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsVSxHQUFhO0FBQ1hDLFdBQUtBLGFBRE0sQ0FDRjtBQURFLEssUUFHYkMsSSxHQUFPO0FBQ0xDLHdCQUFrQixFQURiO0FBRUxDLHlCQUFtQjtBQUZkLEssUUFJUEMsTyxHQUFVO0FBQ1JDLG9CQURRLDBCQUNPQyxDQURQLEVBQ1U7QUFDaEIsYUFBS0osZ0JBQUwsR0FBd0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBakM7QUFDRCxPQUhPO0FBSVJDLG1CQUpRLHlCQUlNSCxDQUpOLEVBSVM7QUFDZixhQUFLSCxpQkFBTCxH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QUFDREMsa0JBQVEsSUFEUDtBQUVEbkMsNEJBQWtCLEtBQUtBLGdCQUZ0QjtBQUdEQyw2QkFBbUIsS0FBS0EsaUJBSHZCO0FBSURtQyw0QkFBa0JkLGVBQUtlLGNBQUwsQ0FBb0Isa0JBQXBCO0FBSmpCLFNBL0NIO0FBcUREO0FBL0RPLEs7Ozs7OzJCQWlFSEMsTyxFQUFTO0FBQ2RBLGdCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNEOzs7NkJBQ1EsQ0FBRzs7OztFQTVFcUJoQixlQUFLbUIsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBDIGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uL2NvbW1vbi91dGlscy90b29sJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcyAvL+agt+W8j+ihqFxuICB9O1xuICBkYXRhID0ge1xuICAgIGVtcGxveWVlX2FjY291bnQ6ICcnLFxuICAgIGVtcGxveWVlX3Bhc3N3b3JkOiAnJ1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmRJbnB1dENvdW50KGUpIHtcbiAgICAgIHRoaXMuZW1wbG95ZWVfYWNjb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0UGFzcyhlKSB7XG4gICAgICB0aGlzLmVtcGxveWVlX3Bhc3N3b3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBzdWJtaXQoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgICBycS5nZXQoJ2xvZ2luJywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zYWxlID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSA0IHx8XG4gICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAzIHx8XG4gICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAyID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zYWxlX2xlYWRlciA9XG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMyB8fFxuICAgICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMiA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuaXNfc2VydmVyID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAxMyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuaXNfc2VydmVyX29mZmxpbmUgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDE2ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zY2hlbWUgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDggfHxcbiAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDcgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmlzX3NjaGVtZV9sZWFkZXIgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDcgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmlzX2V4Y3V0ZSA9XG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMTQgfHxcbiAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDE1ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19leGN1dGVfbGVhZGVyID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAxNSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXInLCByZXN1bHQuZGF0YS5kYXRhKTtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1c2VyX2luZm8nLCByZXN1bHQuZGF0YS5kYXRhLnVpZCk7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnLCBDLk9GRkxJQ0VfTElORSk7XG4gICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAyMDI6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfotKblj7fmiJbogIXlr4bnoIHplJnor68nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBub19rZXk6IHRydWUsXG4gICAgICAgIGVtcGxveWVlX2FjY291bnQ6IHRoaXMuZW1wbG95ZWVfYWNjb3VudCxcbiAgICAgICAgZW1wbG95ZWVfcGFzc3dvcmQ6IHRoaXMuZW1wbG95ZWVfcGFzc3dvcmQsXG4gICAgICAgIGVtcGxveWVlX2NvbXBhbnk6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2VtcGxveWVlX2NvbXBhbnknKVxuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gIH1cbiAgb25TaG93KCkgeyB9XG59XG4iXX0=