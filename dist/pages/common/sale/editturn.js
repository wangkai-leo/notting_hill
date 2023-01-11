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
            title: '转让申请',
            id: '',
            customer: null,
            teams_rand: [],
            employee_list: [],
            employee_list_index: -1,
            teams: null,
            status_remark: '',
            intention: null,
            intention_rand: [],
            intention_index: 0,
            ord_intention_index: 0,
            team_index: 0,
            show_img_arr: [],
            isback: true
        }, _this.methods = {
            bindIntentChange: function bindIntentChange(e) {
                this.intention_index = e.detail.value;
                this.customer.intention_name = this.intention_rand[this.intention_index];
                this.getTeamList();
            },
            inputLog: function inputLog(e) {
                this.status_remark = e.detail.value;
            },
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: '9', //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
                            // that.upload_img_arr = that.upload_img_arr.concat(names);
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            console.log(that.show_img_arr);
                            that.$apply();
                        });
                        // that.$apply();
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            bindEmployeeChange: function bindEmployeeChange(e) {
                this.employee_list_index = e.detail.value;
            },
            bindTeamChange: function bindTeamChange(e) {
                this.team_index = e.detail.value;
                this.getTeamEmployee();
            },
            submit: function submit() {
                var that = this;
                // if (that.intention_index == that.ord_intention_index) {
                //     wepy.showToast({
                //         title: '请选择转让意向', //提示的内容,
                //         icon: 'none', //图标,
                //         duration: 2000, //延迟时间,
                //         mask: true, //显示透明蒙层，防止触摸穿透,
                //         success: res => {}
                //     });
                //     return false;
                // }
                console.log(that.intention_index);
                console.log(that.intention[that.intention_index].id);

                var data = {
                    user_id: that.id,
                    intention_id: that.intention[that.intention_index].id,
                    user_name: that.customer.user_name,
                    user_mobile: that.customer.user_mobile,
                    wechat_id: that.customer.wechat_id,
                    comm_proof: that.show_img_arr.join(','),
                    user_remark: that.status_remark,
                    designated_team: that.teams[that.team_index].id
                };
                if (that.employee_list_index != -1) {
                    data['designated_employee'] = that.employee_list[that.employee_list_index].id;
                }
                _request2.default.get('submitTransferCustomer', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getTeamList',
        value: function getTeamList() {
            var that = this;
            _request2.default.get('getTeams', {
                200: function _(result) {
                    var purpose = [];
                    that.teams = result.data.data;
                    that.teams.forEach(function (element) {
                        purpose.push(element.team_name);
                    });
                    that.teams_rand = purpose;
                    that.team_index = 0;
                    that.$apply();
                    that.getTeamEmployee();
                }
            }, {
                intention_id: this.intention[this.intention_index].id
            });
        }
    }, {
        key: 'getTeamEmployee',
        value: function getTeamEmployee() {
            var that = this;
            //如果不存在这个团队的话，提示
            if (!that.teams[that.team_index]) {
                _wepy2.default.showToast({
                    title: '该意向暂无团队，不能发起申请', //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: true, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                });
                return false;
            }
            _request2.default.get('getTeamEmployee', {
                200: function _(result) {
                    that.employee_list = result.data.employee_list;
                    that.employee_list_index = -1;
                    that.$apply();
                }
            }, {
                employee_team_id: that.teams[that.team_index].id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('transferCustomerInfo', {
                200: function _(result) {
                    that.customer = result.data.user_info;
                    that.teams = result.data.teams;
                    that.intention = result.data.intention;
                    // let purpose = [];
                    // result.data.teams.forEach(element => {
                    //     purpose.push(element.team_name);
                    // });
                    // that.teams_rand = purpose;
                    var pur = [];
                    var i = 0;
                    that.intention.forEach(function (element) {
                        if (element.intention_name == that.customer.intention_name) {
                            that.intention_index = i;
                            that.ord_intention_index = i;
                        }
                        pur.push(element.intention_name);
                        i++;
                    });
                    that.intention_rand = pur;
                    that.$apply();
                    that.getTeamList();
                }
            }, {
                user_id: options.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/editturn'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXR0dXJuLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaWQiLCJjdXN0b21lciIsInRlYW1zX3JhbmQiLCJlbXBsb3llZV9saXN0IiwiZW1wbG95ZWVfbGlzdF9pbmRleCIsInRlYW1zIiwic3RhdHVzX3JlbWFyayIsImludGVudGlvbiIsImludGVudGlvbl9yYW5kIiwiaW50ZW50aW9uX2luZGV4Iiwib3JkX2ludGVudGlvbl9pbmRleCIsInRlYW1faW5kZXgiLCJzaG93X2ltZ19hcnIiLCJpc2JhY2siLCJtZXRob2RzIiwiYmluZEludGVudENoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImludGVudGlvbl9uYW1lIiwiZ2V0VGVhbUxpc3QiLCJpbnB1dExvZyIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJjb21wbGV0ZSIsImJpbmRFbXBsb3llZUNoYW5nZSIsImJpbmRUZWFtQ2hhbmdlIiwiZ2V0VGVhbUVtcGxveWVlIiwic3VibWl0IiwidXNlcl9pZCIsImludGVudGlvbl9pZCIsInVzZXJfbmFtZSIsInVzZXJfbW9iaWxlIiwid2VjaGF0X2lkIiwiY29tbV9wcm9vZiIsImpvaW4iLCJ1c2VyX3JlbWFyayIsImRlc2lnbmF0ZWRfdGVhbSIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicHVycG9zZSIsInJlc3VsdCIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsInRlYW1fbmFtZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJlbXBsb3llZV90ZWFtX2lkIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInVzZXJfaW5mbyIsInB1ciIsImkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLGdCQUFJLEVBSEQ7QUFJSEMsc0JBQVUsSUFKUDtBQUtIQyx3QkFBWSxFQUxUO0FBTUhDLDJCQUFlLEVBTlo7QUFPSEMsaUNBQXFCLENBQUMsQ0FQbkI7QUFRSEMsbUJBQU8sSUFSSjtBQVNIQywyQkFBZSxFQVRaO0FBVUhDLHVCQUFXLElBVlI7QUFXSEMsNEJBQWdCLEVBWGI7QUFZSEMsNkJBQWlCLENBWmQ7QUFhSEMsaUNBQXFCLENBYmxCO0FBY0hDLHdCQUFZLENBZFQ7QUFlSEMsMEJBQWMsRUFmWDtBQWdCSEMsb0JBQVE7QUFoQkwsUyxRQWtCUEMsTyxHQUFVO0FBQ05DLDRCQURNLDRCQUNXQyxDQURYLEVBQ2M7QUFDaEIscUJBQUtQLGVBQUwsR0FBdUJPLEVBQUVDLE1BQUYsQ0FBU0MsS0FBaEM7QUFDQSxxQkFBS2pCLFFBQUwsQ0FBY2tCLGNBQWQsR0FBK0IsS0FBS1gsY0FBTCxDQUFvQixLQUFLQyxlQUF6QixD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SUFBWDtBQUNBQSxpQkFBS3ZCLEVBQUwsR0FBVXVFLFFBQVF2RSxFQUFsQjtBQUNBdUQsOEJBQUdDLEdBQUgsQ0FBTyxzQkFBUCxFQUErQjtBQUMzQixxQkFBSyxtQkFBVTtBQUNYakMseUJBQUt0QixRQUFMLEdBQWdCNEQsT0FBT2hFLElBQVAsQ0FBWTZFLFNBQTVCO0FBQ0FuRCx5QkFBS2xCLEtBQUwsR0FBYXdELE9BQU9oRSxJQUFQLENBQVlRLEtBQXpCO0FBQ0FrQix5QkFBS2hCLFNBQUwsR0FBaUJzRCxPQUFPaEUsSUFBUCxDQUFZVSxTQUE3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBSW9FLE1BQU0sRUFBVjtBQUNBLHdCQUFJQyxJQUFJLENBQVI7QUFDQXJELHlCQUFLaEIsU0FBTCxDQUFldUQsT0FBZixDQUF1QixtQkFBVztBQUM5Qiw0QkFBSUUsUUFBUTdDLGNBQVIsSUFBMEJJLEtBQUt0QixRQUFMLENBQWNrQixjQUE1QyxFQUE0RDtBQUN4REksaUNBQUtkLGVBQUwsR0FBdUJtRSxDQUF2QjtBQUNBckQsaUNBQUtiLG1CQUFMLEdBQTJCa0UsQ0FBM0I7QUFDSDtBQUNERCw0QkFBSVosSUFBSixDQUFTQyxRQUFRN0MsY0FBakI7QUFDQXlEO0FBQ0gscUJBUEQ7QUFRQXJELHlCQUFLZixjQUFMLEdBQXNCbUUsR0FBdEI7QUFDQXBELHlCQUFLZ0IsTUFBTDtBQUNBaEIseUJBQUtILFdBQUw7QUFDSDtBQXZCMEIsYUFBL0IsRUF3Qkc7QUFDQzBCLHlCQUFTeUIsUUFBUXZFO0FBRGxCLGFBeEJIO0FBMkJIOzs7aUNBQ1EsQ0FBRTs7OztFQXpLb0J5RCxlQUFLb0IsSTs7a0JBQW5CdkYsSyIsImZpbGUiOiJlZGl0dHVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn6L2s6K6p55Sz6K+3JyxcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsLFxuICAgICAgICAgICAgdGVhbXNfcmFuZDogW10sXG4gICAgICAgICAgICBlbXBsb3llZV9saXN0OiBbXSxcbiAgICAgICAgICAgIGVtcGxveWVlX2xpc3RfaW5kZXg6IC0xLFxuICAgICAgICAgICAgdGVhbXM6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXNfcmVtYXJrOiAnJyxcbiAgICAgICAgICAgIGludGVudGlvbjogbnVsbCxcbiAgICAgICAgICAgIGludGVudGlvbl9yYW5kOiBbXSxcbiAgICAgICAgICAgIGludGVudGlvbl9pbmRleDogMCxcbiAgICAgICAgICAgIG9yZF9pbnRlbnRpb25faW5kZXg6IDAsXG4gICAgICAgICAgICB0ZWFtX2luZGV4OiAwLFxuICAgICAgICAgICAgc2hvd19pbWdfYXJyOiBbXSxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRJbnRlbnRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZW50aW9uX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lci5pbnRlbnRpb25fbmFtZSA9IHRoaXMuaW50ZW50aW9uX3JhbmRbdGhpcy5pbnRlbnRpb25faW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGVhbUxpc3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dExvZyhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfcmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogJzknLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudXBMb2FkSW1ncyhDLkVOVl9VUkwgKyAndXBsb2FkQ29tbVByb29mJywgcmVzLnRlbXBGaWxlUGF0aHMsIDAsIFtdLCBbXSwgZnVuY3Rpb24obmFtZXMsIHVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LnVwbG9hZF9pbWdfYXJyID0gdGhhdC51cGxvYWRfaW1nX2Fyci5jb25jYXQobmFtZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5zaG93X2ltZ19hcnIuY29uY2F0KHVybHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAvL+i/lOWbnuWbvueJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqCB0ZW1wRmlsZVBhdGhzLFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEVtcGxveWVlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlX2xpc3RfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kVGVhbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUZWFtRW1wbG95ZWUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIGlmICh0aGF0LmludGVudGlvbl9pbmRleCA9PSB0aGF0Lm9yZF9pbnRlbnRpb25faW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6ICfor7fpgInmi6novazorqnmhI/lkJEnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmludGVudGlvbl9pbmRleClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmludGVudGlvblt0aGF0LmludGVudGlvbl9pbmRleF0uaWQpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LmludGVudGlvblt0aGF0LmludGVudGlvbl9pbmRleF0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdGhhdC5jdXN0b21lci51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LmN1c3RvbWVyLnVzZXJfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6IHRoYXQuY3VzdG9tZXIud2VjaGF0X2lkLFxuICAgICAgICAgICAgICAgICAgICBjb21tX3Byb29mOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfcmVtYXJrOiB0aGF0LnN0YXR1c19yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmF0ZWRfdGVhbTogdGhhdC50ZWFtc1t0aGF0LnRlYW1faW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoYXQuZW1wbG95ZWVfbGlzdF9pbmRleCE9LTEpe1xuICAgICAgICAgICAgICAgICAgZGF0YVsnZGVzaWduYXRlZF9lbXBsb3llZSddPXRoYXQuZW1wbG95ZWVfbGlzdFt0aGF0LmVtcGxveWVlX2xpc3RfaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycS5nZXQoJ3N1Ym1pdFRyYW5zZmVyQ3VzdG9tZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGdldFRlYW1MaXN0KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRUZWFtcycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwdXJwb3NlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlLnB1c2goZWxlbWVudC50ZWFtX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtc19yYW5kID0gcHVycG9zZTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRUZWFtRW1wbG95ZWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGlzLmludGVudGlvblt0aGlzLmludGVudGlvbl9pbmRleF0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZ2V0VGVhbUVtcGxveWVlKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgLy/lpoLmnpzkuI3lrZjlnKjov5nkuKrlm6LpmJ/nmoTor53vvIzmj5DnpLpcbiAgICAgICAgICAgIGlmICghdGhhdC50ZWFtc1t0aGF0LnRlYW1faW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivpeaEj+WQkeaaguaXoOWboumYn++8jOS4jeiDveWPkei1t+eUs+ivtycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBycS5nZXQoJ2dldFRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdCA9IHJlc3VsdC5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdF9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZV90ZWFtX2lkOiB0aGF0LnRlYW1zW3RoYXQudGVhbV9pbmRleF0uaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ3RyYW5zZmVyQ3VzdG9tZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXN0b21lciA9IHJlc3VsdC5kYXRhLnVzZXJfaW5mbztcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLnRlYW1zO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmludGVudGlvbiA9IHJlc3VsdC5kYXRhLmludGVudGlvbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHB1cnBvc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0LmRhdGEudGVhbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHB1cnBvc2UucHVzaChlbGVtZW50LnRlYW1fbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LnRlYW1zX3JhbmQgPSBwdXJwb3NlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHVyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbnRlbnRpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmludGVudGlvbl9uYW1lID09IHRoYXQuY3VzdG9tZXIuaW50ZW50aW9uX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmludGVudGlvbl9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRfaW50ZW50aW9uX2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQuaW50ZW50aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbnRlbnRpb25fcmFuZCA9IHB1cjtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRUZWFtTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBvcHRpb25zLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19