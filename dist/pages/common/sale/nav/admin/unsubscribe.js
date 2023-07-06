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
      drop_status: 0,
      page: 1,
      is_load: false,
      vi_height: 500
    }, _this.methods = {
      loadMore: function loadMore() {
        this.dropCustomerList();
      },
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({
          url: 'auditchargeback?id=' + id + '&drop_status=' + this.drop_status
        });
      },
      toggleTab: function toggleTab(e) {
        this.drop_status = e.currentTarget.dataset.index;
        this.page = 0;
        this.userList = [];
        this.dropCustomerList();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.loading = false;
      that.page = 0;
      that.userList = [];
    }
  }, {
    key: 'dropCustomerList',
    value: function dropCustomerList() {
      var that = this;
      if (that.is_load) {
        return;
      }
      that.page++;
      that.is_load = true;
      _request2.default.get('dropCustomerList', {
        200: function _(result) {
          // that.userList = result.data.data;
          that.is_leader = result.data.is_leader;
          result.data.data.forEach(function (element) {
            element['is_hide'] = true;
          });
          that.userList = that.userList.concat(result.data.data);
          that.is_load = false;
          that.$apply();
        }
      }, {
        drop_status: this.drop_status,
        page: this.page
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      var that = this;
      wx.getSystemInfo({
        success: function success(res) {
          var w_height = res.windowHeight;
          var query = wx.createSelectorQuery();
          query.select('#top_header').boundingClientRect(function (result) {
            var vi_height = w_height - result.height - 73;
            that.vi_height = vi_height;
            that.$apply();
          }).exec();
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuc3Vic2NyaWJlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwibG9hZGluZyIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInVzZXIiLCJkcm9wX3N0YXR1cyIsInBhZ2UiLCJpc19sb2FkIiwidmlfaGVpZ2h0IiwibWV0aG9kcyIsImxvYWRNb3JlIiwiZHJvcEN1c3RvbWVyTGlzdCIsImdvVG9EZXRhaWwiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlVGFiIiwiaW5kZXgiLCJvcHRpb25zIiwidGhhdCIsInJxIiwiZ2V0IiwiaXNfbGVhZGVyIiwicmVzdWx0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25jYXQiLCIkYXBwbHkiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid19oZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJleGVjIiwiZ2V0U3RvcmFnZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBO0FBRkUsSyxRQUlaQyxJLEdBQU87QUFD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ICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICfpgIDlrqLlrqHmoLgnLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgaXNfaGlkZTogdHJ1ZSxcbiAgICB1c2VyTGlzdDogbnVsbCxcbiAgICB1c2VyOiBudWxsLFxuICAgIGRyb3Bfc3RhdHVzOiAwLFxuICAgIHBhZ2U6MSxcbiAgICBpc19sb2FkOmZhbHNlLFxuICAgIHZpX2hlaWdodDo1MDBcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgIHRoaXMuZHJvcEN1c3RvbWVyTGlzdCgpO1xuICAgIH0sXG4gICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ2F1ZGl0Y2hhcmdlYmFjaz9pZD0nICsgaWQrJyZkcm9wX3N0YXR1cz0nK3RoaXMuZHJvcF9zdGF0dXNcbiAgICAgIH0pO1xuXG4gICAgfSxcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy5kcm9wX3N0YXR1cyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5wYWdlPTA7XG4gICAgICB0aGlzLnVzZXJMaXN0PVtdO1xuICAgICAgdGhpcy5kcm9wQ3VzdG9tZXJMaXN0KCk7XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGF0LnBhZ2U9MDtcbiAgICB0aGF0LnVzZXJMaXN0PVtdO1xuICB9XG4gIGRyb3BDdXN0b21lckxpc3QoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGlmKHRoYXQuaXNfbG9hZCl7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIHRoYXQucGFnZSsrO1xuICAgIHRoYXQuaXNfbG9hZD10cnVlO1xuICAgIHJxLmdldCgnZHJvcEN1c3RvbWVyTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgLy8gdGhhdC51c2VyTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuaXNfbGVhZGVyID0gcmVzdWx0LmRhdGEuaXNfbGVhZGVyO1xuICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQudXNlckxpc3Q9dGhhdC51c2VyTGlzdC5jb25jYXQocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgIHRoYXQuaXNfbG9hZD1mYWxzZTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBkcm9wX3N0YXR1czogdGhpcy5kcm9wX3N0YXR1cyxcbiAgICAgIHBhZ2U6dGhpcy5wYWdlXG4gICAgfSlcbiAgfVxuICBvblJlYWR5KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCB3X2hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcjdG9wX2hlYWRlcicpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgbGV0IHZpX2hlaWdodCA9IHdfaGVpZ2h0IC0gcmVzdWx0LmhlaWdodCAtIDczO1xuICAgICAgICAgIHRoYXQudmlfaGVpZ2h0ID0gdmlfaGVpZ2h0O1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH0pLmV4ZWMoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoYXQuZHJvcEN1c3RvbWVyTGlzdCgpO1xuICB9XG59XG4iXX0=