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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref, _this$data, _this$methods;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" } }, _this.$events = {}, _this.components = {
            css: _css2.default, //样式表
            header: _header2.default
        }, _this.data = (_this$data = {
            isopacity: true,
            title: '客资信息',
            isback: true,
            order_info: null,
            id: -1,
            edit_base: false,
            edit_server: false,
            wedding_page: null }, _defineProperty(_this$data, 'wedding_page', []), _defineProperty(_this$data, 'wedding_index', 0), _defineProperty(_this$data, 'plan_package', null), _defineProperty(_this$data, 'plan_index', 0), _defineProperty(_this$data, 'discout_index', 0), _defineProperty(_this$data, 'free_arr', ['不免息', '免息']), _defineProperty(_this$data, 'discout', null), _defineProperty(_this$data, 'free_index', 0), _defineProperty(_this$data, 'package_index', -1), _defineProperty(_this$data, 'pay_index', 0), _defineProperty(_this$data, 'pay_method', []), _defineProperty(_this$data, 'pay_type_name', ''), _defineProperty(_this$data, 'teams', null), _defineProperty(_this$data, 'teams_index', 0), _defineProperty(_this$data, 'show_base_info', false), _defineProperty(_this$data, 'show_server_info', false), _defineProperty(_this$data, 'show_pay_pro', false), _defineProperty(_this$data, 'dis_edit', true), _defineProperty(_this$data, 'other_service_range', [['人员类', '工程类', '租赁类', '采购类'], ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']]), _defineProperty(_this$data, 'other_service_person', ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']), _defineProperty(_this$data, 'other_service_project', ['制作类-广告制作', '鲜花', '花艺师', '搭建-户外音响', '灯光', '摇臂']), _defineProperty(_this$data, 'other_service_lease', ['礼服', '婚车', '大巴', '婚房', '车头花', '手捧花']), _defineProperty(_this$data, 'other_service_purchase', ['甜品', '喜糖', '伴手礼', '气球', '西装', '烟火', '停车券', '快递费', '请帖']), _defineProperty(_this$data, 'other_service_muiti_index', [0, 0]), _defineProperty(_this$data, 'other_service_total_price', 0), _defineProperty(_this$data, 'display_weeding_schedule', false), _defineProperty(_this$data, 'by_stages_items_index', 0), _defineProperty(_this$data, 'free_servers_arr', ''), _defineProperty(_this$data, 'display_free_service', false), _defineProperty(_this$data, 'free_server_eidt_index', 0), _defineProperty(_this$data, 'display_edit_free_count', false), _defineProperty(_this$data, 'edit_free_count_num', ''), _defineProperty(_this$data, 'intentionInfo', null), _defineProperty(_this$data, 'intent_index', 0), _defineProperty(_this$data, 'display_return', false), _defineProperty(_this$data, 'sub_company', []), _this$data), _this.methods = (_this$methods = {
            bindSubCompanyChange: function bindSubCompanyChange(e) {
                this.order_info.base_info.sub_company_num = this.sub_company[e.detail.value].sub_company_num;
                this.order_info.base_info.sub_company_name = this.sub_company[e.detail.value].sub_company_name;
                this.order_info.base_info.sub_company_id = this.sub_company[e.detail.value].sub_company_id;
            },
            deleteWeedingSchedule: function deleteWeedingSchedule(e) {
                var index = e.currentTarget.dataset.index;
                var id = this.order_info.sec_schedule_session[index].id;
                var that = this;

                _request2.default.get('delWeddingSchedule', {
                    200: function _(result) {
                        that.order_info.sec_schedule_session.splice(index, 1);
                        that.$apply();
                    }
                }, {
                    id: id
                });
            },
            bindFirstDateChange: function bindFirstDateChange(e) {
                this.order_info.server_offer.payment_first_date = e.detail.value;
            },
            bindSecondDateChange: function bindSecondDateChange(e) {
                this.order_info.server_offer.payment_second_date = e.detail.value;
            },
            bindLastDateChange: function bindLastDateChange(e) {
                this.order_info.server_offer.payment_last_date = e.detail.value;
            },
            cancelReturn: function cancelReturn() {
                this.display_return = false;
            },
            confirmReturn: function confirmReturn() {
                var that = this;
                _request2.default.get('returnOrder', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    order_id: that.order_info.base_info.order_id
                });
            },
            returnOrder: function returnOrder() {
                this.display_return = true;
            },
            navigateToTaste: function navigateToTaste(e) {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/taste?id=' + this.order_info.base_info.order_id + '&user_id=' + this.id
                });
            },
            bindAttentChange: function bindAttentChange(e) {
                this.intent_index = e.detail.value;
                this.order_info.base_info.intention_name = this.intentionInfo[this.intent_index].intention_name;
                this.order_info.base_info.intention_id = this.intentionInfo[this.intent_index].id;
            },
            bindDateChange: function bindDateChange(e) {
                this.order_info.base_info.sign_date = e.detail.value;
            },
            bindInputByStagesBeforePrice: function bindInputByStagesBeforePrice(e) {
                this.order_info.server_offer.by_stages_before_price = e.detail.value;
            },
            bindInputFreeCount: function bindInputFreeCount(e) {
                this.edit_free_count_num = e.detail.value;
            },
            deleteItem: function deleteItem() {
                // this.order_info.free_server.splice(this.free_server_eidt_index, 1);
                this.display_edit_free_count = false;
            },
            changeItem: function changeItem() {
                this.order_info.free_server[this.free_server_eidt_index].need_count = this.edit_free_count_num;
                this.display_edit_free_count = false;
            },
            editFreeServiceCount: function editFreeServiceCount(e) {
                this.free_server_eidt_index = e.currentTarget.dataset.index;
                this.display_edit_free_count = true;
            },
            freeServiceAdd: function freeServiceAdd() {
                var _this2 = this;

                this.display_free_service = false;
                var purpose_free = [];
                this.free_servers_arr.forEach(function (element) {
                    if (_this2.order_info.free_server) {
                        if (element.checked) {
                            var need_count = 1;
                            _this2.order_info.free_server.forEach(function (el) {
                                if (element.id == el.id) {
                                    console.log('有的');
                                    need_count = el.need_count;
                                }
                            });
                            purpose_free.push({
                                need_count: need_count,
                                id: element.id,
                                subject_price: element.product_price,
                                subject_cost: element.product_cost,
                                subject_type: element.product_category,
                                title: element.product_name
                            });
                        }
                    } else {
                        if (element.checked) {
                            purpose_free.push({
                                need_count: 1,
                                id: element.id,
                                subject_price: element.product_price,
                                subject_cost: element.product_cost,
                                subject_type: element.product_category,
                                title: element.product_name
                            });
                        }
                    }
                });
                this.order_info.free_server = purpose_free;
            },
            toggleChecked: function toggleChecked(e) {
                var index = e.currentTarget.dataset.index;
                this.free_servers_arr[index].checked = !this.free_servers_arr[index].checked;
            },
            goToContract: function goToContract() {
                _wepy2.default.navigateTo({
                    url: 'contract?id=' + this.id
                });
            },
            navigateToRefundPage: function navigateToRefundPage() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/refund?order_id=' + this.order_info.base_info.order_id
                });
            },
            editWeedingSchedule: function editWeedingSchedule(e) {
                var info = this.order_info.schedule_session;
                var del = e.currentTarget.dataset.del;
                if (del == 2) {
                    //副档期
                    _wepy2.default.navigateTo({
                        url: 'schedule?id=' + info.id + '&order_id=' + this.order_info.base_info.order_id + '&schedule_type=' + info.schedule_type +
                        // '&area_name=' + info.area_name +
                        // '&schedule_date=' + info.schedule_date +
                        // '&session=' + info.session +
                        // '&schedule_end_date=' + info.schedule_end_date+
                        '&del_flg=' + del
                    });
                } else {
                    _wepy2.default.navigateTo({
                        url: 'schedule?id=' + info.id + '&order_id=' + this.order_info.base_info.order_id + '&schedule_type=' + info.schedule_type + '&area_name=' + info.area_name + '&schedule_date=' + info.schedule_date + '&session=' + info.session + '&schedule_end_date=' + info.schedule_end_date
                    });
                }
            },
            toggleWeedingScheduleInfo: function toggleWeedingScheduleInfo() {
                this.display_weeding_schedule = !this.display_weeding_schedule;
                this.show_server_info = false;
                this.show_pay_pro = false;
                this.show_base_info = false;
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
                this.order_info.other_server[index].subject_type = this.other_service_range[0][values[0]] + '-' + this.other_service_range[1][values[1]];
            },
            bindPresentServiceTypeChange: function bindPresentServiceTypeChange(e) {
                var index = e.detail.value;
                var free_index = e.currentTarget.dataset.index;
                this.order_info.free_server[free_index].subject_type = this.free_servers_arr[index].product_category;
                this.order_info.free_server[free_index].title = this.free_servers_arr[index].product_name;
                this.order_info.free_server[free_index].subject_price = this.free_servers_arr[index].product_price;
                this.order_info.free_server[free_index].need_count = 1;
            },
            togglePayPro: function togglePayPro() {
                this.show_pay_pro = !this.show_pay_pro;
                this.show_server_info = false;
                this.show_base_info = false;
                this.display_weeding_schedule = false;
            },
            toggleDiplayServerInfo: function toggleDiplayServerInfo() {
                this.show_server_info = !this.show_server_info;
                this.show_pay_pro = false;
                this.show_base_info = false;
                this.display_weeding_schedule = false;
            },
            toggleDisplayBaseInfo: function toggleDisplayBaseInfo() {
                this.show_base_info = !this.show_base_info;
                this.show_server_info = false;
                this.show_pay_pro = false;
                this.display_weeding_schedule = false;
            },
            bindTeamChange: function bindTeamChange(e) {
                this.teams_index = e.detail.value;
            },
            bindPayChange: function bindPayChange(e) {
                //invalid
                this.pay_index = e.detail.value;
                this.order_info.server_offer.pay_type_name = this.pay_method[this.pay_index].name;
                this.order_info.server_offer.payment_type = this.pay_method[this.pay_index].id;
            },
            bindIntallmentChange: function bindIntallmentChange(e) {
                // this.by_stages_items_index=e.detail.value;
                this.order_info.server_offer.by_stages = this.by_stages_items_index = e.detail.value;
                // this.order_info.server_offer.pay_type_name = this.by_stages_items[this.by_stages_items_index];
                // this.order_info.server_offer.payment_type = this.by_stages_items_index;
                this.order_info.server_offer.by_stages_name = this.order_info.by_stages_items[this.by_stages_items_index];
            },
            bindInputMainContract: function bindInputMainContract(e) {
                this.order_info.base_info.main_contract = e.detail.value;
            },
            goToMenu: function goToMenu() {
                _wepy2.default.navigateTo({
                    url: 'ordermenu?order_id=' + this.order_info.base_info.order_id
                });
            },
            deleteOtherServer: function deleteOtherServer(e) {
                var index = e.currentTarget.dataset.index;
                var pur = [];
                var i = 0;
                this.order_info.other_server.forEach(function (element) {
                    if (i != index) {
                        pur.push(element);
                    }
                    i++;
                });
                this.order_info.other_server = pur;
            },
            deletePresentService: function deletePresentService(e) {
                var index = e.currentTarget.dataset.index;
                var pur = [];
                var i = 0;
                this.order_info.free_server.forEach(function (element) {
                    if (i != index) {
                        pur.push(element);
                    }
                    i++;
                });
                this.order_info.free_server = pur;
            },
            addOtherServer: function addOtherServer() {
                if (!this.order_info.other_server || this.order_info.server_package == '-') {
                    this.order_info.other_server = [];
                }
                this.order_info.other_server.push({
                    need_count: '',
                    subject_price: '',
                    subject_type: '',
                    title: ''
                });
            },
            addPresentService: function addPresentService() {
                var _this3 = this;

                this.display_free_service = true;
                if (this.order_info.free_server) {
                    this.order_info.free_server.forEach(function (element) {
                        _this3.free_servers_arr.forEach(function (el) {
                            if (element.id == el.id) {
                                el['checked'] = true;
                            }
                        });
                    });
                }
            },
            bindInputPaymentLast: function bindInputPaymentLast(e) {
                this.order_info.server_offer.payment_last = e.detail.value;
            },
            bindInputPaymentSecond: function bindInputPaymentSecond(e) {
                this.order_info.server_offer.payment_second = e.detail.value;
            },
            bindInputPaymentFirst: function bindInputPaymentFirst(e) {
                this.order_info.server_offer.payment_first = e.detail.value;
            },
            bindInputServerEndTotalUpper: function bindInputServerEndTotalUpper(e) {
                this.order_info.server_offer.server_total_price_upper = e.detail.value;
            },
            bindInputServerEndTotalPrice: function bindInputServerEndTotalPrice(e) {
                this.order_info.server_offer.server_end_total_price = e.detail.value;
            },
            bindInputSpliteEggPrice: function bindInputSpliteEggPrice(e) {
                this.order_info.server_offer.splite_egg_price = e.detail.value;
            },
            bindBlurSpliteEggPrice: function bindBlurSpliteEggPrice() {
                if (this.order_info.server_offer.splite_egg_price > 999) {
                    this.order_info.server_offer.splite_egg_price = 999;
                }
                this.order_info.server_offer.server_end_total_price = this.order_info.server_offer.by_stages_price - this.order_info.server_offer.splite_egg_price;
            },
            bindFreeChange: function bindFreeChange(e) {
                this.order_info.server_offer.splite_egg_interest_free = e.detail.value;
                this.free_index = e.detail.value;
                console.log('changed free for', this.order_info.server_offer.splite_egg_interest_free);
            },
            bindInputByStagesPrice: function bindInputByStagesPrice(e) {
                this.order_info.server_offer.by_stages_price = e.detail.value;
                this.order_info.server_offer.server_end_total_price = this.order_info.server_offer.by_stages_price - this.order_info.server_offer.splite_egg_price;
            },
            bindInputByStagesUnitPrice: function bindInputByStagesUnitPrice(e) {
                this.order_info.server_offer.by_stages_unit_price = e.detail.value;
            },
            bindInputByStagesNum: function bindInputByStagesNum(e) {
                this.order_info.server_offer.by_stages_num = e.detail.value;
            },
            bindInputPayType: function bindInputPayType(e) {
                this.order_info.server_offer.pay_type = e.detail.value;
            },
            bindInputServerTotalPrice: function bindInputServerTotalPrice(e) {
                this.order_info.server_offer.server_total_price = e.detail.value;
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
                this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindInputPTotalPrice: function bindInputPTotalPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].total_price = e.detail.value;
            },
            bindInputPackageCountAll: function bindInputPackageCountAll(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count_all = e.detail.value;
                this.order_info.server_package[index].total_price = this.order_info.server_package[index].package_end_price * this.order_info.server_package[index].package_count_all;
                this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindInputPackageCountAddPrice: function bindInputPackageCountAddPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count_add_price = e.detail.value;
            },
            bindInputPackageCountAdd: function bindInputPackageCountAdd(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count_add = e.detail.value;
            },
            bindInputPackageCount: function bindInputPackageCount(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count = e.detail.value;
            },
            bindInputPackageEndPrice: function bindInputPackageEndPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_end_price = e.detail.value;
                this.order_info.server_package[index].total_price = this.order_info.server_package[index].package_end_price * this.order_info.server_package[index].package_count_all;
                this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindInputNeedCount: function bindInputNeedCount(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].need_count = e.detail.value;
            },
            bindInputSubjectPrice: function bindInputSubjectPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].subject_price = e.detail.value;
            },
            bindInputSubjectType: function bindInputSubjectType(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].subject_type = e.detail.value;
            },
            bindInputOtherTitle: function bindInputOtherTitle(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].title = e.detail.value;
            },
            saveIndex: function saveIndex(e) {
                this.package_index = e.currentTarget.dataset.index;
                console.log(this.package_index);
            },
            bindWeddingPackageChange: function bindWeddingPackageChange(e) {
                this.wedding_index = e.detail.value;
                var package_index = e.currentTarget.dataset.index;
                this.order_info.server_package[package_index].package_name = this.wedding_page[this.wedding_index].package_name;
                this.order_info.server_package[package_index].package_price = this.wedding_page[this.wedding_index].package_price;
                this.order_info.server_package[package_index].supplier_package_id = this.wedding_page[this.wedding_index].id;
                this.order_info.server_package[package_index].package_discount_name = '';
                this.order_info.server_package[package_index].package_discount = '';
                this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            bindPlanPackageChange: function bindPlanPackageChange(e) {
                this.plan_index = e.detail.value;
                var package_index = e.currentTarget.dataset.index;
                this.order_info.server_package[package_index].package_name = this.plan_package[this.plan_index].package_name;
                this.order_info.server_package[package_index].package_price = this.plan_package[this.plan_index].package_price;
                this.order_info.server_package[package_index].supplier_package_id = this.plan_package[this.plan_index].id;
                this.order_info.server_package[package_index].package_discount_name = '';
                this.order_info.server_package[package_index].package_discount = '';
                this.order_info.server_offer.server_total_price = parseInt(this.order_info.server_package[0].total_price) + parseInt(this.order_info.server_package[1].total_price);
            },
            editServerToggle: function editServerToggle() {
                var that = this;
                var item = that.order_info.server_offer;
                if (!that.order_info.server_package || that.order_info.server_package.length <= 0 || that.wedding_page.length <= 0 || that.plan_package.length <= 0) {
                    _wepy2.default.showToast({
                        title: '没有可选服务套餐，请联系管理员', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    return false;
                }
                that.order_info.server_package.forEach(function (element) {
                    if (!element.supplier_package_id) {
                        element.supplier_package_id = element.id;
                    }
                });
                that.order_info.server_package[1].total_price = that.order_info.server_package[1].package_end_price;
                if (that.edit_server) {
                    if (parseInt(that.order_info.server_package[0].package_count_all) <= 0) {
                        _wepy2.default.showToast({
                            title: '请输入所订桌数', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        return false;
                    }
                    if (!parseInt(that.order_info.server_package[1].total_price)) {
                        _wepy2.default.showToast({
                            title: '请填写正确的套餐优惠', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        return false;
                    }
                    if (!parseInt(that.order_info.server_offer.server_total_price)) {
                        _wepy2.default.showToast({
                            title: '服务总价格格式正确', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        return false;
                    }
                    that.order_info.server_package[1].package_count_all = 1; //强制设置为1
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
                            that.getOneOrderInfo();
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
                        by_stages_before_price: item.by_stages_before_price,
                        payment_first_date: item.payment_first_date ? item.payment_first_date : '',
                        payment_second_date: item.payment_second_date ? item.payment_second_date : '',
                        payment_last_date: item.payment_last_date ? item.payment_last_date : ''
                    });
                } else {
                    that.edit_server = true;
                }
            },
            bindInputUserName: function bindInputUserName(e) {
                this.order_info.base_info.user_name = e.detail.value;
            },
            bindInputUserMobile: function bindInputUserMobile(e) {
                this.order_info.base_info.user_mobile = e.detail.value;
            },
            bindInputGroomName: function bindInputGroomName(e) {
                this.order_info.base_info.groom_name = e.detail.value;
            },
            bindInputGroomMobile: function bindInputGroomMobile(e) {
                this.order_info.base_info.groom_mobile = e.detail.value;
            },
            bindInputGroomWechat: function bindInputGroomWechat(e) {
                this.order_info.base_info.groom_wechat = e.detail.value;
            },
            bindInputBrideName: function bindInputBrideName(e) {
                this.order_info.base_info.bride_name = e.detail.value;
            },
            bindInputBrideMobile: function bindInputBrideMobile(e) {
                this.order_info.base_info.bride_mobile = e.detail.value;
            },
            bindInputBrideWechat: function bindInputBrideWechat(e) {
                this.order_info.base_info.bride_wechat = e.detail.value;
            },
            bindInputScheduleType: function bindInputScheduleType(e) {
                this.order_info.base_info.schedule_type = e.detail.value;
            },
            bindInputWeddingDate: function bindInputWeddingDate(e) {
                this.order_info.base_info.wedding_date = e.detail.value;
            },
            bindInputWeedingAddress: function bindInputWeedingAddress(e) {
                this.order_info.base_info.wedding_address = e.detail.value;
            },
            bindInputWeedingSession: function bindInputWeedingSession(e) {
                this.order_info.base_info.wedding_session = e.detail.value;
            },
            bindInputScheduleEndTime: function bindInputScheduleEndTime(e) {
                this.order_info.base_info.schedule_end_time = e.detail.value;
            }
        }, _defineProperty(_this$methods, 'bindInputUserName', function bindInputUserName(e) {
            this.order_info.base_info.order_remark = e.detail.value;
        }), _defineProperty(_this$methods, 'editBaseToggle', function editBaseToggle() {
            var that = this;
            var item = that.order_info.base_info;
            if (that.edit_base) {
                // if(!item.sub_company_num){
                //     wepy.showToast({
                //       title: '请选择签约公司', //提示的内容,
                //       icon: 'none', //图标,
                //       duration: 2000, //延迟时间,
                //       mask: true, //显示透明蒙层，防止触摸穿透,
                //       success: res => {}
                //     });

                //     return false;
                // }
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
                    order_remark: item.order_remark,
                    intention_id: item.intention_id,
                    user_id: item.user_id,
                    sign_date: item.sign_date,
                    sub_company_num: item.sub_company_num,
                    sub_company_id: item.sub_company_id
                });
            } else {
                that.edit_base = true;
            }
        }), _defineProperty(_this$methods, 'submit', function submit() {
            var that = this;
            if (!this.order_info.base_info.sign_date) {
                _wepy2.default.showToast({
                    title: '签约日期不能为空', //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: true, //显示透明蒙层，防止触摸穿透,
                    success: function success(res) {}
                });
                return false;
            }
            _wepy2.default.showLoading({
                title: '提交中...', //提示的内容,
                mask: true, //显示透明蒙层，防止触摸穿透,
                success: function success(res) {}
            });
            _request2.default.get('submitOrder', {
                200: function _(result) {
                    _wepy2.default.hideLoading();

                    _wepy2.default.showToast({
                        title: '提交成功', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                    that.order_info.base_info.order_status = 2;
                    that.$apply();
                    // that.$apply();
                },
                202: function _(result) {
                    _wepy2.default.hideLoading();

                    _wepy2.default.showToast({
                        title: result.data.msg, //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
            }, {
                order_id: this.order_info.base_info.order_id,
                sub_company_id: this.order_info.base_info.sub_company_id,
                planning_team_id: this.teams[this.teams_index].id
            });
        }), _defineProperty(_this$methods, 'toggleTab', function toggleTab(e) {
            this.tab_index = e.currentTarget.dataset.index;
            if (this.tab_index == 1) {
                this.followUp();
            } else if (this.tab_index == 2) {
                this.getOrderInfo();
            }
        }), _defineProperty(_this$methods, 'goToPayLog', function goToPayLog() {
            _wepy2.default.navigateTo({
                url: '/pages/common/sale/orderpay?order_id=' + this.order_info.base_info.order_id + '&deposit_status=0'
            });
        }), _defineProperty(_this$methods, 'goToPayLogCheck', function goToPayLogCheck(e) {
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
        }), _this$methods), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('getInitData', {
                200: function _(result) {
                    that.intentionInfo = result.data.intentionInfo;
                    that.$apply();
                }
            });

            _request2.default.get('getSubCompanyList', {
                200: function _(result) {
                    that.sub_company = result.data.data;
                    that.$apply();
                }
            }, {});
        }
    }, {
        key: 'getOrderInfoCallback',
        value: function getOrderInfoCallback() {
            var that = this;
            that.free_index = that.order_info.server_offer.splite_egg_interest_free;
            that.dis_edit = that.order_info.base_info.order_status == 0 || that.order_info.base_info.order_status == 4;
            if (!that.order_info.other_server || that.order_info.other_server == '-') {
                that.order_info.other_server = [];
            };
            var count_other_price = 0;
            that.order_info.other_server.forEach(function (element) {
                count_other_price += element.subject_price * element.need_count;
            });
            that.other_service_total_price = count_other_price;
        }
    }, {
        key: 'getOneOrderInfo',
        value: function getOneOrderInfo() {
            var that = this;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.$apply();
                    that.getOrderInfoCallback();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            // that.id = options.id;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.$apply();
                    that.getOrderInfoCallback();
                    _request2.default.get('getWeddingPackage', {
                        200: function _(result) {
                            that.wedding_page = result.data.data;
                            // that.wedding_page.forEach(element => {
                            //     that.wedding_page.push(element.package_name);
                            // });
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
                            // that.plan_package.forEach(element => {
                            //     that.plan_package.push(element.package_name);
                            // });
                            if (!that.order_info.server_package || !that.order_info.server_package[1]) {
                                that.order_info.server_package[1] = that.plan_package[0];
                            }
                            that.$apply();
                        }
                    }, {
                        user_id: that.id
                    });
                    // rq.get('getPackageDiscount', {
                    //     200: result => {
                    //         that.discout = result.data.data;
                    //         that.$apply();
                    //     }
                    // }, {
                    //     user_id: that.id
                    // })
                    // //获取可选支付类型
                    // rq.get('getPayType', {
                    //     200: result => {
                    //         that.pay_method = result.data.data;
                    //         that.$apply();
                    //     }
                    // }, {})
                    //获取可选团队
                    _request2.default.get('getTeams', {
                        200: function _(result) {
                            that.teams = result.data.data;
                            var i = 0;
                            that.teams.forEach(function (element) {
                                if (element.id == that.order_info.base_info.planning_team_id) {
                                    that.teams_index = i;
                                }
                                i++;
                            });
                            that.$apply();
                        }
                    }, {
                        team_type: 1
                    });
                    _request2.default.get('getFreeServerPackageProduct', {
                        200: function _(result) {
                            that.free_servers_arr = result.data.data;
                            that.$apply();
                        }
                    }, {});
                }
            }, {
                user_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/ordermsg'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybXNnLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJ3ZWRkaW5nX3BhZ2UiLCJtZXRob2RzIiwiYmluZFN1YkNvbXBhbnlDaGFuZ2UiLCJlIiwiYmFzZV9pbmZvIiwic3ViX2NvbXBhbnlfbnVtIiwic3ViX2NvbXBhbnkiLCJkZXRhaWwiLCJ2YWx1ZSIsInN1Yl9jb21wYW55X25hbWUiLCJzdWJfY29tcGFueV9pZCIsImRlbGV0ZVdlZWRpbmdTY2hlZHVsZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWNfc2NoZWR1bGVfc2Vzc2lvbiIsInRoYXQiLCJycSIsImdldCIsInNwbGljZSIsIiRhcHBseSIsImJpbmRGaXJzdERhdGVDaGFuZ2UiLCJzZXJ2ZXJfb2ZmZXIiLCJwYXltZW50X2ZpcnN0X2RhdGUiLCJiaW5kU2Vjb25kRGF0ZUNoYW5nZSIsInBheW1lbnRfc2Vjb25kX2RhdGUiLCJiaW5kTGFzdERhdGVDaGFuZ2UiLCJwYXltZW50X2xhc3RfZGF0ZSIsImNhbmNlbFJldHVybiIsImRpc3BsYXlfcmV0dXJuIiwiY29uZmlybVJldHVybiIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9yZGVyX2lkIiwicmV0dXJuT3JkZXIiLCJuYXZpZ2F0ZVRvVGFzdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZEF0dGVudENoYW5nZSIsImludGVudF9pbmRleCIsImludGVudGlvbl9uYW1lIiwiaW50ZW50aW9uSW5mbyIsImludGVudGlvbl9pZCIsImJpbmREYXRlQ2hhbmdlIiwic2lnbl9kYXRlIiwiYmluZElucHV0QnlTdGFnZXNCZWZvcmVQcmljZSIsImJ5X3N0YWdlc19iZWZvcmVfcHJpY2UiLCJiaW5kSW5wdXRGcmVlQ291bnQiLCJlZGl0X2ZyZWVfY291bnRfbnVtIiwiZGVsZXRlSXRlbSIsImRpc3BsYXlfZWRpdF9mcmVlX2NvdW50IiwiY2hhbmdlSXRlbSIsImZyZWVfc2VydmVyIiwiZnJlZV9zZXJ2ZXJfZWlkdF9pbmRleCIsIm5lZWRfY291bnQiLCJlZGl0RnJlZVNlcnZpY2VDb3VudCIsImZyZWVTZXJ2aWNlQWRkIiwiZGlzcGxheV9mcmVlX3NlcnZpY2UiLCJwdXJwb3NlX2ZyZWUiLCJmcmVlX3NlcnZlcnNfYXJyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGVja2VkIiwiZWwiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInN1YmplY3RfcHJpY2UiLCJwcm9kdWN0X3ByaWNlIiwic3ViamVjdF9jb3N0IiwicHJvZHVjdF9jb3N0Iiwic3ViamVjdF90eXBlIiwicHJvZHVjdF9jYXRlZ29yeSIsInByb2R1Y3RfbmFtZSIsInRvZ2dsZUNoZWNrZWQiLCJnb1RvQ29udHJhY3QiLCJuYXZpZ2F0ZVRvUmVmdW5kUGFnZSIsImVkaXRXZWVkaW5nU2NoZWR1bGUiLCJpbmZvIiwic2NoZWR1bGVfc2Vzc2lvbiIsImRlbCIsInNjaGVkdWxlX3R5cGUiLCJhcmVhX25hbWUiLCJzY2hlZHVsZV9kYXRlIiwic2Vzc2lvbiIsInNjaGVkdWxlX2VuZF9kYXRlIiwidG9nZ2xlV2VlZGluZ1NjaGVkdWxlSW5mbyIsImRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSIsInNob3dfc2VydmVyX2luZm8iLCJzaG93X3BheV9wcm8iLCJzaG93X2Jhc2VfaW5mbyIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJvdGhlcl9zZXJ2aWNlX3JhbmdlIiwib3RoZXJfc2VydmljZV9wZXJzb24iLCJvdGhlcl9zZXJ2aWNlX3Byb2plY3QiLCJvdGhlcl9zZXJ2aWNlX2xlYXNlIiwib3RoZXJfc2VydmljZV9wdXJjaGFzZSIsImJpbmRPdGhlclNlcnZpY2VUeXBlQ2hhbmdlIiwidmFsdWVzIiwib3RoZXJfc2VydmVyIiwiYmluZFByZXNlbnRTZXJ2aWNlVHlwZUNoYW5nZSIsImZyZWVfaW5kZXgiLCJ0b2dnbGVQYXlQcm8iLCJ0b2dnbGVEaXBsYXlTZXJ2ZXJJbmZvIiwidG9nZ2xlRGlzcGxheUJhc2VJbmZvIiwiYmluZFRlYW1DaGFuZ2UiLCJ0ZWFtc19pbmRleCIsImJpbmRQYXlDaGFuZ2UiLCJwYXlfaW5kZXgiLCJwYXlfdHlwZV9uYW1lIiwicGF5X21ldGhvZCIsIm5hbWUiLCJwYXltZW50X3R5cGUiLCJiaW5kSW50YWxsbWVudENoYW5nZSIsImJ5X3N0YWdlcyIsImJ5X3N0YWdlc19pdGVtc19pbmRleCIsImJ5X3N0YWdlc19uYW1lIiwiYnlfc3RhZ2VzX2l0ZW1zIiwiYmluZElucHV0TWFpbkNvbnRyYWN0IiwibWFpbl9jb250cmFjdCIsImdvVG9NZW51IiwiZGVsZXRlT3RoZXJTZXJ2ZXIiLCJwdXIiLCJpIiwiZGVsZXRlUHJlc2VudFNlcnZpY2UiLCJhZGRPdGhlclNlcnZlciIsInNlcnZlcl9wYWNrYWdlIiwiYWRkUHJlc2VudFNlcnZpY2UiLCJiaW5kSW5wdXRQYXltZW50TGFzdCIsInBheW1lbnRfbGFzdCIsImJpbmRJbnB1dFBheW1lbnRTZWNvbmQiLCJwYXltZW50X3NlY29uZCIsImJpbmRJbnB1dFBheW1lbnRGaXJzdCIsInBheW1lbnRfZmlyc3QiLCJiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFVwcGVyIiwic2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyIiwiYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZSIsInNlcnZlcl9lbmRfdG90YWxfcHJpY2UiLCJiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZSIsInNwbGl0ZV9lZ2dfcHJpY2UiLCJiaW5kQmx1clNwbGl0ZUVnZ1ByaWNlIiwiYnlfc3RhZ2VzX3ByaWNlIiwiYmluZEZyZWVDaGFuZ2UiLCJzcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWUiLCJiaW5kSW5wdXRCeVN0YWdlc1ByaWNlIiwiYmluZElucHV0QnlTdGFnZXNVbml0UHJpY2UiLCJieV9zdGFnZXNfdW5pdF9wcmljZSIsImJpbmRJbnB1dEJ5U3RhZ2VzTnVtIiwiYnlfc3RhZ2VzX251bSIsImJpbmRJbnB1dFBheVR5cGUiLCJwYXlfdHlwZSIsImJpbmRJbnB1dFNlcnZlclRvdGFsUHJpY2UiLCJzZXJ2ZXJfdG90YWxfcHJpY2UiLCJiaW5kV2VkZGluZ0Rpc2NvdW50Q2hhbmdlIiwicGFja2FnZV9kaXNjb3VudF9uYW1lIiwid2VkZGluZ19pbmRleCIsInBhY2thZ2VfZGlzY291bnRfbGlzdCIsImRpc2NvdW50X25hbWUiLCJwYWNrYWdlX2Rpc2NvdW50IiwiZGlzY291bnRfbGV2ZWwiLCJwYWNrYWdlX2VuZF9wcmljZSIsImFmdGVyX2Rpc2NvdW50IiwidG90YWxfcHJpY2UiLCJwYWNrYWdlX2NvdW50X2FsbCIsInBsYW5fcGFja2FnZSIsInBsYW5faW5kZXgiLCJwYXJzZUludCIsImJpbmRJbnB1dFBUb3RhbFByaWNlIiwiYmluZElucHV0UGFja2FnZUNvdW50QWxsIiwiYmluZElucHV0UGFja2FnZUNvdW50QWRkUHJpY2UiLCJwYWNrYWdlX2NvdW50X2FkZF9wcmljZSIsImJpbmRJbnB1dFBhY2thZ2VDb3VudEFkZCIsInBhY2thZ2VfY291bnRfYWRkIiwiYmluZElucHV0UGFja2FnZUNvdW50IiwicGFja2FnZV9jb3VudCIsImJpbmRJbnB1dFBhY2thZ2VFbmRQcmljZSIsImJpbmRJbnB1dE5lZWRDb3VudCIsImJpbmRJbnB1dFN1YmplY3RQcmljZSIsImJpbmRJbnB1dFN1YmplY3RUeXBlIiwiYmluZElucHV0T3RoZXJUaXRsZSIsInNhdmVJbmRleCIsInBhY2thZ2VfaW5kZXgiLCJiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UiLCJwYWNrYWdlX25hbWUiLCJwYWNrYWdlX3ByaWNlIiwic3VwcGxpZXJfcGFja2FnZV9pZCIsImJpbmRQbGFuUGFja2FnZUNoYW5nZSIsImVkaXRTZXJ2ZXJUb2dnbGUiLCJpdGVtIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJnZXRPbmVPcmRlckluZm8iLCJKU09OIiwic3RyaW5naWZ5IiwicGFja2FnZV9hcnIiLCJiaW5kSW5wdXRVc2VyTmFtZSIsInVzZXJfbmFtZSIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJ1c2VyX21vYmlsZSIsImJpbmRJbnB1dEdyb29tTmFtZSIsImdyb29tX25hbWUiLCJiaW5kSW5wdXRHcm9vbU1vYmlsZSIsImdyb29tX21vYmlsZSIsImJpbmRJbnB1dEdyb29tV2VjaGF0IiwiZ3Jvb21fd2VjaGF0IiwiYmluZElucHV0QnJpZGVOYW1lIiwiYnJpZGVfbmFtZSIsImJpbmRJbnB1dEJyaWRlTW9iaWxlIiwiYnJpZGVfbW9iaWxlIiwiYmluZElucHV0QnJpZGVXZWNoYXQiLCJicmlkZV93ZWNoYXQiLCJiaW5kSW5wdXRTY2hlZHVsZVR5cGUiLCJiaW5kSW5wdXRXZWRkaW5nRGF0ZSIsIndlZGRpbmdfZGF0ZSIsImJpbmRJbnB1dFdlZWRpbmdBZGRyZXNzIiwid2VkZGluZ19hZGRyZXNzIiwiYmluZElucHV0V2VlZGluZ1Nlc3Npb24iLCJ3ZWRkaW5nX3Nlc3Npb24iLCJiaW5kSW5wdXRTY2hlZHVsZUVuZFRpbWUiLCJzY2hlZHVsZV9lbmRfdGltZSIsIm9yZGVyX3JlbWFyayIsInVzZXJfaWQiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwib3JkZXJfc3RhdHVzIiwicmVzdWx0IiwibXNnIiwicGxhbm5pbmdfdGVhbV9pZCIsInRlYW1zIiwidGFiX2luZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJpc19kZXBvc2l0IiwiZGVwb3NpdCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJkaXNfZWRpdCIsImNvdW50X290aGVyX3ByaWNlIiwib3RoZXJfc2VydmljZV90b3RhbF9wcmljZSIsImdldE9yZGVySW5mb0NhbGxiYWNrIiwidGVhbV90eXBlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FB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aUNBQUtJLE1BQUw7QUFDSDtBQVZvQixxQkFBekIsRUFXRztBQUNDK00saUNBQVNuTixLQUFLbkI7QUFEZixxQkFYSDtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FvQixzQ0FBR0MsR0FBSCxDQUFPLFVBQVAsRUFBbUI7QUFDZiw2QkFBSyxtQkFBVTtBQUNYRixpQ0FBSzBOLEtBQUwsR0FBYUgsT0FBTy9PLElBQVAsQ0FBWUEsSUFBekI7QUFDQSxnQ0FBSXFJLElBQUksQ0FBUjtBQUNBN0csaUNBQUswTixLQUFMLENBQVc3SyxPQUFYLENBQW1CLG1CQUFXO0FBQzFCLG9DQUFJQyxRQUFRakUsRUFBUixJQUFjbUIsS0FBS3BCLFVBQUwsQ0FBZ0JRLFNBQWhCLENBQTBCcU8sZ0JBQTVDLEVBQThEO0FBQzFEek4seUNBQUs0RixXQUFMLEdBQW1CaUIsQ0FBbkI7QUFDSDtBQUNEQTtBQUNILDZCQUxEO0FBTUE3RyxpQ0FBS0ksTUFBTDtBQUNIO0FBWGMscUJBQW5CLEVBWUc7QUFDQ21PLG1DQUFXO0FBRFoscUJBWkg7QUFlQXRPLHNDQUFHQyxHQUFILENBQU8sNkJBQVAsRUFBc0M7QUFDbEMsNkJBQUssbUJBQVU7QUFDWEYsaUNBQUs0QyxnQkFBTCxHQUF3QjJLLE9BQU8vTyxJQUFQLENBQVlBLElBQXBDO0FBQ0F3QixpQ0FBS0ksTUFBTDtBQUNIO0FBSmlDLHFCQUF0QyxFQUtHLEVBTEg7QUFNSDtBQXRFcUIsYUFBMUIsRUF1RUc7QUFDQytNLHlCQUFTbk4sS0FBS25CO0FBRGYsYUF2RUg7QUEwRUg7Ozs7RUFyMUI4QmtDLGVBQUt5TixJOztrQkFBbkJ2USxLIiwiZmlsZSI6Im9yZGVybXNnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrqLotYTkv6Hmga8nLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgb3JkZXJfaW5mbzogbnVsbCxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIGVkaXRfYmFzZTogZmFsc2UsXG4gICAgICAgICAgICBlZGl0X3NlcnZlcjogZmFsc2UsXG4gICAgICAgICAgICB3ZWRkaW5nX3BhZ2U6IG51bGwsIC8v5ama5a606aSQ5qCHXG4gICAgICAgICAgICB3ZWRkaW5nX3BhZ2U6IFtdLFxuICAgICAgICAgICAgd2VkZGluZ19pbmRleDogMCxcbiAgICAgICAgICAgIHBsYW5fcGFja2FnZTogbnVsbCwgLy/lqZrlrrTppJDmoIdcbiAgICAgICAgICAgIHBsYW5faW5kZXg6IDAsXG4gICAgICAgICAgICBkaXNjb3V0X2luZGV4OiAwLFxuICAgICAgICAgICAgZnJlZV9hcnI6IFsn5LiN5YWN5oGvJywgJ+WFjeaBryddLFxuICAgICAgICAgICAgZGlzY291dDogbnVsbCxcbiAgICAgICAgICAgIGZyZWVfaW5kZXg6IDAsXG4gICAgICAgICAgICBwYWNrYWdlX2luZGV4OiAtMSxcbiAgICAgICAgICAgIHBheV9pbmRleDogMCxcbiAgICAgICAgICAgIHBheV9tZXRob2Q6IFtdLFxuICAgICAgICAgICAgcGF5X3R5cGVfbmFtZTogJycsXG4gICAgICAgICAgICB0ZWFtczogbnVsbCxcbiAgICAgICAgICAgIHRlYW1zX2luZGV4OiAwLFxuICAgICAgICAgICAgc2hvd19iYXNlX2luZm86IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19zZXJ2ZXJfaW5mbzogZmFsc2UsXG4gICAgICAgICAgICBzaG93X3BheV9wcm86IGZhbHNlLFxuICAgICAgICAgICAgZGlzX2VkaXQ6IHRydWUsXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3JhbmdlOiBbXG4gICAgICAgICAgICAgICAgWyfkurrlkZjnsbsnLCAn5bel56iL57G7JywgJ+enn+i1geexuycsICfph4fotK3nsbsnXSxcbiAgICAgICAgICAgICAgICBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcGVyc29uOiBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcHJvamVjdDogWyfliLbkvZznsbst5bm/5ZGK5Yi25L2cJywgJ+mynOiKsScsICfoirHoibrluIgnLCAn5pCt5bu6LeaIt+Wklumfs+WTjScsICfnga/lhYknLCAn5pGH6IeCJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX2xlYXNlOiBbJ+ekvOacjScsICflqZrovaYnLCAn5aSn5be0JywgJ+WpmuaIvycsICfovablpLToirEnLCAn5omL5o2n6IqxJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3B1cmNoYXNlOiBbJ+eUnOWTgScsICfllpzns5YnLCAn5Ly05omL56S8JywgJ+awlOeQgycsICfopb/oo4UnLCAn54Of54GrJywgJ+WBnOi9puWIuCcsICflv6vpgJLotLknLCAn6K+35biWJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX211aXRpX2luZGV4OiBbMCwgMF0sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlOiAwLFxuICAgICAgICAgICAgZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGJ5X3N0YWdlc19pdGVtczogWyfliIbmnJ8nLCAn5LiN5YiG5pyfJ10sXG4gICAgICAgICAgICBieV9zdGFnZXNfaXRlbXNfaW5kZXg6IDAsXG4gICAgICAgICAgICBmcmVlX3NlcnZlcnNfYXJyOiAnJyxcbiAgICAgICAgICAgIGRpc3BsYXlfZnJlZV9zZXJ2aWNlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVfc2VydmVyX2VpZHRfaW5kZXg6IDAsXG4gICAgICAgICAgICBkaXNwbGF5X2VkaXRfZnJlZV9jb3VudDogZmFsc2UsXG4gICAgICAgICAgICBlZGl0X2ZyZWVfY291bnRfbnVtOiAnJyxcbiAgICAgICAgICAgIGludGVudGlvbkluZm86IG51bGwsXG4gICAgICAgICAgICBpbnRlbnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBkaXNwbGF5X3JldHVybjogZmFsc2UsXG4gICAgICAgICAgICBzdWJfY29tcGFueTpbXVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZFN1YkNvbXBhbnlDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zdWJfY29tcGFueV9udW09dGhpcy5zdWJfY29tcGFueVtlLmRldGFpbC52YWx1ZV0uc3ViX2NvbXBhbnlfbnVtO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc3ViX2NvbXBhbnlfbmFtZT10aGlzLnN1Yl9jb21wYW55W2UuZGV0YWlsLnZhbHVlXS5zdWJfY29tcGFueV9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc3ViX2NvbXBhbnlfaWQ9dGhpcy5zdWJfY29tcGFueVtlLmRldGFpbC52YWx1ZV0uc3ViX2NvbXBhbnlfaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlV2VlZGluZ1NjaGVkdWxlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLm9yZGVyX2luZm8uc2VjX3NjaGVkdWxlX3Nlc3Npb25baW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XG5cbiAgICAgICAgICAgICAgICBycS5nZXQoJ2RlbFdlZGRpbmdTY2hlZHVsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnNlY19zY2hlZHVsZV9zZXNzaW9uLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6aWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRGaXJzdERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9maXJzdF9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFNlY29uZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9zZWNvbmRfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRMYXN0RGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2xhc3RfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbFJldHVybigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfcmV0dXJuID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybVJldHVybigpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdyZXR1cm5PcmRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0dXJuT3JkZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5X3JldHVybiA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdGVUb1Rhc3RlKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NjaGVtZS90YXN0ZT9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmdXNlcl9pZD0nICsgdGhpcy5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRBdHRlbnRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZW50X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5pbnRlbnRpb25fbmFtZSA9IHRoaXMuaW50ZW50aW9uSW5mb1t0aGlzLmludGVudF9pbmRleF0uaW50ZW50aW9uX25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5pbnRlbnRpb25faWQgPSB0aGlzLmludGVudGlvbkluZm9bdGhpcy5pbnRlbnRfaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmREYXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnNpZ25fZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJ5U3RhZ2VzQmVmb3JlUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX2JlZm9yZV9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEZyZWVDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0X2ZyZWVfY291bnRfbnVtID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXIuc3BsaWNlKHRoaXMuZnJlZV9zZXJ2ZXJfZWlkdF9pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5X2VkaXRfZnJlZV9jb3VudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZUl0ZW0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyW3RoaXMuZnJlZV9zZXJ2ZXJfZWlkdF9pbmRleF0ubmVlZF9jb3VudCA9IHRoaXMuZWRpdF9mcmVlX2NvdW50X251bTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZWRpdF9mcmVlX2NvdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdEZyZWVTZXJ2aWNlQ291bnQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZV9zZXJ2ZXJfZWlkdF9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9lZGl0X2ZyZWVfY291bnQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyZWVTZXJ2aWNlQWRkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9mcmVlX3NlcnZpY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcHVycG9zZV9mcmVlID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlX3NlcnZlcnNfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmVlZF9jb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBlbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+acieeahCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkX2NvdW50ID0gZWwubmVlZF9jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VfZnJlZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZF9jb3VudDogbmVlZF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RfcHJpY2U6IGVsZW1lbnQucHJvZHVjdF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdF9jb3N0OiBlbGVtZW50LnByb2R1Y3RfY29zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdF90eXBlOiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbGVtZW50LnByb2R1Y3RfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVycG9zZV9mcmVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkX2NvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdF9wcmljZTogZWxlbWVudC5wcm9kdWN0X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X2Nvc3Q6IGVsZW1lbnQucHJvZHVjdF9jb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3R5cGU6IGVsZW1lbnQucHJvZHVjdF9jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVsZW1lbnQucHJvZHVjdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlciA9IHB1cnBvc2VfZnJlZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVDaGVja2VkKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVfc2VydmVyc19hcnJbaW5kZXhdLmNoZWNrZWQgPSAhdGhpcy5mcmVlX3NlcnZlcnNfYXJyW2luZGV4XS5jaGVja2VkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9Db250cmFjdCgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjb250cmFjdD9pZD0nICsgdGhpcy5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRlVG9SZWZ1bmRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9yZWZ1bmQ/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0V2VlZGluZ1NjaGVkdWxlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMub3JkZXJfaW5mby5zY2hlZHVsZV9zZXNzaW9uO1xuICAgICAgICAgICAgICAgIGxldCBkZWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZWw7XG4gICAgICAgICAgICAgICAgaWYgKGRlbCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5Ymv5qGj5pyfXG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdzY2hlZHVsZT9pZD0nICsgaW5mby5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyZvcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyZzY2hlZHVsZV90eXBlPScgKyBpbmZvLnNjaGVkdWxlX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICcmYXJlYV9uYW1lPScgKyBpbmZvLmFyZWFfbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJyZzY2hlZHVsZV9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2RhdGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICcmc2Vzc2lvbj0nICsgaW5mby5zZXNzaW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnJnNjaGVkdWxlX2VuZF9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2VuZF9kYXRlK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmZGVsX2ZsZz0nICsgZGVsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdzY2hlZHVsZT9pZD0nICsgaW5mby5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyZvcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyZzY2hlZHVsZV90eXBlPScgKyBpbmZvLnNjaGVkdWxlX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmYXJlYV9uYW1lPScgKyBpbmZvLmFyZWFfbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyZzY2hlZHVsZV9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2RhdGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmc2Vzc2lvbj0nICsgaW5mby5zZXNzaW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJnNjaGVkdWxlX2VuZF9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2VuZF9kYXRlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVXZWVkaW5nU2NoZWR1bGVJbmZvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlID0gIXRoaXMuZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X2Jhc2VfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRldGFpbC5jb2x1bW4gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3BlcnNvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmRldGFpbC52YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMV0gPSB0aGlzLm90aGVyX3NlcnZpY2VfcHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmRldGFpbC52YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMV0gPSB0aGlzLm90aGVyX3NlcnZpY2VfbGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3B1cmNoYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRPdGhlclNlcnZpY2VUeXBlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgZS5kZXRhaWwudmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3R5cGUgPSB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMF1bdmFsdWVzWzBdXSArICctJyArIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXVt2YWx1ZXNbMV1dO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQcmVzZW50U2VydmljZVR5cGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBmcmVlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyW2ZyZWVfaW5kZXhdLnN1YmplY3RfdHlwZSA9IHRoaXMuZnJlZV9zZXJ2ZXJzX2FycltpbmRleF0ucHJvZHVjdF9jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXJbZnJlZV9pbmRleF0udGl0bGUgPSB0aGlzLmZyZWVfc2VydmVyc19hcnJbaW5kZXhdLnByb2R1Y3RfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXJbZnJlZV9pbmRleF0uc3ViamVjdF9wcmljZSA9IHRoaXMuZnJlZV9zZXJ2ZXJzX2FycltpbmRleF0ucHJvZHVjdF9wcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXJbZnJlZV9pbmRleF0ubmVlZF9jb3VudCA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUGF5UHJvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gIXRoaXMuc2hvd19wYXlfcHJvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURpcGxheVNlcnZlckluZm8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3NlcnZlcl9pbmZvID0gIXRoaXMuc2hvd19zZXJ2ZXJfaW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfcGF5X3BybyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURpc3BsYXlCYXNlSW5mbygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfYmFzZV9pbmZvID0gIXRoaXMuc2hvd19iYXNlX2luZm87XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3NlcnZlcl9pbmZvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3BheV9wcm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRUZWFtQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW1zX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBheUNoYW5nZShlKSB7IC8vaW52YWxpZFxuICAgICAgICAgICAgICAgIHRoaXMucGF5X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXlfdHlwZV9uYW1lID0gdGhpcy5wYXlfbWV0aG9kW3RoaXMucGF5X2luZGV4XS5uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF90eXBlID0gdGhpcy5wYXlfbWV0aG9kW3RoaXMucGF5X2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW50YWxsbWVudENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXg9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXMgPSB0aGlzLmJ5X3N0YWdlc19pdGVtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5X3R5cGVfbmFtZSA9IHRoaXMuYnlfc3RhZ2VzX2l0ZW1zW3RoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4XTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheW1lbnRfdHlwZSA9IHRoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX25hbWUgPSB0aGlzLm9yZGVyX2luZm8uYnlfc3RhZ2VzX2l0ZW1zW3RoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYWluQ29udHJhY3QoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ubWFpbl9jb250cmFjdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9NZW51KCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVybWVudT9vcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZU90aGVyU2VydmVyKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgcHVyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID0gcHVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVByZXNlbnRTZXJ2aWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgcHVyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlciA9IHB1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRPdGhlclNlcnZlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgfHwgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlID09ICctJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRfY291bnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRQcmVzZW50U2VydmljZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZnJlZV9zZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVlX3NlcnZlcnNfYXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IGVsLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsWydjaGVja2VkJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGF5bWVudExhc3QoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9sYXN0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGF5bWVudFNlY29uZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X3NlY29uZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheW1lbnRGaXJzdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2ZpcnN0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2VydmVyRW5kVG90YWxVcHBlcihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl9lbmRfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEJsdXJTcGxpdGVFZ2dQcmljZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX3ByaWNlID4gOTk5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19wcmljZSA9IDk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlID0gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfcHJpY2UgLSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfcHJpY2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEZyZWVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQgZnJlZSBmb3InLCB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QnlTdGFnZXNQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl9lbmRfdG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLmJ5X3N0YWdlc19wcmljZSAtIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19wcmljZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCeVN0YWdlc1VuaXRQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfdW5pdF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJ5U3RhZ2VzTnVtKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLmJ5X3N0YWdlc19udW0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYXlUeXBlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2VydmVyVG90YWxQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kV2VkZGluZ0Rpc2NvdW50Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlICogdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X25hbWUgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50ID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X2xpc3RbZS5kZXRhaWwudmFsdWVdLmRpc2NvdW50X2xldmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X2xpc3RbZS5kZXRhaWwudmFsdWVdLmFmdGVyX2Rpc2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnRvdGFsX3ByaWNlID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X2xpc3RbZS5kZXRhaWwudmFsdWVdLmFmdGVyX2Rpc2NvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBUb3RhbFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnRvdGFsX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50QWxsKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS50b3RhbF9wcmljZSA9IHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgKiB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnRvdGFsX3ByaWNlKSArIHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50QWRkUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudF9hZGRfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnRBZGQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudF9hZGQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBhY2thZ2VFbmRQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2VuZF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlICogdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE5lZWRDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0ubmVlZF9jb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFN1YmplY3RQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFN1YmplY3RUeXBlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3R5cGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPdGhlclRpdGxlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS50aXRsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVJbmRleChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWNrYWdlX2luZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2VkZGluZ19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfbmFtZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX3ByaWNlID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5wYWNrYWdlX3ByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5zdXBwbGllcl9wYWNrYWdlX2lkID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9kaXNjb3VudF9uYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQbGFuUGFja2FnZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHBhY2thZ2VfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9uYW1lID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfcHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnN1cHBsaWVyX3BhY2thZ2VfaWQgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X25hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9kaXNjb3VudCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnRvdGFsX3ByaWNlKSArIHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFNlcnZlclRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX29mZmVyO1xuICAgICAgICAgICAgICAgIGlmKCF0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2V8fHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZS5sZW5ndGg8PTB8fHRoYXQud2VkZGluZ19wYWdlLmxlbmd0aDw9MHx8dGhhdC5wbGFuX3BhY2thZ2UubGVuZ3RoPD0wKXtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5Y+v6YCJ5pyN5Yqh5aWX6aSQ77yM6K+36IGU57O7566h55CG5ZGYJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuc3VwcGxpZXJfcGFja2FnZV9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdXBwbGllcl9wYWNrYWdlX2lkID0gZWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSA9IHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS5wYWNrYWdlX2VuZF9wcmljZTtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5lZGl0X3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnBhY2thZ2VfY291bnRfYWxsKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmiYDorqLmoYzmlbAnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyc2VJbnQodGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzFdLnRvdGFsX3ByaWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5q2j56Gu55qE5aWX6aSQ5LyY5oOgJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnNlSW50KHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5oC75Lu35qC85qC85byP5q2j56GuJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0ucGFja2FnZV9jb3VudF9hbGwgPSAxOyAvL+W8uuWItuiuvue9ruS4ujFcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVTZXJ2ZXJPZmZlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldE9uZU9yZGVySW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJfc2VydmVyOiBKU09OLnN0cmluZ2lmeSh0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVfc2VydmVyOiBKU09OLnN0cmluZ2lmeSh0aGF0Lm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnZV9hcnI6IEpTT04uc3RyaW5naWZ5KHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX3RvdGFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGF5X3R5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfbnVtOiBpdGVtLmJ5X3N0YWdlc19udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXM6IHRoYXQuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnlfc3RhZ2VzX3VuaXRfcHJpY2U6IGl0ZW0uYnlfc3RhZ2VzX3VuaXRfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfcHJpY2U6IGl0ZW0uYnlfc3RhZ2VzX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlOiBpdGVtLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0ZV9lZ2dfcHJpY2U6IGl0ZW0uc3BsaXRlX2VnZ19wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcl9lbmRfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX2VuZF90b3RhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcl90b3RhbF9wcmljZV91cHBlcjogaXRlbS5zZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2ZpcnN0OiBpdGVtLnBheW1lbnRfZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3NlY29uZDogaXRlbS5wYXltZW50X3NlY29uZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfbGFzdDogaXRlbS5wYXltZW50X2xhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfYmVmb3JlX3ByaWNlOiBpdGVtLmJ5X3N0YWdlc19iZWZvcmVfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2ZpcnN0X2RhdGU6IGl0ZW0ucGF5bWVudF9maXJzdF9kYXRlP2l0ZW0ucGF5bWVudF9maXJzdF9kYXRlOicnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9zZWNvbmRfZGF0ZTogaXRlbS5wYXltZW50X3NlY29uZF9kYXRlP2l0ZW0ucGF5bWVudF9zZWNvbmRfZGF0ZTonJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfbGFzdF9kYXRlOiBpdGVtLnBheW1lbnRfbGFzdF9kYXRlP2l0ZW0ucGF5bWVudF9sYXN0X2RhdGU6JydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8udXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEdyb29tTmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5ncm9vbV9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0R3Jvb21Nb2JpbGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uZ3Jvb21fbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0R3Jvb21XZWNoYXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uZ3Jvb21fd2VjaGF0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QnJpZGVOYW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmJyaWRlX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCcmlkZU1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmlkZV9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCcmlkZVdlY2hhdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmlkZV93ZWNoYXQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTY2hlZHVsZVR5cGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc2NoZWR1bGVfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZGRpbmdEYXRlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZWRpbmdBZGRyZXNzKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZWRpbmdTZXNzaW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfc2Vzc2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNjaGVkdWxlRW5kVGltZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zY2hlZHVsZV9lbmRfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFVzZXJOYW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRCYXNlVG9nZ2xlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm87XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZWRpdF9iYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKCFpdGVtLnN1Yl9jb21wYW55X251bSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHRpdGxlOiAn6K+36YCJ5oup562+57qm5YWs5Y+4JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ3VwZGF0ZUJhc2VJbmZvJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWRpdF9iYXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fY29udHJhY3Q6IGl0ZW0ubWFpbl9jb250cmFjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogaXRlbS51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogaXRlbS51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX25hbWU6IGl0ZW0uZ3Jvb21fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX21vYmlsZTogaXRlbS5ncm9vbV9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV93ZWNoYXQ6IGl0ZW0uZ3Jvb21fd2VjaGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbmFtZTogaXRlbS5icmlkZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbW9iaWxlOiBpdGVtLmJyaWRlX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX3dlY2hhdDogaXRlbS5icmlkZV93ZWNoYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV90eXBlOiBpdGVtLnNjaGVkdWxlX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2RhdGU6IGl0ZW0ud2VkZGluZ19kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19hZGRyZXNzOiBpdGVtLndlZGRpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfc2Vzc2lvbjogaXRlbS53ZWRkaW5nX3Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZV9lbmRfdGltZTogaXRlbS5zY2hlZHVsZV9lbmRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX3JlbWFyazogaXRlbS5vcmRlcl9yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IGl0ZW0uaW50ZW50aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogaXRlbS51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbl9kYXRlOiBpdGVtLnNpZ25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jb21wYW55X251bTppdGVtLnN1Yl9jb21wYW55X251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jb21wYW55X2lkOml0ZW0uc3ViX2NvbXBhbnlfaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnNpZ25fZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+etvue6puaXpeacn+S4jeiDveS4uuepuicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK0uLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdzdWJtaXRPcmRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMjogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQuZGF0YS5tc2csIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICBzdWJfY29tcGFueV9pZDogdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zdWJfY29tcGFueV9pZCxcbiAgICAgICAgICAgICAgICAgICAgcGxhbm5pbmdfdGVhbV9pZDogdGhpcy50ZWFtc1t0aGlzLnRlYW1zX2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVGFiKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYl9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYl9pbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93VXAoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiX2luZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcmRlckluZm8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1BheUxvZygpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQgKyAnJmRlcG9zaXRfc3RhdHVzPTAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1BheUxvZ0NoZWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2RlcG9zaXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXBvc2l0O1xuICAgICAgICAgICAgICAgIGlmIChpc19kZXBvc2l0ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9wcmVwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9kZXBvc2l0X2lkPScgKyBpZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRJbml0RGF0YScsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaW50ZW50aW9uSW5mbyA9IHJlc3VsdC5kYXRhLmludGVudGlvbkluZm87XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRTdWJDb21wYW55TGlzdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc3ViX2NvbXBhbnk9cmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgfVxuICAgICAgICBnZXRPcmRlckluZm9DYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuZnJlZV9pbmRleCA9IHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlO1xuICAgICAgICAgICAgdGhhdC5kaXNfZWRpdCA9ICh0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3N0YXR1cyA9PSAwIHx8IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfc3RhdHVzID09IDQpO1xuICAgICAgICAgICAgaWYgKCF0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyIHx8IHRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBjb3VudF9vdGhlcl9wcmljZSA9IDA7XG4gICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY291bnRfb3RoZXJfcHJpY2UgKz0gZWxlbWVudC5zdWJqZWN0X3ByaWNlICogZWxlbWVudC5uZWVkX2NvdW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGF0Lm90aGVyX3NlcnZpY2VfdG90YWxfcHJpY2UgPSBjb3VudF9vdGhlcl9wcmljZTtcbiAgICAgICAgfVxuICAgICAgICBnZXRPbmVPcmRlckluZm8oKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldE9uZU9yZGVySW5mbycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0T3JkZXJJbmZvQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAvLyB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0T25lT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRPcmRlckluZm9DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2dldFdlZGRpbmdQYWNrYWdlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQud2VkZGluZ19wYWdlID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LndlZGRpbmdfcGFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGF0LndlZGRpbmdfcGFnZS5wdXNoKGVsZW1lbnQucGFja2FnZV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSB8fCAhdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXSA9IHRoYXQud2VkZGluZ19wYWdlWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0UGxhblBhY2thZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wbGFuX3BhY2thZ2UgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQucGxhbl9wYWNrYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoYXQucGxhbl9wYWNrYWdlLnB1c2goZWxlbWVudC5wYWNrYWdlX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlIHx8ICF0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzFdID0gdGhhdC5wbGFuX3BhY2thZ2VbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gcnEuZ2V0KCdnZXRQYWNrYWdlRGlzY291bnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5kaXNjb3V0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIC8v6I635Y+W5Y+v6YCJ5pSv5LuY57G75Z6LXG4gICAgICAgICAgICAgICAgICAgIC8vIHJxLmdldCgnZ2V0UGF5VHlwZScsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGF0LnBheV9tZXRob2QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIHt9KVxuICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluWPr+mAieWboumYn1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ2dldFRlYW1zJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ucGxhbm5pbmdfdGVhbV9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtc19pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbV90eXBlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0RnJlZVNlcnZlclBhY2thZ2VQcm9kdWN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZnJlZV9zZXJ2ZXJzX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=