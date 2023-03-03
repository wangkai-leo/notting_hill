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

      that.have_more = true;
      that.page = 1;
      that.sourceList = that.userList = [];
      that.getUserLIst();
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwibG9hZGluZyIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInNvdXJjZUxpc3QiLCJ1c2VyIiwidXNlcl9hY3QiLCJwYWdlIiwia2V5d29yZCIsImhhdmVfbW9yZSIsInZpX2hlaWdodCIsImRlcGFydG1lbnQiLCJtZXRob2RzIiwibG9hZE1vcmUiLCJnZXRVc2VyTElzdCIsImJpbmRJbnB1dFNlYXJjaCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImdvVG9FeGN1dGVEZXRhaWwiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb1RvRGV0YWlsIiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJpc19zYWxlIiwidG9nZ2xlRGlzcGxheSIsImluZGV4IiwibmF2aWdhdG9yVG9TZXJ2aWNlUHVibGlzaCIsImdvVG9TY2hlbWVEZXRhaWwiLCJvcHRpb25zIiwidGhhdCIsImdldFN0b3JhZ2VTeW5jIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndfaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzdWx0IiwiaGVpZ2h0IiwiJGFwcGx5IiwiZXhlYyIsInJlZGlyZWN0VG8iLCJhcGlfbmFtZSIsImlzX3NjaGVtZSIsImlzX2V4Y3V0ZSIsInNob3dMb2FkaW5nIiwibWFzayIsInJxIiwiZ2V0IiwiaGlkZUxvYWRpbmciLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7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QVlBLElBQVosQ0FBaUJtRSxNQUFqQixJQUEyQixFQUEvQixFQUFtQztBQUNqQzVCLHFCQUFLM0IsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0Y7QUFDRDJCLGlCQUFLbkMsT0FBTCxHQUFlLEtBQWY7QUFDQW1DLGlCQUFLN0IsSUFBTDtBQUNBNkIsaUJBQUtoQyxVQUFMLEdBQWtCZ0MsS0FBS2pDLFFBQXZCO0FBQ0FpQyxpQkFBS2MsTUFBTDtBQUNEO0FBekJjLFNBQWpCLEVBMEJHO0FBQ0QzQyxnQkFBTTZCLEtBQUs3QixJQURWO0FBRURDLG1CQUFTNEIsS0FBSzVCO0FBRmIsU0ExQkg7QUE4QkQ7QUFDRjs7OzZCQUNRO0FBQ1AsVUFBSTRCLE9BQU8sSUFBWDtBQUNEOzs7O0VBeEpnQ1osZUFBS2pCLEk7O2tCQUFuQmpCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiBmYWxzZSxcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflrqLotYQnLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgaXNfaGlkZTogdHJ1ZSxcbiAgICB1c2VyTGlzdDogW10sXG4gICAgc291cmNlTGlzdDogW10sXG4gICAgdXNlcjogbnVsbCxcbiAgICB1c2VyX2FjdDogMCwgLy8wIOWuouacjSAx6ZSA5ZSuIOetluWIklxuXG4gICAgcGFnZTogMSxcbiAgICBrZXl3b3JkOiAnJyxcbiAgICBoYXZlX21vcmU6IHRydWUsXG4gICAgdmlfaGVpZ2h0OiA1MDAsXG4gICAgZGVwYXJ0bWVudDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckxJc3QoKTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFNlYXJjaChlKSB7XG4gICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgdGhpcy5rZXl3b3JkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmhhdmVfbW9yZSA9IHRydWU7XG4gICAgICB0aGlzLnVzZXJMaXN0ID0gW107XG4gICAgICB0aGlzLmdldFVzZXJMSXN0KCk7XG4gICAgfSxcbiAgICBnb1RvRXhjdXRlRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vZXhlY3V0ZS90YXNrP29yZGVyX2lkX3N0cj0nICsgdGlkICsgJyZpZD0nICsgaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGlmICh0aGlzLnVzZXIuaXNfc2VydmVyIHx8IHRoaXMudXNlci5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VyLmlzX3NhbGUpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRGlzcGxheShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMudXNlckxpc3RbaW5kZXhdLmlzX2hpZGUgPSAhdGhpcy51c2VyTGlzdFtpbmRleF0uaXNfaGlkZTtcbiAgICB9LFxuICAgIG5hdmlnYXRvclRvU2VydmljZVB1Ymxpc2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NlcnZlci9wdWJsaXNoJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvU2NoZW1lRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHVybCA9ICcvcGFnZXMvJyArIHRoaXMuZGVwYXJ0bWVudCArICcvc2NoZW1lL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcblxuICAgIHRoYXQuaGF2ZV9tb3JlID0gdHJ1ZTtcbiAgICB0aGF0LnBhZ2UgPSAxO1xuICAgIHRoYXQuc291cmNlTGlzdCA9IHRoYXQudXNlckxpc3QgPSBbXTtcbiAgICB0aGF0LmdldFVzZXJMSXN0KCk7XG4gIH1cbiAgb25SZWFkeSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBsZXQgd19oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnI3RvcF9oZWFkZXInKS5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGxldCB2aV9oZWlnaHQgPSB3X2hlaWdodCAtIHJlc3VsdC5oZWlnaHQgLSA3MztcbiAgICAgICAgICB0aGF0LnZpX2hlaWdodCA9IHZpX2hlaWdodDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9KS5leGVjKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBnZXRVc2VyTElzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgaWYgKCF0aGF0LmhhdmVfbW9yZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGF0LmhhdmVfbW9yZSA9IGZhbHNlO1xuICAgIGxldCB1c2VyID0gdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgdXJsOiAnbG9naW4nXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGFwaV9uYW1lID0gJyc7XG4gICAgICB1c2VyLmlzX3NlcnZlciB8fCB1c2VyLmlzX3NlcnZlcl9vZmZsaW5lID8gYXBpX25hbWUgPSAnZ2V0U2VydmVyVXNlckluZm8nIDogJyc7XG4gICAgICB1c2VyLmlzX3NhbGUgPyBhcGlfbmFtZSA9ICdnb3RTYWxlc1VzZXJJbmZvJyA6ICcnO1xuICAgICAgdXNlci5pc19zY2hlbWUgPyBhcGlfbmFtZSA9ICdnZXRQbGFuVXNlckluZm8nIDogJyc7XG4gICAgICB1c2VyLmlzX2V4Y3V0ZSA/IGFwaV9uYW1lID0gJ2dldE9wZXJhdGlvblVzZXJzJyA6ICcnO1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgfSk7XG4gICAgICBycS5nZXQoYXBpX25hbWUsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEudXNlckxpc3QpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kYXRhLnVzZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnRbJ2lzX2hpZGUnXSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoYXQudXNlckxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnVzZXJMaXN0Lmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgICB0aGF0LmhhdmVfbW9yZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICByZXN1bHQuZGF0YS5kYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnRbJ2lzX2hpZGUnXSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoYXQudXNlckxpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICAgIHRoYXQuaGF2ZV9tb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC5wYWdlKys7XG4gICAgICAgICAgdGhhdC5zb3VyY2VMaXN0ID0gdGhhdC51c2VyTGlzdDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2U6IHRoYXQucGFnZSxcbiAgICAgICAga2V5d29yZDogdGhhdC5rZXl3b3JkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICB9XG59XG4iXX0=