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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYWdlX2luZm8iLCJjaGVja19pdGVtIiwiY2hlY2tfaW5kZXgiLCJlbXBsb3llZV9zdGF0dXMiLCJzdGF0dXNfaW5kZXgiLCJwcmVfZGF0YSIsIm1ldGhvZHMiLCJnb1RvVGVhbU9yZGVyIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kSW5wdXQiLCJlIiwiZW1wbG95ZWVfbWF4X2NsaWVudHMiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRDaGFuZ2UiLCJlbXBsb3llZV9zdGF0dXNfdGV4dCIsInN1Ym1pdCIsInRoYXQiLCJycSIsImdldCIsIiRhcHBseSIsImVtcGxveWVlX2lkIiwiaWQiLCJjYW5jZWwiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZW1wbG95ZWVfbGlzdCIsImNoZWNrIiwiaSIsImZvckVhY2giLCJlbGVtZW50Iiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInVzZXIiLCJnZXRTdG9yYWdlU3luYyIsInRlYW1faWQiLCJyZXN1bHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxp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QUFMLENBQWU2QixhQUFmLENBQTZCSCxLQUE3QixFQUFvQ2Isb0JBQXpFO0FBQ0Esb0JBQUlrQixJQUFJLENBQVI7QUFDQSxxQkFBSzVCLGVBQUwsQ0FBcUI2QixPQUFyQixDQUE2QixtQkFBVztBQUNwQyx3QkFBSUMsV0FBVyxPQUFLaEMsVUFBTCxDQUFnQmdCLG9CQUEvQixFQUFxRDtBQUNqRCwrQkFBS2IsWUFBTCxHQUFvQjJCLENBQXBCO0FBQ0g7QUFDREE7QUFDSCxpQkFMRDtBQU1IO0FBL0NLLFM7Ozs7OytCQWlESEcsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJZixPQUFPLElBQVg7QUFDQUEsaUJBQUtrQixJQUFMLEdBQVk3QixlQUFLOEIsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0EsZ0JBQUlDLFVBQVVMLFFBQVFLLE9BQXRCO0FBQ0FuQiw4QkFBR0MsR0FBSCxDQUFPLFlBQVAsRUFBcUI7QUFDakIscUJBQUssbUJBQVU7QUFDWEYseUJBQUtuQixTQUFMLEdBQWlCd0MsT0FBTzVDLElBQVAsQ0FBWUEsSUFBN0I7QUFDQXVCLHlCQUFLaEIsZUFBTCxHQUF1QnFDLE9BQU81QyxJQUFQLENBQVlBLElBQVosQ0FBaUJPLGVBQXhDO0FBQ0FnQix5QkFBS0csTUFBTDtBQUNIO0FBTGdCLGFBQXJCLEVBTUc7QUFDQ2lCLHlCQUFTQTtBQURWLGFBTkg7QUFTSDs7O2lDQUNRLENBQUU7Ozs7RUFuRm9CL0IsZUFBS2lDLEk7O2tCQUFuQnBELEsiLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5Zui6Zif566h55CGJyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VfaW5mbzogbnVsbCxcbiAgICAgICAgICAgIGNoZWNrX2l0ZW06IG51bGwsXG4gICAgICAgICAgICBjaGVja19pbmRleDogLTEsXG4gICAgICAgICAgICBlbXBsb3llZV9zdGF0dXM6IFsn5q2j5bi4JywgJ+emgeeUqCcsICfnprvogYwnXSxcbiAgICAgICAgICAgIHN0YXR1c19pbmRleDogMCxcbiAgICAgICAgICAgIHByZV9kYXRhOiB7fVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub1RlYW1PcmRlcigpe1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ3RlYW1vcmRlcnMnIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX2l0ZW0uZW1wbG95ZWVfbWF4X2NsaWVudHM9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX2l0ZW0uZW1wbG95ZWVfc3RhdHVzX3RleHQgPSB0aGlzLmVtcGxveWVlX3N0YXR1c1t0aGlzLnN0YXR1c19pbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja19pdGVtLmVtcGxveWVlX3N0YXR1cyA9IHRoaXMuc3RhdHVzX2luZGV4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVFbXBsb3llZScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jaGVja19pdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlX2lkOiB0aGF0LmNoZWNrX2l0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlX21heF9jbGllbnRzOiB0aGF0LmNoZWNrX2l0ZW0uZW1wbG95ZWVfbWF4X2NsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlX3N0YXR1czogdGhhdC5jaGVja19pdGVtLmVtcGxveWVlX3N0YXR1c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX2l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvLmVtcGxveWVlX2xpc3RbdGhpcy5jaGVja19pbmRleF0uZW1wbG95ZWVfc3RhdHVzX3RleHQgPSB0aGlzLnByZV9kYXRhLmVtcGxveWVlX3N0YXR1c190ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvLmVtcGxveWVlX2xpc3RbdGhpcy5jaGVja19pbmRleF0uZW1wbG95ZWVfc3RhdHVzID0gdGhpcy5wcmVfZGF0YS5lbXBsb3llZV9zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFt0aGlzLmNoZWNrX2luZGV4XS5lbXBsb3llZV9tYXhfY2xpZW50cyA9IHRoaXMucHJlX2RhdGEuZW1wbG95ZWVfbWF4X2NsaWVudHM7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVfZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfaW5kZXggPSAtMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVjayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jaGVja19pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfaXRlbSA9IHRoaXMucGFnZV9pbmZvLmVtcGxveWVlX2xpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMucHJlX2RhdGEuZW1wbG95ZWVfc3RhdHVzX3RleHQgPSB0aGlzLnBhZ2VfaW5mby5lbXBsb3llZV9saXN0W2luZGV4XS5lbXBsb3llZV9zdGF0dXNfdGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZV9kYXRhLmVtcGxveWVlX3N0YXR1cyA9IHRoaXMucGFnZV9pbmZvLmVtcGxveWVlX2xpc3RbaW5kZXhdLmVtcGxveWVlX3N0YXR1cztcbiAgICAgICAgICAgICAgICB0aGlzLnByZV9kYXRhLmVtcGxveWVlX21heF9jbGllbnRzID0gdGhpcy5wYWdlX2luZm8uZW1wbG95ZWVfbGlzdFtpbmRleF0uZW1wbG95ZWVfbWF4X2NsaWVudHM7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVfc3RhdHVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09IHRoaXMuY2hlY2tfaXRlbS5lbXBsb3llZV9zdGF0dXNfdGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICAgICAgbGV0IHRlYW1faWQgPSBvcHRpb25zLnRlYW1faWQ7XG4gICAgICAgICAgICBycS5nZXQoJ3RlYW1EZXRhaWwnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZW1wbG95ZWVfc3RhdHVzID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRlYW1faWQ6IHRlYW1faWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=