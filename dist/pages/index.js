'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../components/css.js');

var _css2 = _interopRequireDefault(_css);

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
      title: '客资',
      loading: true,
      is_hide: true,
      userList: [],
      sourceList: [],
      user: null,
      user_act: 0, //0 客服 1销售 策划

      page: 1,
      keyword: '',
      have_more: true,
      vi_height: 500,
      department: ''
    }, _this.methods = {
      loadMore: function loadMore() {
        this.getUserLIst();
      },
      bindInputSearch: function bindInputSearch(e) {
        this.page = 1;
        this.keyword = e.detail.value;
        this.have_more = true;
        this.userList = [];
        this.getUserLIst();
      },
      goToExcuteDetail: function goToExcuteDetail(e) {
        var id = e.currentTarget.dataset.id;
        var tid = e.currentTarget.dataset.tid;
        _wepy2.default.navigateTo({
          url: '/pages/common/execute/task?order_id_str=' + tid + '&id=' + id
        });
      },
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;

        if (this.user.uid === 'ceshi') {
          return false;
        }

        if (this.user.is_server || this.user.is_server_offline) {
          _wepy2.default.navigateTo({
            url: '/pages/common/server/customer?id=' + id
          });
        } else if (this.user.is_sale) {
          _wepy2.default.navigateTo({
            url: '/pages/common/sale/customer?id=' + id
          });
        }
      },
      toggleDisplay: function toggleDisplay(e) {
        var index = e.currentTarget.dataset.index;
        this.userList[index].is_hide = !this.userList[index].is_hide;
      },
      navigatorToServicePublish: function navigatorToServicePublish() {
        _wepy2.default.navigateTo({
          url: '/pages/common/server/publish'
        });
      },
      goToSchemeDetail: function goToSchemeDetail(e) {
        var id = e.currentTarget.dataset.id;
        var url = '/pages/' + this.department + '/scheme/customer?id=' + id;
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.loading = false;
      that.department = _wepy2.default.getStorageSync('office_line');
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
    key: 'getUserLIst',
    value: function getUserLIst() {
      var that = this;
      if (!that.have_more) {
        return false;
      }
      that.have_more = false;
      var user = this.user = _wepy2.default.getStorageSync('user');
      if (!user) {
        _wepy2.default.redirectTo({
          url: 'login'
        });
      } else {
        var api_name = '';
        user.is_server || user.is_server_offline ? api_name = 'getServerUserInfo' : '';
        user.is_sale ? api_name = 'gotSalesUserInfo' : '';
        user.is_scheme ? api_name = 'getPlanUserInfo' : '';
        user.is_excute ? api_name = 'getOperationUsers' : '';
        _wepy2.default.showLoading({
          title: 'Loading...', //提示的内容,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: function success(res) {}
        });
        _request2.default.get(api_name, {
          200: function _(result) {
            _wepy2.default.hideLoading();
            if (result.data.userList) {
              result.data.userList.forEach(function (element) {
                element['is_hide'] = true;
                that.userList.push(element);
              });
              if (result.data.userList.length >= 20) {
                that.have_more = true;
              }
            }
            if (result.data.data) {
              result.data.data.forEach(function (element) {
                element['is_hide'] = true;
                that.userList.push(element);
              });
              if (result.data.data.length >= 20) {
                that.have_more = true;
              }
            }
            that.loading = false;
            that.page++;
            that.sourceList = that.userList;
            that.$apply();
          }
        }, {
          page: that.page,
          keyword: that.keyword
        });
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      var is_resresh = _wepy2.default.getStorageSync('index_refresh');
      if (is_resresh) {
        that.have_more = true;
        that.page = 1;
        that.sourceList = that.userList = [];
        that.getUserLIst();
      }
      _wepy2.default.setStorageSync('index_refresh', true);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwibG9hZGluZyIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInNvdXJjZUxpc3QiLCJ1c2VyIiwidXNlcl9hY3QiLCJwYWdlIiwia2V5d29yZCIsImhhdmVfbW9yZSIsInZpX2hlaWdodCIsImRlcGFydG1lbnQiLCJtZXRob2RzIiwibG9hZE1vcmUiLCJnZXRVc2VyTElzdCIsImJpbmRJbnB1dFNlYXJjaCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImdvVG9FeGN1dGVEZXRhaWwiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb1RvRGV0YWlsIiwidWlkIiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJpc19zYWxlIiwidG9nZ2xlRGlzcGxheSIsImluZGV4IiwibmF2aWdhdG9yVG9TZXJ2aWNlUHVibGlzaCIsImdvVG9TY2hlbWVEZXRhaWwiLCJvcHRpb25zIiwidGhhdCIsImdldFN0b3JhZ2VTeW5jIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndfaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzdWx0IiwiaGVpZ2h0IiwiJGFwcGx5IiwiZXhlYyIsInJlZGlyZWN0VG8iLCJhcGlfbmFtZSIsImlzX3NjaGVtZSIsImlzX2V4Y3V0ZSIsInNob3dMb2FkaW5nIiwibWFzayIsInJxIiwiZ2V0IiwiaGlkZUxvYWRpbmciLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsZW5ndGgiLCJpc19yZXNyZXNoIiwic2V0U3RvcmFnZVN5bmMi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QUFqQixJQUEyQixFQUEvQixFQUFtQztBQUNqQzVCLHFCQUFLNUIsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0Y7QUFDRDRCLGlCQUFLcEMsT0FBTCxHQUFlLEtBQWY7QUFDQW9DLGlCQUFLOUIsSUFBTDtBQUNBOEIsaUJBQUtqQyxVQUFMLEdBQWtCaUMsS0FBS2xDLFFBQXZCO0FBQ0FrQyxpQkFBS2MsTUFBTDtBQUNEO0FBekJjLFNBQWpCLEVBMEJHO0FBQ0Q1QyxnQkFBTThCLEtBQUs5QixJQURWO0FBRURDLG1CQUFTNkIsS0FBSzdCO0FBRmIsU0ExQkg7QUE4QkQ7QUFDRjs7OzZCQUNRO0FBQ1AsVUFBSTZCLE9BQU8sSUFBWDtBQUNBLFVBQU02QixhQUFXMUMsZUFBS2MsY0FBTCxDQUFvQixlQUFwQixDQUFqQjtBQUNBLFVBQUc0QixVQUFILEVBQWM7QUFDWjdCLGFBQUs1QixTQUFMLEdBQWlCLElBQWpCO0FBQ0E0QixhQUFLOUIsSUFBTCxHQUFZLENBQVo7QUFDQThCLGFBQUtqQyxVQUFMLEdBQWtCaUMsS0FBS2xDLFFBQUwsR0FBZ0IsRUFBbEM7QUFDQWtDLGFBQUt2QixXQUFMO0FBQ0Q7QUFDRFUscUJBQUsyQyxjQUFMLENBQW9CLGVBQXBCLEVBQW9DLElBQXBDO0FBQ0Q7Ozs7RUFoS2dDM0MsZUFBS2pCLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiBmYWxzZSxcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflrqLotYQnLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgaXNfaGlkZTogdHJ1ZSxcbiAgICB1c2VyTGlzdDogW10sXG4gICAgc291cmNlTGlzdDogW10sXG4gICAgdXNlcjogbnVsbCxcbiAgICB1c2VyX2FjdDogMCwgLy8wIOWuouacjSAx6ZSA5ZSuIOetluWIklxuXG4gICAgcGFnZTogMSxcbiAgICBrZXl3b3JkOiAnJyxcbiAgICBoYXZlX21vcmU6IHRydWUsXG4gICAgdmlfaGVpZ2h0OiA1MDAsXG4gICAgZGVwYXJ0bWVudDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckxJc3QoKTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFNlYXJjaChlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgdGhpcy5rZXl3b3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmhhdmVfbW9yZSA9IHRydWU7XG4gICAgICB0aGlzLnVzZXJMaXN0ID0gW107XG4gICAgICB0aGlzLmdldFVzZXJMSXN0KCk7XG4gICAgfSxcbiAgICBnb1RvRXhjdXRlRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vZXhlY3V0ZS90YXNrP29yZGVyX2lkX3N0cj0nICsgdGlkICsgJyZpZD0nICsgaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcblxuICAgICAgaWYodGhpcy51c2VyLnVpZD09PSdjZXNoaScpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZXIuaXNfc2VydmVyIHx8IHRoaXMudXNlci5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VyLmlzX3NhbGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRGlzcGxheShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMudXNlckxpc3RbaW5kZXhdLmlzX2hpZGUgPSAhdGhpcy51c2VyTGlzdFtpbmRleF0uaXNfaGlkZTtcbiAgICB9LFxuICAgIG5hdmlnYXRvclRvU2VydmljZVB1Ymxpc2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NlcnZlci9wdWJsaXNoJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvU2NoZW1lRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHVybCA9ICcvcGFnZXMvJyArIHRoaXMuZGVwYXJ0bWVudCArICcvc2NoZW1lL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgfVxuICBvblJlYWR5KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGxldCB3X2hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcjdG9wX2hlYWRlcicpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgbGV0IHZpX2hlaWdodCA9IHdfaGVpZ2h0IC0gcmVzdWx0LmhlaWdodCAtIDczO1xuICAgICAgICAgIHRoYXQudmlfaGVpZ2h0ID0gdmlfaGVpZ2h0O1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH0pLmV4ZWMoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGdldFVzZXJMSXN0KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpZiAoIXRoYXQuaGF2ZV9tb3JlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoYXQuaGF2ZV9tb3JlID0gZmFsc2U7XG4gICAgbGV0IHVzZXIgPSB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6ICdsb2dpbidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXBpX25hbWUgPSAnJztcbiAgICAgIHVzZXIuaXNfc2VydmVyIHx8IHVzZXIuaXNfc2VydmVyX29mZmxpbmUgPyBhcGlfbmFtZSA9ICdnZXRTZXJ2ZXJVc2VySW5mbycgOiAnJztcbiAgICAgIHVzZXIuaXNfc2FsZSA/IGFwaV9uYW1lID0gJ2dvdFNhbGVzVXNlckluZm8nIDogJyc7XG4gICAgICB1c2VyLmlzX3NjaGVtZSA/IGFwaV9uYW1lID0gJ2dldFBsYW5Vc2VySW5mbycgOiAnJztcbiAgICAgIHVzZXIuaXNfZXhjdXRlID8gYXBpX25hbWUgPSAnZ2V0T3BlcmF0aW9uVXNlcnMnIDogJyc7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICB9KTtcbiAgICAgIHJxLmdldChhcGlfbmFtZSwge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS51c2VyTGlzdCkge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEudXNlckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEudXNlckxpc3QubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgIHRoYXQuaGF2ZV9tb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuZGF0YS5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgICAgdGhhdC5oYXZlX21vcmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGF0LmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGF0LnBhZ2UrKztcbiAgICAgICAgICB0aGF0LnNvdXJjZUxpc3QgPSB0aGF0LnVzZXJMaXN0O1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZTogdGhhdC5wYWdlLFxuICAgICAgICBrZXl3b3JkOiB0aGF0LmtleXdvcmRcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgaXNfcmVzcmVzaD13ZXB5LmdldFN0b3JhZ2VTeW5jKCdpbmRleF9yZWZyZXNoJyk7XG4gICAgaWYoaXNfcmVzcmVzaCl7XG4gICAgICB0aGF0LmhhdmVfbW9yZSA9IHRydWU7XG4gICAgICB0aGF0LnBhZ2UgPSAxO1xuICAgICAgdGhhdC5zb3VyY2VMaXN0ID0gdGhhdC51c2VyTGlzdCA9IFtdO1xuICAgICAgdGhhdC5nZXRVc2VyTElzdCgpO1xuICAgIH1cbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdpbmRleF9yZWZyZXNoJyx0cnVlKTtcbiAgfVxufVxuIl19