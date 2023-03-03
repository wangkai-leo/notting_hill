'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

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
            title: '客资',
            is_hide: true,
            userList: null,
            user: null,
            user_act: 0, //0 客服 1销售 策划
            sourceList: [],
            params: {},
            is_filter: false,
            channel_arr: [],
            intention_arr: [],
            sales_arr: [],
            intention_city_arr: [],
            op: {
                start_date: '',
                end_date: '',
                order_id: '',
                channel_name: '',
                intention_name: '',
                sales_name: '',
                order_id_str: '',
                user_mobile: '',
                wechat_id: '',
                intention_city_name: ''
            },
            is_search: false,
            show_search: true
        }, _this.methods = {
            showSearchBox: function showSearchBox() {
                this.show_search = true;
            },
            searchNow: function searchNow() {
                var that = this;
                if (!that.op.order_id_str && !that.op.user_mobile && !that.op.wechat_id) {
                    _wepy2.default.showToast({
                        title: '请输入至少一项', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                _request2.default.get('searchAllUser', {
                    200: function _(result) {
                        that.show_search = false;
                        that.userList = that.sourceList = result.data.data;
                        that.$apply();
                    }
                }, {
                    order_id_str: that.op.order_id_str,
                    user_mobile: that.op.user_mobile,
                    wechat_id: that.op.wechat_id
                });
            },
            bindCityChange: function bindCityChange(e) {
                this.op.intention_city_name = this.intention_city_arr[e.detail.value];
            },
            bindInputOrderIdStr: function bindInputOrderIdStr(e) {
                this.op.order_id_str = e.detail.value;
            },
            bindInputMobile: function bindInputMobile(e) {
                this.op.user_mobile = e.detail.value;
            },
            bindInputwechat: function bindInputwechat(e) {
                this.op.wechat_id = e.detail.value;
            },
            bindStartChange: function bindStartChange(e) {
                this.op.start_date = e.detail.value;
            },
            bindEndChange: function bindEndChange(e) {
                this.op.end_date = e.detail.value;
            },
            bindInputOrderId: function bindInputOrderId(e) {
                this.op.order_id = e.detail.value;
            },
            bindSalesChange: function bindSalesChange(e) {
                this.op.sales_name = this.sales_arr[e.detail.value];
            },
            bindIntentionChange: function bindIntentionChange(e) {
                this.op.intention_name = this.intention_arr[e.detail.value];
            },
            bindChannelChange: function bindChannelChange(e) {
                this.op.channel_name = this.channel_arr[e.detail.value];
            },
            search: function search() {
                var _this2 = this;

                this.is_filter = false;
                var pur = [];
                this.sourceList.forEach(function (element) {
                    var is_add = true;
                    var s_order_id = _this2.op.order_id;
                    if (_this2.user.is_scheme) {
                        if (!element.wedding_date || new Date(element.wedding_date).getTime() < new Date(_this2.op.start_date).getTime() || new Date(element.wedding_date).getTime() > new Date(_this2.op.end_date).getTime()) {
                            is_add = false;
                        };
                    } else {
                        if (!element.create_time || element.create_time < new Date(_this2.op.start_date).getTime() / 1000 || element.create_time > new Date(_this2.op.end_date).getTime() / 1000) {
                            is_add = false;
                        };
                    }
                    if (s_order_id && element.order_id.indexOf(s_order_id) < 0) {
                        is_add = false;
                    }
                    if (_this2.op.channel_name && element.channel_name != _this2.op.channel_name) {
                        is_add = false;
                    }
                    if (_this2.op.intention_name && element.intention_name != _this2.op.intention_name) {
                        is_add = false;
                    }
                    if (_this2.op.sales_name && element.sales_name != _this2.op.sales_name) {
                        is_add = false;
                    }
                    if (_this2.op.intention_city_name && element.intention_city_name != _this2.op.intention_city_name) {
                        is_add = false;
                    }
                    if (is_add) {
                        pur.push(element);
                    }
                });
                this.userList = pur;
            },
            editStatus: function editStatus() {
                this.is_filter = true;
            },
            goToDetail: function goToDetail(e) {
                var id = e.currentTarget.dataset.id;
                if (this.user.is_server || this.user.is_server_offline) {
                    _wepy2.default.navigateTo({
                        url: '/pages/common/server/customer?id=' + id
                    });
                } else if (this.user.is_sale) {
                    _wepy2.default.navigateTo({
                        url: '/pages/common/sale/customer?id=' + id + '&is_search=yes'
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            options = _tool2.default.decodeQrCodeParam(options);
            console.log(options);
            that.params = options;
            that.is_search = that.params.is_search;
        }
    }, {
        key: 'arrayHaveItem',
        value: function arrayHaveItem(list, it) {
            var has = false;
            list.forEach(function (el) {
                if (el == it) {
                    has = true;
                }
            });
            if (!it) {
                has = true;
            }
            return has;
        }
    }, {
        key: 'prepareAdition',
        value: function prepareAdition(list) {
            var _this3 = this;

            list.forEach(function (element) {
                if (!_this3.arrayHaveItem(_this3.channel_arr, element.channel_name)) {
                    _this3.channel_arr.push(element.channel_name);
                }
                if (!_this3.arrayHaveItem(_this3.intention_arr, element.intention_name)) {
                    _this3.intention_arr.push(element.intention_name);
                }
                if (!_this3.arrayHaveItem(_this3.sales_arr, element.sales_name)) {
                    _this3.sales_arr.push(element.sales_name);
                }
                if (!_this3.arrayHaveItem(_this3.intention_city_arr, element.intention_city_name)) {
                    _this3.intention_city_arr.push(element.intention_city_name);
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            var user = this.user = _wepy2.default.getStorageSync('user');
            if (!user) {
                _wepy2.default.redirectTo({
                    url: '/pages/login'
                });
            } else {
                var api_name = '';
                user.is_server || user.is_server_offline ? api_name = 'getServerDataStatisticsDetail' : '';
                user.is_sale ? api_name = 'getDataStatisticsDetail' : '';
                user.is_scheme ? api_name = 'getImplementOrderStatistics' : '';
                user.is_excute ? api_name = 'getOperationUsers' : '';
                if (that.is_search) {
                    return false;
                }
                var data = {};
                if (user.is_scheme) {
                    data = {
                        pay_date_start: that.params.pay_date_start,
                        pay_date_end: that.params.pay_date_end,
                        order_date_start: that.params.order_date_start,
                        order_date_end: that.params.order_date_end,
                        data_type: that.params.data_type
                    };
                } else {
                    if (that.params.map) {
                        data = {
                            map: that.params.map
                        };
                    } else if (that.params.user_status) {
                        data = {
                            start_date: that.params.start_date,
                            end_date: that.params.end_date,
                            employee_ids: that.params.employee_ids,
                            user_status: that.params.user_status
                        };
                    } else {
                        data = {
                            start_date: that.params.start_date,
                            end_date: that.params.end_date,
                            channel_id: that.params.channel_id,
                            intention_id: that.params.intention_id,
                            employee_ids: that.params.employee_ids,
                            intention_city: that.params.intention_city,
                            is_achievement: that.params.is_achievement
                        };
                    }
                }
                that.op.start_date = that.params.start_date;
                that.op.end_date = that.params.end_date;
                _request2.default.get(api_name, {
                    200: function _(result) {
                        if (user.is_scheme) {
                            that.userList = that.sourceList = result.data.data_list;
                        } else {
                            that.userList = that.sourceList = result.data.data;
                        }
                        that.prepareAdition(that.sourceList);
                        that.$apply();
                    }
                }, data);
            }
        }
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVybGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInVzZXIiLCJ1c2VyX2FjdCIsInNvdXJjZUxpc3QiLCJwYXJhbXMiLCJpc19maWx0ZXIiLCJjaGFubmVsX2FyciIsImludGVudGlvbl9hcnIiLCJzYWxlc19hcnIiLCJpbnRlbnRpb25fY2l0eV9hcnIiLCJvcCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIm9yZGVyX2lkIiwiY2hhbm5lbF9uYW1lIiwiaW50ZW50aW9uX25hbWUiLCJzYWxlc19uYW1lIiwib3JkZXJfaWRfc3RyIiwidXNlcl9tb2JpbGUiLCJ3ZWNoYXRfaWQiLCJpbnRlbnRpb25fY2l0eV9uYW1lIiwiaXNfc2VhcmNoIiwic2hvd19zZWFyY2giLCJtZXRob2RzIiwic2hvd1NlYXJjaEJveCIsInNlYXJjaE5vdyIsInRoYXQiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsImJpbmRDaXR5Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0T3JkZXJJZFN0ciIsImJpbmRJbnB1dE1vYmlsZSIsImJpbmRJbnB1dHdlY2hhdCIsImJpbmRTdGFydENoYW5nZSIsImJpbmRFbmRDaGFuZ2UiLCJiaW5kSW5wdXRPcmRlcklkIiwiYmluZFNhbGVzQ2hhbmdlIiwiYmluZEludGVudGlvbkNoYW5nZSIsImJpbmRDaGFubmVsQ2hhbmdlIiwic2VhcmNoIiwicHVyIiwiZm9yRWFjaCIsImlzX2FkZCIsInNfb3JkZXJfaWQiLCJpc19zY2hlbWUiLCJlbGVtZW50Iiwid2VkZGluZ19kYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJjcmVhdGVfdGltZSIsImluZGV4T2YiLCJwdXNoIiwiZWRpdFN0YXR1cyIsImdvVG9EZXRhaWwiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaXNfc2FsZSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIml0IiwiaGFzIiwiZWwiLCJhcnJheUhhdmVJdGVtIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZWRpcmVjdFRvIiwiYXBpX25hbWUiLCJpc19leGN1dGUiLCJwYXlfZGF0ZV9zdGFydCIsInBheV9kYXRlX2VuZCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImRhdGFfdHlwZSIsIm1hcCIsInVzZXJfc3RhdHVzIiwiZW1wbG95ZWVfaWRzIiwiY2hhbm5lbF9pZCIsImludGVudGlvbl9pZCIsImludGVudGlvbl9jaXR5IiwiaXNfYWNoaWV2ZW1lbnQiLCJkYXRhX2xpc3QiLCJwcmVwYXJlQWRpdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyxvQkFBUSxJQURMO0FBRUhDLHVCQUFXLElBRlI7QUFHSEMsbUJBQU8sSUFISjtBQUlIQyxxQkFBUyxJQUpOO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsa0JBQU0sSUFOSDtBQU9IQyxzQkFBVSxDQVBQLEVBT1U7QUFDYkMsd0JBQVksRUFSVDtBQVNIQyxvQkFBUSxFQVRMO0FBVUhDLHVCQUFXLEtBVlI7QUFXSEMseUJBQWEsRUFYVjtBQVlIQywyQkFBZSxFQVpaO0FBYUhDLHVCQUFXLEVBYlI7QUFjSEMsZ0NBQW9CLEVBZGpCO0FBZUhDLGdCQUFJO0FBQ0FDLDRCQUFZLEVBRFo7QUFFQUMsMEJBQVUsRUFGVjtBQUdBQywwQkFBVSxFQUhWO0FBSUFDLDhCQUFjLEVBSmQ7QUFLQUMsZ0NBQWdCLEVBTGhCO0FBTUFDLDRCQUFZLEVBTlo7QUFPQUMsOEJBQWMsRUFQZDtBQVFBQyw2QkFBYSxFQVJiO0FBU0FDLDJCQUFXLEVBVFg7QUFVQUMscUNBQXFCO0FBVnJCLGFBZkQ7QUEyQkhDLHVCQUFXLEtBM0JSO0FBNEJIQyx5QkFBYTtBQTVCVixTLFFBOEJQQyxPLEdBQVU7QUFDTkMseUJBRE0sMkJBQ1U7QUFDWixxQkFBS0YsV0FBTCxHQUFtQixJQUFuQjtBQUNILGFBSEs7QUFJTkcscUJBSk0sdUJBSU07QUFDUixvQkFBSUMsT0FBTyxJQUFYO0FBQ0Esb0JBQUksQ0FBQ0EsS0FBS2hCLEVBQUwsQ0FBUU8sWUFBVCxJQUF5QixDQUFDUyxLQUFLaEIsRUFBTCxDQUFRUSxXQUFsQyxJQUFpRCxDQUFDUSxLQUFLaEIsRUFBTCxDQUFRUyxTQUE5RCxFQUF5RTtBQUNyRVEsbUNBQUtDLFNBQUwsQ0FBZTtBQUNYOUIsK0JBQU8sU0FESSxFQUNPO0FBQ2xCK0IsOEJBQU0sTUFGSyxFQUVHO0FBQ2RDLGtDQUFVLElBSEMsRUFHSztBQUNoQkMsOEJBQU0sSUFKSyxFQUlDO0FBQ1pDLGlDQUFTLHNCQUFPLENBQUU7QUFMUCxxQkFBZjtBQU9BLDJCQUFPLEtBQVA7QUFDSDtBQUNEQyxrQ0FBR0MsR0FBSCxDQUFPLGVBQVAsRUFBd0I7QUFDcEIseUJBQUssbUJBQVU7QUFDWFIsNkJBQUtKLFdBQUwsR0FBbUIsS0FBbkI7QUFDQUksNkJBQUsxQixRQUFMLEdBQWdCMEIsS0FBS3ZCLFVBQUwsR0FBa0JnQyxPQUFPeEMsSUFBUCxDQUFZQSxJQUE5QztBQUNBK0IsNkJBQUtVLE1BQUw7QUFDSDtBQUxtQixpQkFBeEIsRUFNRztBQUNDbkIsa0NBQWNTLEtBQUtoQixFQUFMLENBQVFPLFlBRHZCO0FBRUNDLGlDQUFhUSxLQUFLaEIsRUFBTCxDQUFRUSxXQUZ0QjtBQUdDQywrQkFBV08sS0FBS2hCLEVBQUwsQ0FBUVM7QUFIcEIsaUJBTkg7QUFXSCxhQTNCSztBQTRCTmtCLDBCQTVCTSwwQkE0QlNDLENBNUJULEVBNEJZO0FBQ2QscUJBQUs1QixFQUFMLENBQVFVLG1CQUFSLEdBQThCLEtBQUtYLGtCQUFMLENBQXdCNkIsRUFBRUMsTUFBRixDQUFTQyxLQUFqQyxDQUE5QjtBQUNILGFBOUJLO0FBK0JOQywrQkEvQk0sK0JBK0JjSCxDQS9CZCxFQStCaUI7QUFDbkIscUJBQUs1QixFQUFMLENBQVFPLFlBQVIsR0FBdUJxQixFQUFFQyxNQUFGLENBQVNDLEtBQWhDO0FBQ0gsYUFqQ0s7QUFrQ05FLDJCQWxDTSwyQkFrQ1VKLENBbENWLEVBa0NhO0FBQ2YscUJBQUs1QixFQUFMLENBQVFRLFdBQVIsR0FBc0JvQixFQUFFQyxNQUFGLENBQVNDLEtBQS9CO0FBQ0gsYUFwQ0s7QUFxQ05HLDJCQXJDTSwyQkFxQ1VMLENBckNWLEVBcUNhO0FBQ2YscUJBQUs1QixFQUFMLENBQVFTLFNBQVIsR0FBb0JtQixFQUFFQyxNQUFGLENBQVNDLEtBQTdCO0FBQ0gsYUF2Q0s7QUF3Q05JLDJCQXhDTSwyQkF3Q1VOLENBeENWLEVBd0NhO0FBQ2YscUJBQUs1QixFQUFMLENBQVFDLFVBQVIsR0FBcUIyQixFQUFFQyxNQUFGLENBQVNDLEtBQTlCO0FBQ0gsYUExQ0s7QUEyQ05LLHlCQTNDTSx5QkEyQ1FQLENBM0NSLEVBMkNXO0FBQ2IscUJBQUs1QixFQUFMLENBQVFFLFFBQVIsR0FBbUIwQixFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBQ0gsYUE3Q0s7QUE4Q05NLDRCQTlDTSw0QkE4Q1dSLENBOUNYLEVBOENjO0FBQ2hCLHFCQUFLNUIsRUFBTCxDQUFRRyxRQUFSLEdBQW1CeUIsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNILGFBaERLO0FBaUROTywyQkFqRE0sMkJBaURVVCxDQWpEVixFQWlEYTtBQUNmLHFCQUFLNUIsRUFBTCxDQUFRTSxVQUFSLEdBQXFCLEtBQUtSLFNBQUwsQ0FBZThCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEIsQ0FBckI7QUFDSCxhQW5ESztBQW9ETlEsK0JBcERNLCtCQW9EY1YsQ0FwRGQsRUFvRGlCO0FBQ25CLHFCQUFLNUIsRUFBTCxDQUFRSyxjQUFSLEdBQXlCLEtBQUtSLGFBQUwsQ0FBbUIrQixFQUFFQyxNQUFGLENBQVNDLEtBQTVCLENBQXpCO0FBQ0gsYUF0REs7QUF1RE5TLDZCQXZETSw2QkF1RFlYLENBdkRaLEVBdURlO0FBQ2pCLHFCQUFLNUIsRUFBTCxDQUFRSSxZQUFSLEdBQXVCLEtBQUtSLFdBQUwsQ0FBaUJnQyxFQUFFQyxNQUFGLENBQVNDLEtBQTFCLENBQXZCO0FBQ0gsYUF6REs7QUEwRE5VLGtCQTFETSxvQkEwREc7QUFBQTs7QUFDTCxxQkFBSzdDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxvQkFBSThDLE1BQU0sRUFBVjtBQUNBLHFCQUFLaEQsVUFBTCxDQUFnQmlELE9BQWhCLENBQXdCLG1CQUFXO0FBQy9CLHdCQUFJQyxTQUFTLElBQWI7QUFDQSx3QkFBSUMsYUFBYSxPQUFLNUMsRUFBTCxDQUFRRyxRQUF6QjtBQUNBLHdCQUFJLE9BQUtaLElBQUwsQ0FBVXNELFNBQWQsRUFBeUI7QUFDckIsNEJBQUksQ0FBQ0MsUUFBUUMsWUFBVCxJQUF5QixJQUFJQyxJQUFKLENBQVNGLFFBQVFDLFlBQWpCLEVBQStCRSxPQUEvQixLQUEyQyxJQUFJRCxJQUFKLENBQVMsT0FBS2hELEVBQUwsQ0FBUUMsVUFBakIsRUFBNkJnRCxPQUE3QixFQUFwRSxJQUE4RyxJQUFJRCxJQUFKLENBQVNGLFFBQVFDLFlBQWpCLEVBQStCRSxPQUEvQixLQUEyQyxJQUFJRCxJQUFKLENBQVMsT0FBS2hELEVBQUwsQ0FBUUUsUUFBakIsRUFBMkIrQyxPQUEzQixFQUE3SixFQUFtTTtBQUMvTE4scUNBQVMsS0FBVDtBQUNIO0FBQ0oscUJBSkQsTUFJTztBQUNILDRCQUFJLENBQUNHLFFBQVFJLFdBQVQsSUFBd0JKLFFBQVFJLFdBQVIsR0FBc0IsSUFBSUYsSUFBSixDQUFTLE9BQUtoRCxFQUFMLENBQVFDLFVBQWpCLEVBQTZCZ0QsT0FBN0IsS0FBeUMsSUFBdkYsSUFBK0ZILFFBQVFJLFdBQVIsR0FBc0IsSUFBSUYsSUFBSixDQUFTLE9BQUtoRCxFQUFMLENBQVFFLFFBQWpCLEVBQTJCK0MsT0FBM0IsS0FBdUMsSUFBaEssRUFBc0s7QUFDbEtOLHFDQUFTLEtBQVQ7QUFDSDtBQUNKO0FBQ0Qsd0JBQUlDLGNBQWNFLFFBQVEzQyxRQUFSLENBQWlCZ0QsT0FBakIsQ0FBeUJQLFVBQXpCLElBQXVDLENBQXpELEVBQTREO0FBQ3hERCxpQ0FBUyxLQUFUO0FBQ0g7QUFDRCx3QkFBSSxPQUFLM0MsRUFBTCxDQUFRSSxZQUFSLElBQXdCMEMsUUFBUTFDLFlBQVIsSUFBd0IsT0FBS0osRUFBTCxDQUFRSSxZQUE1RCxFQUEwRTtBQUN0RXVDLGlDQUFTLEtBQVQ7QUFDSDtBQUNELHdCQUFJLE9BQUszQyxFQUFMLENBQVFLLGNBQVIsSUFBMEJ5QyxRQUFRekMsY0FBUixJQUEwQixPQUFLTCxFQUFMLENBQVFLLGNBQWhFLEVBQWdGO0FBQzVFc0MsaUNBQVMsS0FBVDtBQUNIO0FBQ0Qsd0JBQUksT0FBSzNDLEVBQUwsQ0FBUU0sVUFBUixJQUFzQndDLFFBQVF4QyxVQUFSLElBQXNCLE9BQUtOLEVBQUwsQ0FBUU0sVUFBeEQsRUFBb0U7QUFDaEVxQyxpQ0FBUyxLQUFUO0FBQ0g7QUFDRCx3QkFBSSxPQUFLM0MsRUFBTCxDQUFRVSxtQkFBUixJQUErQm9DLFFBQVFwQyxtQkFBUixJQUErQixPQUFLVixFQUFMLENBQVFVLG1CQUExRSxFQUErRjtBQUMzRmlDLGlDQUFTLEtBQVQ7QUFDSDtBQUNELHdCQUFJQSxNQUFKLEVBQVk7QUFDUkYsNEJBQUlXLElBQUosQ0FBU04sT0FBVDtBQUNIO0FBQ0osaUJBOUJEO0FBK0JBLHFCQUFLeEQsUUFBTCxHQUFnQm1ELEdBQWhCO0FBQ0gsYUE3Rks7QUE4Rk5ZLHNCQTlGTSx3QkE4Rk87QUFDVCxxQkFBSzFELFNBQUwsR0FBaUIsSUFBakI7QUFDSCxhQWhHSztBQWlHTjJELHNCQWpHTSxzQkFpR0sxQixDQWpHTCxFQWlHUTtBQUNWLG9CQUFJMkIsS0FBSzNCLEVBQUU0QixhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsRUFBakM7QUFDQSxvQkFBSSxLQUFLaEUsSUFBTCxDQUFVbUUsU0FBVixJQUF1QixLQUFLbkUsSUFBTCxDQUFVb0UsaUJBQXJDLEVBQXdEO0FBQ3BEMUMsbUNBQUsyQyxVQUFMLENBQWdCO0FBQ1pDLDZCQUFLLHNDQUFzQ047QUFEL0IscUJBQWhCO0FBR0gsaUJBSkQsTUFJTyxJQUFJLEtBQUtoRSxJQUFMLENBQVV1RSxPQUFkLEVBQXVCO0FBQzFCN0MsbUNBQUsyQyxVQUFMLENBQWdCO0FBQ1pDLDZCQUFLLG9DQUFvQ04sRUFBcEMsR0FBeUM7QUFEbEMscUJBQWhCO0FBR0g7QUFDSjtBQTVHSyxTOzs7OzsrQkE4R0hRLE8sRUFBUztBQUNaLGdCQUFJL0MsT0FBTyxJQUFYO0FBQ0ErQyxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQUcsb0JBQVFDLEdBQVIsQ0FBWUosT0FBWjtBQUNBL0MsaUJBQUt0QixNQUFMLEdBQWNxRSxPQUFkO0FBQ0EvQyxpQkFBS0wsU0FBTCxHQUFpQkssS0FBS3RCLE1BQUwsQ0FBWWlCLFNBQTdCO0FBQ0g7OztzQ0FDYXlELEksRUFBTUMsRSxFQUFJO0FBQ3BCLGdCQUFJQyxNQUFNLEtBQVY7QUFDQUYsaUJBQUsxQixPQUFMLENBQWEsY0FBTTtBQUNmLG9CQUFJNkIsTUFBTUYsRUFBVixFQUFjO0FBQ1ZDLDBCQUFNLElBQU47QUFDSDtBQUNKLGFBSkQ7QUFLQSxnQkFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDTEMsc0JBQU0sSUFBTjtBQUNIO0FBQ0QsbUJBQU9BLEdBQVA7QUFDSDs7O3VDQUNjRixJLEVBQU07QUFBQTs7QUFDakJBLGlCQUFLMUIsT0FBTCxDQUFhLG1CQUFXO0FBQ3BCLG9CQUFJLENBQUMsT0FBSzhCLGFBQUwsQ0FBbUIsT0FBSzVFLFdBQXhCLEVBQXFDa0QsUUFBUTFDLFlBQTdDLENBQUwsRUFBaUU7QUFDN0QsMkJBQUtSLFdBQUwsQ0FBaUJ3RCxJQUFqQixDQUFzQk4sUUFBUTFDLFlBQTlCO0FBQ0g7QUFDRCxvQkFBSSxDQUFDLE9BQUtvRSxhQUFMLENBQW1CLE9BQUszRSxhQUF4QixFQUF1Q2lELFFBQVF6QyxjQUEvQyxDQUFMLEVBQXFFO0FBQ2pFLDJCQUFLUixhQUFMLENBQW1CdUQsSUFBbkIsQ0FBd0JOLFFBQVF6QyxjQUFoQztBQUNIO0FBQ0Qsb0JBQUksQ0FBQyxPQUFLbUUsYUFBTCxDQUFtQixPQUFLMUUsU0FBeEIsRUFBbUNnRCxRQUFReEMsVUFBM0MsQ0FBTCxFQUE2RDtBQUN6RCwyQkFBS1IsU0FBTCxDQUFlc0QsSUFBZixDQUFvQk4sUUFBUXhDLFVBQTVCO0FBQ0g7QUFDRCxvQkFBSSxDQUFDLE9BQUtrRSxhQUFMLENBQW1CLE9BQUt6RSxrQkFBeEIsRUFBNEMrQyxRQUFRcEMsbUJBQXBELENBQUwsRUFBK0U7QUFDM0UsMkJBQUtYLGtCQUFMLENBQXdCcUQsSUFBeEIsQ0FBNkJOLFFBQVFwQyxtQkFBckM7QUFDSDtBQUNKLGFBYkQ7QUFjSDs7O2lDQUNRO0FBQ0wsZ0JBQUlNLE9BQU8sSUFBWDtBQUNBLGdCQUFJekIsT0FBTyxLQUFLQSxJQUFMLEdBQVkwQixlQUFLd0QsY0FBTCxDQUFvQixNQUFwQixDQUF2QjtBQUNBLGdCQUFJLENBQUNsRixJQUFMLEVBQVc7QUFDUDBCLCtCQUFLeUQsVUFBTCxDQUFnQjtBQUNaYix5QkFBSztBQURPLGlCQUFoQjtBQUdILGFBSkQsTUFJTztBQUNILG9CQUFJYyxXQUFXLEVBQWY7QUFDQXBGLHFCQUFLbUUsU0FBTCxJQUFrQm5FLEtBQUtvRSxpQkFBdkIsR0FBMkNnQixXQUFXLCtCQUF0RCxHQUF3RixFQUF4RjtBQUNBcEYscUJBQUt1RSxPQUFMLEdBQWVhLFdBQVcseUJBQTFCLEdBQXNELEVBQXREO0FBQ0FwRixxQkFBS3NELFNBQUwsR0FBaUI4QixXQUFXLDZCQUE1QixHQUE0RCxFQUE1RDtBQUNBcEYscUJBQUtxRixTQUFMLEdBQWlCRCxXQUFXLG1CQUE1QixHQUFrRCxFQUFsRDtBQUNBLG9CQUFJM0QsS0FBS0wsU0FBVCxFQUFvQjtBQUNoQiwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxvQkFBSTFCLE9BQU8sRUFBWDtBQUNBLG9CQUFJTSxLQUFLc0QsU0FBVCxFQUFvQjtBQUNoQjVELDJCQUFPO0FBQ0g0Rix3Q0FBZ0I3RCxLQUFLdEIsTUFBTCxDQUFZbUYsY0FEekI7QUFFSEMsc0NBQWM5RCxLQUFLdEIsTUFBTCxDQUFZb0YsWUFGdkI7QUFHSEMsMENBQWtCL0QsS0FBS3RCLE1BQUwsQ0FBWXFGLGdCQUgzQjtBQUlIQyx3Q0FBZ0JoRSxLQUFLdEIsTUFBTCxDQUFZc0YsY0FKekI7QUFLSEMsbUNBQVdqRSxLQUFLdEIsTUFBTCxDQUFZdUY7QUFMcEIscUJBQVA7QUFPSCxpQkFSRCxNQVFPO0FBQ0gsd0JBQUlqRSxLQUFLdEIsTUFBTCxDQUFZd0YsR0FBaEIsRUFBcUI7QUFDakJqRywrQkFBTztBQUNIaUcsaUNBQUtsRSxLQUFLdEIsTUFBTCxDQUFZd0Y7QUFEZCx5QkFBUDtBQUdILHFCQUpELE1BSU8sSUFBSWxFLEtBQUt0QixNQUFMLENBQVl5RixXQUFoQixFQUE2QjtBQUNoQ2xHLCtCQUFPO0FBQ0hnQix3Q0FBWWUsS0FBS3RCLE1BQUwsQ0FBWU8sVUFEckI7QUFFSEMsc0NBQVVjLEtBQUt0QixNQUFMLENBQVlRLFFBRm5CO0FBR0hrRiwwQ0FBY3BFLEtBQUt0QixNQUFMLENBQVkwRixZQUh2QjtBQUlIRCx5Q0FBYW5FLEtBQUt0QixNQUFMLENBQVl5RjtBQUp0Qix5QkFBUDtBQU1ILHFCQVBNLE1BT0E7QUFDSGxHLCtCQUFPO0FBQ0hnQix3Q0FBWWUsS0FBS3RCLE1BQUwsQ0FBWU8sVUFEckI7QUFFSEMsc0NBQVVjLEtBQUt0QixNQUFMLENBQVlRLFFBRm5CO0FBR0htRix3Q0FBWXJFLEtBQUt0QixNQUFMLENBQVkyRixVQUhyQjtBQUlIQywwQ0FBY3RFLEtBQUt0QixNQUFMLENBQVk0RixZQUp2QjtBQUtIRiwwQ0FBY3BFLEtBQUt0QixNQUFMLENBQVkwRixZQUx2QjtBQU1IRyw0Q0FBZ0J2RSxLQUFLdEIsTUFBTCxDQUFZNkYsY0FOekI7QUFPSEMsNENBQWdCeEUsS0FBS3RCLE1BQUwsQ0FBWThGO0FBUHpCLHlCQUFQO0FBU0g7QUFDSjtBQUNEeEUscUJBQUtoQixFQUFMLENBQVFDLFVBQVIsR0FBcUJlLEtBQUt0QixNQUFMLENBQVlPLFVBQWpDO0FBQ0FlLHFCQUFLaEIsRUFBTCxDQUFRRSxRQUFSLEdBQW1CYyxLQUFLdEIsTUFBTCxDQUFZUSxRQUEvQjtBQUNBcUIsa0NBQUdDLEdBQUgsQ0FBT21ELFFBQVAsRUFBaUI7QUFDYix5QkFBSyxtQkFBVTtBQUNYLDRCQUFJcEYsS0FBS3NELFNBQVQsRUFBb0I7QUFDaEI3QixpQ0FBSzFCLFFBQUwsR0FBZ0IwQixLQUFLdkIsVUFBTCxHQUFrQmdDLE9BQU94QyxJQUFQLENBQVl3RyxTQUE5QztBQUNILHlCQUZELE1BRU87QUFDSHpFLGlDQUFLMUIsUUFBTCxHQUFnQjBCLEtBQUt2QixVQUFMLEdBQWtCZ0MsT0FBT3hDLElBQVAsQ0FBWUEsSUFBOUM7QUFDSDtBQUNEK0IsNkJBQUswRSxjQUFMLENBQW9CMUUsS0FBS3ZCLFVBQXpCO0FBQ0F1Qiw2QkFBS1UsTUFBTDtBQUNIO0FBVFksaUJBQWpCLEVBVUd6QyxJQVZIO0FBV0g7QUFDSjs7OztFQXRQOEJnQyxlQUFLMEUsSTs7a0JBQW5CakgsSyIsImZpbGUiOiJjdXN0b21lcmxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrqLotYQnLFxuICAgICAgICAgICAgaXNfaGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBudWxsLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIHVzZXJfYWN0OiAwLCAvLzAg5a6i5pyNIDHplIDllK4g562W5YiSXG4gICAgICAgICAgICBzb3VyY2VMaXN0OiBbXSxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBpc19maWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2hhbm5lbF9hcnI6IFtdLFxuICAgICAgICAgICAgaW50ZW50aW9uX2FycjogW10sXG4gICAgICAgICAgICBzYWxlc19hcnI6IFtdLFxuICAgICAgICAgICAgaW50ZW50aW9uX2NpdHlfYXJyOiBbXSxcbiAgICAgICAgICAgIG9wOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgZW5kX2RhdGU6ICcnLFxuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiAnJyxcbiAgICAgICAgICAgICAgICBjaGFubmVsX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGludGVudGlvbl9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBzYWxlc19uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBvcmRlcl9pZF9zdHI6ICcnLFxuICAgICAgICAgICAgICAgIHVzZXJfbW9iaWxlOiAnJyxcbiAgICAgICAgICAgICAgICB3ZWNoYXRfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGludGVudGlvbl9jaXR5X25hbWU6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNfc2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfc2VhcmNoOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzaG93U2VhcmNoQm94KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaE5vdygpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGF0Lm9wLm9yZGVyX2lkX3N0ciAmJiAhdGhhdC5vcC51c2VyX21vYmlsZSAmJiAhdGhhdC5vcC53ZWNoYXRfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXoh7PlsJHkuIDpobknLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycS5nZXQoJ3NlYXJjaEFsbFVzZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19zZWFyY2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3QgPSB0aGF0LnNvdXJjZUxpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWRfc3RyOiB0aGF0Lm9wLm9yZGVyX2lkX3N0cixcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9tb2JpbGU6IHRoYXQub3AudXNlcl9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIHdlY2hhdF9pZDogdGhhdC5vcC53ZWNoYXRfaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRDaXR5Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLmludGVudGlvbl9jaXR5X25hbWUgPSB0aGlzLmludGVudGlvbl9jaXR5X2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0T3JkZXJJZFN0cihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC5vcmRlcl9pZF9zdHIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNb2JpbGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3AudXNlcl9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXR3ZWNoYXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3Aud2VjaGF0X2lkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFN0YXJ0Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLnN0YXJ0X2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kRW5kQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLmVuZF9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0T3JkZXJJZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC5vcmRlcl9pZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRTYWxlc0NoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC5zYWxlc19uYW1lID0gdGhpcy5zYWxlc19hcnJbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnRlbnRpb25DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3AuaW50ZW50aW9uX25hbWUgPSB0aGlzLmludGVudGlvbl9hcnJbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRDaGFubmVsQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLmNoYW5uZWxfbmFtZSA9IHRoaXMuY2hhbm5lbF9hcnJbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2ZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBwdXIgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzX2FkZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzX29yZGVyX2lkID0gdGhpcy5vcC5vcmRlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5pc19zY2hlbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC53ZWRkaW5nX2RhdGUgfHwgbmV3IERhdGUoZWxlbWVudC53ZWRkaW5nX2RhdGUpLmdldFRpbWUoKSA8IG5ldyBEYXRlKHRoaXMub3Auc3RhcnRfZGF0ZSkuZ2V0VGltZSgpIHx8IG5ldyBEYXRlKGVsZW1lbnQud2VkZGluZ19kYXRlKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSh0aGlzLm9wLmVuZF9kYXRlKS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY3JlYXRlX3RpbWUgfHwgZWxlbWVudC5jcmVhdGVfdGltZSA8IG5ldyBEYXRlKHRoaXMub3Auc3RhcnRfZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCB8fCBlbGVtZW50LmNyZWF0ZV90aW1lID4gbmV3IERhdGUodGhpcy5vcC5lbmRfZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc19vcmRlcl9pZCAmJiBlbGVtZW50Lm9yZGVyX2lkLmluZGV4T2Yoc19vcmRlcl9pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcC5jaGFubmVsX25hbWUgJiYgZWxlbWVudC5jaGFubmVsX25hbWUgIT0gdGhpcy5vcC5jaGFubmVsX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wLmludGVudGlvbl9uYW1lICYmIGVsZW1lbnQuaW50ZW50aW9uX25hbWUgIT0gdGhpcy5vcC5pbnRlbnRpb25fbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Auc2FsZXNfbmFtZSAmJiBlbGVtZW50LnNhbGVzX25hbWUgIT0gdGhpcy5vcC5zYWxlc19uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcC5pbnRlbnRpb25fY2l0eV9uYW1lICYmIGVsZW1lbnQuaW50ZW50aW9uX2NpdHlfbmFtZSAhPSB0aGlzLm9wLmludGVudGlvbl9jaXR5X25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc19hZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTGlzdCA9IHB1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0U3RhdHVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfZmlsdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvRGV0YWlsKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLmlzX3NlcnZlciB8fCB0aGlzLnVzZXIuaXNfc2VydmVyX29mZmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2VydmVyL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXNlci5pc19zYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkICsgJyZpc19zZWFyY2g9eWVzJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhhdC5wYXJhbXMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhhdC5pc19zZWFyY2ggPSB0aGF0LnBhcmFtcy5pc19zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlIYXZlSXRlbShsaXN0LCBpdCkge1xuICAgICAgICAgICAgbGV0IGhhcyA9IGZhbHNlO1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT0gaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghaXQpIHtcbiAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhcztcbiAgICAgICAgfVxuICAgICAgICBwcmVwYXJlQWRpdGlvbihsaXN0KSB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5jaGFubmVsX2FyciwgZWxlbWVudC5jaGFubmVsX25hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbF9hcnIucHVzaChlbGVtZW50LmNoYW5uZWxfbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJheUhhdmVJdGVtKHRoaXMuaW50ZW50aW9uX2FyciwgZWxlbWVudC5pbnRlbnRpb25fbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRpb25fYXJyLnB1c2goZWxlbWVudC5pbnRlbnRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJheUhhdmVJdGVtKHRoaXMuc2FsZXNfYXJyLCBlbGVtZW50LnNhbGVzX25hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2FsZXNfYXJyLnB1c2goZWxlbWVudC5zYWxlc19uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5pbnRlbnRpb25fY2l0eV9hcnIsIGVsZW1lbnQuaW50ZW50aW9uX2NpdHlfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRpb25fY2l0eV9hcnIucHVzaChlbGVtZW50LmludGVudGlvbl9jaXR5X25hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYXBpX25hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB1c2VyLmlzX3NlcnZlciB8fCB1c2VyLmlzX3NlcnZlcl9vZmZsaW5lID8gYXBpX25hbWUgPSAnZ2V0U2VydmVyRGF0YVN0YXRpc3RpY3NEZXRhaWwnIDogJyc7XG4gICAgICAgICAgICAgICAgdXNlci5pc19zYWxlID8gYXBpX25hbWUgPSAnZ2V0RGF0YVN0YXRpc3RpY3NEZXRhaWwnIDogJyc7XG4gICAgICAgICAgICAgICAgdXNlci5pc19zY2hlbWUgPyBhcGlfbmFtZSA9ICdnZXRJbXBsZW1lbnRPcmRlclN0YXRpc3RpY3MnIDogJyc7XG4gICAgICAgICAgICAgICAgdXNlci5pc19leGN1dGUgPyBhcGlfbmFtZSA9ICdnZXRPcGVyYXRpb25Vc2VycycgOiAnJztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5pc19zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLmlzX3NjaGVtZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5X2RhdGVfc3RhcnQ6IHRoYXQucGFyYW1zLnBheV9kYXRlX3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5X2RhdGVfZW5kOiB0aGF0LnBhcmFtcy5wYXlfZGF0ZV9lbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kYXRlX3N0YXJ0OiB0aGF0LnBhcmFtcy5vcmRlcl9kYXRlX3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfZGF0ZV9lbmQ6IHRoYXQucGFyYW1zLm9yZGVyX2RhdGVfZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YV90eXBlOiB0aGF0LnBhcmFtcy5kYXRhX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnBhcmFtcy5tYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiB0aGF0LnBhcmFtcy5tYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGF0LnBhcmFtcy51c2VyX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiB0aGF0LnBhcmFtcy5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZF9kYXRlOiB0aGF0LnBhcmFtcy5lbmRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9pZHM6IHRoYXQucGFyYW1zLmVtcGxveWVlX2lkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1czogdGhhdC5wYXJhbXMudXNlcl9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHRoYXQucGFyYW1zLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IHRoYXQucGFyYW1zLmVuZF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfaWQ6IHRoYXQucGFyYW1zLmNoYW5uZWxfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2lkOiB0aGF0LnBhcmFtcy5pbnRlbnRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfaWRzOiB0aGF0LnBhcmFtcy5lbXBsb3llZV9pZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZW50aW9uX2NpdHk6IHRoYXQucGFyYW1zLmludGVudGlvbl9jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FjaGlldmVtZW50OiB0aGF0LnBhcmFtcy5pc19hY2hpZXZlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoYXQub3Auc3RhcnRfZGF0ZSA9IHRoYXQucGFyYW1zLnN0YXJ0X2RhdGU7XG4gICAgICAgICAgICAgICAgdGhhdC5vcC5lbmRfZGF0ZSA9IHRoYXQucGFyYW1zLmVuZF9kYXRlO1xuICAgICAgICAgICAgICAgIHJxLmdldChhcGlfbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5pc19zY2hlbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJMaXN0ID0gdGhhdC5zb3VyY2VMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YV9saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJMaXN0ID0gdGhhdC5zb3VyY2VMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucHJlcGFyZUFkaXRpb24odGhhdC5zb3VyY2VMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19