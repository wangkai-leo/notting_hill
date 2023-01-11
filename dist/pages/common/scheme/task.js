"use strict";

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
            title: "婚礼任务单",
            isback: true,
            id: -1,
            order_id_str: -1,
            edit_base: false,
            show_img_arr: [],
            task_info: {},
            teams_info: {},
            teams_index: 0,
            is_create: false,
            display_flesh: true
        }, _this.methods = {
            bindInputArriveTime: function bindInputArriveTime(e) {
                this.task_info.arrival_time = e.detail.value;
            },
            bindInputOtherMark: function bindInputOtherMark(e) {
                this.task_info.instruction_other = e.detail.value;
            },
            send: function send() {
                this.confirmWeddingTask(false);
            },
            bindTeamChange: function bindTeamChange(e) {
                this.teams_index = e.detail.value;
            },
            bindInputMark: function bindInputMark(e) {
                this.task_info.contract_remark = e.detail.value;
            },
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: "9", //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + "uploadCommProof", res.tempFilePaths, 0, [], [], function (names, urls) {
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            // console.log(that.show_img_arr);
                            that.$apply();
                        });
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            bindInputOperationMark: function bindInputOperationMark(e) {
                this.task_info.instruction_operation = e.detail.value;
            },
            bindInputRoomMark: function bindInputRoomMark(e) {
                this.task_info.instruction_room = e.detail.value;
            },
            bindInputEnginnerMark: function bindInputEnginnerMark(e) {
                this.task_info.instruction_engineering = e.detail.value;
            },
            bindInputKitchenMark: function bindInputKitchenMark(e) {
                this.task_info.instruction_kitchen = e.detail.value;
            },
            bindInputActType: function bindInputActType(e) {
                this.task_info.task_type = e.detail.value;
            },
            bindInputTableType: function bindInputTableType(e) {
                this.task_info.wedding_table_type = e.detail.value;
            },
            bindInputTableNumber: function bindInputTableNumber(e) {
                this.task_info.wedding_table_number = e.detail.value;
            },
            bindInputMealSection: function bindInputMealSection(e) {
                this.task_info.wedding_meal_section = e.detail.value;
            },
            submit: function submit() {
                this.confirmWeddingTask(true);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "confirmWeddingTask",
        value: function confirmWeddingTask(is_save) {
            var that = this;
            _request2.default.get("updateWeddingTask", {
                200: function _(result) {
                    if (!is_save) {
                        _request2.default.get("confirmWeddingTask", {
                            200: function _(result) {
                                _wepy2.default.showToast({
                                    title: '提交成功', //提示的内容,
                                    icon: 'none', //图标,
                                    duration: 2000, //延迟时间,
                                    mask: true, //显示透明蒙层，防止触摸穿透,
                                    success: function success(res) {}
                                });
                                _wepy2.default.navigateBack({
                                    delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                                });
                            }
                        }, {
                            wedding_task_id: that.task_info.id,
                            team_id: that.teams_info[that.teams_index].id
                        });
                    } else {
                        _wepy2.default.showToast({
                            title: '保持成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }
            }, {
                wedding_task_id: that.task_info.id,
                main_contract: that.task_info.main_contract,
                task_type: that.task_info.task_type,
                groom_name: that.task_info.groom_name,
                groom_mobile: that.task_info.groom_mobile,
                bride_name: that.task_info.bride_name,
                bride_mobile: that.task_info.bride_mobile,
                sales_id: that.task_info.sales_id,
                planner_id: that.task_info.planner_id,
                wedding_date: that.task_info.wedding_date,
                arrival_time: that.task_info.arrival_time,
                wedding_session: that.task_info.wedding_session,
                wedding_meal_section: that.task_info.wedding_meal_section,
                wedding_table_type: that.task_info.wedding_table_type,
                wedding_table_number: that.task_info.wedding_table_number,
                package_info: JSON.stringify(that.task_info.package_info),
                instruction_operation: that.task_info.instruction_operation,
                instruction_room: that.task_info.instruction_room,
                instruction_engineering: that.task_info.instruction_engineering,
                instruction_kitchen: that.task_info.instruction_kitchen,
                instruction_other: that.task_info.instruction_other,
                wedding_address: that.task_info.wedding_address,
                team_id: that.teams_info[that.teams_index].id
            });
        }
    }, {
        key: "onLoad",
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.order_id_str = options.order_id_str;
            _request2.default.get("getWeddingTask", {
                200: function _(result) {
                    that.task_info = result.data.data;
                    that.$apply();
                    _request2.default.get("getTeams", {
                        200: function _(result) {
                            that.teams_info = result.data.data;
                            var i = 0;
                            that.teams_info.forEach(function (element) {
                                if (element.team_name == that.task_info.team_name) {
                                    that.teams_index = i;
                                }
                                i++;
                            });
                            that.$apply();
                        }
                    }, {
                        team_type: 2
                    });
                }
            }, {
                order_id_str: that.order_id_str,
                order_id: that.id
            });
        }
    }, {
        key: "onShow",
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/task'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJpZCIsIm9yZGVyX2lkX3N0ciIsImVkaXRfYmFzZSIsInNob3dfaW1nX2FyciIsInRhc2tfaW5mbyIsInRlYW1zX2luZm8iLCJ0ZWFtc19pbmRleCIsImlzX2NyZWF0ZSIsImRpc3BsYXlfZmxlc2giLCJtZXRob2RzIiwiYmluZElucHV0QXJyaXZlVGltZSIsImUiLCJhcnJpdmFsX3RpbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRJbnB1dE90aGVyTWFyayIsImluc3RydWN0aW9uX290aGVyIiwic2VuZCIsImNvbmZpcm1XZWRkaW5nVGFzayIsImJpbmRUZWFtQ2hhbmdlIiwiYmluZElucHV0TWFyayIsImNvbnRyYWN0X3JlbWFyayIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiJGFwcGx5IiwiZmFpbCIsImNvbXBsZXRlIiwiYmluZElucHV0T3BlcmF0aW9uTWFyayIsImluc3RydWN0aW9uX29wZXJhdGlvbiIsImJpbmRJbnB1dFJvb21NYXJrIiwiaW5zdHJ1Y3Rpb25fcm9vbSIsImJpbmRJbnB1dEVuZ2lubmVyTWFyayIsImluc3RydWN0aW9uX2VuZ2luZWVyaW5nIiwiYmluZElucHV0S2l0Y2hlbk1hcmsiLCJpbnN0cnVjdGlvbl9raXRjaGVuIiwiYmluZElucHV0QWN0VHlwZSIsInRhc2tfdHlwZSIsImJpbmRJbnB1dFRhYmxlVHlwZSIsIndlZGRpbmdfdGFibGVfdHlwZSIsImJpbmRJbnB1dFRhYmxlTnVtYmVyIiwid2VkZGluZ190YWJsZV9udW1iZXIiLCJiaW5kSW5wdXRNZWFsU2VjdGlvbiIsIndlZGRpbmdfbWVhbF9zZWN0aW9uIiwic3VibWl0IiwiaXNfc2F2ZSIsInJxIiwiZ2V0Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIndlZGRpbmdfdGFza19pZCIsInRlYW1faWQiLCJtYWluX2NvbnRyYWN0IiwiZ3Jvb21fbmFtZSIsImdyb29tX21vYmlsZSIsImJyaWRlX25hbWUiLCJicmlkZV9tb2JpbGUiLCJzYWxlc19pZCIsInBsYW5uZXJfaWQiLCJ3ZWRkaW5nX2RhdGUiLCJ3ZWRkaW5nX3Nlc3Npb24iLCJwYWNrYWdlX2luZm8iLCJKU09OIiwic3RyaW5naWZ5Iiwid2VkZGluZ19hZGRyZXNzIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInJlc3VsdCIsImkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRlYW1fbmFtZSIsInRlYW1fdHlwZSIsIm9yZGVyX2lkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE9BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyxnQkFBSSxDQUFDLENBSkY7QUFLSEMsMEJBQWMsQ0FBQyxDQUxaO0FBTUhDLHVCQUFXLEtB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ay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG4gICAgaW1wb3J0IEMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25maWdcIjtcbiAgICBpbXBvcnQgcnEgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0XCI7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sXCI7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlXCI7XG4gICAgXG4gICAgXG4gICAgaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogXCLlqZrnpLzku7vliqHljZVcIixcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIG9yZGVyX2lkX3N0cjogLTEsXG4gICAgICAgICAgICBlZGl0X2Jhc2U6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19pbWdfYXJyOiBbXSxcbiAgICAgICAgICAgIHRhc2tfaW5mbzoge30sXG4gICAgICAgICAgICB0ZWFtc19pbmZvOiB7fSxcbiAgICAgICAgICAgIHRlYW1zX2luZGV4OiAwLFxuICAgICAgICAgICAgaXNfY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXlfZmxlc2g6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRJbnB1dEFycml2ZVRpbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLmFycml2YWxfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE90aGVyTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fb3RoZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVdlZGRpbmdUYXNrKGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kVGVhbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLmNvbnRyYWN0X3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IFwiOVwiLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudXBMb2FkSW1ncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDLkVOVl9VUkwgKyBcInVwbG9hZENvbW1Qcm9vZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50ZW1wRmlsZVBhdGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIFtdLCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihuYW1lcywgdXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhhdC5zaG93X2ltZ19hcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC8v6L+U5Zue5Zu+54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGoIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPcGVyYXRpb25NYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tfaW5mby5pbnN0cnVjdGlvbl9vcGVyYXRpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRSb29tTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fcm9vbSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEVuZ2lubmVyTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fZW5naW5lZXJpbmcgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRLaXRjaGVuTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fa2l0Y2hlbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEFjdFR5cGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLnRhc2tfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFRhYmxlVHlwZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8ud2VkZGluZ190YWJsZV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGFibGVOdW1iZXIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLndlZGRpbmdfdGFibGVfbnVtYmVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TWVhbFNlY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLndlZGRpbmdfbWVhbF9zZWN0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVdlZGRpbmdUYXNrKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25maXJtV2VkZGluZ1Rhc2soaXNfc2F2ZSkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KFwidXBkYXRlV2VkZGluZ1Rhc2tcIiwge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc19zYXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBycS5nZXQoXCJjb25maXJtV2VkZGluZ1Rhc2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ190YXNrX2lkOiB0aGF0LnRhc2tfaW5mby5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtX2lkOiB0aGF0LnRlYW1zX2luZm9bdGhhdC50ZWFtc19pbmRleF0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5oyB5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB3ZWRkaW5nX3Rhc2tfaWQ6IHRoYXQudGFza19pbmZvLmlkLFxuICAgICAgICAgICAgICAgIG1haW5fY29udHJhY3Q6IHRoYXQudGFza19pbmZvLm1haW5fY29udHJhY3QsXG4gICAgICAgICAgICAgICAgdGFza190eXBlOiB0aGF0LnRhc2tfaW5mby50YXNrX3R5cGUsXG4gICAgICAgICAgICAgICAgZ3Jvb21fbmFtZTogdGhhdC50YXNrX2luZm8uZ3Jvb21fbmFtZSxcbiAgICAgICAgICAgICAgICBncm9vbV9tb2JpbGU6IHRoYXQudGFza19pbmZvLmdyb29tX21vYmlsZSxcbiAgICAgICAgICAgICAgICBicmlkZV9uYW1lOiB0aGF0LnRhc2tfaW5mby5icmlkZV9uYW1lLFxuICAgICAgICAgICAgICAgIGJyaWRlX21vYmlsZTogdGhhdC50YXNrX2luZm8uYnJpZGVfbW9iaWxlLFxuICAgICAgICAgICAgICAgIHNhbGVzX2lkOiB0aGF0LnRhc2tfaW5mby5zYWxlc19pZCxcbiAgICAgICAgICAgICAgICBwbGFubmVyX2lkOiB0aGF0LnRhc2tfaW5mby5wbGFubmVyX2lkLFxuICAgICAgICAgICAgICAgIHdlZGRpbmdfZGF0ZTogdGhhdC50YXNrX2luZm8ud2VkZGluZ19kYXRlLFxuICAgICAgICAgICAgICAgIGFycml2YWxfdGltZTogdGhhdC50YXNrX2luZm8uYXJyaXZhbF90aW1lLFxuICAgICAgICAgICAgICAgIHdlZGRpbmdfc2Vzc2lvbjogdGhhdC50YXNrX2luZm8ud2VkZGluZ19zZXNzaW9uLFxuICAgICAgICAgICAgICAgIHdlZGRpbmdfbWVhbF9zZWN0aW9uOiB0aGF0LnRhc2tfaW5mby53ZWRkaW5nX21lYWxfc2VjdGlvbixcbiAgICAgICAgICAgICAgICB3ZWRkaW5nX3RhYmxlX3R5cGU6IHRoYXQudGFza19pbmZvLndlZGRpbmdfdGFibGVfdHlwZSxcbiAgICAgICAgICAgICAgICB3ZWRkaW5nX3RhYmxlX251bWJlcjogdGhhdC50YXNrX2luZm8ud2VkZGluZ190YWJsZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgcGFja2FnZV9pbmZvOiBKU09OLnN0cmluZ2lmeSh0aGF0LnRhc2tfaW5mby5wYWNrYWdlX2luZm8pLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uX29wZXJhdGlvbjogdGhhdC50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fb3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uX3Jvb206IHRoYXQudGFza19pbmZvLmluc3RydWN0aW9uX3Jvb20sXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25fZW5naW5lZXJpbmc6IHRoYXQudGFza19pbmZvLmluc3RydWN0aW9uX2VuZ2luZWVyaW5nLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uX2tpdGNoZW46IHRoYXQudGFza19pbmZvLmluc3RydWN0aW9uX2tpdGNoZW4sXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25fb3RoZXI6IHRoYXQudGFza19pbmZvLmluc3RydWN0aW9uX290aGVyLFxuICAgICAgICAgICAgICAgIHdlZGRpbmdfYWRkcmVzczogdGhhdC50YXNrX2luZm8ud2VkZGluZ19hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHRlYW1faWQ6IHRoYXQudGVhbXNfaW5mb1t0aGF0LnRlYW1zX2luZGV4XS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGF0Lm9yZGVyX2lkX3N0ciA9IG9wdGlvbnMub3JkZXJfaWRfc3RyO1xuICAgICAgICAgICAgcnEuZ2V0KFwiZ2V0V2VkZGluZ1Rhc2tcIiwge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50YXNrX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoXCJnZXRUZWFtc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtc19pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtc19pbmZvLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRlYW1fbmFtZSA9PSB0aGF0LnRhc2tfaW5mby50ZWFtX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtX3R5cGU6IDJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkX3N0cjogdGhhdC5vcmRlcl9pZF9zdHIsXG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19