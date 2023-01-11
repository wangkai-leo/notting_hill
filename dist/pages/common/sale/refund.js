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
            title: '退款申请',
            isback: true,
            page_data: null,
            order_id: '',
            refund_money_theory: 0,
            user_account_cardnum: '',
            user_account_name: '',
            refund_reason: '',
            show_img_arr: [],
            is_lock: false
        }, _this.methods = {
            resubmit: function resubmit() {
                this.page_data.id = 0;
                this.show_img_arr = [];
            },
            deleteImg: function deleteImg(e) {
                var index = e.currentTarget.dataset.index;
                this.show_img_arr.splice(index, 1);
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
            viewCheck: function viewCheck(e) {
                _wepy2.default.previewImage({
                    current: this.show_img_arr[e.currentTarget.dataset.index],
                    urls: this.show_img_arr //需要预览的图片链接列表,
                });
            },
            bindInputRefundAmount: function bindInputRefundAmount(e) {
                this.refund_money_theory = e.detail.value;
            },
            bindInputRefundAccount: function bindInputRefundAccount(e) {
                this.user_account_name = e.detail.value;
            },
            bindInputRefundCardNum: function bindInputRefundCardNum(e) {
                this.user_account_cardnum = e.detail.value;
            },
            bindInputRefundReason: function bindInputRefundReason(e) {
                this.refund_reason = e.detail.value;
            },
            submit: function submit() {
                if (this.is_lock) {
                    return false;
                }
                this.is_lock = true;
                var that = this;
                _request2.default.get('dropOrderApply', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    refund_money_theory: that.refund_money_theory,
                    user_account_name: that.user_account_name,
                    user_account_cardnum: that.user_account_cardnum,
                    refund_reason: that.refund_reason,
                    refund_file: that.show_img_arr.join(','),
                    order_id: that.order_id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.order_id = options.order_id;
            _request2.default.get('getDropOrderInfo', {
                200: function _(result) {
                    that.page_data = result.data.data;
                    if (that.page_data.refund_file && that.page_data.refund_file[0] != '') {
                        that.show_img_arr = that.page_data.refund_file;
                    }
                    that.$apply();
                }
            }, {
                order_id: that.order_id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/refund'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnVuZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInBhZ2VfZGF0YSIsIm9yZGVyX2lkIiwicmVmdW5kX21vbmV5X3RoZW9yeSIsInVzZXJfYWNjb3VudF9jYXJkbnVtIiwidXNlcl9hY2NvdW50X25hbWUiLCJyZWZ1bmRfcmVhc29uIiwic2hvd19pbWdfYXJyIiwiaXNfbG9jayIsIm1ldGhvZHMiLCJyZXN1Ym1pdCIsImlkIiwiZGVsZXRlSW1nIiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzcGxpY2UiLCJ1cGxvYWRGaWxlIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInN1Y2Nlc3MiLCJmaWxlIiwidXBMb2FkSW1ncyIsIkMiLCJFTlZfVVJMIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIm5hbWVzIiwidXJscyIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJmYWlsIiwiY29tcGxldGUiLCJ2aWV3Q2hlY2siLCJ3ZXB5IiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsImJpbmRJbnB1dFJlZnVuZEFtb3VudCIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0UmVmdW5kQWNjb3VudCIsImJpbmRJbnB1dFJlZnVuZENhcmROdW0iLCJiaW5kSW5wdXRSZWZ1bmRSZWFzb24iLCJzdWJtaXQiLCJycSIsImdldCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicmVmdW5kX2ZpbGUiLCJqb2luIiwib3B0aW9ucyIsInJlc3VsdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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ZnVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn6YCA5qy+55Sz6K+3JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICAgICAgICAgIG9yZGVyX2lkOiAnJyxcbiAgICAgICAgICAgIHJlZnVuZF9tb25leV90aGVvcnk6IDAsXG4gICAgICAgICAgICB1c2VyX2FjY291bnRfY2FyZG51bTogJycsXG4gICAgICAgICAgICB1c2VyX2FjY291bnRfbmFtZTogJycsXG4gICAgICAgICAgICByZWZ1bmRfcmVhc29uOiAnJyxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBpc19sb2NrOmZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByZXN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZV9kYXRhLmlkPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X2ltZ19hcnI9W107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlSW1nKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfaW1nX2Fyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6ICc5JywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnVwTG9hZEltZ3MoQy5FTlZfVVJMICsgJ3VwbG9hZENvbW1Qcm9vZicsIHJlcy50ZW1wRmlsZVBhdGhzLCAwLCBbXSwgW10sIGZ1bmN0aW9uKG5hbWVzLCB1cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC51cGxvYWRfaW1nX2FyciA9IHRoYXQudXBsb2FkX2ltZ19hcnIuY29uY2F0KG5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnNob3dfaW1nX2Fycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgLy/ov5Tlm57lm77niYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooaggdGVtcEZpbGVQYXRocyxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdDaGVjayhlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiB0aGlzLnNob3dfaW1nX2FycltlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuc2hvd19pbWdfYXJyIC8v6ZyA6KaB6aKE6KeI55qE5Zu+54mH6ZO+5o6l5YiX6KGoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFJlZnVuZEFtb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZ1bmRfbW9uZXlfdGhlb3J5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UmVmdW5kQWNjb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyX2FjY291bnRfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFJlZnVuZENhcmROdW0oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcl9hY2NvdW50X2NhcmRudW0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRSZWZ1bmRSZWFzb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmdW5kX3JlYXNvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzX2xvY2spe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNfbG9jaz10cnVlO1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2Ryb3BPcmRlckFwcGx5Jywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZnVuZF9tb25leV90aGVvcnk6IHRoYXQucmVmdW5kX21vbmV5X3RoZW9yeSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9hY2NvdW50X25hbWU6IHRoYXQudXNlcl9hY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfYWNjb3VudF9jYXJkbnVtOiB0aGF0LnVzZXJfYWNjb3VudF9jYXJkbnVtLFxuICAgICAgICAgICAgICAgICAgICByZWZ1bmRfcmVhc29uOiB0aGF0LnJlZnVuZF9yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgIHJlZnVuZF9maWxlOnRoYXQuc2hvd19pbWdfYXJyLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQub3JkZXJfaWQgPSBvcHRpb25zLm9yZGVyX2lkO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXREcm9wT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnBhZ2VfZGF0YS5yZWZ1bmRfZmlsZSYmdGhhdC5wYWdlX2RhdGEucmVmdW5kX2ZpbGVbMF0hPScnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyPXRoYXQucGFnZV9kYXRhLnJlZnVuZF9maWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=