'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

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
            title: '客户详情',
            isback: true,
            order_info: null,
            implement_info: null,
            status_arr_index: 0,
            tab_index: 0,
            id: -1,
            edit_base: false,
            edit_server: false,
            has_order: 0,
            user: null,
            show_pay_pro: false,
            team_members: null,
            employee_number_index: 0,
            other_service_range: ['服务类', '布置类'],
            //['人员类', '工程类', '租赁类', '采购类'],
            // ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']
            other_service_person: ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出'],
            other_service_project: ['制作类-广告制作', '鲜花', '花艺师', '搭建-户外音响', '灯光', '摇臂'],
            other_service_lease: ['礼服', '婚车', '大巴', '婚房', '车头花', '手捧花'],
            other_service_purchase: ['甜品', '喜糖', '伴手礼', '气球', '西装', '烟火', '停车券', '快递费', '请帖'],
            other_service_muiti_index: [0, 0],
            other_service_total_price: 0,
            plan_other_server_total: 0,
            q_table_female: '',
            female_true: 1,
            q_table_male: '',
            male_true: 1,
            order_second_status_arr: ['正常', '延期单', '僵尸单', '异常单'],
            checked_data: false,
            hotel_list: [],
            server_t_price: 0
        }, _this.methods = {
            bingSecondStatusChnage: function bingSecondStatusChnage(e) {
                var that = this;
                var index = e.detail.value;
                var startu = parseInt(index) + 1;
                _request2.default.get('editOrderSecondStatus', {
                    200: function _(res) {
                        that.implement_info.order_second_status_text = that.order_second_status_arr[index];
                        that.$apply();
                    }
                }, {
                    order_second_status: startu,
                    order_id: that.order_info.base_info.order_id
                });
            },
            finishedWeeding: function finishedWeeding() {
                var that = this;
                _request2.default.get('confirmWeddingFinish', {
                    200: function _(res) {
                        that.implement_info.order_status = 6;
                        that.$apply();
                    }
                }, {
                    order_id: that.order_info.base_info.order_id
                });
            },
            changeTheFourStatus: function changeTheFourStatus(e) {
                var index = e.currentTarget.dataset.index;
            },
            changeTheStatus: function changeTheStatus(e) {
                var that = this;
                var index = e.currentTarget.dataset.index;
                var pindex = e.currentTarget.dataset.pindex;
                var id = that.implement_info.plan_process[pindex].children[index].id;
                var children = that.implement_info.plan_process[pindex].children[index].children;
                if (that.implement_info.plan_process[pindex].children[index].status != 0) {
                    return false;
                }
                var completed = true;
                children.forEach(function (element) {
                    if (element.is_finish != 1) {
                        completed = false;
                    }
                });
                if (!completed) {
                    _wepy2.default.showToast({
                        title: '请先确认子任务完成状态', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                _request2.default.get('applyPassProcess', {
                    200: function _(res) {
                        that.planImplementInfo();
                    },
                    201: function _(res) {}
                }, {
                    parent_id: id,
                    order_id: that.order_info.base_info.order_id
                });
            },
            toggleFourGroup: function toggleFourGroup(e) {
                var index = e.currentTarget.dataset.index;
                if (this.implement_info.four_cate[index].show) {
                    this.implement_info.four_cate[index].show = false;
                } else {
                    this.implement_info.four_cate[index]['show'] = true;
                }
            },
            toggleGroup: function toggleGroup(e) {
                var index = e.currentTarget.dataset.index;
                var pindex = e.currentTarget.dataset.pindex;
                if (this.implement_info.plan_process[pindex].children[index].show) {
                    this.implement_info.plan_process[pindex].children[index].show = false;
                } else {
                    this.implement_info.plan_process[pindex].children[index]['show'] = true;
                }
            },
            bingHotelStatusChnage: function bingHotelStatusChnage(e) {
                var that = this;
                var it = that.implement_info.hotel_wedding_status_arr[e.detail.value];
                _request2.default.get('changeHotelWeddingStatus', {
                    200: function _(result) {
                        that.implement_info.hotel_wedding_status_text = it.name;
                        that.$apply();
                    }
                }, {
                    order_id: that.order_info.base_info.order_id,
                    hotel_wedding_status: it.id
                });
            },
            goToPayLogCheck: function goToPayLogCheck(e) {
                var id = e.currentTarget.dataset.id;
                var name = e.currentTarget.dataset.name;
                var is_deposit = e.currentTarget.dataset.deposit;
                if (is_deposit == 1) {
                    _wepy2.default.navigateTo({
                        url: '/pages/common/sale/prepay?order_deposit_id=' + id
                    });
                } else {
                    _wepy2.default.navigateTo({
                        url: '/pages/common/sale/orderpay?order_deposit_id=' + id
                    });
                }
            },
            togglePayPro: function togglePayPro() {
                this.show_pay_pro = !this.show_pay_pro;
                this.show_server_info = false;
                this.show_base_info = false;
                this.display_weeding_schedule = false;
            },
            goToRequestPay: function goToRequestPay() {
                _wepy2.default.navigateTo({
                    url: '/pages/marry/scheme/reqpaylist?order_id=' + this.order_info.base_info.order_id
                });
            },
            copyBrideLink: function copyBrideLink() {
                this.copyText(this.q_table_male);
            },
            copyGroomLink: function copyGroomLink() {
                this.copyText(this.q_table_female);
            },
            goToBrideSurveyTable: function goToBrideSurveyTable() {
                _wepy2.default.navigateTo({
                    url: '/pages/marry/scheme/web?order_id_str=' + this.order_info.base_info.order_id_str + '&type=2'
                });
            },
            goToGroomSurveyTable: function goToGroomSurveyTable() {
                _wepy2.default.navigateTo({
                    url: '/pages/marry/scheme/web?order_id_str=' + this.order_info.base_info.order_id_str + '&type=1'
                });
            },
            navigateToRefundPage: function navigateToRefundPage() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/refund?order_id=' + this.order_info.base_info.order_id
                });
            },
            goToPayLog: function goToPayLog() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/orderpay?order_id=' + this.order_info.base_info.order_id + '&deposit_status=1'
                });
            },
            bindOtherServiceColumnChange: function bindOtherServiceColumnChange(e) {
                if (e.detail.column == 0) {
                    if (e.detail.value == 0) {
                        this.other_service_range[1] = this.other_service_person;
                    } else if (e.detail.value == 1) {
                        this.other_service_range[1] = this.other_service_project;
                    } else if (e.detail.value == 2) {
                        this.other_service_range[1] = this.other_service_lease;
                    } else if (e.detail.value == 3) {
                        this.other_service_range[1] = this.other_service_purchase;
                    }
                }
            },
            bindOtherServiceTypeChange: function bindOtherServiceTypeChange(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].subject_type = this.other_service_range[e.detail.value];
                // let values = [];
                // e.detail.value.forEach(element => {
                //     if (!element) {
                //         values.push(0)
                //     } else {
                //         values.push(element);
                //     }
                // });
                // this.implement_info.plan_other_server[index].subject_type = this.other_service_range[0][values[0]] + '-' + this.other_service_range[1][values[1]];
            },
            submit: function submit() {
                var that = this;
                _request2.default.get('distributionPlanner', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    user_id: that.id,
                    order_id: that.order_info.base_info.order_id,
                    planner_id: that.team_members[that.employee_number_index].id
                });
            },
            bindEmployeeChange: function bindEmployeeChange(e) {
                this.employee_number_index = e.detail.value;
            },
            goToContract: function goToContract() {
                _wepy2.default.navigateTo({
                    url: '../sale/contract?id=' + this.id
                });
            },
            goToTaste: function goToTaste() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/taste?id=' + this.order_info.base_info.order_id + '&user_id=' + this.id
                });
            },
            bindInputNeedCount: function bindInputNeedCount(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].need_count = e.detail.value;
            },
            bindInputSubjectPrice: function bindInputSubjectPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].subject_price = e.detail.value;
            },
            bindInputSubjectType: function bindInputSubjectType(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].subject_type = e.detail.value;
            },
            bindInputOtherTitle: function bindInputOtherTitle(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].title = e.detail.value;
            },
            updateOtherServer: function updateOtherServer() {
                var that = this;
                _request2.default.get('updateOtherServer', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '保存成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.edit_server = false;
                        that.$apply();
                    }
                }, {
                    order_id: that.order_info.base_info.order_id,
                    plan_other_server: JSON.stringify(that.implement_info.plan_other_server)
                });
            },
            deleteOtherServer: function deleteOtherServer(e) {
                var index = e.currentTarget.dataset.index;
                var pur = [];
                var i = 0;
                this.implement_info.plan_other_server.forEach(function (element) {
                    if (i != index) {
                        pur.push(element);
                    }
                    i++;
                });
                this.implement_info.plan_other_server = pur;
            },
            addOtherServer: function addOtherServer() {
                if (!this.implement_info.plan_other_server) {
                    this.implement_info.plan_other_server = [];
                }
                this.implement_info.plan_other_server.push({
                    need_count: '',
                    subject_price: '',
                    subject_type: '',
                    title: ''
                });
            },
            bindInputWeddingDate: function bindInputWeddingDate(e) {
                this.order_info.base_info.wedding_date = e.detail.value;
            },
            bindWeedingAddressChange: function bindWeedingAddressChange(e) {
                this.order_info.base_info.wedding_address = e.detail.value;
            },
            bindInputTableCount: function bindInputTableCount(e) {
                this.order_info.base_info.wedding_table_count = e.detail.value;
            },
            editBaseToggle: function editBaseToggle() {
                var that = this;
                var item = that.order_info.base_info;
                if (that.edit_base) {
                    _request2.default.get('updateBaseInfo', {
                        200: function _(result) {
                            that.edit_base = false;
                            _wepy2.default.showToast({
                                title: '保存成功', //提示的内容,
                                icon: 'none', //图标,
                                duration: 2000, //延迟时间,
                                mask: true, //显示透明蒙层，防止触摸穿透,
                                success: function success(res) {}
                            });
                            that.$apply();
                        }
                    }, {
                        order_id: that.order_info.base_info.order_id,
                        main_contract: item.main_contract,
                        user_name: item.user_name,
                        user_mobile: item.user_mobile,
                        groom_name: item.groom_name,
                        groom_mobile: item.groom_mobile,
                        groom_wechat: item.groom_wechat,
                        bride_name: item.bride_name,
                        bride_mobile: item.bride_mobile,
                        bride_wechat: item.bride_wechat,
                        // schedule_type: item.schedule_type,
                        wedding_date: item.wedding_date,
                        wedding_address: item.wedding_address,
                        // wedding_session: item.wedding_session,
                        wedding_table_count: item.wedding_table_count,
                        first_impression: item.first_impression,
                        family_background: item.family_background,
                        wedding_needs: item.wedding_needs,
                        // schedule_end_time: item.schedule_end_time,
                        order_remark: item.order_remark,
                        intention_id: item.intention_id,
                        user_id: item.user_id,
                        sign_date: item.sign_date,
                        sub_company_id: item.sub_company_id
                    });
                } else {
                    that.edit_base = true;
                }
            },
            goToTask: function goToTask() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/task?id=' + this.order_info.base_info.order_id + '&order_id_str=' + this.order_info.base_info.order_id_str
                });
            },
            editOtherServer: function editOtherServer() {
                this.edit_server = !this.edit_server;
            },
            toggleTab: function toggleTab(e) {
                this.tab_index = e.currentTarget.dataset.index;
                if (this.tab_index == 1) {
                    this.planImplementInfo();
                } else if (this.tab_index == 0) {
                    this.getOnePlanOrderInfo();
                }
            },
            modalBindaconfirm: function modalBindaconfirm() {
                var that = this;
                var pindex = that.checked_data.pindex;
                var index = that.checked_data.index;
                var sindex = that.checked_data.sindex;
                if (!that.checked_data.is_four) {
                    _request2.default.get('confirmProcess', {
                        200: function _(result) {
                            that.implement_info.plan_process[pindex].children[index].children[sindex].is_finish = 1;
                            that.checked_data = false;
                            that.$apply();
                        }
                    }, {
                        plan_process_id: that.checked_data.value_key
                    });
                } else {
                    _request2.default.get('finishProcessFourcate', {
                        200: function _(result) {
                            that.implement_info.four_cate[index].children[sindex].is_finish = 1;
                            that.checked_data = false;
                            that.$apply();
                        }
                    }, {
                        process_id: that.checked_data.value_key,
                        order_id: that.order_info.base_info.order_id
                    });
                }
            },
            modalBindcancel: function modalBindcancel() {
                this.checked_data = false;
            },
            checkedFourChange: function checkedFourChange(e) {
                var that = this;
                var value_key = e.currentTarget.dataset.key;
                var index = e.currentTarget.dataset.index;
                var sindex = e.currentTarget.dataset.sindex;
                that.checked_data = {
                    // value: value,
                    value_key: value_key,
                    index: index,
                    sindex: sindex,
                    is_four: true
                };
            },
            checkedChange: function checkedChange(e) {
                var that = this;
                // let value = e.detail.value[0];
                var value_key = e.currentTarget.dataset.key;
                var index = e.currentTarget.dataset.index;
                var pindex = e.currentTarget.dataset.pindex;
                var sindex = e.currentTarget.dataset.sindex;
                that.checked_data = {
                    // value: value,
                    value_key: value_key,
                    index: index,
                    pindex: pindex,
                    sindex: sindex
                };
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'planImplementInfo',
        value: function planImplementInfo() {
            var that = this;
            _request2.default.get('planImplementInfo', {
                200: function _(result) {
                    that.implement_info = result.data.data;
                    if (that.implement_info.plan_other_server == '-' || !that.implement_info.plan_other_server) {
                        that.implement_info.plan_other_server = [];
                    }
                    that.implement_info.plan_process.forEach(function (element) {
                        if (element.is_confirm == '-') {
                            element.is_confirm = 0;
                        }
                    });
                    var count_pri = 0;
                    if (that.implement_info.plan_other_server) {
                        that.implement_info.plan_other_server.forEach(function (element) {
                            count_pri += parseInt(element.subject_price) * parseInt(element.need_count);
                        });
                    }
                    that.server_t_price = count_pri;
                    that.$apply();
                }
            }, {
                order_id: that.order_info.base_info.order_id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            this.user = _wepy2.default.getStorageSync('user');
            if (this.user.is_scheme_leader) {
                _request2.default.get('getLoginerTeamEmployee', {
                    200: function _(result) {
                        that.team_members = result.data.employee_list;
                        that.$apply();
                    }
                }, {});
            }
            that.id = options.id;
            _request2.default.get('getOnePlanOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.hotel_list = result.data.hotel_list;
                    if (that.order_info.plan_other_server == '-' || !that.order_info.plan_other_server) {
                        that.order_info.plan_other_server = [];
                    }
                    var count = 0;
                    that.order_info.plan_other_server.forEach(function (element) {
                        count += element.need_count * element.subject_price;
                    });
                    that.plan_other_server_total = count;
                    _request2.default.get('questionTable', {
                        200: function _(result) {
                            that.q_table_female = result.data.female;
                            that.female_true = result.data.female_true;
                            that.q_table_male = result.data.male;
                            that.male_true = result.data.male_true;
                            that.$apply();
                        }
                    }, {
                        order_id_str: that.order_info.base_info.order_id_str
                    });
                    that.$apply();
                    that.planImplementInfo();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'copyText',
        value: function copyText(text) {
            var that = this;
            wx.setClipboardData({
                data: text,
                success: function success(res) {
                    wx.getClipboardData({
                        success: function success(res) {
                            _wepy2.default.showToast({
                                title: '链接复制成功', //提示的内容,
                                icon: 'none', //图标,
                                duration: 2000, //延迟时间,
                                mask: true, //显示透明蒙层，防止触摸穿透,
                                success: function success(res) {}
                            });
                            that.$apply();
                        }
                    });
                }
            });
        }
    }, {
        key: 'getOnePlanOrderInfo',
        value: function getOnePlanOrderInfo() {
            var that = this;
            _request2.default.get('getOnePlanOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.hotel_list = result.data.hotel_list;
                    if (that.order_info.plan_other_server == '-' || !that.order_info.plan_other_server) {
                        that.order_info.plan_other_server = [];
                    }
                    var count = 0;
                    that.order_info.plan_other_server.forEach(function (element) {
                        count += element.need_count * element.subject_price;
                    });
                    that.$apply();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/scheme/customer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImltcGxlbWVudF9pbmZvIiwic3RhdHVzX2Fycl9pbmRleCIsInRhYl9pbmRleCIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJoYXNfb3JkZXIiLCJ1c2VyIiwic2hvd19wYXlfcHJvIiwidGVhbV9tZW1iZXJzIiwiZW1wbG95ZWVfbnVtYmVyX2luZGV4Iiwib3RoZXJfc2VydmljZV9yYW5nZSIsIm90aGVyX3NlcnZpY2VfcGVyc29uIiwib3RoZXJfc2VydmljZV9wcm9qZWN0Iiwib3RoZXJfc2VydmljZV9sZWFzZSIsIm90aGVyX3NlcnZpY2VfcHVyY2hhc2UiLCJvdGhlcl9zZXJ2aWNlX211aXRpX2luZGV4Iiwib3RoZXJfc2VydmljZV90b3RhbF9wcmljZSIsInBsYW5fb3RoZXJfc2VydmVyX3RvdGFsIiwicV90YWJsZV9mZW1hbGUiLCJmZW1hbGVfdHJ1ZSIsInFfdGFibGVfbWFsZSIsIm1hbGVfdHJ1ZSIsIm9yZGVyX3NlY29uZF9zdGF0dXNfYXJyIiwiY2hlY2tlZF9kYXRhIiwiaG90ZWxfbGlzdCIsInNlcnZlcl90X3ByaWNlIiwibWV0aG9kcyIsImJpbmdTZWNvbmRTdGF0dXNDaG5hZ2UiLCJlIiwidGhhdCIsImluZGV4IiwiZGV0YWlsIiwidmFsdWUiLCJzdGFydHUiLCJwYXJzZUludCIsInJxIiwiZ2V0Iiwib3JkZXJfc2Vjb25kX3N0YXR1c190ZXh0IiwiJGFwcGx5Iiwib3JkZXJfc2Vjb25kX3N0YXR1cyIsIm9yZGVyX2lkIiwiYmFzZV9pbmZvIiwiZmluaXNoZWRXZWVkaW5nIiwib3JkZXJfc3RhdHVzIiwiY2hhbmdlVGhlRm91clN0YXR1cyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlVGhlU3RhdHVzIiwicGluZGV4IiwicGxhbl9wcm9jZXNzIiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJjb21wbGV0ZWQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlzX2ZpbmlzaCIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsInBsYW5JbXBsZW1lbnRJbmZvIiwicGFyZW50X2lkIiwidG9nZ2xlRm91ckdyb3VwIiwiZm91cl9jYXRlIiwic2hvdyIsInRvZ2dsZUdyb3VwIiwiYmluZ0hvdGVsU3RhdHVzQ2huYWdlIiwiaXQiLCJob3RlbF93ZWRkaW5nX3N0YXR1c19hcnIiLCJob3RlbF93ZWRkaW5nX3N0YXR1c190ZXh0IiwibmFtZSIsImhvdGVsX3dlZGRpbmdfc3RhdHVzIiwiZ29Ub1BheUxvZ0NoZWNrIiwiaXNfZGVwb3NpdCIsImRlcG9zaXQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlUGF5UHJvIiwic2hvd19zZXJ2ZXJfaW5mbyIsInNob3dfYmFzZV9pbmZvIiwiZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlIiwiZ29Ub1JlcXVlc3RQYXkiLCJjb3B5QnJpZGVMaW5rIiwiY29weVRleHQiLCJjb3B5R3Jvb21MaW5rIiwiZ29Ub0JyaWRlU3VydmV5VGFibGUiLCJvcmRlcl9pZF9zdHIiLCJnb1RvR3Jvb21TdXJ2ZXlUYWJsZSIsIm5hdmlnYXRlVG9SZWZ1bmRQYWdlIiwiZ29Ub1BheUxvZyIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZSIsInBsYW5fb3RoZXJfc2VydmVyIiwic3ViamVjdF90eXBlIiwic3VibWl0IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ1c2VyX2lkIiwicGxhbm5lcl9pZCIsImJpbmRFbXBsb3llZUNoYW5nZSIsImdvVG9Db250cmFjdCIsImdvVG9UYXN0ZSIsImJpbmRJbnB1dE5lZWRDb3VudCIsIm5lZWRfY291bnQiLCJiaW5kSW5wdXRTdWJqZWN0UHJpY2UiLCJzdWJqZWN0X3ByaWNlIiwiYmluZElucHV0U3ViamVjdFR5cGUiLCJiaW5kSW5wdXRPdGhlclRpdGxlIiwidXBkYXRlT3RoZXJTZXJ2ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVsZXRlT3RoZXJTZXJ2ZXIiLCJwdXIiLCJpIiwicHVzaCIsImFkZE90aGVyU2VydmVyIiwiYmluZElucHV0V2VkZGluZ0RhdGUiLCJ3ZWRkaW5nX2RhdGUiLCJiaW5kV2VlZGluZ0FkZHJlc3NDaGFuZ2UiLCJ3ZWRkaW5nX2FkZHJlc3MiLCJiaW5kSW5wdXRUYWJsZUNvdW50Iiwid2VkZGluZ190YWJsZV9jb3VudCIsImVkaXRCYXNlVG9nZ2xlIiwiaXRlbSIsIm1haW5fY29udHJhY3QiLCJ1c2VyX25hbWUiLCJ1c2VyX21vYmlsZSIsImdyb29tX25hbWUiLCJncm9vbV9tb2JpbGUiLCJncm9vbV93ZWNoYXQiLCJicmlkZV9uYW1lIiwiYnJpZGVfbW9iaWxlIiwiYnJpZGVfd2VjaGF0IiwiZmlyc3RfaW1wcmVzc2lvbiIsImZhbWlseV9iYWNrZ3JvdW5kIiwid2VkZGluZ19uZWVkcyIsIm9yZGVyX3JlbWFyayIsImludGVudGlvbl9pZCIsInNpZ25fZGF0ZSIsInN1Yl9jb21wYW55X2lkIiwiZ29Ub1Rhc2siLCJlZGl0T3RoZXJTZXJ2ZXIiLCJ0b2dnbGVUYWIiLCJnZXRPbmVQbGFuT3JkZXJJbmZvIiwibW9kYWxCaW5kYWNvbmZpcm0iLCJzaW5kZXgiLCJpc19mb3VyIiwicGxhbl9wcm9jZXNzX2lkIiwidmFsdWVfa2V5IiwicHJvY2Vzc19pZCIsIm1vZGFsQmluZGNhbmNlbCIsImNoZWNrZWRGb3VyQ2hhbmdlIiwia2V5IiwiY2hlY2tlZENoYW5nZSIsInJlc3VsdCIsImlzX2NvbmZpcm0iLCJjb3VudF9wcmkiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zY2hlbWVfbGVhZGVyIiwiZW1wbG95ZWVfbGlzdCIsImNvdW50IiwiZmVtYWxlIiwibWFsZSIsInRleHQiLCJ3eCIsInNldENsaXBib2FyZERhdGEiLCJyZXMiLCJnZXRDbGlwYm9hcmREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyx3QkFBWSxJQUpUO0FBS0hDLDRCQUFnQixJQUxiO0FBTUhDLDhCQUFrQixDQU5mO0FBT0hDLHVCQUFXLENBUFI7QUFRSEMsZ0JBQUksQ0FBQyxDQVJGO0FBU0hDLHVCQUFXLEtBVFI7QUFVSEMseUJBQWEsS0FWVjtBQVdIQyx1QkFBVyxDQVhSO0FBWUhDLGtCQUFNLElBWkg7QUFhSEMsMEJBQWMsS0FiWDtBQWNIQywwQkFBYyxJQWRYO0FBZUhDLG1DQUF1QixDQWZwQjtBQWdCSEMsaUNBQXFCLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FoQmxCO0FBaUJIO0FBQ0E7QUFDQUMsa0NBQXNCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLEtBQTNDLEVBQWtELE9BQWxELEVBQTJELFVBQTNELEVBQXVFLE1BQXZFLENBbkJuQjtBQW9CSEMsbUNBQXVCLENB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QywwQ0FBVSxJQUhDLEVBR0s7QUFDaEJDLHNDQUFNLElBSkssRUFJQztBQUNaQyx5Q0FBUyxzQkFBTyxDQUFFO0FBTFAsNkJBQWY7QUFPQWhDLGlDQUFLUyxNQUFMO0FBQ0g7QUFWZSxxQkFBcEI7QUFZSDtBQWZlLGFBQXBCO0FBaUJIOzs7OENBQ3FCO0FBQ2xCLGdCQUFJVCxPQUFPLElBQVg7QUFDQU0sOEJBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQixxQkFBSyxtQkFBVTtBQUNYUCx5QkFBSy9CLFVBQUwsR0FBa0IrSixPQUFPbkssSUFBUCxDQUFZQSxJQUE5QjtBQUNBbUMseUJBQUtMLFVBQUwsR0FBa0JxSSxPQUFPbkssSUFBUCxDQUFZOEIsVUFBOUI7QUFDQSx3QkFBSUssS0FBSy9CLFVBQUwsQ0FBZ0JpRyxpQkFBaEIsSUFBcUMsR0FBckMsSUFBNEMsQ0FBQ2xFLEtBQUsvQixVQUFMLENBQWdCaUcsaUJBQWpFLEVBQW9GO0FBQ2hGbEUsNkJBQUsvQixVQUFMLENBQWdCaUcsaUJBQWhCLEdBQW9DLEVBQXBDO0FBQ0g7QUFDRCx3QkFBSXVFLFFBQVEsQ0FBWjtBQUNBekkseUJBQUsvQixVQUFMLENBQWdCaUcsaUJBQWhCLENBQWtDMUMsT0FBbEMsQ0FBMEMsbUJBQVc7QUFDakRpSCxpQ0FBU2hILFFBQVFvRCxVQUFSLEdBQXFCcEQsUUFBUXNELGFBQXRDO0FBQ0gscUJBRkQ7QUFHQS9FLHlCQUFLUyxNQUFMO0FBQ0g7QUFaeUIsYUFBOUIsRUFhRztBQUNDOEQseUJBQVN2RSxLQUFLM0I7QUFEZixhQWJIO0FBZ0JIOzs7aUNBQ1EsQ0FBRTs7OztFQTNoQm9Cc0QsZUFBS3NILEk7O2tCQUFuQjNMLEsiLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+WuouaIt+ivpuaDhScsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBvcmRlcl9pbmZvOiBudWxsLFxuICAgICAgICAgICAgaW1wbGVtZW50X2luZm86IG51bGwsXG4gICAgICAgICAgICBzdGF0dXNfYXJyX2luZGV4OiAwLFxuICAgICAgICAgICAgdGFiX2luZGV4OiAwLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgZWRpdF9iYXNlOiBmYWxzZSxcbiAgICAgICAgICAgIGVkaXRfc2VydmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc19vcmRlcjogMCxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICBzaG93X3BheV9wcm86IGZhbHNlLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzOiBudWxsLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyX2luZGV4OiAwLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9yYW5nZTogWyfmnI3liqHnsbsnLCAn5biD572u57G7J10sXG4gICAgICAgICAgICAvL1sn5Lq65ZGY57G7JywgJ+W3peeoi+exuycsICfnp5/otYHnsbsnLCAn6YeH6LSt57G7J10sXG4gICAgICAgICAgICAvLyBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXVxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9wZXJzb246IFsn5Y+45LuqJywgJ+WMluWmhicsICfmkYTlvbEnLCAn5pGE5YOPJywgJ+euoeWuticsICfmvJTlh7onLCAn5LmQ6ZifJywgJ+Wwj+aPkOeQtCcsICdESi9WSicsICflhbzogYzkurrlkZgt5bCP56eY5LmmJywgJ+WFtuS7luaUr+WHuiddLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9wcm9qZWN0OiBbJ+WItuS9nOexuy3lub/lkYrliLbkvZwnLCAn6bKc6IqxJywgJ+iKseiJuuW4iCcsICfmkK3lu7ot5oi35aSW6Z+z5ZONJywgJ+eBr+WFiScsICfmkYfoh4InXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfbGVhc2U6IFsn56S85pyNJywgJ+Wpmui9picsICflpKflt7QnLCAn5ama5oi/JywgJ+i9puWktOiKsScsICfmiYvmjafoirEnXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcHVyY2hhc2U6IFsn55Sc5ZOBJywgJ+WWnOezlicsICfkvLTmiYvnpLwnLCAn5rCU55CDJywgJ+ilv+ijhScsICfng5/ngasnLCAn5YGc6L2m5Yi4JywgJ+W/q+mAkui0uScsICfor7fluJYnXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfbXVpdGlfaW5kZXg6IFswLCAwXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfdG90YWxfcHJpY2U6IDAsXG4gICAgICAgICAgICBwbGFuX290aGVyX3NlcnZlcl90b3RhbDogMCxcbiAgICAgICAgICAgIHFfdGFibGVfZmVtYWxlOiAnJyxcbiAgICAgICAgICAgIGZlbWFsZV90cnVlOiAxLFxuICAgICAgICAgICAgcV90YWJsZV9tYWxlOiAnJyxcbiAgICAgICAgICAgIG1hbGVfdHJ1ZTogMSxcbiAgICAgICAgICAgIG9yZGVyX3NlY29uZF9zdGF0dXNfYXJyOiBbJ+ato+W4uCcsICflu7bmnJ/ljZUnLCAn5YO15bC45Y2VJywn5byC5bi45Y2VJ10sXG4gICAgICAgICAgICBjaGVja2VkX2RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgaG90ZWxfbGlzdDogW10sXG4gICAgICAgICAgICBzZXJ2ZXJfdF9wcmljZTogMFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZ1NlY29uZFN0YXR1c0NobmFnZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydHUgPSBwYXJzZUludChpbmRleCkgKyAxO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZWRpdE9yZGVyU2Vjb25kU3RhdHVzJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvLm9yZGVyX3NlY29uZF9zdGF0dXNfdGV4dCA9IHRoYXQub3JkZXJfc2Vjb25kX3N0YXR1c19hcnJbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfc2Vjb25kX3N0YXR1czogc3RhcnR1LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoZWRXZWVkaW5nKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2NvbmZpcm1XZWRkaW5nRmluaXNoJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvLm9yZGVyX3N0YXR1cyA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlVGhlRm91clN0YXR1cyhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlVGhlU3RhdHVzKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBpbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fcHJvY2Vzc1twaW5kZXhdLmNoaWxkcmVuW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fcHJvY2Vzc1twaW5kZXhdLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3NbcGluZGV4XS5jaGlsZHJlbltpbmRleF0uc3RhdHVzICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc19maW5pc2ggIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+WFiOehruiupOWtkOS7u+WKoeWujOaIkOeKtuaAgScsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJxLmdldCgnYXBwbHlQYXNzUHJvY2VzcycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuSW1wbGVtZW50SW5mbygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAyMDE6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUZvdXJHcm91cChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1wbGVtZW50X2luZm8uZm91cl9jYXRlW2luZGV4XS5zaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8uZm91cl9jYXRlW2luZGV4XS5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5mb3VyX2NhdGVbaW5kZXhdWydzaG93J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVHcm91cChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBpbmRleDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3NbcGluZGV4XS5jaGlsZHJlbltpbmRleF0uc2hvdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fcHJvY2Vzc1twaW5kZXhdLmNoaWxkcmVuW2luZGV4XS5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3NbcGluZGV4XS5jaGlsZHJlbltpbmRleF1bJ3Nob3cnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmdIb3RlbFN0YXR1c0NobmFnZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpdCA9IHRoYXQuaW1wbGVtZW50X2luZm8uaG90ZWxfd2VkZGluZ19zdGF0dXNfYXJyW2UuZGV0YWlsLnZhbHVlXTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2NoYW5nZUhvdGVsV2VkZGluZ1N0YXR1cycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbXBsZW1lbnRfaW5mby5ob3RlbF93ZWRkaW5nX3N0YXR1c190ZXh0ID0gaXQubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBob3RlbF93ZWRkaW5nX3N0YXR1czogaXQuaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9QYXlMb2dDaGVjayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCBpc19kZXBvc2l0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGVwb3NpdDtcbiAgICAgICAgICAgICAgICBpZiAoaXNfZGVwb3NpdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvcHJlcGF5P29yZGVyX2RlcG9zaXRfaWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVBheVBybygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfcGF5X3BybyA9ICF0aGlzLnNob3dfcGF5X3BybztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfc2VydmVyX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfYmFzZV9pbmZvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5X3dlZWRpbmdfc2NoZWR1bGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvUmVxdWVzdFBheSgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvc2NoZW1lL3JlcXBheWxpc3Q/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3B5QnJpZGVMaW5rKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQodGhpcy5xX3RhYmxlX21hbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvcHlHcm9vbUxpbmsoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCh0aGlzLnFfdGFibGVfZmVtYWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvQnJpZGVTdXJ2ZXlUYWJsZSgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWFycnkvc2NoZW1lL3dlYj9vcmRlcl9pZF9zdHI9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRfc3RyICsgJyZ0eXBlPTInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0dyb29tU3VydmV5VGFibGUoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21hcnJ5L3NjaGVtZS93ZWI/b3JkZXJfaWRfc3RyPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkX3N0ciArICcmdHlwZT0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRlVG9SZWZ1bmRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9yZWZ1bmQ/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvUGF5TG9nKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmZGVwb3NpdF9zdGF0dXM9MSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlQ29sdW1uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wZXJzb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3Byb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX2xlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wdXJjaGFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF90eXBlID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlW2UuZGV0YWlsLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gZS5kZXRhaWwudmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZXMucHVzaCgwKVxuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3R5cGUgPSB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMF1bdmFsdWVzWzBdXSArICctJyArIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXVt2YWx1ZXNbMV1dO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdkaXN0cmlidXRpb25QbGFubmVyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhbm5lcl9pZDogdGhhdC50ZWFtX21lbWJlcnNbdGhhdC5lbXBsb3llZV9udW1iZXJfaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEVtcGxveWVlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlX251bWJlcl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9Db250cmFjdCgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9zYWxlL2NvbnRyYWN0P2lkPScgKyB0aGlzLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1Rhc3RlKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2NoZW1lL3Rhc3RlP2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkICsgJyZ1c2VyX2lkPScgKyB0aGlzLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TmVlZENvdW50KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyW2luZGV4XS5uZWVkX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U3ViamVjdFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U3ViamVjdFR5cGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE90aGVyVGl0bGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXJbaW5kZXhdLnRpdGxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlT3RoZXJTZXJ2ZXIoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgndXBkYXRlT3RoZXJTZXJ2ZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhbl9vdGhlcl9zZXJ2ZXI6IEpTT04uc3RyaW5naWZ5KHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlT3RoZXJTZXJ2ZXIoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCBwdXIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPSBwdXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkT3RoZXJTZXJ2ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZF9jb3VudDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RfcHJpY2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZGRpbmdEYXRlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRXZWVkaW5nQWRkcmVzc0NoYW5nZShlKSB7XG4gICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ud2VkZGluZ19hZGRyZXNzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGFibGVDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX3RhYmxlX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdEJhc2VUb2dnbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mbztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5lZGl0X2Jhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVCYXNlSW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluX2NvbnRyYWN0OiBpdGVtLm1haW5fY29udHJhY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IGl0ZW0udXNlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9tb2JpbGU6IGl0ZW0udXNlcl9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV9uYW1lOiBpdGVtLmdyb29tX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV9tb2JpbGU6IGl0ZW0uZ3Jvb21fbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jvb21fd2VjaGF0OiBpdGVtLmdyb29tX3dlY2hhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX25hbWU6IGl0ZW0uYnJpZGVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX21vYmlsZTogaXRlbS5icmlkZV9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBicmlkZV93ZWNoYXQ6IGl0ZW0uYnJpZGVfd2VjaGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVfdHlwZTogaXRlbS5zY2hlZHVsZV90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19kYXRlOiBpdGVtLndlZGRpbmdfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfYWRkcmVzczogaXRlbS53ZWRkaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZWRkaW5nX3Nlc3Npb246IGl0ZW0ud2VkZGluZ19zZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ190YWJsZV9jb3VudDogaXRlbS53ZWRkaW5nX3RhYmxlX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfaW1wcmVzc2lvbjogaXRlbS5maXJzdF9pbXByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5X2JhY2tncm91bmQ6IGl0ZW0uZmFtaWx5X2JhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX25lZWRzOiBpdGVtLndlZGRpbmdfbmVlZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZV9lbmRfdGltZTogaXRlbS5zY2hlZHVsZV9lbmRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX3JlbWFyazogaXRlbS5vcmRlcl9yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IGl0ZW0uaW50ZW50aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogaXRlbS51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbl9kYXRlOiBpdGVtLnNpZ25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jb21wYW55X2lkOml0ZW0uc3ViX2NvbXBhbnlfaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9UYXNrKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2NoZW1lL3Rhc2s/aWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQgKyAnJm9yZGVyX2lkX3N0cj0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZF9zdHJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0T3RoZXJTZXJ2ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0X3NlcnZlciA9ICF0aGlzLmVkaXRfc2VydmVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJfaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5JbXBsZW1lbnRJbmZvKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYl9pbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T25lUGxhbk9yZGVySW5mbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbEJpbmRhY29uZmlybSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IHBpbmRleCA9IHRoYXQuY2hlY2tlZF9kYXRhLnBpbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGF0LmNoZWNrZWRfZGF0YS5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgc2luZGV4ID0gdGhhdC5jaGVja2VkX2RhdGEuc2luZGV4O1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5jaGVja2VkX2RhdGEuaXNfZm91cikge1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2NvbmZpcm1Qcm9jZXNzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9wcm9jZXNzW3BpbmRleF0uY2hpbGRyZW5baW5kZXhdLmNoaWxkcmVuW3NpbmRleF0uaXNfZmluaXNoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNoZWNrZWRfZGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5fcHJvY2Vzc19pZDogdGhhdC5jaGVja2VkX2RhdGEudmFsdWVfa2V5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgnZmluaXNoUHJvY2Vzc0ZvdXJjYXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW1wbGVtZW50X2luZm8uZm91cl9jYXRlW2luZGV4XS5jaGlsZHJlbltzaW5kZXhdLmlzX2ZpbmlzaCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jaGVja2VkX2RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzX2lkOiB0aGF0LmNoZWNrZWRfZGF0YS52YWx1ZV9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbEJpbmRjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkX2RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2VkRm91ckNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZV9rZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNpbmRleDtcbiAgICAgICAgICAgICAgICB0aGF0LmNoZWNrZWRfZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9rZXk6IHZhbHVlX2tleSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBzaW5kZXg6IHNpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaXNfZm91cjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2VkQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgLy8gbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWVbMF07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlX2tleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgcGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGluZGV4O1xuICAgICAgICAgICAgICAgIGxldCBzaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhhdC5jaGVja2VkX2RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfa2V5OiB2YWx1ZV9rZXksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgcGluZGV4OiBwaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHNpbmRleDogc2luZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwbGFuSW1wbGVtZW50SW5mbygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgncGxhbkltcGxlbWVudEluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPT0gJy0nIHx8ICF0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzX2NvbmZpcm0gPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc19jb25maXJtID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRfcHJpPTA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRfcHJpKz1wYXJzZUludChlbGVtZW50LnN1YmplY3RfcHJpY2UpKnBhcnNlSW50KGVsZW1lbnQubmVlZF9jb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2VydmVyX3RfcHJpY2U9Y291bnRfcHJpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyLmlzX3NjaGVtZV9sZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2dldExvZ2luZXJUZWFtRW1wbG95ZWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbV9tZW1iZXJzID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRPbmVQbGFuT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5ob3RlbF9saXN0ID0gcmVzdWx0LmRhdGEuaG90ZWxfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub3JkZXJfaW5mby5wbGFuX290aGVyX3NlcnZlciA9PSAnLScgfHwgIXRoYXQub3JkZXJfaW5mby5wbGFuX290aGVyX3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCArPSBlbGVtZW50Lm5lZWRfY291bnQgKiBlbGVtZW50LnN1YmplY3RfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGxhbl9vdGhlcl9zZXJ2ZXJfdG90YWwgPSBjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCdxdWVzdGlvblRhYmxlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucV90YWJsZV9mZW1hbGUgPSByZXN1bHQuZGF0YS5mZW1hbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5mZW1hbGVfdHJ1ZSA9IHJlc3VsdC5kYXRhLmZlbWFsZV90cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucV90YWJsZV9tYWxlID0gcmVzdWx0LmRhdGEubWFsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1hbGVfdHJ1ZSA9IHJlc3VsdC5kYXRhLm1hbGVfdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZF9zdHI6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRfc3RyXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGxhbkltcGxlbWVudEluZm8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb3B5VGV4dCh0ZXh0KSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB0ZXh0LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB3eC5nZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpk77mjqXlpI3liLbmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGdldE9uZVBsYW5PcmRlckluZm8oKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldE9uZVBsYW5PcmRlckluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmhvdGVsX2xpc3QgPSByZXN1bHQuZGF0YS5ob3RlbF9saXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyID09ICctJyB8fCAhdGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ICs9IGVsZW1lbnQubmVlZF9jb3VudCAqIGVsZW1lbnQuc3ViamVjdF9wcmljZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7fVxuICAgIH1cbiJdfQ==