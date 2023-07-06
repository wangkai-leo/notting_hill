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
            isopacity: true,
            title: '团队管理',
            isback: true,
            page_info: null,
            check_item: null,
            check_index: -1,
            employee_status: ['正常', '禁用', '离职'],
            status_index: 0,
            pre_data: {}
        }, _this.methods = {
            goToTeamOrder: function goToTeamOrder() {
                _wepy2.default.navigateTo({ url: 'teamorders' });
            },
            bindInput: function bindInput(e) {
                this.check_item.employee_max_clients = e.detail.value;
            },
            bindChange: function bindChange(e) {
                this.status_index = e.detail.value;
                this.check_item.employee_status_text = this.employee_status[this.status_index];
                this.check_item.employee_status = this.status_index;
            },
            submit: function submit() {
                var that = this;
                _request2.default.get('updateEmployee', {
                    200: function _(result) {
                        that.check_item = null;
                        that.$apply();
                    }
                }, {
                    employee_id: that.check_item.id,
                    employee_max_clients: that.check_item.employee_max_clients,
                    employee_status: that.check_item.employee_status
                });
            },
            cancel: function cancel(e) {
                this.check_item = null;
                var index = e.currentTarget.dataset.index;
                this.page_info.employee_list[this.check_index].employee_status_text = this.pre_data.employee_status_text;
                this.page_info.employee_list[this.check_index].employee_status = this.pre_data.employee_status;
                this.page_info.employee_list[this.check_index].employee_max_clients = this.pre_data.employee_max_clients;
                this.pre_data = {};
                this.check_index = -1;
            },
            check: function check(e) {
                var _this2 = this;

                var index = this.check_index = e.currentTarget.dataset.index;
                this.check_item = this.page_info.employee_list[index];
                this.pre_data.employee_status_text = this.page_info.employee_list[index].employee_status_text;
                this.pre_data.employee_status = this.page_info.employee_list[index].employee_status;
                this.pre_data.employee_max_clients = this.page_info.employee_list[index].employee_max_clients;
                var i = 0;
                this.employee_status.forEach(function (element) {
                    if (element == _this2.check_item.employee_status_text) {
                        _this2.status_index = i;
                    }
                    i++;
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.user = _wepy2.default.getStorageSync('user');

            var team_id = options.team_id;
            _request2.default.get('teamDetail', {
                200: function _(result) {
                    that.page_info = result.data.data;
                    that.employee_status = result.data.data.employee_status;
                    that.$apply();
                }
            }, {
                team_id: team_id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/department'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2luZm8iLCJjaGVja19pdGVtIiwiY2hlY2tfaW5kZXgiLCJlbXBsb3llZV9zdGF0dXMiLCJzdGF0dXNfaW5kZXgiLCJwcmVfZGF0YSIsIm1ldGhvZHMiLCJnb1RvVGVhbU9yZGVyIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kSW5wdXQiLCJlIiwiZW1wbG95ZWVfbWF4X2NsaWVudHMiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRDaGFuZ2UiLCJlbXBsb3llZV9zdGF0dXNfdGV4dCIsInN1Ym1pdCIsInRoYXQiLCJycSIsImdldCIsIiRhcHBseSIsImVtcGxveWVlX2lkIiwiaWQiLCJjYW5jZWwiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZW1wbG95ZWVfbGlzdCIsImNoZWNrIiwiaSIsImZvckVhY2giLCJlbGVtZW50Iiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInVzZXIiLCJnZXRTdG9yYWdlU3luYyIsInRlYW1faWQiLCJyZXN1bHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxp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QUFMLENBQWU2QixhQUFmLENBQTZCSCxLQUE3QixFQUFvQ2Isb0JBQXpFO0FBQ0Esb0JBQUlrQixJQUFJLENBQVI7QUFDQSxxQkFBSzVCLGVBQUwsQ0FBcUI2QixPQUFyQixDQUE2QixtQkFBVztBQUNwQyx3QkFBSUMsV0FBVyxPQUFLaEMsVUFBTCxDQUFnQmdCLG9CQUEvQixFQUFxRDtBQUNqRCwrQkFBS2IsWUFBTCxHQUFvQjJCLENBQXBCO0FBQ0g7QUFDREE7QUFDSCxpQkFMRDtBQU1IO0FBL0NLLFM7Ozs7OytCQWlESEcsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJZixPQUFPLElBQVg7QUFDQUEsaUJBQUtrQixJQUFMLEdBQVk3QixlQUFLOEIsY0FBTCxDQUFvQixNQUFwQixDQUFaOztBQUVBLGdCQUFJQyxVQUFVTCxRQUFRSyxPQUF0QjtBQUNBbkIsOEJBQUdDLEdBQUgsQ0FBTyxZQUFQLEVBQXFCO0FBQ2pCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLbkIsU0FBTCxHQUFpQndDLE9BQU81QyxJQUFQLENBQVlBLElBQTdCO0FBQ0F1Qix5QkFBS2hCLGVBQUwsR0FBdUJxQyxPQUFPNUMsSUFBUCxDQUFZQSxJQUFaLENBQWlCTyxlQUF4QztBQUNBZ0IseUJBQUtHLE1BQUw7QUFDSDtBQUxnQixhQUFyQixFQU1HO0FBQ0NpQix5QkFBU0E7QUFEVixhQU5IO0FBU0g7OztpQ0FDUSxDQUFFOzs7O0VBcEZvQi9CLGVBQUtpQyxJOztrQkFBbkJwRCxLIiwiZmlsZSI6ImRlcGFydG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+WboumYn+euoeeQhicsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBwYWdlX2luZm86IG51bGwsXG4gICAgICAgICAgICBjaGVja19pdGVtOiBudWxsLFxuICAgICAgICAgICAgY2hlY2tfaW5kZXg6IC0xLFxuICAgICAgICAgICAgZW1wbG95ZWVfc3RhdHVzOiBbJ+ato+W4uCcsICfnpoHnlKgnLCAn56a76IGMJ10sXG4gICAgICAgICAgICBzdGF0dXNfaW5kZXg6IDAsXG4gICAgICAgICAgICBwcmVfZGF0YToge30sXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1RvVGVhbU9yZGVyKCl7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiAndGVhbW9yZGVycycgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0KGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfaXRlbS5lbXBsb3llZV9tYXhfY2xpZW50cz1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfaXRlbS5lbXBsb3llZV9zdGF0dXNfdGV4dCA9IHRoaXMuZW1wbG95ZWVfc3RhdHVzW3RoaXMuc3RhdHVzX2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX2l0ZW0uZW1wbG95ZWVfc3RhdHVzID0gdGhpcy5zdGF0dXNfaW5kZXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3VwZGF0ZUVtcGxveWVlJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNoZWNrX2l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfaWQ6IHRoYXQuY2hlY2tfaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfbWF4X2NsaWVudHM6IHRoYXQuY2hlY2tfaXRlbS5lbXBsb3llZV9tYXhfY2xpZW50cyxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfc3RhdHVzOiB0aGF0LmNoZWNrX2l0ZW0uZW1wbG95ZWVfc3RhdHVzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfaXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFt0aGlzLmNoZWNrX2luZGV4XS5lbXBsb3llZV9zdGF0dXNfdGV4dCA9IHRoaXMucHJlX2RhdGEuZW1wbG95ZWVfc3RhdHVzX3RleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFt0aGlzLmNoZWNrX2luZGV4XS5lbXBsb3llZV9zdGF0dXMgPSB0aGlzLnByZV9kYXRhLmVtcGxveWVlX3N0YXR1cztcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VfaW5mby5lbXBsb3llZV9saXN0W3RoaXMuY2hlY2tfaW5kZXhdLmVtcGxveWVlX21heF9jbGllbnRzID0gdGhpcy5wcmVfZGF0YS5lbXBsb3llZV9tYXhfY2xpZW50cztcbiAgICAgICAgICAgICAgICB0aGlzLnByZV9kYXRhID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja19pbmRleCA9IC0xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoZWNrX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja19pdGVtID0gdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVfZGF0YS5lbXBsb3llZV9zdGF0dXNfdGV4dCA9IHRoaXMucGFnZV9pbmZvLmVtcGxveWVlX2xpc3RbaW5kZXhdLmVtcGxveWVlX3N0YXR1c190ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJlX2RhdGEuZW1wbG95ZWVfc3RhdHVzID0gdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFtpbmRleF0uZW1wbG95ZWVfc3RhdHVzO1xuICAgICAgICAgICAgICAgIHRoaXMucHJlX2RhdGEuZW1wbG95ZWVfbWF4X2NsaWVudHMgPSB0aGlzLnBhZ2VfaW5mby5lbXBsb3llZV9saXN0W2luZGV4XS5lbXBsb3llZV9tYXhfY2xpZW50cztcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9zdGF0dXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gdGhpcy5jaGVja19pdGVtLmVtcGxveWVlX3N0YXR1c190ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c19pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG5cbiAgICAgICAgICAgIGxldCB0ZWFtX2lkID0gb3B0aW9ucy50ZWFtX2lkO1xuICAgICAgICAgICAgcnEuZ2V0KCd0ZWFtRGV0YWlsJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVtcGxveWVlX3N0YXR1cyA9IHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0ZWFtX2lkOiB0ZWFtX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19