'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _file = require('./../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _mpicker = require('./../../../components/mpicker.js');

var _mpicker2 = _interopRequireDefault(_mpicker);

var _upload = require('./../../../components/common/upload.js');

var _upload2 = _interopRequireDefault(_upload);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "mpicker": { "v-bind:rang_data.sync": "channelInfo", "v-bind:rang_display.sync": "channel_display", "v-bind:rang_index.sync": "channel_index", "v-bind:rang_key.sync": "channel_key_name", "xmlns:v-on": "" }, "npicker": { "v-bind:rang_data.sync": "intentionInfo", "v-bind:rang_display.sync": "intention_display", "v-bind:rang_index.sync": "intent_index", "v-bind:rang_key.sync": "intention_key_name" }, "opicker": { "v-bind:rang_data.sync": "cityInfo", "v-bind:rang_display.sync": "city_display", "v-bind:rang_index.sync": "attend_city_index", "v-bind:rang_key.sync": "city_key_name" }, "upload": { "label": "沟通证明", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" } }, _this.$events = { "mpicker": { "v-on:changeMp": "bindChannelChange" }, "npicker": { "v-on:changeMp": "bindAttentChange" }, "opicker": { "v-on:changeMp": "bindAttendCityChange" } }, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      mpicker: _mpicker2.default,
      npicker: _mpicker2.default,
      opicker: _mpicker2.default,
      upload: _upload2.default
    }, _this.data = {
      isopacity: true,
      title: '发布客资',
      isback: true,
      page_data: null,
      teams: null,
      teams_rand: ['全部'],
      teams_index: 0,
      merry_city_index: 0,
      merry_date: '请选择婚礼时间',
      wedding_hotel: '',
      user_name: '',
      user_mobile: '',
      wechat_id: '',
      user_remark: '',
      exit_user: null,

      submit_lock: false,
      auto_allot: true,
      region: ['-', '-', '-'],
      user: null,
      channelInfo: [],
      channel_key_name: 'channel_name',
      channel_index: 0,
      channel_display: false,
      intentionInfo: [],
      intention_key_name: 'intention_name',
      intent_index: 0,
      intention_display: false,
      cityInfo: [],
      city_key_name: 'city_name',
      attend_city_index: 0,
      city_display: false,
      team_members: null,
      team_members_index: 0,

      is_submit: 1,
      is_old: 0,

      department: '',

      readonly: false,
      uplaoded: {
        images: []
      }
    }, _this.methods = {
      bindChangeEmployee: function bindChangeEmployee(e) {
        this.team_members_index = e.detail.value;
      },
      showChannelPannel: function showChannelPannel() {
        this.channel_display = true;
      },
      showAttentionPannel: function showAttentionPannel() {
        this.intention_display = true;
      },
      showCityPannel: function showCityPannel() {
        this.city_display = true;
      },
      bindInputTeamChange: function bindInputTeamChange(e) {
        this.teams_index = e.detail.value;
        // if (this.department == 'marry') {
        this.team_members_index = 0;
        this.getTeamEmployee(this.teams[this.teams_index].team_id);
        // }
      },
      toggleAutoAllot: function toggleAutoAllot() {
        this.auto_allot = !this.auto_allot;
      },
      closeUser: function closeUser(e) {
        var that = this;
        var id = e.currentTarget.dataset.id;
        console.log(that.exit_user);
        _request2.default.get('closeUser', {
          200: function _(result) {
            that.exit_user = null;
            that.$apply();
          }
        }, {
          id: that.exit_user.id
        });
      },
      bindInputMark: function bindInputMark(e) {
        this.user_remark = e.detail.value;
      },
      bindInputWxCount: function bindInputWxCount(e) {
        this.wechat_id = e.detail.value;
      },
      checkPhoneNume: function checkPhoneNume(e) {
        var that = this;
        _request2.default.get('isExistUser', {
          201: function _(result) {
            var user = result.data.userInfo;
            for (var key in user) {
              if (!user[key]) {
                user[key] = '-';
              }
            }
            that.exit_user = user;
            that.is_submit = result.data.is_submit;
            that.is_old = result.data.is_old;
            that.$apply();
          },
          200: function _(result) {
            that.exit_user = null;
            that.is_submit = result.data.is_submit;
            that.$apply();
          }
        }, {
          user_mobile: that.user_mobile,
          wechat_id: that.wechat_id,
          intention_id: that.page_data.intentionInfo[that.intent_index].id
        });
        if (!_validate2.default.isPhoneNumber(this.user_mobile) && !_validate2.default.isEmpty(this.user_mobile)) {
          _wepy2.default.showToast({
            title: '手机号不正确', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
        };
      },
      bindInputUserMobile: function bindInputUserMobile(e) {
        var that = this;
        that.user_mobile = e.detail.value;
      },
      bindInputUserName: function bindInputUserName(e) {
        this.user_name = e.detail.value;
      },
      bindInputHotel: function bindInputHotel(e) {
        this.wedding_hotel = e.detail.value;
      },
      bindChannelChange: function bindChannelChange(index) {
        this.channel_index = index;
        console.log('cds');
        this.getDistributionTeams();
      },
      bindAttentChange: function bindAttentChange(index) {
        this.intent_index = index;
        this.getDistributionTeams();
      },
      bindAttendCityChange: function bindAttendCityChange(index) {
        this.attend_city_index = index;
        this.getDistributionTeams();
      },
      bindMerryCityChange: function bindMerryCityChange(e) {
        var values = e.detail.value;
        this.region = e.detail.value;
        this.merry_city_index = values[0] + ' ' + values[1];
      },
      bindMerryDateChange: function bindMerryDateChange(e) {
        this.merry_date = e.detail.value;
      },
      submit: function submit() {
        var that = this;
        if (that.submit_lock) {
          return false;
        }
        var form_data = {
          channel_id: that.page_data.channelInfo[that.channel_index].id,
          intention_id: that.page_data.intentionInfo[that.intent_index].id,
          intention_city: that.page_data.cityInfo[that.attend_city_index].id,
          wedding_province_name: that.region[0],
          wedding_city_name: that.region[1],
          wedding_area_name: that.region[2],
          wedding_hotel: that.wedding_hotel,
          wedding_date: that.merry_date == '请选择婚礼时间' ? '' : that.merry_date,
          user_name: that.user_name,
          user_mobile: that.user_mobile,
          wechat_id: that.wechat_id,
          comm_proof: that.uplaoded.images.join(','),
          user_remark: that.user_remark
        };
        if (this.user.is_server) {
          if (this.teams_index != 0) {
            var index = this.teams_index;
            form_data.team_id = this.teams[index].team_id;
          }
          if (this.team_members_index != 0) {
            form_data['employee_id'] = this.team_members[that.team_members_index].id;
          }
        }

        if (!form_data.user_mobile && !form_data.wechat_id) {
          _wepy2.default.showToast({
            title: '请填写新人手机或微信', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        if (form_data.user_mobile && !_validate2.default.isPhoneNumber(form_data.user_mobile)) {
          _wepy2.default.showToast({
            title: '请填写正确的手机号', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        if (that.is_submit == 0) {
          _wepy2.default.showToast({
            title: '已存在相同客资', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        that.submit_lock = true;
        _request2.default.get('isExistUser', {
          201: function _(result) {
            var user = result.data.userInfo;
            for (var key in user) {
              if (!user[key]) {
                user[key] = '-';
              }
            }
            that.submit_lock = false;
            that.exit_user = user;
            that.$apply();
            _wepy2.default.showToast({
              title: '已存在相同客资', //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: function success(res) {}
            });
          },
          200: function _(result) {
            that.exit_user = null;
            that.$apply();
            _wepy2.default.showLoading({
              title: '提交中...', //提示的内容,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: function success(res) {}
            });
            _request2.default.get('insertUserInfo', {
              200: function _(result) {
                _wepy2.default.navigateBack({
                  delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                });
              }
            }, form_data);
          }
        }, {
          user_mobile: that.user_mobile,
          wechat_id: that.wechat_id,
          intention_id: that.page_data.intentionInfo[that.intent_index].id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getTeamEmployee',
    value: function getTeamEmployee(employee_team_id) {
      var that = this;
      _request2.default.get('getTeamEmployee', {
        200: function _(result) {
          if (employee_team_id == 0) {
            that.team_members = [];
            that.team_members.unshift({
              id: 0,
              employee_name: '选择团队后再选择执行人'
            });
          } else {
            that.team_members = result.data.employee_list;
            that.team_members.unshift({
              id: 0,
              employee_name: '请选择'
            });
          }
          that.$apply();
        }
      }, {
        employee_team_id: employee_team_id
      });
    }
  }, {
    key: 'getDistributionTeams',
    value: function getDistributionTeams() {
      var that = this;
      _request2.default.get('getDistributionTeams', {
        200: function _(result) {
          that.teams = result.data.data;
          that.teams.unshift({
            team_id: 0,
            team_name: '全部'
          });
          that.$apply();
        }
      }, {
        channel_id: that.page_data.channelInfo[that.channel_index].id,
        intention_id: that.page_data.intentionInfo[that.intent_index].id,
        intention_city: that.page_data.cityInfo[that.attend_city_index].id
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      this.user = _wepy2.default.getStorageSync('user');
      _request2.default.get('getInitData', {
        200: function _(result) {
          that.page_data = result.data;
          that.channelInfo = that.page_data.channelInfo;
          that.cityInfo = that.page_data.cityInfo;
          that.intentionInfo = that.page_data.intentionInfo;
          that.$apply();
          that.getDistributionTeams();
        }
      });
      this.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/server/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJtcGlja2VyIiwibnBpY2tlciIsIm9waWNrZXIiLCJ1cGxvYWQiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2RhdGEiLCJ0ZWFtcyIsInRlYW1zX3JhbmQiLCJ0ZWFtc19pbmRleCIsIm1lcnJ5X2NpdHlfaW5kZXgiLCJtZXJyeV9kYXRlIiwid2VkZGluZ19ob3RlbCIsInVzZXJfbmFtZSIsInVzZXJfbW9iaWxlIiwid2VjaGF0X2lkIiwidXNlcl9yZW1hcmsiLCJleGl0X3VzZXIiLCJzdWJtaXRfbG9jayIsImF1dG9fYWxsb3QiLCJyZWdpb24iLCJ1c2VyIiwiY2hhbm5lbEluZm8iLCJjaGFubmVsX2tleV9uYW1lIiwiY2hhbm5lbF9pbmRleCIsImNoYW5uZWxfZGlzcGxheSIsImludGVudGlvbkluZm8iLCJpbnRlbnRpb25fa2V5X25hbWUiLCJpbnRlbnRfaW5kZXgiLCJpbnRlbnRpb25fZGlzcGxheSIsImNpdHlJbmZvIiwiY2l0eV9rZXlfbmFtZSIsImF0dGVuZF9jaXR5X2luZGV4IiwiY2l0eV9kaXNwbGF5IiwidGVhbV9tZW1iZXJzIiwidGVhbV9tZW1iZXJzX2luZGV4IiwiaXNfc3VibWl0IiwiaXNfb2xkIiwiZGVwYXJ0bWVudCIsInJlYWRvbmx5IiwidXBsYW9kZWQiLCJpbWFnZXMiLCJtZXRob2RzIiwiYmluZENoYW5nZUVtcGxveWVlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2hvd0NoYW5uZWxQYW5uZWwiLCJzaG93QXR0ZW50aW9uUGFubmVsIiwic2hvd0NpdHlQYW5uZWwiLCJiaW5kSW5wdXRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwidGVhbV9pZCIsInRvZ2dsZUF1dG9BbGxvdCIsImNsb3NlVXNlciIsInRoYXQiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsInJxIiwiZ2V0IiwiJGFwcGx5IiwiYmluZElucHV0TWFyayIsImJpbmRJbnB1dFd4Q291bnQiLCJjaGVja1Bob25lTnVtZSIsInJlc3VsdCIsInVzZXJJbmZvIiwia2V5IiwiaW50ZW50aW9uX2lkIiwidmFsaWRhdGUiLCJpc1Bob25lTnVtYmVyIiwiaXNFbXB0eSIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJiaW5kSW5wdXRVc2VyTmFtZSIsImJpbmRJbnB1dEhvdGVsIiwiYmluZENoYW5uZWxDaGFuZ2UiLCJpbmRleCIsImdldERpc3RyaWJ1dGlvblRlYW1zIiwiYmluZEF0dGVudENoYW5nZSIsImJpbmRBdHRlbmRDaXR5Q2hhbmdlIiwiYmluZE1lcnJ5Q2l0eUNoYW5nZSIsInZhbHVlcyIsImJpbmRNZXJyeURhdGVDaGFuZ2UiLCJzdWJtaXQiLCJmb3JtX2RhdGEiLCJjaGFubmVsX2lkIiwiaW50ZW50aW9uX2NpdHkiLCJ3ZWRkaW5nX3Byb3ZpbmNlX25hbWUiLCJ3ZWRkaW5nX2NpdHlfbmFtZSIsIndlZGRpbmdfYXJlYV9uYW1lIiwid2VkZGluZ19kYXRlIiwiY29tbV9wcm9vZiIsImpvaW4iLCJpc19zZXJ2ZXIiLCJzaG93TG9hZGluZyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZW1wbG95ZWVfdGVhbV9pZCIsInVuc2hpZnQiLCJlbXBsb3llZV9uYW1lIiwiZW1wbG95ZWVfbGlzdCIsInRlYW1fbmFtZSIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUs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LEVBRjdEO0FBR0RzQyx3QkFBZ0J2QyxLQUFLakQsU0FBTCxDQUFld0IsUUFBZixDQUF3QnlCLEtBQUt2QixpQkFBN0IsRUFBZ0R3QjtBQUgvRCxPQVRIO0FBY0Q7OzsyQkFDTXNELE8sRUFBUztBQUNkLFVBQUl2RCxPQUFPLElBQVg7QUFDQSxXQUFLbEMsSUFBTCxHQUFZcUQsZUFBS3FDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBbEQsd0JBQUdDLEdBQUgsQ0FBTyxhQUFQLEVBQXNCO0FBQ3BCLGFBQUssbUJBQVU7QUFDYlAsZUFBS2pELFNBQUwsR0FBaUI2RCxPQUFPakUsSUFBeEI7QUFDQXFELGVBQUtqQyxXQUFMLEdBQW1CaUMsS0FBS2pELFNBQUwsQ0FBZWdCLFdBQWxDO0FBQ0FpQyxlQUFLekIsUUFBTCxHQUFnQnlCLEtBQUtqRCxTQUFMLENBQWV3QixRQUEvQjtBQUNBeUIsZUFBSzdCLGFBQUwsR0FBcUI2QixLQUFLakQsU0FBTCxDQUFlb0IsYUFBcEM7QUFDQTZCLGVBQUtRLE1BQUw7QUFDQVIsZUFBSzhCLG9CQUFMO0FBQ0Q7QUFSbUIsT0FBdEI7QUFVQSxXQUFLL0MsVUFBTCxHQUFrQm9DLGVBQUtxQyxjQUFMLENBQW9CLGFBQXBCLENBQWxCO0FBQ0Q7Ozs2QkFDUSxDQUFHOzs7O0VBcFVxQnJDLGVBQUtzQyxJOztrQkFBbkJ6SCxLIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IEMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG5pbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IG1waWNrZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tcGlja2VyJztcbmltcG9ydCBucGlja2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbXBpY2tlcic7XG5pbXBvcnQgb3BpY2tlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21waWNrZXInO1xuaW1wb3J0IHVwbG9hZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vdXBsb2FkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcIm1waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImNoYW5uZWxJbmZvXCIsXCJ2LWJpbmQ6cmFuZ19kaXNwbGF5LnN5bmNcIjpcImNoYW5uZWxfZGlzcGxheVwiLFwidi1iaW5kOnJhbmdfaW5kZXguc3luY1wiOlwiY2hhbm5lbF9pbmRleFwiLFwidi1iaW5kOnJhbmdfa2V5LnN5bmNcIjpcImNoYW5uZWxfa2V5X25hbWVcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIm5waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImludGVudGlvbkluZm9cIixcInYtYmluZDpyYW5nX2Rpc3BsYXkuc3luY1wiOlwiaW50ZW50aW9uX2Rpc3BsYXlcIixcInYtYmluZDpyYW5nX2luZGV4LnN5bmNcIjpcImludGVudF9pbmRleFwiLFwidi1iaW5kOnJhbmdfa2V5LnN5bmNcIjpcImludGVudGlvbl9rZXlfbmFtZVwifSxcIm9waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImNpdHlJbmZvXCIsXCJ2LWJpbmQ6cmFuZ19kaXNwbGF5LnN5bmNcIjpcImNpdHlfZGlzcGxheVwiLFwidi1iaW5kOnJhbmdfaW5kZXguc3luY1wiOlwiYXR0ZW5kX2NpdHlfaW5kZXhcIixcInYtYmluZDpyYW5nX2tleS5zeW5jXCI6XCJjaXR5X2tleV9uYW1lXCJ9LFwidXBsb2FkXCI6e1wibGFiZWxcIjpcIuayn+mAmuivgeaYjlwiLFwic2l6ZVwiOlwiOVwiLFwidi1iaW5kOnNhdmVfb2JqLnN5bmNcIjpcInVwbGFvZGVkXCIsXCJudGtleVwiOlwiaW1hZ2VzXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn19O1xyXG4kZXZlbnRzID0ge1wibXBpY2tlclwiOntcInYtb246Y2hhbmdlTXBcIjpcImJpbmRDaGFubmVsQ2hhbmdlXCJ9LFwibnBpY2tlclwiOntcInYtb246Y2hhbmdlTXBcIjpcImJpbmRBdHRlbnRDaGFuZ2VcIn0sXCJvcGlja2VyXCI6e1widi1vbjpjaGFuZ2VNcFwiOlwiYmluZEF0dGVuZENpdHlDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBtcGlja2VyOiBtcGlja2VyLFxuICAgIG5waWNrZXI6IG5waWNrZXIsXG4gICAgb3BpY2tlcjogb3BpY2tlcixcbiAgICB1cGxvYWQ6IHVwbG9hZFxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+WPkeW4g+Wuoui1hCcsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICB0ZWFtczogbnVsbCxcbiAgICB0ZWFtc19yYW5kOiBbJ+WFqOmDqCddLFxuICAgIHRlYW1zX2luZGV4OiAwLFxuICAgIG1lcnJ5X2NpdHlfaW5kZXg6IDAsXG4gICAgbWVycnlfZGF0ZTogJ+ivt+mAieaLqeWpmuekvOaXtumXtCcsXG4gICAgd2VkZGluZ19ob3RlbDogJycsXG4gICAgdXNlcl9uYW1lOiAnJyxcbiAgICB1c2VyX21vYmlsZTogJycsXG4gICAgd2VjaGF0X2lkOiAnJyxcbiAgICB1c2VyX3JlbWFyazogJycsXG4gICAgZXhpdF91c2VyOiBudWxsLFxuXG4gICAgc3VibWl0X2xvY2s6IGZhbHNlLFxuICAgIGF1dG9fYWxsb3Q6IHRydWUsXG4gICAgcmVnaW9uOiBbJy0nLCAnLScsICctJ10sXG4gICAgdXNlcjogbnVsbCxcbiAgICBjaGFubmVsSW5mbzogW10sXG4gICAgY2hhbm5lbF9rZXlfbmFtZTogJ2NoYW5uZWxfbmFtZScsXG4gICAgY2hhbm5lbF9pbmRleDogMCxcbiAgICBjaGFubmVsX2Rpc3BsYXk6IGZhbHNlLFxuICAgIGludGVudGlvbkluZm86IFtdLFxuICAgIGludGVudGlvbl9rZXlfbmFtZTogJ2ludGVudGlvbl9uYW1lJyxcbiAgICBpbnRlbnRfaW5kZXg6IDAsXG4gICAgaW50ZW50aW9uX2Rpc3BsYXk6IGZhbHNlLFxuICAgIGNpdHlJbmZvOiBbXSxcbiAgICBjaXR5X2tleV9uYW1lOiAnY2l0eV9uYW1lJyxcbiAgICBhdHRlbmRfY2l0eV9pbmRleDogMCxcbiAgICBjaXR5X2Rpc3BsYXk6IGZhbHNlLFxuICAgIHRlYW1fbWVtYmVyczogbnVsbCxcbiAgICB0ZWFtX21lbWJlcnNfaW5kZXg6IDAsXG5cbiAgICBpc19zdWJtaXQ6IDEsXG4gICAgaXNfb2xkOiAwLFxuXG4gICAgZGVwYXJ0bWVudDogJycsXG5cbiAgICByZWFkb25seTogZmFsc2UsXG4gICAgdXBsYW9kZWQ6IHtcbiAgICAgIGltYWdlczogW10sXG4gICAgfSxcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kQ2hhbmdlRW1wbG95ZWUoZSkge1xuICAgICAgdGhpcy50ZWFtX21lbWJlcnNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHNob3dDaGFubmVsUGFubmVsKCkge1xuICAgICAgdGhpcy5jaGFubmVsX2Rpc3BsYXkgPSB0cnVlO1xuICAgIH0sXG4gICAgc2hvd0F0dGVudGlvblBhbm5lbCgpIHtcbiAgICAgIHRoaXMuaW50ZW50aW9uX2Rpc3BsYXkgPSB0cnVlO1xuICAgIH0sXG4gICAgc2hvd0NpdHlQYW5uZWwoKSB7XG4gICAgICB0aGlzLmNpdHlfZGlzcGxheSA9IHRydWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRUZWFtQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMudGVhbXNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIC8vIGlmICh0aGlzLmRlcGFydG1lbnQgPT0gJ21hcnJ5Jykge1xuICAgICAgICB0aGlzLnRlYW1fbWVtYmVyc19pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZ2V0VGVhbUVtcGxveWVlKHRoaXMudGVhbXNbdGhpcy50ZWFtc19pbmRleF0udGVhbV9pZCk7XG4gICAgICAvLyB9XG4gICAgfSxcbiAgICB0b2dnbGVBdXRvQWxsb3QoKSB7XG4gICAgICB0aGlzLmF1dG9fYWxsb3QgPSAhdGhpcy5hdXRvX2FsbG90XG4gICAgfSxcbiAgICBjbG9zZVVzZXIoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBjb25zb2xlLmxvZyh0aGF0LmV4aXRfdXNlcik7XG4gICAgICBycS5nZXQoJ2Nsb3NlVXNlcicsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gbnVsbDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGlkOiB0aGF0LmV4aXRfdXNlci5pZFxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgdGhpcy51c2VyX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0V3hDb3VudChlKSB7XG4gICAgICB0aGlzLndlY2hhdF9pZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgY2hlY2tQaG9uZU51bWUoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgcnEuZ2V0KCdpc0V4aXN0VXNlcicsIHtcbiAgICAgICAgMjAxOiByZXN1bHQgPT4ge1xuICAgICAgICAgIGxldCB1c2VyID0gcmVzdWx0LmRhdGEudXNlckluZm87XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHVzZXIpIHtcbiAgICAgICAgICAgIGlmICghdXNlcltrZXldKSB7XG4gICAgICAgICAgICAgIHVzZXJba2V5XSA9ICctJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSB1c2VyO1xuICAgICAgICAgIHRoYXQuaXNfc3VibWl0ID0gcmVzdWx0LmRhdGEuaXNfc3VibWl0O1xuICAgICAgICAgIHRoYXQuaXNfb2xkID0gcmVzdWx0LmRhdGEuaXNfb2xkO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IG51bGw7XG4gICAgICAgICAgdGhhdC5pc19zdWJtaXQgPSByZXN1bHQuZGF0YS5pc19zdWJtaXQ7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB1c2VyX21vYmlsZTogdGhhdC51c2VyX21vYmlsZSxcbiAgICAgICAgd2VjaGF0X2lkOiB0aGF0LndlY2hhdF9pZCxcbiAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZFxuICAgICAgfSlcbiAgICAgIGlmICghdmFsaWRhdGUuaXNQaG9uZU51bWJlcih0aGlzLnVzZXJfbW9iaWxlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh0aGlzLnVzZXJfbW9iaWxlKSkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fkuI3mraPnoa4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFVzZXJNb2JpbGUoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhhdC51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgdGhpcy51c2VyX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEhvdGVsKGUpIHtcbiAgICAgIHRoaXMud2VkZGluZ19ob3RlbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZENoYW5uZWxDaGFuZ2UoaW5kZXgpIHtcbiAgICAgIHRoaXMuY2hhbm5lbF9pbmRleCA9IGluZGV4O1xuICAgICAgY29uc29sZS5sb2coJ2NkcycpO1xuICAgICAgdGhpcy5nZXREaXN0cmlidXRpb25UZWFtcygpO1xuICAgIH0sXG4gICAgYmluZEF0dGVudENoYW5nZShpbmRleCkge1xuICAgICAgdGhpcy5pbnRlbnRfaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICB9LFxuICAgIGJpbmRBdHRlbmRDaXR5Q2hhbmdlKGluZGV4KSB7XG4gICAgICB0aGlzLmF0dGVuZF9jaXR5X2luZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgfSxcbiAgICBiaW5kTWVycnlDaXR5Q2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMucmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLm1lcnJ5X2NpdHlfaW5kZXggPSB2YWx1ZXNbMF0gKyAnICcgKyB2YWx1ZXNbMV07XG4gICAgfSxcbiAgICBiaW5kTWVycnlEYXRlQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMubWVycnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYgKHRoYXQuc3VibWl0X2xvY2spIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1fZGF0YSA9IHtcbiAgICAgICAgY2hhbm5lbF9pZDogdGhhdC5wYWdlX2RhdGEuY2hhbm5lbEluZm9bdGhhdC5jaGFubmVsX2luZGV4XS5pZCxcbiAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgaW50ZW50aW9uX2NpdHk6IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvW3RoYXQuYXR0ZW5kX2NpdHlfaW5kZXhdLmlkLFxuICAgICAgICB3ZWRkaW5nX3Byb3ZpbmNlX25hbWU6IHRoYXQucmVnaW9uWzBdLFxuICAgICAgICB3ZWRkaW5nX2NpdHlfbmFtZTogdGhhdC5yZWdpb25bMV0sXG4gICAgICAgIHdlZGRpbmdfYXJlYV9uYW1lOiB0aGF0LnJlZ2lvblsyXSxcbiAgICAgICAgd2VkZGluZ19ob3RlbDogdGhhdC53ZWRkaW5nX2hvdGVsLFxuICAgICAgICB3ZWRkaW5nX2RhdGU6IHRoYXQubWVycnlfZGF0ZSA9PSAn6K+36YCJ5oup5ama56S85pe26Ze0JyA/ICcnIDogdGhhdC5tZXJyeV9kYXRlLFxuICAgICAgICB1c2VyX25hbWU6IHRoYXQudXNlcl9uYW1lLFxuICAgICAgICB1c2VyX21vYmlsZTogdGhhdC51c2VyX21vYmlsZSxcbiAgICAgICAgd2VjaGF0X2lkOiB0aGF0LndlY2hhdF9pZCxcbiAgICAgICAgY29tbV9wcm9vZjogdGhhdC51cGxhb2RlZC5pbWFnZXMuam9pbignLCcpLFxuICAgICAgICB1c2VyX3JlbWFyazogdGhhdC51c2VyX3JlbWFya1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudXNlci5pc19zZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGVhbXNfaW5kZXggIT0gMCkge1xuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudGVhbXNfaW5kZXg7XG4gICAgICAgICAgZm9ybV9kYXRhLnRlYW1faWQgPSB0aGlzLnRlYW1zW2luZGV4XS50ZWFtX2lkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRlYW1fbWVtYmVyc19pbmRleCAhPSAwKSB7XG4gICAgICAgICAgZm9ybV9kYXRhWydlbXBsb3llZV9pZCddID0gdGhpcy50ZWFtX21lbWJlcnNbdGhhdC50ZWFtX21lbWJlcnNfaW5kZXhdLmlkXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtX2RhdGEudXNlcl9tb2JpbGUgJiYgIWZvcm1fZGF0YS53ZWNoYXRfaWQpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5paw5Lq65omL5py65oiW5b6u5L+hJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZvcm1fZGF0YS51c2VyX21vYmlsZSAmJiAhdmFsaWRhdGUuaXNQaG9uZU51bWJlcihmb3JtX2RhdGEudXNlcl9tb2JpbGUpKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPtycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGF0LmlzX3N1Ym1pdCA9PSAwKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+W3suWtmOWcqOebuOWQjOWuoui1hCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3VibWl0X2xvY2sgPSB0cnVlO1xuICAgICAgcnEuZ2V0KCdpc0V4aXN0VXNlcicsIHtcbiAgICAgICAgMjAxOiByZXN1bHQgPT4ge1xuICAgICAgICAgIGxldCB1c2VyID0gcmVzdWx0LmRhdGEudXNlckluZm87XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHVzZXIpIHtcbiAgICAgICAgICAgIGlmICghdXNlcltrZXldKSB7XG4gICAgICAgICAgICAgIHVzZXJba2V5XSA9ICctJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhhdC5zdWJtaXRfbG9jayA9IGZhbHNlO1xuICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gdXNlcjtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5bey5a2Y5Zyo55u45ZCM5a6i6LWEJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IG51bGw7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5LitLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBycS5nZXQoJ2luc2VydFVzZXJJbmZvJywge1xuICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmb3JtX2RhdGEpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LnVzZXJfbW9iaWxlLFxuICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQud2VjaGF0X2lkLFxuICAgICAgICBpbnRlbnRpb25faWQ6IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm9bdGhhdC5pbnRlbnRfaW5kZXhdLmlkXG4gICAgICB9KVxuICAgIH1cbiAgfTtcbiAgZ2V0VGVhbUVtcGxveWVlKGVtcGxveWVlX3RlYW1faWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXRUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChlbXBsb3llZV90ZWFtX2lkID09IDApIHtcbiAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IFtdO1xuICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzLnVuc2hpZnQoe1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6YCJ5oup5Zui6Zif5ZCO5YaN6YCJ5oup5omn6KGM5Lq6J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzLnVuc2hpZnQoe1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6K+36YCJ5oupJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBlbXBsb3llZV90ZWFtX2lkOiBlbXBsb3llZV90ZWFtX2lkXG4gICAgfSlcbiAgfVxuICBnZXREaXN0cmlidXRpb25UZWFtcygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQudGVhbXMudW5zaGlmdCh7XG4gICAgICAgICAgdGVhbV9pZDogMCxcbiAgICAgICAgICB0ZWFtX25hbWU6ICflhajpg6gnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGNoYW5uZWxfaWQ6IHRoYXQucGFnZV9kYXRhLmNoYW5uZWxJbmZvW3RoYXQuY2hhbm5lbF9pbmRleF0uaWQsXG4gICAgICBpbnRlbnRpb25faWQ6IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm9bdGhhdC5pbnRlbnRfaW5kZXhdLmlkLFxuICAgICAgaW50ZW50aW9uX2NpdHk6IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvW3RoYXQuYXR0ZW5kX2NpdHlfaW5kZXhdLmlkLFxuICAgIH0pXG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHJxLmdldCgnZ2V0SW5pdERhdGEnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRoYXQuY2hhbm5lbEluZm8gPSB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsSW5mbztcbiAgICAgICAgdGhhdC5jaXR5SW5mbyA9IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvO1xuICAgICAgICB0aGF0LmludGVudGlvbkluZm8gPSB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB0aGF0LmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRlcGFydG1lbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19