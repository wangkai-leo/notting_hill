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
          // if (this.department == 'artcenter') {
          //   form_data.auto_distribution = that.auto_allot ? '1' : '0'
          // }
          if (this.department == 'marry' && this.team_members_index != 0) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJtcGlja2VyIiwibnBpY2tlciIsIm9waWNrZXIiLCJ1cGxvYWQiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2RhdGEiLCJ0ZWFtcyIsInRlYW1zX3JhbmQiLCJ0ZWFtc19pbmRleCIsIm1lcnJ5X2NpdHlfaW5kZXgiLCJtZXJyeV9kYXRlIiwid2VkZGluZ19ob3RlbCIsInVzZXJfbmFtZSIsInVzZXJfbW9iaWxlIiwid2VjaGF0X2lkIiwidXNlcl9yZW1hcmsiLCJleGl0X3VzZXIiLCJzdWJtaXRfbG9jayIsImF1dG9fYWxsb3QiLCJyZWdpb24iLCJ1c2VyIiwiY2hhbm5lbEluZm8iLCJjaGFubmVsX2tleV9uYW1lIiwiY2hhbm5lbF9pbmRleCIsImNoYW5uZWxfZGlzcGxheSIsImludGVudGlvbkluZm8iLCJpbnRlbnRpb25fa2V5X25hbWUiLCJpbnRlbnRfaW5kZXgiLCJpbnRlbnRpb25fZGlzcGxheSIsImNpdHlJbmZvIiwiY2l0eV9rZXlfbmFtZSIsImF0dGVuZF9jaXR5X2luZGV4IiwiY2l0eV9kaXNwbGF5IiwidGVhbV9tZW1iZXJzIiwidGVhbV9tZW1iZXJzX2luZGV4IiwiaXNfc3VibWl0IiwiaXNfb2xkIiwiZGVwYXJ0bWVudCIsInJlYWRvbmx5IiwidXBsYW9kZWQiLCJpbWFnZXMiLCJtZXRob2RzIiwiYmluZENoYW5nZUVtcGxveWVlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2hvd0NoYW5uZWxQYW5uZWwiLCJzaG93QXR0ZW50aW9uUGFubmVsIiwic2hvd0NpdHlQYW5uZWwiLCJiaW5kSW5wdXRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwidGVhbV9pZCIsInRvZ2dsZUF1dG9BbGxvdCIsImNsb3NlVXNlciIsInRoYXQiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsInJxIiwiZ2V0IiwiJGFwcGx5IiwiYmluZElucHV0TWFyayIsImJpbmRJbnB1dFd4Q291bnQiLCJjaGVja1Bob25lTnVtZSIsInJlc3VsdCIsInVzZXJJbmZvIiwia2V5IiwiaW50ZW50aW9uX2lkIiwidmFsaWRhdGUiLCJpc1Bob25lTnVtYmVyIiwiaXNFbXB0eSIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJiaW5kSW5wdXRVc2VyTmFtZSIsImJpbmRJbnB1dEhvdGVsIiwiYmluZENoYW5uZWxDaGFuZ2UiLCJpbmRleCIsImdldERpc3RyaWJ1dGlvblRlYW1zIiwiYmluZEF0dGVudENoYW5nZSIsImJpbmRBdHRlbmRDaXR5Q2hhbmdlIiwiYmluZE1lcnJ5Q2l0eUNoYW5nZSIsInZhbHVlcyIsImJpbmRNZXJyeURhdGVDaGFuZ2UiLCJzdWJtaXQiLCJmb3JtX2RhdGEiLCJjaGFubmVsX2lkIiwiaW50ZW50aW9uX2NpdHkiLCJ3ZWRkaW5nX3Byb3ZpbmNlX25hbWUiLCJ3ZWRkaW5nX2NpdHlfbmFtZSIsIndlZGRpbmdfYXJlYV9uYW1lIiwid2VkZGluZ19kYXRlIiwiY29tbV9wcm9vZiIsImpvaW4iLCJpc19zZXJ2ZXIiLCJzaG93TG9hZGluZyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZW1wbG95ZWVfdGVhbV9pZCIsInVuc2hpZnQiLCJlbXBsb3llZV9uYW1lIiwiZW1wbG95ZWVfbGlzdCIsInRlYW1fbmFtZSIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUs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QUwsQ0FBZW9CLGFBQWYsQ0FBNkI2QixLQUFLM0IsWUFBbEMsRUFBZ0Q0QixFQUY3RDtBQUdEc0Msd0JBQWdCdkMsS0FBS2pELFNBQUwsQ0FBZXdCLFFBQWYsQ0FBd0J5QixLQUFLdkIsaUJBQTdCLEVBQWdEd0I7QUFIL0QsT0FUSDtBQWNEOzs7MkJBQ01zRCxPLEVBQVM7QUFDZCxVQUFJdkQsT0FBTyxJQUFYO0FBQ0EsV0FBS2xDLElBQUwsR0FBWXFELGVBQUtxQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQWxELHdCQUFHQyxHQUFILENBQU8sYUFBUCxFQUFzQjtBQUNwQixhQUFLLG1CQUFVO0FBQ2JQLGVBQUtqRCxTQUFMLEdBQWlCNkQsT0FBT2pFLElBQXhCO0FBQ0FxRCxlQUFLakMsV0FBTCxHQUFtQmlDLEtBQUtqRCxTQUFMLENBQWVnQixXQUFsQztBQUNBaUMsZUFBS3pCLFFBQUwsR0FBZ0J5QixLQUFLakQsU0FBTCxDQUFld0IsUUFBL0I7QUFDQXlCLGVBQUs3QixhQUFMLEdBQXFCNkIsS0FBS2pELFNBQUwsQ0FBZW9CLGFBQXBDO0FBQ0E2QixlQUFLUSxNQUFMO0FBQ0FSLGVBQUs4QixvQkFBTDtBQUNEO0FBUm1CLE9BQXRCO0FBVUEsV0FBSy9DLFVBQUwsR0FBa0JvQyxlQUFLcUMsY0FBTCxDQUFvQixhQUFwQixDQUFsQjtBQUNEOzs7NkJBQ1EsQ0FBRzs7OztFQXZVcUJyQyxlQUFLc0MsSTs7a0JBQW5CekgsSyIsImZpbGUiOiJwdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBtcGlja2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbXBpY2tlcic7XG5pbXBvcnQgbnBpY2tlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21waWNrZXInO1xuaW1wb3J0IG9waWNrZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tcGlja2VyJztcbmltcG9ydCB1cGxvYWQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL3VwbG9hZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJtcGlja2VyXCI6e1widi1iaW5kOnJhbmdfZGF0YS5zeW5jXCI6XCJjaGFubmVsSW5mb1wiLFwidi1iaW5kOnJhbmdfZGlzcGxheS5zeW5jXCI6XCJjaGFubmVsX2Rpc3BsYXlcIixcInYtYmluZDpyYW5nX2luZGV4LnN5bmNcIjpcImNoYW5uZWxfaW5kZXhcIixcInYtYmluZDpyYW5nX2tleS5zeW5jXCI6XCJjaGFubmVsX2tleV9uYW1lXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJucGlja2VyXCI6e1widi1iaW5kOnJhbmdfZGF0YS5zeW5jXCI6XCJpbnRlbnRpb25JbmZvXCIsXCJ2LWJpbmQ6cmFuZ19kaXNwbGF5LnN5bmNcIjpcImludGVudGlvbl9kaXNwbGF5XCIsXCJ2LWJpbmQ6cmFuZ19pbmRleC5zeW5jXCI6XCJpbnRlbnRfaW5kZXhcIixcInYtYmluZDpyYW5nX2tleS5zeW5jXCI6XCJpbnRlbnRpb25fa2V5X25hbWVcIn0sXCJvcGlja2VyXCI6e1widi1iaW5kOnJhbmdfZGF0YS5zeW5jXCI6XCJjaXR5SW5mb1wiLFwidi1iaW5kOnJhbmdfZGlzcGxheS5zeW5jXCI6XCJjaXR5X2Rpc3BsYXlcIixcInYtYmluZDpyYW5nX2luZGV4LnN5bmNcIjpcImF0dGVuZF9jaXR5X2luZGV4XCIsXCJ2LWJpbmQ6cmFuZ19rZXkuc3luY1wiOlwiY2l0eV9rZXlfbmFtZVwifSxcInVwbG9hZFwiOntcImxhYmVsXCI6XCLmsp/pgJror4HmmI5cIixcInNpemVcIjpcIjlcIixcInYtYmluZDpzYXZlX29iai5zeW5jXCI6XCJ1cGxhb2RlZFwiLFwibnRrZXlcIjpcImltYWdlc1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCJ9fTtcclxuJGV2ZW50cyA9IHtcIm1waWNrZXJcIjp7XCJ2LW9uOmNoYW5nZU1wXCI6XCJiaW5kQ2hhbm5lbENoYW5nZVwifSxcIm5waWNrZXJcIjp7XCJ2LW9uOmNoYW5nZU1wXCI6XCJiaW5kQXR0ZW50Q2hhbmdlXCJ9LFwib3BpY2tlclwiOntcInYtb246Y2hhbmdlTXBcIjpcImJpbmRBdHRlbmRDaXR5Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgbXBpY2tlcjogbXBpY2tlcixcbiAgICBucGlja2VyOiBucGlja2VyLFxuICAgIG9waWNrZXI6IG9waWNrZXIsXG4gICAgdXBsb2FkOiB1cGxvYWRcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflj5HluIPlrqLotYQnLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBwYWdlX2RhdGE6IG51bGwsXG4gICAgdGVhbXM6IG51bGwsXG4gICAgdGVhbXNfcmFuZDogWyflhajpg6gnXSxcbiAgICB0ZWFtc19pbmRleDogMCxcbiAgICBtZXJyeV9jaXR5X2luZGV4OiAwLFxuICAgIG1lcnJ5X2RhdGU6ICfor7fpgInmi6nlqZrnpLzml7bpl7QnLFxuICAgIHdlZGRpbmdfaG90ZWw6ICcnLFxuICAgIHVzZXJfbmFtZTogJycsXG4gICAgdXNlcl9tb2JpbGU6ICcnLFxuICAgIHdlY2hhdF9pZDogJycsXG4gICAgdXNlcl9yZW1hcms6ICcnLFxuICAgIGV4aXRfdXNlcjogbnVsbCxcblxuICAgIHN1Ym1pdF9sb2NrOiBmYWxzZSxcbiAgICBhdXRvX2FsbG90OiB0cnVlLFxuICAgIHJlZ2lvbjogWyctJywgJy0nLCAnLSddLFxuICAgIHVzZXI6IG51bGwsXG4gICAgY2hhbm5lbEluZm86IFtdLFxuICAgIGNoYW5uZWxfa2V5X25hbWU6ICdjaGFubmVsX25hbWUnLFxuICAgIGNoYW5uZWxfaW5kZXg6IDAsXG4gICAgY2hhbm5lbF9kaXNwbGF5OiBmYWxzZSxcbiAgICBpbnRlbnRpb25JbmZvOiBbXSxcbiAgICBpbnRlbnRpb25fa2V5X25hbWU6ICdpbnRlbnRpb25fbmFtZScsXG4gICAgaW50ZW50X2luZGV4OiAwLFxuICAgIGludGVudGlvbl9kaXNwbGF5OiBmYWxzZSxcbiAgICBjaXR5SW5mbzogW10sXG4gICAgY2l0eV9rZXlfbmFtZTogJ2NpdHlfbmFtZScsXG4gICAgYXR0ZW5kX2NpdHlfaW5kZXg6IDAsXG4gICAgY2l0eV9kaXNwbGF5OiBmYWxzZSxcbiAgICB0ZWFtX21lbWJlcnM6IG51bGwsXG4gICAgdGVhbV9tZW1iZXJzX2luZGV4OiAwLFxuXG4gICAgaXNfc3VibWl0OiAxLFxuICAgIGlzX29sZDogMCxcblxuICAgIGRlcGFydG1lbnQ6ICcnLFxuXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHVwbGFvZGVkOiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgIH0sXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZENoYW5nZUVtcGxveWVlKGUpIHtcbiAgICAgIHRoaXMudGVhbV9tZW1iZXJzX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBzaG93Q2hhbm5lbFBhbm5lbCgpIHtcbiAgICAgIHRoaXMuY2hhbm5lbF9kaXNwbGF5ID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNob3dBdHRlbnRpb25QYW5uZWwoKSB7XG4gICAgICB0aGlzLmludGVudGlvbl9kaXNwbGF5ID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNob3dDaXR5UGFubmVsKCkge1xuICAgICAgdGhpcy5jaXR5X2Rpc3BsYXkgPSB0cnVlO1xuICAgIH0sXG4gICAgYmluZElucHV0VGVhbUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnRlYW1zX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAvLyBpZiAodGhpcy5kZXBhcnRtZW50ID09ICdtYXJyeScpIHtcbiAgICAgICAgdGhpcy50ZWFtX21lbWJlcnNfaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmdldFRlYW1FbXBsb3llZSh0aGlzLnRlYW1zW3RoaXMudGVhbXNfaW5kZXhdLnRlYW1faWQpO1xuICAgICAgLy8gfVxuICAgIH0sXG4gICAgdG9nZ2xlQXV0b0FsbG90KCkge1xuICAgICAgdGhpcy5hdXRvX2FsbG90ID0gIXRoaXMuYXV0b19hbGxvdFxuICAgIH0sXG4gICAgY2xvc2VVc2VyKGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgY29uc29sZS5sb2codGhhdC5leGl0X3VzZXIpO1xuICAgICAgcnEuZ2V0KCdjbG9zZVVzZXInLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IG51bGw7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBpZDogdGhhdC5leGl0X3VzZXIuaWRcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kSW5wdXRNYXJrKGUpIHtcbiAgICAgIHRoaXMudXNlcl9yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFd4Q291bnQoZSkge1xuICAgICAgdGhpcy53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGNoZWNrUGhvbmVOdW1lKGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHJxLmdldCgnaXNFeGlzdFVzZXInLCB7XG4gICAgICAgIDIwMTogcmVzdWx0ID0+IHtcbiAgICAgICAgICBsZXQgdXNlciA9IHJlc3VsdC5kYXRhLnVzZXJJbmZvO1xuICAgICAgICAgIGZvciAobGV0IGtleSBpbiB1c2VyKSB7XG4gICAgICAgICAgICBpZiAoIXVzZXJba2V5XSkge1xuICAgICAgICAgICAgICB1c2VyW2tleV0gPSAnLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gdXNlcjtcbiAgICAgICAgICB0aGF0LmlzX3N1Ym1pdCA9IHJlc3VsdC5kYXRhLmlzX3N1Ym1pdDtcbiAgICAgICAgICB0aGF0LmlzX29sZCA9IHJlc3VsdC5kYXRhLmlzX29sZDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSBudWxsO1xuICAgICAgICAgIHRoYXQuaXNfc3VibWl0ID0gcmVzdWx0LmRhdGEuaXNfc3VibWl0O1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdXNlcl9tb2JpbGU6IHRoYXQudXNlcl9tb2JpbGUsXG4gICAgICAgIHdlY2hhdF9pZDogdGhhdC53ZWNoYXRfaWQsXG4gICAgICAgIGludGVudGlvbl9pZDogdGhhdC5wYWdlX2RhdGEuaW50ZW50aW9uSW5mb1t0aGF0LmludGVudF9pbmRleF0uaWRcbiAgICAgIH0pXG4gICAgICBpZiAoIXZhbGlkYXRlLmlzUGhvbmVOdW1iZXIodGhpcy51c2VyX21vYmlsZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodGhpcy51c2VyX21vYmlsZSkpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5omL5py65Y+35LiN5q2j56GuJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBiaW5kSW5wdXRVc2VyTW9iaWxlKGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQudXNlcl9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFVzZXJOYW1lKGUpIHtcbiAgICAgIHRoaXMudXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRIb3RlbChlKSB7XG4gICAgICB0aGlzLndlZGRpbmdfaG90ZWwgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRDaGFubmVsQ2hhbmdlKGluZGV4KSB7XG4gICAgICB0aGlzLmNoYW5uZWxfaW5kZXggPSBpbmRleDtcbiAgICAgIGNvbnNvbGUubG9nKCdjZHMnKTtcbiAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICB9LFxuICAgIGJpbmRBdHRlbnRDaGFuZ2UoaW5kZXgpIHtcbiAgICAgIHRoaXMuaW50ZW50X2luZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgfSxcbiAgICBiaW5kQXR0ZW5kQ2l0eUNoYW5nZShpbmRleCkge1xuICAgICAgdGhpcy5hdHRlbmRfY2l0eV9pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5nZXREaXN0cmlidXRpb25UZWFtcygpO1xuICAgIH0sXG4gICAgYmluZE1lcnJ5Q2l0eUNoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLnJlZ2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5tZXJyeV9jaXR5X2luZGV4ID0gdmFsdWVzWzBdICsgJyAnICsgdmFsdWVzWzFdO1xuICAgIH0sXG4gICAgYmluZE1lcnJ5RGF0ZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLm1lcnJ5X2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICh0aGF0LnN1Ym1pdF9sb2NrKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBmb3JtX2RhdGEgPSB7XG4gICAgICAgIGNoYW5uZWxfaWQ6IHRoYXQucGFnZV9kYXRhLmNoYW5uZWxJbmZvW3RoYXQuY2hhbm5lbF9pbmRleF0uaWQsXG4gICAgICAgIGludGVudGlvbl9pZDogdGhhdC5wYWdlX2RhdGEuaW50ZW50aW9uSW5mb1t0aGF0LmludGVudF9pbmRleF0uaWQsXG4gICAgICAgIGludGVudGlvbl9jaXR5OiB0aGF0LnBhZ2VfZGF0YS5jaXR5SW5mb1t0aGF0LmF0dGVuZF9jaXR5X2luZGV4XS5pZCxcbiAgICAgICAgd2VkZGluZ19wcm92aW5jZV9uYW1lOiB0aGF0LnJlZ2lvblswXSxcbiAgICAgICAgd2VkZGluZ19jaXR5X25hbWU6IHRoYXQucmVnaW9uWzFdLFxuICAgICAgICB3ZWRkaW5nX2FyZWFfbmFtZTogdGhhdC5yZWdpb25bMl0sXG4gICAgICAgIHdlZGRpbmdfaG90ZWw6IHRoYXQud2VkZGluZ19ob3RlbCxcbiAgICAgICAgd2VkZGluZ19kYXRlOiB0aGF0Lm1lcnJ5X2RhdGUgPT0gJ+ivt+mAieaLqeWpmuekvOaXtumXtCcgPyAnJyA6IHRoYXQubWVycnlfZGF0ZSxcbiAgICAgICAgdXNlcl9uYW1lOiB0aGF0LnVzZXJfbmFtZSxcbiAgICAgICAgdXNlcl9tb2JpbGU6IHRoYXQudXNlcl9tb2JpbGUsXG4gICAgICAgIHdlY2hhdF9pZDogdGhhdC53ZWNoYXRfaWQsXG4gICAgICAgIGNvbW1fcHJvb2Y6IHRoYXQudXBsYW9kZWQuaW1hZ2VzLmpvaW4oJywnKSxcbiAgICAgICAgdXNlcl9yZW1hcms6IHRoYXQudXNlcl9yZW1hcmtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVzZXIuaXNfc2VydmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnRlYW1zX2luZGV4ICE9IDApIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRlYW1zX2luZGV4O1xuICAgICAgICAgIGZvcm1fZGF0YS50ZWFtX2lkID0gdGhpcy50ZWFtc1tpbmRleF0udGVhbV9pZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5kZXBhcnRtZW50ID09ICdhcnRjZW50ZXInKSB7XG4gICAgICAgIC8vICAgZm9ybV9kYXRhLmF1dG9fZGlzdHJpYnV0aW9uID0gdGhhdC5hdXRvX2FsbG90ID8gJzEnIDogJzAnXG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMuZGVwYXJ0bWVudCA9PSAnbWFycnknICYmIHRoaXMudGVhbV9tZW1iZXJzX2luZGV4ICE9IDApIHtcbiAgICAgICAgICBmb3JtX2RhdGFbJ2VtcGxveWVlX2lkJ10gPSB0aGlzLnRlYW1fbWVtYmVyc1t0aGF0LnRlYW1fbWVtYmVyc19pbmRleF0uaWRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm1fZGF0YS51c2VyX21vYmlsZSAmJiAhZm9ybV9kYXRhLndlY2hhdF9pZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7floavlhpnmlrDkurrmiYvmnLrmiJblvq7kv6EnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZm9ybV9kYXRhLnVzZXJfbW9iaWxlICYmICF2YWxpZGF0ZS5pc1Bob25lTnVtYmVyKGZvcm1fZGF0YS51c2VyX21vYmlsZSkpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+3JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoYXQuaXNfc3VibWl0ID09IDApIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5bey5a2Y5Zyo55u45ZCM5a6i6LWEJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhhdC5zdWJtaXRfbG9jayA9IHRydWU7XG4gICAgICBycS5nZXQoJ2lzRXhpc3RVc2VyJywge1xuICAgICAgICAyMDE6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQuZGF0YS51c2VySW5mbztcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdXNlcikge1xuICAgICAgICAgICAgaWYgKCF1c2VyW2tleV0pIHtcbiAgICAgICAgICAgICAgdXNlcltrZXldID0gJy0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSB1c2VyO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflt7LlrZjlnKjnm7jlkIzlrqLotYQnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gbnVsbDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK0uLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJxLmdldCgnaW5zZXJ0VXNlckluZm8nLCB7XG4gICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZvcm1fZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdXNlcl9tb2JpbGU6IHRoYXQudXNlcl9tb2JpbGUsXG4gICAgICAgIHdlY2hhdF9pZDogdGhhdC53ZWNoYXRfaWQsXG4gICAgICAgIGludGVudGlvbl9pZDogdGhhdC5wYWdlX2RhdGEuaW50ZW50aW9uSW5mb1t0aGF0LmludGVudF9pbmRleF0uaWRcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICBnZXRUZWFtRW1wbG95ZWUoZW1wbG95ZWVfdGVhbV9pZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldFRlYW1FbXBsb3llZScsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKGVtcGxveWVlX3RlYW1faWQgPT0gMCkge1xuICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzID0gW107XG4gICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGVtcGxveWVlX25hbWU6ICfpgInmi6nlm6LpmJ/lkI7lho3pgInmi6nmiafooYzkuronXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGVtcGxveWVlX25hbWU6ICfor7fpgInmi6knXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGVtcGxveWVlX3RlYW1faWQ6IGVtcGxveWVlX3RlYW1faWRcbiAgICB9KVxuICB9XG4gIGdldERpc3RyaWJ1dGlvblRlYW1zKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldERpc3RyaWJ1dGlvblRlYW1zJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnRlYW1zID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC50ZWFtcy51bnNoaWZ0KHtcbiAgICAgICAgICB0ZWFtX2lkOiAwLFxuICAgICAgICAgIHRlYW1fbmFtZTogJ+WFqOmDqCdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY2hhbm5lbF9pZDogdGhhdC5wYWdlX2RhdGEuY2hhbm5lbEluZm9bdGhhdC5jaGFubmVsX2luZGV4XS5pZCxcbiAgICAgIGludGVudGlvbl9pZDogdGhhdC5wYWdlX2RhdGEuaW50ZW50aW9uSW5mb1t0aGF0LmludGVudF9pbmRleF0uaWQsXG4gICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5wYWdlX2RhdGEuY2l0eUluZm9bdGhhdC5hdHRlbmRfY2l0eV9pbmRleF0uaWQsXG4gICAgfSlcbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgcnEuZ2V0KCdnZXRJbml0RGF0YScsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhhdC5jaGFubmVsSW5mbyA9IHRoYXQucGFnZV9kYXRhLmNoYW5uZWxJbmZvO1xuICAgICAgICB0aGF0LmNpdHlJbmZvID0gdGhhdC5wYWdlX2RhdGEuY2l0eUluZm87XG4gICAgICAgIHRoYXQuaW50ZW50aW9uSW5mbyA9IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm87XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIHRoYXQuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZGVwYXJ0bWVudCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29mZmljZV9saW5lJyk7XG4gIH1cbiAgb25TaG93KCkgeyB9XG59XG4iXX0=