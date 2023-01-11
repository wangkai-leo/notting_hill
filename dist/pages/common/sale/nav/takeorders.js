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
            user: null
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRha2VvcmRlcnMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJsb2FkaW5nIiwiaXNfaGlkZSIsInVzZXJMaXN0IiwidXNlciIsIm1ldGhvZHMiLCJnb1RvRGlzdHJpYnV0ZSIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidXNlcl9pZCIsImlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0YWtlT3JkZXIiLCJ0aGF0IiwicnEiLCJnZXQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsIiRhcHBseSIsImdvVG9EZXRhaWwiLCJvcHRpb25zIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCJpc19sZWFkZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLG9CQUFRLElBREw7QUFFSEMsdUJBQVcsSUFGUjtBQUdIQyxtQkFBTyxNQUhKO0FBSUhDLHFCQUFTLElBSk47QUFLSEMscUJBQVMsSUFMTjtBQU1IQyxzQkFBVSxJQU5QO0FBT0hDLGtCQUFNO0FBUEgsUyxRQVNQQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDWTtBQUNkLG9CQUFJQyxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBcEM7QUFDQSxvQkFBSUcsVUFBVSxLQUFLUixRQUFMLENBQWNLLEtBQWQsRUFBcUJJLEVBQW5DO0FBQ0FDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLG1CQUFtQko7QUFEWixpQkFBaEI7QUFHSCxhQVBLO0FBUU5LLHFCQVJNLHFCQVFJVCxDQVJKLEVBUU87QUFDVCxvQkFBSUMsUUFBUUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXBDO0FBQ0Esb0JBQUlTLE9BQU8sSUFBWDtBQUNBQyxrQ0FBR0MsR0FBSCxDQUFPLGNBQVAsRUFBdUI7QUFDbkIseUJBQUssbUJBQVU7QUFDWE4sdUNBQUtPLFNBQUwsQ0FBZTtBQUNYcEIsbUNBQU8sTUFESSxFQUNJO0FBQ2ZxQixrQ0FBTSxNQUZLLEVBRUc7QUFDZEMsc0NBQVUsSUFIQyxFQUdLO0FBQ2hCQyxrQ0FBTSxJQUpLLEVBSUM7QUFDWkMscUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHlCQUFmO0FBT0FQLDZCQUFLZCxRQUFMLENBQWNLLEtBQWQsRUFBcUIsTUFBckIsSUFBK0IsSUFBL0I7QUFDQVMsNkJBQUtRLE1BQUw7QUFDSDtBQVhrQixpQkFBdkIsRUFZRztBQUNDZCw2QkFBUyxLQUFLUixRQUFMLENBQWNLLEtBQWQsRUFBcUJJO0FBRC9CLGlCQVpIO0FBZUgsYUExQks7QUEyQk5jLHNCQTNCTSxzQkEyQktuQixDQTNCTCxFQTJCUTtBQUNWLG9CQUFJSyxLQUFLTCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkUsRUFBakM7QUFDQUMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssb0NBQW9DSDtBQUQ3QixpQkFBaEI7QUFHSDtBQWhDSyxTOzs7OzsrQkFrQ0hlLE8sRUFBUztBQUNaLGdCQUFJVixPQUFPLElBQVg7QUFDQUEsaUJBQUtoQixPQUFMLEdBQWUsS0FBZjtBQUNBZ0IsaUJBQUtiLElBQUwsR0FBWVMsZUFBS2UsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJWCxPQUFPLElBQVg7QUFDQUMsOEJBQUdDLEdBQUgsQ0FBTyxrQkFBUCxFQUEyQjtBQUN2QixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS2QsUUFBTCxHQUFnQjBCLE9BQU9oQyxJQUFQLENBQVlNLFFBQTVCO0FBQ0FjLHlCQUFLYSxTQUFMLEdBQWlCRCxPQUFPaEMsSUFBUCxDQUFZaUMsU0FBN0I7QUFDQWIseUJBQUtkLFFBQUwsQ0FBYzRCLE9BQWQsQ0FBc0IsbUJBQVc7QUFDN0JDLGdDQUFRLFNBQVIsSUFBcUIsSUFBckI7QUFDSCxxQkFGRDtBQUdBZix5QkFBS1EsTUFBTDtBQUNIO0FBUnNCLGFBQTNCO0FBVUg7Ozs7RUFwRThCWixlQUFLb0IsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJ0YWtlb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIFxuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+Wuoui1hOaOpeWPlicsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaXNfaGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBudWxsLFxuICAgICAgICAgICAgdXNlcjogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub0Rpc3RyaWJ1dGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCB1c2VyX2lkID0gdGhpcy51c2VyTGlzdFtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZGlzdHJpYnV0ZT9pZD0nICsgdXNlcl9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRha2VPcmRlcihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgncmVjZWl2ZU9yZGVyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmjqXljZXmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdFtpbmRleF1bJ2hpZGUnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXJMaXN0W2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRTYWxlc1VzZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdCA9IHJlc3VsdC5kYXRhLnVzZXJMaXN0O1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmlzX2xlYWRlciA9IHJlc3VsdC5kYXRhLmlzX2xlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==