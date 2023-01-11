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
            team_members: null,
            employee_number_index: 0,
            other_service_range: [['人员类', '工程类', '租赁类', '采购类'], ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']],
            other_service_person: ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出'],
            other_service_project: ['制作类-广告制作', '鲜花', '花艺师', '搭建-户外音响', '灯光', '摇臂'],
            other_service_lease: ['礼服', '婚车', '大巴', '婚房', '车头花', '手捧花'],
            other_service_purchase: ['甜品', '喜糖', '伴手礼', '气球', '西装', '烟火', '停车券', '快递费', '请帖'],
            other_service_muiti_index: [0, 0],
            other_service_total_price: 0,
            plan_other_server_total: 0,
            plan_all_price: 0,
            empty_dishes_other_server: [{
                title: "加桌",
                need_count: 0,
                subject_price: 0,
                remark: ""
            }, {
                title: "加菜",
                need_count: 0,
                subject_price: 0,
                remark: ""
            }, {
                title: "菜品升级",
                need_count: 0,
                subject_price: 0,
                remark: ""
            }, {
                title: "备桌",
                need_count: 0,
                subject_price: 0,
                remark: ""
            }, {
                title: "试菜",
                need_count: 0,
                subject_price: 0,
                remark: ""
            }],
            display_free_service: false,
            free_servers_arr: [],
            wedding_page: [],
            wedding_index: 0,
            plan_index: 0,
            plan_package: [],
            submit_lock: false,
            edit_imp_msg: false,
            is_mark_edit: false
        }, _this.methods = {
            bindInputOrderRemark: function bindInputOrderRemark(e) {
                this.order_info.base_info.order_remark = e.detail.value;
            },
            upadteMarkMsg: function upadteMarkMsg() {
                var that = this;
                _request2.default.get('updateOrderRemark', {
                    200: function _(result) {
                        that.is_mark_edit = false;
                        that.$apply();
                    }
                }, {
                    order_id: this.order_info.base_info.order_id,
                    order_remark: this.order_info.base_info.order_remark
                });
            },
            editMarkToggle: function editMarkToggle() {
                this.is_mark_edit = true;
            },
            updatePlanImplementInfo: function updatePlanImplementInfo() {
                var that = this;
                _request2.default.get('editplanImplementInfo', {
                    200: function _(result) {
                        that.edit_imp_msg = false;
                        that.$apply();
                    }
                }, {
                    id: this.implement_info.id,
                    order_id: this.order_info.base_info.order_id,
                    try_dish_date: this.implement_info.try_dish_date,
                    compere: this.implement_info.compere,
                    dresser: this.implement_info.dresser,
                    remark: this.implement_info.remark
                });
            },
            bindChangeTryDishDate: function bindChangeTryDishDate(e) {
                this.implement_info.try_dish_date = e.detail.value;
            },
            bindInputCompere: function bindInputCompere(e) {
                this.implement_info.compere = e.detail.value;
            },
            bindInputDresser: function bindInputDresser(e) {
                this.implement_info.dresser = e.detail.value;
            },
            bindInputImpRemark: function bindInputImpRemark(e) {
                this.implement_info.remark = e.detail.value;
            },
            editImplMsg: function editImplMsg() {
                this.edit_imp_msg = true;
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
            bindInputPackageCountAll: function bindInputPackageCountAll(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count_all = e.detail.value;
                this.order_info.server_package[index].total_price = this.order_info.server_package[index].package_end_price * this.order_info.server_package[index].package_count_all;
                // this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindWeddingDiscountChange: function bindWeddingDiscountChange(e) {
                var index = e.currentTarget.dataset.index;
                if (index == 0) {
                    this.order_info.server_package[index].package_discount_name = this.wedding_page[this.wedding_index].package_discount_list[e.detail.value].discount_name;
                    this.order_info.server_package[index].package_discount = this.wedding_page[this.wedding_index].package_discount_list[e.detail.value].discount_level;
                    this.order_info.server_package[index].package_end_price = this.wedding_page[this.wedding_index].package_discount_list[e.detail.value].after_discount;
                    this.order_info.server_package[index].total_price = this.order_info.server_package[index].package_end_price * this.order_info.server_package[index].package_count_all;
                } else if (index == 1) {
                    this.order_info.server_package[index].package_discount_name = this.plan_package[this.plan_index].package_discount_list[e.detail.value].discount_name;
                    this.order_info.server_package[index].package_discount = this.plan_package[this.plan_index].package_discount_list[e.detail.value].discount_level;
                    this.order_info.server_package[index].package_end_price = this.plan_package[this.plan_index].package_discount_list[e.detail.value].after_discount;
                    this.order_info.server_package[index].total_price = this.plan_package[this.plan_index].package_discount_list[e.detail.value].after_discount;
                }
                // this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindWeddingPackageChange: function bindWeddingPackageChange(e) {
                this.wedding_index = e.detail.value;
                var package_index = e.currentTarget.dataset.index;
                this.order_info.server_package[package_index].package_name = this.wedding_page[this.wedding_index].package_name;
                this.order_info.server_package[package_index].package_price = this.wedding_page[this.wedding_index].package_price;
                this.order_info.server_package[package_index].package_end_price = ''; //清空价格
                this.order_info.server_package[package_index].total_price = '';
                this.order_info.server_package[package_index].supplier_package_id = this.wedding_page[this.wedding_index].id;
                this.order_info.server_package[package_index].package_discount_name = '';
                this.order_info.server_package[package_index].package_discount = '';
                this.order_info.server_package[package_index].package_count_all = 1;
                // this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindPlanPackageChange: function bindPlanPackageChange(e) {
                this.plan_index = e.detail.value;
                var package_index = e.currentTarget.dataset.index;
                this.order_info.server_package[package_index].package_name = this.plan_package[this.plan_index].package_name;
                this.order_info.server_package[package_index].package_price = this.plan_package[this.plan_index].package_price;
                this.order_info.server_package[package_index].package_end_price = ''; //清空价格
                this.order_info.server_package[package_index].total_price = '';
                this.order_info.server_package[package_index].supplier_package_id = this.plan_package[this.plan_index].id;
                this.order_info.server_package[package_index].package_discount_name = '';
                this.order_info.server_package[package_index].package_discount = '';
                this.order_info.server_package[package_index].package_count_all = 1;
            },
            editServerToggle: function editServerToggle() {
                var that = this;
                var item = that.order_info.server_offer;
                that.order_info.server_package.forEach(function (element) {
                    if (!element.supplier_package_id) {
                        element.supplier_package_id = element.id;
                    }
                });
                that.order_info.server_package[1].total_price = that.order_info.server_package[1].package_end_price;
                if (that.edit_server) {
                    that.order_info.server_package[1].package_count_all = 1; //强制设置为1
                    if (that.submit_lock) {
                        return false;
                    }
                    that.submit_lock = true;
                    _request2.default.get('updateServerOffer', {
                        200: function _(result) {
                            that.edit_server = false;
                            _wepy2.default.showToast({
                                title: '保存成功', //提示的内容,
                                icon: 'none', //图标,
                                duration: 2000, //延迟时间,
                                mask: true, //显示透明蒙层，防止触摸穿透,
                                success: function success(res) {}
                            });
                            that.submit_lock = false;
                            that.$apply();
                        }
                    }, {
                        order_id: that.order_info.base_info.order_id,
                        other_server: JSON.stringify(that.order_info.other_server),
                        free_server: JSON.stringify(that.order_info.free_server),
                        package_arr: JSON.stringify(that.order_info.server_package),
                        server_total_price: item.server_total_price,
                        // pay_type: 1,
                        by_stages_num: item.by_stages_num,
                        by_stages: that.by_stages_items_index,
                        by_stages_unit_price: item.by_stages_unit_price,
                        by_stages_price: item.by_stages_price,
                        splite_egg_interest_free: item.splite_egg_interest_free,
                        splite_egg_price: item.splite_egg_price,
                        server_end_total_price: item.server_end_total_price,
                        server_total_price_upper: item.server_total_price_upper,
                        payment_first: item.payment_first,
                        payment_second: item.payment_second,
                        payment_last: item.payment_last,
                        payment_first_date: item.payment_first_date ? item.payment_first_date : '',
                        payment_second_date: item.payment_second_date ? item.payment_second_date : '',
                        payment_last_date: item.payment_last_date ? item.payment_last_date : ''
                    });
                } else {
                    that.edit_server = true;
                }
            },
            toggleChecked: function toggleChecked(e) {
                var index = e.currentTarget.dataset.index;
                this.free_servers_arr[index].checked = !this.free_servers_arr[index].checked;
            },
            toggleProChecked: function toggleProChecked(e) {
                var that = this;
                var index = e.currentTarget.dataset.index;
                var value_key = e.currentTarget.dataset.key;
                if (this.implement_info.plan_process[index].is_confirm == 1) {
                    _request2.default.get('cancelProcess', {
                        200: function _(result) {
                            that.planImplementInfo();
                            that.$apply();
                        }
                    }, {
                        plan_process_id: that.implement_info.plan_process_id,
                        plan_process_key: value_key
                    });
                } else {
                    _request2.default.get('confirmProcess', {
                        200: function _(result) {
                            that.planImplementInfo();
                            that.$apply();
                        }
                    }, {
                        plan_process_id: that.implement_info.plan_process_id,
                        plan_process_key: value_key
                    });
                }
            },
            goToContract: function goToContract() {
                _wepy2.default.navigateTo({
                    url: '../sale/contract?id=' + this.id
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
                var values = [];
                e.detail.value.forEach(function (element) {
                    if (!element) {
                        values.push(0);
                    } else {
                        values.push(element);
                    }
                });
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].subject_type = this.other_service_range[0][values[0]] + '-' + this.other_service_range[1][values[1]];
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
            goToDepot: function goToDepot() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/depotlist?id=' + this.order_info.base_info.order_id
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
            bindInputDishesPrice: function bindInputDishesPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.dishes_other_server[index].subject_price = e.detail.value;
            },
            bindInputDishesNeedCount: function bindInputDishesNeedCount(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.dishes_other_server[index].need_count = e.detail.value;
            },
            bindInputDishesRemark: function bindInputDishesRemark(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.dishes_other_server[index].remark = e.detail.value;
            },
            bindInputRemark: function bindInputRemark(e) {
                var index = e.currentTarget.dataset.index;
                this.implement_info.plan_other_server[index].remark = e.detail.value;
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
                    plan_other_server: JSON.stringify(that.implement_info.plan_other_server),
                    dishes_other_server: JSON.stringify(that.order_info.dishes_other_server)
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
                this.display_free_service = true;
            },
            addOtherConfirm: function addOtherConfirm() {
                var _this2 = this;

                if (!this.implement_info.plan_other_server) {
                    this.implement_info.plan_other_server = [];
                }
                this.free_servers_arr.forEach(function (element) {
                    if (element.checked) {
                        _this2.implement_info.plan_other_server.push({
                            need_count: 1,
                            subject_price: element.product_price,
                            subject_type: element.product_category,
                            title: element.product_name,
                            remark: ''
                        });
                        element.checked = false;
                    }
                });
                this.display_free_service = false;
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
                        schedule_type: item.schedule_type,
                        wedding_date: item.wedding_date,
                        wedding_address: item.wedding_address,
                        wedding_session: item.wedding_session,
                        schedule_end_time: item.schedule_end_time,
                        order_remark: item.order_remark
                    });
                } else {
                    that.edit_base = true;
                }
            },
            goToMenu: function goToMenu() {
                _wepy2.default.navigateTo({
                    url: '../sale/ordermenu?order_id=' + this.order_info.base_info.order_id
                });
            },
            goToTask: function goToTask() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/task?id=' + this.order_info.base_info.order_id + '&order_id_str=' + this.order_info.base_info.order_id_str
                });
            },
            editOtherServer: function editOtherServer() {
                this.edit_server = true;
            },
            toggleTab: function toggleTab(e) {
                this.tab_index = e.currentTarget.dataset.index;
                if (this.tab_index == 1) {
                    this.planImplementInfo();
                } else if (this.tab_index == 0) {
                    this.getOnePlanOrderInfo();
                }
            },
            checkedChange: function checkedChange(e) {
                var that = this;
                var value = e.detail.value[0];
                var value_key = e.currentTarget.dataset.key;
                if (value) {
                    _request2.default.get('confirmProcess', {
                        200: function _(result) {
                            that.planImplementInfo();
                            that.$apply();
                        }
                    }, {
                        plan_process_id: that.implement_info.plan_process_id,
                        plan_process_key: value
                    });
                } else {
                    _request2.default.get('cancelProcess', {
                        200: function _(result) {
                            that.planImplementInfo();
                            that.$apply();
                        }
                    }, {
                        plan_process_id: that.implement_info.plan_process_id,
                        plan_process_key: value_key
                    });
                }
                console.log('tag', e);
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
                    if (that.implement_info.plan_other_server == '-') {
                        that.implement_info.plan_other_server = [];
                    }
                    that.implement_info.plan_process.forEach(function (element) {
                        if (element.is_confirm == '-' || element.is_confirm == 0) {
                            element.is_confirm = 0;
                        } else {
                            element.is_confirm = 1;
                        }
                    });
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
            that.id = options.id;
        }
    }, {
        key: 'getOnePlanOrderInfo',
        value: function getOnePlanOrderInfo() {
            var that = this;
            _request2.default.get('getOnePlanOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    if (that.order_info.plan_other_server == '-' || !that.order_info.plan_other_server) {
                        that.order_info.plan_other_server = [];
                    }
                    if (!that.order_info.dishes_other_server) {
                        that.order_info.dishes_other_server = that.empty_dishes_other_server;
                    }
                    that.countTotalPrice();
                    that.$apply();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'countTotalPrice',
        value: function countTotalPrice() {
            var that = this;
            var count = 0;
            that.order_info.dishes_other_server.forEach(function (element) {
                if (element.need_count && element.subject_price) {
                    var e_price = parseInt(element.need_count) * parseInt(element.subject_price);
                    count += e_price;
                }
            });
            that.order_info.plan_other_server.forEach(function (element) {
                if (element.need_count && element.subject_price) {
                    var e_price = parseInt(element.need_count) * parseInt(element.subject_price);
                    console.log(e_price);
                    count += e_price;
                }
            });
            that.plan_all_price = parseInt(this.order_info.server_offer.server_end_total_price) + count;
            that.plan_all_price = that.plan_all_price.toFixed(2);
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            that.user = _wepy2.default.getStorageSync('user');
            if (that.user.is_scheme_leader) {
                _request2.default.get('getLoginerTeamEmployee', {
                    200: function _(result) {
                        that.team_members = result.data.employee_list;
                        that.$apply();
                    }
                }, {});
            }
            _request2.default.get('getOnePlanOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    if (that.order_info.plan_other_server == '-' || !that.order_info.plan_other_server) {
                        that.order_info.plan_other_server = [];
                    }
                    if (!that.order_info.dishes_other_server) {
                        that.order_info.dishes_other_server = that.empty_dishes_other_server;
                    }
                    _request2.default.get('getWeddingPackage', {
                        200: function _(result) {
                            that.wedding_page = result.data.data;
                            if (!that.order_info.server_package || !that.order_info.server_package[0]) {
                                that.order_info.server_package[0] = that.wedding_page[0];
                            }
                            that.$apply();
                        }
                    }, {
                        user_id: that.id
                    });
                    _request2.default.get('getPlanPackage', {
                        200: function _(result) {
                            that.plan_package = result.data.data;
                            if (!that.order_info.server_package || !that.order_info.server_package[1]) {
                                that.order_info.server_package[1] = that.plan_package[0];
                            }
                            that.$apply();
                        }
                    }, {
                        user_id: that.id
                    });
                    that.countTotalPrice();
                    that.$apply();
                    that.planImplementInfo();
                }
            }, {
                user_id: that.id
            });
            _request2.default.get('getPlanProduct', {
                200: function _(result) {
                    that.free_servers_arr = result.data.data;
                    that.$apply();
                }
            }, {
                team_id: 14
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/scheme/customer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImltcGxlbWVudF9pbmZvIiwic3RhdHVzX2Fycl9pbmRleCIsInRhYl9pbmRleCIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJoYXNfb3JkZXIiLCJ1c2VyIiwidGVhbV9tZW1iZXJzIiwiZW1wbG95ZWVfbnVtYmVyX2luZGV4Iiwib3RoZXJfc2VydmljZV9yYW5nZSIsIm90aGVyX3NlcnZpY2VfcGVyc29uIiwib3RoZXJfc2VydmljZV9wcm9qZWN0Iiwib3RoZXJfc2VydmljZV9sZWFzZSIsIm90aGVyX3NlcnZpY2VfcHVyY2hhc2UiLCJvdGhlcl9zZXJ2aWNlX211aXRpX2luZGV4Iiwib3RoZXJfc2VydmljZV90b3RhbF9wcmljZSIsInBsYW5fb3RoZXJfc2VydmVyX3RvdGFsIiwicGxhbl9hbGxfcHJpY2UiLCJlbXB0eV9kaXNoZXNfb3RoZXJfc2VydmVyIiwibmVlZF9jb3VudCIsInN1YmplY3RfcHJpY2UiLCJyZW1hcmsiLCJkaXNwbGF5X2ZyZWVfc2VydmljZSIsImZyZWVfc2VydmVyc19hcnIiLCJ3ZWRkaW5nX3BhZ2UiLCJ3ZWRkaW5nX2luZGV4IiwicGxhbl9pbmRleCIsInBsYW5fcGFja2FnZSIsInN1Ym1pdF9sb2NrIiwiZWRpdF9pbXBfbXNnIiwiaXNfbWFya19lZGl0IiwibWV0aG9kcyIsImJpbmRJbnB1dE9yZGVyUmVtYXJrIiwiZSIsImJhc2VfaW5mbyIsIm9yZGVyX3JlbWFyayIsImRldGFpbCIsInZhbHVlIiwidXBhZHRlTWFya01zZyIsInRoYXQiLCJycSIsImdldCIsIiRhcHBseSIsIm9yZGVyX2lkIiwiZWRpdE1hcmtUb2dnbGUiLCJ1cGRhdGVQbGFuSW1wbGVtZW50SW5mbyIsInRyeV9kaXNoX2RhdGUiLCJjb21wZXJlIiwiZHJlc3NlciIsImJpbmRDaGFuZ2VUcnlEaXNoRGF0ZSIsImJpbmRJbnB1dENvbXBlcmUiLCJiaW5kSW5wdXREcmVzc2VyIiwiYmluZElucHV0SW1wUmVtYXJrIiwiZWRpdEltcGxNc2ciLCJnb1RvUGF5TG9nQ2hlY2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJpc19kZXBvc2l0IiwiZGVwb3NpdCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlUGF5UHJvIiwic2hvd19wYXlfcHJvIiwic2hvd19zZXJ2ZXJfaW5mbyIsInNob3dfYmFzZV9pbmZvIiwiZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlIiwiYmluZElucHV0UGFja2FnZUNvdW50QWxsIiwiaW5kZXgiLCJzZXJ2ZXJfcGFja2FnZSIsInBhY2thZ2VfY291bnRfYWxsIiwidG90YWxfcHJpY2UiLCJwYWNrYWdlX2VuZF9wcmljZSIsImJpbmRXZWRkaW5nRGlzY291bnRDaGFuZ2UiLCJwYWNrYWdlX2Rpc2NvdW50X25hbWUiLCJwYWNrYWdlX2Rpc2NvdW50X2xpc3QiLCJkaXNjb3VudF9uYW1lIiwicGFja2FnZV9kaXNjb3VudCIsImRpc2NvdW50X2xldmVsIiwiYWZ0ZXJfZGlzY291bnQiLCJiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UiLCJwYWNrYWdlX2luZGV4IiwicGFja2FnZV9uYW1lIiwicGFja2FnZV9wcmljZSIsInN1cHBsaWVyX3BhY2thZ2VfaWQiLCJiaW5kUGxhblBhY2thZ2VDaGFuZ2UiLCJlZGl0U2VydmVyVG9nZ2xlIiwiaXRlbSIsInNlcnZlcl9vZmZlciIsImZvckVhY2giLCJlbGVtZW50Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJvdGhlcl9zZXJ2ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZnJlZV9zZXJ2ZXIiLCJwYWNrYWdlX2FyciIsInNlcnZlcl90b3RhbF9wcmljZSIsImJ5X3N0YWdlc19udW0iLCJieV9zdGFnZXMiLCJieV9zdGFnZXNfaXRlbXNfaW5kZXgiLCJieV9zdGFnZXNfdW5pdF9wcmljZSIsImJ5X3N0YWdlc19wcmljZSIsInNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSIsInNwbGl0ZV9lZ2dfcHJpY2UiLCJzZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlIiwic2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyIiwicGF5bWVudF9maXJzdCIsInBheW1lbnRfc2Vjb25kIiwicGF5bWVudF9sYXN0IiwicGF5bWVudF9maXJzdF9kYXRlIiwicGF5bWVudF9zZWNvbmRfZGF0ZSIsInBheW1lbnRfbGFzdF9kYXRlIiwidG9nZ2xlQ2hlY2tlZCIsImNoZWNrZWQiLCJ0b2dnbGVQcm9DaGVja2VkIiwidmFsdWVfa2V5Iiwia2V5IiwicGxhbl9wcm9jZXNzIiwiaXNfY29uZmlybSIsInBsYW5JbXBsZW1lbnRJbmZvIiwicGxhbl9wcm9jZXNzX2lkIiwicGxhbl9wcm9jZXNzX2tleSIsImdvVG9Db250cmFjdCIsIm5hdmlnYXRlVG9SZWZ1bmRQYWdlIiwiZ29Ub1BheUxvZyIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZSIsInZhbHVlcyIsInB1c2giLCJwbGFuX290aGVyX3NlcnZlciIsInN1YmplY3RfdHlwZSIsInN1Ym1pdCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXNlcl9pZCIsInBsYW5uZXJfaWQiLCJiaW5kRW1wbG95ZWVDaGFuZ2UiLCJnb1RvRGVwb3QiLCJnb1RvVGFzdGUiLCJiaW5kSW5wdXROZWVkQ291bnQiLCJiaW5kSW5wdXRTdWJqZWN0UHJpY2UiLCJiaW5kSW5wdXREaXNoZXNQcmljZSIsImRpc2hlc19vdGhlcl9zZXJ2ZXIiLCJiaW5kSW5wdXREaXNoZXNOZWVkQ291bnQiLCJiaW5kSW5wdXREaXNoZXNSZW1hcmsiLCJiaW5kSW5wdXRSZW1hcmsiLCJiaW5kSW5wdXRTdWJqZWN0VHlwZSIsImJpbmRJbnB1dE90aGVyVGl0bGUiLCJ1cGRhdGVPdGhlclNlcnZlciIsImRlbGV0ZU90aGVyU2VydmVyIiwicHVyIiwiaSIsImFkZE90aGVyU2VydmVyIiwiYWRkT3RoZXJDb25maXJtIiwicHJvZHVjdF9wcmljZSIsInByb2R1Y3RfY2F0ZWdvcnkiLCJwcm9kdWN0X25hbWUiLCJlZGl0QmFzZVRvZ2dsZSIsIm1haW5fY29udHJhY3QiLCJ1c2VyX25hbWUiLCJ1c2VyX21vYmlsZSIsImdyb29tX25hbWUiLCJncm9vbV9tb2JpbGUiLCJncm9vbV93ZWNoYXQiLCJicmlkZV9uYW1lIiwiYnJpZGVfbW9iaWxlIiwiYnJpZGVfd2VjaGF0Iiwic2NoZWR1bGVfdHlwZSIsIndlZGRpbmdfZGF0ZSIsIndlZGRpbmdfYWRkcmVzcyIsIndlZGRpbmdfc2Vzc2lvbiIsInNjaGVkdWxlX2VuZF90aW1lIiwiZ29Ub01lbnUiLCJnb1RvVGFzayIsIm9yZGVyX2lkX3N0ciIsImVkaXRPdGhlclNlcnZlciIsInRvZ2dsZVRhYiIsImdldE9uZVBsYW5PcmRlckluZm8iLCJjaGVja2VkQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJjb3VudFRvdGFsUHJpY2UiLCJjb3VudCIsImVfcHJpY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NjaGVtZV9sZWFkZXIiLCJlbXBsb3llZV9saXN0IiwidGVhbV9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFB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RUFLRztBQUNDOEoseUJBQVM7QUFEVixhQUxIO0FBUUg7Ozs7RUF2bkI4QjVJLGVBQUs2SSxJOztrQkFBbkJ0TixLIiwiZmlsZSI6ImN1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrqLmiLfor6bmg4UnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgb3JkZXJfaW5mbzogbnVsbCxcbiAgICAgICAgICAgIGltcGxlbWVudF9pbmZvOiBudWxsLFxuICAgICAgICAgICAgc3RhdHVzX2Fycl9pbmRleDogMCxcbiAgICAgICAgICAgIHRhYl9pbmRleDogMCxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIGVkaXRfYmFzZTogZmFsc2UsXG4gICAgICAgICAgICBlZGl0X3NlcnZlcjogZmFsc2UsXG4gICAgICAgICAgICBoYXNfb3JkZXI6IDAsXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgdGVhbV9tZW1iZXJzOiBudWxsLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyX2luZGV4OiAwLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9yYW5nZTogW1xuICAgICAgICAgICAgICAgIFsn5Lq65ZGY57G7JywgJ+W3peeoi+exuycsICfnp5/otYHnsbsnLCAn6YeH6LSt57G7J10sXG4gICAgICAgICAgICAgICAgWyflj7jku6onLCAn5YyW5aaGJywgJ+aRhOW9sScsICfmkYTlg48nLCAn566h5a62JywgJ+a8lOWHuicsICfkuZDpmJ8nLCAn5bCP5o+Q55C0JywgJ0RKL1ZKJywgJ+WFvOiBjOS6uuWRmC3lsI/np5jkuaYnLCAn5YW25LuW5pSv5Ye6J11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3BlcnNvbjogWyflj7jku6onLCAn5YyW5aaGJywgJ+aRhOW9sScsICfmkYTlg48nLCAn566h5a62JywgJ+a8lOWHuicsICfkuZDpmJ8nLCAn5bCP5o+Q55C0JywgJ0RKL1ZKJywgJ+WFvOiBjOS6uuWRmC3lsI/np5jkuaYnLCAn5YW25LuW5pSv5Ye6J10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3Byb2plY3Q6IFsn5Yi25L2c57G7LeW5v+WRiuWItuS9nCcsICfpspzoirEnLCAn6Iqx6Im65biIJywgJ+aQreW7ui3miLflpJbpn7Plk40nLCAn54Gv5YWJJywgJ+aRh+iHgiddLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9sZWFzZTogWyfnpLzmnI0nLCAn5ama6L2mJywgJ+Wkp+W3tCcsICflqZrmiL8nLCAn6L2m5aS06IqxJywgJ+aJi+aNp+iKsSddLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9wdXJjaGFzZTogWyfnlJzlk4EnLCAn5Zac57OWJywgJ+S8tOaJi+ekvCcsICfmsJTnkIMnLCAn6KW/6KOFJywgJ+eDn+eBqycsICflgZzovabliLgnLCAn5b+r6YCS6LS5JywgJ+ivt+W4liddLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV9tdWl0aV9pbmRleDogWzAsIDBdLFxuICAgICAgICAgICAgb3RoZXJfc2VydmljZV90b3RhbF9wcmljZTogMCxcbiAgICAgICAgICAgIHBsYW5fb3RoZXJfc2VydmVyX3RvdGFsOiAwLFxuICAgICAgICAgICAgcGxhbl9hbGxfcHJpY2U6IDAsXG4gICAgICAgICAgICBlbXB0eV9kaXNoZXNfb3RoZXJfc2VydmVyOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWKoOahjFwiLFxuICAgICAgICAgICAgICAgIG5lZWRfY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgc3ViamVjdF9wcmljZTogMCxcbiAgICAgICAgICAgICAgICByZW1hcms6IFwiXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5Yqg6I+cXCIsXG4gICAgICAgICAgICAgICAgbmVlZF9jb3VudDogMCxcbiAgICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiAwLFxuICAgICAgICAgICAgICAgIHJlbWFyazogXCJcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLoj5zlk4HljYfnuqdcIixcbiAgICAgICAgICAgICAgICBuZWVkX2NvdW50OiAwLFxuICAgICAgICAgICAgICAgIHN1YmplY3RfcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgcmVtYXJrOiBcIlwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWkh+ahjFwiLFxuICAgICAgICAgICAgICAgIG5lZWRfY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgc3ViamVjdF9wcmljZTogMCxcbiAgICAgICAgICAgICAgICByZW1hcms6IFwiXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi6K+V6I+cXCIsXG4gICAgICAgICAgICAgICAgbmVlZF9jb3VudDogMCxcbiAgICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiAwLFxuICAgICAgICAgICAgICAgIHJlbWFyazogXCJcIixcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZGlzcGxheV9mcmVlX3NlcnZpY2U6IGZhbHNlLFxuICAgICAgICAgICAgZnJlZV9zZXJ2ZXJzX2FycjogW10sXG4gICAgICAgICAgICB3ZWRkaW5nX3BhZ2U6IFtdLFxuICAgICAgICAgICAgd2VkZGluZ19pbmRleDogMCxcbiAgICAgICAgICAgIHBsYW5faW5kZXg6IDAsXG4gICAgICAgICAgICBwbGFuX3BhY2thZ2U6IFtdLFxuICAgICAgICAgICAgc3VibWl0X2xvY2s6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdF9pbXBfbXNnOiBmYWxzZSxcbiAgICAgICAgICAgIGlzX21hcmtfZWRpdDpmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZElucHV0T3JkZXJSZW1hcmsoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9yZW1hcms9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBhZHRlTWFya01zZygpe1xuICAgICAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVPcmRlclJlbWFyaycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc19tYXJrX2VkaXQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDp0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9yZW1hcms6IHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfcmVtYXJrXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0TWFya1RvZ2dsZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNfbWFya19lZGl0PXRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlUGxhbkltcGxlbWVudEluZm8oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2VkaXRwbGFuSW1wbGVtZW50SW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lZGl0X2ltcF9tc2c9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDp0aGlzLmltcGxlbWVudF9pbmZvLmlkLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDp0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICB0cnlfZGlzaF9kYXRlOiB0aGlzLmltcGxlbWVudF9pbmZvLnRyeV9kaXNoX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBlcmU6IHRoaXMuaW1wbGVtZW50X2luZm8uY29tcGVyZSxcbiAgICAgICAgICAgICAgICAgICAgZHJlc3NlcjogdGhpcy5pbXBsZW1lbnRfaW5mby5kcmVzc2VyLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IHRoaXMuaW1wbGVtZW50X2luZm8ucmVtYXJrXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQ2hhbmdlVHJ5RGlzaERhdGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8udHJ5X2Rpc2hfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dENvbXBlcmUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8uY29tcGVyZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dERyZXNzZXIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8uZHJlc3NlciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEltcFJlbWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0SW1wbE1zZygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRfaW1wX21zZyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1BheUxvZ0NoZWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2RlcG9zaXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXBvc2l0O1xuICAgICAgICAgICAgICAgIGlmIChpc19kZXBvc2l0ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9wcmVwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9kZXBvc2l0X2lkPScgKyBpZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUGF5UHJvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gIXRoaXMuc2hvd19wYXlfcHJvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBhY2thZ2VDb3VudEFsbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlICogdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRXZWRkaW5nRGlzY291bnRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9kaXNjb3VudF9uYW1lID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X2xpc3RbZS5kZXRhaWwudmFsdWVdLmRpc2NvdW50X25hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9kaXNjb3VudCA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9sZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2VuZF9wcmljZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5hZnRlcl9kaXNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS50b3RhbF9wcmljZSA9IHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgKiB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnRvdGFsX3ByaWNlKSArIHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFdlZGRpbmdQYWNrYWdlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndlZGRpbmdfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcGFja2FnZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX25hbWUgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9wcmljZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9wcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSAnJzsgLy/muIXnqbrku7fmoLxcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0udG90YWxfcHJpY2UgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0uc3VwcGxpZXJfcGFja2FnZV9pZCA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50ID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsID0gMTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQbGFuUGFja2FnZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHBhY2thZ2VfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9uYW1lID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfcHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlID0gJyc7IC8v5riF56m65Lu35qC8XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnRvdGFsX3ByaWNlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnN1cHBsaWVyX3BhY2thZ2VfaWQgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X25hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9kaXNjb3VudCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbCA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFNlcnZlclRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX29mZmVyO1xuICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuc3VwcGxpZXJfcGFja2FnZV9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdXBwbGllcl9wYWNrYWdlX2lkID0gZWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSA9IHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS5wYWNrYWdlX2VuZF9wcmljZTtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5lZGl0X3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0ucGFja2FnZV9jb3VudF9hbGwgPSAxOyAvL+W8uuWItuiuvue9ruS4ujFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuc3VibWl0X2xvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVTZXJ2ZXJPZmZlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN1Ym1pdF9sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9zZXJ2ZXI6IEpTT04uc3RyaW5naWZ5KHRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZV9zZXJ2ZXI6IEpTT04uc3RyaW5naWZ5KHRoYXQub3JkZXJfaW5mby5mcmVlX3NlcnZlciksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNrYWdlX2FycjogSlNPTi5zdHJpbmdpZnkodGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcl90b3RhbF9wcmljZTogaXRlbS5zZXJ2ZXJfdG90YWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXlfdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5X3N0YWdlc19udW06IGl0ZW0uYnlfc3RhZ2VzX251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5X3N0YWdlczogdGhhdC5ieV9zdGFnZXNfaXRlbXNfaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfdW5pdF9wcmljZTogaXRlbS5ieV9zdGFnZXNfdW5pdF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5X3N0YWdlc19wcmljZTogaXRlbS5ieV9zdGFnZXNfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWU6IGl0ZW0uc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRlX2VnZ19wcmljZTogaXRlbS5zcGxpdGVfZWdnX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyX2VuZF90b3RhbF9wcmljZTogaXRlbS5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyOiBpdGVtLnNlcnZlcl90b3RhbF9wcmljZV91cHBlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfZmlyc3Q6IGl0ZW0ucGF5bWVudF9maXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfc2Vjb25kOiBpdGVtLnBheW1lbnRfc2Vjb25kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9sYXN0OiBpdGVtLnBheW1lbnRfbGFzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfZmlyc3RfZGF0ZTogaXRlbS5wYXltZW50X2ZpcnN0X2RhdGUgPyBpdGVtLnBheW1lbnRfZmlyc3RfZGF0ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9zZWNvbmRfZGF0ZTogaXRlbS5wYXltZW50X3NlY29uZF9kYXRlID8gaXRlbS5wYXltZW50X3NlY29uZF9kYXRlIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2xhc3RfZGF0ZTogaXRlbS5wYXltZW50X2xhc3RfZGF0ZSA/IGl0ZW0ucGF5bWVudF9sYXN0X2RhdGUgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZWRpdF9zZXJ2ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVDaGVja2VkKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVfc2VydmVyc19hcnJbaW5kZXhdLmNoZWNrZWQgPSAhdGhpcy5mcmVlX3NlcnZlcnNfYXJyW2luZGV4XS5jaGVja2VkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVByb0NoZWNrZWQoZSl7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVfa2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua2V5O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9wcm9jZXNzW2luZGV4XS5pc19jb25maXJtPT0xKXtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCdjYW5jZWxQcm9jZXNzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGxhbkltcGxlbWVudEluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuX3Byb2Nlc3NfaWQ6IHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9wcm9jZXNzX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbl9wcm9jZXNzX2tleTogdmFsdWVfa2V5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2NvbmZpcm1Qcm9jZXNzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGxhbkltcGxlbWVudEluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuX3Byb2Nlc3NfaWQ6IHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9wcm9jZXNzX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbl9wcm9jZXNzX2tleTogdmFsdWVfa2V5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvQ29udHJhY3QoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vc2FsZS9jb250cmFjdD9pZD0nICsgdGhpcy5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRlVG9SZWZ1bmRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9yZWZ1bmQ/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvUGF5TG9nKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmZGVwb3NpdF9zdGF0dXM9MSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlQ29sdW1uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wZXJzb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3Byb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX2xlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wdXJjaGFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGUuZGV0YWlsLnZhbHVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF90eXBlID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzBdW3ZhbHVlc1swXV0gKyAnLScgKyB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMV1bdmFsdWVzWzFdXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZGlzdHJpYnV0aW9uUGxhbm5lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIHBsYW5uZXJfaWQ6IHRoYXQudGVhbV9tZW1iZXJzW3RoYXQuZW1wbG95ZWVfbnVtYmVyX2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRFbXBsb3llZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9udW1iZXJfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvRGVwb3QoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvZGVwb3RsaXN0P2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1Rhc3RlKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2NoZW1lL3Rhc3RlP2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkICsgJyZ1c2VyX2lkPScgKyB0aGlzLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TmVlZENvdW50KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyW2luZGV4XS5uZWVkX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U3ViamVjdFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0RGlzaGVzUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5kaXNoZXNfb3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0RGlzaGVzTmVlZENvdW50KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uZGlzaGVzX290aGVyX3NlcnZlcltpbmRleF0ubmVlZF9jb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dERpc2hlc1JlbWFyayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmRpc2hlc19vdGhlcl9zZXJ2ZXJbaW5kZXhdLnJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFJlbWFyayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlcltpbmRleF0ucmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U3ViamVjdFR5cGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE90aGVyVGl0bGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXJbaW5kZXhdLnRpdGxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlT3RoZXJTZXJ2ZXIoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgndXBkYXRlT3RoZXJTZXJ2ZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhbl9vdGhlcl9zZXJ2ZXI6IEpTT04uc3RyaW5naWZ5KHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICBkaXNoZXNfb3RoZXJfc2VydmVyOiBKU09OLnN0cmluZ2lmeSh0aGF0Lm9yZGVyX2luZm8uZGlzaGVzX290aGVyX3NlcnZlcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVPdGhlclNlcnZlcihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXIucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsZW1lbnRfaW5mby5wbGFuX290aGVyX3NlcnZlciA9IHB1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRPdGhlclNlcnZlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZnJlZV9zZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRPdGhlckNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlX3NlcnZlcnNfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZF9jb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiBlbGVtZW50LnByb2R1Y3RfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdF90eXBlOiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnQucHJvZHVjdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFyazogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9mcmVlX3NlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0QmFzZVRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvO1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmVkaXRfYmFzZSkge1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ3VwZGF0ZUJhc2VJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWRpdF9iYXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fY29udHJhY3Q6IGl0ZW0ubWFpbl9jb250cmFjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogaXRlbS51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogaXRlbS51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX25hbWU6IGl0ZW0uZ3Jvb21fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX21vYmlsZTogaXRlbS5ncm9vbV9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV93ZWNoYXQ6IGl0ZW0uZ3Jvb21fd2VjaGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbmFtZTogaXRlbS5icmlkZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbW9iaWxlOiBpdGVtLmJyaWRlX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX3dlY2hhdDogaXRlbS5icmlkZV93ZWNoYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV90eXBlOiBpdGVtLnNjaGVkdWxlX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2RhdGU6IGl0ZW0ud2VkZGluZ19kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19hZGRyZXNzOiBpdGVtLndlZGRpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfc2Vzc2lvbjogaXRlbS53ZWRkaW5nX3Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV9lbmRfdGltZTogaXRlbS5zY2hlZHVsZV9lbmRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX3JlbWFyazogaXRlbS5vcmRlcl9yZW1hcmtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9NZW51KCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3NhbGUvb3JkZXJtZW51P29yZGVyX2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1Rhc2soKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvdGFzaz9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmb3JkZXJfaWRfc3RyPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkX3N0clxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRPdGhlclNlcnZlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRfc2VydmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiX2luZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuSW1wbGVtZW50SW5mbygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJfaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE9uZVBsYW5PcmRlckluZm8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tlZENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZV9rZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgnY29uZmlybVByb2Nlc3MnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuSW1wbGVtZW50SW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5fcHJvY2Vzc19pZDogdGhhdC5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3NfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuX3Byb2Nlc3Nfa2V5OiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2NhbmNlbFByb2Nlc3MnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuSW1wbGVtZW50SW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5fcHJvY2Vzc19pZDogdGhhdC5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3NfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuX3Byb2Nlc3Nfa2V5OiB2YWx1ZV9rZXlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YWcnLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwbGFuSW1wbGVtZW50SW5mbygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgncGxhbkltcGxlbWVudEluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuaW1wbGVtZW50X2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmltcGxlbWVudF9pbmZvLnBsYW5fb3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbXBsZW1lbnRfaW5mby5wbGFuX3Byb2Nlc3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzX2NvbmZpcm0gPT0gJy0nfHxlbGVtZW50LmlzX2NvbmZpcm0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNfY29uZmlybSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNfY29uZmlybSA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0T25lUGxhbk9yZGVySW5mbygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0T25lUGxhbk9yZGVySW5mbycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0Lm9yZGVyX2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIgPT0gJy0nIHx8ICF0aGF0Lm9yZGVyX2luZm8ucGxhbl9vdGhlcl9zZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5wbGFuX290aGVyX3NlcnZlciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhhdC5vcmRlcl9pbmZvLmRpc2hlc19vdGhlcl9zZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5kaXNoZXNfb3RoZXJfc2VydmVyID0gdGhhdC5lbXB0eV9kaXNoZXNfb3RoZXJfc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb3VudFRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb3VudFRvdGFsUHJpY2UoKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLmRpc2hlc19vdGhlcl9zZXJ2ZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uZWVkX2NvdW50ICYmIGVsZW1lbnQuc3ViamVjdF9wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZV9wcmljZSA9IHBhcnNlSW50KGVsZW1lbnQubmVlZF9jb3VudCkgKiBwYXJzZUludChlbGVtZW50LnN1YmplY3RfcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSBlX3ByaWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmVlZF9jb3VudCAmJiBlbGVtZW50LnN1YmplY3RfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVfcHJpY2UgPSBwYXJzZUludChlbGVtZW50Lm5lZWRfY291bnQpICogcGFyc2VJbnQoZWxlbWVudC5zdWJqZWN0X3ByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZV9wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICs9IGVfcHJpY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGF0LnBsYW5fYWxsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlKSArIGNvdW50O1xuICAgICAgICAgICAgdGhhdC5wbGFuX2FsbF9wcmljZSA9IHRoYXQucGxhbl9hbGxfcHJpY2UudG9GaXhlZCgyKVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgICAgIGlmICh0aGF0LnVzZXIuaXNfc2NoZW1lX2xlYWRlcikge1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0TG9naW5lclRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtX21lbWJlcnMgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRPbmVQbGFuT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub3JkZXJfaW5mby5wbGFuX290aGVyX3NlcnZlciA9PSAnLScgfHwgIXRoYXQub3JkZXJfaW5mby5wbGFuX290aGVyX3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnBsYW5fb3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGF0Lm9yZGVyX2luZm8uZGlzaGVzX290aGVyX3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLmRpc2hlc19vdGhlcl9zZXJ2ZXIgPSB0aGF0LmVtcHR5X2Rpc2hlc19vdGhlcl9zZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2dldFdlZGRpbmdQYWNrYWdlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQud2VkZGluZ19wYWdlID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSB8fCAhdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXSA9IHRoYXQud2VkZGluZ19wYWdlWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0UGxhblBhY2thZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuX3BhY2thZ2UgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlIHx8ICF0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzFdID0gdGhhdC5wbGFuX3BhY2thZ2VbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb3VudFRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuSW1wbGVtZW50SW5mbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRQbGFuUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZnJlZV9zZXJ2ZXJzX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRlYW1faWQ6IDE0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19