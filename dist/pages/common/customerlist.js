'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


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
            console.log(that.is_search);
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/customerlist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVybGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc2JhY2siLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzX2hpZGUiLCJ1c2VyTGlzdCIsInVzZXIiLCJ1c2VyX2FjdCIsInNvdXJjZUxpc3QiLCJwYXJhbXMiLCJpc19maWx0ZXIiLCJjaGFubmVsX2FyciIsImludGVudGlvbl9hcnIiLCJzYWxlc19hcnIiLCJpbnRlbnRpb25fY2l0eV9hcnIiLCJvcCIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIm9yZGVyX2lkIiwiY2hhbm5lbF9uYW1lIiwiaW50ZW50aW9uX25hbWUiLCJzYWxlc19uYW1lIiwib3JkZXJfaWRfc3RyIiwidXNlcl9tb2JpbGUiLCJ3ZWNoYXRfaWQiLCJpbnRlbnRpb25fY2l0eV9uYW1lIiwiaXNfc2VhcmNoIiwic2hvd19zZWFyY2giLCJtZXRob2RzIiwic2hvd1NlYXJjaEJveCIsInNlYXJjaE5vdyIsInRoYXQiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsImJpbmRDaXR5Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0T3JkZXJJZFN0ciIsImJpbmRJbnB1dE1vYmlsZSIsImJpbmRJbnB1dHdlY2hhdCIsImJpbmRTdGFydENoYW5nZSIsImJpbmRFbmRDaGFuZ2UiLCJiaW5kSW5wdXRPcmRlcklkIiwiYmluZFNhbGVzQ2hhbmdlIiwiYmluZEludGVudGlvbkNoYW5nZSIsImJpbmRDaGFubmVsQ2hhbmdlIiwic2VhcmNoIiwicHVyIiwiZm9yRWFjaCIsImlzX2FkZCIsInNfb3JkZXJfaWQiLCJpc19zY2hlbWUiLCJlbGVtZW50Iiwid2VkZGluZ19kYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJjcmVhdGVfdGltZSIsImluZGV4T2YiLCJwdXNoIiwiZWRpdFN0YXR1cyIsImdvVG9EZXRhaWwiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaXNfc2FsZSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIml0IiwiaGFzIiwiZWwiLCJhcnJheUhhdmVJdGVtIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZWRpcmVjdFRvIiwiYXBpX25hbWUiLCJpc19leGN1dGUiLCJwYXlfZGF0ZV9zdGFydCIsInBheV9kYXRlX2VuZCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImRhdGFfdHlwZSIsIm1hcCIsInVzZXJfc3RhdHVzIiwiZW1wbG95ZWVfaWRzIiwiY2hhbm5lbF9pZCIsImludGVudGlvbl9pZCIsImludGVudGlvbl9jaXR5IiwiaXNfYWNoaWV2ZW1lbnQiLCJkYXRhX2xpc3QiLCJwcmVwYXJlQWRpdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyxvQkFBUSxJQURMO0FBRUhDLHVCQUFXLElBRlI7QUFHSEMsbUJBQU8sSUFISjtBQUlIQyxxQkFBUyxJQUpOO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsa0JB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TUgscUJBUE0sTUFPQTtBQUNIbEcsK0JBQU87QUFDSGdCLHdDQUFZZSxLQUFLdEIsTUFBTCxDQUFZTyxVQURyQjtBQUVIQyxzQ0FBVWMsS0FBS3RCLE1BQUwsQ0FBWVEsUUFGbkI7QUFHSG1GLHdDQUFZckUsS0FBS3RCLE1BQUwsQ0FBWTJGLFVBSHJCO0FBSUhDLDBDQUFjdEUsS0FBS3RCLE1BQUwsQ0FBWTRGLFlBSnZCO0FBS0hGLDBDQUFjcEUsS0FBS3RCLE1BQUwsQ0FBWTBGLFlBTHZCO0FBTUhHLDRDQUFnQnZFLEtBQUt0QixNQUFMLENBQVk2RixjQU56QjtBQU9IQyw0Q0FBZ0J4RSxLQUFLdEIsTUFBTCxDQUFZOEY7QUFQekIseUJBQVA7QUFTSDtBQUNKO0FBQ0R4RSxxQkFBS2hCLEVBQUwsQ0FBUUMsVUFBUixHQUFxQmUsS0FBS3RCLE1BQUwsQ0FBWU8sVUFBakM7QUFDQWUscUJBQUtoQixFQUFMLENBQVFFLFFBQVIsR0FBbUJjLEtBQUt0QixNQUFMLENBQVlRLFFBQS9CO0FBQ0FxQixrQ0FBR0MsR0FBSCxDQUFPbUQsUUFBUCxFQUFpQjtBQUNiLHlCQUFLLG1CQUFVO0FBQ1gsNEJBQUlwRixLQUFLc0QsU0FBVCxFQUFvQjtBQUNoQjdCLGlDQUFLMUIsUUFBTCxHQUFnQjBCLEtBQUt2QixVQUFMLEdBQWtCZ0MsT0FBT3hDLElBQVAsQ0FBWXdHLFNBQTlDO0FBQ0gseUJBRkQsTUFFTztBQUNIekUsaUNBQUsxQixRQUFMLEdBQWdCMEIsS0FBS3ZCLFVBQUwsR0FBa0JnQyxPQUFPeEMsSUFBUCxDQUFZQSxJQUE5QztBQUNIO0FBQ0QrQiw2QkFBSzBFLGNBQUwsQ0FBb0IxRSxLQUFLdkIsVUFBekI7QUFDQXVCLDZCQUFLVSxNQUFMO0FBQ0g7QUFUWSxpQkFBakIsRUFVR3pDLElBVkg7QUFXSDtBQUNKOzs7O0VBdlA4QmdDLGVBQUswRSxJOztrQkFBbkJqSCxLIiwiZmlsZSI6ImN1c3RvbWVybGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+Wuoui1hCcsXG4gICAgICAgICAgICBpc19oaWRlOiB0cnVlLFxuICAgICAgICAgICAgdXNlckxpc3Q6IG51bGwsXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgdXNlcl9hY3Q6IDAsIC8vMCDlrqLmnI0gMemUgOWUriDnrZbliJJcbiAgICAgICAgICAgIHNvdXJjZUxpc3Q6IFtdLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIGlzX2ZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICBjaGFubmVsX2FycjogW10sXG4gICAgICAgICAgICBpbnRlbnRpb25fYXJyOiBbXSxcbiAgICAgICAgICAgIHNhbGVzX2FycjogW10sXG4gICAgICAgICAgICBpbnRlbnRpb25fY2l0eV9hcnI6IFtdLFxuICAgICAgICAgICAgb3A6IHtcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiAnJyxcbiAgICAgICAgICAgICAgICBlbmRfZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNoYW5uZWxfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHNhbGVzX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIG9yZGVyX2lkX3N0cjogJycsXG4gICAgICAgICAgICAgICAgdXNlcl9tb2JpbGU6ICcnLFxuICAgICAgICAgICAgICAgIHdlY2hhdF9pZDogJycsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uX2NpdHlfbmFtZTogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc19zZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19zZWFyY2g6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNob3dTZWFyY2hCb3goKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3NlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoTm93KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoIXRoYXQub3Aub3JkZXJfaWRfc3RyICYmICF0aGF0Lm9wLnVzZXJfbW9iaWxlICYmICF0aGF0Lm9wLndlY2hhdF9pZCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeiHs+WwkeS4gOmhuScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJxLmdldCgnc2VhcmNoQWxsVXNlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93X3NlYXJjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdCA9IHRoYXQuc291cmNlTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZF9zdHI6IHRoYXQub3Aub3JkZXJfaWRfc3RyLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogdGhhdC5vcC51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgd2VjaGF0X2lkOiB0aGF0Lm9wLndlY2hhdF9pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENpdHlDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3AuaW50ZW50aW9uX2NpdHlfbmFtZSA9IHRoaXMuaW50ZW50aW9uX2NpdHlfYXJyW2UuZGV0YWlsLnZhbHVlXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPcmRlcklkU3RyKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLm9yZGVyX2lkX3N0ciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dHdlY2hhdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kU3RhcnRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3Auc3RhcnRfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRFbmRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3AuZW5kX2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPcmRlcklkKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLm9yZGVyX2lkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFNhbGVzQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wLnNhbGVzX25hbWUgPSB0aGlzLnNhbGVzX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEludGVudGlvbkNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcC5pbnRlbnRpb25fbmFtZSA9IHRoaXMuaW50ZW50aW9uX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZENoYW5uZWxDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3AuY2hhbm5lbF9uYW1lID0gdGhpcy5jaGFubmVsX2FycltlLmRldGFpbC52YWx1ZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfZmlsdGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNfYWRkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNfb3JkZXJfaWQgPSB0aGlzLm9wLm9yZGVyX2lkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLmlzX3NjaGVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LndlZGRpbmdfZGF0ZSB8fCBuZXcgRGF0ZShlbGVtZW50LndlZGRpbmdfZGF0ZSkuZ2V0VGltZSgpIDwgbmV3IERhdGUodGhpcy5vcC5zdGFydF9kYXRlKS5nZXRUaW1lKCkgfHwgbmV3IERhdGUoZWxlbWVudC53ZWRkaW5nX2RhdGUpLmdldFRpbWUoKSA+IG5ldyBEYXRlKHRoaXMub3AuZW5kX2RhdGUpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jcmVhdGVfdGltZSB8fCBlbGVtZW50LmNyZWF0ZV90aW1lIDwgbmV3IERhdGUodGhpcy5vcC5zdGFydF9kYXRlKS5nZXRUaW1lKCkgLyAxMDAwIHx8IGVsZW1lbnQuY3JlYXRlX3RpbWUgPiBuZXcgRGF0ZSh0aGlzLm9wLmVuZF9kYXRlKS5nZXRUaW1lKCkgLyAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzX29yZGVyX2lkICYmIGVsZW1lbnQub3JkZXJfaWQuaW5kZXhPZihzX29yZGVyX2lkKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wLmNoYW5uZWxfbmFtZSAmJiBlbGVtZW50LmNoYW5uZWxfbmFtZSAhPSB0aGlzLm9wLmNoYW5uZWxfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3AuaW50ZW50aW9uX25hbWUgJiYgZWxlbWVudC5pbnRlbnRpb25fbmFtZSAhPSB0aGlzLm9wLmludGVudGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcC5zYWxlc19uYW1lICYmIGVsZW1lbnQuc2FsZXNfbmFtZSAhPSB0aGlzLm9wLnNhbGVzX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wLmludGVudGlvbl9jaXR5X25hbWUgJiYgZWxlbWVudC5pbnRlbnRpb25fY2l0eV9uYW1lICE9IHRoaXMub3AuaW50ZW50aW9uX2NpdHlfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzX2FkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMaXN0ID0gcHVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRTdGF0dXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc19maWx0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9EZXRhaWwoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuaXNfc2VydmVyIHx8IHRoaXMudXNlci5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VyLmlzX3NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9jdXN0b21lcj9pZD0nICsgaWQgKyAnJmlzX3NlYXJjaD15ZXMnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGF0LnBhcmFtcyA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGF0LmlzX3NlYXJjaCA9IHRoYXQucGFyYW1zLmlzX3NlYXJjaDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuaXNfc2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheUhhdmVJdGVtKGxpc3QsIGl0KSB7XG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PSBpdCkge1xuICAgICAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFpdCkge1xuICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzO1xuICAgICAgICB9XG4gICAgICAgIHByZXBhcmVBZGl0aW9uKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyYXlIYXZlSXRlbSh0aGlzLmNoYW5uZWxfYXJyLCBlbGVtZW50LmNoYW5uZWxfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsX2Fyci5wdXNoKGVsZW1lbnQuY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5pbnRlbnRpb25fYXJyLCBlbGVtZW50LmludGVudGlvbl9uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVudGlvbl9hcnIucHVzaChlbGVtZW50LmludGVudGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5zYWxlc19hcnIsIGVsZW1lbnQuc2FsZXNfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYWxlc19hcnIucHVzaChlbGVtZW50LnNhbGVzX25hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyYXlIYXZlSXRlbSh0aGlzLmludGVudGlvbl9jaXR5X2FyciwgZWxlbWVudC5pbnRlbnRpb25fY2l0eV9uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVudGlvbl9jaXR5X2Fyci5wdXNoKGVsZW1lbnQuaW50ZW50aW9uX2NpdHlfbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhcGlfbmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIHVzZXIuaXNfc2VydmVyIHx8IHVzZXIuaXNfc2VydmVyX29mZmxpbmUgPyBhcGlfbmFtZSA9ICdnZXRTZXJ2ZXJEYXRhU3RhdGlzdGljc0RldGFpbCcgOiAnJztcbiAgICAgICAgICAgICAgICB1c2VyLmlzX3NhbGUgPyBhcGlfbmFtZSA9ICdnZXREYXRhU3RhdGlzdGljc0RldGFpbCcgOiAnJztcbiAgICAgICAgICAgICAgICB1c2VyLmlzX3NjaGVtZSA/IGFwaV9uYW1lID0gJ2dldEltcGxlbWVudE9yZGVyU3RhdGlzdGljcycgOiAnJztcbiAgICAgICAgICAgICAgICB1c2VyLmlzX2V4Y3V0ZSA/IGFwaV9uYW1lID0gJ2dldE9wZXJhdGlvblVzZXJzJyA6ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmlzX3NlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuaXNfc2NoZW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlfZGF0ZV9zdGFydDogdGhhdC5wYXJhbXMucGF5X2RhdGVfc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlfZGF0ZV9lbmQ6IHRoYXQucGFyYW1zLnBheV9kYXRlX2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2RhdGVfc3RhcnQ6IHRoYXQucGFyYW1zLm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9kYXRlX2VuZDogdGhhdC5wYXJhbXMub3JkZXJfZGF0ZV9lbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhX3R5cGU6IHRoYXQucGFyYW1zLmRhdGFfdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQucGFyYW1zLm1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHRoYXQucGFyYW1zLm1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQucGFyYW1zLnVzZXJfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHRoYXQucGFyYW1zLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IHRoYXQucGFyYW1zLmVuZF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlX2lkczogdGhhdC5wYXJhbXMuZW1wbG95ZWVfaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzOiB0aGF0LnBhcmFtcy51c2VyX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogdGhhdC5wYXJhbXMuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogdGhhdC5wYXJhbXMuZW5kX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9pZDogdGhhdC5wYXJhbXMuY2hhbm5lbF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IHRoYXQucGFyYW1zLmludGVudGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZV9pZHM6IHRoYXQucGFyYW1zLmVtcGxveWVlX2lkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25fY2l0eTogdGhhdC5wYXJhbXMuaW50ZW50aW9uX2NpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWNoaWV2ZW1lbnQ6IHRoYXQucGFyYW1zLmlzX2FjaGlldmVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhhdC5vcC5zdGFydF9kYXRlID0gdGhhdC5wYXJhbXMuc3RhcnRfZGF0ZTtcbiAgICAgICAgICAgICAgICB0aGF0Lm9wLmVuZF9kYXRlID0gdGhhdC5wYXJhbXMuZW5kX2RhdGU7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KGFwaV9uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLmlzX3NjaGVtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3QgPSB0aGF0LnNvdXJjZUxpc3QgPSByZXN1bHQuZGF0YS5kYXRhX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckxpc3QgPSB0aGF0LnNvdXJjZUxpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wcmVwYXJlQWRpdGlvbih0aGF0LnNvdXJjZUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=