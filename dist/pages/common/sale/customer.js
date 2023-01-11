'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "customerinfo": { "v-bind:ntcusinfo.sync": "customer" }, "customerfollow": { "v-bind:ntvalue.sync": "sale_info", "v-bind:customer.sync": "customer", "v-bind:id.sync": "id" } }, _this.$events = {}, _this.components = {
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
          var purpose = [];
          result.data.user_status.forEach(function (element) {
            purpose.push(element.status_name);
          });
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

      if (that.department == 'marry') {
        _request2.default.get('getMyInfo', {
          200: function _(result) {
            that.user = result.data.data;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwibWFpbnRhaW4iLCJjdXN0b21lcmluZm8iLCJjdXN0b21lcmZvbGxvdyIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImN1c3RvbWVyIiwic2FsZV9pbmZvIiwic3RhdHVzX2FyciIsInRhYl9pbmRleCIsImlkIiwiaGFzX29yZGVyIiwidGVhbV9tZW1iZXJzIiwiZW1wbG95ZWVfbnVtYmVyX2luZGV4IiwidXNlciIsInJldmljZV9yZWNvcmQiLCJpc19zZWFyY2giLCJkZXBhcnRtZW50IiwiaXNfYm9va3RlYW0iLCJtZXRob2RzIiwidGVhbUNoYW5nZSIsImUiLCJ0ZWFtc19hcnJfaW5kZXgiLCJkZXRhaWwiLCJ2YWx1ZSIsImdldFRlYW1FbXBsb3llZSIsImdvVG9DaGVja0ZvdXIiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNoZWNrVW5pdCIsIm9yZGVyX2lkIiwiZ29Ub1R1cm4iLCJnb1RvT3JkZXJNc2ciLCJ0b2dnbGVUYWIiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCJwdXJwb3NlIiwidXNlcl9zdGF0dXMiLCJmb3JFYWNoIiwicHVzaCIsImVsZW1lbnQiLCJzdGF0dXNfbmFtZSIsIiRhcHBseSIsInVzZXJfaWQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZWFtc19hcnIiLCJlbXBsb3llZV9saXN0IiwiZW1wbG95ZWVfbGlzdF9pbmRleCIsImVtcGxveWVlX3RlYW1faWQiLCJjb21tX3Byb29mIiwic3BsaXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7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RUExSmdDWCxlQUFLbUMsSTs7a0JBQW5CdEUsSyIsImZpbGUiOiJjdXN0b21lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuaW1wb3J0IGN1c3RvbWVyaW5mbyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9jdXN0b21lcmluZm8nO1xuaW1wb3J0IGN1c3RvbWVyZm9sbG93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2N1c3RvbWVyZm9sbG93JztcbmltcG9ydCBtYWludGFpbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9tYWludGFpbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJjdXN0b21lcmluZm9cIjp7XCJ2LWJpbmQ6bnRjdXNpbmZvLnN5bmNcIjpcImN1c3RvbWVyXCJ9LFwiY3VzdG9tZXJmb2xsb3dcIjp7XCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJzYWxlX2luZm9cIixcInYtYmluZDpjdXN0b21lci5zeW5jXCI6XCJjdXN0b21lclwiLFwidi1iaW5kOmlkLnN5bmNcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcblxuICAgIG1haW50YWluOiBtYWludGFpbixcbiAgICBjdXN0b21lcmluZm86IGN1c3RvbWVyaW5mbyxcbiAgICBjdXN0b21lcmZvbGxvdzogY3VzdG9tZXJmb2xsb3dcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflrqLotYTkv6Hmga8nLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBzYWxlX2luZm86IG51bGwsXG4gICAgc3RhdHVzX2FycjogW10sXG4gICAgdGFiX2luZGV4OiAwLFxuICAgIGlkOiAtMSxcbiAgICBoYXNfb3JkZXI6IDAsXG4gICAgdGVhbV9tZW1iZXJzOiAnJyxcbiAgICBlbXBsb3llZV9udW1iZXJfaW5kZXg6IDAsXG4gICAgdXNlcjogbnVsbCxcblxuICAgIHJldmljZV9yZWNvcmQ6IG51bGwsXG4gICAgaXNfc2VhcmNoOiBmYWxzZSxcblxuICAgIGRlcGFydG1lbnQ6ICcnLFxuXG4gICAgaXNfYm9va3RlYW06IDBcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICB0ZWFtQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMudGVhbXNfYXJyX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmdldFRlYW1FbXBsb3llZSgpO1xuICAgIH0sXG4gICAgZ29Ub0NoZWNrRm91cigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9zYWxlL2NoZWNrZm91cj9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjaGVja1VuaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NlcnZlci91bmlvbj9pZD0nICsgdGhpcy5jdXN0b21lci5vcmRlcl9pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvVHVybigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS90dXJuaW5mbz9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvT3JkZXJNc2coKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvJyArIHRoaXMuZGVwYXJ0bWVudCArICcvc2FsZS9vcmRlcm1zZz9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGlmICh0aGlzLnRhYl9pbmRleCA9PSAxKSB7XG4gICAgICAgIHRoaXMuZm9sbG93VXAoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJfaW5kZXggPT0gMikge1xuICAgICAgICB0aGlzLmdldE9yZGVySW5mbygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZm9sbG93VXAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZm9sbG93VXAnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuc2FsZV9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgbGV0IHB1cnBvc2UgPSBbXTtcbiAgICAgICAgcmVzdWx0LmRhdGEudXNlcl9zdGF0dXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBwdXJwb3NlLnB1c2goZWxlbWVudC5zdGF0dXNfbmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICB9XG4gIGdldE9yZGVySW5mbygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgdGhhdC5oYXNfb3JkZXIgPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuaGFzX29yZGVyID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgIHRoYXQuaXNfc2VhcmNoID0gb3B0aW9ucy5pc19zZWFyY2ggPT0gJ3llcycgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKVxuXG4gICAgaWYgKHRoYXQuZGVwYXJ0bWVudCA9PSAnbWFycnknKSB7XG4gICAgICBycS5nZXQoJ2dldE15SW5mbycsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQudXNlciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5pc19ib29rdGVhbSA9IHRoYXQudXNlci5pc19ib29rdGVhbTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcnEuZ2V0KCdnZXRUZWFtcycsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQudGVhbXNfYXJyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGF0LnRlYW1zX2Fycl9pbmRleCA9IDA7XG4gICAgICAgICAgdGhhdC5nZXRUZWFtRW1wbG95ZWUoKTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRUZWFtRW1wbG95ZWUoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZ2V0VGVhbUVtcGxveWVlJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3RfaW5kZXggPSAtMTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBlbXBsb3llZV90ZWFtX2lkOiB0aGF0LnRlYW1zX2Fyclt0aGF0LnRlYW1zX2Fycl9pbmRleF0uaWRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRPbmVVc2VySW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5jdXN0b21lciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuY3VzdG9tZXIuY29tbV9wcm9vZiA9IHRoYXQuY3VzdG9tZXIuY29tbV9wcm9vZi5zcGxpdCgnLCcpO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICAgIHJxLmdldCgnZ2V0U2FsZXNSZXZpY2VSZWNvcmQnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucmV2aWNlX3JlY29yZCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgIH0pXG4gICAgdGhhdC5mb2xsb3dVcCgpO1xuICB9XG59XG4iXX0=