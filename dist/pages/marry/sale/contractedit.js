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
            title: '合同创建',
            isback: true,
            order_info: null,
            id: -1,
            edit_base: false,
            show_img_arr: [],
            contract_info: {},
            is_create: false,
            display_flesh: true,
            schedule_session: null,
            other_service_total_price: 0
        }, _this.methods = {
            deleteImg: function deleteImg(e) {
                var index = e.currentTarget.dataset.index;
                this.show_img_arr.splice(index, 1);
            },
            bindInputMark: function bindInputMark(e) {
                this.contract_info.contract_remark = e.detail.value;
            },
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: '9', //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            // console.log(that.show_img_arr);
                            that.$apply();
                        });
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            fleshOrder: function fleshOrder() {
                var that = this;
                _request2.default.get('flushContractInfo', {
                    200: function _(result) {
                        that.display_flesh = false;
                        that.getContractInfo();
                        that.$apply();
                    }
                }, {
                    order_id: that.contract_info.order_id,
                    contract_id: that.contract_info.id
                });
                this.display_flesh = false;
            },
            bindInputContractId: function bindInputContractId(e) {
                this.contract_info.contract_id = e.detail.value;
            },
            bindInputContractName: function bindInputContractName(e) {
                this.contract_info.contract_name = e.detail.value;
            },
            submit: function submit() {
                var that = this;
                if (that.contract_info.id == '-' || !that.contract_info.id) {
                    _wepy2.default.showToast({
                        title: '请输入合同编号', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                var data = {
                    'contract_str': that.contract_info.contract_id,
                    'contract_name': that.contract_info.contract_name,
                    'contract_proof': that.show_img_arr.join(','),
                    'contract_remark': that.contract_info.contract_remark
                };
                if (that.is_create) {
                    data.user_id = that.id;
                    _request2.default.get('createContract', {
                        200: function _(result) {
                            _wepy2.default.navigateBack({
                                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            });
                        }
                    }, data);
                } else {
                    data.contract_id = that.contract_info.id;
                    _request2.default.get('updateContract', {
                        200: function _(result) {
                            _wepy2.default.navigateBack({
                                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                            });
                        }
                    }, data);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getContractInfo',
        value: function getContractInfo() {
            var that = this;
            _request2.default.get('getContractInfo', {
                200: function _(result) {
                    that.contract_info = result.data.data.contract;
                    that.show_img_arr = that.contract_info.contract_proof;
                    that.$apply();
                }
            }, {
                user_id: that.id,
                contract_id: that.contract_id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.contract_id = options.contract_id;

            console.log(that.contract_id);
            that.is_create = options.is_create;
            that.display_flesh = false;
            if (that.is_create) {
                var contract_name = options.contract_name;
                _request2.default.get('getOneOrderInfo', {
                    200: function _(result) {
                        that.order_info = result.data.data;
                        that.contract_info.order_id = that.order_info.base_info.order_id;
                        that.contract_info.contract_name = contract_name;
                        that.$apply();
                    }
                }, {
                    user_id: that.id
                });
            } else {
                that.getContractInfo();
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/contractedit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0ZWRpdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsIm9yZGVyX2luZm8iLCJpZCIsImVkaXRfYmFzZSIsInNob3dfaW1nX2FyciIsImNvbnRyYWN0X2luZm8iLCJpc19jcmVhdGUiLCJkaXNwbGF5X2ZsZXNoIiwic2NoZWR1bGVfc2Vzc2lvbiIsIm90aGVyX3NlcnZpY2VfdG90YWxfcHJpY2UiLCJtZXRob2RzIiwiZGVsZXRlSW1nIiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzcGxpY2UiLCJiaW5kSW5wdXRNYXJrIiwiY29udHJhY3RfcmVtYXJrIiwiZGV0YWlsIiwidmFsdWUiLCJ1cGxvYWRGaWxlIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInN1Y2Nlc3MiLCJmaWxlIiwidXBMb2FkSW1ncyIsIkMiLCJFTlZfVVJMIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIm5hbWVzIiwidXJscyIsImNvbmNhdCIsIiRhcHBseSIsImZhaWwiLCJjb21wbGV0ZSIsImZsZXNoT3JkZXIiLCJycSIsImdldCIsImdldENvbnRyYWN0SW5mbyIsIm9yZGVyX2lkIiwiY29udHJhY3RfaWQiLCJiaW5kSW5wdXRDb250cmFjdElkIiwiYmluZElucHV0Q29udHJhY3ROYW1lIiwiY29udHJhY3RfbmFtZSIsInN1Ym1pdCIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiam9pbiIsInVzZXJfaWQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInJlc3VsdCIsImNvbnRyYWN0IiwiY29udHJhY3RfcHJvb2YiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiY29uc29sZSIsImxvZyIsImJhc2VfaW5mbyIsInBh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bUIwQyxhQUFuQixHQUFtQ0EsYUFBbkM7QUFDQXpCLDZCQUFLYyxNQUFMO0FBQ0g7QUFOcUIsaUJBQTFCLEVBT0c7QUFDQ21CLDZCQUFTakMsS0FBS3BCO0FBRGYsaUJBUEg7QUFVSCxhQVpELE1BWU87QUFDSG9CLHFCQUFLb0IsZUFBTDtBQUNIO0FBQ0o7OztpQ0FDUSxDQUFFOzs7O0VBN0lvQk8sZUFBS2tCLEk7O2tCQUFuQjdFLEsiLCJmaWxlIjoiY29udHJhY3RlZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IEMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflkIjlkIzliJvlu7onLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgb3JkZXJfaW5mbzogbnVsbCxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIGVkaXRfYmFzZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93X2ltZ19hcnI6IFtdLFxuICAgICAgICAgICAgY29udHJhY3RfaW5mbzoge30sXG4gICAgICAgICAgICBpc19jcmVhdGU6IGZhbHNlLFxuICAgICAgICAgICAgZGlzcGxheV9mbGVzaDogdHJ1ZSxcbiAgICAgICAgICAgIHNjaGVkdWxlX3Nlc3Npb246IG51bGwsXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlOiAwXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBkZWxldGVJbWcoZSl7XG4gICAgICAgICAgICAgICBsZXQgaW5kZXg9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgdGhpcy5zaG93X2ltZ19hcnIuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3RfaW5mby5jb250cmFjdF9yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAnOScsIC8v5pyA5aSa5Y+v5Lul6YCJ5oup55qE5Zu+54mH5byg5pWwLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS51cExvYWRJbWdzKEMuRU5WX1VSTCArICd1cGxvYWRDb21tUHJvb2YnLCByZXMudGVtcEZpbGVQYXRocywgMCwgW10sIFtdLCBmdW5jdGlvbihuYW1lcywgdXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5zaG93X2ltZ19hcnIuY29uY2F0KHVybHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC8v6L+U5Zue5Zu+54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGoIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGVzaE9yZGVyKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2ZsdXNoQ29udHJhY3RJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRpc3BsYXlfZmxlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29udHJhY3RJbmZvKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5jb250cmFjdF9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdF9pZDogdGhhdC5jb250cmFjdF9pbmZvLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZmxlc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRDb250cmFjdElkKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyYWN0X2luZm8uY29udHJhY3RfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRDb250cmFjdE5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3RfaW5mby5jb250cmFjdF9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5jb250cmFjdF9pbmZvLmlkID09ICctJyB8fCAhdGhhdC5jb250cmFjdF9pbmZvLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5ZCI5ZCM57yW5Y+3JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnY29udHJhY3Rfc3RyJzogdGhhdC5jb250cmFjdF9pbmZvLmNvbnRyYWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICAnY29udHJhY3RfbmFtZSc6IHRoYXQuY29udHJhY3RfaW5mby5jb250cmFjdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAnY29udHJhY3RfcHJvb2YnOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgICdjb250cmFjdF9yZW1hcmsnOiB0aGF0LmNvbnRyYWN0X2luZm8uY29udHJhY3RfcmVtYXJrXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5pc19jcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS51c2VyX2lkID0gdGhhdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCdjcmVhdGVDb250cmFjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZGF0YSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRyYWN0X2lkID0gdGhhdC5jb250cmFjdF9pbmZvLmlkO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ3VwZGF0ZUNvbnRyYWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGdldENvbnRyYWN0SW5mbygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0Q29udHJhY3RJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250cmFjdF9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YS5jb250cmFjdDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93X2ltZ19hcnIgPSB0aGF0LmNvbnRyYWN0X2luZm8uY29udHJhY3RfcHJvb2ZcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICBjb250cmFjdF9pZDp0aGF0LmNvbnRyYWN0X2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhhdC5jb250cmFjdF9pZCA9IG9wdGlvbnMuY29udHJhY3RfaWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY29udHJhY3RfaWQpO1xuICAgICAgICAgICAgdGhhdC5pc19jcmVhdGUgPSBvcHRpb25zLmlzX2NyZWF0ZTtcbiAgICAgICAgICAgIHRoYXQuZGlzcGxheV9mbGVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNfY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRyYWN0X25hbWUgPSBvcHRpb25zLmNvbnRyYWN0X25hbWU7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0X2luZm8ub3JkZXJfaWQgPSB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250cmFjdF9pbmZvLmNvbnRyYWN0X25hbWUgPSBjb250cmFjdF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29udHJhY3RJbmZvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=