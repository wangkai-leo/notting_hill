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
                    // wedding_city: that.page_data.cityInfo[that.merry_city_index].id,//暂时无用
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
                    // if (this.user.is_server) {
                    //     form_data.auto_distribution = that.auto_allot ? '1' : '0'
                    // }
                    // if(!form_data.channel_index==0){
                    //     wepy.showToast({
                    //         title: '请填写新人手机或微信', //提示的内容,
                    //         icon: 'none', //图标,
                    //         duration: 2000, //延迟时间,
                    //         mask: true, //显示透明蒙层，防止触摸穿透,
                    //         success: res => {}
                    //     });
                    //     return false;
                    // }
                    // if (!form_data.user_name) {
                    //     wepy.showToast({
                    //         title: '请填写新人姓名', //提示的内容,
                    //         icon: 'none', //图标,
                    //         duration: 2000, //延迟时间,
                    //         mask: true, //显示透明蒙层，防止触摸穿透,
                    //         success: res => {}
                    //     });
                    //     return false;
                    // }
                };if (!form_data.user_mobile && !form_data.wechat_id) {
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
                _request2.default.get('insertUserInfo', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXB1Ymxpc2guanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2RhdGEiLCJ0ZWFtcyIsInRlYW1zX2luZGV4IiwiY2hhbm5lbF9pbmRleCIsImludGVudF9pbmRleCIsIm1lcnJ5X2NpdHlfaW5kZXgiLCJhdHRlbmRfY2l0eV9pbmRleCIsIm1lcnJ5X2RhdGUiLCJ3ZWRkaW5nX2hvdGVsIiwidXNlcl9uYW1lIiwidXNlcl9tb2JpbGUiLCJ3ZWNoYXRfaWQiLCJ1c2VyX3JlbWFyayIsImV4aXRfdXNlciIsInN1Ym1pdF9sb2NrIiwic2hvd19pbWdfYXJyIiwiYXV0b19hbGxvdCIsInJlZ2lvbiIsInVzZXIiLCJ0ZWFtX21lbWJlcnMiLCJ0ZWFtX21lbWJlcnNfaW5kZXgiLCJjdXN0b21lciIsIm1ldGhvZHMiLCJiaW5kSW5wdXRNZXJyeURhdGUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwidGVhbV9pZCIsImJpbmRDaGFuZ2VFbXBsb3llZSIsInRvZ2dsZUF1dG9BbGxvdCIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJjb21wbGV0ZSIsImNsb3NlVXNlciIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJycSIsImdldCIsImJpbmRJbnB1dE1hcmsiLCJiaW5kSW5wdXRXeENvdW50IiwiY2hlY2tQaG9uZU51bWUiLCJyZXN1bHQiLCJ1c2VySW5mbyIsImtleSIsImludGVudGlvbl9pZCIsImludGVudGlvbkluZm8iLCJ2YWxpZGF0ZSIsImlzUGhvbmVOdW1iZXIiLCJpc0VtcHR5Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJiaW5kSW5wdXRVc2VyTW9iaWxlIiwiYmluZElucHV0VXNlck5hbWUiLCJiaW5kSW5wdXRIb3RlbCIsImJpbmRDaGFubmVsQ2hhbmdlIiwiZ2V0RGlzdHJpYnV0aW9uVGVhbXMiLCJiaW5kQXR0ZW50Q2hhbmdlIiwiYmluZEF0dGVuZENpdHlDaGFuZ2UiLCJiaW5kTWVycnlDaXR5Q2hhbmdlIiwidmFsdWVzIiwiYmluZE1lcnJ5RGF0ZUNoYW5nZSIsInN1Ym1pdCIsImZvcm1fZGF0YSIsImNoYW5uZWxfaWQiLCJpbnRlbnRpb25fY2l0eSIsImNpdHlJbmZvIiwid2VkZGluZ19wcm92aW5jZV9uYW1lIiwid2VkZGluZ19jaXR5X25hbWUiLCJ3ZWRkaW5nX2FyZWFfbmFtZSIsIndlZGRpbmdfZGF0ZSIsImNvbW1fcHJvb2YiLCJqb2luIiwidW5pb25fb3JkZXIiLCJvcmRlcl9pZCIsImlzX3VuaW9uIiwibGVuZ3RoIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlbXBsb3llZV90ZWFtX2lkIiwidW5zaGlmdCIsImVtcGxveWVlX25hbWUiLCJlbXBsb3llZV9saXN0IiwidGVhbV9uYW1lIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsImdldFN0b3JhZ2VTeW5jIiwiaSIsImNoYW5uZWxJbmZvIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJqIiwibiIsInNwbGl0IiwidXNlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyx1QkFBVyxJQUpSO0FBS0hDLG1CQUFPLElBTEo7QUFNSDtBQUNBQyx5QkFBYSxDQVBWO0FBUUhDLDJCQUFlLENBUlo7QUFTSEMsMEJBQWMsQ0FUWDtBQVVIQyw4QkFBa0IsQ0FWZjtBQVdIQywrQkFBbUIsQ0FYaEI7QUFZSEMsd0JBQVksRUFaVDtBQWFIQywyQkFBZSxFQWJaO0FBY0hDLHVCQUFXLEVBZFI7QUFlSEMseUJBQWEsRUFmVjtBQWdCSEMsdUJBQVcsRUFoQlI7QUFpQkhDLHlCQUFhLEVBakJWO0FBa0JIQyx1QkFBVyxJQWxCUjtBQW1CSDtBQUNBQyx5QkFBYSxLQXBCVjtBQXFCSEMsMEJBQWMsRUFyQlg7QUFzQkhDLHdCQUFZLElBdEJUO0FBdUJIQyxvQkFBUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQXZCTDtBQXdCSEMsa0JBQU0sSUF4Qkg7QUF5QkhDLDBCQUFjLElBekJYO0FBMEJIQyxnQ0FBb0IsQ0ExQmpCO0FBMkJIQyxzQkFBVTtBQTNCUCxTLFFBNkJQQyxPLEdBQVU7QUFDTkMsOEJBRE0sOEJBQ2FDLENBRGIsRUFDZ0I7QUFDbEIscUJBQUtqQixVQUFMLEdBQWtCaUIsRUFBRUMsTUFBRixDQUFTQyxLQUEzQjtBQUNILGFBSEs7QUFJTkMsK0JBSk0sK0JBSWNILENBSmQsRUFJaUI7QUFDbkIscUJBQUt0QixXQUFMLEdBQW1Cc0IsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNBLHFCQUFLTixrQkFBTCxHQUEwQixDQUExQjtBQUNBLHFCQUFLUSxlQUFMLENBQXFCLEtBQUszQixLQUFMLENBQVcsS0FBS0MsV0FBaEIsRUFBNkIyQixPQUFsRDtBQUNILGFBUks7QUFTTkMsOEJBVE0sOEJBU2FOLENBVGIsRUFTZ0I7QUFDbEIscUJBQUtKLGtCQUFMLEdBQTBCSSxFQUFFQyxNQUFGLENBQVNDLEtBQW5DO0FBQ0gsYUFYSztBQVlOSywyQkFaTSw2QkFZWTtBQUNkLHFCQUFLZixVQUFMLEdBQWtCLENBQUMsS0FBS0EsVUFBeEI7QUFDSCxhQWRLO0FBZU5nQixzQkFmTSx3QkFlTztBQUNULG9CQUFJQyxPQUFPLElBQVg7QUFDQUMsbUJBQUdDLFdBQUgsQ0FBZTtBQUNYQywyQkFBTyxHQURJLEVBQ0M7QUFDWkMsNkJBQVMsc0JBQU87QUFDWkMsdUNBQUtDLFVBQUwsQ0FBZ0JDLGlCQUFFQyxPQUFGLEdBQVksaUJBQTVCLEVBQStDQyxJQUFJQyxhQUFuRCxFQUFrRSxDQUFsRSxFQUFxRSxFQUFyRSxFQUF5RSxFQUF6RSxFQUE2RSxVQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMvRlosaUNBQUtsQixZQUFMLEdBQW9Ca0IsS0FBS2xCLFlBQUwsQ0FBa0IrQixNQUFsQixDQUF5QkQsSUFBekIsQ0FBcEI7QUFDQUUsb0NBQVFDLEdBQVIsQ0FBWWYsS0FBS2xCLFlBQWpCO0FBQ0FrQixpQ0FBS2dCLE1BQUw7QUFDSCx5QkFKRDtBQUtILHFCQVJVLEVBUVI7QUFDSEMsMEJBQU0sZ0JBQU0sQ0FBRSxDQVRIO0FBVVhDLDhCQUFVLG9CQUFNLENBQUU7QUFWUCxpQkFBZjtBQVlILGFBN0JLO0FBOEJOQyxxQkE5Qk0scUJBOEJJNUIsQ0E5QkosRUE4Qk87QUFDVCxvQkFBSVMsT0FBTyxJQUFYO0FBQ0Esb0JBQUlvQixLQUFLN0IsRUFBRThCLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUFqQztBQUNBTix3QkFBUUMsR0FBUixDQUFZZixLQUFLcEIsU0FBakI7QUFDQTJDLGtDQUFHQyxHQUFILENBQU8sV0FBUCxFQUFvQjtBQUNoQix5QkFBSyxtQkFBVTtBQUNYeEIsNkJBQUtwQixTQUFMLEdBQWlCLElBQWpCO0FBQ0FvQiw2QkFBS2dCLE1BQUw7QUFDSDtBQUplLGlCQUFwQixFQUtHO0FBQ0NJLHdCQUFJcEIsS0FBS3BCLFNBQUwsQ0FBZXdDO0FBRHBCLGlCQUxIO0FBUUgsYUExQ0s7QUEyQ05LLHlCQTNDTSx5QkEyQ1FsQyxDQTNDUixFQTJDVztBQUNiLHFCQUFLWixXQUFMLEdBQW1CWSxFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBQ0gsYUE3Q0s7QUE4Q05pQyw0QkE5Q00sNEJBOENXbkMsQ0E5Q1gsRUE4Q2M7QUFDaEIscUJBQUtiLFNBQUwsR0FBaUJhLEVBQUVDLE1BQUYsQ0FBU0MsS0FBMUI7QUFDSCxhQWhESztBQWlETmtDLDBCQWpETSwwQkFpRFNwQyxDQWpEVCxFQWlEWTtBQUNkLG9CQUFJUyxPQUFPLElBQVg7QUFDQTtBQUNBdUIsa0NBQUdDLEdBQUgsQ0FBTyxhQUFQLEVBQXNCO0FBQ2xCLHlCQUFLLG1CQUFVO0FBQ1gsNEJBQUl2QyxPQUFPMkMsT0FBT2pFLElBQVAsQ0FBWWtFLFFBQXZCO0FBQ0EsNkJBQUssSUFBSUMsR0FBVCxJQUFnQjdDLElBQWhCLEVBQXNCO0FBQ2xCLGdDQUFJLENBQUNBLEtBQUs2QyxHQUFMLENBQUwsRUFBZ0I7QUFDWjdDLHFDQUFLNkMsR0FBTCxJQUFZLEdBQVo7QUFDSDtBQUNKO0FBQ0Q5Qiw2QkFBS3BCLFNBQUwsR0FBaUJLLElBQWpCO0FBQ0E2QixnQ0FBUUMsR0FBUixDQUFZZixLQUFLcEIsU0FBakI7QUFDQW9CLDZCQUFLZ0IsTUFBTDtBQUNILHFCQVhpQjtBQVlsQix5QkFBSyxtQkFBVTtBQUNYaEIsNkJBQUtwQixTQUFMLEdBQWlCLElBQWpCO0FBQ0FvQiw2QkFBS2dCLE1BQUw7QUFDSDtBQWZpQixpQkFBdEIsRUFnQkc7QUFDQ3ZDLGlDQUFhdUIsS0FBS3ZCLFdBRG5CO0FBRUNDLCtCQUFXc0IsS0FBS3RCLFNBRmpCO0FBR0NxRCxrQ0FBYy9CLEtBQUtqQyxTQUFMLENBQWVpRSxhQUFmLENBQTZCaEMsS0FBSzdCLFlBQWxDLEVBQWdEaUQ7QUFIL0QsaUJBaEJIO0FBcUJBO0FBQ0Esb0JBQUksQ0FBQ2EsbUJBQVNDLGFBQVQsQ0FBdUIsS0FBS3pELFdBQTVCLENBQUQsSUFBNkMsQ0FBQ3dELG1CQUFTRSxPQUFULENBQWlCLEtBQUsxRCxXQUF0QixDQUFsRCxFQUFzRjtBQUNsRjJELG1DQUFLQyxTQUFMLENBQWU7QUFDWHhFLCtCQUFPLFFBREksRUFDTTtBQUNqQnlFLDhCQUFNLE1BRkssRUFFRztBQUNkQyxrQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLDhCQUFNLElBSkssRUFJQztBQUNacEMsaUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHFCQUFmO0FBT0g7QUFDSixhQW5GSztBQW9GTnFDLCtCQXBGTSwrQkFvRmNsRCxDQXBGZCxFQW9GaUI7QUFDbkIsb0JBQUlTLE9BQU8sSUFBWDtBQUNBQSxxQkFBS3ZCLFdBQUwsR0FBbUJjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDSCxhQXZGSztBQXdGTmlELDZCQXhGTSw2QkF3RlluRCxDQXhGWixFQXdGZTtBQUNqQixxQkFBS2YsU0FBTCxHQUFpQmUsRUFBRUMsTUFBRixDQUFTQyxLQUExQjtBQUNILGFBMUZLO0FBMkZOa0QsMEJBM0ZNLDBCQTJGU3BELENBM0ZULEVBMkZZO0FBQ2QscUJBQUtoQixhQUFMLEdBQXFCZ0IsRUFBRUMsTUFBRixDQUFTQyxLQUE5QjtBQUNILGFBN0ZLO0FBOEZObUQsNkJBOUZNLDZCQThGWXJELENBOUZaLEVBOEZlO0FBQ2pCLHFCQUFLckIsYUFBTCxHQUFxQnFCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBOUI7QUFDQSxxQkFBS29ELG9CQUFMO0FBQ0gsYUFqR0s7QUFrR05DLDRCQWxHTSw0QkFrR1d2RCxDQWxHWCxFQWtHYztBQUNoQixxQkFBS3BCLFlBQUwsR0FBb0JvQixFQUFFQyxNQUFGLENBQVNDLEtBQTdCO0FBQ0EscUJBQUtvRCxvQkFBTDtBQUNILGFBckdLO0FBc0dORSxnQ0F0R00sZ0NBc0dleEQsQ0F0R2YsRUFzR2tCO0FBQ3BCLHFCQUFLbEIsaUJBQUwsR0FBeUJrQixFQUFFQyxNQUFGLENBQVNDLEtBQWxDO0FBQ0EscUJBQUtvRCxvQkFBTDtBQUNILGFBekdLO0FBMEdORywrQkExR00sK0JBMEdjekQsQ0ExR2QsRUEwR2lCO0FBQ25CLG9CQUFJMEQsU0FBUzFELEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDQSxxQkFBS1QsTUFBTCxHQUFjTyxFQUFFQyxNQUFGLENBQVNDLEtBQXZCO0FBQ0EscUJBQUtyQixnQkFBTCxHQUF3QjZFLE9BQU8sQ0FBUCxJQUFZLEdBQVosR0FBa0JBLE9BQU8sQ0FBUCxDQUExQztBQUNILGFBOUdLO0FBK0dOQywrQkEvR00sK0JBK0djM0QsQ0EvR2QsRUErR2lCO0FBQ25CLHFCQUFLakIsVUFBTCxHQUFrQmlCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBM0I7QUFDSCxhQWpISztBQWtITjBELGtCQWxITSxvQkFrSEc7QUFDTCxvQkFBSW5ELE9BQU8sSUFBWDtBQUNBLG9CQUFJQSxLQUFLbkIsV0FBVCxFQUFzQjtBQUNsQnVELG1DQUFLQyxTQUFMLENBQWU7QUFDWHhFLCtCQUFPLFFBREksRUFDTTtBQUNqQnlFLDhCQUFNLE1BRkssRUFFRztBQUNkQyxrQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLDhCQUFNLElBSkssRUFJQztBQUNacEMsaUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHFCQUFmO0FBT0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0Qsb0JBQUlnRCxZQUFZO0FBQ1pDLGdDQUFZckQsS0FBS1osUUFBTCxDQUFjaUUsVUFEZDtBQUVadEIsa0NBQWMvQixLQUFLakMsU0FBTCxDQUFlaUUsYUFBZixDQUE2QmhDLEtBQUs3QixZQUFsQyxFQUFnRGlELEVBRmxEO0FBR1prQyxvQ0FBZ0J0RCxLQUFLakMsU0FBTCxDQUFld0YsUUFBZixDQUF3QnZELEtBQUszQixpQkFBN0IsRUFBZ0QrQyxFQUhwRDtBQUlaO0FBQ0FvQywyQ0FBdUJ4RCxLQUFLaEIsTUFBTCxDQUFZLENBQVosQ0FMWDtBQU1aeUUsdUNBQW1CekQsS0FBS2hCLE1BQUwsQ0FBWSxDQUFaLENBTlA7QUFPWjBFLHVDQUFtQjFELEtBQUtoQixNQUFMLENBQVksQ0FBWixDQVBQO0FBUVpULG1DQUFleUIsS0FBS3pCLGFBUlI7QUFTWm9GLGtDQUFjM0QsS0FBSzFCLFVBVFA7QUFVWkUsK0JBQVd3QixLQUFLeEIsU0FWSjtBQVdaQyxpQ0FBYXVCLEtBQUt2QixXQVhOO0FBWVpDLCtCQUFXc0IsS0FBS3RCLFNBWko7QUFhWmtGLGdDQUFZNUQsS0FBS2xCLFlBQUwsQ0FBa0IrRSxJQUFsQixDQUF1QixHQUF2QixDQWJBO0FBY1psRixpQ0FBYXFCLEtBQUtyQixXQWROO0FBZVptRixpQ0FBWTlELEtBQUtaLFFBQUwsQ0FBYzJFLFFBZmQ7QUFnQlpDLDhCQUFTO0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDZ0IsaUJBQWhCLENBeUNBLElBQUksQ0FBQ1osVUFBVTNFLFdBQVgsSUFBMEIsQ0FBQzJFLFVBQVUxRSxTQUF6QyxFQUFvRDtBQUNoRDBELG1DQUFLQyxTQUFMLENBQWU7QUFDWHhFLCtCQUFPLFlBREksRUFDVTtBQUNyQnlFLDhCQUFNLE1BRkssRUFFRztBQUNkQyxrQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLDhCQUFNLElBSkssRUFJQztBQUNacEMsaUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHFCQUFmO0FBT0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0Qsb0JBQUlnRCxVQUFVM0UsV0FBVixJQUF5QixDQUFDd0QsbUJBQVNDLGFBQVQsQ0FBdUJrQixVQUFVM0UsV0FBakMsQ0FBOUIsRUFBNkU7QUFDekUyRCxtQ0FBS0MsU0FBTCxDQUFlO0FBQ1h4RSwrQkFBTyxXQURJLEVBQ1M7QUFDcEJ5RSw4QkFBTSxNQUZLLEVBRUc7QUFDZEMsa0NBQVUsSUFIQyxFQUdLO0FBQ2hCQyw4QkFBTSxJQUpLLEVBSUM7QUFDWnBDLGlDQUFTLHNCQUFPLENBQUU7QUFMUCxxQkFBZjtBQU9BLDJCQUFPLEtBQVA7QUFDSDtBQUNELG9CQUFJSixLQUFLcEIsU0FBVCxFQUFvQjtBQUNoQndELG1DQUFLQyxTQUFMLENBQWU7QUFDWHhFLCtCQUFPLFNBREksRUFDTztBQUNsQnlFLDhCQUFNLE1BRkssRUFFRztBQUNkQyxrQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLDhCQUFNLElBSkssRUFJQztBQUNacEMsaUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHFCQUFmO0FBT0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0Qsb0JBQUlKLEtBQUtoQyxLQUFMLENBQVdpRyxNQUFYLElBQXFCLENBQXpCLEVBQTRCO0FBQ3hCN0IsbUNBQUtDLFNBQUwsQ0FBZTtBQUNYeEUsK0JBQU8sUUFESSxFQUNNO0FBQ2pCeUUsOEJBQU0sTUFGSyxFQUVHO0FBQ2RDLGtDQUFVLElBSEMsRUFHSztBQUNoQkMsOEJBQU0sSUFKSyxFQUlDO0FBQ1pwQyxpQ0FBUyxzQkFBTyxDQUFFO0FBTFAscUJBQWY7QUFPQSwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxvQkFBSUosS0FBSy9CLFdBQUwsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkJtRiw4QkFBVSxTQUFWLElBQXVCcEQsS0FBS2hDLEtBQUwsQ0FBV2dDLEtBQUsvQixXQUFoQixFQUE2QjJCLE9BQXBEO0FBQ0g7QUFDRCxvQkFBSUksS0FBS2Isa0JBQUwsSUFBMkIsQ0FBL0IsRUFBa0M7QUFDOUJpRSw4QkFBVSxhQUFWLElBQTJCcEQsS0FBS2QsWUFBTCxDQUFrQmMsS0FBS2Isa0JBQXZCLEVBQTJDaUMsRUFBdEU7QUFDSDtBQUNEcEIscUJBQUtuQixXQUFMLEdBQW1CLElBQW5CO0FBQ0EwQyxrQ0FBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3JCLHlCQUFLLG1CQUFVO0FBQ1hZLHVDQUFLOEIsWUFBTCxDQUFrQjtBQUNkQyxtQ0FBTyxDQURPLENBQ0w7QUFESyx5QkFBbEI7QUFHSDtBQUxvQixpQkFBekIsRUFNR2YsU0FOSDtBQU9IO0FBN05LLFM7Ozs7O3dDQStOTWdCLGdCLEVBQWtCO0FBQzlCLGdCQUFJcEUsT0FBTyxJQUFYO0FBQ0F1Qiw4QkFBR0MsR0FBSCxDQUFPLGlCQUFQLEVBQTBCO0FBQ3RCLHFCQUFLLG1CQUFVO0FBQ1gsd0JBQUk0QyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDdkJwRSw2QkFBS2QsWUFBTCxHQUFvQixFQUFwQjtBQUNBYyw2QkFBS2QsWUFBTCxDQUFrQm1GLE9BQWxCLENBQTBCO0FBQ3RCakQsZ0NBQUksQ0FEa0I7QUFFdEJrRCwyQ0FBZTtBQUZPLHlCQUExQjtBQUlILHFCQU5ELE1BTU87QUFDSHRFLDZCQUFLZCxZQUFMLEdBQW9CMEMsT0FBT2pFLElBQVAsQ0FBWTRHLGFBQWhDO0FBQ0F2RSw2QkFBS2QsWUFBTCxDQUFrQm1GLE9BQWxCLENBQTBCO0FBQ3RCakQsZ0NBQUksQ0FEa0I7QUFFdEJrRCwyQ0FBZTtBQUZPLHlCQUExQjtBQUlIO0FBQ0R0RSx5QkFBS2dCLE1BQUw7QUFDSDtBQWhCcUIsYUFBMUIsRUFpQkc7QUFDQ29ELGtDQUFrQkE7QUFEbkIsYUFqQkg7QUFvQkg7OzsrQ0FDc0I7QUFDbkIsZ0JBQUlwRSxPQUFPLElBQVg7QUFDQXVCLDhCQUFHQyxHQUFILENBQU8sc0JBQVAsRUFBK0I7QUFDM0IscUJBQUssbUJBQVU7QUFDWHhCLHlCQUFLaEMsS0FBTCxHQUFhNEQsT0FBT2pFLElBQVAsQ0FBWUEsSUFBekI7QUFDQXFDLHlCQUFLaEMsS0FBTCxDQUFXcUcsT0FBWCxDQUFtQjtBQUNmekUsaUNBQVMsQ0FETTtBQUVmNEUsbUNBQVc7QUFGSSxxQkFBbkI7QUFJQXhFLHlCQUFLZCxZQUFMLEdBQW9CLENBQUM7QUFDakJrQyw0QkFBSSxDQURhO0FBRWpCa0QsdUNBQWU7QUFGRSxxQkFBRCxDQUFwQjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXRFLHlCQUFLZ0IsTUFBTDtBQUNIO0FBakIwQixhQUEvQixFQWtCRztBQUNDcUMsNEJBQVlyRCxLQUFLWixRQUFMLENBQWNpRSxVQUQzQjtBQUVDdEIsOEJBQWMvQixLQUFLakMsU0FBTCxDQUFlaUUsYUFBZixDQUE2QmhDLEtBQUs3QixZQUFsQyxFQUFnRGlELEVBRi9EO0FBR0NrQyxnQ0FBZ0J0RCxLQUFLakMsU0FBTCxDQUFld0YsUUFBZixDQUF3QnZELEtBQUszQixpQkFBN0IsRUFBZ0QrQztBQUhqRSxhQWxCSDtBQXVCSDs7OytCQUNNcUQsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJekUsT0FBTyxJQUFYO0FBQ0EsaUJBQUtmLElBQUwsR0FBWW1ELGVBQUt3QyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQXJELDhCQUFHQyxHQUFILENBQU8sYUFBUCxFQUFzQjtBQUNsQixxQkFBSyxtQkFBVTtBQUNYeEIseUJBQUtqQyxTQUFMLEdBQWlCNkQsT0FBT2pFLElBQXhCO0FBQ0FxQyx5QkFBS2dCLE1BQUw7QUFDQU8sc0NBQUdDLEdBQUgsQ0FBTyxnQkFBUCxFQUF5QjtBQUNyQiw2QkFBSyxtQkFBVTtBQUNYeEIsaUNBQUtaLFFBQUwsR0FBZ0J3QyxPQUFPakUsSUFBUCxDQUFZQSxJQUE1QjtBQUNBLGdDQUFJa0gsSUFBSSxDQUFSO0FBQ0E3RSxpQ0FBS2pDLFNBQUwsQ0FBZStHLFdBQWYsQ0FBMkJDLE9BQTNCLENBQW1DLG1CQUFXO0FBQzFDLG9DQUFJQyxRQUFRNUQsRUFBUixJQUFjcEIsS0FBS1osUUFBTCxDQUFjaUUsVUFBaEMsRUFBNEM7QUFDeENyRCx5Q0FBSzlCLGFBQUwsR0FBcUIyRyxDQUFyQjtBQUNIO0FBQ0RBO0FBQ0gsNkJBTEQ7QUFNQSxnQ0FBSUksSUFBSSxDQUFSO0FBQ0FqRixpQ0FBS2pDLFNBQUwsQ0FBZWlFLGFBQWYsQ0FBNkIrQyxPQUE3QixDQUFxQyxtQkFBVztBQUM1QyxvQ0FBSUMsUUFBUTVELEVBQVIsSUFBY3BCLEtBQUtaLFFBQUwsQ0FBYzJDLFlBQWhDLEVBQThDO0FBQzFDL0IseUNBQUs3QixZQUFMLEdBQW9COEcsQ0FBcEI7QUFDSDtBQUNEQTtBQUNILDZCQUxEO0FBTUEsZ0NBQUlDLElBQUksQ0FBUjtBQUNBbEYsaUNBQUtqQyxTQUFMLENBQWV3RixRQUFmLENBQXdCd0IsT0FBeEIsQ0FBZ0MsbUJBQVc7QUFDdkMsb0NBQUlDLFFBQVE1RCxFQUFSLElBQWNwQixLQUFLWixRQUFMLENBQWNrRSxjQUFoQyxFQUFnRDtBQUM1Q3RELHlDQUFLM0IsaUJBQUwsR0FBeUI2RyxDQUF6QjtBQUNIO0FBQ0RBO0FBQ0gsNkJBTEQ7QUFNQWxGLGlDQUFLekIsYUFBTCxHQUFxQnlCLEtBQUtaLFFBQUwsQ0FBY2IsYUFBbkM7QUFDQXlCLGlDQUFLMUIsVUFBTCxHQUFrQjBCLEtBQUtaLFFBQUwsQ0FBY3VFLFlBQWhDO0FBQ0EzRCxpQ0FBS3hCLFNBQUwsR0FBaUJ3QixLQUFLWixRQUFMLENBQWNaLFNBQS9CO0FBQ0F3QixpQ0FBS3ZCLFdBQUwsR0FBbUJ1QixLQUFLWixRQUFMLENBQWNYLFdBQWpDO0FBQ0F1QixpQ0FBS3RCLFNBQUwsR0FBaUJzQixLQUFLWixRQUFMLENBQWNWLFNBQS9CO0FBQ0EsZ0NBQUlzQixLQUFLWixRQUFMLENBQWN3RSxVQUFsQixFQUE4QjtBQUMxQjVELHFDQUFLbEIsWUFBTCxHQUFvQmtCLEtBQUtaLFFBQUwsQ0FBY3dFLFVBQWQsQ0FBeUJ1QixLQUF6QixDQUErQixHQUEvQixDQUFwQjtBQUNIO0FBQ0RyRSxvQ0FBUUMsR0FBUixDQUFZZixLQUFLbEIsWUFBakI7QUFDQWtCLGlDQUFLckIsV0FBTCxHQUFtQnFCLEtBQUtaLFFBQUwsQ0FBY1QsV0FBakM7QUFDQXFCLGlDQUFLaEIsTUFBTCxDQUFZLENBQVosSUFBaUJnQixLQUFLWixRQUFMLENBQWNvRSxxQkFBL0I7QUFDQXhELGlDQUFLaEIsTUFBTCxDQUFZLENBQVosSUFBaUJnQixLQUFLWixRQUFMLENBQWNxRSxpQkFBL0I7QUFDQXpELGlDQUFLaEIsTUFBTCxDQUFZLENBQVosSUFBaUJnQixLQUFLWixRQUFMLENBQWNzRSxpQkFBL0I7QUFDQTFELGlDQUFLZ0IsTUFBTDtBQUNBaEIsaUNBQUs2QyxvQkFBTDtBQUNIO0FBdkNvQixxQkFBekIsRUF3Q0c7QUFDQ3VDLGlDQUFTWCxRQUFRckQ7QUFEbEIscUJBeENIO0FBMkNIO0FBL0NpQixhQUF0QjtBQWlESDs7O2lDQUNRLENBQUU7Ozs7RUEzV29CZ0IsZUFBS2lELEk7O2tCQUFuQmpJLEsiLCJmaWxlIjoidW5pcHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn6IGU5ZCI5Y+R6LW3JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICAgICAgICAgIHRlYW1zOiBudWxsLFxuICAgICAgICAgICAgLy8gdGVhbXNfcmFuZDogWyflhajpg6gnXSxcbiAgICAgICAgICAgIHRlYW1zX2luZGV4OiAwLFxuICAgICAgICAgICAgY2hhbm5lbF9pbmRleDogMCxcbiAgICAgICAgICAgIGludGVudF9pbmRleDogMCxcbiAgICAgICAgICAgIG1lcnJ5X2NpdHlfaW5kZXg6IDAsXG4gICAgICAgICAgICBhdHRlbmRfY2l0eV9pbmRleDogMCxcbiAgICAgICAgICAgIG1lcnJ5X2RhdGU6ICcnLFxuICAgICAgICAgICAgd2VkZGluZ19ob3RlbDogJycsXG4gICAgICAgICAgICB1c2VyX25hbWU6ICcnLFxuICAgICAgICAgICAgdXNlcl9tb2JpbGU6ICcnLFxuICAgICAgICAgICAgd2VjaGF0X2lkOiAnJyxcbiAgICAgICAgICAgIHVzZXJfcmVtYXJrOiAnJyxcbiAgICAgICAgICAgIGV4aXRfdXNlcjogbnVsbCxcbiAgICAgICAgICAgIC8vIHVwbG9hZF9pbWdfYXJyOiBbXSxcbiAgICAgICAgICAgIHN1Ym1pdF9sb2NrOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBhdXRvX2FsbG90OiB0cnVlLFxuICAgICAgICAgICAgcmVnaW9uOiBbJy0nLCAnLScsICctJ10sXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzOiBudWxsLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzX2luZGV4OiAwLFxuICAgICAgICAgICAgY3VzdG9tZXI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRJbnB1dE1lcnJ5RGF0ZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJyeV9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGVhbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbV9tZW1iZXJzX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRlYW1FbXBsb3llZSh0aGlzLnRlYW1zW3RoaXMudGVhbXNfaW5kZXhdLnRlYW1faWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRDaGFuZ2VFbXBsb3llZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtX21lbWJlcnNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVBdXRvQWxsb3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX2FsbG90ID0gIXRoaXMuYXV0b19hbGxvdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6ICc5JywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnVwTG9hZEltZ3MoQy5FTlZfVVJMICsgJ3VwbG9hZENvbW1Qcm9vZicsIHJlcy50ZW1wRmlsZVBhdGhzLCAwLCBbXSwgW10sIGZ1bmN0aW9uKG5hbWVzLCB1cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93X2ltZ19hcnIgPSB0aGF0LnNob3dfaW1nX2Fyci5jb25jYXQodXJscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5zaG93X2ltZ19hcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgLy/ov5Tlm57lm77niYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooaggdGVtcEZpbGVQYXRocyxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlVXNlcihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZXhpdF91c2VyKTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2Nsb3NlVXNlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5leGl0X3VzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoYXQuZXhpdF91c2VyLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJfcmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V3hDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja1Bob25lTnVtZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIGlmICh2YWxpZGF0ZS5pc1Bob25lTnVtYmVyKHRoYXQudXNlcl9tb2JpbGUpKSB7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdpc0V4aXN0VXNlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAxOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXN1bHQuZGF0YS51c2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcltrZXldID0gJy0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZXhpdF91c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZXhpdF91c2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LnVzZXJfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQud2VjaGF0X2lkLFxuICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IHRoYXQucGFnZV9kYXRhLmludGVudGlvbkluZm9bdGhhdC5pbnRlbnRfaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGUuaXNQaG9uZU51bWJlcih0aGlzLnVzZXJfbW9iaWxlKSAmJiAhdmFsaWRhdGUuaXNFbXB0eSh0aGlzLnVzZXJfbW9iaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aJi+acuuWPt+S4jeato+ehricsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoYXQudXNlcl9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRVc2VyTmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRIb3RlbChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWRkaW5nX2hvdGVsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENoYW5uZWxDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQXR0ZW50Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVudF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQXR0ZW5kQ2l0eUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRlbmRfY2l0eV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlzdHJpYnV0aW9uVGVhbXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kTWVycnlDaXR5Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lcnJ5X2NpdHlfaW5kZXggPSB2YWx1ZXNbMF0gKyAnICcgKyB2YWx1ZXNbMV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZE1lcnJ5RGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJyeV9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdWJtaXRfbG9jaykge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S4jeiDvemHjeWkjeaPkOS6pCcsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBmb3JtX2RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IHRoYXQuY3VzdG9tZXIuY2hhbm5lbF9pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2NpdHk6IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvW3RoYXQuYXR0ZW5kX2NpdHlfaW5kZXhdLmlkLFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZWRkaW5nX2NpdHk6IHRoYXQucGFnZV9kYXRhLmNpdHlJbmZvW3RoYXQubWVycnlfY2l0eV9pbmRleF0uaWQsLy/mmoLml7bml6DnlKhcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19wcm92aW5jZV9uYW1lOiB0aGF0LnJlZ2lvblswXSxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19jaXR5X25hbWU6IHRoYXQucmVnaW9uWzFdLFxuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2FyZWFfbmFtZTogdGhhdC5yZWdpb25bMl0sXG4gICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfaG90ZWw6IHRoYXQud2VkZGluZ19ob3RlbCxcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19kYXRlOiB0aGF0Lm1lcnJ5X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdGhhdC51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LnVzZXJfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQud2VjaGF0X2lkLFxuICAgICAgICAgICAgICAgICAgICBjb21tX3Byb29mOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfcmVtYXJrOiB0aGF0LnVzZXJfcmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICB1bmlvbl9vcmRlcjp0aGF0LmN1c3RvbWVyLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBpc191bmlvbjoxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnVzZXIuaXNfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZvcm1fZGF0YS5hdXRvX2Rpc3RyaWJ1dGlvbiA9IHRoYXQuYXV0b19hbGxvdCA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBpZighZm9ybV9kYXRhLmNoYW5uZWxfaW5kZXg9PTApe1xuICAgICAgICAgICAgICAgIC8vICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmeaWsOS6uuaJi+acuuaIluW+ruS/oScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGlmICghZm9ybV9kYXRhLnVzZXJfbmFtZSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmeaWsOS6uuWnk+WQjScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICghZm9ybV9kYXRhLnVzZXJfbW9iaWxlICYmICFmb3JtX2RhdGEud2VjaGF0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5paw5Lq65omL5py65oiW5b6u5L+hJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1fZGF0YS51c2VyX21vYmlsZSAmJiAhdmFsaWRhdGUuaXNQaG9uZU51bWJlcihmb3JtX2RhdGEudXNlcl9tb2JpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+3JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZXhpdF91c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5a2Y5Zyo55u45ZCM5a6i6LWEJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQudGVhbXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmmoLml6DmjqXljZXlm6LpmJ8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhhdC50ZWFtc19pbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YVsndGVhbV9pZCddID0gdGhhdC50ZWFtc1t0aGF0LnRlYW1zX2luZGV4XS50ZWFtX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGF0LnRlYW1fbWVtYmVyc19pbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YVsnZW1wbG95ZWVfaWQnXSA9IHRoYXQudGVhbV9tZW1iZXJzW3RoYXQudGVhbV9tZW1iZXJzX2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2luc2VydFVzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmb3JtX2RhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBnZXRUZWFtRW1wbG95ZWUoZW1wbG95ZWVfdGVhbV9pZCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW1wbG95ZWVfdGVhbV9pZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfbmFtZTogJ+mAieaLqeWboumYn+WQjuWGjemAieaLqeaJp+ihjOS6uidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycyA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1fbWVtYmVycy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6K+36YCJ5oupJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZV90ZWFtX2lkOiBlbXBsb3llZV90ZWFtX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGdldERpc3RyaWJ1dGlvblRlYW1zKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXREaXN0cmlidXRpb25UZWFtcycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbV9pZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1fbmFtZTogJ+WFqOmDqCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9uYW1lOiAn6YCJ5oup5Zui6Zif5ZCO5YaN6YCJ5oup5omn6KGM5Lq6J1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhhdC50ZWFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGF0LmdldFRlYW1FbXBsb3llZSh0aGF0LnRlYW1zWzBdLnRlYW1faWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiB0aGF0LmN1c3RvbWVyLmNoYW5uZWxfaWQsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvW3RoYXQuaW50ZW50X2luZGV4XS5pZCxcbiAgICAgICAgICAgICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5wYWdlX2RhdGEuY2l0eUluZm9bdGhhdC5hdHRlbmRfY2l0eV9pbmRleF0uaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0SW5pdERhdGEnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsSW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSB0aGF0LmN1c3RvbWVyLmNoYW5uZWxfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2hhbm5lbF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5pbnRlbnRpb25JbmZvLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IHRoYXQuY3VzdG9tZXIuaW50ZW50aW9uX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmludGVudF9pbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaXR5SW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSB0aGF0LmN1c3RvbWVyLmludGVudGlvbl9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmF0dGVuZF9jaXR5X2luZGV4ID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC53ZWRkaW5nX2hvdGVsID0gdGhhdC5jdXN0b21lci53ZWRkaW5nX2hvdGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubWVycnlfZGF0ZSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlcl9uYW1lID0gdGhhdC5jdXN0b21lci51c2VyX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyX21vYmlsZSA9IHRoYXQuY3VzdG9tZXIudXNlcl9tb2JpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC53ZWNoYXRfaWQgPSB0aGF0LmN1c3RvbWVyLndlY2hhdF9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5jdXN0b21lci5jb21tX3Byb29mKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5jdXN0b21lci5jb21tX3Byb29mLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJfcmVtYXJrID0gdGhhdC5jdXN0b21lci51c2VyX3JlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlZ2lvblswXSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19wcm92aW5jZV9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVnaW9uWzFdID0gdGhhdC5jdXN0b21lci53ZWRkaW5nX2NpdHlfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlZ2lvblsyXSA9IHRoYXQuY3VzdG9tZXIud2VkZGluZ19hcmVhX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldERpc3RyaWJ1dGlvblRlYW1zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IG9wdGlvbnMuaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19