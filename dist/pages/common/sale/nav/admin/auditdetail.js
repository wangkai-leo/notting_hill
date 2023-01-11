'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref, _this$data;

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
            wedding_page: null }, _defineProperty(_this$data, 'wedding_page', []), _defineProperty(_this$data, 'wedding_index', 0), _defineProperty(_this$data, 'plan_package', null), _defineProperty(_this$data, 'plan_index', 0), _defineProperty(_this$data, 'discout_index', 0), _defineProperty(_this$data, 'free_arr', ['不免息', '免息']), _defineProperty(_this$data, 'discout', null), _defineProperty(_this$data, 'free_index', 0), _defineProperty(_this$data, 'package_index', -1), _defineProperty(_this$data, 'pay_index', 0), _defineProperty(_this$data, 'pay_method', []), _defineProperty(_this$data, 'pay_type_name', ''), _defineProperty(_this$data, 'teams', null), _defineProperty(_this$data, 'teams_index', 0), _defineProperty(_this$data, 'show_base_info', false), _defineProperty(_this$data, 'show_server_info', false), _defineProperty(_this$data, 'show_pay_pro', false), _defineProperty(_this$data, 'dis_edit', true), _defineProperty(_this$data, 'show_img_arr', []), _defineProperty(_this$data, 'other_service_range', ['布置类', '服务类']), _defineProperty(_this$data, 'other_service_person', ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']), _defineProperty(_this$data, 'other_service_project', ['制作类-广告制作', '鲜花', '花艺师', '搭建-户外音响', '灯光', '摇臂']), _defineProperty(_this$data, 'other_service_lease', ['礼服', '婚车', '大巴', '婚房', '车头花', '手捧花']), _defineProperty(_this$data, 'other_service_purchase', ['甜品', '喜糖', '伴手礼', '气球', '西装', '烟火', '停车券', '快递费', '请帖']), _defineProperty(_this$data, 'other_service_muiti_index', [0, 0]), _defineProperty(_this$data, 'other_service_total_price', 0), _defineProperty(_this$data, 'by_stages_items_index', 0), _defineProperty(_this$data, 'intentionInfo', null), _defineProperty(_this$data, 'intent_index', 0), _defineProperty(_this$data, 'display_return', false), _defineProperty(_this$data, 'hotel_list', []), _defineProperty(_this$data, 'sub_company', []), _defineProperty(_this$data, 'm_disaplay', false), _defineProperty(_this$data, 'revies_res', ''), _defineProperty(_this$data, 'contract_info', {}), _this$data), _this.methods = {
            bindReviewResouse: function bindReviewResouse(e) {
                this.revies_res = e.detail.value;
            },
            cancel: function cancel() {
                this.m_disaplay = false;
            },
            displayModal: function displayModal() {
                this.m_disaplay = true;
            },
            bindSubCompanyChange: function bindSubCompanyChange(e) {
                this.order_info.base_info.sub_company_num = this.sub_company[e.detail.value].sub_company_num;
                this.order_info.base_info.sub_company_name = this.sub_company[e.detail.value].sub_company_name;
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
            goToContract: function goToContract() {
                _wepy2.default.navigateTo({
                    url: 'contract?id=' + this.id
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
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: '9', //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            that.$apply();
                        });
                        // that.$apply();
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            bindInputFirstImpression: function bindInputFirstImpression(e) {
                this.order_info.base_info.first_impression = e.detail.value;
            },
            bindInputFamilyBackground: function bindInputFamilyBackground(e) {
                this.order_info.base_info.family_background = e.detail.value;
            },
            bindInputWeddingDemand: function bindInputWeddingDemand(e) {
                this.order_info.base_info.wedding_needs = e.detail.value;
            },
            bindInputTableCount: function bindInputTableCount(e) {
                this.order_info.base_info.wedding_table_count = e.detail.value;
            },
            editWeedingSchedule: function editWeedingSchedule() {
                var info = this.order_info.schedule_session;
                _wepy2.default.navigateTo({
                    url: 'schedule?id=' + info.id + '&order_id=' + this.order_info.base_info.order_id + '&schedule_type=' + info.schedule_type + '&area_name=' + info.area_name + '&schedule_date=' + info.schedule_date + '&session=' + info.session + '&schedule_end_date=' + info.schedule_end_date
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
                // e.detail.value.forEach(element => {
                //     if (!element) {
                //         values.push(0)
                //     } else {
                //         values.push(element);
                //     }
                // });
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].subject_type = this.other_service_range[e.detail.value];
            },
            togglePayPro: function togglePayPro() {
                this.show_pay_pro = !this.show_pay_pro;
                this.show_server_info = false;
                this.show_base_info = false;
            },
            toggleDiplayServerInfo: function toggleDiplayServerInfo() {
                this.show_server_info = !this.show_server_info;
                this.show_pay_pro = false;
                this.show_base_info = false;
            },
            toggleDisplayBaseInfo: function toggleDisplayBaseInfo() {
                this.show_base_info = !this.show_base_info;
                this.show_server_info = false;
                this.show_pay_pro = false;
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
            bindInputLogoInfo: function bindInputLogoInfo(e) {
                this.order_info.base_info.brand = e.detail.value;
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
            bindInputPaymentLast: function bindInputPaymentLast(e) {
                this.order_info.server_offer.payment_last = e.detail.value;
            },
            bindInputPaymentSecond: function bindInputPaymentSecond(e) {
                this.order_info.server_offer.payment_second = e.detail.value;
            },
            bindInputTrueMoney: function bindInputTrueMoney(e) {
                this.order_info.server_offer.true_money = e.detail.value;
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
            bindFreeChange: function bindFreeChange(e) {
                this.order_info.server_offer.splite_egg_interest_free = e.detail.value;
                this.free_index = e.detail.value;
                console.log('changed free for', this.order_info.server_offer.splite_egg_interest_free);
            },
            bindInputByStagesPrice: function bindInputByStagesPrice(e) {
                this.order_info.server_offer.by_stages_price = e.detail.value;
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
                    this.order_info.server_package[index].package_discount_name = this.discout.wedding[e.detail.value].discount_name;
                    this.order_info.server_package[index].package_discount = this.discout.wedding[e.detail.value].discount_level;
                    // this.order_info.server_package[index].package_discount = this.discout.wedding[e.detail.value].id;
                } else if (index == 1) {
                    this.order_info.server_package[index].package_discount_name = this.discout.plan[e.detail.value].discount_name;
                    this.order_info.server_package[index].package_discount = this.discout.wedding[e.detail.value].discount_level;
                    // this.order_info.server_package[index].package_discount = this.discout.plan[e.detail.value].id;
                }
            },
            bindInputPTotalPrice: function bindInputPTotalPrice(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].total_price = e.detail.value;
            },
            bindInputPackageCountAll: function bindInputPackageCountAll(e) {
                var index = e.currentTarget.dataset.index;
                this.order_info.server_package[index].package_count_all = e.detail.value;
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
            },
            bindPlanPackageChange: function bindPlanPackageChange(e) {
                this.plan_index = e.detail.value;
                var package_index = e.currentTarget.dataset.index;
                this.order_info.server_package[package_index].package_name = this.plan_package[this.plan_index].package_name;
                this.order_info.server_package[package_index].package_price = this.plan_package[this.plan_index].package_price;
                this.order_info.server_package[package_index].supplier_package_id = this.plan_package[this.plan_index].id;
            },
            editServerToggle: function editServerToggle() {
                var that = this;
                var item = that.order_info.server_offer;
                that.order_info.server_package.forEach(function (element) {
                    console.log('未改变');
                    if (!element.supplier_package_id) {
                        element.supplier_package_id = element.id;
                    }
                });
                if (that.edit_server) {
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
                        server_total_price: item.server_total_price,
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
                        true_money: item.true_money
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
            bindWeedingAddressChange: function bindWeedingAddressChange(e) {
                this.order_info.base_info.wedding_address = this.hotel_list[e.detail.value].hotel_name;
            },
            bindInputWeedingAddress: function bindInputWeedingAddress() {
                this.order_info.base_info.wedding_address = e.detail.value;
            },
            bindInputWeedingSession: function bindInputWeedingSession(e) {
                this.order_info.base_info.wedding_session = e.detail.value;
            },
            bindInputScheduleEndTime: function bindInputScheduleEndTime(e) {
                this.order_info.base_info.schedule_end_time = e.detail.value;
            },

            // bindInputUserName(e) {
            //     this.order_info.base_info.order_remark = e.detail.value;
            // },
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
                        wedding_date: item.wedding_date,
                        wedding_address: item.wedding_address,
                        wedding_table_count: item.wedding_table_count,
                        first_impression: item.first_impression,
                        family_background: item.family_background,
                        wedding_needs: item.wedding_needs,
                        order_remark: item.order_remark,
                        intention_id: item.intention_id,
                        user_id: item.user_id,
                        brand: item.brand,
                        sign_date: item.sign_date,
                        sub_company_num: item.sub_company_num
                    });
                } else {
                    that.edit_base = true;
                }
            },
            submit: function submit(e) {
                var that = this;
                var is_pass = e.currentTarget.dataset.pass;
                _request2.default.get('approvedOrder', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    order_id: that.order_info.base_info.order_id,
                    is_pass: is_pass,
                    review_reason: that.revies_res,
                    contract_id: that.contract_info.contract_id
                });
            },
            toggleTab: function toggleTab(e) {
                this.tab_index = e.currentTarget.dataset.index;
                if (this.tab_index == 1) {
                    this.followUp();
                } else if (this.tab_index == 2) {
                    this.getOrderInfo();
                }
            },
            goToPayLog: function goToPayLog() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/orderpay?order_id=' + this.order_info.base_info.order_id
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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.contract_id = options.contract_id;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.dis_edit = that.order_info.base_info.order_status == 0 || that.order_info.base_info.order_status == 4;
                    if (!that.order_info.other_server || that.order_info.other_server == '-') {
                        that.order_info.other_server = [];
                    }
                }
            }, {
                user_id: that.id
            });
            _request2.default.get('getContractInfo', {
                200: function _(result) {
                    that.contract_info = result.data.data.contract;
                    that.show_img_arr = that.contract_info.contract_proof;
                    that.$apply();
                }
            }, {
                user_id: that.id,
                contract_id: that.contract_id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/auditdetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0ZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJ3ZWRkaW5nX3BhZ2UiLCJtZXRob2RzIiwiYmluZFJldmlld1Jlc291c2UiLCJlIiwicmV2aWVzX3JlcyIsImRldGFpbCIsInZhbHVlIiwiY2FuY2VsIiwibV9kaXNhcGxheSIsImRpc3BsYXlNb2RhbCIsImJpbmRTdWJDb21wYW55Q2hhbmdlIiwiYmFzZV9pbmZvIiwic3ViX2NvbXBhbnlfbnVtIiwic3ViX2NvbXBhbnkiLCJzdWJfY29tcGFueV9uYW1lIiwiY2FuY2VsUmV0dXJuIiwiZGlzcGxheV9yZXR1cm4iLCJjb25maXJtUmV0dXJuIiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3JkZXJfaWQiLCJyZXR1cm5PcmRlciIsImdvVG9Db250cmFjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kQXR0ZW50Q2hhbmdlIiwiaW50ZW50X2luZGV4IiwiaW50ZW50aW9uX25hbWUiLCJpbnRlbnRpb25JbmZvIiwiaW50ZW50aW9uX2lkIiwiYmluZERhdGVDaGFuZ2UiLCJzaWduX2RhdGUiLCJ1cGxvYWRGaWxlIiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJ1cmxzIiwic2hvd19pbWdfYXJyIiwiY29uY2F0IiwiJGFwcGx5IiwiZmFpbCIsImNvbXBsZXRlIiwiYmluZElucHV0Rmlyc3RJbXByZXNzaW9uIiwiZmlyc3RfaW1wcmVzc2lvbiIsImJpbmRJbnB1dEZhbWlseUJhY2tncm91bmQiLCJmYW1pbHlfYmFja2dyb3VuZCIsImJpbmRJbnB1dFdlZGRpbmdEZW1hbmQiLCJ3ZWRkaW5nX25lZWRzIiwiYmluZElucHV0VGFibGVDb3VudCIsIndlZGRpbmdfdGFibGVfY291bnQiLCJlZGl0V2VlZGluZ1NjaGVkdWxlIiwiaW5mbyIsInNjaGVkdWxlX3Nlc3Npb24iLCJzY2hlZHVsZV90eXBlIiwiYXJlYV9uYW1lIiwic2NoZWR1bGVfZGF0ZSIsInNlc3Npb24iLCJzY2hlZHVsZV9lbmRfZGF0ZSIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJvdGhlcl9zZXJ2aWNlX3JhbmdlIiwib3RoZXJfc2VydmljZV9wZXJzb24iLCJvdGhlcl9zZXJ2aWNlX3Byb2plY3QiLCJvdGhlcl9zZXJ2aWNlX2xlYXNlIiwib3RoZXJfc2VydmljZV9wdXJjaGFzZSIsImJpbmRPdGhlclNlcnZpY2VUeXBlQ2hhbmdlIiwidmFsdWVzIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm90aGVyX3NlcnZlciIsInN1YmplY3RfdHlwZSIsInRvZ2dsZVBheVBybyIsInNob3dfcGF5X3BybyIsInNob3dfc2VydmVyX2luZm8iLCJzaG93X2Jhc2VfaW5mbyIsInRvZ2dsZURpcGxheVNlcnZlckluZm8iLCJ0b2dnbGVEaXNwbGF5QmFzZUluZm8iLCJiaW5kVGVhbUNoYW5nZSIsInRlYW1zX2luZGV4IiwiYmluZFBheUNoYW5nZSIsInBheV9pbmRleCIsInNlcnZlcl9vZmZlciIsInBheV90eXBlX25hbWUiLCJwYXlfbWV0aG9kIiwibmFtZSIsInBheW1lbnRfdHlwZSIsImJpbmRJbnRhbGxtZW50Q2hhbmdlIiwiYnlfc3RhZ2VzIiwiYnlfc3RhZ2VzX2l0ZW1zX2luZGV4IiwiYnlfc3RhZ2VzX25hbWUiLCJieV9zdGFnZXNfaXRlbXMiLCJiaW5kSW5wdXRNYWluQ29udHJhY3QiLCJtYWluX2NvbnRyYWN0IiwiYmluZElucHV0TG9nb0luZm8iLCJicmFuZCIsImRlbGV0ZU90aGVyU2VydmVyIiwicHVyIiwiaSIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsImFkZE90aGVyU2VydmVyIiwic2VydmVyX3BhY2thZ2UiLCJuZWVkX2NvdW50Iiwic3ViamVjdF9wcmljZSIsImJpbmRJbnB1dFBheW1lbnRMYXN0IiwicGF5bWVudF9sYXN0IiwiYmluZElucHV0UGF5bWVudFNlY29uZCIsInBheW1lbnRfc2Vjb25kIiwiYmluZElucHV0VHJ1ZU1vbmV5IiwidHJ1ZV9tb25leSIsImJpbmRJbnB1dFBheW1lbnRGaXJzdCIsInBheW1lbnRfZmlyc3QiLCJiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFVwcGVyIiwic2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyIiwiYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZSIsInNlcnZlcl9lbmRfdG90YWxfcHJpY2UiLCJiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZSIsInNwbGl0ZV9lZ2dfcHJpY2UiLCJiaW5kRnJlZUNoYW5nZSIsInNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSIsImZyZWVfaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiYmluZElucHV0QnlTdGFnZXNQcmljZSIsImJ5X3N0YWdlc19wcmljZSIsImJpbmRJbnB1dEJ5U3RhZ2VzVW5pdFByaWNlIiwiYnlfc3RhZ2VzX3VuaXRfcHJpY2UiLCJiaW5kSW5wdXRCeVN0YWdlc051bSIsImJ5X3N0YWdlc19udW0iLCJiaW5kSW5wdXRQYXlUeXBlIiwicGF5X3R5cGUiLCJiaW5kSW5wdXRTZXJ2ZXJUb3RhbFByaWNlIiwic2VydmVyX3RvdGFsX3ByaWNlIiwiYmluZFdlZGRpbmdEaXNjb3VudENoYW5nZSIsInBhY2thZ2VfZGlzY291bnRfbmFtZSIsImRpc2NvdXQiLCJ3ZWRkaW5nIiwiZGlzY291bnRfbmFtZSIsInBhY2thZ2VfZGlzY291bnQiLCJkaXNjb3VudF9sZXZlbCIsInBsYW4iLCJiaW5kSW5wdXRQVG90YWxQcmljZSIsInRvdGFsX3ByaWNlIiwiYmluZElucHV0UGFja2FnZUNvdW50QWxsIiwicGFja2FnZV9jb3VudF9hbGwiLCJiaW5kSW5wdXRQYWNrYWdlQ291bnRBZGRQcmljZSIsInBhY2thZ2VfY291bnRfYWRkX3ByaWNlIiwiYmluZElucHV0UGFja2FnZUNvdW50QWRkIiwicGFja2FnZV9jb3VudF9hZGQiLCJiaW5kSW5wdXRQYWNrYWdlQ291bnQiLCJwYWNrYWdlX2NvdW50IiwiYmluZElucHV0UGFja2FnZUVuZFByaWNlIiwicGFja2FnZV9lbmRfcHJpY2UiLCJiaW5kSW5wdXROZWVkQ291bnQiLCJiaW5kSW5wdXRTdWJqZWN0UHJpY2UiLCJiaW5kSW5wdXRTdWJqZWN0VHlwZSIsImJpbmRJbnB1dE90aGVyVGl0bGUiLCJzYXZlSW5kZXgiLCJwYWNrYWdlX2luZGV4IiwiYmluZFdlZGRpbmdQYWNrYWdlQ2hhbmdlIiwid2VkZGluZ19pbmRleCIsInBhY2thZ2VfbmFtZSIsInBhY2thZ2VfcHJpY2UiLCJzdXBwbGllcl9wYWNrYWdlX2lkIiwiYmluZFBsYW5QYWNrYWdlQ2hhbmdlIiwicGxhbl9pbmRleCIsInBsYW5fcGFja2FnZSIsImVkaXRTZXJ2ZXJUb2dnbGUiLCJpdGVtIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsImdldE9uZU9yZGVySW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJiaW5kSW5wdXRVc2VyTmFtZSIsInVzZXJfbmFtZSIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJ1c2VyX21vYmlsZSIsImJpbmRJbnB1dEdyb29tTmFtZSIsImdyb29tX25hbWUiLCJiaW5kSW5wdXRHcm9vbU1vYmlsZSIsImdyb29tX21vYmlsZSIsImJpbmRJbnB1dEdyb29tV2VjaGF0IiwiZ3Jvb21fd2VjaGF0IiwiYmluZElucHV0QnJpZGVOYW1lIiwiYnJpZGVfbmFtZSIsImJpbmRJbnB1dEJyaWRlTW9iaWxlIiwiYnJpZGVfbW9iaWxlIiwiYmluZElucHV0QnJpZGVXZWNoYXQiLCJicmlkZV93ZWNoYXQiLCJiaW5kSW5wdXRTY2hlZHVsZVR5cGUiLCJiaW5kSW5wdXRXZWRkaW5nRGF0ZSIsIndlZGRpbmdfZGF0ZSIsImJpbmRXZWVkaW5nQWRkcmVzc0NoYW5nZSIsIndlZGRpbmdfYWRkcmVzcyIsImhvdGVsX2xpc3QiLCJob3RlbF9uYW1lIiwiYmluZElucHV0V2VlZGluZ0FkZHJlc3MiLCJiaW5kSW5wdXRXZWVkaW5nU2Vzc2lvbiIsIndlZGRpbmdfc2Vzc2lvbiIsImJpbmRJbnB1dFNjaGVkdWxlRW5kVGltZSIsInNjaGVkdWxlX2VuZF90aW1lIiwiZWRpdEJhc2VUb2dnbGUiLCJvcmRlcl9yZW1hcmsiLCJ1c2VyX2lkIiwic3VibWl0IiwiaXNfcGFzcyIsInBhc3MiLCJyZXZpZXdfcmVhc29uIiwiY29udHJhY3RfaWQiLCJjb250cmFjdF9pbmZvIiwidG9nZ2xlVGFiIiwidGFiX2luZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJnb1RvUGF5TG9nIiwiZ29Ub1BheUxvZ0NoZWNrIiwiaXNfZGVwb3NpdCIsImRlcG9zaXQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwicmVzdWx0IiwiZGlzX2VkaXQiLCJvcmRlcl9zdGF0dXMiLCJjb250cmFjdCIsImNvbnRyYWN0X3Byb29mIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJO0FBQ0lD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QmxRLEsiLCJmaWxlIjoiYXVkaXRkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+Wuoui1hOS/oeaBrycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBvcmRlcl9pbmZvOiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgZWRpdF9iYXNlOiBmYWxzZSxcbiAgICAgICAgICAgIGVkaXRfc2VydmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdlZGRpbmdfcGFnZTogbnVsbCwgLy/lqZrlrrTppJDmoIdcbiAgICAgICAgICAgIHdlZGRpbmdfcGFnZTogW10sXG4gICAgICAgICAgICB3ZWRkaW5nX2luZGV4OiAwLFxuICAgICAgICAgICAgcGxhbl9wYWNrYWdlOiBudWxsLCAvL+WpmuWutOmkkOagh1xuICAgICAgICAgICAgcGxhbl9pbmRleDogMCxcbiAgICAgICAgICAgIGRpc2NvdXRfaW5kZXg6IDAsXG4gICAgICAgICAgICBmcmVlX2FycjogWyfkuI3lhY3mga8nLCAn5YWN5oGvJ10sXG4gICAgICAgICAgICBkaXNjb3V0OiBudWxsLFxuICAgICAgICAgICAgZnJlZV9pbmRleDogMCxcbiAgICAgICAgICAgIHBhY2thZ2VfaW5kZXg6IC0xLFxuICAgICAgICAgICAgcGF5X2luZGV4OiAwLFxuICAgICAgICAgICAgcGF5X21ldGhvZDogW10sXG4gICAgICAgICAgICBwYXlfdHlwZV9uYW1lOiAnJyxcbiAgICAgICAgICAgIHRlYW1zOiBudWxsLFxuICAgICAgICAgICAgdGVhbXNfaW5kZXg6IDAsXG4gICAgICAgICAgICBzaG93X2Jhc2VfaW5mbzogZmFsc2UsXG4gICAgICAgICAgICBzaG93X3NlcnZlcl9pbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfcGF5X3BybzogZmFsc2UsXG4gICAgICAgICAgICBkaXNfZWRpdDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3JhbmdlOlsn5biD572u57G7Jywn5pyN5Yqh57G7J10sXG4gICAgICAgICAgICAvLyBvdGhlcl9zZXJ2aWNlX3JhbmdlOiBbXG4gICAgICAgICAgICAvLyAgICAgWyfkurrlkZjnsbsnLCAn5bel56iL57G7JywgJ+enn+i1geexuycsICfph4fotK3nsbsnXSxcbiAgICAgICAgICAgIC8vICAgICBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcGVyc29uOiBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcHJvamVjdDogWyfliLbkvZznsbst5bm/5ZGK5Yi25L2cJywgJ+mynOiKsScsICfoirHoibrluIgnLCAn5pCt5bu6LeaIt+Wklumfs+WTjScsICfnga/lhYknLCAn5pGH6IeCJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX2xlYXNlOiBbJ+ekvOacjScsICflqZrovaYnLCAn5aSn5be0JywgJ+WpmuaIvycsICfovablpLToirEnLCAn5omL5o2n6IqxJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3B1cmNoYXNlOiBbJ+eUnOWTgScsICfllpzns5YnLCAn5Ly05omL56S8JywgJ+awlOeQgycsICfopb/oo4UnLCAn54Of54GrJywgJ+WBnOi9puWIuCcsICflv6vpgJLotLknLCAn6K+35biWJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX211aXRpX2luZGV4OiBbMCwgMF0sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlOiAwLFxuICAgICAgICAgICAgLy8gYnlfc3RhZ2VzX2l0ZW1zOiBbJ+WIhuacnycsICfkuI3liIbmnJ8nXSxcbiAgICAgICAgICAgIGJ5X3N0YWdlc19pdGVtc19pbmRleDogMCxcbiAgICAgICAgICAgIGludGVudGlvbkluZm86IG51bGwsXG4gICAgICAgICAgICBpbnRlbnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBkaXNwbGF5X3JldHVybjogZmFsc2UsXG4gICAgICAgICAgICBob3RlbF9saXN0OltdLFxuICAgICAgICAgICAgc3ViX2NvbXBhbnk6W10sXG4gICAgICAgICAgICBtX2Rpc2FwbGF5OmZhbHNlLFxuICAgICAgICAgICAgcmV2aWVzX3JlczonJyxcbiAgICAgICAgICAgIGNvbnRyYWN0X2luZm86e31cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRSZXZpZXdSZXNvdXNlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldmllc19yZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWwoKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1fZGlzYXBsYXk9ZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzcGxheU1vZGFsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5tX2Rpc2FwbGF5PXRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFN1YkNvbXBhbnlDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zdWJfY29tcGFueV9udW09dGhpcy5zdWJfY29tcGFueVtlLmRldGFpbC52YWx1ZV0uc3ViX2NvbXBhbnlfbnVtO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc3ViX2NvbXBhbnlfbmFtZT10aGlzLnN1Yl9jb21wYW55W2UuZGV0YWlsLnZhbHVlXS5zdWJfY29tcGFueV9uYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbFJldHVybigpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9yZXR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maXJtUmV0dXJuKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3JldHVybk9yZGVyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV0dXJuT3JkZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5X3JldHVybiA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0NvbnRyYWN0KCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2NvbnRyYWN0P2lkPScgKyB0aGlzLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEF0dGVudENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmludGVudGlvbl9uYW1lID0gdGhpcy5pbnRlbnRpb25JbmZvW3RoaXMuaW50ZW50X2luZGV4XS5pbnRlbnRpb25fbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmludGVudGlvbl9pZCA9IHRoaXMuaW50ZW50aW9uSW5mb1t0aGlzLmludGVudF9pbmRleF0uaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc2lnbl9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogJzknLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudXBMb2FkSW1ncyhDLkVOVl9VUkwgKyAndXBsb2FkQ29tbVByb29mJywgcmVzLnRlbXBGaWxlUGF0aHMsIDAsIFtdLCBbXSwgZnVuY3Rpb24obmFtZXMsIHVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAvL+i/lOWbnuWbvueJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqCB0ZW1wRmlsZVBhdGhzLFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0Rmlyc3RJbXByZXNzaW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmZpcnN0X2ltcHJlc3Npb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRGYW1pbHlCYWNrZ3JvdW5kKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmZhbWlseV9iYWNrZ3JvdW5kID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V2VkZGluZ0RlbWFuZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX25lZWRzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGFibGVDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX3RhYmxlX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFdlZWRpbmdTY2hlZHVsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMub3JkZXJfaW5mby5zY2hlZHVsZV9zZXNzaW9uO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3NjaGVkdWxlP2lkPScgKyBpbmZvLmlkICsgJyZvcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmc2NoZWR1bGVfdHlwZT0nICsgaW5mby5zY2hlZHVsZV90eXBlICsgJyZhcmVhX25hbWU9JyArIGluZm8uYXJlYV9uYW1lICsgJyZzY2hlZHVsZV9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2RhdGUgKyAnJnNlc3Npb249JyArIGluZm8uc2Vzc2lvbiArICcmc2NoZWR1bGVfZW5kX2RhdGU9JyArIGluZm8uc2NoZWR1bGVfZW5kX2RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlQ29sdW1uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wZXJzb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3Byb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX2xlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wdXJjaGFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGUuZGV0YWlsLnZhbHVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVzLnB1c2goMClcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF90eXBlID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlW2UuZGV0YWlsLnZhbHVlXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVQYXlQcm8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3BheV9wcm8gPSAhdGhpcy5zaG93X3BheV9wcm87XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3NlcnZlcl9pbmZvID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X2Jhc2VfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURpcGxheVNlcnZlckluZm8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3NlcnZlcl9pbmZvID0gIXRoaXMuc2hvd19zZXJ2ZXJfaW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfcGF5X3BybyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5QmFzZUluZm8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X2Jhc2VfaW5mbyA9ICF0aGlzLnNob3dfYmFzZV9pbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFRlYW1DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbXNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kUGF5Q2hhbmdlKGUpIHsgLy9pbnZhbGlkXG4gICAgICAgICAgICAgICAgdGhpcy5wYXlfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheV90eXBlX25hbWUgPSB0aGlzLnBheV9tZXRob2RbdGhpcy5wYXlfaW5kZXhdLm5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X3R5cGUgPSB0aGlzLnBheV9tZXRob2RbdGhpcy5wYXlfaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnRhbGxtZW50Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmJ5X3N0YWdlc19pdGVtc19pbmRleD1lLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLmJ5X3N0YWdlcyA9IHRoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXlfdHlwZV9uYW1lID0gdGhpcy5ieV9zdGFnZXNfaXRlbXNbdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF90eXBlID0gdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfbmFtZSA9IHRoaXMub3JkZXJfaW5mby5ieV9zdGFnZXNfaXRlbXNbdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1haW5Db250cmFjdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5tYWluX2NvbnRyYWN0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TG9nb0luZm8oZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmFuZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZU90aGVyU2VydmVyKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgcHVyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID0gcHVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZE90aGVyU2VydmVyKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciB8fCB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2UgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZF9jb3VudDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3RfcHJpY2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheW1lbnRMYXN0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheW1lbnRfbGFzdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheW1lbnRTZWNvbmQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9zZWNvbmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRUcnVlTW9uZXkoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIudHJ1ZV9tb25leSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheW1lbnRGaXJzdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2ZpcnN0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2VydmVyRW5kVG90YWxVcHBlcihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl9lbmRfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEZyZWVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQgZnJlZSBmb3InLCB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QnlTdGFnZXNQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCeVN0YWdlc1VuaXRQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfdW5pdF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJ5U3RhZ2VzTnVtKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLmJ5X3N0YWdlc19udW0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYXlUeXBlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2VydmVyVG90YWxQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kV2VkZGluZ0Rpc2NvdW50Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9IHRoaXMuZGlzY291dC53ZWRkaW5nW2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLmRpc2NvdXQud2VkZGluZ1tlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9kaXNjb3VudCA9IHRoaXMuZGlzY291dC53ZWRkaW5nW2UuZGV0YWlsLnZhbHVlXS5pZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X25hbWUgPSB0aGlzLmRpc2NvdXQucGxhbltlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50ID0gdGhpcy5kaXNjb3V0LndlZGRpbmdbZS5kZXRhaWwudmFsdWVdLmRpc2NvdW50X2xldmVsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLmRpc2NvdXQucGxhbltlLmRldGFpbC52YWx1ZV0uaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBUb3RhbFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnRvdGFsX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50QWxsKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50QWRkUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudF9hZGRfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnRBZGQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudF9hZGQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBhY2thZ2VFbmRQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2VuZF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE5lZWRDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0ubmVlZF9jb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFN1YmplY3RQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFN1YmplY3RUeXBlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3R5cGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRPdGhlclRpdGxlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS50aXRsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVJbmRleChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWNrYWdlX2luZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2VkZGluZ19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfbmFtZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX3ByaWNlID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5wYWNrYWdlX3ByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5zdXBwbGllcl9wYWNrYWdlX2lkID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kUGxhblBhY2thZ2VDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhbl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfbmFtZSA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0ucGFja2FnZV9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX3ByaWNlID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5wYWNrYWdlX3ByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5zdXBwbGllcl9wYWNrYWdlX2lkID0gdGhpcy5wbGFuX3BhY2thZ2VbdGhpcy5wbGFuX2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0U2VydmVyVG9nZ2xlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXI7XG4gICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnKrmlLnlj5gnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuc3VwcGxpZXJfcGFja2FnZV9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdXBwbGllcl9wYWNrYWdlX2lkID0gZWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmVkaXRfc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgndXBkYXRlU2VydmVyT2ZmZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lZGl0X3NlcnZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRPbmVPcmRlckluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyX3NlcnZlcjogSlNPTi5zdHJpbmdpZnkodGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX3RvdGFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnlfc3RhZ2VzX251bTogaXRlbS5ieV9zdGFnZXNfbnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnlfc3RhZ2VzOiB0aGF0LmJ5X3N0YWdlc19pdGVtc19pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5X3N0YWdlc191bml0X3ByaWNlOiBpdGVtLmJ5X3N0YWdlc191bml0X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnlfc3RhZ2VzX3ByaWNlOiBpdGVtLmJ5X3N0YWdlc19wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZTogaXRlbS5zcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdGVfZWdnX3ByaWNlOiBpdGVtLnNwbGl0ZV9lZ2dfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlOiBpdGVtLnNlcnZlcl9lbmRfdG90YWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXI6IGl0ZW0uc2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9maXJzdDogaXRlbS5wYXltZW50X2ZpcnN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF9zZWNvbmQ6IGl0ZW0ucGF5bWVudF9zZWNvbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2xhc3Q6IGl0ZW0ucGF5bWVudF9sYXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZV9tb25leTogaXRlbS50cnVlX21vbmV5LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZWRpdF9zZXJ2ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRVc2VyTmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby51c2VyX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRVc2VyTW9iaWxlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnVzZXJfbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0R3Jvb21OYW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmdyb29tX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRHcm9vbU1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5ncm9vbV9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRHcm9vbVdlY2hhdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5ncm9vbV93ZWNoYXQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCcmlkZU5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uYnJpZGVfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJyaWRlTW9iaWxlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmJyaWRlX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJyaWRlV2VjaGF0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmJyaWRlX3dlY2hhdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNjaGVkdWxlVHlwZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zY2hlZHVsZV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V2VkZGluZ0RhdGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ud2VkZGluZ19kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFdlZWRpbmdBZGRyZXNzQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfYWRkcmVzcyA9IHRoaXMuaG90ZWxfbGlzdFtlLmRldGFpbC52YWx1ZV0uaG90ZWxfbmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRXZWVkaW5nQWRkcmVzcygpe1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ud2VkZGluZ19hZGRyZXNzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V2VlZGluZ1Nlc3Npb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ud2VkZGluZ19zZXNzaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2NoZWR1bGVFbmRUaW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnNjaGVkdWxlX2VuZF90aW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfcmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgZWRpdEJhc2VUb2dnbGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mbztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5lZGl0X2Jhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVCYXNlSW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluX2NvbnRyYWN0OiBpdGVtLm1haW5fY29udHJhY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IGl0ZW0udXNlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9tb2JpbGU6IGl0ZW0udXNlcl9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV9uYW1lOiBpdGVtLmdyb29tX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV9tb2JpbGU6IGl0ZW0uZ3Jvb21fbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3Jvb21fd2VjaGF0OiBpdGVtLmdyb29tX3dlY2hhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX25hbWU6IGl0ZW0uYnJpZGVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX21vYmlsZTogaXRlbS5icmlkZV9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBicmlkZV93ZWNoYXQ6IGl0ZW0uYnJpZGVfd2VjaGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19kYXRlOiBpdGVtLndlZGRpbmdfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfYWRkcmVzczogaXRlbS53ZWRkaW5nX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX3RhYmxlX2NvdW50OiBpdGVtLndlZGRpbmdfdGFibGVfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9pbXByZXNzaW9uOiBpdGVtLmZpcnN0X2ltcHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYW1pbHlfYmFja2dyb3VuZDogaXRlbS5mYW1pbHlfYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfbmVlZHM6IGl0ZW0ud2VkZGluZ19uZWVkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX3JlbWFyazogaXRlbS5vcmRlcl9yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlbnRpb25faWQ6IGl0ZW0uaW50ZW50aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogaXRlbS51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQ6aXRlbS5icmFuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25fZGF0ZTogaXRlbS5zaWduX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJfY29tcGFueV9udW06aXRlbS5zdWJfY29tcGFueV9udW1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBpc19wYXNzID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFzcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2FwcHJvdmVkT3JkZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzX3Bhc3M6IGlzX3Bhc3MsXG4gICAgICAgICAgICAgICAgICAgIHJldmlld19yZWFzb246dGhhdC5yZXZpZXNfcmVzLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdF9pZDogdGhhdC5jb250cmFjdF9pbmZvLmNvbnRyYWN0X2lkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiX2luZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dVcCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJfaW5kZXggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE9yZGVySW5mbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvUGF5TG9nKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9QYXlMb2dDaGVjayhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCBpc19kZXBvc2l0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGVwb3NpdDtcbiAgICAgICAgICAgICAgICBpZiAoaXNfZGVwb3NpdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvcHJlcGF5P29yZGVyX2RlcG9zaXRfaWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoYXQuY29udHJhY3RfaWQ9b3B0aW9ucy5jb250cmFjdF9pZDtcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0T25lT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5kaXNfZWRpdCA9ICh0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3N0YXR1cyA9PSAwIHx8IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfc3RhdHVzID09IDQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgfHwgdGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRDb250cmFjdEluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0X2luZm8gPSByZXN1bHQuZGF0YS5kYXRhLmNvbnRyYWN0O1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuY29udHJhY3RfaW5mby5jb250cmFjdF9wcm9vZjtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICBjb250cmFjdF9pZDp0aGF0LmNvbnRyYWN0X2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuIl19