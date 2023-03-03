'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _header = require('./../components/header.js');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default
    }, _this.data = {
      isback: false,
      isopacity: true,
      title: '个人中心',
      loading: false,
      user: null,
      show_form: false,
      is_lock: false,
      department: ''
    }, _this.methods = {
      turn: function turn() {
        var that = this;
        that.is_lock = true;
        _request2.default.get('changeOnlineStatus', {
          200: function _(result) {
            that.is_lock = false;
            if (that.user.online_status == 1) {
              that.user.online_status = 0;
            } else {
              that.user.online_status = 1;
            }
            that.$apply();
          }
        }, {});
      },
      goTochangePassword: function goTochangePassword() {
        _wepy2.default.navigateTo({ url: '/pages/common/changpw' });
      },
      changeAccount: function changeAccount() {
        this.getMyInfo(this.user.bind_sale_uid);
      },
      logOut: function logOut() {
        _wepy2.default.setStorageSync('user', null);
        _wepy2.default.reLaunch({
          url: '/pages/login'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getMyInfo',
    value: function getMyInfo(uid) {
      var that = this;
      var params = {};
      if (uid) {
        params['uid'] = uid;
      }
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.user = result.data.data;
          if (uid) {
            result.data.data.is_sale = result.data.data.employee_type == 4 || result.data.data.employee_type == 3 || result.data.data.employee_type == 2 ? true : false;

            result.data.data.is_sale_leader = result.data.data.employee_type == 3 || result.data.data.employee_type == 2 ? true : false;

            result.data.data.is_server = result.data.data.employee_type == 13 ? true : false;

            result.data.data.is_server_offline = result.data.data.employee_type == 16 ? true : false;

            result.data.data.is_scheme = result.data.data.employee_type == 8 || result.data.data.employee_type == 7 ? true : false;

            result.data.data.is_scheme_leader = result.data.data.employee_type == 7 ? true : false;

            result.data.data.is_excute = result.data.data.employee_type == 14 || result.data.data.employee_type == 15 ? true : false;

            result.data.data.is_excute_leader = result.data.data.employee_type == 15 ? true : false;

            _wepy2.default.setStorageSync('user_info', uid);
            _wepy2.default.setStorageSync('user', that.user);

            _wepy2.default.reLaunch({ url: '/pages/profile' });
          }
          that.$apply();
        }
      }, params);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.department = _wepy2.default.getStorageSync('office_line');
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.user = result.data.data;
          that.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '诺丁山',
        path: '/pages/index',
        imageUrl: '../images/share.jpeg',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {}
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/profile'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJsb2FkaW5nIiwidXNlciIsInNob3dfZm9ybSIsImlzX2xvY2siLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsInR1cm4iLCJ0aGF0IiwicnEiLCJnZXQiLCJvbmxpbmVfc3RhdHVzIiwiJGFwcGx5IiwiZ29Ub2NoYW5nZVBhc3N3b3JkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaGFuZ2VBY2NvdW50IiwiZ2V0TXlJbmZvIiwiYmluZF9zYWxlX3VpZCIsImxvZ091dCIsInNldFN0b3JhZ2VTeW5jIiwicmVMYXVuY2giLCJ1aWQiLCJwYXJhbXMiLCJyZXN1bHQiLCJpc19zYWxlIiwiZW1wbG95ZWVfdHlwZSIsImlzX3NhbGVfbGVhZGVyIiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJpc19zY2hlbWUiLCJpc19zY2hlbWVfbGVhZGVyIiwiaXNfZXhjdXRlIiwiaXNfZXhjdXRlX2xlYWRlciIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsInBhdGgiLCJpbWFnZVVybCIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQTtBQUZF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S0ksTUFBTDtBQUNEO0FBSmlCLE9BQXBCO0FBTUQ7Ozs2QkFDUSxDQUFHOzs7d0NBQ1E7QUFDbEIsYUFBTztBQUNMWixlQUFPLEtBREY7QUFFTHFDLGNBQU0sY0FGRDtBQUdMQyxrQkFBVSxzQkFITDtBQUlMQyxpQkFBUyxzQkFBTyxDQUFHLENBSmQ7QUFLTEMsY0FBTSxnQkFBTSxDQUFHLENBTFY7QUFNTEMsa0JBQVUsb0JBQU0sQ0FBRztBQU5kLE9BQVA7QUFRRDs7OztFQXJIZ0MzQixlQUFLNEIsSTs7a0JBQW5CcEQsSyIsImZpbGUiOiJwcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzYmFjazogZmFsc2UsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5Liq5Lq65Lit5b+DJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsLFxuICAgIHNob3dfZm9ybTogZmFsc2UsXG4gICAgaXNfbG9jazogZmFsc2UsXG4gICAgZGVwYXJ0bWVudDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICB0dXJuKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhhdC5pc19sb2NrID0gdHJ1ZTtcbiAgICAgIHJxLmdldCgnY2hhbmdlT25saW5lU3RhdHVzJywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5pc19sb2NrID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoYXQudXNlci5vbmxpbmVfc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgIHRoYXQudXNlci5vbmxpbmVfc3RhdHVzID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhhdC51c2VyLm9ubGluZV9zdGF0dXMgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7fSlcbiAgICB9LFxuICAgIGdvVG9jaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9jb21tb24vY2hhbmdwdycgfSk7XG4gICAgfSxcbiAgICBjaGFuZ2VBY2NvdW50KCkge1xuICAgICAgdGhpcy5nZXRNeUluZm8odGhpcy51c2VyLmJpbmRfc2FsZV91aWQpO1xuICAgIH0sXG4gICAgbG9nT3V0KCkge1xuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlcicsIG51bGwpO1xuICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBnZXRNeUluZm8odWlkKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBwYXJhbXMgPSB7fVxuICAgIGlmICh1aWQpIHtcbiAgICAgIHBhcmFtc1sndWlkJ10gPSB1aWQ7XG4gICAgfVxuICAgIHJxLmdldCgnZ2V0TXlJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnVzZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICBpZiAodWlkKSB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zYWxlID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSA0IHx8XG4gICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAzIHx8XG4gICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAyID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zYWxlX2xlYWRlciA9XG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMyB8fFxuICAgICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMiA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuaXNfc2VydmVyID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAxMyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuaXNfc2VydmVyX29mZmxpbmUgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDE2ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19zY2hlbWUgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDggfHxcbiAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDcgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmlzX3NjaGVtZV9sZWFkZXIgPVxuICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDcgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmlzX2V4Y3V0ZSA9XG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX3R5cGUgPT0gMTQgfHxcbiAgICAgICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV90eXBlID09IDE1ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0LmRhdGEuZGF0YS5pc19leGN1dGVfbGVhZGVyID1cbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfdHlwZSA9PSAxNSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJfaW5mbycsIHVpZCk7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlcicsIHRoYXQudXNlcik7XG5cbiAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHt1cmw6Jy9wYWdlcy9wcm9maWxlJ30pO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgICBycS5nZXQoJ2dldE15SW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC51c2VyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHsgfVxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfor7rkuIHlsbEnLFxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXG4gICAgICBpbWFnZVVybDogJy4uL2ltYWdlcy9zaGFyZS5qcGVnJyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH0sXG4gICAgICBmYWlsOiAoKSA9PiB7IH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4geyB9XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=