'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _css = require('./../../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../../components/header.js');

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
      isback: true,
      isopacity: true,
      title: '退客审核',
      loading: true,
      is_hide: true,
      userList: null,
      user: null,
      drop_status: 0
    }, _this.methods = {
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({
          url: 'auditchargeback?id=' + id + '&drop_status=' + this.drop_status
        });
      },
      toggleTab: function toggleTab(e) {
        this.drop_status = e.currentTarget.dataset.index;
        this.dropCustomerList();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.loading = false;
    }
  }, {
    key: 'dropCustomerList',
    value: function dropCustomerList() {
      var that = this;
      _request2.default.get('dropCustomerList', {
        200: function _(result) {
          that.userList = result.data.data;
          that.is_leader = result.data.is_leader;
          that.userList.forEach(function (element) {
            element['is_hide'] = true;
          });
          that.$apply();
        }
      }, {
        drop_status: this.drop_status
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      that.user = _wepy2.default.getStorageSync('user');
      that.dropCustomerList();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/unsubscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuc3Vic2NyaWJlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwibG9hZGluZyIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInVzZXIiLCJkcm9wX3N0YXR1cyIsIm1ldGhvZHMiLCJnb1RvRGV0YWlsIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInRvZ2dsZVRhYiIsImluZGV4IiwiZHJvcEN1c3RvbWVyTGlzdCIsIm9wdGlvbnMiLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCJpc19sZWFkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIiRhcHBseSIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxXQUFLQSxhQURLLEVBQ0E7QUFDVkMsY0FBUUE7QUFGRSxLLFFBSVpDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsaUJBQVcsSUFGTjtBQUdMQyxhQUFPLE1BSEY7QUFJTEMsZUFBUyxJQUpKO0FBS0xDLGVBQVMsSUFMSjtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLFlBQU0sSUFQRDtBQVFMQyxtQkFBYTtBQVJSLEssUUFVUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsRUFBakM7QUFDQUcsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyx3QkFBd0JMLEVBQXhCLEdBQTJCLGVBQTNCLEdBQTJDLEtBQUtKO0FBRHZDLFNBQWhCO0FBSUQsT0FQTztBQVFSVSxlQVJRLHFCQVFFUCxDQVJGLEVBUUs7QUFDWCxhQUFLSCxXQUFMLEdBQW1CRyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkssS0FBM0M7QUFDQSxhQUFLQyxnQkFBTDtBQUNEO0FBWE8sSzs7Ozs7MkJBYUhDLE8sRUFBUztBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLbEIsT0FBTCxHQUFlLEtBQWY7QUFDRDs7O3VDQUNrQjtBQUNqQixVQUFJa0IsT0FBTyxJQUFYO0FBQ0FDLHdCQUFHQyxHQUFILENBQU8sa0JBQVAsRUFBMkI7QUFDekIsYUFBSyxtQkFBVTtBQUNiRixlQUFLaEIsUUFBTCxHQUFnQm1CLE9BQU96QixJQUFQLENBQVlBLElBQTVCO0FBQ0FzQixlQUFLSSxTQUFMLEdBQWlCRCxPQUFPekIsSUFBUCxDQUFZMEIsU0FBN0I7QUFDQUosZUFBS2hCLFFBQUwsQ0FBY3FCLE9BQWQsQ0FBc0IsbUJBQVc7QUFDL0JDLG9CQUFRLFNBQVIsSUFBcUIsSUFBckI7QUFDRCxXQUZEO0FBR0FOLGVBQUtPLE1BQUw7QUFDRDtBQVJ3QixPQUEzQixFQVNHO0FBQ0RyQixxQkFBYSxLQUFLQTtBQURqQixPQVRIO0FBWUQ7Ozs2QkFDUTtBQUNQLFVBQUljLE9BQU8sSUFBWDtBQUNBQSxXQUFLZixJQUFMLEdBQVlRLGVBQUtlLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBUixXQUFLRixnQkFBTDtBQUNEOzs7O0VBdERnQ0wsZUFBS2dCLEk7O2tCQUFuQnRDLEsiLCJmaWxlIjoidW5zdWJzY3JpYmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+mAgOWuouWuoeaguCcsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBpc19oaWRlOiB0cnVlLFxuICAgIHVzZXJMaXN0OiBudWxsLFxuICAgIHVzZXI6IG51bGwsXG4gICAgZHJvcF9zdGF0dXM6IDBcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBnb1RvRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnYXVkaXRjaGFyZ2ViYWNrP2lkPScgKyBpZCsnJmRyb3Bfc3RhdHVzPScrdGhpcy5kcm9wX3N0YXR1c1xuICAgICAgfSk7XG5cbiAgICB9LFxuICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICB0aGlzLmRyb3Bfc3RhdHVzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRyb3BDdXN0b21lckxpc3QoKTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQubG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIGRyb3BDdXN0b21lckxpc3QoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZHJvcEN1c3RvbWVyTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC51c2VyTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuaXNfbGVhZGVyID0gcmVzdWx0LmRhdGEuaXNfbGVhZGVyO1xuICAgICAgICB0aGF0LnVzZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgZHJvcF9zdGF0dXM6IHRoaXMuZHJvcF9zdGF0dXNcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoYXQuZHJvcEN1c3RvbWVyTGlzdCgpO1xuICB9XG59XG4iXX0=