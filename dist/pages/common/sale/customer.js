'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _customerinfo = require('./../../../components/common/customerinfo.js');

var _customerinfo2 = _interopRequireDefault(_customerinfo);

var _customerfollow = require('./../../../components/common/customerfollow.js');

var _customerfollow2 = _interopRequireDefault(_customerfollow);

var _maintain = require('./../../../components/common/maintain.js');

var _maintain2 = _interopRequireDefault(_maintain);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "customerinfo": { "v-bind:is_search.sync": "is_search", "v-bind:ntcusinfo.sync": "customer" }, "customerfollow": { "v-bind:is_search.sync": "is_search", "v-bind:readonly.sync": "is_search", "v-bind:ntvalue.sync": "sale_info", "v-bind:customer.sync": "customer", "v-bind:id.sync": "id" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,

      maintain: _maintain2.default,
      customerinfo: _customerinfo2.default,
      customerfollow: _customerfollow2.default
    }, _this.data = {
      isopacity: true,
      title: '客资信息',
      isback: true,
      customer: null,
      sale_info: null,
      status_arr: [],
      tab_index: 0,
      id: -1,
      has_order: 0,
      team_members: '',
      employee_number_index: 0,
      user: null,
      revice_record: null,
      is_search: false,
      department: '',
      is_bookteam: 0
    }, _this.methods = {
      teamChange: function teamChange(e) {
        this.teams_arr_index = e.detail.value;
        this.getTeamEmployee();
      },
      goToCheckFour: function goToCheckFour() {
        _wepy2.default.navigateTo({
          url: '/pages/marry/sale/checkfour?id=' + this.id
        });
      },
      checkUnit: function checkUnit() {
        _wepy2.default.navigateTo({
          url: '/pages/common/server/union?id=' + this.customer.order_id
        });
      },
      goToTurn: function goToTurn() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/turninfo?id=' + this.id
        });
      },
      goToOrderMsg: function goToOrderMsg() {
        _wepy2.default.navigateTo({
          url: '/pages/' + this.department + '/sale/ordermsg?id=' + this.id
        });
      },
      toggleTab: function toggleTab(e) {
        this.tab_index = e.currentTarget.dataset.index;
        if (this.tab_index == 1) {
          this.followUp();
        } else if (this.tab_index == 2) {
          this.getOrderInfo();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'followUp',
    value: function followUp() {
      var that = this;
      _request2.default.get('followUp', {
        200: function _(result) {
          that.sale_info = result.data.data;
          that.sale_info['user_status_name_label'] = result.data.user_status_name;
          // let purpose = [];
          // result.data.user_status.forEach(element => {
          //   purpose.push(element.status_name);
          // });
          that.$apply();
        }
      }, {
        user_id: that.id
      });
    }
  }, {
    key: 'getOrderInfo',
    value: function getOrderInfo() {
      var that = this;
      _request2.default.get('getOneOrderInfo', {
        200: function _(result) {
          if (result.data.data) {
            that.has_order = 2;
          } else {
            that.has_order = 1;
          }
          that.$apply();
        }
      }, {
        user_id: that.id
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.id = options.id;
      that.is_search = options.is_search == 'yes' ? true : false;
      that.department = _wepy2.default.getStorageSync('office_line');
      that.user = _wepy2.default.getStorageSync('user');
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.is_bookteam = that.user.is_bookteam;
          that.$apply();
        }
      });
      _request2.default.get('getTeams', {
        200: function _(result) {
          that.teams_arr = result.data.data;
          that.teams_arr_index = 0;
          that.getTeamEmployee();
          that.$apply();
        }
      });
    }
  }, {
    key: 'getTeamEmployee',
    value: function getTeamEmployee() {
      var that = this;
      _request2.default.get('getTeamEmployee', {
        200: function _(result) {
          that.employee_list = result.data.employee_list;
          that.employee_list_index = -1;
          that.$apply();
        }
      }, {
        employee_team_id: that.teams_arr[that.teams_arr_index].id
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      _request2.default.get('getOneUserInfo', {
        200: function _(result) {
          that.customer = result.data.data;
          that.customer.comm_proof = that.customer.comm_proof.split(',');
          that.$apply();
        }
      }, {
        user_id: that.id
      });
      _request2.default.get('getSalesReviceRecord', {
        200: function _(result) {
          that.revice_record = result.data.data;
          that.$apply();
        }
      }, {
        user_id: that.id
      });
      that.followUp();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/customer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwibWFpbnRhaW4iLCJjdXN0b21lcmluZm8iLCJjdXN0b21lcmZvbGxvdyIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImN1c3RvbWVyIiwic2FsZV9pbmZvIiwic3RhdHVzX2FyciIsInRhYl9pbmRleCIsImlkIiwiaGFzX29yZGVyIiwidGVhbV9tZW1iZXJzIiwiZW1wbG95ZWVfbnVtYmVyX2luZGV4IiwidXNlciIsInJldmljZV9yZWNvcmQiLCJpc19zZWFyY2giLCJkZXBhcnRtZW50IiwiaXNfYm9va3RlYW0iLCJtZXRob2RzIiwidGVhbUNoYW5nZSIsImUiLCJ0ZWFtc19hcnJfaW5kZXgiLCJkZXRhaWwiLCJ2YWx1ZSIsImdldFRlYW1FbXBsb3llZSIsImdvVG9DaGVja0ZvdXIiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNoZWNrVW5pdCIsIm9yZGVyX2lkIiwiZ29Ub1R1cm4iLCJnb1RvT3JkZXJNc2ciLCJ0b2dnbGVUYWIiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCJ1c2VyX3N0YXR1c19uYW1lIiwiJGFwcGx5IiwidXNlcl9pZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJnZXRTdG9yYWdlU3luYyIsInRlYW1zX2FyciIsImVtcGxveWVlX2xpc3QiLCJlbXBsb3llZV9saXN0X2luZGV4IiwiZW1wbG95ZWVfdGVhbV9pZCIsImNvbW1fcHJvb2YiLCJzcGxpdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7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QUVpQjtBQUNoQixVQUFJTCxPQUFPLElBQVg7QUFDQUMsd0JBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN4QixhQUFLLG1CQUFVO0FBQ2JGLGVBQUtZLGFBQUwsR0FBcUJULE9BQU96QyxJQUFQLENBQVlrRCxhQUFqQztBQUNBWixlQUFLYSxtQkFBTCxHQUEyQixDQUFDLENBQTVCO0FBQ0FiLGVBQUtLLE1BQUw7QUFDRDtBQUx1QixPQUExQixFQU1HO0FBQ0RTLDBCQUFrQmQsS0FBS1csU0FBTCxDQUFlWCxLQUFLbEIsZUFBcEIsRUFBcUNaO0FBRHRELE9BTkg7QUFTRDs7OzZCQUNRO0FBQ1AsVUFBSThCLE9BQU8sSUFBWDtBQUNBQyx3QkFBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3ZCLGFBQUssbUJBQVU7QUFDYkYsZUFBS2xDLFFBQUwsR0FBZ0JxQyxPQUFPekMsSUFBUCxDQUFZQSxJQUE1QjtBQUNBc0MsZUFBS2xDLFFBQUwsQ0FBY2lELFVBQWQsR0FBMkJmLEtBQUtsQyxRQUFMLENBQWNpRCxVQUFkLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUEzQjtBQUNBaEIsZUFBS0ssTUFBTDtBQUNEO0FBTHNCLE9BQXpCLEVBTUc7QUFDREMsaUJBQVNOLEtBQUs5QjtBQURiLE9BTkg7QUFTQStCLHdCQUFHQyxHQUFILENBQU8sc0JBQVAsRUFBK0I7QUFDN0IsYUFBSyxtQkFBVTtBQUNiRixlQUFLekIsYUFBTCxHQUFxQjRCLE9BQU96QyxJQUFQLENBQVlBLElBQWpDO0FBQ0FzQyxlQUFLSyxNQUFMO0FBQ0Q7QUFKNEIsT0FBL0IsRUFLRztBQUNEQyxpQkFBU04sS0FBSzlCO0FBRGIsT0FMSDtBQVFBOEIsV0FBS0YsUUFBTDtBQUNEOzs7O0VBdEpnQ1gsZUFBSzhCLEk7O2tCQUFuQmpFLEsiLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgY3VzdG9tZXJpbmZvIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2N1c3RvbWVyaW5mbyc7XG5pbXBvcnQgY3VzdG9tZXJmb2xsb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vY3VzdG9tZXJmb2xsb3cnO1xuaW1wb3J0IG1haW50YWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL21haW50YWluJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcImN1c3RvbWVyaW5mb1wiOntcInYtYmluZDppc19zZWFyY2guc3luY1wiOlwiaXNfc2VhcmNoXCIsXCJ2LWJpbmQ6bnRjdXNpbmZvLnN5bmNcIjpcImN1c3RvbWVyXCJ9LFwiY3VzdG9tZXJmb2xsb3dcIjp7XCJ2LWJpbmQ6aXNfc2VhcmNoLnN5bmNcIjpcImlzX3NlYXJjaFwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3NlYXJjaFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwic2FsZV9pbmZvXCIsXCJ2LWJpbmQ6Y3VzdG9tZXIuc3luY1wiOlwiY3VzdG9tZXJcIixcInYtYmluZDppZC5zeW5jXCI6XCJpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG5cbiAgICBtYWludGFpbjogbWFpbnRhaW4sXG4gICAgY3VzdG9tZXJpbmZvOiBjdXN0b21lcmluZm8sXG4gICAgY3VzdG9tZXJmb2xsb3c6IGN1c3RvbWVyZm9sbG93XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5a6i6LWE5L+h5oGvJyxcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgY3VzdG9tZXI6IG51bGwsXG4gICAgc2FsZV9pbmZvOiBudWxsLFxuICAgIHN0YXR1c19hcnI6IFtdLFxuICAgIHRhYl9pbmRleDogMCxcbiAgICBpZDogLTEsXG4gICAgaGFzX29yZGVyOiAwLFxuICAgIHRlYW1fbWVtYmVyczogJycsXG4gICAgZW1wbG95ZWVfbnVtYmVyX2luZGV4OiAwLFxuICAgIHVzZXI6IG51bGwsXG4gICAgcmV2aWNlX3JlY29yZDogbnVsbCxcbiAgICBpc19zZWFyY2g6IGZhbHNlLFxuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIGlzX2Jvb2t0ZWFtOiAwXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgdGVhbUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnRlYW1zX2Fycl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5nZXRUZWFtRW1wbG95ZWUoKTtcbiAgICB9LFxuICAgIGdvVG9DaGVja0ZvdXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvc2FsZS9jaGVja2ZvdXI/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2hlY2tVbml0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvdW5pb24/aWQ9JyArIHRoaXMuY3VzdG9tZXIub3JkZXJfaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub1R1cm4oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvdHVybmluZm8/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub09yZGVyTXNnKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzLycgKyB0aGlzLmRlcGFydG1lbnQgKyAnL3NhbGUvb3JkZXJtc2c/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9nZ2xlVGFiKGUpIHtcbiAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBpZiAodGhpcy50YWJfaW5kZXggPT0gMSkge1xuICAgICAgICB0aGlzLmZvbGxvd1VwKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFiX2luZGV4ID09IDIpIHtcbiAgICAgICAgdGhpcy5nZXRPcmRlckluZm8oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGZvbGxvd1VwKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2ZvbGxvd1VwJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnNhbGVfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuc2FsZV9pbmZvWyd1c2VyX3N0YXR1c19uYW1lX2xhYmVsJ10gPSByZXN1bHQuZGF0YS51c2VyX3N0YXR1c19uYW1lO1xuICAgICAgICAvLyBsZXQgcHVycG9zZSA9IFtdO1xuICAgICAgICAvLyByZXN1bHQuZGF0YS51c2VyX3N0YXR1cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgIHB1cnBvc2UucHVzaChlbGVtZW50LnN0YXR1c19uYW1lKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgIH0pXG4gIH1cbiAgZ2V0T3JkZXJJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldE9uZU9yZGVySW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEpIHtcbiAgICAgICAgICB0aGF0Lmhhc19vcmRlciA9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5oYXNfb3JkZXIgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgIH0pXG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgdGhhdC5pc19zZWFyY2ggPSBvcHRpb25zLmlzX3NlYXJjaCA9PSAneWVzJyA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGF0LmRlcGFydG1lbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpXG4gICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHJxLmdldCgnZ2V0TXlJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmlzX2Jvb2t0ZWFtID0gdGhhdC51c2VyLmlzX2Jvb2t0ZWFtO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pXG4gICAgcnEuZ2V0KCdnZXRUZWFtcycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50ZWFtc19hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LnRlYW1zX2Fycl9pbmRleCA9IDA7XG4gICAgICAgIHRoYXQuZ2V0VGVhbUVtcGxveWVlKCk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldFRlYW1FbXBsb3llZSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdCA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdF9pbmRleCA9IC0xO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGVtcGxveWVlX3RlYW1faWQ6IHRoYXQudGVhbXNfYXJyW3RoYXQudGVhbXNfYXJyX2luZGV4XS5pZFxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5jdXN0b21lci5jb21tX3Byb29mID0gdGhhdC5jdXN0b21lci5jb21tX3Byb29mLnNwbGl0KCcsJyk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgIH0pXG4gICAgcnEuZ2V0KCdnZXRTYWxlc1JldmljZVJlY29yZCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5yZXZpY2VfcmVjb3JkID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgICB0aGF0LmZvbGxvd1VwKCk7XG4gIH1cbn1cbiJdfQ==