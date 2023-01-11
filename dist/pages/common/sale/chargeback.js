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
            title: '状态变更',
            id: '',
            customer: null,
            isback: true,
            status_remark: '',
            show_img_arr: [],
            status_arr: ['无效客资', '客资已死'],
            status_arr_index: 0
        }, _this.methods = {
            bindStatusChange: function bindStatusChange(e) {
                this.status_arr_index = e.detail.value;
            },
            recover: function recover() {
                var that = this;
                var to_status = 21; //持续跟进
                _request2.default.get('submitDropApply', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    user_id: that.id,
                    drop_remark: that.status_remark,
                    to_status: to_status,
                    drop_file: that.show_img_arr.join(',')
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
            submit: function submit() {
                var that = this;
                var to_status = 2;
                if (that.status_arr_index == 0) {
                    to_status = 2; //退客
                } else if (that.status_arr_index == 1) {
                    to_status = 1; //已死
                }

                _request2.default.get('submitDropApply', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    user_id: that.id,
                    drop_remark: that.status_remark,
                    to_status: to_status,
                    drop_file: that.show_img_arr.join(',')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('getOneUserInfo', {
                200: function _(result) {
                    that.customer = result.data.data;
                    that.$apply();
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/chargeback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZWJhY2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpZCIsImN1c3RvbWVyIiwiaXNiYWNrIiwic3RhdHVzX3JlbWFyayIsInNob3dfaW1nX2FyciIsInN0YXR1c19hcnIiLCJzdGF0dXNfYXJyX2luZGV4IiwibWV0aG9kcyIsImJpbmRTdGF0dXNDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJyZWNvdmVyIiwidGhhdCIsInRvX3N0YXR1cyIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXNlcl9pZCIsImRyb3BfcmVtYXJrIiwiZHJvcF9maWxlIiwiam9pbiIsInVwbG9hZEZpbGUiLCJ3eCIsImNob29zZUltYWdlIiwiY291bnQiLCJzdWNjZXNzIiwiZmlsZSIsInVwTG9hZEltZ3MiLCJDIiwiRU5WX1VSTCIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJuYW1lcyIsInVybHMiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwiZmFpbCIsImNvbXBsZXRlIiwiaW5wdXRMb2ciLCJzdWJtaXQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwicmVzdWx0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixF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SHNCLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSWhDLE9BQU8sSUFBWDtBQUNBQSxpQkFBS2IsRUFBTCxHQUFVNkMsUUFBUTdDLEVBQWxCO0FBQ0FlLDhCQUFHQyxHQUFILENBQU8sZ0JBQVAsRUFBeUI7QUFDckIscUJBQUssbUJBQVU7QUFDWEgseUJBQUtaLFFBQUwsR0FBZ0IrQyxPQUFPbkQsSUFBUCxDQUFZQSxJQUE1QjtBQUNBZ0IseUJBQUsyQixNQUFMO0FBQ0g7QUFKb0IsYUFBekIsRUFLRztBQUNDcEIseUJBQVN5QixRQUFRN0M7QUFEbEIsYUFMSDtBQVFIOzs7aUNBQ1EsQ0FBRTs7OztFQS9Gb0JpQixlQUFLZ0MsSTs7a0JBQW5CM0QsSyIsImZpbGUiOiJjaGFyZ2ViYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IEMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfnirbmgIHlj5jmm7QnLFxuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXNfcmVtYXJrOiAnJyxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBzdGF0dXNfYXJyOiBbJ+aXoOaViOWuoui1hCcsICflrqLotYTlt7LmrbsnXSxcbiAgICAgICAgICAgIHN0YXR1c19hcnJfaW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRTdGF0dXNDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzX2Fycl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY292ZXIoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCB0b19zdGF0dXMgPSAyMTsgLy/mjIHnu63ot5/ov5tcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3N1Ym1pdERyb3BBcHBseScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICAgICAgICAgICAgICBkcm9wX3JlbWFyazogdGhhdC5zdGF0dXNfcmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICB0b19zdGF0dXM6IHRvX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgZHJvcF9maWxlOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6ICc5JywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnVwTG9hZEltZ3MoQy5FTlZfVVJMICsgJ3VwbG9hZENvbW1Qcm9vZicsIHJlcy50ZW1wRmlsZVBhdGhzLCAwLCBbXSwgW10sIGZ1bmN0aW9uKG5hbWVzLCB1cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC51cGxvYWRfaW1nX2FyciA9IHRoYXQudXBsb2FkX2ltZ19hcnIuY29uY2F0KG5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnNob3dfaW1nX2Fycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgLy/ov5Tlm57lm77niYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooaggdGVtcEZpbGVQYXRocyxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0TG9nKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c19yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCB0b19zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LnN0YXR1c19hcnJfaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0b19zdGF0dXMgPSAyOyAvL+mAgOWuolxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9fc3RhdHVzID0gMTsgLy/lt7LmrbtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdzdWJtaXREcm9wQXBwbHknLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZHJvcF9yZW1hcms6IHRoYXQuc3RhdHVzX3JlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgdG9fc3RhdHVzOiB0b19zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGRyb3BfZmlsZTogdGhhdC5zaG93X2ltZ19hcnIuam9pbignLCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXN0b21lciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IG9wdGlvbnMuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=