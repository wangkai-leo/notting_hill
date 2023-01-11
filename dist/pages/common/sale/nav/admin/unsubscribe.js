'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

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
            isback: true,
            isopacity: true,
            title: '退客审核',
            loading: true,
            is_hide: true,
            userList: null,

            user: null
        }, _this.methods = {
            goTo: function goTo() {},
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
                var user_id = e.currentTarget.dataset.user;
                _wepy2.default.navigateTo({
                    url: 'auditchargeback?id=' + id
                });
            },
            toggleDisplay: function toggleDisplay(e) {
                var index = e.currentTarget.dataset.index;
                this.userList[index].is_hide = !this.userList[index].is_hide;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.loading = false;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            that.user = _wepy2.default.getStorageSync('user');

            _request2.default.get('dropCustomerList', {
                200: function _(result) {
                    that.userList = result.data.data;
                    that.is_leader = result.data.is_leader;
                    that.userList.forEach(function (element) {
                        element['is_hide'] = true;
                    });
                    that.$apply();
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/unsubscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuc3Vic2NyaWJlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwibG9hZGluZyIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInVzZXIiLCJtZXRob2RzIiwiZ29UbyIsInRha2VPcmRlciIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiJGFwcGx5IiwidXNlcl9pZCIsImlkIiwiZ29Ub0RldGFpbCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGVEaXNwbGF5Iiwib3B0aW9ucyIsImdldFN0b3JhZ2VTeW5jIiwicmVzdWx0IiwiaXNfbGVhZGVyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DLGlCQUFLQSxhQURDLEVBQ0k7QUFDVkMsb0JBQVFBO0FBRkYsUyxRQUlWQyxJLEdBQU87QUFDSEMsb0JBQVEsSUFETDtBQUVIQyx1QkFBVyxJQUZSO0FBR0hDLG1CQUFPLE1BSEo7QUFJSEMscUJBQVMsSUFKTjtBQUtIQyxxQkFBUyxJQUxOO0FBTUhDLHNCQUFVLElBTlA7O0FBUUhDLGtCQUFLO0FBUkYsUyxRQVVQQyxPLEdBQVU7QUFDTkMsZ0JBRE0sa0JBQ0MsQ0FFTixDQUhLO0FBSU5DLHFCQUpNLHFCQUlJQyxDQUpKLEVBSU87QUFDVCxvQkFBSUMsUUFBUUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXBDO0FBQ0Esb0JBQUlHLE9BQUssSUFBVDtBQUNBQyxrQ0FBR0MsR0FBSCxDQUFPLGNBQVAsRUFBdUI7QUFDbkIseUJBQUssbUJBQVU7QUFDWEMsdUNBQUtDLFNBQUwsQ0FBZTtBQUNYaEIsbUNBQU8sTUFESSxFQUNJO0FBQ2ZpQixrQ0FBTSxNQUZLLEVBRUc7QUFDZEMsc0NBQVUsSUFIQyxFQUdLO0FBQ2hCQyxrQ0FBTSxJQUpLLEVBSUM7QUFDWkMscUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHlCQUFmOztBQVFBUiw2QkFBS1QsUUFBTCxDQUFjTSxLQUFkLEVBQXFCLE1BQXJCLElBQStCLElBQS9CO0FBQ0FHLDZCQUFLUyxNQUFMO0FBQ0g7QUFaa0IsaUJBQXZCLEVBYUc7QUFDQ0MsNkJBQVMsS0FBS25CLFFBQUwsQ0FBY00sS0FBZCxFQUFxQmM7QUFEL0IsaUJBYkg7QUFpQkgsYUF4Qks7QUF5Qk5DLHNCQXpCTSxzQkF5QktoQixDQXpCTCxFQXlCUTtBQUNWLG9CQUFJZSxLQUFLZixFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlksRUFBakM7QUFDQSxvQkFBSUQsVUFBVWQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JQLElBQXRDO0FBQ0FXLCtCQUFLVSxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHdCQUF3Qkg7QUFEakIsaUJBQWhCO0FBSUgsYUFoQ0s7QUFpQ05JLHlCQWpDTSx5QkFpQ1FuQixDQWpDUixFQWlDVztBQUNiLG9CQUFJQyxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBcEM7QUFDQSxxQkFBS04sUUFBTCxDQUFjTSxLQUFkLEVBQXFCUCxPQUFyQixHQUErQixDQUFDLEtBQUtDLFFBQUwsQ0FBY00sS0FBZCxFQUFxQlAsT0FBckQ7QUFDSDtBQXBDSyxTOzs7OzsrQkFzQ0gwQixPLEVBQVM7QUFDWixnQkFBSWhCLE9BQU8sSUFBWDtBQUNBQSxpQkFBS1gsT0FBTCxHQUFlLEtBQWY7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUlXLE9BQU8sSUFBWDtBQUNBQSxpQkFBS1IsSUFBTCxHQUFVVyxlQUFLYyxjQUFMLENBQW9CLE1BQXBCLENBQVY7O0FBRUFoQiw4QkFBR0MsR0FBSCxDQUFPLGtCQUFQLEVBQTJCO0FBQ3ZCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLVCxRQUFMLEdBQWdCMkIsT0FBT2pDLElBQVAsQ0FBWUEsSUFBNUI7QUFDQWUseUJBQUttQixTQUFMLEdBQWVELE9BQU9qQyxJQUFQLENBQVlrQyxTQUEzQjtBQUNBbkIseUJBQUtULFFBQUwsQ0FBYzZCLE9BQWQsQ0FBc0IsbUJBQVc7QUFDN0JDLGdDQUFRLFNBQVIsSUFBcUIsSUFBckI7QUFDSCxxQkFGRDtBQUdBckIseUJBQUtTLE1BQUw7QUFDSDtBQVJzQixhQUEzQjtBQVVIOzs7O0VBMUU4Qk4sZUFBS21CLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoidW5zdWJzY3JpYmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcblxuXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICB0aXRsZTogJ+mAgOWuouWuoeaguCcsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGlzX2hpZGU6IHRydWUsXG4gICAgICAgIHVzZXJMaXN0OiBudWxsLFxuXG4gICAgICAgIHVzZXI6bnVsbFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ29UbygpIHtcblxuICAgICAgICB9LFxuICAgICAgICB0YWtlT3JkZXIoZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdyZWNlaXZlT3JkZXInLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOpeWNleaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3RbaW5kZXhdWydoaWRlJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJMaXN0W2luZGV4XS5pZFxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9LFxuICAgICAgICBnb1RvRGV0YWlsKGUpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgbGV0IHVzZXJfaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51c2VyO1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdhdWRpdGNoYXJnZWJhY2s/aWQ9JyArIGlkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVEaXNwbGF5KGUpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdFtpbmRleF0uaXNfaGlkZSA9ICF0aGlzLnVzZXJMaXN0W2luZGV4XS5pc19oaWRlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBvblNob3coKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC51c2VyPXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcblxuICAgICAgICBycS5nZXQoJ2Ryb3BDdXN0b21lckxpc3QnLCB7XG4gICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhhdC5pc19sZWFkZXI9cmVzdWx0LmRhdGEuaXNfbGVhZGVyO1xuICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==