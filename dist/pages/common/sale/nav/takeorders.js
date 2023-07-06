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
            receive_lock: false
        }, _this.methods = {
            goToDistribute: function goToDistribute(e) {
                var index = e.currentTarget.dataset.index;
                var user_id = this.userList[index].id;
                _wepy2.default.navigateTo({
                    url: 'distribute?id=' + user_id
                });
            },
            takeOrder: function takeOrder(e) {
                var index = e.currentTarget.dataset.index;
                var that = this;
                if (that.receive_lock) {
                    return false;
                }
                that.receive_lock = true;
                _request2.default.get('receiveOrder', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '接单成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.receive_lock = false;
                        that.userList[index]['hide'] = true;
                        that.$apply();
                    }
                }, {
                    user_id: this.userList[index].id
                });
            },
            goToDetail: function goToDetail(e) {
                var id = e.currentTarget.dataset.id;
                if (_wepy2.default.getStorageSync('office_line') == 'marry') {
                    return false;
                }
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/customer?id=' + id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.loading = false;
            that.user = _wepy2.default.getStorageSync('user');
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getSalesUserInfo', {
                200: function _(result) {
                    that.userList = result.data.userList;
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


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/takeorders'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRha2VvcmRlcnMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJsb2FkaW5nIiwiaXNfaGlkZSIsInVzZXJMaXN0IiwidXNlciIsInJlY2VpdmVfbG9jayIsIm1ldGhvZHMiLCJnb1RvRGlzdHJpYnV0ZSIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidXNlcl9pZCIsImlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0YWtlT3JkZXIiLCJ0aGF0IiwicnEiLCJnZXQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIiRhcHBseSIsImdvVG9EZXRhaWwiLCJnZXRTdG9yYWdlU3luYyIsIm9wdGlvbnMiLCJyZXN1bHQiLCJpc19sZWFkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLG9CQUFRLElBREw7QUFFSEMsdUJBQVcsSUFGUjtBQUdIQyxtQkFBTyxNQUhKO0FBSUhDLHFCQUFTLElBSk47QUFLSEMscUJBQVMsSUFMTjtBQU1IQyxzQkFBVSxJQU5QO0FBT0hDLGtCQUFNLElBUEg7QUFRSEMsMEJBQWE7QUFSVixTLFFBVVBDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsQ0FEVCxFQUNZO0FBQ2Qsb0JBQUlDLFFBQVFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUFwQztBQUNBLG9CQUFJRyxVQUFVLEtBQUtULFFBQUwsQ0FBY00sS0FBZCxFQUFxQkksRUFBbkM7QUFDQUMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssbUJBQW1CSjtBQURaLGlCQUFoQjtBQUdILGFBUEs7QUFRTksscUJBUk0scUJBUUlULENBUkosRUFRTztBQUNULG9CQUFJQyxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBcEM7QUFDQSxvQkFBSVMsT0FBTyxJQUFYO0FBQ0Esb0JBQUdBLEtBQUtiLFlBQVIsRUFBcUI7QUFDbkIsMkJBQU8sS0FBUDtBQUNEO0FBQ0RhLHFCQUFLYixZQUFMLEdBQWtCLElBQWxCO0FBQ0FjLGtDQUFHQyxHQUFILENBQU8sY0FBUCxFQUF1QjtBQUNuQix5QkFBSyxtQkFBVTtBQUNYTix1Q0FBS08sU0FBTCxDQUFlO0FBQ1hyQixtQ0FBTyxNQURJLEVBQ0k7QUFDZnNCLGtDQUFNLE1BRkssRUFFRztBQUNkQyxzQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLGtDQUFNLElBSkssRUFJQztBQUNaQyxxQ0FBUyxzQkFBTyxDQUFFO0FBTFAseUJBQWY7QUFPQVAsNkJBQUtiLFlBQUwsR0FBa0IsS0FBbEI7QUFDQWEsNkJBQUtmLFFBQUwsQ0FBY00sS0FBZCxFQUFxQixNQUFyQixJQUErQixJQUEvQjtBQUNBUyw2QkFBS1EsTUFBTDtBQUNIO0FBWmtCLGlCQUF2QixFQWFHO0FBQ0NkLDZCQUFTLEtBQUtULFFBQUwsQ0FBY00sS0FBZCxFQUFxQkk7QUFEL0IsaUJBYkg7QUFnQkgsYUEvQks7QUFnQ05jLHNCQWhDTSxzQkFnQ0tuQixDQWhDTCxFQWdDUTtBQUNWLG9CQUFJSyxLQUFLTCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkUsRUFBakM7QUFDQSxvQkFBR0MsZUFBS2MsY0FBTCxDQUFvQixhQUFwQixLQUFvQyxPQUF2QyxFQUErQztBQUM3QywyQkFBTyxLQUFQO0FBQ0Q7QUFDRGQsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssb0NBQW9DSDtBQUQ3QixpQkFBaEI7QUFHSDtBQXhDSyxTOzs7OzsrQkEwQ0hnQixPLEVBQVM7QUFDWixnQkFBSVgsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLakIsT0FBTCxHQUFlLEtBQWY7QUFDQWlCLGlCQUFLZCxJQUFMLEdBQVlVLGVBQUtjLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSVYsT0FBTyxJQUFYO0FBQ0FDLDhCQUFHQyxHQUFILENBQU8sa0JBQVAsRUFBMkI7QUFDdkIscUJBQUssbUJBQVU7QUFDWEYseUJBQUtmLFFBQUwsR0FBZ0IyQixPQUFPakMsSUFBUCxDQUFZTSxRQUE1QjtBQUNBZSx5QkFBS2EsU0FBTCxHQUFpQkQsT0FBT2pDLElBQVAsQ0FBWWtDLFNBQTdCO0FBQ0FiLHlCQUFLZixRQUFMLENBQWM2QixPQUFkLENBQXNCLG1CQUFXO0FBQzdCQyxnQ0FBUSxTQUFSLElBQXFCLElBQXJCO0FBQ0gscUJBRkQ7QUFHQWYseUJBQUtRLE1BQUw7QUFDSDtBQVJzQixhQUEzQjtBQVVIOzs7O0VBN0U4QlosZUFBS29CLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoidGFrZW9yZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrqLotYTmjqXlj5YnLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGlzX2hpZGU6IHRydWUsXG4gICAgICAgICAgICB1c2VyTGlzdDogbnVsbCxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICByZWNlaXZlX2xvY2s6ZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGdvVG9EaXN0cmlidXRlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgdXNlcl9pZCA9IHRoaXMudXNlckxpc3RbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2Rpc3RyaWJ1dGU/aWQ9JyArIHVzZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWtlT3JkZXIoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZih0aGF0LnJlY2VpdmVfbG9jayl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoYXQucmVjZWl2ZV9sb2NrPXRydWU7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdyZWNlaXZlT3JkZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOpeWNleaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlY2VpdmVfbG9jaz1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3RbaW5kZXhdWydoaWRlJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyTGlzdFtpbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9EZXRhaWwoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGlmKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29mZmljZV9saW5lJyk9PSdtYXJyeScpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFNhbGVzVXNlckluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJMaXN0ID0gcmVzdWx0LmRhdGEudXNlckxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaXNfbGVhZGVyID0gcmVzdWx0LmRhdGEuaXNfbGVhZGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Wydpc19oaWRlJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19