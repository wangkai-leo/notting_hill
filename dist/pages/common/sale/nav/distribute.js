'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _css = require('./../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../components/header.js');

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
            isback: true,
            isopacity: true,
            title: '客资接取',
            loading: true,
            is_hide: true,
            userList: null,
            user: null,
            check_user_id: -1,
            user_id: -1
        }, _this.methods = {
            checkedChange: function checkedChange(e) {
                this.check_user_id = e.detail.value;
            },
            goToDistribute: function goToDistribute() {
                _wepy2.default.navigateTo({
                    url: 'distribute'
                });
            },
            takeOrder: function takeOrder(e) {
                var index = e.currentTarget.dataset.index;
                var that = this;
                _request2.default.get('receiveOrder', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '接单成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.userList[index]['hide'] = true;
                        that.$apply();
                    }
                }, {
                    user_id: this.userList[index].id
                });
            },
            goToDetail: function goToDetail(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/customer?id=' + id
                });
            },
            toggleDisplay: function toggleDisplay(e) {
                var index = e.currentTarget.dataset.index;
                this.userList[index].is_hide = !this.userList[index].is_hide;
            },
            submit: function submit() {
                _request2.default.get('forceDistribution', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    user_id: this.user_id,
                    employee_id: this.check_user_id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.loading = false;
            that.user = _wepy2.default.getStorageSync('user');
            var user_id = this.user_id = options.id;
            _request2.default.get('getLoginerTeamEmployee', {
                200: function _(result) {
                    that.userList = result.data.employee_list;
                    that.userList.forEach(function (element) {
                        element.is_confirm = 0;
                    });
                    that.$apply();
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/distribute'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWJ1dGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJsb2FkaW5nIiwiaXNfaGlkZSIsInVzZXJMaXN0IiwidXNlciIsImNoZWNrX3VzZXJfaWQiLCJ1c2VyX2lkIiwibWV0aG9kcyIsImNoZWNrZWRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJnb1RvRGlzdHJpYnV0ZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFrZU9yZGVyIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRoYXQiLCJycSIsImdldCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiJGFwcGx5IiwiaWQiLCJnb1RvRGV0YWlsIiwidG9nZ2xlRGlzcGxheSIsInN1Ym1pdCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZW1wbG95ZWVfaWQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCJlbXBsb3llZV9saXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc19jb25maXJtIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FB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VztBQUM3QkMsZ0NBQVFDLFVBQVIsR0FBcUIsQ0FBckI7QUFDSCxxQkFGRDtBQUdBeEIseUJBQUtRLE1BQUw7QUFDSDtBQVA0QixhQUFqQztBQVNIOzs7aUNBQ1EsQ0FBRTs7OztFQXRGb0JmLGVBQUtnQyxJOztrQkFBbkJ2RCxLIiwiZmlsZSI6ImRpc3RyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgXG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5a6i6LWE5o6l5Y+WJyxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpc19oaWRlOiB0cnVlLFxuICAgICAgICAgICAgdXNlckxpc3Q6IG51bGwsXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgY2hlY2tfdXNlcl9pZDogLTEsXG4gICAgICAgICAgICB1c2VyX2lkOiAtMVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2hlY2tlZENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja191c2VyX2lkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0Rpc3RyaWJ1dGUoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZGlzdHJpYnV0ZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWtlT3JkZXIoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3JlY2VpdmVPcmRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o6l5Y2V5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3RbaW5kZXhdWydoaWRlJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyTGlzdFtpbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9EZXRhaWwoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9jdXN0b21lcj9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMaXN0W2luZGV4XS5pc19oaWRlID0gIXRoaXMudXNlckxpc3RbaW5kZXhdLmlzX2hpZGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZm9yY2VEaXN0cmlidXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9pZDogdGhpcy5jaGVja191c2VyX2lkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBsZXQgdXNlcl9pZCA9IHRoaXMudXNlcl9pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ2dldExvZ2luZXJUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJMaXN0ID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc19jb25maXJtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7fVxuICAgIH1cbiJdfQ==