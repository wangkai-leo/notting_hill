'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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
            wedding_page: null }, _defineProperty(_this$data, 'wedding_page', []), _defineProperty(_this$data, 'wedding_index', 0), _defineProperty(_this$data, 'plan_package', null), _defineProperty(_this$data, 'plan_index', 0), _defineProperty(_this$data, 'discout_index', 0), _defineProperty(_this$data, 'free_arr', ['不免息', '免息']), _defineProperty(_this$data, 'discout', null), _defineProperty(_this$data, 'free_index', 0), _defineProperty(_this$data, 'package_index', -1), _defineProperty(_this$data, 'pay_index', 0), _defineProperty(_this$data, 'pay_method', []), _defineProperty(_this$data, 'pay_type_name', ''), _defineProperty(_this$data, 'teams', null), _defineProperty(_this$data, 'teams_index', 0), _defineProperty(_this$data, 'show_base_info', false), _defineProperty(_this$data, 'show_server_info', false), _defineProperty(_this$data, 'show_pay_pro', false), _defineProperty(_this$data, 'dis_edit', true), _defineProperty(_this$data, 'show_img_arr', []), _defineProperty(_this$data, 'other_service_cate_range', []), _defineProperty(_this$data, 'other_service_range', ['布置类', '服务类']), _defineProperty(_this$data, 'other_service_person', ['司仪', '化妆', '摄影', '摄像', '管家', '演出', '乐队', '小提琴', 'DJ/VJ', '兼职人员-小秘书', '其他支出']), _defineProperty(_this$data, 'other_service_project', ['制作类-广告制作', '鲜花', '花艺师', '搭建-户外音响', '灯光', '摇臂']), _defineProperty(_this$data, 'other_service_lease', ['礼服', '婚车', '大巴', '婚房', '车头花', '手捧花']), _defineProperty(_this$data, 'other_service_purchase', ['甜品', '喜糖', '伴手礼', '气球', '西装', '烟火', '停车券', '快递费', '请帖']), _defineProperty(_this$data, 'other_service_muiti_index', [0, 0]), _defineProperty(_this$data, 'other_service_total_price', 0), _defineProperty(_this$data, 'by_stages_items_index', 0), _defineProperty(_this$data, 'intentionInfo', null), _defineProperty(_this$data, 'intent_index', 0), _defineProperty(_this$data, 'display_return', false), _defineProperty(_this$data, 'hotel_list', []), _defineProperty(_this$data, 'sub_company', []), _defineProperty(_this$data, 'brand_arr', ['诺丁山婚庆企划', 'Dreampark', '喜悠记一站式', '喜悠记婚宴（代收付）', '喜悠记婚宴（返佣）']), _defineProperty(_this$data, 'other_service_cate_range_arr', [['布置定金', '布置中款', '布置尾款', '布置增加款'], ['司仪', '督导', '管家', '化妆', '摄影', '摄像']]), _this$data), _this.methods = {
            deleteImg: function deleteImg(e) {
                var index = e.currentTarget.dataset.index;
                this.show_img_arr.splice(index, 1);
            },
            uploadFile: function uploadFile() {
                var that = this;
                wx.chooseImage({
                    count: '9', //最多可以选择的图片张数,
                    success: function success(res) {
                        _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
                            // that.upload_img_arr = that.upload_img_arr.concat(names);
                            that.show_img_arr = that.show_img_arr.concat(urls);
                            console.log(that.show_img_arr);
                            that.$apply();
                        });
                        // that.$apply();
                    }, //返回图片的本地文件路径列表 tempFilePaths,
                    fail: function fail() {},
                    complete: function complete() {}
                });
            },
            viewCheck: function viewCheck(e) {
                _wepy2.default.previewImage({
                    current: this.show_img_arr[e.currentTarget.dataset.index],
                    urls: this.show_img_arr //需要预览的图片链接列表,
                });
            },
            bindLogoInfoChange: function bindLogoInfoChange(e) {
                this.order_info.base_info.brand = this.brand_arr[e.detail.value];
            },
            bindSubCompanyChange: function bindSubCompanyChange(e) {
                this.order_info.base_info.sub_company_num = this.sub_company[e.detail.value].sub_company_num;
                this.order_info.base_info.sub_company_name = this.sub_company[e.detail.value].sub_company_name;
                this.order_info.base_info.sub_company_id = this.sub_company[e.detail.value].sub_company_id;
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
            bindInputJindieOrderId: function bindInputJindieOrderId(e) {
                this.order_info.base_info.jindie_order_id = e.detail.value;
            },
            bindDateChange: function bindDateChange(e) {
                this.order_info.base_info.sign_date = e.detail.value;
            },
            navigateToRefundPage: function navigateToRefundPage() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/refund?order_id=' + this.order_info.base_info.order_id
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
                var index = e.currentTarget.dataset.index;
                this.order_info.other_server[index].title = this.other_service_range[e.detail.value];
                this.order_info.other_server[index].other_service_cate_range = this.other_service_cate_range_arr[e.detail.value];
                this.order_info.other_server[index].subject_type = '';
            },
            bindOtherServiceCateChange: function bindOtherServiceCateChange(e) {
                var index = e.currentTarget.dataset.index;
                console.log(index);
                console.log(e.detail.value);
                this.order_info.other_server[index].subject_type = this.order_info.other_server[index].other_service_cate_range[e.detail.value];
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
                        // package_arr: JSON.stringify(that.order_info.server_package),
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
                        true_money: item.true_money
                        // contract_prof: that.show_img_arr.join(',')
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
                        jindie_order_id: that.order_info.base_info.jindie_order_id,
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
                        brand: item.brand,
                        sign_date: item.sign_date,
                        sub_company_num: item.sub_company_num,
                        sub_company_id: item.sub_company_id,
                        wedding_need_pics: that.show_img_arr.join(',')

                    });
                } else {
                    that.edit_base = true;
                }
            },
            submit: function submit() {
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
                        that.order_info.base_info.order_status = 1;
                        that.$apply();
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
            // rq.get('getOneOrderInfo', {
            //     200: result => {
            //         that.order_info = result.data.data;
            //         that.$apply();
            //         that.getOrderInfoCallback();
            //         //获取可选团队
            //         rq.get('getTeams', {
            //             200: result => {
            //                 that.teams = result.data.data;
            //                 that.$apply();
            //             }
            //         }, {
            //             team_type: 1
            //         })
            //     }
            // }, {
            //     user_id: that.id
            // })
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
            that.show_img_arr = that.order_info.base_info.wedding_need_pics ? that.order_info.base_info.wedding_need_pics : [];
            that.other_service_total_price = count_other_price;
            that.$apply();
        }
    }, {
        key: 'getOneOrderInfo',
        value: function getOneOrderInfo() {
            var that = this;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.hotel_list = result.data.hotel_list;
                    that.getOrderInfoCallback();
                    that.$apply();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.order_info = result.data.data;
                    that.hotel_list = result.data.hotel_list;
                    that.$apply();
                    that.getOrderInfoCallback();
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
                }
            }, {
                user_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/ordermsg'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybXNnLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJ3ZWRkaW5nX3BhZ2UiLCJtZXRob2RzIiwiZGVsZXRlSW1nIiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzaG93X2ltZ19hcnIiLCJzcGxpY2UiLCJ1cGxvYWRGaWxlIiwidGhhdCIsInd4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInN1Y2Nlc3MiLCJmaWxlIiwidXBMb2FkSW1ncyIsIkMiLCJFTlZfVVJMIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIm5hbWVzIiwidXJscyIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJmYWlsIiwiY29tcGxldGUiLCJ2aWV3Q2hlY2siLCJ3ZXB5IiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsImJpbmRMb2dvSW5mb0NoYW5nZSIsImJhc2VfaW5mbyIsImJyYW5kIiwiYnJhbmRfYXJyIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kU3ViQ29tcGFueUNoYW5nZSIsInN1Yl9jb21wYW55X251bSIsInN1Yl9jb21wYW55Iiwic3ViX2NvbXBhbnlfbmFtZSIsInN1Yl9jb21wYW55X2lkIiwiY2FuY2VsUmV0dXJuIiwiZGlzcGxheV9yZXR1cm4iLCJjb25maXJtUmV0dXJuIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9yZGVyX2lkIiwicmV0dXJuT3JkZXIiLCJnb1RvQ29udHJhY3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZEF0dGVudENoYW5nZSIsImludGVudF9pbmRleCIsImludGVudGlvbl9uYW1lIiwiaW50ZW50aW9uSW5mbyIsImludGVudGlvbl9pZCIsImJpbmRJbnB1dEppbmRpZU9yZGVySWQiLCJqaW5kaWVfb3JkZXJfaWQiLCJiaW5kRGF0ZUNoYW5nZSIsInNpZ25fZGF0ZSIsIm5hdmlnYXRlVG9SZWZ1bmRQYWdlIiwiYmluZElucHV0Rmlyc3RJbXByZXNzaW9uIiwiZmlyc3RfaW1wcmVzc2lvbiIsImJpbmRJbnB1dEZhbWlseUJhY2tncm91bmQiLCJmYW1pbHlfYmFja2dyb3VuZCIsImJpbmRJbnB1dFdlZGRpbmdEZW1hbmQiLCJ3ZWRkaW5nX25lZWRzIiwiYmluZElucHV0VGFibGVDb3VudCIsIndlZGRpbmdfdGFibGVfY291bnQiLCJlZGl0V2VlZGluZ1NjaGVkdWxlIiwiaW5mbyIsInNjaGVkdWxlX3Nlc3Npb24iLCJzY2hlZHVsZV90eXBlIiwiYXJlYV9uYW1lIiwic2NoZWR1bGVfZGF0ZSIsInNlc3Npb24iLCJzY2hlZHVsZV9lbmRfZGF0ZSIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJvdGhlcl9zZXJ2aWNlX3JhbmdlIiwib3RoZXJfc2VydmljZV9wZXJzb24iLCJvdGhlcl9zZXJ2aWNlX3Byb2plY3QiLCJvdGhlcl9zZXJ2aWNlX2xlYXNlIiwib3RoZXJfc2VydmljZV9wdXJjaGFzZSIsImJpbmRPdGhlclNlcnZpY2VUeXBlQ2hhbmdlIiwib3RoZXJfc2VydmVyIiwib3RoZXJfc2VydmljZV9jYXRlX3JhbmdlIiwib3RoZXJfc2VydmljZV9jYXRlX3JhbmdlX2FyciIsInN1YmplY3RfdHlwZSIsImJpbmRPdGhlclNlcnZpY2VDYXRlQ2hhbmdlIiwidG9nZ2xlUGF5UHJvIiwic2hvd19wYXlfcHJvIiwic2hvd19zZXJ2ZXJfaW5mbyIsInNob3dfYmFzZV9pbmZvIiwidG9nZ2xlRGlwbGF5U2VydmVySW5mbyIsInRvZ2dsZURpc3BsYXlCYXNlSW5mbyIsImJpbmRUZWFtQ2hhbmdlIiwidGVhbXNfaW5kZXgiLCJiaW5kUGF5Q2hhbmdlIiwicGF5X2luZGV4Iiwic2VydmVyX29mZmVyIiwicGF5X3R5cGVfbmFtZSIsInBheV9tZXRob2QiLCJuYW1lIiwicGF5bWVudF90eXBlIiwiYmluZEludGFsbG1lbnRDaGFuZ2UiLCJieV9zdGFnZXMiLCJieV9zdGFnZXNfaXRlbXNfaW5kZXgiLCJieV9zdGFnZXNfbmFtZSIsImJ5X3N0YWdlc19pdGVtcyIsImJpbmRJbnB1dE1haW5Db250cmFjdCIsIm1haW5fY29udHJhY3QiLCJiaW5kSW5wdXRMb2dvSW5mbyIsImRlbGV0ZU90aGVyU2VydmVyIiwicHVyIiwiaSIsImZvckVhY2giLCJwdXNoIiwiZWxlbWVudCIsImFkZE90aGVyU2VydmVyIiwic2VydmVyX3BhY2thZ2UiLCJuZWVkX2NvdW50Iiwic3ViamVjdF9wcmljZSIsImJpbmRJbnB1dFBheW1lbnRMYXN0IiwicGF5bWVudF9sYXN0IiwiYmluZElucHV0UGF5bWVudFNlY29uZCIsInBheW1lbnRfc2Vjb25kIiwiYmluZElucHV0VHJ1ZU1vbmV5IiwidHJ1ZV9tb25leSIsImJpbmRJbnB1dFBheW1lbnRGaXJzdCIsInBheW1lbnRfZmlyc3QiLCJiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFVwcGVyIiwic2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyIiwiYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZSIsInNlcnZlcl9lbmRfdG90YWxfcHJpY2UiLCJiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZSIsInNwbGl0ZV9lZ2dfcHJpY2UiLCJiaW5kRnJlZUNoYW5nZSIsInNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSIsImZyZWVfaW5kZXgiLCJiaW5kSW5wdXRCeVN0YWdlc1ByaWNlIiwiYnlfc3RhZ2VzX3ByaWNlIiwiYmluZElucHV0QnlTdGFnZXNVbml0UHJpY2UiLCJieV9zdGFnZXNfdW5pdF9wcmljZSIsImJpbmRJbnB1dEJ5U3RhZ2VzTnVtIiwiYnlfc3RhZ2VzX251bSIsImJpbmRJbnB1dFBheVR5cGUiLCJwYXlfdHlwZSIsImJpbmRJbnB1dFNlcnZlclRvdGFsUHJpY2UiLCJzZXJ2ZXJfdG90YWxfcHJpY2UiLCJiaW5kV2VkZGluZ0Rpc2NvdW50Q2hhbmdlIiwicGFja2FnZV9kaXNjb3VudF9uYW1lIiwiZGlzY291dCIsIndlZGRpbmciLCJkaXNjb3VudF9uYW1lIiwicGFja2FnZV9kaXNjb3VudCIsImRpc2NvdW50X2xldmVsIiwicGxhbiIsImJpbmRJbnB1dFBUb3RhbFByaWNlIiwidG90YWxfcHJpY2UiLCJiaW5kSW5wdXRQYWNrYWdlQ291bnRBbGwiLCJwYWNrYWdlX2NvdW50X2FsbCIsImJpbmRJbnB1dFBhY2thZ2VDb3VudEFkZFByaWNlIiwicGFja2FnZV9jb3VudF9hZGRfcHJpY2UiLCJiaW5kSW5wdXRQYWNrYWdlQ291bnRBZGQiLCJwYWNrYWdlX2NvdW50X2FkZCIsImJpbmRJbnB1dFBhY2thZ2VDb3VudCIsInBhY2thZ2VfY291bnQiLCJiaW5kSW5wdXRQYWNrYWdlRW5kUHJpY2UiLCJwYWNrYWdlX2VuZF9wcmljZSIsImJpbmRJbnB1dE5lZWRDb3VudCIsImJpbmRJbnB1dFN1YmplY3RQcmljZSIsImJpbmRJbnB1dFN1YmplY3RUeXBlIiwiYmluZElucHV0T3RoZXJUaXRsZSIsInNhdmVJbmRleCIsInBhY2thZ2VfaW5kZXgiLCJiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UiLCJ3ZWRkaW5nX2luZGV4IiwicGFja2FnZV9uYW1lIiwicGFja2FnZV9wcmljZSIsInN1cHBsaWVyX3BhY2thZ2VfaWQiLCJiaW5kUGxhblBhY2thZ2VDaGFuZ2UiLCJwbGFuX2luZGV4IiwicGxhbl9wYWNrYWdlIiwiZWRpdFNlcnZlclRvZ2dsZSIsIml0ZW0iLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiZ2V0T25lT3JkZXJJbmZvIiwiSlNPTiIsInN0cmluZ2lmeSIsImJpbmRJbnB1dFVzZXJOYW1lIiwidXNlcl9uYW1lIiwiYmluZElucHV0VXNlck1vYmlsZSIsInVzZXJfbW9iaWxlIiwiYmluZElucHV0R3Jvb21OYW1lIiwiZ3Jvb21fbmFtZSIsImJpbmRJbnB1dEdyb29tTW9iaWxlIiwiZ3Jvb21fbW9iaWxlIiwiYmluZElucHV0R3Jvb21XZWNoYXQiLCJncm9vbV93ZWNoYXQiLCJiaW5kSW5wdXRCcmlkZU5hbWUiLCJicmlkZV9uYW1lIiwiYmluZElucHV0QnJpZGVNb2JpbGUiLCJicmlkZV9tb2JpbGUiLCJiaW5kSW5wdXRCcmlkZVdlY2hhdCIsImJyaWRlX3dlY2hhdCIsImJpbmRJbnB1dFNjaGVkdWxlVHlwZSIsImJpbmRJbnB1dFdlZGRpbmdEYXRlIiwid2VkZGluZ19kYXRlIiwiYmluZFdlZWRpbmdBZGRyZXNzQ2hhbmdlIiwid2VkZGluZ19hZGRyZXNzIiwiaG90ZWxfbGlzdCIsImhvdGVsX25hbWUiLCJiaW5kSW5wdXRXZWVkaW5nQWRkcmVzcyIsImJpbmRJbnB1dFdlZWRpbmdTZXNzaW9uIiwid2VkZGluZ19zZXNzaW9uIiwiYmluZElucHV0U2NoZWR1bGVFbmRUaW1lIiwic2NoZWR1bGVfZW5kX3RpbWUiLCJlZGl0QmFzZVRvZ2dsZSIsIm9yZGVyX3JlbWFyayIsInVzZXJfaWQiLCJ3ZWRkaW5nX25lZWRfcGljcyIsImpvaW4iLCJzdWJtaXQiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwib3JkZXJfc3RhdHVzIiwicmVzdWx0IiwibXNnIiwicGxhbm5pbmdfdGVhbV9pZCIsInRlYW1zIiwidG9nZ2xlVGFiIiwidGFiX2luZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJnb1RvUGF5TG9nIiwiZ29Ub1BheUxvZ0NoZWNrIiwiaXNfZGVwb3NpdCIsImRlcG9zaXQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZGlzX2VkaXQiLCJjb3VudF9vdGhlcl9wcmljZSIsIm90aGVyX3NlcnZpY2VfdG90YWxfcHJpY2UiLCJnZXRPcmRlckluZm9DYWxsYmFjayIsInRlYW1fdHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFD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QUFDMURuTyx5Q0FBSzRGLFdBQUwsR0FBbUJrQixDQUFuQjtBQUNIO0FBQ0RBO0FBQ0gsNkJBTEQ7QUFNQTlHLGlDQUFLZ0IsTUFBTDtBQUNIO0FBWGMscUJBQW5CLEVBWUc7QUFDQ29PLG1DQUFXO0FBRFoscUJBWkg7QUFlSDtBQXRCcUIsYUFBMUIsRUF1Qkc7QUFDQzFCLHlCQUFTMU4sS0FBS2I7QUFEZixhQXZCSDtBQTBCSDs7OztFQXZwQjhCaUMsZUFBS2lPLEk7O2tCQUFuQjlRLEsiLCJmaWxlIjoib3JkZXJtc2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+Wuoui1hOS/oeaBrycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICBvcmRlcl9pbmZvOiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgZWRpdF9iYXNlOiBmYWxzZSxcbiAgICAgICAgICAgIGVkaXRfc2VydmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdlZGRpbmdfcGFnZTogbnVsbCwgLy/lqZrlrrTppJDmoIdcbiAgICAgICAgICAgIHdlZGRpbmdfcGFnZTogW10sXG4gICAgICAgICAgICB3ZWRkaW5nX2luZGV4OiAwLFxuICAgICAgICAgICAgcGxhbl9wYWNrYWdlOiBudWxsLCAvL+WpmuWutOmkkOagh1xuICAgICAgICAgICAgcGxhbl9pbmRleDogMCxcbiAgICAgICAgICAgIGRpc2NvdXRfaW5kZXg6IDAsXG4gICAgICAgICAgICBmcmVlX2FycjogWyfkuI3lhY3mga8nLCAn5YWN5oGvJ10sXG4gICAgICAgICAgICBkaXNjb3V0OiBudWxsLFxuICAgICAgICAgICAgZnJlZV9pbmRleDogMCxcbiAgICAgICAgICAgIHBhY2thZ2VfaW5kZXg6IC0xLFxuICAgICAgICAgICAgcGF5X2luZGV4OiAwLFxuICAgICAgICAgICAgcGF5X21ldGhvZDogW10sXG4gICAgICAgICAgICBwYXlfdHlwZV9uYW1lOiAnJyxcbiAgICAgICAgICAgIHRlYW1zOiBudWxsLFxuICAgICAgICAgICAgdGVhbXNfaW5kZXg6IDAsXG4gICAgICAgICAgICBzaG93X2Jhc2VfaW5mbzogZmFsc2UsXG4gICAgICAgICAgICBzaG93X3NlcnZlcl9pbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfcGF5X3BybzogZmFsc2UsXG4gICAgICAgICAgICBkaXNfZWRpdDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX2NhdGVfcmFuZ2U6W10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3JhbmdlOlsn5biD572u57G7Jywn5pyN5Yqh57G7J10sXG4gICAgICAgICAgICAvLyBvdGhlcl9zZXJ2aWNlX3JhbmdlOiBbXG4gICAgICAgICAgICAvLyAgICAgWyfkurrlkZjnsbsnLCAn5bel56iL57G7JywgJ+enn+i1geexuycsICfph4fotK3nsbsnXSxcbiAgICAgICAgICAgIC8vICAgICBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcGVyc29uOiBbJ+WPuOS7qicsICfljJblpoYnLCAn5pGE5b2xJywgJ+aRhOWDjycsICfnrqHlrrYnLCAn5ryU5Ye6JywgJ+S5kOmYnycsICflsI/mj5DnkLQnLCAnREovVkonLCAn5YW86IGM5Lq65ZGYLeWwj+enmOS5picsICflhbbku5bmlK/lh7onXSxcbiAgICAgICAgICAgIG90aGVyX3NlcnZpY2VfcHJvamVjdDogWyfliLbkvZznsbst5bm/5ZGK5Yi25L2cJywgJ+mynOiKsScsICfoirHoibrluIgnLCAn5pCt5bu6LeaIt+Wklumfs+WTjScsICfnga/lhYknLCAn5pGH6IeCJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX2xlYXNlOiBbJ+ekvOacjScsICflqZrovaYnLCAn5aSn5be0JywgJ+WpmuaIvycsICfovablpLToirEnLCAn5omL5o2n6IqxJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3B1cmNoYXNlOiBbJ+eUnOWTgScsICfllpzns5YnLCAn5Ly05omL56S8JywgJ+awlOeQgycsICfopb/oo4UnLCAn54Of54GrJywgJ+WBnOi9puWIuCcsICflv6vpgJLotLknLCAn6K+35biWJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX211aXRpX2luZGV4OiBbMCwgMF0sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlOiAwLFxuICAgICAgICAgICAgLy8gYnlfc3RhZ2VzX2l0ZW1zOiBbJ+WIhuacnycsICfkuI3liIbmnJ8nXSxcbiAgICAgICAgICAgIGJ5X3N0YWdlc19pdGVtc19pbmRleDogMCxcbiAgICAgICAgICAgIGludGVudGlvbkluZm86IG51bGwsXG4gICAgICAgICAgICBpbnRlbnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBkaXNwbGF5X3JldHVybjogZmFsc2UsXG4gICAgICAgICAgICBob3RlbF9saXN0OltdLFxuICAgICAgICAgICAgc3ViX2NvbXBhbnk6W10sXG4gICAgICAgICAgICBicmFuZF9hcnI6Wyfor7rkuIHlsbHlqZrluobkvIHliJInLCdEcmVhbXBhcmsnLCfllpzmgqDorrDkuIDnq5nlvI8nLCfllpzmgqDorrDlqZrlrrTvvIjku6PmlLbku5jvvIknLCfllpzmgqDorrDlqZrlrrTvvIjov5TkvaPvvIknXSxcblxuICAgICAgICAgICAgLy8gb3RoZXJfc2VydmljZV9jYXRlX3JhbmdlOlsn5Y+45LuqJywn552j5a+8Jywn566h5a62Jywn5YyW5aaGJywn5pGE5b2xJywn5pGE5YOPJ10sXG4gICAgICAgICAgICBvdGhlcl9zZXJ2aWNlX2NhdGVfcmFuZ2VfYXJyOltcbiAgICAgICAgICAgICAgWyfluIPnva7lrprph5EnLCfluIPnva7kuK3mrL4nLCfluIPnva7lsL7mrL4nLCfluIPnva7lop7liqDmrL4nXSxcbiAgICAgICAgICAgICAgWyflj7jku6onLCfnnaPlr7wnLCfnrqHlrrYnLCfljJblpoYnLCfmkYTlvbEnLCfmkYTlg48nXVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgIGRlbGV0ZUltZyhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X2ltZ19hcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICB1cGxvYWRGaWxlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAnOScsIC8v5pyA5aSa5Y+v5Lul6YCJ5oup55qE5Zu+54mH5byg5pWwLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS51cExvYWRJbWdzKEMuRU5WX1VSTCArICd1cGxvYWRDb21tUHJvb2YnLCByZXMudGVtcEZpbGVQYXRocywgMCwgW10sIFtdLCBmdW5jdGlvbihuYW1lcywgdXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQudXBsb2FkX2ltZ19hcnIgPSB0aGF0LnVwbG9hZF9pbWdfYXJyLmNvbmNhdChuYW1lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93X2ltZ19hcnIgPSB0aGF0LnNob3dfaW1nX2Fyci5jb25jYXQodXJscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5zaG93X2ltZ19hcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC8v6L+U5Zue5Zu+54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGoIHRlbXBGaWxlUGF0aHMsXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgdmlld0NoZWNrKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMuc2hvd19pbWdfYXJyW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgdXJsczogdGhpcy5zaG93X2ltZ19hcnIgLy/pnIDopoHpooTop4jnmoTlm77niYfpk77mjqXliJfooagsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIGJpbmRMb2dvSW5mb0NoYW5nZShlKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmJyYW5kPXRoaXMuYnJhbmRfYXJyW2UuZGV0YWlsLnZhbHVlXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kU3ViQ29tcGFueUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnN1Yl9jb21wYW55X251bT10aGlzLnN1Yl9jb21wYW55W2UuZGV0YWlsLnZhbHVlXS5zdWJfY29tcGFueV9udW07XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zdWJfY29tcGFueV9uYW1lPXRoaXMuc3ViX2NvbXBhbnlbZS5kZXRhaWwudmFsdWVdLnN1Yl9jb21wYW55X25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zdWJfY29tcGFueV9pZD10aGlzLnN1Yl9jb21wYW55W2UuZGV0YWlsLnZhbHVlXS5zdWJfY29tcGFueV9pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxSZXR1cm4oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfcmV0dXJuID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybVJldHVybigpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdyZXR1cm5PcmRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9yZXR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9Db250cmFjdCgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjb250cmFjdD9pZD0nICsgdGhpcy5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRBdHRlbnRDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZW50X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5pbnRlbnRpb25fbmFtZSA9IHRoaXMuaW50ZW50aW9uSW5mb1t0aGlzLmludGVudF9pbmRleF0uaW50ZW50aW9uX25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5pbnRlbnRpb25faWQgPSB0aGlzLmludGVudGlvbkluZm9bdGhpcy5pbnRlbnRfaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEppbmRpZU9yZGVySWQoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5qaW5kaWVfb3JkZXJfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zaWduX2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0ZVRvUmVmdW5kUGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvcmVmdW5kP29yZGVyX2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0Rmlyc3RJbXByZXNzaW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmZpcnN0X2ltcHJlc3Npb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRGYW1pbHlCYWNrZ3JvdW5kKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmZhbWlseV9iYWNrZ3JvdW5kID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V2VkZGluZ0RlbWFuZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX25lZWRzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VGFibGVDb3VudChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX3RhYmxlX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFdlZWRpbmdTY2hlZHVsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMub3JkZXJfaW5mby5zY2hlZHVsZV9zZXNzaW9uO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3NjaGVkdWxlP2lkPScgKyBpbmZvLmlkICsgJyZvcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArICcmc2NoZWR1bGVfdHlwZT0nICsgaW5mby5zY2hlZHVsZV90eXBlICsgJyZhcmVhX25hbWU9JyArIGluZm8uYXJlYV9uYW1lICsgJyZzY2hlZHVsZV9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2RhdGUgKyAnJnNlc3Npb249JyArIGluZm8uc2Vzc2lvbiArICcmc2NoZWR1bGVfZW5kX2RhdGU9JyArIGluZm8uc2NoZWR1bGVfZW5kX2RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlQ29sdW1uQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wZXJzb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3Byb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX2xlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9wdXJjaGFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0udGl0bGUgPSB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLm90aGVyX3NlcnZpY2VfY2F0ZV9yYW5nZT10aGlzLm90aGVyX3NlcnZpY2VfY2F0ZV9yYW5nZV9hcnJbZS5kZXRhaWwudmFsdWVdO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfdHlwZT0nJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kT3RoZXJTZXJ2aWNlQ2F0ZUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfdHlwZSA9IHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLm90aGVyX3NlcnZpY2VfY2F0ZV9yYW5nZVtlLmRldGFpbC52YWx1ZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUGF5UHJvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gIXRoaXMuc2hvd19wYXlfcHJvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVEaXBsYXlTZXJ2ZXJJbmZvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9ICF0aGlzLnNob3dfc2VydmVyX2luZm87XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93X3BheV9wcm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfYmFzZV9pbmZvID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlRGlzcGxheUJhc2VJbmZvKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSAhdGhpcy5zaG93X2Jhc2VfaW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfc2VydmVyX2luZm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfcGF5X3BybyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRUZWFtQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW1zX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBheUNoYW5nZShlKSB7IC8vaW52YWxpZFxuICAgICAgICAgICAgICAgIHRoaXMucGF5X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXlfdHlwZV9uYW1lID0gdGhpcy5wYXlfbWV0aG9kW3RoaXMucGF5X2luZGV4XS5uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF90eXBlID0gdGhpcy5wYXlfbWV0aG9kW3RoaXMucGF5X2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW50YWxsbWVudENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXg9ZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXMgPSB0aGlzLmJ5X3N0YWdlc19pdGVtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5X3R5cGVfbmFtZSA9IHRoaXMuYnlfc3RhZ2VzX2l0ZW1zW3RoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4XTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheW1lbnRfdHlwZSA9IHRoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX25hbWUgPSB0aGlzLm9yZGVyX2luZm8uYnlfc3RhZ2VzX2l0ZW1zW3RoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYWluQ29udHJhY3QoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ubWFpbl9jb250cmFjdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dExvZ29JbmZvKGUpe1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uYnJhbmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVPdGhlclNlcnZlcihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXIucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9IHB1cjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRPdGhlclNlcnZlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgfHwgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlID09ICctJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRfY291bnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYXltZW50TGFzdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2xhc3QgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYXltZW50U2Vjb25kKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheW1lbnRfc2Vjb25kID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VHJ1ZU1vbmV5KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnRydWVfbW9uZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYXltZW50Rmlyc3QoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9maXJzdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNlcnZlckVuZFRvdGFsVXBwZXIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0U3BsaXRlRWdnUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRGcmVlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkIGZyZWUgZm9yJywgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEJ5U3RhZ2VzUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QnlTdGFnZXNVbml0UHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX3VuaXRfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCeVN0YWdlc051bShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfbnVtID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGF5VHlwZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXlfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNlcnZlclRvdGFsUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFdlZGRpbmdEaXNjb3VudENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50X25hbWUgPSB0aGlzLmRpc2NvdXQud2VkZGluZ1tlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50ID0gdGhpcy5kaXNjb3V0LndlZGRpbmdbZS5kZXRhaWwudmFsdWVdLmRpc2NvdW50X2xldmVsO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLmRpc2NvdXQud2VkZGluZ1tlLmRldGFpbC52YWx1ZV0uaWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9kaXNjb3VudF9uYW1lID0gdGhpcy5kaXNjb3V0LnBsYW5bZS5kZXRhaWwudmFsdWVdLmRpc2NvdW50X25hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9kaXNjb3VudCA9IHRoaXMuZGlzY291dC53ZWRkaW5nW2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9sZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2Rpc2NvdW50ID0gdGhpcy5kaXNjb3V0LnBsYW5bZS5kZXRhaWwudmFsdWVdLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQVG90YWxQcmljZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS50b3RhbF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBhY2thZ2VDb3VudEFsbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFBhY2thZ2VDb3VudEFkZFByaWNlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWRkX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50QWRkKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWRkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0UGFja2FnZUNvdW50KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQYWNrYWdlRW5kUHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXROZWVkQ291bnQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLm5lZWRfY291bnQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTdWJqZWN0UHJpY2UoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTdWJqZWN0VHlwZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0T3RoZXJUaXRsZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0udGl0bGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlSW5kZXgoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFja2FnZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFja2FnZV9pbmRleCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFdlZGRpbmdQYWNrYWdlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndlZGRpbmdfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcGFja2FnZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX25hbWUgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9wcmljZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9wcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0uc3VwcGxpZXJfcGFja2FnZV9pZCA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0uaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBsYW5QYWNrYWdlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5faW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcGFja2FnZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX25hbWUgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9wcmljZSA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0ucGFja2FnZV9wcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0uc3VwcGxpZXJfcGFja2FnZV9pZCA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0uaWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFNlcnZlclRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX29mZmVyO1xuICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pyq5pS55Y+YJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LnN1cHBsaWVyX3BhY2thZ2VfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3VwcGxpZXJfcGFja2FnZV9pZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5lZGl0X3NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoJ3VwZGF0ZVNlcnZlck9mZmVyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZWRpdF9zZXJ2ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0T25lT3JkZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9zZXJ2ZXI6IEpTT04uc3RyaW5naWZ5KHRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFja2FnZV9hcnI6IEpTT04uc3RyaW5naWZ5KHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX3RvdGFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGF5X3R5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfbnVtOiBpdGVtLmJ5X3N0YWdlc19udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXM6IHRoYXQuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnlfc3RhZ2VzX3VuaXRfcHJpY2U6IGl0ZW0uYnlfc3RhZ2VzX3VuaXRfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBieV9zdGFnZXNfcHJpY2U6IGl0ZW0uYnlfc3RhZ2VzX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlOiBpdGVtLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0ZV9lZ2dfcHJpY2U6IGl0ZW0uc3BsaXRlX2VnZ19wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcl9lbmRfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX2VuZF90b3RhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcl90b3RhbF9wcmljZV91cHBlcjogaXRlbS5zZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X2ZpcnN0OiBpdGVtLnBheW1lbnRfZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3NlY29uZDogaXRlbS5wYXltZW50X3NlY29uZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfbGFzdDogaXRlbS5wYXltZW50X2xhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlX21vbmV5OiBpdGVtLnRydWVfbW9uZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250cmFjdF9wcm9mOiB0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8udXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEdyb29tTmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5ncm9vbV9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0R3Jvb21Nb2JpbGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uZ3Jvb21fbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0R3Jvb21XZWNoYXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uZ3Jvb21fd2VjaGF0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QnJpZGVOYW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmJyaWRlX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCcmlkZU1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmlkZV9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRCcmlkZVdlY2hhdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmlkZV93ZWNoYXQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRTY2hlZHVsZVR5cGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc2NoZWR1bGVfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZGRpbmdEYXRlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRXZWVkaW5nQWRkcmVzc0NoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX2FkZHJlc3MgPSB0aGlzLmhvdGVsX2xpc3RbZS5kZXRhaWwudmFsdWVdLmhvdGVsX25hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0V2VlZGluZ0FkZHJlc3MoKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFdlZWRpbmdTZXNzaW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfc2Vzc2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNjaGVkdWxlRW5kVGltZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zY2hlZHVsZV9lbmRfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGJpbmRJbnB1dFVzZXJOYW1lKGUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGVkaXRCYXNlVG9nZ2xlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm87XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZWRpdF9iYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJxLmdldCgndXBkYXRlQmFzZUluZm8nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lZGl0X2Jhc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgamluZGllX29yZGVyX2lkOiB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLmppbmRpZV9vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fY29udHJhY3Q6IGl0ZW0ubWFpbl9jb250cmFjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogaXRlbS51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX21vYmlsZTogaXRlbS51c2VyX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX25hbWU6IGl0ZW0uZ3Jvb21fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb29tX21vYmlsZTogaXRlbS5ncm9vbV9tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm9vbV93ZWNoYXQ6IGl0ZW0uZ3Jvb21fd2VjaGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbmFtZTogaXRlbS5icmlkZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGVfbW9iaWxlOiBpdGVtLmJyaWRlX21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRlX3dlY2hhdDogaXRlbS5icmlkZV93ZWNoYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZV90eXBlOiBpdGVtLnNjaGVkdWxlX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX2RhdGU6IGl0ZW0ud2VkZGluZ19kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkZGluZ19hZGRyZXNzOiBpdGVtLndlZGRpbmdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlZGRpbmdfc2Vzc2lvbjogaXRlbS53ZWRkaW5nX3Nlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX3RhYmxlX2NvdW50OiBpdGVtLndlZGRpbmdfdGFibGVfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9pbXByZXNzaW9uOiBpdGVtLmZpcnN0X2ltcHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYW1pbHlfYmFja2dyb3VuZDogaXRlbS5mYW1pbHlfYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZGRpbmdfbmVlZHM6IGl0ZW0ud2VkZGluZ19uZWVkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjaGVkdWxlX2VuZF90aW1lOiBpdGVtLnNjaGVkdWxlX2VuZF90aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfcmVtYXJrOiBpdGVtLm9yZGVyX3JlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVudGlvbl9pZDogaXRlbS5pbnRlbnRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBpdGVtLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuZDppdGVtLmJyYW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbl9kYXRlOiBpdGVtLnNpZ25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jb21wYW55X251bTppdGVtLnN1Yl9jb21wYW55X251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yl9jb21wYW55X2lkOml0ZW0uc3ViX2NvbXBhbnlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWRkaW5nX25lZWRfcGljczogdGhhdC5zaG93X2ltZ19hcnIuam9pbignLCcpXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnNpZ25fZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+etvue6puaXpeacn+S4jeiDveS4uuepuicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTkuK0uLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdzdWJtaXRPcmRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfc3RhdHVzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDIwMjogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NvbXBhbnlfaWQ6IHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc3ViX2NvbXBhbnlfaWQsXG4gICAgICAgICAgICAgICAgICAgIHBsYW5uaW5nX3RlYW1faWQ6IHRoaXMudGVhbXNbdGhpcy50ZWFtc19pbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJfaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd1VwKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYl9pbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JkZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9QYXlMb2coKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL29yZGVycGF5P29yZGVyX2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1BheUxvZ0NoZWNrKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2RlcG9zaXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXBvc2l0O1xuICAgICAgICAgICAgICAgIGlmIChpc19kZXBvc2l0ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9wcmVwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcnBheT9vcmRlcl9kZXBvc2l0X2lkPScgKyBpZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgLy8gcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAgICAgICAvLyAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGF0Lm9yZGVyX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGF0LmdldE9yZGVySW5mb0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8v6I635Y+W5Y+v6YCJ5Zui6ZifXG4gICAgICAgICAgICAvLyAgICAgICAgIHJxLmdldCgnZ2V0VGVhbXMnLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGVhbV90eXBlOiAxXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBycS5nZXQoJ2dldEluaXREYXRhJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbnRlbnRpb25JbmZvID0gcmVzdWx0LmRhdGEuaW50ZW50aW9uSW5mbztcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBycS5nZXQoJ2dldFN1YkNvbXBhbnlMaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zdWJfY29tcGFueT1yZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICB9XG4gICAgICAgIGdldE9yZGVySW5mb0NhbGxiYWNrKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5mcmVlX2luZGV4ID0gdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWU7XG4gICAgICAgICAgICB0aGF0LmRpc19lZGl0ID0gKHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfc3RhdHVzID09IDAgfHwgdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9zdGF0dXMgPT0gNCk7XG4gICAgICAgICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgfHwgdGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID0gW107XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGNvdW50X290aGVyX3ByaWNlID0gMDtcbiAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb3VudF9vdGhlcl9wcmljZSArPSBlbGVtZW50LnN1YmplY3RfcHJpY2UgKiBlbGVtZW50Lm5lZWRfY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX25lZWRfcGljcz90aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfbmVlZF9waWNzOltdO1xuICAgICAgICAgICAgdGhhdC5vdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlID0gY291bnRfb3RoZXJfcHJpY2U7XG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZ2V0T25lT3JkZXJJbmZvKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmhvdGVsX2xpc3Q9cmVzdWx0LmRhdGEuaG90ZWxfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRPcmRlckluZm9DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0T25lT3JkZXJJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5ob3RlbF9saXN0PXJlc3VsdC5kYXRhLmhvdGVsX2xpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0T3JkZXJJbmZvQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgLy/ojrflj5blj6/pgInlm6LpmJ9cbiAgICAgICAgICAgICAgICAgICAgcnEuZ2V0KCdnZXRUZWFtcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLnBsYW5uaW5nX3RlYW1faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1fdHlwZTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19