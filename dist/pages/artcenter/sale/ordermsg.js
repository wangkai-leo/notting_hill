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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybXNnLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImlkIiwiZWRpdF9iYXNlIiwiZWRpdF9zZXJ2ZXIiLCJ3ZWRkaW5nX3BhZ2UiLCJtZXRob2RzIiwiYmluZFN1YkNvbXBhbnlDaGFuZ2UiLCJlIiwiYmFzZV9pbmZvIiwic3ViX2NvbXBhbnlfbnVtIiwic3ViX2NvbXBhbnkiLCJkZXRhaWwiLCJ2YWx1ZSIsInN1Yl9jb21wYW55X25hbWUiLCJzdWJfY29tcGFueV9pZCIsImRlbGV0ZVdlZWRpbmdTY2hlZHVsZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWNfc2NoZWR1bGVfc2Vzc2lvbiIsInRoYXQiLCJycSIsImdldCIsInNwbGljZSIsIiRhcHBseSIsImJpbmRGaXJzdERhdGVDaGFuZ2UiLCJzZXJ2ZXJfb2ZmZXIiLCJwYXltZW50X2ZpcnN0X2RhdGUiLCJiaW5kU2Vjb25kRGF0ZUNoYW5nZSIsInBheW1lbnRfc2Vjb25kX2RhdGUiLCJiaW5kTGFzdERhdGVDaGFuZ2UiLCJwYXltZW50X2xhc3RfZGF0ZSIsImNhbmNlbFJldHVybiIsImRpc3BsYXlfcmV0dXJuIiwiY29uZmlybVJldHVybiIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9yZGVyX2lkIiwicmV0dXJuT3JkZXIiLCJuYXZpZ2F0ZVRvVGFzdGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZEF0dGVudENoYW5nZSIsImludGVudF9pbmRleCIsImludGVudGlvbl9uYW1lIiwiaW50ZW50aW9uSW5mbyIsImludGVudGlvbl9pZCIsImJpbmREYXRlQ2hhbmdlIiwic2lnbl9kYXRlIiwiYmluZElucHV0QnlTdGFnZXNCZWZvcmVQcmljZSIsImJ5X3N0YWdlc19iZWZvcmVfcHJpY2UiLCJiaW5kSW5wdXRGcmVlQ291bnQiLCJlZGl0X2ZyZWVfY291bnRfbnVtIiwiZGVsZXRlSXRlbSIsImRpc3BsYXlfZWRpdF9mcmVlX2NvdW50IiwiY2hhbmdlSXRlbSIsImZyZWVfc2VydmVyIiwiZnJlZV9zZXJ2ZXJfZWlkdF9pbmRleCIsIm5lZWRfY291bnQiLCJlZGl0RnJlZVNlcnZpY2VDb3VudCIsImZyZWVTZXJ2aWNlQWRkIiwiZGlzcGxheV9mcmVlX3NlcnZpY2UiLCJwdXJwb3NlX2ZyZWUiLCJmcmVlX3NlcnZlcnNfYXJyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGVja2VkIiwiZWwiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInN1YmplY3RfcHJpY2UiLCJwcm9kdWN0X3ByaWNlIiwic3ViamVjdF9jb3N0IiwicHJvZHVjdF9jb3N0Iiwic3ViamVjdF90eXBlIiwicHJvZHVjdF9jYXRlZ29yeSIsInByb2R1Y3RfbmFtZSIsInRvZ2dsZUNoZWNrZWQiLCJnb1RvQ29udHJhY3QiLCJuYXZpZ2F0ZVRvUmVmdW5kUGFnZSIsImVkaXRXZWVkaW5nU2NoZWR1bGUiLCJpbmZvIiwic2NoZWR1bGVfc2Vzc2lvbiIsImRlbCIsInNjaGVkdWxlX3R5cGUiLCJhcmVhX25hbWUiLCJzY2hlZHVsZV9kYXRlIiwic2Vzc2lvbiIsInNjaGVkdWxlX2VuZF9kYXRlIiwidG9nZ2xlV2VlZGluZ1NjaGVkdWxlSW5mbyIsImRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSIsInNob3dfc2VydmVyX2luZm8iLCJzaG93X3BheV9wcm8iLCJzaG93X2Jhc2VfaW5mbyIsImJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UiLCJjb2x1bW4iLCJvdGhlcl9zZXJ2aWNlX3JhbmdlIiwib3RoZXJfc2VydmljZV9wZXJzb24iLCJvdGhlcl9zZXJ2aWNlX3Byb2plY3QiLCJvdGhlcl9zZXJ2aWNlX2xlYXNlIiwib3RoZXJfc2VydmljZV9wdXJjaGFzZSIsImJpbmRPdGhlclNlcnZpY2VUeXBlQ2hhbmdlIiwidmFsdWVzIiwib3RoZXJfc2VydmVyIiwiYmluZFByZXNlbnRTZXJ2aWNlVHlwZUNoYW5nZSIsImZyZWVfaW5kZXgiLCJ0b2dnbGVQYXlQcm8iLCJ0b2dnbGVEaXBsYXlTZXJ2ZXJJbmZvIiwidG9nZ2xlRGlzcGxheUJhc2VJbmZvIiwiYmluZFRlYW1DaGFuZ2UiLCJ0ZWFtc19pbmRleCIsImJpbmRQYXlDaGFuZ2UiLCJwYXlfaW5kZXgiLCJwYXlfdHlwZV9uYW1lIiwicGF5X21ldGhvZCIsIm5hbWUiLCJwYXltZW50X3R5cGUiLCJiaW5kSW50YWxsbWVudENoYW5nZSIsImJ5X3N0YWdlcyIsImJ5X3N0YWdlc19pdGVtc19pbmRleCIsImJ5X3N0YWdlc19uYW1lIiwiYnlfc3RhZ2VzX2l0ZW1zIiwiYmluZElucHV0TWFpbkNvbnRyYWN0IiwibWFpbl9jb250cmFjdCIsImdvVG9NZW51IiwiZGVsZXRlT3RoZXJTZXJ2ZXIiLCJwdXIiLCJpIiwiZGVsZXRlUHJlc2VudFNlcnZpY2UiLCJhZGRPdGhlclNlcnZlciIsInNlcnZlcl9wYWNrYWdlIiwiYWRkUHJlc2VudFNlcnZpY2UiLCJiaW5kSW5wdXRQYXltZW50TGFzdCIsInBheW1lbnRfbGFzdCIsImJpbmRJbnB1dFBheW1lbnRTZWNvbmQiLCJwYXltZW50X3NlY29uZCIsImJpbmRJbnB1dFBheW1lbnRGaXJzdCIsInBheW1lbnRfZmlyc3QiLCJiaW5kSW5wdXRTZXJ2ZXJFbmRUb3RhbFVwcGVyIiwic2VydmVyX3RvdGFsX3ByaWNlX3VwcGVyIiwiYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZSIsInNlcnZlcl9lbmRfdG90YWxfcHJpY2UiLCJiaW5kSW5wdXRTcGxpdGVFZ2dQcmljZSIsInNwbGl0ZV9lZ2dfcHJpY2UiLCJiaW5kQmx1clNwbGl0ZUVnZ1ByaWNlIiwiYnlfc3RhZ2VzX3ByaWNlIiwiYmluZEZyZWVDaGFuZ2UiLCJzcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWUiLCJiaW5kSW5wdXRCeVN0YWdlc1ByaWNlIiwiYmluZElucHV0QnlTdGFnZXNVbml0UHJpY2UiLCJieV9zdGFnZXNfdW5pdF9wcmljZSIsImJpbmRJbnB1dEJ5U3RhZ2VzTnVtIiwiYnlfc3RhZ2VzX251bSIsImJpbmRJbnB1dFBheVR5cGUiLCJwYXlfdHlwZSIsImJpbmRJbnB1dFNlcnZlclRvdGFsUHJpY2UiLCJzZXJ2ZXJfdG90YWxfcHJpY2UiLCJiaW5kV2VkZGluZ0Rpc2NvdW50Q2hhbmdlIiwicGFja2FnZV9kaXNjb3VudF9uYW1lIiwid2VkZGluZ19pbmRleCIsInBhY2thZ2VfZGlzY291bnRfbGlzdCIsImRpc2NvdW50X25hbWUiLCJwYWNrYWdlX2Rpc2NvdW50IiwiZGlzY291bnRfbGV2ZWwiLCJwYWNrYWdlX2VuZF9wcmljZSIsImFmdGVyX2Rpc2NvdW50IiwidG90YWxfcHJpY2UiLCJwYWNrYWdlX2NvdW50X2FsbCIsInBsYW5fcGFja2FnZSIsInBsYW5faW5kZXgiLCJwYXJzZUludCIsImJpbmRJbnB1dFBUb3RhbFByaWNlIiwiYmluZElucHV0UGFja2FnZUNvdW50QWxsIiwiYmluZElucHV0UGFja2FnZUNvdW50QWRkUHJpY2UiLCJwYWNrYWdlX2NvdW50X2FkZF9wcmljZSIsImJpbmRJbnB1dFBhY2thZ2VDb3VudEFkZCIsInBhY2thZ2VfY291bnRfYWRkIiwiYmluZElucHV0UGFja2FnZUNvdW50IiwicGFja2FnZV9jb3VudCIsImJpbmRJbnB1dFBhY2thZ2VFbmRQcmljZSIsImJpbmRJbnB1dE5lZWRDb3VudCIsImJpbmRJbnB1dFN1YmplY3RQcmljZSIsImJpbmRJbnB1dFN1YmplY3RUeXBlIiwiYmluZElucHV0T3RoZXJUaXRsZSIsInNhdmVJbmRleCIsInBhY2thZ2VfaW5kZXgiLCJiaW5kV2VkZGluZ1BhY2thZ2VDaGFuZ2UiLCJwYWNrYWdlX25hbWUiLCJwYWNrYWdlX3ByaWNlIiwic3VwcGxpZXJfcGFja2FnZV9pZCIsImJpbmRQbGFuUGFja2FnZUNoYW5nZSIsImVkaXRTZXJ2ZXJUb2dnbGUiLCJpdGVtIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJnZXRPbmVPcmRlckluZm8iLCJKU09OIiwic3RyaW5naWZ5IiwicGFja2FnZV9hcnIiLCJiaW5kSW5wdXRVc2VyTmFtZSIsInVzZXJfbmFtZSIsImJpbmRJbnB1dFVzZXJNb2JpbGUiLCJ1c2VyX21vYmlsZSIsImJpbmRJbnB1dEdyb29tTmFtZSIsImdyb29tX25hbWUiLCJiaW5kSW5wdXRHcm9vbU1vYmlsZSIsImdyb29tX21vYmlsZSIsImJpbmRJbnB1dEdyb29tV2VjaGF0IiwiZ3Jvb21fd2VjaGF0IiwiYmluZElucHV0QnJpZGVOYW1lIiwiYnJpZGVfbmFtZSIsImJpbmRJbnB1dEJyaWRlTW9iaWxlIiwiYnJpZGVfbW9iaWxlIiwiYmluZElucHV0QnJpZGVXZWNoYXQiLCJicmlkZV93ZWNoYXQiLCJiaW5kSW5wdXRTY2hlZHVsZVR5cGUiLCJiaW5kSW5wdXRXZWRkaW5nRGF0ZSIsIndlZGRpbmdfZGF0ZSIsImJpbmRJbnB1dFdlZWRpbmdBZGRyZXNzIiwid2VkZGluZ19hZGRyZXNzIiwiYmluZElucHV0V2VlZGluZ1Nlc3Npb24iLCJ3ZWRkaW5nX3Nlc3Npb24iLCJiaW5kSW5wdXRTY2hlZHVsZUVuZFRpbWUiLCJzY2hlZHVsZV9lbmRfdGltZSIsIm9yZGVyX3JlbWFyayIsInVzZXJfaWQiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwib3JkZXJfc3RhdHVzIiwicmVzdWx0IiwibXNnIiwicGxhbm5pbmdfdGVhbV9pZCIsInRlYW1zIiwidGFiX2luZGV4IiwiZm9sbG93VXAiLCJnZXRPcmRlckluZm8iLCJpc19kZXBvc2l0IiwiZGVwb3NpdCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJkaXNfZWRpdCIsImNvdW50X290aGVyX3ByaWNlIiwib3RoZXJfc2VydmljZV90b3RhbF9wcmljZSIsImdldE9yZGVySW5mb0NhbGxiYWNrIiwidGVhbV90eXBlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FB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LG1CQUFLME4sS0FBTCxDQUFXN0ssT0FBWCxDQUFtQixtQkFBVztBQUM1QixvQkFBSUMsUUFBUWpFLEVBQVIsSUFBY21CLEtBQUtwQixVQUFMLENBQWdCUSxTQUFoQixDQUEwQnFPLGdCQUE1QyxFQUE4RDtBQUM1RHpOLHVCQUFLNEYsV0FBTCxHQUFtQmlCLENBQW5CO0FBQ0Q7QUFDREE7QUFDRCxlQUxEO0FBTUE3RyxtQkFBS0ksTUFBTDtBQUNEO0FBWGdCLFdBQW5CLEVBWUc7QUFDRG1PLHVCQUFXO0FBRFYsV0FaSDtBQWVBdE8sNEJBQUdDLEdBQUgsQ0FBTyw2QkFBUCxFQUFzQztBQUNwQyxpQkFBSyxtQkFBVTtBQUNiRixtQkFBSzRDLGdCQUFMLEdBQXdCMkssT0FBTy9PLElBQVAsQ0FBWUEsSUFBcEM7QUFDQXdCLG1CQUFLSSxNQUFMO0FBQ0Q7QUFKbUMsV0FBdEMsRUFLRyxFQUxIO0FBTUQ7QUF0RXVCLE9BQTFCLEVBdUVHO0FBQ0QrTSxpQkFBU25OLEtBQUtuQjtBQURiLE9BdkVIO0FBMEVEOzs7O0VBcjFCZ0NrQyxlQUFLeU4sSTs7a0JBQW5CdlEsSyIsImZpbGUiOiJvcmRlcm1zZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflrqLotYTkv6Hmga8nLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBvcmRlcl9pbmZvOiBudWxsLFxuICAgIGlkOiAtMSxcbiAgICBlZGl0X2Jhc2U6IGZhbHNlLFxuICAgIGVkaXRfc2VydmVyOiBmYWxzZSxcbiAgICB3ZWRkaW5nX3BhZ2U6IG51bGwsIC8v5ama5a606aSQ5qCHXG4gICAgd2VkZGluZ19wYWdlOiBbXSxcbiAgICB3ZWRkaW5nX2luZGV4OiAwLFxuICAgIHBsYW5fcGFja2FnZTogbnVsbCwgLy/lqZrlrrTppJDmoIdcbiAgICBwbGFuX2luZGV4OiAwLFxuICAgIGRpc2NvdXRfaW5kZXg6IDAsXG4gICAgZnJlZV9hcnI6IFsn5LiN5YWN5oGvJywgJ+WFjeaBryddLFxuICAgIGRpc2NvdXQ6IG51bGwsXG4gICAgZnJlZV9pbmRleDogMCxcbiAgICBwYWNrYWdlX2luZGV4OiAtMSxcbiAgICBwYXlfaW5kZXg6IDAsXG4gICAgcGF5X21ldGhvZDogW10sXG4gICAgcGF5X3R5cGVfbmFtZTogJycsXG4gICAgdGVhbXM6IG51bGwsXG4gICAgdGVhbXNfaW5kZXg6IDAsXG4gICAgc2hvd19iYXNlX2luZm86IGZhbHNlLFxuICAgIHNob3dfc2VydmVyX2luZm86IGZhbHNlLFxuICAgIHNob3dfcGF5X3BybzogZmFsc2UsXG4gICAgZGlzX2VkaXQ6IHRydWUsXG4gICAgb3RoZXJfc2VydmljZV9yYW5nZTogW1xuICAgICAgWyfkurrlkZjnsbsnLCAn5bel56iL57G7JywgJ+enn+i1geexuycsICfph4fotK3nsbsnXSxcbiAgICAgIFsn5Y+45LuqJywgJ+WMluWmhicsICfmkYTlvbEnLCAn5pGE5YOPJywgJ+euoeWuticsICfmvJTlh7onLCAn5LmQ6ZifJywgJ+Wwj+aPkOeQtCcsICdESi9WSicsICflhbzogYzkurrlkZgt5bCP56eY5LmmJywgJ+WFtuS7luaUr+WHuiddXG4gICAgXSxcbiAgICBvdGhlcl9zZXJ2aWNlX3BlcnNvbjogWyflj7jku6onLCAn5YyW5aaGJywgJ+aRhOW9sScsICfmkYTlg48nLCAn566h5a62JywgJ+a8lOWHuicsICfkuZDpmJ8nLCAn5bCP5o+Q55C0JywgJ0RKL1ZKJywgJ+WFvOiBjOS6uuWRmC3lsI/np5jkuaYnLCAn5YW25LuW5pSv5Ye6J10sXG4gICAgb3RoZXJfc2VydmljZV9wcm9qZWN0OiBbJ+WItuS9nOexuy3lub/lkYrliLbkvZwnLCAn6bKc6IqxJywgJ+iKseiJuuW4iCcsICfmkK3lu7ot5oi35aSW6Z+z5ZONJywgJ+eBr+WFiScsICfmkYfoh4InXSxcbiAgICBvdGhlcl9zZXJ2aWNlX2xlYXNlOiBbJ+ekvOacjScsICflqZrovaYnLCAn5aSn5be0JywgJ+WpmuaIvycsICfovablpLToirEnLCAn5omL5o2n6IqxJ10sXG4gICAgb3RoZXJfc2VydmljZV9wdXJjaGFzZTogWyfnlJzlk4EnLCAn5Zac57OWJywgJ+S8tOaJi+ekvCcsICfmsJTnkIMnLCAn6KW/6KOFJywgJ+eDn+eBqycsICflgZzovabliLgnLCAn5b+r6YCS6LS5JywgJ+ivt+W4liddLFxuICAgIG90aGVyX3NlcnZpY2VfbXVpdGlfaW5kZXg6IFswLCAwXSxcbiAgICBvdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlOiAwLFxuICAgIGRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZTogZmFsc2UsXG4gICAgLy8gYnlfc3RhZ2VzX2l0ZW1zOiBbJ+WIhuacnycsICfkuI3liIbmnJ8nXSxcbiAgICBieV9zdGFnZXNfaXRlbXNfaW5kZXg6IDAsXG4gICAgZnJlZV9zZXJ2ZXJzX2FycjogJycsXG4gICAgZGlzcGxheV9mcmVlX3NlcnZpY2U6IGZhbHNlLFxuICAgIGZyZWVfc2VydmVyX2VpZHRfaW5kZXg6IDAsXG4gICAgZGlzcGxheV9lZGl0X2ZyZWVfY291bnQ6IGZhbHNlLFxuICAgIGVkaXRfZnJlZV9jb3VudF9udW06ICcnLFxuICAgIGludGVudGlvbkluZm86IG51bGwsXG4gICAgaW50ZW50X2luZGV4OiAwLFxuICAgIGRpc3BsYXlfcmV0dXJuOiBmYWxzZSxcbiAgICBzdWJfY29tcGFueTogW11cbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kU3ViQ29tcGFueUNoYW5nZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnN1Yl9jb21wYW55X251bSA9IHRoaXMuc3ViX2NvbXBhbnlbZS5kZXRhaWwudmFsdWVdLnN1Yl9jb21wYW55X251bTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc3ViX2NvbXBhbnlfbmFtZSA9IHRoaXMuc3ViX2NvbXBhbnlbZS5kZXRhaWwudmFsdWVdLnN1Yl9jb21wYW55X25hbWU7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnN1Yl9jb21wYW55X2lkID0gdGhpcy5zdWJfY29tcGFueVtlLmRldGFpbC52YWx1ZV0uc3ViX2NvbXBhbnlfaWQ7XG4gICAgfSxcbiAgICBkZWxldGVXZWVkaW5nU2NoZWR1bGUoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgaWQgPSB0aGlzLm9yZGVyX2luZm8uc2VjX3NjaGVkdWxlX3Nlc3Npb25baW5kZXhdLmlkO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgICBycS5nZXQoJ2RlbFdlZGRpbmdTY2hlZHVsZScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZWNfc2NoZWR1bGVfc2Vzc2lvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZEZpcnN0RGF0ZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnBheW1lbnRfZmlyc3RfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZFNlY29uZERhdGVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X3NlY29uZF9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kTGFzdERhdGVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2xhc3RfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgY2FuY2VsUmV0dXJuKCkge1xuICAgICAgdGhpcy5kaXNwbGF5X3JldHVybiA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29uZmlybVJldHVybigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHJxLmdldCgncmV0dXJuT3JkZXInLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZXR1cm5PcmRlcigpIHtcbiAgICAgIHRoaXMuZGlzcGxheV9yZXR1cm4gPSB0cnVlO1xuICAgIH0sXG4gICAgbmF2aWdhdGVUb1Rhc3RlKGUpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2NoZW1lL3Rhc3RlP2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkICsgJyZ1c2VyX2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGJpbmRBdHRlbnRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5pbnRlbnRfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uaW50ZW50aW9uX25hbWUgPSB0aGlzLmludGVudGlvbkluZm9bdGhpcy5pbnRlbnRfaW5kZXhdLmludGVudGlvbl9uYW1lO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5pbnRlbnRpb25faWQgPSB0aGlzLmludGVudGlvbkluZm9bdGhpcy5pbnRlbnRfaW5kZXhdLmlkO1xuICAgIH0sXG4gICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zaWduX2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEJ5U3RhZ2VzQmVmb3JlUHJpY2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfYmVmb3JlX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRGcmVlQ291bnQoZSkge1xuICAgICAgdGhpcy5lZGl0X2ZyZWVfY291bnRfbnVtID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBkZWxldGVJdGVtKCkge1xuICAgICAgLy8gdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyLnNwbGljZSh0aGlzLmZyZWVfc2VydmVyX2VpZHRfaW5kZXgsIDEpO1xuICAgICAgdGhpcy5kaXNwbGF5X2VkaXRfZnJlZV9jb3VudCA9IGZhbHNlO1xuICAgIH0sXG4gICAgY2hhbmdlSXRlbSgpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlclt0aGlzLmZyZWVfc2VydmVyX2VpZHRfaW5kZXhdLm5lZWRfY291bnQgPSB0aGlzLmVkaXRfZnJlZV9jb3VudF9udW07XG4gICAgICB0aGlzLmRpc3BsYXlfZWRpdF9mcmVlX2NvdW50ID0gZmFsc2U7XG4gICAgfSxcbiAgICBlZGl0RnJlZVNlcnZpY2VDb3VudChlKSB7XG4gICAgICB0aGlzLmZyZWVfc2VydmVyX2VpZHRfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMuZGlzcGxheV9lZGl0X2ZyZWVfY291bnQgPSB0cnVlO1xuICAgIH0sXG4gICAgZnJlZVNlcnZpY2VBZGQoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfZnJlZV9zZXJ2aWNlID0gZmFsc2U7XG4gICAgICBsZXQgcHVycG9zZV9mcmVlID0gW107XG4gICAgICB0aGlzLmZyZWVfc2VydmVyc19hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlcikge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGxldCBuZWVkX2NvdW50ID0gMTtcbiAgICAgICAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gZWwuaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pyJ55qEJylcbiAgICAgICAgICAgICAgICBuZWVkX2NvdW50ID0gZWwubmVlZF9jb3VudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwdXJwb3NlX2ZyZWUucHVzaCh7XG4gICAgICAgICAgICAgIG5lZWRfY291bnQ6IG5lZWRfY291bnQsXG4gICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICBzdWJqZWN0X3ByaWNlOiBlbGVtZW50LnByb2R1Y3RfcHJpY2UsXG4gICAgICAgICAgICAgIHN1YmplY3RfY29zdDogZWxlbWVudC5wcm9kdWN0X2Nvc3QsXG4gICAgICAgICAgICAgIHN1YmplY3RfdHlwZTogZWxlbWVudC5wcm9kdWN0X2NhdGVnb3J5LFxuICAgICAgICAgICAgICB0aXRsZTogZWxlbWVudC5wcm9kdWN0X25hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHB1cnBvc2VfZnJlZS5wdXNoKHtcbiAgICAgICAgICAgICAgbmVlZF9jb3VudDogMSxcbiAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgIHN1YmplY3RfcHJpY2U6IGVsZW1lbnQucHJvZHVjdF9wcmljZSxcbiAgICAgICAgICAgICAgc3ViamVjdF9jb3N0OiBlbGVtZW50LnByb2R1Y3RfY29zdCxcbiAgICAgICAgICAgICAgc3ViamVjdF90eXBlOiBlbGVtZW50LnByb2R1Y3RfY2F0ZWdvcnksXG4gICAgICAgICAgICAgIHRpdGxlOiBlbGVtZW50LnByb2R1Y3RfbmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyID0gcHVycG9zZV9mcmVlO1xuICAgIH0sXG4gICAgdG9nZ2xlQ2hlY2tlZChlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMuZnJlZV9zZXJ2ZXJzX2FycltpbmRleF0uY2hlY2tlZCA9ICF0aGlzLmZyZWVfc2VydmVyc19hcnJbaW5kZXhdLmNoZWNrZWQ7XG4gICAgfSxcbiAgICBnb1RvQ29udHJhY3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdjb250cmFjdD9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuYXZpZ2F0ZVRvUmVmdW5kUGFnZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9yZWZ1bmQ/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZWRpdFdlZWRpbmdTY2hlZHVsZShlKSB7XG4gICAgICBsZXQgaW5mbyA9IHRoaXMub3JkZXJfaW5mby5zY2hlZHVsZV9zZXNzaW9uO1xuICAgICAgbGV0IGRlbCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmRlbDtcbiAgICAgIGlmIChkZWwgPT0gMikge1xuICAgICAgICAvL+WJr+aho+acn1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ3NjaGVkdWxlP2lkPScgKyBpbmZvLmlkICtcbiAgICAgICAgICAgICcmb3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQgK1xuICAgICAgICAgICAgJyZzY2hlZHVsZV90eXBlPScgKyBpbmZvLnNjaGVkdWxlX3R5cGUgK1xuICAgICAgICAgICAgLy8gJyZhcmVhX25hbWU9JyArIGluZm8uYXJlYV9uYW1lICtcbiAgICAgICAgICAgIC8vICcmc2NoZWR1bGVfZGF0ZT0nICsgaW5mby5zY2hlZHVsZV9kYXRlICtcbiAgICAgICAgICAgIC8vICcmc2Vzc2lvbj0nICsgaW5mby5zZXNzaW9uICtcbiAgICAgICAgICAgIC8vICcmc2NoZWR1bGVfZW5kX2RhdGU9JyArIGluZm8uc2NoZWR1bGVfZW5kX2RhdGUrXG4gICAgICAgICAgICAnJmRlbF9mbGc9JyArIGRlbFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnc2NoZWR1bGU/aWQ9JyArIGluZm8uaWQgK1xuICAgICAgICAgICAgJyZvcmRlcl9pZD0nICsgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCArXG4gICAgICAgICAgICAnJnNjaGVkdWxlX3R5cGU9JyArIGluZm8uc2NoZWR1bGVfdHlwZSArXG4gICAgICAgICAgICAnJmFyZWFfbmFtZT0nICsgaW5mby5hcmVhX25hbWUgK1xuICAgICAgICAgICAgJyZzY2hlZHVsZV9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2RhdGUgK1xuICAgICAgICAgICAgJyZzZXNzaW9uPScgKyBpbmZvLnNlc3Npb24gK1xuICAgICAgICAgICAgJyZzY2hlZHVsZV9lbmRfZGF0ZT0nICsgaW5mby5zY2hlZHVsZV9lbmRfZGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZVdlZWRpbmdTY2hlZHVsZUluZm8oKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9ICF0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZTtcbiAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93X3BheV9wcm8gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICB9LFxuICAgIGJpbmRPdGhlclNlcnZpY2VDb2x1bW5DaGFuZ2UoZSkge1xuICAgICAgaWYgKGUuZGV0YWlsLmNvbHVtbiA9PSAwKSB7XG4gICAgICAgIGlmIChlLmRldGFpbC52YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3BlcnNvbjtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRldGFpbC52YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3Byb2plY3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kZXRhaWwudmFsdWUgPT0gMikge1xuICAgICAgICAgIHRoaXMub3RoZXJfc2VydmljZV9yYW5nZVsxXSA9IHRoaXMub3RoZXJfc2VydmljZV9sZWFzZTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRldGFpbC52YWx1ZSA9PSAzKSB7XG4gICAgICAgICAgdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzFdID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3B1cmNoYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBiaW5kT3RoZXJTZXJ2aWNlVHlwZUNoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICBlLmRldGFpbC52YWx1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaCgwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlcltpbmRleF0uc3ViamVjdF90eXBlID0gdGhpcy5vdGhlcl9zZXJ2aWNlX3JhbmdlWzBdW3ZhbHVlc1swXV0gKyAnLScgKyB0aGlzLm90aGVyX3NlcnZpY2VfcmFuZ2VbMV1bdmFsdWVzWzFdXTtcbiAgICB9LFxuICAgIGJpbmRQcmVzZW50U2VydmljZVR5cGVDaGFuZ2UoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBsZXQgZnJlZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyW2ZyZWVfaW5kZXhdLnN1YmplY3RfdHlwZSA9IHRoaXMuZnJlZV9zZXJ2ZXJzX2FycltpbmRleF0ucHJvZHVjdF9jYXRlZ29yeTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5mcmVlX3NlcnZlcltmcmVlX2luZGV4XS50aXRsZSA9IHRoaXMuZnJlZV9zZXJ2ZXJzX2FycltpbmRleF0ucHJvZHVjdF9uYW1lO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyW2ZyZWVfaW5kZXhdLnN1YmplY3RfcHJpY2UgPSB0aGlzLmZyZWVfc2VydmVyc19hcnJbaW5kZXhdLnByb2R1Y3RfcHJpY2U7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXJbZnJlZV9pbmRleF0ubmVlZF9jb3VudCA9IDE7XG4gICAgfSxcbiAgICB0b2dnbGVQYXlQcm8oKSB7XG4gICAgICB0aGlzLnNob3dfcGF5X3BybyA9ICF0aGlzLnNob3dfcGF5X3BybztcbiAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfaW5mbyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93X2Jhc2VfaW5mbyA9IGZhbHNlO1xuICAgICAgdGhpcy5kaXNwbGF5X3dlZWRpbmdfc2NoZWR1bGUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHRvZ2dsZURpcGxheVNlcnZlckluZm8oKSB7XG4gICAgICB0aGlzLnNob3dfc2VydmVyX2luZm8gPSAhdGhpcy5zaG93X3NlcnZlcl9pbmZvO1xuICAgICAgdGhpcy5zaG93X3BheV9wcm8gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd19iYXNlX2luZm8gPSBmYWxzZTtcbiAgICAgIHRoaXMuZGlzcGxheV93ZWVkaW5nX3NjaGVkdWxlID0gZmFsc2U7XG4gICAgfSxcbiAgICB0b2dnbGVEaXNwbGF5QmFzZUluZm8oKSB7XG4gICAgICB0aGlzLnNob3dfYmFzZV9pbmZvID0gIXRoaXMuc2hvd19iYXNlX2luZm87XG4gICAgICB0aGlzLnNob3dfc2VydmVyX2luZm8gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd19wYXlfcHJvID0gZmFsc2U7XG4gICAgICB0aGlzLmRpc3BsYXlfd2VlZGluZ19zY2hlZHVsZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgYmluZFRlYW1DaGFuZ2UoZSkge1xuICAgICAgdGhpcy50ZWFtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZFBheUNoYW5nZShlKSB7IC8vaW52YWxpZFxuICAgICAgdGhpcy5wYXlfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5X3R5cGVfbmFtZSA9IHRoaXMucGF5X21ldGhvZFt0aGlzLnBheV9pbmRleF0ubmFtZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF90eXBlID0gdGhpcy5wYXlfbWV0aG9kW3RoaXMucGF5X2luZGV4XS5pZDtcbiAgICB9LFxuICAgIGJpbmRJbnRhbGxtZW50Q2hhbmdlKGUpIHtcbiAgICAgIC8vIHRoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4PWUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXMgPSB0aGlzLmJ5X3N0YWdlc19pdGVtc19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgLy8gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXlfdHlwZV9uYW1lID0gdGhpcy5ieV9zdGFnZXNfaXRlbXNbdGhpcy5ieV9zdGFnZXNfaXRlbXNfaW5kZXhdO1xuICAgICAgLy8gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X3R5cGUgPSB0aGlzLmJ5X3N0YWdlc19pdGVtc19pbmRleDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX25hbWUgPSB0aGlzLm9yZGVyX2luZm8uYnlfc3RhZ2VzX2l0ZW1zW3RoaXMuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4XTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dE1haW5Db250cmFjdChlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm1haW5fY29udHJhY3QgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGdvVG9NZW51KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnb3JkZXJtZW51P29yZGVyX2lkPScgKyB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX2lkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZU90aGVyU2VydmVyKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoaSAhPSBpbmRleCkge1xuICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9IHB1cjtcbiAgICB9LFxuICAgIGRlbGV0ZVByZXNlbnRTZXJ2aWNlKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgcHVyLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXIgPSBwdXI7XG4gICAgfSxcbiAgICBhZGRPdGhlclNlcnZlcigpIHtcbiAgICAgIGlmICghdGhpcy5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciB8fCB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2UgPT0gJy0nKSB7XG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXIucHVzaCh7XG4gICAgICAgIG5lZWRfY291bnQ6ICcnLFxuICAgICAgICBzdWJqZWN0X3ByaWNlOiAnJyxcbiAgICAgICAgc3ViamVjdF90eXBlOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkUHJlc2VudFNlcnZpY2UoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfZnJlZV9zZXJ2aWNlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLm9yZGVyX2luZm8uZnJlZV9zZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vcmRlcl9pbmZvLmZyZWVfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgdGhpcy5mcmVlX3NlcnZlcnNfYXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT0gZWwuaWQpIHtcbiAgICAgICAgICAgICAgZWxbJ2NoZWNrZWQnXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmluZElucHV0UGF5bWVudExhc3QoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X2xhc3QgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFBheW1lbnRTZWNvbmQoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5wYXltZW50X3NlY29uZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0UGF5bWVudEZpcnN0KGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5bWVudF9maXJzdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0U2VydmVyRW5kVG90YWxVcHBlcihlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZV91cHBlciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0U2VydmVyRW5kVG90YWxQcmljZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl9lbmRfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFNwbGl0ZUVnZ1ByaWNlKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZEJsdXJTcGxpdGVFZ2dQcmljZSgpIHtcbiAgICAgIGlmICh0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfcHJpY2UgPiA5OTkpIHtcbiAgICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX3ByaWNlID0gOTk5O1xuICAgICAgfVxuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlID0gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfcHJpY2UgLSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfcHJpY2U7XG4gICAgfSxcbiAgICBiaW5kRnJlZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5mcmVlX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlZCBmcmVlIGZvcicsIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlKTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEJ5U3RhZ2VzUHJpY2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX2VuZF90b3RhbF9wcmljZSA9IHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuYnlfc3RhZ2VzX3ByaWNlIC0gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX3ByaWNlO1xuICAgIH0sXG4gICAgYmluZElucHV0QnlTdGFnZXNVbml0UHJpY2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfdW5pdF9wcmljZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0QnlTdGFnZXNOdW0oZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5ieV9zdGFnZXNfbnVtID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRQYXlUeXBlKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIucGF5X3R5cGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFNlcnZlclRvdGFsUHJpY2UoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRXZWRkaW5nRGlzY291bnRDaGFuZ2UoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9IHRoaXMud2VkZGluZ19wYWdlW3RoaXMud2VkZGluZ19pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9uYW1lO1xuICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbGV2ZWw7XG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlICogdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0ucGFja2FnZV9kaXNjb3VudF9saXN0W2UuZGV0YWlsLnZhbHVlXS5kaXNjb3VudF9uYW1lO1xuICAgICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uZGlzY291bnRfbGV2ZWw7XG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbGlzdFtlLmRldGFpbC52YWx1ZV0uYWZ0ZXJfZGlzY291bnQ7XG4gICAgICB9XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgIH0sXG4gICAgYmluZElucHV0UFRvdGFsUHJpY2UoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnRvdGFsX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnRBbGwoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWxsID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnRvdGFsX3ByaWNlID0gdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2VuZF9wcmljZSAqIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9jb3VudF9hbGw7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSA9IHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXS50b3RhbF9wcmljZSkgKyBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpO1xuICAgIH0sXG4gICAgYmluZElucHV0UGFja2FnZUNvdW50QWRkUHJpY2UoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWRkX3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnRBZGQoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnRfYWRkID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRQYWNrYWdlQ291bnQoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfY291bnQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFBhY2thZ2VFbmRQcmljZShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0ucGFja2FnZV9lbmRfcHJpY2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtpbmRleF0udG90YWxfcHJpY2UgPSB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbaW5kZXhdLnBhY2thZ2VfZW5kX3ByaWNlICogdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW2luZGV4XS5wYWNrYWdlX2NvdW50X2FsbDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnRvdGFsX3ByaWNlKSArIHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSk7XG4gICAgfSxcbiAgICBiaW5kSW5wdXROZWVkQ291bnQoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS5uZWVkX2NvdW50ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRTdWJqZWN0UHJpY2UoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLm9yZGVyX2luZm8ub3RoZXJfc2VydmVyW2luZGV4XS5zdWJqZWN0X3ByaWNlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRTdWJqZWN0VHlwZShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLnN1YmplY3RfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0T3RoZXJUaXRsZShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5vdGhlcl9zZXJ2ZXJbaW5kZXhdLnRpdGxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBzYXZlSW5kZXgoZSkge1xuICAgICAgdGhpcy5wYWNrYWdlX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBhY2thZ2VfaW5kZXgpO1xuICAgIH0sXG4gICAgYmluZFdlZGRpbmdQYWNrYWdlQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMud2VkZGluZ19pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgbGV0IHBhY2thZ2VfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX25hbWUgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLnBhY2thZ2VfbmFtZTtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVtwYWNrYWdlX2luZGV4XS5wYWNrYWdlX3ByaWNlID0gdGhpcy53ZWRkaW5nX3BhZ2VbdGhpcy53ZWRkaW5nX2luZGV4XS5wYWNrYWdlX3ByaWNlO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnN1cHBsaWVyX3BhY2thZ2VfaWQgPSB0aGlzLndlZGRpbmdfcGFnZVt0aGlzLndlZGRpbmdfaW5kZXhdLmlkO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfZGlzY291bnRfbmFtZSA9ICcnO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfZGlzY291bnQgPSAnJztcbiAgICAgIHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXIuc2VydmVyX3RvdGFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnRvdGFsX3ByaWNlKSArIHBhcnNlSW50KHRoaXMub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXS50b3RhbF9wcmljZSk7XG4gICAgfSxcbiAgICBiaW5kUGxhblBhY2thZ2VDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5wbGFuX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBsZXQgcGFja2FnZV9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfbmFtZSA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0ucGFja2FnZV9uYW1lO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlW3BhY2thZ2VfaW5kZXhdLnBhY2thZ2VfcHJpY2UgPSB0aGlzLnBsYW5fcGFja2FnZVt0aGlzLnBsYW5faW5kZXhdLnBhY2thZ2VfcHJpY2U7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0uc3VwcGxpZXJfcGFja2FnZV9pZCA9IHRoaXMucGxhbl9wYWNrYWdlW3RoaXMucGxhbl9pbmRleF0uaWQ7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9kaXNjb3VudF9uYW1lID0gJyc7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbcGFja2FnZV9pbmRleF0ucGFja2FnZV9kaXNjb3VudCA9ICcnO1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zZXJ2ZXJfdG90YWxfcHJpY2UgPSBwYXJzZUludCh0aGlzLm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMF0udG90YWxfcHJpY2UpICsgcGFyc2VJbnQodGhpcy5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzFdLnRvdGFsX3ByaWNlKTtcbiAgICB9LFxuICAgIGVkaXRTZXJ2ZXJUb2dnbGUoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgaXRlbSA9IHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfb2ZmZXI7XG4gICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSB8fCB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2UubGVuZ3RoIDw9IDAgfHwgdGhhdC53ZWRkaW5nX3BhZ2UubGVuZ3RoIDw9IDAgfHwgdGhhdC5wbGFuX3BhY2thZ2UubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5Y+v6YCJ5pyN5Yqh5aWX6aSQ77yM6K+36IGU57O7566h55CG5ZGYJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICghZWxlbWVudC5zdXBwbGllcl9wYWNrYWdlX2lkKSB7XG4gICAgICAgICAgZWxlbWVudC5zdXBwbGllcl9wYWNrYWdlX2lkID0gZWxlbWVudC5pZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UgPSB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0ucGFja2FnZV9lbmRfcHJpY2U7XG4gICAgICBpZiAodGhhdC5lZGl0X3NlcnZlcikge1xuICAgICAgICBpZiAocGFyc2VJbnQodGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdLnBhY2thZ2VfY291bnRfYWxsKSA8PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmiYDorqLmoYzmlbAnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJzZUludCh0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0udG90YWxfcHJpY2UpKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnmraPnoa7nmoTlpZfppJDkvJjmg6AnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJzZUludCh0aGF0Lm9yZGVyX2luZm8uc2VydmVyX29mZmVyLnNlcnZlcl90b3RhbF9wcmljZSkpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+acjeWKoeaAu+S7t+agvOagvOW8j+ato+ehricsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0ucGFja2FnZV9jb3VudF9hbGwgPSAxOyAvL+W8uuWItuiuvue9ruS4ujFcbiAgICAgICAgcnEuZ2V0KCd1cGRhdGVTZXJ2ZXJPZmZlcicsIHtcbiAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gZmFsc2U7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhhdC5nZXRPbmVPcmRlckluZm8oKTtcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgb3JkZXJfaWQ6IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgICAgb3RoZXJfc2VydmVyOiBKU09OLnN0cmluZ2lmeSh0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyKSxcbiAgICAgICAgICBmcmVlX3NlcnZlcjogSlNPTi5zdHJpbmdpZnkodGhhdC5vcmRlcl9pbmZvLmZyZWVfc2VydmVyKSxcbiAgICAgICAgICBwYWNrYWdlX2FycjogSlNPTi5zdHJpbmdpZnkodGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlKSxcbiAgICAgICAgICBzZXJ2ZXJfdG90YWxfcHJpY2U6IGl0ZW0uc2VydmVyX3RvdGFsX3ByaWNlLFxuICAgICAgICAgIC8vIHBheV90eXBlOiAxLFxuICAgICAgICAgIGJ5X3N0YWdlc19udW06IGl0ZW0uYnlfc3RhZ2VzX251bSxcbiAgICAgICAgICBieV9zdGFnZXM6IHRoYXQuYnlfc3RhZ2VzX2l0ZW1zX2luZGV4LFxuICAgICAgICAgIGJ5X3N0YWdlc191bml0X3ByaWNlOiBpdGVtLmJ5X3N0YWdlc191bml0X3ByaWNlLFxuICAgICAgICAgIGJ5X3N0YWdlc19wcmljZTogaXRlbS5ieV9zdGFnZXNfcHJpY2UsXG4gICAgICAgICAgc3BsaXRlX2VnZ19pbnRlcmVzdF9mcmVlOiBpdGVtLnNwbGl0ZV9lZ2dfaW50ZXJlc3RfZnJlZSxcbiAgICAgICAgICBzcGxpdGVfZWdnX3ByaWNlOiBpdGVtLnNwbGl0ZV9lZ2dfcHJpY2UsXG4gICAgICAgICAgc2VydmVyX2VuZF90b3RhbF9wcmljZTogaXRlbS5zZXJ2ZXJfZW5kX3RvdGFsX3ByaWNlLFxuICAgICAgICAgIHNlcnZlcl90b3RhbF9wcmljZV91cHBlcjogaXRlbS5zZXJ2ZXJfdG90YWxfcHJpY2VfdXBwZXIsXG4gICAgICAgICAgcGF5bWVudF9maXJzdDogaXRlbS5wYXltZW50X2ZpcnN0LFxuICAgICAgICAgIHBheW1lbnRfc2Vjb25kOiBpdGVtLnBheW1lbnRfc2Vjb25kLFxuICAgICAgICAgIHBheW1lbnRfbGFzdDogaXRlbS5wYXltZW50X2xhc3QsXG4gICAgICAgICAgYnlfc3RhZ2VzX2JlZm9yZV9wcmljZTogaXRlbS5ieV9zdGFnZXNfYmVmb3JlX3ByaWNlLFxuICAgICAgICAgIHBheW1lbnRfZmlyc3RfZGF0ZTogaXRlbS5wYXltZW50X2ZpcnN0X2RhdGUgPyBpdGVtLnBheW1lbnRfZmlyc3RfZGF0ZSA6ICcnLFxuICAgICAgICAgIHBheW1lbnRfc2Vjb25kX2RhdGU6IGl0ZW0ucGF5bWVudF9zZWNvbmRfZGF0ZSA/IGl0ZW0ucGF5bWVudF9zZWNvbmRfZGF0ZSA6ICcnLFxuICAgICAgICAgIHBheW1lbnRfbGFzdF9kYXRlOiBpdGVtLnBheW1lbnRfbGFzdF9kYXRlID8gaXRlbS5wYXltZW50X2xhc3RfZGF0ZSA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmVkaXRfc2VydmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJpbmRJbnB1dFVzZXJOYW1lKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8udXNlcl9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRVc2VyTW9iaWxlKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8udXNlcl9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEdyb29tTmFtZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmdyb29tX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEdyb29tTW9iaWxlKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uZ3Jvb21fbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRHcm9vbVdlY2hhdChlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLmdyb29tX3dlY2hhdCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0QnJpZGVOYW1lKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uYnJpZGVfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0QnJpZGVNb2JpbGUoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5icmlkZV9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dEJyaWRlV2VjaGF0KGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uYnJpZGVfd2VjaGF0ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRTY2hlZHVsZVR5cGUoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zY2hlZHVsZV90eXBlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRXZWRkaW5nRGF0ZShlKSB7XG4gICAgICB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLndlZGRpbmdfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0V2VlZGluZ0FkZHJlc3MoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby53ZWRkaW5nX2FkZHJlc3MgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFdlZWRpbmdTZXNzaW9uKGUpIHtcbiAgICAgIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ud2VkZGluZ19zZXNzaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRTY2hlZHVsZUVuZFRpbWUoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5zY2hlZHVsZV9lbmRfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0VXNlck5hbWUoZSkge1xuICAgICAgdGhpcy5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGVkaXRCYXNlVG9nZ2xlKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IGl0ZW0gPSB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvO1xuICAgICAgaWYgKHRoYXQuZWRpdF9iYXNlKSB7XG4gICAgICAgIC8vIGlmKCFpdGVtLnN1Yl9jb21wYW55X251bSl7XG4gICAgICAgIC8vICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIC8vICAgICAgIHRpdGxlOiAn6K+36YCJ5oup562+57qm5YWs5Y+4JywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgIC8vICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgLy8gICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgIC8vICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAvLyAgICAgfSk7XG5cbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBycS5nZXQoJ3VwZGF0ZUJhc2VJbmZvJywge1xuICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoYXQuZWRpdF9iYXNlID0gZmFsc2U7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvcmRlcl9pZDogdGhhdC5vcmRlcl9pbmZvLmJhc2VfaW5mby5vcmRlcl9pZCxcbiAgICAgICAgICBtYWluX2NvbnRyYWN0OiBpdGVtLm1haW5fY29udHJhY3QsXG4gICAgICAgICAgdXNlcl9uYW1lOiBpdGVtLnVzZXJfbmFtZSxcbiAgICAgICAgICB1c2VyX21vYmlsZTogaXRlbS51c2VyX21vYmlsZSxcbiAgICAgICAgICBncm9vbV9uYW1lOiBpdGVtLmdyb29tX25hbWUsXG4gICAgICAgICAgZ3Jvb21fbW9iaWxlOiBpdGVtLmdyb29tX21vYmlsZSxcbiAgICAgICAgICBncm9vbV93ZWNoYXQ6IGl0ZW0uZ3Jvb21fd2VjaGF0LFxuICAgICAgICAgIGJyaWRlX25hbWU6IGl0ZW0uYnJpZGVfbmFtZSxcbiAgICAgICAgICBicmlkZV9tb2JpbGU6IGl0ZW0uYnJpZGVfbW9iaWxlLFxuICAgICAgICAgIGJyaWRlX3dlY2hhdDogaXRlbS5icmlkZV93ZWNoYXQsXG4gICAgICAgICAgc2NoZWR1bGVfdHlwZTogaXRlbS5zY2hlZHVsZV90eXBlLFxuICAgICAgICAgIHdlZGRpbmdfZGF0ZTogaXRlbS53ZWRkaW5nX2RhdGUsXG4gICAgICAgICAgd2VkZGluZ19hZGRyZXNzOiBpdGVtLndlZGRpbmdfYWRkcmVzcyxcbiAgICAgICAgICB3ZWRkaW5nX3Nlc3Npb246IGl0ZW0ud2VkZGluZ19zZXNzaW9uLFxuICAgICAgICAgIHNjaGVkdWxlX2VuZF90aW1lOiBpdGVtLnNjaGVkdWxlX2VuZF90aW1lLFxuICAgICAgICAgIG9yZGVyX3JlbWFyazogaXRlbS5vcmRlcl9yZW1hcmssXG4gICAgICAgICAgaW50ZW50aW9uX2lkOiBpdGVtLmludGVudGlvbl9pZCxcbiAgICAgICAgICB1c2VyX2lkOiBpdGVtLnVzZXJfaWQsXG4gICAgICAgICAgc2lnbl9kYXRlOiBpdGVtLnNpZ25fZGF0ZSxcbiAgICAgICAgICBzdWJfY29tcGFueV9udW06IGl0ZW0uc3ViX2NvbXBhbnlfbnVtLFxuICAgICAgICAgIHN1Yl9jb21wYW55X2lkOiBpdGVtLnN1Yl9jb21wYW55X2lkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmVkaXRfYmFzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8uc2lnbl9kYXRlKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+etvue6puaXpeacn+S4jeiDveS4uuepuicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+aPkOS6pOS4rS4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgfSk7XG4gICAgICBycS5nZXQoJ3N1Ym1pdE9yZGVyJywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3N0YXR1cyA9IDI7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAvLyB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9LFxuICAgICAgICAyMDI6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5kYXRhLm1zZywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgb3JkZXJfaWQ6IHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQsXG4gICAgICAgIHN1Yl9jb21wYW55X2lkOiB0aGlzLm9yZGVyX2luZm8uYmFzZV9pbmZvLnN1Yl9jb21wYW55X2lkLFxuICAgICAgICBwbGFubmluZ190ZWFtX2lkOiB0aGlzLnRlYW1zW3RoaXMudGVhbXNfaW5kZXhdLmlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9nZ2xlVGFiKGUpIHtcbiAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBpZiAodGhpcy50YWJfaW5kZXggPT0gMSkge1xuICAgICAgICB0aGlzLmZvbGxvd1VwKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFiX2luZGV4ID09IDIpIHtcbiAgICAgICAgdGhpcy5nZXRPcmRlckluZm8oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvVG9QYXlMb2coKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfaWQ9JyArIHRoaXMub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfaWQgKyAnJmRlcG9zaXRfc3RhdHVzPTAnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdvVG9QYXlMb2dDaGVjayhlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGxldCBuYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcbiAgICAgIGxldCBpc19kZXBvc2l0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGVwb3NpdDtcbiAgICAgIGlmIChpc19kZXBvc2l0ID09IDEpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvcHJlcGF5P29yZGVyX2RlcG9zaXRfaWQ9JyArIGlkXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfZGVwb3NpdF9pZD0nICsgaWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICBycS5nZXQoJ2dldEluaXREYXRhJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmludGVudGlvbkluZm8gPSByZXN1bHQuZGF0YS5pbnRlbnRpb25JbmZvO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBycS5nZXQoJ2dldFN1YkNvbXBhbnlMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnN1Yl9jb21wYW55ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7fSlcbiAgfVxuICBnZXRPcmRlckluZm9DYWxsYmFjaygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5mcmVlX2luZGV4ID0gdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9vZmZlci5zcGxpdGVfZWdnX2ludGVyZXN0X2ZyZWU7XG4gICAgdGhhdC5kaXNfZWRpdCA9ICh0aGF0Lm9yZGVyX2luZm8uYmFzZV9pbmZvLm9yZGVyX3N0YXR1cyA9PSAwIHx8IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ub3JkZXJfc3RhdHVzID09IDQpO1xuICAgIGlmICghdGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciB8fCB0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyID09ICctJykge1xuICAgICAgdGhhdC5vcmRlcl9pbmZvLm90aGVyX3NlcnZlciA9IFtdO1xuICAgIH07XG4gICAgbGV0IGNvdW50X290aGVyX3ByaWNlID0gMDtcbiAgICB0aGF0Lm9yZGVyX2luZm8ub3RoZXJfc2VydmVyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb3VudF9vdGhlcl9wcmljZSArPSBlbGVtZW50LnN1YmplY3RfcHJpY2UgKiBlbGVtZW50Lm5lZWRfY291bnQ7XG4gICAgfSk7XG4gICAgdGhhdC5vdGhlcl9zZXJ2aWNlX3RvdGFsX3ByaWNlID0gY291bnRfb3RoZXJfcHJpY2U7XG4gIH1cbiAgZ2V0T25lT3JkZXJJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldE9uZU9yZGVySW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5vcmRlcl9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgdGhhdC5nZXRPcmRlckluZm9DYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy8gdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQub3JkZXJfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIHRoYXQuZ2V0T3JkZXJJbmZvQ2FsbGJhY2soKTtcbiAgICAgICAgcnEuZ2V0KCdnZXRXZWRkaW5nUGFja2FnZScsIHtcbiAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGF0LndlZGRpbmdfcGFnZSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAvLyB0aGF0LndlZGRpbmdfcGFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoYXQud2VkZGluZ19wYWdlLnB1c2goZWxlbWVudC5wYWNrYWdlX25hbWUpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBpZiAoIXRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZSB8fCAhdGhhdC5vcmRlcl9pbmZvLnNlcnZlcl9wYWNrYWdlWzBdKSB7XG4gICAgICAgICAgICAgIHRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVswXSA9IHRoYXQud2VkZGluZ19wYWdlWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgIH0pXG4gICAgICAgIHJxLmdldCgnZ2V0UGxhblBhY2thZ2UnLCB7XG4gICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhhdC5wbGFuX3BhY2thZ2UgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgLy8gdGhhdC5wbGFuX3BhY2thZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIC8vICAgICB0aGF0LnBsYW5fcGFja2FnZS5wdXNoKGVsZW1lbnQucGFja2FnZV9uYW1lKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgaWYgKCF0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2UgfHwgIXRoYXQub3JkZXJfaW5mby5zZXJ2ZXJfcGFja2FnZVsxXSkge1xuICAgICAgICAgICAgICB0aGF0Lm9yZGVyX2luZm8uc2VydmVyX3BhY2thZ2VbMV0gPSB0aGF0LnBsYW5fcGFja2FnZVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdXNlcl9pZDogdGhhdC5pZFxuICAgICAgICB9KVxuICAgICAgICAvLyBycS5nZXQoJ2dldFBhY2thZ2VEaXNjb3VudCcsIHtcbiAgICAgICAgLy8gICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGF0LmRpc2NvdXQgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAvLyAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIHtcbiAgICAgICAgLy8gICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLy/ojrflj5blj6/pgInmlK/ku5jnsbvlnotcbiAgICAgICAgLy8gcnEuZ2V0KCdnZXRQYXlUeXBlJywge1xuICAgICAgICAvLyAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoYXQucGF5X21ldGhvZCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIC8vICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwge30pXG4gICAgICAgIC8v6I635Y+W5Y+v6YCJ5Zui6ZifXG4gICAgICAgIHJxLmdldCgnZ2V0VGVhbXMnLCB7XG4gICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhhdC50ZWFtcyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB0aGF0LnRlYW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkID09IHRoYXQub3JkZXJfaW5mby5iYXNlX2luZm8ucGxhbm5pbmdfdGVhbV9pZCkge1xuICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfaW5kZXggPSBpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHRlYW1fdHlwZTogMVxuICAgICAgICB9KVxuICAgICAgICBycS5nZXQoJ2dldEZyZWVTZXJ2ZXJQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGF0LmZyZWVfc2VydmVyc19hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHt9KVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICB9XG59XG4iXX0=