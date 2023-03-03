'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _ntpicker = require('./../ntpicker.js');

var _ntpicker2 = _interopRequireDefault(_ntpicker);

var _customerinfo = require('./../customerinfo.js');

var _customerinfo2 = _interopRequireDefault(_customerinfo);

var _customerfollow = require('./../customerfollow.js');

var _customerfollow2 = _interopRequireDefault(_customerfollow);

var _maintain = require('./../maintain.js');

var _maintain2 = _interopRequireDefault(_maintain);

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
      id: {
        type: String,
        twoWay: true
      },
      reflesh: {
        type: String,
        twoWay: true
      }
    }, _this.$repeat = {}, _this.$props = { "ntpickera": { "label": "接单团队", "v-bind:ntrange.sync": "teams", "v-bind:checked_index.sync": "team_index", "ntkey": "team_name", "xmlns:v-on": "" }, "ntpickerb": { "label": "接单人", "v-bind:ntrange.sync": "team_members", "v-bind:checked_index.sync": "employee_number_index", "v-bind:readonly.sync": "{{ team_members.length <= 0 }}", "ntkey": "employee_name" }, "customerinfo": { "xmlns:v-bind": "", "v-bind:ntcusinfo.sync": "customer" }, "customerfollow": { "v-bind:ntvalue.sync": "sale_info", "v-bind:customer.sync": "customer", "v-bind:id.sync": "id" } }, _this.$events = { "ntpickera": { "v-on:change": "handleTeamChange" } }, _this.components = {
      ntpickera: _ntpicker2.default,
      ntpickerb: _ntpicker2.default,
      maintain: _maintain2.default,
      customerinfo: _customerinfo2.default,
      customerfollow: _customerfollow2.default
    }, _this.data = {
      department: '',
      customer: null,
      sale_info: null,
      tab_index: 0,
      user: null,
      teams: null,
      team_index: 0,
      team_members: null,
      employee_number_index: 0,
      revice_record: null
    }, _this.methods = {
      checkUnit: function checkUnit() {
        _wepy2.default.navigateTo({
          url: '/pages/common/server/union?id=' + this.customer.order_id
        });
      },
      beginUnit: function beginUnit() {
        _wepy2.default.navigateTo({
          url: '/pages/marry/server/unipublish?id=' + this.id
        });
      },
      goToEditUserMsg: function goToEditUserMsg() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editcurstomerinfo?id=' + this.id
        });
      },
      goToLogEdit: function goToLogEdit() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editlog?id=' + this.id
        });
      },
      dropCustomer: function dropCustomer() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/chargeback?id=' + this.id
        });
      },
      handleTeamChange: function handleTeamChange() {
        this.employee_number_index = 0;
        this.getDistributionTeams();
      },
      submit: function submit() {
        var that = this;
        var params = {
          user_id: that.id
        };
        if (that.team_members && that.team_members[that.employee_number_index] && that.team_members[that.employee_number_index].id) {
          params['employee_id'] = that.team_members[that.employee_number_index].id;
        }
        _request2.default.get('forceDistribution', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            that.$apply();
          }
        }, params);
      },
      toggleTab: function toggleTab(e) {
        this.tab_index = e.currentTarget.dataset.index;
        if (this.tab_index == 1) {
          this.followUp();
        }
      }
    }, _this.watch = {
      reflesh: function reflesh() {
        this.followUp();
        this.getOneUserInfo();
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
    key: 'getDistributionTeams',
    value: function getDistributionTeams() {
      var that = this;
      _request2.default.get('getDistributionTeams', {
        200: function _(result) {
          that.teams = result.data.data;
          that.$apply();
          that.getTeamEmployee();
        }
      }, {
        channel_id: that.customer.channel_id,
        intention_id: that.customer.intention_id,
        intention_city: that.customer.intention_city
      });
    }
  }, {
    key: 'getTeamEmployee',
    value: function getTeamEmployee() {
      var that = this;
      if (that.teams[that.team_index]) {
        _request2.default.get('getTeamEmployee', {
          200: function _(result) {
            that.team_members = result.data.employee_list;
            that.$apply();
          }
        }, {
          employee_team_id: that.teams[that.team_index].team_id
        });
      }
    }
  }, {
    key: 'getOneUserInfo',
    value: function getOneUserInfo() {
      var that = this;
      _request2.default.get('getOneUserInfo', {
        200: function _(result) {
          that.customer = result.data.data;
          that.customer.comm_proof = that.customer.comm_proof.split(',');
          that.$apply();
          // if (that.department == 'artcenter') {
          that.getDistributionTeams();
          // }
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
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      that.user = _wepy2.default.getStorageSync('user');
      that.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpZCIsInR5cGUiLCJTdHJpbmciLCJ0d29XYXkiLCJyZWZsZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRwaWNrZXJhIiwibnRwaWNrZXIiLCJudHBpY2tlcmIiLCJtYWludGFpbiIsImN1c3RvbWVyaW5mbyIsImN1c3RvbWVyZm9sbG93IiwiZGF0YSIsImRlcGFydG1lbnQiLCJjdXN0b21lciIsInNhbGVfaW5mbyIsInRhYl9pbmRleCIsInVzZXIiLCJ0ZWFtcyIsInRlYW1faW5kZXgiLCJ0ZWFtX21lbWJlcnMiLCJlbXBsb3llZV9udW1iZXJfaW5kZXgiLCJyZXZpY2VfcmVjb3JkIiwibWV0aG9kcyIsImNoZWNrVW5pdCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3JkZXJfaWQiLCJiZWdpblVuaXQiLCJnb1RvRWRpdFVzZXJNc2ciLCJnb1RvTG9nRWRpdCIsImRyb3BDdXN0b21lciIsImhhbmRsZVRlYW1DaGFuZ2UiLCJnZXREaXN0cmlidXRpb25UZWFtcyIsInN1Ym1pdCIsInRoYXQiLCJwYXJhbXMiLCJ1c2VyX2lkIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsInRvZ2dsZVRhYiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiZm9sbG93VXAiLCJ3YXRjaCIsImdldE9uZVVzZXJJbmZvIiwicmVzdWx0IiwicHVycG9zZSIsInVzZXJfc3RhdHVzIiwiZm9yRWFjaCIsInB1c2giLCJlbGVtZW50Iiwic3RhdHVzX25hbWUiLCJnZXRUZWFtRW1wbG95ZWUiLCJjaGFubmVsX2lkIiwiaW50ZW50aW9uX2lkIiwiaW50ZW50aW9uX2NpdHkiLCJlbXBsb3llZV9saXN0IiwiZW1wbG95ZWVfdGVhbV9pZCIsInRlYW1faWQiLCJjb21tX3Byb29mIiwic3BsaXQiLCJvcHRpb25zIiwi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QUFZQSxJQUFqQztBQUNBd0IsZUFBS08sTUFBTDtBQUNEO0FBSjRCLE9BQS9CLEVBS0c7QUFDREwsaUJBQVNGLEtBQUt2QztBQURiLE9BTEg7QUFRQXVDLFdBQUthLFFBQUw7QUFDRDs7OzJCQUVNbUIsTyxFQUFTO0FBQ2QsVUFBSWhDLE9BQU8sSUFBWDtBQUNBQSxXQUFLbkIsSUFBTCxHQUFZUSxlQUFLNEMsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0FqQyxXQUFLdkIsVUFBTCxHQUFrQlksZUFBSzRDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBbEI7QUFDRDs7OzZCQUNRLENBQ1I7Ozs7RUF6S2dDNUMsZUFBSzZDLFM7O2tCQUFuQjNFLEsiLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcblxuaW1wb3J0IG50cGlja2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250cGlja2VyJztcbmltcG9ydCBjdXN0b21lcmluZm8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vY3VzdG9tZXJpbmZvJztcbmltcG9ydCBjdXN0b21lcmZvbGxvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9jdXN0b21lcmZvbGxvdyc7XG5pbXBvcnQgbWFpbnRhaW4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbWFpbnRhaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgcmVmbGVzaDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudHBpY2tlcmFcIjp7XCJsYWJlbFwiOlwi5o6l5Y2V5Zui6ZifXCIsXCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJ0ZWFtc1wiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwidGVhbV9pbmRleFwiLFwibnRrZXlcIjpcInRlYW1fbmFtZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwibnRwaWNrZXJiXCI6e1wibGFiZWxcIjpcIuaOpeWNleS6ulwiLFwidi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwidGVhbV9tZW1iZXJzXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJlbXBsb3llZV9udW1iZXJfaW5kZXhcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJ7eyB0ZWFtX21lbWJlcnMubGVuZ3RoIDw9IDAgfX1cIixcIm50a2V5XCI6XCJlbXBsb3llZV9uYW1lXCJ9LFwiY3VzdG9tZXJpbmZvXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudGN1c2luZm8uc3luY1wiOlwiY3VzdG9tZXJcIn0sXCJjdXN0b21lcmZvbGxvd1wiOntcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcInNhbGVfaW5mb1wiLFwidi1iaW5kOmN1c3RvbWVyLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJ2LWJpbmQ6aWQuc3luY1wiOlwiaWRcIn19O1xyXG4kZXZlbnRzID0ge1wibnRwaWNrZXJhXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZVRlYW1DaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBudHBpY2tlcmE6IG50cGlja2VyLFxuICAgIG50cGlja2VyYjogbnRwaWNrZXIsXG4gICAgbWFpbnRhaW46IG1haW50YWluLFxuICAgIGN1c3RvbWVyaW5mbzogY3VzdG9tZXJpbmZvLFxuICAgIGN1c3RvbWVyZm9sbG93OiBjdXN0b21lcmZvbGxvd1xuICB9O1xuICBkYXRhID0ge1xuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIGN1c3RvbWVyOiBudWxsLFxuICAgIHNhbGVfaW5mbzogbnVsbCxcbiAgICB0YWJfaW5kZXg6IDAsXG4gICAgdXNlcjogbnVsbCxcbiAgICB0ZWFtczogbnVsbCxcbiAgICB0ZWFtX2luZGV4OiAwLFxuICAgIHRlYW1fbWVtYmVyczogbnVsbCxcbiAgICBlbXBsb3llZV9udW1iZXJfaW5kZXg6IDAsXG4gICAgcmV2aWNlX3JlY29yZDogbnVsbFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGNoZWNrVW5pdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2VydmVyL3VuaW9uP2lkPScgKyB0aGlzLmN1c3RvbWVyLm9yZGVyX2lkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGJlZ2luVW5pdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9zZXJ2ZXIvdW5pcHVibGlzaD9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvRWRpdFVzZXJNc2coKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvZWRpdGN1cnN0b21lcmluZm8/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub0xvZ0VkaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvZWRpdGxvZz9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkcm9wQ3VzdG9tZXIoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY2hhcmdlYmFjaz9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVUZWFtQ2hhbmdlKCkge1xuICAgICAgdGhpcy5lbXBsb3llZV9udW1iZXJfaW5kZXggPSAwO1xuICAgICAgdGhpcy5nZXREaXN0cmlidXRpb25UZWFtcygpO1xuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgfVxuICAgICAgaWYgKHRoYXQudGVhbV9tZW1iZXJzICYmXG4gICAgICAgIHRoYXQudGVhbV9tZW1iZXJzW3RoYXQuZW1wbG95ZWVfbnVtYmVyX2luZGV4XSAmJlxuICAgICAgICB0aGF0LnRlYW1fbWVtYmVyc1t0aGF0LmVtcGxveWVlX251bWJlcl9pbmRleF0uaWQpIHtcbiAgICAgICAgcGFyYW1zWydlbXBsb3llZV9pZCddID0gdGhhdC50ZWFtX21lbWJlcnNbdGhhdC5lbXBsb3llZV9udW1iZXJfaW5kZXhdLmlkO1xuICAgICAgfVxuICAgICAgcnEuZ2V0KCdmb3JjZURpc3RyaWJ1dGlvbicsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCBwYXJhbXMpXG4gICAgfSxcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGlmICh0aGlzLnRhYl9pbmRleCA9PSAxKSB7XG4gICAgICAgIHRoaXMuZm9sbG93VXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGZvbGxvd1VwKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2ZvbGxvd1VwJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnNhbGVfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIGxldCBwdXJwb3NlID0gW107XG4gICAgICAgIHJlc3VsdC5kYXRhLnVzZXJfc3RhdHVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgcHVycG9zZS5wdXNoKGVsZW1lbnQuc3RhdHVzX25hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgfVxuICBnZXREaXN0cmlidXRpb25UZWFtcygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIHRoYXQuZ2V0VGVhbUVtcGxveWVlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY2hhbm5lbF9pZDogdGhhdC5jdXN0b21lci5jaGFubmVsX2lkLFxuICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9pZCxcbiAgICAgIGludGVudGlvbl9jaXR5OiB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9jaXR5LFxuICAgIH0pXG4gIH1cbiAgZ2V0VGVhbUVtcGxveWVlKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhhdC50ZWFtc1t0aGF0LnRlYW1faW5kZXhdKSB7XG4gICAgICBycS5nZXQoJ2dldFRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGVtcGxveWVlX3RlYW1faWQ6IHRoYXQudGVhbXNbdGhhdC50ZWFtX2luZGV4XS50ZWFtX2lkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB3YXRjaCA9IHtcbiAgICByZWZsZXNoKCkge1xuICAgICAgdGhpcy5mb2xsb3dVcCgpO1xuICAgICAgdGhpcy5nZXRPbmVVc2VySW5mbygpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9uZVVzZXJJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5jdXN0b21lci5jb21tX3Byb29mID0gdGhhdC5jdXN0b21lci5jb21tX3Byb29mLnNwbGl0KCcsJyk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIC8vIGlmICh0aGF0LmRlcGFydG1lbnQgPT0gJ2FydGNlbnRlcicpIHtcbiAgICAgICAgICB0aGF0LmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgICBycS5nZXQoJ2dldFNhbGVzUmV2aWNlUmVjb3JkJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnJldmljZV9yZWNvcmQgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICAgIHRoYXQuZm9sbG93VXAoKTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGF0LmRlcGFydG1lbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxufVxuIl19