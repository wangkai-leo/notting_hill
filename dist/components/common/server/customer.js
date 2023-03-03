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
          that.sale_info['user_status_name_label'] = result.data.user_status_name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpZCIsInR5cGUiLCJTdHJpbmciLCJ0d29XYXkiLCJyZWZsZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRwaWNrZXJhIiwibnRwaWNrZXIiLCJudHBpY2tlcmIiLCJtYWludGFpbiIsImN1c3RvbWVyaW5mbyIsImN1c3RvbWVyZm9sbG93IiwiZGF0YSIsImRlcGFydG1lbnQiLCJjdXN0b21lciIsInNhbGVfaW5mbyIsInRhYl9pbmRleCIsInVzZXIiLCJ0ZWFtcyIsInRlYW1faW5kZXgiLCJ0ZWFtX21lbWJlcnMiLCJlbXBsb3llZV9udW1iZXJfaW5kZXgiLCJyZXZpY2VfcmVjb3JkIiwibWV0aG9kcyIsImNoZWNrVW5pdCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3JkZXJfaWQiLCJiZWdpblVuaXQiLCJnb1RvRWRpdFVzZXJNc2ciLCJnb1RvTG9nRWRpdCIsImRyb3BDdXN0b21lciIsImhhbmRsZVRlYW1DaGFuZ2UiLCJnZXREaXN0cmlidXRpb25UZWFtcyIsInN1Ym1pdCIsInRoYXQiLCJwYXJhbXMiLCJ1c2VyX2lkIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsInRvZ2dsZVRhYiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiZm9sbG93VXAiLCJ3YXRjaCIsImdldE9uZVVzZXJJbmZvIiwicmVzdWx0IiwidXNlcl9zdGF0dXNfbmFtZSIsInB1cnBvc2UiLCJ1c2VyX3N0YXR1cyIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsInN0YXR1c19uYW1lIiwiZ2V0VGVhbUVtcGxveWVlIiwiY2hhbm5lbF9pZCIsImludGVudGlvbl9pZCIsImludGVudGlvbl9jaXR5IiwiZW1wbG95ZWVfbGlzdCIsImVtcGxveWVlX3RlYW1faWQiLCJ0ZWFtX2lkIiwiY29tbV9wcm9vZiIs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QUFHQyxHQUFILENBQU8sc0JBQVAsRUFBK0I7QUFDN0IsYUFBSyxtQkFBVTtBQUNiSixlQUFLZCxhQUFMLEdBQXFCOEIsT0FBT3hDLElBQVAsQ0FBWUEsSUFBakM7QUFDQXdCLGVBQUtPLE1BQUw7QUFDRDtBQUo0QixPQUEvQixFQUtHO0FBQ0RMLGlCQUFTRixLQUFLdkM7QUFEYixPQUxIO0FBUUF1QyxXQUFLYSxRQUFMO0FBQ0Q7OzsyQkFFTW9CLE8sRUFBUztBQUNkLFVBQUlqQyxPQUFPLElBQVg7QUFDQUEsV0FBS25CLElBQUwsR0FBWVEsZUFBSzZDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBbEMsV0FBS3ZCLFVBQUwsR0FBa0JZLGVBQUs2QyxjQUFMLENBQW9CLGFBQXBCLENBQWxCO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7O0VBMUtnQzdDLGVBQUs4QyxTOztrQkFBbkI1RSxLIiwiZmlsZSI6ImN1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5cbmltcG9ydCBudHBpY2tlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udHBpY2tlcic7XG5pbXBvcnQgY3VzdG9tZXJpbmZvIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2N1c3RvbWVyaW5mbyc7XG5pbXBvcnQgY3VzdG9tZXJmb2xsb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vY3VzdG9tZXJmb2xsb3cnO1xuaW1wb3J0IG1haW50YWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL21haW50YWluJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHJlZmxlc2g6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibnRwaWNrZXJhXCI6e1wibGFiZWxcIjpcIuaOpeWNleWboumYn1wiLFwidi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwidGVhbXNcIixcInYtYmluZDpjaGVja2VkX2luZGV4LnN5bmNcIjpcInRlYW1faW5kZXhcIixcIm50a2V5XCI6XCJ0ZWFtX25hbWVcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIm50cGlja2VyYlwiOntcImxhYmVsXCI6XCLmjqXljZXkurpcIixcInYtYmluZDpudHJhbmdlLnN5bmNcIjpcInRlYW1fbWVtYmVyc1wiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwiZW1wbG95ZWVfbnVtYmVyX2luZGV4XCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwie3sgdGVhbV9tZW1iZXJzLmxlbmd0aCA8PSAwIH19XCIsXCJudGtleVwiOlwiZW1wbG95ZWVfbmFtZVwifSxcImN1c3RvbWVyaW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnRjdXNpbmZvLnN5bmNcIjpcImN1c3RvbWVyXCJ9LFwiY3VzdG9tZXJmb2xsb3dcIjp7XCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJzYWxlX2luZm9cIixcInYtYmluZDpjdXN0b21lci5zeW5jXCI6XCJjdXN0b21lclwiLFwidi1iaW5kOmlkLnN5bmNcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHtcIm50cGlja2VyYVwiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVUZWFtQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgbnRwaWNrZXJhOiBudHBpY2tlcixcbiAgICBudHBpY2tlcmI6IG50cGlja2VyLFxuICAgIG1haW50YWluOiBtYWludGFpbixcbiAgICBjdXN0b21lcmluZm86IGN1c3RvbWVyaW5mbyxcbiAgICBjdXN0b21lcmZvbGxvdzogY3VzdG9tZXJmb2xsb3dcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBkZXBhcnRtZW50OiAnJyxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBzYWxlX2luZm86IG51bGwsXG4gICAgdGFiX2luZGV4OiAwLFxuICAgIHVzZXI6IG51bGwsXG4gICAgdGVhbXM6IG51bGwsXG4gICAgdGVhbV9pbmRleDogMCxcbiAgICB0ZWFtX21lbWJlcnM6IG51bGwsXG4gICAgZW1wbG95ZWVfbnVtYmVyX2luZGV4OiAwLFxuICAgIHJldmljZV9yZWNvcmQ6IG51bGxcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBjaGVja1VuaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NlcnZlci91bmlvbj9pZD0nICsgdGhpcy5jdXN0b21lci5vcmRlcl9pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBiZWdpblVuaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvc2VydmVyL3VuaXB1Ymxpc2g/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub0VkaXRVc2VyTXNnKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRjdXJzdG9tZXJpbmZvP2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdvVG9Mb2dFZGl0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2VkaXRsb2c/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJvcEN1c3RvbWVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2NoYXJnZWJhY2s/aWQ9JyArIHRoaXMuaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlVGVhbUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuZW1wbG95ZWVfbnVtYmVyX2luZGV4ID0gMDtcbiAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgIH1cbiAgICAgIGlmICh0aGF0LnRlYW1fbWVtYmVycyAmJlxuICAgICAgICB0aGF0LnRlYW1fbWVtYmVyc1t0aGF0LmVtcGxveWVlX251bWJlcl9pbmRleF0gJiZcbiAgICAgICAgdGhhdC50ZWFtX21lbWJlcnNbdGhhdC5lbXBsb3llZV9udW1iZXJfaW5kZXhdLmlkKSB7XG4gICAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoYXQudGVhbV9tZW1iZXJzW3RoYXQuZW1wbG95ZWVfbnVtYmVyX2luZGV4XS5pZDtcbiAgICAgIH1cbiAgICAgIHJxLmdldCgnZm9yY2VEaXN0cmlidXRpb24nLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwgcGFyYW1zKVxuICAgIH0sXG4gICAgdG9nZ2xlVGFiKGUpIHtcbiAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBpZiAodGhpcy50YWJfaW5kZXggPT0gMSkge1xuICAgICAgICB0aGlzLmZvbGxvd1VwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmb2xsb3dVcCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdmb2xsb3dVcCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5zYWxlX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LnNhbGVfaW5mb1sndXNlcl9zdGF0dXNfbmFtZV9sYWJlbCddPXJlc3VsdC5kYXRhLnVzZXJfc3RhdHVzX25hbWU7XG4gICAgICAgIGxldCBwdXJwb3NlID0gW107XG4gICAgICAgIHJlc3VsdC5kYXRhLnVzZXJfc3RhdHVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgcHVycG9zZS5wdXNoKGVsZW1lbnQuc3RhdHVzX25hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgfVxuICBnZXREaXN0cmlidXRpb25UZWFtcygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIHRoYXQuZ2V0VGVhbUVtcGxveWVlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY2hhbm5lbF9pZDogdGhhdC5jdXN0b21lci5jaGFubmVsX2lkLFxuICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9pZCxcbiAgICAgIGludGVudGlvbl9jaXR5OiB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9jaXR5LFxuICAgIH0pXG4gIH1cbiAgZ2V0VGVhbUVtcGxveWVlKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhhdC50ZWFtc1t0aGF0LnRlYW1faW5kZXhdKSB7XG4gICAgICBycS5nZXQoJ2dldFRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGVtcGxveWVlX3RlYW1faWQ6IHRoYXQudGVhbXNbdGhhdC50ZWFtX2luZGV4XS50ZWFtX2lkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB3YXRjaCA9IHtcbiAgICByZWZsZXNoKCkge1xuICAgICAgdGhpcy5mb2xsb3dVcCgpO1xuICAgICAgdGhpcy5nZXRPbmVVc2VySW5mbygpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9uZVVzZXJJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5jdXN0b21lci5jb21tX3Byb29mID0gdGhhdC5jdXN0b21lci5jb21tX3Byb29mLnNwbGl0KCcsJyk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIC8vIGlmICh0aGF0LmRlcGFydG1lbnQgPT0gJ2FydGNlbnRlcicpIHtcbiAgICAgICAgICB0aGF0LmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgICBycS5nZXQoJ2dldFNhbGVzUmV2aWNlUmVjb3JkJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnJldmljZV9yZWNvcmQgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICAgIHRoYXQuZm9sbG93VXAoKTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGF0LmRlcGFydG1lbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxufVxuIl19