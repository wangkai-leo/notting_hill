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
            title: '意向定金',
            id: '',
            customer: null,
            show_img_arr: [],
            isback: true,
            is_deposite: 0,
            pay_method: [],
            pay_method_rand: [],
            pay_index: 0,
            form_data: {
                deposit_amount: '',
                payment_type: -1,
                payment_team: '',
                payment_file: '',
                payment_time: '',
                deposit_remark: ''
            }
        }, _this.methods = {
            bindPayChange: function bindPayChange(e) {
                this.pay_index = e.detail.value;
                this.form_data.payment_type_name = this.pay_method_rand[this.pay_index];
            },
            inputTeamName: function inputTeamName(e) {
                this.form_data.team_name = e.detail.value;
            },
            bindInputDeposit: function bindInputDeposit(e) {
                this.form_data.deposit_amount = e.detail.value;
            },
            bindInputPayMethod: function bindInputPayMethod(e) {
                this.form_data.payment_type = e.detail.value;
            },
            bindDateChange: function bindDateChange(e) {
                this.form_data.payment_time = e.detail.value;
                this.form_data.payment_date = e.detail.value;
            },
            inputLog: function inputLog(e) {
                this.form_data.deposit_remark = e.detail.value;
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
            submit: function submit() {
                var that = this;
                if (!that.form_data.deposit_amount || that.form_data.payment_type == -1 || !that.show_img_arr.join(',') || !that.form_data.payment_time) {
                    _wepy2.default.showToast({
                        title: '请填写完整的支付信息', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                var data = {
                    user_id: that.id,
                    deposit_amount: that.form_data.deposit_amount,
                    payment_type: that.pay_method[that.pay_index].id,
                    payment_team: that.form_data.team_id,
                    payment_file: that.show_img_arr.join(','),
                    deposit_remark: that.form_data.deposit_remark,
                    payment_time: that.form_data.payment_time
                };
                _request2.default.get('submitDeposit', {
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
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('getDeposit', {
                200: function _(result) {
                    that.is_deposite = result.data.is_deposite;
                    that.form_data = result.data.data;
                    if (that.is_deposite) {
                        that.show_img_arr = that.form_data.payment_file.split(',');
                    }
                    that.$apply();
                }
            }, {
                user_id: options.id
            });
            _request2.default.get('getPayType', {
                200: function _(result) {
                    that.pay_method = result.data.data;
                    that.pay_method.forEach(function (element) {
                        that.pay_method_rand.push(element.pay_name);
                    });
                    that.$apply();
                }
            }, {});
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/prepay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXBheS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlkIiwiY3VzdG9tZXIiLCJzaG93X2ltZ19hcnIiLCJpc2JhY2siLCJpc19kZXBvc2l0ZSIsInBheV9tZXRob2QiLCJwYXlfbWV0aG9kX3JhbmQiLCJwYXlfaW5kZXgiLCJmb3JtX2RhdGEiLCJkZXBvc2l0X2Ftb3VudCIsInBheW1lbnRfdHlwZSIsInBheW1lbnRfdGVhbSIsInBheW1lbnRfZmlsZSIsInBheW1lbnRfdGltZSIsImRlcG9zaXRfcmVtYXJrIiwibWV0aG9kcyIsImJpbmRQYXlDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwYXltZW50X3R5cGVfbmFtZSIsImlucHV0VGVhbU5hbWUiLCJ0ZWFtX25hbWUiLCJiaW5kSW5wdXREZXBvc2l0IiwiYmluZElucHV0UGF5TWV0aG9kIiwiYmluZERhdGVDaGFuZ2UiLCJwYXltZW50X2RhdGUiLCJpbnB1dExvZyIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJjb21wbGV0ZSIsInN1Ym1pdCIsImpvaW4iLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInVzZXJfaWQiLCJ0ZWFtX2lkIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJzcGxpdCIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsInBheV9u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ICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+aEj+WQkeWumumHkScsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBpc19kZXBvc2l0ZTogMCxcbiAgICAgICAgICAgIHBheV9tZXRob2Q6IFtdLFxuICAgICAgICAgICAgcGF5X21ldGhvZF9yYW5kOiBbXSxcbiAgICAgICAgICAgIHBheV9pbmRleDogMCxcbiAgICAgICAgICAgIGZvcm1fZGF0YToge1xuICAgICAgICAgICAgICAgIGRlcG9zaXRfYW1vdW50OiAnJyxcbiAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU6IC0xLFxuICAgICAgICAgICAgICAgIHBheW1lbnRfdGVhbTogJycsXG4gICAgICAgICAgICAgICAgcGF5bWVudF9maWxlOiAnJyxcbiAgICAgICAgICAgICAgICBwYXltZW50X3RpbWU6ICcnLFxuICAgICAgICAgICAgICAgIGRlcG9zaXRfcmVtYXJrOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZFBheUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXlfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1fZGF0YS5wYXltZW50X3R5cGVfbmFtZSA9IHRoaXMucGF5X21ldGhvZF9yYW5kW3RoaXMucGF5X2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dFRlYW1OYW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1fZGF0YS50ZWFtX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXREZXBvc2l0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1fZGF0YS5kZXBvc2l0X2Ftb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheU1ldGhvZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtX2RhdGEucGF5bWVudF90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybV9kYXRhLnBheW1lbnRfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybV9kYXRhLnBheW1lbnRfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0TG9nKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1fZGF0YS5kZXBvc2l0X3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6ICc5JywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnVwTG9hZEltZ3MoQy5FTlZfVVJMICsgJ3VwbG9hZENvbW1Qcm9vZicsIHJlcy50ZW1wRmlsZVBhdGhzLCAwLCBbXSwgW10sIGZ1bmN0aW9uKG5hbWVzLCB1cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC51cGxvYWRfaW1nX2FyciA9IHRoYXQudXBsb2FkX2ltZ19hcnIuY29uY2F0KG5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnNob3dfaW1nX2Fycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgLy/ov5Tlm57lm77niYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooaggdGVtcEZpbGVQYXRocyxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGF0LmZvcm1fZGF0YS5kZXBvc2l0X2Ftb3VudCB8fCB0aGF0LmZvcm1fZGF0YS5wYXltZW50X3R5cGUgPT0gLTEgfHwgIXRoYXQuc2hvd19pbWdfYXJyLmpvaW4oJywnKSB8fCAhdGhhdC5mb3JtX2RhdGEucGF5bWVudF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5a6M5pW055qE5pSv5LuY5L+h5oGvJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRfYW1vdW50OiB0aGF0LmZvcm1fZGF0YS5kZXBvc2l0X2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlOiB0aGF0LnBheV9tZXRob2RbdGhhdC5wYXlfaW5kZXhdLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X3RlYW06IHRoYXQuZm9ybV9kYXRhLnRlYW1faWQsXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRfZmlsZTogdGhhdC5zaG93X2ltZ19hcnIuam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0X3JlbWFyazogdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdGltZTogdGhhdC5mb3JtX2RhdGEucGF5bWVudF90aW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJxLmdldCgnc3VibWl0RGVwb3NpdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ2dldERlcG9zaXQnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmlzX2RlcG9zaXRlID0gcmVzdWx0LmRhdGEuaXNfZGVwb3NpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZm9ybV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuaXNfZGVwb3NpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5mb3JtX2RhdGEucGF5bWVudF9maWxlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogb3B0aW9ucy5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0UGF5VHlwZScsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGF5X21ldGhvZCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGF5X21ldGhvZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXlfbWV0aG9kX3JhbmQucHVzaChlbGVtZW50LnBheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge30pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=