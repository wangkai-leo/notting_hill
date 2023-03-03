'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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
            isopacity: true,
            title: '联合发起',
            isback: true,
            page_data: null,
            teams: null,
            // teams_rand: ['全部'],
            teams_index: 0,
            channel_index: 0,
            intent_index: 0,
            merry_city_index: 0,
            attend_city_index: 0,
            merry_date: '',
            wedding_hotel: '',
            user_name: '',
            user_mobile: '',
            wechat_id: '',
            user_remark: '',
            exit_user: null,
            // upload_img_arr: [],
            submit_lock: false,
            show_img_arr: [],
            auto_allot: true,
            region: ['-', '-', '-'],
            user: null,
            team_members: null,
            team_members_index: 0,
            customer: null
        }, _this.methods = {
            bindInputMerryDate: function bindInputMerryDate(e) {
                this.merry_date = e.detail.value;
            },
            bindInputTeamChange: function bindInputTeamChange(e) {
                this.teams_index = e.detail.value;
                this.team_members_index = 0;
                this.getTeamEmployee(this.teams[this.teams_index].team_id);
            },
            bindChangeEmployee: function bindChangeEmployee(e) {
                this.team_members_index = e.detail.value;
            },
            toggleAutoAllot: function toggleAutoAllot() {
                this.auto_allot = !this.auto_allot;
            },
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: '9', //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            console.log(that.show_img_arr);
                            that.$apply();
                        });
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
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
                // if (validate.isPhoneNumber(that.user_mobile)) {
                _request2.default.get('isExistUser', {
                    201: function _(result) {
                        var user = result.data.userInfo;
                        for (var key in user) {
                            if (!user[key]) {
                                user[key] = '-';
                            }
                        }
                        that.exit_user = user;
                        console.log(that.exit_user);
                        that.$apply();
                    },
                    200: function _(result) {
                        that.exit_user = null;
                        that.$apply();
                    }
                }, {
                    user_mobile: that.user_mobile,
                    wechat_id: that.wechat_id,
                    intention_id: that.page_data.intentionInfo[that.intent_index].id
                });
                // };
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
            bindChannelChange: function bindChannelChange(e) {
                this.channel_index = e.detail.value;
                this.getDistributionTeams();
            },
            bindAttentChange: function bindAttentChange(e) {
                this.intent_index = e.detail.value;
                this.getDistributionTeams();
            },
            bindAttendCityChange: function bindAttendCityChange(e) {
                this.attend_city_index = e.detail.value;
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
                    _wepy2.default.showToast({
                        title: '不能重复提交', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                var form_data = {
                    channel_id: that.customer.channel_id,
                    intention_id: that.page_data.intentionInfo[that.intent_index].id,
                    intention_city: that.page_data.cityInfo[that.attend_city_index].id,
                    wedding_province_name: that.region[0],
                    wedding_city_name: that.region[1],
                    wedding_area_name: that.region[2],
                    wedding_hotel: that.wedding_hotel,
                    wedding_date: that.merry_date,
                    user_name: that.user_name,
                    user_mobile: that.user_mobile,
                    wechat_id: that.wechat_id,
                    comm_proof: that.show_img_arr.join(','),
                    user_remark: that.user_remark,
                    union_order: that.customer.order_id,
                    is_union: 1
                };
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
                if (that.exit_user) {
                    _wepy2.default.showToast({
                        title: '已存在相同客资', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                if (that.teams.length <= 1) {
                    _wepy2.default.showToast({
                        title: '暂无接单团队', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                if (that.teams_index != 0) {
                    form_data['team_id'] = that.teams[that.teams_index].team_id;
                }
                if (that.team_members_index != 0) {
                    form_data['employee_id'] = that.team_members[that.team_members_index].id;
                }
                that.submit_lock = true;
                _request2.default.get('unionSuccessOrder', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    },
                    201: function _(result) {
                        that.submit_lock = false;
                    }
                }, form_data);
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
                    that.team_members = [{
                        id: 0,
                        employee_name: '选择团队后再选择执行人'
                    }];
                    // if (that.teams.length > 0) {
                    //     that.getTeamEmployee(that.teams[0].team_id);
                    // } else {
                    //     that.team_members = [];
                    // }
                    that.$apply();
                }
            }, {
                channel_id: that.customer.channel_id,
                intention_id: that.page_data.intentionInfo[that.intent_index].id,
                intention_city: that.page_data.cityInfo[that.attend_city_index].id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            this.user = _wepy2.default.getStorageSync('user');
            _request2.default.get('getInitData', {
                200: function _(result) {
                    that.page_data = result.data;
                    that.$apply();
                    _request2.default.get('getOneUserInfo', {
                        200: function _(result) {
                            that.customer = result.data.data;
                            var i = 0;
                            that.page_data.channelInfo.forEach(function (element) {
                                if (element.id == that.customer.channel_id) {
                                    that.channel_index = i;
                                }
                                i++;
                            });
                            var j = 0;
                            that.page_data.intentionInfo.forEach(function (element) {
                                if (element.id == that.customer.intention_id) {
                                    that.intent_index = j;
                                }
                                j++;
                            });
                            var n = 0;
                            that.page_data.cityInfo.forEach(function (element) {
                                if (element.id == that.customer.intention_city) {
                                    that.attend_city_index = n;
                                }
                                n++;
                            });
                            that.wedding_hotel = that.customer.wedding_hotel;
                            that.merry_date = that.customer.wedding_date;
                            that.user_name = that.customer.user_name;
                            that.user_mobile = that.customer.user_mobile;
                            that.wechat_id = that.customer.wechat_id;
                            if (that.customer.comm_proof) {
                                that.show_img_arr = that.customer.comm_proof.split(',');
                            };
                            console.log(that.show_img_arr);
                            that.user_remark = that.customer.user_remark;
                            that.region[0] = that.customer.wedding_province_name;
                            that.region[1] = that.customer.wedding_city_name;
                            that.region[2] = that.customer.wedding_area_name;
                            that.$apply();
                            that.getDistributionTeams();
                        }
                    }, {
                        user_id: options.id
                    });
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/server/unipublish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2RhdGEiLCJ0ZWFtcyIsInRlYW1zX2luZGV4IiwiY2hhbm5lbF9pbmRleCIsImludGVudF9pbmRleCIsIm1lcnJ5X2NpdHlfaW5kZXgiLCJhdHRlbmRfY2l0eV9pbmRleCIsIm1lcnJ5X2RhdGUiLCJ3ZWRkaW5nX2hvdGVsIiwidXNlcl9uYW1lIiwidXNlcl9tb2JpbGUiLCJ3ZWNoYXRfaWQiLCJ1c2VyX3JlbWFyayIsImV4aXRfdXNlciIsInN1Ym1pdF9sb2NrIiwic2hvd19pbWdfYXJyIiwiYXV0b19hbGxvdCIsInJlZ2lvbiIsInVzZXIiLCJ0ZWFtX21lbWJlcnMiLCJ0ZWFtX21lbWJlcnNfaW5kZXgiLCJjdXN0b21lciIsIm1ldGhvZHMiLCJiaW5kSW5wdXRNZXJyeURhdGUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwidGVhbV9pZCIsImJpbmRDaGFuZ2VFbXBsb3llZSIsInRvZ2dsZUF1dG9BbGxvdCIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJjb21wbGV0ZSIsImNsb3NlVXNlciIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJycSIsImdldCIsImJpbmRJbnB1dE1hcmsiLCJiaW5kSW5wdXRXeENvdW50IiwiY2hlY2tQaG9uZU51bWUiLCJyZXN1bHQiLCJ1c2VySW5mbyIsImtleSIsImludGVudGlvbl9pZCIsImludGVudGlvbkluZm8iLCJ2YWxpZGF0ZSIsImlzUGhvbmVOdW1iZXIiLCJpc0VtcHR5Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJiaW5kSW5wdXRVc2VyTW9iaWxlIiwiYmluZElucHV0VXNlck5hbWUiLCJiaW5kSW5wdXRIb3RlbCIsImJpbmRDaGFubmVsQ2hhbmdlIiwiZ2V0RGlzdHJpYnV0aW9uVGVhbXMiLCJiaW5kQXR0ZW50Q2hhbmdlIiwiYmluZEF0dGVuZENpdHlDaGFuZ2UiLCJiaW5kTWVycnlDaXR5Q2hhbmdlIiwidmFsdWVzIiwiYmluZE1lcnJ5RGF0ZUNoYW5nZSIsInN1Ym1pdCIsImZvcm1fZGF0YSIsImNoYW5uZWxfaWQiLCJpbnRlbnRpb25fY2l0eSIsImNpdHlJbmZvIiwid2VkZGluZ19wcm92aW5jZV9uYW1lIiwid2VkZGluZ19jaXR5X25hbWUiLCJ3ZWRkaW5nX2FyZWFfbmFtZSIsIndlZGRpbmdfZGF0ZSIsImNvbW1fcHJvb2YiLCJqb2luIiwidW5pb25fb3JkZXIiLCJvcmRlcl9pZCIsImlzX3VuaW9uIiwibGVuZ3RoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlbXBsb3llZV90ZWFtX2lkIiwidW5zaGlmdCIsImVtcGxveWVlX25hbWUiLCJlbXBsb3llZV9saXN0IiwidGVhbV9uYW1lIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsImdldFN0b3JhZ2VTeW5jIiwiaSIsImNoYW5uZWxJbmZvIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJqIiwibiIsInNwbGl0IiwidXNlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxR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QyxpQ0FBU1gsUUFBUXJEO0FBRGxCLHFCQXhDSDtBQTJDSDtBQS9DaUIsYUFBdEI7QUFpREg7OztpQ0FDUSxDQUFFOzs7O0VBdFZvQmdCLGVBQUtpRCxJOztrQkFBbkJqSSxLIiwiZmlsZSI6InVuaXB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+iBlOWQiOWPkei1tycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBwYWdlX2RhdGE6IG51bGwsXG4gICAgICAgICAgICB0ZWFtczogbnVsbCxcbiAgICAgICAgICAgIC8vIHRlYW1zX3JhbmQ6IFsn5YWo6YOoJ10sXG4gICAgICAgICAgICB0ZWFtc19pbmRleDogMCxcbiAgICAgICAgICAgIGNoYW5uZWxfaW5kZXg6IDAsXG4gICAgICAgICAgICBpbnRlbnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBtZXJyeV9jaXR5X2luZGV4OiAwLFxuICAgICAgICAgICAgYXR0ZW5kX2NpdHlfaW5kZXg6IDAsXG4gICAgICAgICAgICBtZXJyeV9kYXRlOiAnJyxcbiAgICAgICAgICAgIHdlZGRpbmdfaG90ZWw6ICcnLFxuICAgICAgICAgICAgdXNlcl9uYW1lOiAnJyxcbiAgICAgICAgICAgIHVzZXJfbW9iaWxlOiAnJyxcbiAgICAgICAgICAgIHdlY2hhdF9pZDogJycsXG4gICAgICAgICAgICB1c2VyX3JlbWFyazogJycsXG4gICAgICAgICAgICBleGl0X3VzZXI6IG51bGwsXG4gICAgICAgICAgICAvLyB1cGxvYWRfaW1nX2FycjogW10sXG4gICAgICAgICAgICBzdWJtaXRfbG9jazogZmFsc2UsXG4gICAgICAgICAgICBzaG93X2ltZ19hcnI6IFtdLFxuICAgICAgICAgICAgYXV0b19hbGxvdDogdHJ1ZSxcbiAgICAgICAgICAgIHJlZ2lvbjogWyctJywgJy0nLCAnLSddLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIHRlYW1fbWVtYmVyczogbnVsbCxcbiAgICAgICAgICAgIHRlYW1fbWVtYmVyc19pbmRleDogMCxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kSW5wdXRNZXJyeURhdGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVycnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFRlYW1DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbXNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW1fbWVtYmVyc19pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUZWFtRW1wbG95ZWUodGhpcy50ZWFtc1t0aGlzLnRlYW1zX2luZGV4XS50ZWFtX2lkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQ2hhbmdlRW1wbG95ZWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbV9tZW1iZXJzX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlQXV0b0FsbG90KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b19hbGxvdCA9ICF0aGlzLmF1dG9fYWxsb3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAnOScsIC8v5pyA5aSa5Y+v5Lul6YCJ5oup55qE5Zu+54mH5byg5pWwLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS51cExvYWRJbWdzKEMuRU5WX1VSTCArICd1cGxvYWRDb21tUHJvb2YnLCByZXMudGVtcEZpbGVQYXRocywgMCwgW10sIFtdLCBmdW5jdGlvbihuYW1lcywgdXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5zaG93X2ltZ19hcnIuY29uY2F0KHVybHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC8v6L+U5Zue5Zu+54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGoIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZVVzZXIoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmV4aXRfdXNlcik7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdjbG9zZVVzZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGF0LmV4aXRfdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFd4Q291bnQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0X2lkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tQaG9uZU51bWUoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBpZiAodmFsaWRhdGUuaXNQaG9uZU51bWJlcih0aGF0LnVzZXJfbW9iaWxlKSkge1xuICAgICAgICAgICAgICAgIHJxLmdldCgnaXNFeGlzdFVzZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMTogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gcmVzdWx0LmRhdGEudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJba2V5XSA9ICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmV4aXRfdXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmV4aXRfdXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogdGhhdC51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgd2VjaGF0X2lkOiB0aGF0LndlY2hhdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlLmlzUGhvbmVOdW1iZXIodGhpcy51c2VyX21vYmlsZSkgJiYgIXZhbGlkYXRlLmlzRW1wdHkodGhpcy51c2VyX21vYmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fkuI3mraPnoa4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFVzZXJNb2JpbGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGF0LnVzZXJfbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0SG90ZWwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2VkZGluZ19ob3RlbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRDaGFubmVsQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEF0dGVudENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEF0dGVuZENpdHlDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0ZW5kX2NpdHlfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZE1lcnJ5Q2l0eUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJyeV9jaXR5X2luZGV4ID0gdmFsdWVzWzBdICsgJyAnICsgdmFsdWVzWzFdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRNZXJyeURhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVycnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuc3VibWl0X2xvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkuI3og73ph43lpI3mj5DkuqQnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiB0aGF0LmN1c3RvbWVyLmNoYW5uZWxfaWQsXG4gICAgICAgICAgICAgICAgICAgIGludGVudGlvbl9pZDogdGhhdC5wYWdlX2RhdGEuaW50ZW50aW9uSW5mb1t0aGF0LmludGVudF9pbmRleF0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGludGVudGlvbl9jaXR5OiB0aGF0LnBhZ2VfZGF0YS5jaXR5SW5mb1t0aGF0LmF0dGVuZF9jaXR5X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19wcm92aW5jZV9uYW1lOiB0aGF0LnJlZ2lvblswXSxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19jaXR5X25hbWU6IHRoYXQucmVnaW9uWzFdLFxuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2FyZWFfbmFtZTogdGhhdC5yZWdpb25bMl0sXG4gICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfaG90ZWw6IHRoYXQud2VkZGluZ19ob3RlbCxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19kYXRlOiB0aGF0Lm1lcnJ5X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdGhhdC51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LnVzZXJfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQud2VjaGF0X2lkLFxuICAgICAgICAgICAgICAgICAgICBjb21tX3Byb29mOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfcmVtYXJrOiB0aGF0LnVzZXJfcmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICB1bmlvbl9vcmRlcjp0aGF0LmN1c3RvbWVyLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBpc191bmlvbjoxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm9ybV9kYXRhLnVzZXJfbW9iaWxlICYmICFmb3JtX2RhdGEud2VjaGF0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5paw5Lq65omL5py65oiW5b6u5L+hJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1fZGF0YS51c2VyX21vYmlsZSAmJiAhdmFsaWRhdGUuaXNQaG9uZU51bWJlcihmb3JtX2RhdGEudXNlcl9tb2JpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+3JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZXhpdF91c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5a2Y5Zyo55u45ZCM5a6i6LWEJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQudGVhbXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmoLml6DmjqXljZXlm6LpmJ8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhhdC50ZWFtc19pbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YVsndGVhbV9pZCddID0gdGhhdC50ZWFtc1t0aGF0LnRlYW1zX2luZGV4XS50ZWFtX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGF0LnRlYW1fbWVtYmVyc19pbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YVsnZW1wbG95ZWVfaWQnXSA9IHRoYXQudGVhbV9tZW1iZXJzW3RoYXQudGVhbV9tZW1iZXJzX2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3VuaW9uU3VjY2Vzc09yZGVyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMTpyZXN1bHQ9PntcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmb3JtX2RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBnZXRUZWFtRW1wbG95ZWUoZW1wbG95ZWVfdGVhbV9pZCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW1wbG95ZWVfdGVhbV9pZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfbmFtZTogJ+mAieaLqeWboumYn+WQjuWGjemAieaLqeaJp+ihjOS6uidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZV90ZWFtX2lkOiBlbXBsb3llZV90ZWFtX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGdldERpc3RyaWJ1dGlvblRlYW1zKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbV9pZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1fbmFtZTogJ+WFqOmDqCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6YCJ5oup5Zui6Zif5ZCO5YaN6YCJ5oup5omn6KGM5Lq6J1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhhdC50ZWFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGF0LmdldFRlYW1FbXBsb3llZSh0aGF0LnRlYW1zWzBdLnRlYW1faWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiB0aGF0LmN1c3RvbWVyLmNoYW5uZWxfaWQsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5wYWdlX2RhdGEuY2l0eUluZm9bdGhhdC5hdHRlbmRfY2l0eV9pbmRleF0uaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0SW5pdERhdGEnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsSW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSB0aGF0LmN1c3RvbWVyLmNoYW5uZWxfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2hhbm5lbF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IHRoYXQuY3VzdG9tZXIuaW50ZW50aW9uX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmludGVudF9pbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaXR5SW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmF0dGVuZF9jaXR5X2luZGV4ID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC53ZWRkaW5nX2hvdGVsID0gdGhhdC5jdXN0b21lci53ZWRkaW5nX2hvdGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubWVycnlfZGF0ZSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlcl9uYW1lID0gdGhhdC5jdXN0b21lci51c2VyX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyX21vYmlsZSA9IHRoYXQuY3VzdG9tZXIudXNlcl9tb2JpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC53ZWNoYXRfaWQgPSB0aGF0LmN1c3RvbWVyLndlY2hhdF9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5jdXN0b21lci5jb21tX3Byb29mKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5jdXN0b21lci5jb21tX3Byb29mLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJfcmVtYXJrID0gdGhhdC5jdXN0b21lci51c2VyX3JlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlZ2lvblswXSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19wcm92aW5jZV9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVnaW9uWzFdID0gdGhhdC5jdXN0b21lci53ZWRkaW5nX2NpdHlfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlZ2lvblsyXSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19hcmVhX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IG9wdGlvbnMuaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19