'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

var _request = require('./../../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _css = require('./../../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../../components/header.js');

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
            title: '状态变更',
            id: '',

            customer: null,
            isback: true,
            status_remark: '',
            show_img_arr: [],
            status_arr: ['退客申请', '客资已死'],
            status_arr_index: 0
        }, _this.methods = {
            bindStatusChange: function bindStatusChange(e) {
                this.status_arr_index = e.detail.value;
            },
            recover: function recover() {
                var that = this;
                var user_status = 21; //21 持续跟进  1客资已死
                _request2.default.get("AddFollowUpLog", {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    user_id: that.id,
                    user_status: user_status,
                    status_remark: '恢复客资料',
                    status_time_name: that.status_name
                });
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
            inputLog: function inputLog(e) {
                this.status_remark = e.detail.value;
            },
            submit: function submit(e) {
                var that = this;
                var is_pass = e.currentTarget.dataset.pass;
                if (that.status_arr_index == 0) {
                    _request2.default.get('approvedDropCustomer', {
                        200: function _(result) {
                            _wepy2.default.navigateBack({
                                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            });
                        }
                    }, {
                        drop_id: that.id,
                        user_id: that.customer.user_id,
                        sales_id: that.customer.sales_id,
                        is_pass: is_pass
                    });
                } else if (that.status_arr_index == 1) {}
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('dropCustomerDetail', {
                200: function _(result) {
                    that.customer = result.data.data;
                    that.$apply();
                }
            }, {
                drop_id: options.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/auditchargeback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0Y2hhcmdlYmFjay5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlkIiwiY3VzdG9tZXIiLCJpc2JhY2siLCJzdGF0dXNfcmVtYXJrIiwic2hvd19pbWdfYXJyIiwic3RhdHVzX2FyciIsInN0YXR1c19hcnJfaW5kZXgiLCJtZXRob2RzIiwiYmluZFN0YXR1c0NoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlY292ZXIiLCJ0aGF0IiwidXNlcl9zdGF0dXMiLCJycSIsImdldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsInVzZXJfaWQiLCJzdGF0dXNfdGltZV9uYW1lIiwic3RhdHVzX25hbWUiLCJ1cGxvYWRGaWxlIiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJjb21wbGV0ZSIsImlucHV0TG9nIiwic3VibWl0IiwiaXNfcGFzcyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicGFzcyIsImRyb3BfaWQiLCJzYWxlc19pZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFB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eUIsQ0FBN0IsRUFBZ0MsQ0FDdEM7QUFDSjtBQTNESyxTOzs7OzsrQkE2REg0QyxPLEVBQVM7QUFDWkEsc0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsZ0JBQUlyQyxPQUFPLElBQVg7QUFDQUEsaUJBQUtiLEVBQUwsR0FBVWtELFFBQVFsRCxFQUFsQjtBQUNBZSw4QkFBR0MsR0FBSCxDQUFPLG9CQUFQLEVBQTZCO0FBQ3pCLHFCQUFLLG1CQUFVO0FBQ1hILHlCQUFLWixRQUFMLEdBQWdCb0QsT0FBT3hELElBQVAsQ0FBWUEsSUFBNUI7QUFDQWdCLHlCQUFLTyxNQUFMO0FBQ0g7QUFKd0IsYUFBN0IsRUFLRztBQUNDNEIseUJBQVNFLFFBQVFsRDtBQURsQixhQUxIO0FBUUg7OztpQ0FDUSxDQUFFOzs7O0VBOUZvQmlCLGVBQUtxQyxJOztrQkFBbkJoRSxLIiwiZmlsZSI6ImF1ZGl0Y2hhcmdlYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBDIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn54q25oCB5Y+Y5pu0JyxcbiAgICAgICAgICAgIGlkOiAnJyxcblxuICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXNfcmVtYXJrOiAnJyxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBzdGF0dXNfYXJyOiBbJ+mAgOWuoueUs+ivtycsICflrqLotYTlt7LmrbsnXSxcbiAgICAgICAgICAgIHN0YXR1c19hcnJfaW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRTdGF0dXNDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX2Fycl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY292ZXIoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyX3N0YXR1cyA9IDIxOyAvLzIxIOaMgee7rei3n+i/myAgMeWuoui1hOW3suatu1xuICAgICAgICAgICAgICAgIHJxLmdldChcIkFkZEZvbGxvd1VwTG9nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXM6IHVzZXJfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNfcmVtYXJrOiAn5oGi5aSN5a6i6LWE5paZJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzX3RpbWVfbmFtZTogdGhhdC5zdGF0dXNfbmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogJzknLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudXBMb2FkSW1ncyhDLkVOVl9VUkwgKyAndXBsb2FkQ29tbVByb29mJywgcmVzLnRlbXBGaWxlUGF0aHMsIDAsIFtdLCBbXSwgZnVuY3Rpb24obmFtZXMsIHVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LnVwbG9hZF9pbWdfYXJyID0gdGhhdC51cGxvYWRfaW1nX2Fyci5jb25jYXQobmFtZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5zaG93X2ltZ19hcnIuY29uY2F0KHVybHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAvL+i/lOWbnuWbvueJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqCB0ZW1wRmlsZVBhdGhzLFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRMb2coZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpc19wYXNzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFzcztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCdhcHByb3ZlZERyb3BDdXN0b21lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcF9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuY3VzdG9tZXIudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVzX2lkOnRoYXQuY3VzdG9tZXIuc2FsZXNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc19wYXNzOiBpc19wYXNzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGF0LnN0YXR1c19hcnJfaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ2Ryb3BDdXN0b21lckRldGFpbCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkcm9wX2lkOiBvcHRpb25zLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19