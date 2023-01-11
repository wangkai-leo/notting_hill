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
            // show_img_arr: [],
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
                if (this.department == 'marry') {
                    this.team_members_index = 0;
                    this.getTeamEmployee(this.teams[this.teams_index].team_id);
                }
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
                        // console.log(that.exit_user);
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
                    if (this.department == 'artcenter') {
                        form_data.auto_distribution = that.auto_allot ? '1' : '0';
                    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJtcGlja2VyIiwibnBpY2tlciIsIm9waWNrZXIiLCJ1cGxvYWQiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2RhdGEiLCJ0ZWFtcyIsInRlYW1zX3JhbmQiLCJ0ZWFtc19pbmRleCIsIm1lcnJ5X2NpdHlfaW5kZXgiLCJtZXJyeV9kYXRlIiwid2VkZGluZ19ob3RlbCIsInVzZXJfbmFtZSIsInVzZXJfbW9iaWxlIiwid2VjaGF0X2lkIiwidXNlcl9yZW1hcmsiLCJleGl0X3VzZXIiLCJzdWJtaXRfbG9jayIsImF1dG9fYWxsb3QiLCJyZWdpb24iLCJ1c2VyIiwiY2hhbm5lbEluZm8iLCJjaGFubmVsX2tleV9uYW1lIiwiY2hhbm5lbF9pbmRleCIsImNoYW5uZWxfZGlzcGxheSIsImludGVudGlvbkluZm8iLCJpbnRlbnRpb25fa2V5X25hbWUiLCJpbnRlbnRfaW5kZXgiLCJpbnRlbnRpb25fZGlzcGxheSIsImNpdHlJbmZvIiwiY2l0eV9rZXlfbmFtZSIsImF0dGVuZF9jaXR5X2luZGV4IiwiY2l0eV9kaXNwbGF5IiwidGVhbV9tZW1iZXJzIiwidGVhbV9tZW1iZXJzX2luZGV4IiwiaXNfc3VibWl0IiwiZGVwYXJ0bWVudCIsInJlYWRvbmx5IiwidXBsYW9kZWQiLCJpbWFnZXMiLCJtZXRob2RzIiwiYmluZENoYW5nZUVtcGxveWVlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2hvd0NoYW5uZWxQYW5uZWwiLCJzaG93QXR0ZW50aW9uUGFubmVsIiwic2hvd0NpdHlQYW5uZWwiLCJiaW5kSW5wdXRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwidGVhbV9pZCIsInRvZ2dsZUF1dG9BbGxvdCIsImNsb3NlVXNlciIsInRoYXQiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsInJxIiwiZ2V0IiwiJGFwcGx5IiwiYmluZElucHV0TWFyayIsImJpbmRJbnB1dFd4Q291bnQiLCJjaGVja1Bob25lTnVtZSIsInJlc3VsdCIsInVzZXJJbmZvIiwia2V5IiwiaW50ZW50aW9uX2lkIiwidmFsaWRhdGUiLCJpc1Bob25lTnVtYmVyIiwiaXNFbXB0eSIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJiaW5kSW5wdXRVc2VyTmFtZSIsImJpbmRJbnB1dEhvdGVsIiwiYmluZENoYW5uZWxDaGFuZ2UiLCJpbmRleCIsImdldERpc3RyaWJ1dGlvblRlYW1zIiwiYmluZEF0dGVudENoYW5nZSIsImJpbmRBdHRlbmRDaXR5Q2hhbmdlIiwiYmluZE1lcnJ5Q2l0eUNoYW5nZSIsInZhbHVlcyIsImJpbmRNZXJyeURhdGVDaGFuZ2UiLCJzdWJtaXQiLCJmb3JtX2RhdGEiLCJjaGFubmVsX2lkIiwiaW50ZW50aW9uX2NpdHkiLCJ3ZWRkaW5nX3Byb3ZpbmNlX25hbWUiLCJ3ZWRkaW5nX2NpdHlfbmFtZSIsIndlZGRpbmdfYXJlYV9uYW1lIiwid2VkZGluZ19kYXRlIiwiY29tbV9wcm9vZiIsImpvaW4iLCJpc19zZXJ2ZXIiLCJhdXRvX2Rpc3RyaWJ1dGlvbiIsInNob3dMb2FkaW5nIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlbXBsb3llZV90ZWFtX2lkIiwidW5zaGlmdCIsImVtcGxveWVlX25hbWUiLCJlbXBsb3llZV9saXN0IiwidGVhbV9uYW1lIiwib3B0aW9ucyIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xC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QUFTLENBRE07QUFFZjBELG1DQUFXO0FBRkkscUJBQW5CO0FBSUF2RCx5QkFBS1EsTUFBTDtBQUNIO0FBUjBCLGFBQS9CLEVBU0c7QUFDQzhCLDRCQUFZdEMsS0FBS2hELFNBQUwsQ0FBZWdCLFdBQWYsQ0FBMkJnQyxLQUFLOUIsYUFBaEMsRUFBK0MrQixFQUQ1RDtBQUVDYyw4QkFBY2YsS0FBS2hELFNBQUwsQ0FBZW9CLGFBQWYsQ0FBNkI0QixLQUFLMUIsWUFBbEMsRUFBZ0QyQixFQUYvRDtBQUdDc0MsZ0NBQWdCdkMsS0FBS2hELFNBQUwsQ0FBZXdCLFFBQWYsQ0FBd0J3QixLQUFLdEIsaUJBQTdCLEVBQWdEdUI7QUFIakUsYUFUSDtBQWNIOzs7K0JBQ011RCxPLEVBQVM7QUFDWixnQkFBSXhELE9BQU8sSUFBWDtBQUNBLGlCQUFLakMsSUFBTCxHQUFZb0QsZUFBS3NDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNBbkQsOEJBQUdDLEdBQUgsQ0FBTyxhQUFQLEVBQXNCO0FBQ2xCLHFCQUFLLG1CQUFVO0FBQ1hQLHlCQUFLaEQsU0FBTCxHQUFpQjRELE9BQU9oRSxJQUF4QjtBQUNBb0QseUJBQUtoQyxXQUFMLEdBQW1CZ0MsS0FBS2hELFNBQUwsQ0FBZWdCLFdBQWxDO0FBQ0FnQyx5QkFBS3hCLFFBQUwsR0FBZ0J3QixLQUFLaEQsU0FBTCxDQUFld0IsUUFBL0I7QUFDQXdCLHlCQUFLNUIsYUFBTCxHQUFxQjRCLEtBQUtoRCxTQUFMLENBQWVvQixhQUFwQztBQUNBNEIseUJBQUtRLE1BQUw7QUFDQVIseUJBQUs4QixvQkFBTDtBQUNIO0FBUmlCLGFBQXRCO0FBVUEsaUJBQUsvQyxVQUFMLEdBQWdCb0MsZUFBS3NDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBaEI7QUFDSDs7O2lDQUNRLENBQUU7Ozs7RUF2VW9CdEMsZUFBS3VDLEk7O2tCQUFuQnpILEsiLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBpbXBvcnQgbXBpY2tlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21waWNrZXInO1xuICAgIGltcG9ydCBucGlja2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbXBpY2tlcic7XG4gICAgaW1wb3J0IG9waWNrZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tcGlja2VyJztcbiAgICBpbXBvcnQgdXBsb2FkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi91cGxvYWRcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcIm1waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImNoYW5uZWxJbmZvXCIsXCJ2LWJpbmQ6cmFuZ19kaXNwbGF5LnN5bmNcIjpcImNoYW5uZWxfZGlzcGxheVwiLFwidi1iaW5kOnJhbmdfaW5kZXguc3luY1wiOlwiY2hhbm5lbF9pbmRleFwiLFwidi1iaW5kOnJhbmdfa2V5LnN5bmNcIjpcImNoYW5uZWxfa2V5X25hbWVcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIm5waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImludGVudGlvbkluZm9cIixcInYtYmluZDpyYW5nX2Rpc3BsYXkuc3luY1wiOlwiaW50ZW50aW9uX2Rpc3BsYXlcIixcInYtYmluZDpyYW5nX2luZGV4LnN5bmNcIjpcImludGVudF9pbmRleFwiLFwidi1iaW5kOnJhbmdfa2V5LnN5bmNcIjpcImludGVudGlvbl9rZXlfbmFtZVwifSxcIm9waWNrZXJcIjp7XCJ2LWJpbmQ6cmFuZ19kYXRhLnN5bmNcIjpcImNpdHlJbmZvXCIsXCJ2LWJpbmQ6cmFuZ19kaXNwbGF5LnN5bmNcIjpcImNpdHlfZGlzcGxheVwiLFwidi1iaW5kOnJhbmdfaW5kZXguc3luY1wiOlwiYXR0ZW5kX2NpdHlfaW5kZXhcIixcInYtYmluZDpyYW5nX2tleS5zeW5jXCI6XCJjaXR5X2tleV9uYW1lXCJ9LFwidXBsb2FkXCI6e1wibGFiZWxcIjpcIuayn+mAmuivgeaYjlwiLFwic2l6ZVwiOlwiOVwiLFwidi1iaW5kOnNhdmVfb2JqLnN5bmNcIjpcInVwbGFvZGVkXCIsXCJudGtleVwiOlwiaW1hZ2VzXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn19O1xyXG4kZXZlbnRzID0ge1wibXBpY2tlclwiOntcInYtb246Y2hhbmdlTXBcIjpcImJpbmRDaGFubmVsQ2hhbmdlXCJ9LFwibnBpY2tlclwiOntcInYtb246Y2hhbmdlTXBcIjpcImJpbmRBdHRlbnRDaGFuZ2VcIn0sXCJvcGlja2VyXCI6e1widi1vbjpjaGFuZ2VNcFwiOlwiYmluZEF0dGVuZENpdHlDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICBtcGlja2VyOiBtcGlja2VyLFxuICAgICAgICAgICAgbnBpY2tlcjogbnBpY2tlcixcbiAgICAgICAgICAgIG9waWNrZXI6IG9waWNrZXIsXG4gICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZFxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflj5HluIPlrqLotYQnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgcGFnZV9kYXRhOiBudWxsLFxuICAgICAgICAgICAgdGVhbXM6IG51bGwsXG4gICAgICAgICAgICB0ZWFtc19yYW5kOiBbJ+WFqOmDqCddLFxuICAgICAgICAgICAgdGVhbXNfaW5kZXg6IDAsXG4gICAgICAgICAgICBtZXJyeV9jaXR5X2luZGV4OiAwLFxuICAgICAgICAgICAgbWVycnlfZGF0ZTogJ+ivt+mAieaLqeWpmuekvOaXtumXtCcsXG4gICAgICAgICAgICB3ZWRkaW5nX2hvdGVsOiAnJyxcbiAgICAgICAgICAgIHVzZXJfbmFtZTogJycsXG4gICAgICAgICAgICB1c2VyX21vYmlsZTogJycsXG4gICAgICAgICAgICB3ZWNoYXRfaWQ6ICcnLFxuICAgICAgICAgICAgdXNlcl9yZW1hcms6ICcnLFxuICAgICAgICAgICAgZXhpdF91c2VyOiBudWxsLFxuXG4gICAgICAgICAgICBzdWJtaXRfbG9jazogZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93X2ltZ19hcnI6IFtdLFxuICAgICAgICAgICAgYXV0b19hbGxvdDogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2lvbjogWyctJywgJy0nLCAnLSddLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIGNoYW5uZWxJbmZvOiBbXSxcbiAgICAgICAgICAgIGNoYW5uZWxfa2V5X25hbWU6ICdjaGFubmVsX25hbWUnLFxuICAgICAgICAgICAgY2hhbm5lbF9pbmRleDogMCxcbiAgICAgICAgICAgIGNoYW5uZWxfZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICBpbnRlbnRpb25JbmZvOiBbXSxcbiAgICAgICAgICAgIGludGVudGlvbl9rZXlfbmFtZTogJ2ludGVudGlvbl9uYW1lJyxcbiAgICAgICAgICAgIGludGVudF9pbmRleDogMCxcbiAgICAgICAgICAgIGludGVudGlvbl9kaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGNpdHlJbmZvOiBbXSxcbiAgICAgICAgICAgIGNpdHlfa2V5X25hbWU6ICdjaXR5X25hbWUnLFxuICAgICAgICAgICAgYXR0ZW5kX2NpdHlfaW5kZXg6IDAsXG4gICAgICAgICAgICBjaXR5X2Rpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzOiBudWxsLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzX2luZGV4OiAwLFxuXG4gICAgICAgICAgICBpc19zdWJtaXQ6IDEsXG5cbiAgICAgICAgICAgIGRlcGFydG1lbnQ6JycsXG5cbiAgICAgICAgICAgIHJlYWRvbmx5OmZhbHNlLFxuICAgICAgICAgICAgdXBsYW9kZWQ6e1xuICAgICAgICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRDaGFuZ2VFbXBsb3llZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtX21lbWJlcnNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93Q2hhbm5lbFBhbm5lbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxfZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0F0dGVudGlvblBhbm5lbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVudGlvbl9kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93Q2l0eVBhbm5lbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNpdHlfZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGVhbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVwYXJ0bWVudD09J21hcnJ5Jyl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRlYW1fbWVtYmVyc19pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdldFRlYW1FbXBsb3llZSh0aGlzLnRlYW1zW3RoaXMudGVhbXNfaW5kZXhdLnRlYW1faWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVBdXRvQWxsb3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX2FsbG90ID0gIXRoaXMuYXV0b19hbGxvdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlVXNlcihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZXhpdF91c2VyKTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2Nsb3NlVXNlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoYXQuZXhpdF91c2VyLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJfcmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V3hDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja1Bob25lTnVtZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnaXNFeGlzdFVzZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMTogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gcmVzdWx0LmRhdGEudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJba2V5XSA9ICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmlzX3N1Ym1pdD1yZXN1bHQuZGF0YS5pc19zdWJtaXQ7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhhdC5leGl0X3VzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc19zdWJtaXQ9cmVzdWx0LmRhdGEuaXNfc3VibWl0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LnVzZXJfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQud2VjaGF0X2lkLFxuICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm9bdGhhdC5pbnRlbnRfaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzUGhvbmVOdW1iZXIodGhpcy51c2VyX21vYmlsZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodGhpcy51c2VyX21vYmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fkuI3mraPnoa4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFVzZXJNb2JpbGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGF0LnVzZXJfbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0SG90ZWwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2VkZGluZ19ob3RlbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRDaGFubmVsQ2hhbmdlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsX2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NkcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQXR0ZW50Q2hhbmdlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRfaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEF0dGVuZENpdHlDaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGVuZF9jaXR5X2luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXN0cmlidXRpb25UZWFtcygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRNZXJyeUNpdHlDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVycnlfY2l0eV9pbmRleCA9IHZhbHVlc1swXSArICcgJyArIHZhbHVlc1sxXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kTWVycnlEYXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcnJ5X2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LnN1Ym1pdF9sb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1fZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9pZDogdGhhdC5wYWdlX2RhdGEuY2hhbm5lbEluZm9bdGhhdC5jaGFubmVsX2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2NpdHk6IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvW3RoYXQuYXR0ZW5kX2NpdHlfaW5kZXhdLmlkLFxuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX3Byb3ZpbmNlX25hbWU6IHRoYXQucmVnaW9uWzBdLFxuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2NpdHlfbmFtZTogdGhhdC5yZWdpb25bMV0sXG4gICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfYXJlYV9uYW1lOiB0aGF0LnJlZ2lvblsyXSxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19ob3RlbDogdGhhdC53ZWRkaW5nX2hvdGVsLFxuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2RhdGU6IHRoYXQubWVycnlfZGF0ZSA9PSAn6K+36YCJ5oup5ama56S85pe26Ze0JyA/ICcnIDogdGhhdC5tZXJyeV9kYXRlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IHRoYXQudXNlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogdGhhdC51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgd2VjaGF0X2lkOiB0aGF0LndlY2hhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgY29tbV9wcm9vZjogdGhhdC51cGxhb2RlZC5pbWFnZXMuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX3JlbWFyazogdGhhdC51c2VyX3JlbWFya1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIuaXNfc2VydmVyKXtcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGVhbXNfaW5kZXggIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudGVhbXNfaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YS50ZWFtX2lkID0gdGhpcy50ZWFtc1tpbmRleF0udGVhbV9pZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVwYXJ0bWVudD09J2FydGNlbnRlcicpe1xuICAgICAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXV0b19kaXN0cmlidXRpb24gPSB0aGF0LmF1dG9fYWxsb3QgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVwYXJ0bWVudD09J21hcnJ5JyAmJiB0aGlzLnRlYW1fbWVtYmVyc19pbmRleCE9MCl7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YVsnZW1wbG95ZWVfaWQnXSA9IHRoaXMudGVhbV9tZW1iZXJzW3RoYXQudGVhbV9tZW1iZXJzX2luZGV4XS5pZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm9ybV9kYXRhLnVzZXJfbW9iaWxlICYmICFmb3JtX2RhdGEud2VjaGF0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5paw5Lq65omL5py65oiW5b6u5L+hJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1fZGF0YS51c2VyX21vYmlsZSAmJiAhdmFsaWRhdGUuaXNQaG9uZU51bWJlcihmb3JtX2RhdGEudXNlcl9tb2JpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+3JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuaXNfc3VibWl0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7LlrZjlnKjnm7jlkIzlrqLotYQnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2lzRXhpc3RVc2VyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDE6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3VsdC5kYXRhLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyW2tleV0gPSAnLSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdWJtaXRfbG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suWtmOWcqOebuOWQjOWuoui1hCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOS4rS4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2luc2VydFVzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmb3JtX2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogdGhhdC51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgd2VjaGF0X2lkOiB0aGF0LndlY2hhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGdldFRlYW1FbXBsb3llZShlbXBsb3llZV90ZWFtX2lkKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbXBsb3llZV90ZWFtX2lkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzPVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfbmFtZTogJ+mAieaLqeWboumYn+WQjuWGjemAieaLqeaJp+ihjOS6uidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZV90ZWFtX2lkOiBlbXBsb3llZV90ZWFtX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGdldERpc3RyaWJ1dGlvblRlYW1zKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbV9pZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1fbmFtZTogJ+WFqOmDqCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IHRoYXQucGFnZV9kYXRhLmNoYW5uZWxJbmZvW3RoYXQuY2hhbm5lbF9pbmRleF0uaWQsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5wYWdlX2RhdGEuY2l0eUluZm9bdGhhdC5hdHRlbmRfY2l0eV9pbmRleF0uaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBycS5nZXQoJ2dldEluaXREYXRhJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jaGFubmVsSW5mbyA9IHRoYXQucGFnZV9kYXRhLmNoYW5uZWxJbmZvO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNpdHlJbmZvID0gdGhhdC5wYWdlX2RhdGEuY2l0eUluZm87XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaW50ZW50aW9uSW5mbyA9IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm87XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50PXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29mZmljZV9saW5lJyk7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=