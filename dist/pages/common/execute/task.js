"use strict";

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
            title: "婚礼任务单",
            isback: true,
            id: -1,
            order_id_str: -1,
            edit_base: false,
            show_img_arr: [],
            task_info: {},
            employee_list: {},
            employee_rand: ['自动分配'],
            employee_index: 0,
            is_create: false,
            display_flesh: true,
            user: null
        }, _this.methods = {
            rollback: function rollback() {
                _request2.default.get("rollbackApply", {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    wedding_task_id: that.task_info.id
                });
            },
            bindTeamChange: function bindTeamChange(e) {
                this.employee_index = e.detail.value;
            },
            goToMenu: function goToMenu() {
                _wepy2.default.navigateTo({
                    url: '../sale/ordermenu?order_id=' + this.id
                });
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
                this.confirmWeddingTask();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "confirmWeddingTask",
        value: function confirmWeddingTask() {
            var that = this;
            _request2.default.get("distributionTask", {
                200: function _(result) {
                    _wepy2.default.showToast({
                        title: '分配成功', //提示的内容,
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
                employee_id: that.employee_index ? that.employee_list[that.employee_index - 1].id : ''
            });
        }
    }, {
        key: "onLoad",
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.order_id_str = options.order_id_str;
            var user = this.user = _wepy2.default.getStorageSync('user');
            _request2.default.get("getWeddingTask", {
                200: function _(result) {
                    that.task_info = result.data.data;
                    that.$apply();
                }
            }, {
                order_id_str: that.order_id_str,
                order_id: that.id
            });
            _request2.default.get("getLoginerTeamEmployee", {
                200: function _(result) {
                    that.employee_list = result.data.employee_list;
                    that.employee_list.forEach(function (element) {
                        that.employee_rand.push(element.employee_name);
                    });
                    that.$apply();
                }
            }, {
                team_type: 2
            });
        }
    }, {
        key: "onShow",
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/execute/task'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJpZCIsIm9yZGVyX2lkX3N0ciIsImVkaXRfYmFzZSIsInNob3dfaW1nX2FyciIsInRhc2tfaW5mbyIsImVtcGxveWVlX2xpc3QiLCJlbXBsb3llZV9yYW5kIiwiZW1wbG95ZWVfaW5kZXgiLCJpc19jcmVhdGUiLCJkaXNwbGF5X2ZsZXNoIiwidXNlciIsIm1ldGhvZHMiLCJyb2xsYmFjayIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwid2VkZGluZ190YXNrX2lkIiwidGhhdCIsImJpbmRUZWFtQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiZ29Ub01lbnUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZElucHV0TWFyayIsImNvbnRyYWN0X3JlbWFyayIsInVwbG9hZEZpbGUiLCJ3eCIsImNob29zZUltYWdlIiwiY291bnQiLCJzdWNjZXNzIiwiZmlsZSIsInVwTG9hZEltZ3MiLCJDIiwiRU5WX1VSTCIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJuYW1lcyIsInVybHMiLCJjb25jYXQiLCIkYXBwbHkiLCJmYWlsIiwiY29tcGxldGUiLCJiaW5kSW5wdXRPcGVyYXRpb25NYXJrIiwiaW5zdHJ1Y3Rpb25fb3BlcmF0aW9uIiwiYmluZElucHV0Um9vbU1hcmsiLCJpbnN0cnVjdGlvbl9yb29tIiwiYmluZElucHV0RW5naW5uZXJNYXJrIiwiaW5zdHJ1Y3Rpb25fZW5naW5lZXJpbmciLCJiaW5kSW5wdXRLaXRjaGVuTWFyayIsImluc3RydWN0aW9uX2tpdGNoZW4iLCJiaW5kSW5wdXRBY3RUeXBlIiwidGFza190eXBlIiwiYmluZElucHV0VGFibGVUeXBlIiwid2VkZGluZ190YWJsZV90eXBlIiwiYmluZElucHV0VGFibGVOdW1iZXIiLCJ3ZWRkaW5nX3RhYmxlX251bWJlciIsImJpbmRJbnB1dE1lYWxTZWN0aW9uIiwid2VkZGluZ19tZWFsX3NlY3Rpb24iLCJzdWJtaXQiLCJjb25maXJtV2VkZGluZ1Rhc2siLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiZW1wbG95ZWVfaWQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCJvcmRlcl9pZCIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsImVtcGxveWVlX25hbWUiLCJ0ZWFtX3R5cGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxPQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsZ0JBQUksQ0FBQyxDQUpGO0FBS0hDLDBCQUFjLENBQUMsQ0FMWjtBQU1IQyx1QkFBVyxLQU5SO0FBT0hDLDBCQUFjLEVBUFg7QUFRSEMsdUJBQVcsRUFSUjtBQVNIQywyQkFBZSxFQVRaO0FBVUhDLDJCQUFlLENBQUMsTUFBRCxDQVZaO0FBV0hDLDRCQUFnQixDQVhiO0FBWUhDLHVCQUFXLEtBWlI7QUFhSEMsMkJBQWUsSUFiWjtBQWNIQyxrQkFBTTtB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QUw7QUFDSDtBQUpvQixhQUF6QixFQUtHO0FBQ0MxQyw4QkFBY2tCLEtBQUtsQixZQURwQjtBQUVDeUUsMEJBQVV2RCxLQUFLbkI7QUFGaEIsYUFMSDtBQVNBYSw4QkFBR0MsR0FBSCxDQUFPLHdCQUFQLEVBQWlDO0FBQzdCLHFCQUFLLG1CQUFVO0FBQ1hLLHlCQUFLZCxhQUFMLEdBQXFCb0UsT0FBTzdFLElBQVAsQ0FBWVMsYUFBakM7QUFDQWMseUJBQUtkLGFBQUwsQ0FBbUJzRSxPQUFuQixDQUEyQixtQkFBVztBQUNsQ3hELDZCQUFLYixhQUFMLENBQW1Cc0UsSUFBbkIsQ0FBd0JDLFFBQVFDLGFBQWhDO0FBQ0gscUJBRkQ7QUFHQTNELHlCQUFLd0IsTUFBTDtBQUNIO0FBUDRCLGFBQWpDLEVBUUc7QUFDQ29DLDJCQUFXO0FBRFosYUFSSDtBQVdIOzs7aUNBQ1EsQ0FBRTs7OztFQTlJb0JoRSxlQUFLaUUsSTs7a0JBQW5CM0YsSyIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBpbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuICAgIGltcG9ydCBDIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnXCI7XG4gICAgaW1wb3J0IHJxIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdFwiO1xuICAgIGltcG9ydCB0b29sIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbFwiO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlXCI7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlXCI7XG4gICAgaW1wb3J0IGRhdCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGVcIjtcbiAgICBpbXBvcnQgZmlsZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGVcIjtcbiAgICBpbXBvcnQgY3NzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Nzc1wiO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIuWpmuekvOS7u+WKoeWNlVwiLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgb3JkZXJfaWRfc3RyOiAtMSxcbiAgICAgICAgICAgIGVkaXRfYmFzZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93X2ltZ19hcnI6IFtdLFxuICAgICAgICAgICAgdGFza19pbmZvOiB7fSxcbiAgICAgICAgICAgIGVtcGxveWVlX2xpc3Q6IHt9LFxuICAgICAgICAgICAgZW1wbG95ZWVfcmFuZDogWyfoh6rliqjliIbphY0nXSxcbiAgICAgICAgICAgIGVtcGxveWVlX2luZGV4OiAwLFxuICAgICAgICAgICAgaXNfY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXlfZmxlc2g6IHRydWUsXG4gICAgICAgICAgICB1c2VyOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByb2xsYmFjaygpIHtcbiAgICAgICAgICAgICAgICBycS5nZXQoXCJyb2xsYmFja0FwcGx5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX3Rhc2tfaWQ6IHRoYXQudGFza19pbmZvLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFRlYW1DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvTWVudSgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9zYWxlL29yZGVybWVudT9vcmRlcl9pZD0nICsgdGhpcy5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLmNvbnRyYWN0X3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IFwiOVwiLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudXBMb2FkSW1ncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDLkVOVl9VUkwgKyBcInVwbG9hZENvbW1Qcm9vZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50ZW1wRmlsZVBhdGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIFtdLCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihuYW1lcywgdXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhhdC5zaG93X2ltZ19hcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC8v6L+U5Zue5Zu+54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGoIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPcGVyYXRpb25NYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tfaW5mby5pbnN0cnVjdGlvbl9vcGVyYXRpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRSb29tTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fcm9vbSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEVuZ2lubmVyTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fZW5naW5lZXJpbmcgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRLaXRjaGVuTWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8uaW5zdHJ1Y3Rpb25fa2l0Y2hlbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEFjdFR5cGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLnRhc2tfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFRhYmxlVHlwZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrX2luZm8ud2VkZGluZ190YWJsZV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGFibGVOdW1iZXIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLndlZGRpbmdfdGFibGVfbnVtYmVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TWVhbFNlY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza19pbmZvLndlZGRpbmdfbWVhbF9zZWN0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVdlZGRpbmdUYXNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbmZpcm1XZWRkaW5nVGFzaygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldChcImRpc3RyaWJ1dGlvblRhc2tcIiwge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliIbphY3miJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgd2VkZGluZ190YXNrX2lkOiB0aGF0LnRhc2tfaW5mby5pZCxcbiAgICAgICAgICAgICAgICBlbXBsb3llZV9pZDogdGhhdC5lbXBsb3llZV9pbmRleCA/IHRoYXQuZW1wbG95ZWVfbGlzdFt0aGF0LmVtcGxveWVlX2luZGV4IC0gMV0uaWQgOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGF0Lm9yZGVyX2lkX3N0ciA9IG9wdGlvbnMub3JkZXJfaWRfc3RyO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBycS5nZXQoXCJnZXRXZWRkaW5nVGFza1wiLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRhc2tfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkX3N0cjogdGhhdC5vcmRlcl9pZF9zdHIsXG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcnEuZ2V0KFwiZ2V0TG9naW5lclRlYW1FbXBsb3llZVwiLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZW1wbG95ZWVfcmFuZC5wdXNoKGVsZW1lbnQuZW1wbG95ZWVfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0ZWFtX3R5cGU6IDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19