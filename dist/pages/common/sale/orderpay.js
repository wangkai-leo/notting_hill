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

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

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
      title: '支付凭证',
      customer: null,
      show_img_arr: [],
      isback: true,
      is_deposite: 1,
      pay_method: [],
      pay_method_rand: [],
      pay_index: 0,
      form_data: {
        deposit_name: '',
        deposit_amount: '',
        payment_type: '',
        payment_team: '',
        payment_file: '',
        payment_time: '',
        deposit_remark: ''
      },
      company_list: [],
      company_picker_index: 0,
      pay_teams: [],
      pay_teams_rand: [],
      pay_team_index: 0,
      order_deposit_id: 0,
      pay_name_index: 0,
      pay_name_rand: ['全款支付', '合同内定金', '合同内中款', '合同内尾款', '追加消费款', '意向定金'],
      deposit_status: 0,
      collection_team: [],
      collection_team_index: 0,
      sign_form_arr: [],
      sign_form_index: 0,
      detail_arr: [],

      detail_type_list: [],
      detail_type_index: 0,
      is_lock: false,

      receipt_or_refund: ['收款', '退款'],
      receipt_or_refund_index: 0
    }, _this.methods = {
      bindReceiptOrRefundChange: function bindReceiptOrRefundChange(e) {
        this.receipt_or_refund_index = e.detail.value;
        // this.form_data.receipt_or_refund_name = this.receipt_or_refund[this.receipt_or_refund_index];
      },
      bindInputDetailMark: function bindInputDetailMark(e) {
        var index = e.currentTarget.dataset.index;
        this.detail_arr[index].collection_remark = e.detail.value;
      },
      bindInputDetailNumber: function bindInputDetailNumber(e) {
        var index = e.currentTarget.dataset.index;
        this.detail_arr[index].collection_money = e.detail.value;
      },
      bindDetailTypeChange: function bindDetailTypeChange(e) {
        var index = e.currentTarget.dataset.index;
        this.detail_type_index = e.detail.value;
        this.detail_arr[index].collection_type = this.detail_type_list[this.detail_type_index].collection_type;
        this.detail_arr[index].collection_id = this.detail_type_list[this.detail_type_index].id;
      },
      deleteDetail: function deleteDetail(e) {
        var index = e.currentTarget.dataset.index;
        this.detail_arr.splice(index, 1);
      },
      addDetail: function addDetail() {
        var obj = {
          collection_type: '',
          collection_remark: '',
          collection_money: '',
          collection_id: ''
        };
        this.detail_arr.push(obj);
      },
      bindInputOrderNumber: function bindInputOrderNumber(e) {
        this.form_data.zhifubao_code = e.detail.value;
      },
      bindSignFormChange: function bindSignFormChange(e) {
        this.sign_form_index = e.detail.value;
        this.form_data.sign_form = this.sign_form_arr[this.sign_form_index].sign_form;
        this.detail_type_list = this.sign_form_arr[this.sign_form_index].children;
      },
      bindDepartmentChange: function bindDepartmentChange(e) {
        this.collection_team_index = e.detail.value;
        this.form_data.collention_team = this.collection_team[this.collection_team_index].label;
        this.form_data.collention_team_id = this.collection_team[this.collection_team_index].index;
      },
      viewCheck: function viewCheck(e) {
        _wepy2.default.previewImage({
          current: this.show_img_arr[e.currentTarget.dataset.index],
          urls: this.show_img_arr //需要预览的图片链接列表,
        });
      },
      deleteImg: function deleteImg(e) {
        var index = e.currentTarget.dataset.index;
        this.show_img_arr.splice(index, 1);
      },
      bindCompanyChange: function bindCompanyChange(e) {
        this.company_picker_index = e.detail.value;
        this.form_data.sub_company_name = this.company_list[this.company_picker_index].sub_company_name;
        this.pay_method_rand = this.company_list[this.company_picker_index].pay_type;
      },
      bindPayNameChange: function bindPayNameChange(e) {
        this.pay_name_index = e.detail.value;
        this.form_data.deposit_name = this.pay_name_rand[this.pay_name_index];
      },
      bindPayChange: function bindPayChange(e) {
        this.pay_index = e.detail.value;
        this.form_data.pay_type_name = this.pay_method_rand[this.pay_index].pay_name;
        this.form_data.payment_type = this.pay_method_rand[this.pay_index].id;
      },
      bindPayTeamChange: function bindPayTeamChange(e) {
        this.pay_team_index = e.detail.value;
        this.form_data.team_name = this.pay_teams_rand[this.pay_team_index];
      },
      bindInputDepositName: function bindInputDepositName(e) {
        this.form_data.deposit_name = e.detail.value;
      },
      bindInputDeposit: function bindInputDeposit(e) {
        this.form_data.deposit_amount = e.detail.value;
      },
      bindInputPayMethod: function bindInputPayMethod(e) {
        this.form_data.payment_type = e.detail.value;
      },
      bindDateChange: function bindDateChange(e) {
        this.form_data.payment_time = e.detail.value;
      },
      inputLog: function inputLog(e) {
        this.form_data.deposit_remark = e.detail.value;
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
      submit: function submit() {
        var that = this;
        if (that.is_lock) {
          return false;
        }
        if (!that.form_data.deposit_amount || !that.form_data.payment_type || !that.show_img_arr.join(',') || !that.form_data.payment_time) {
          _wepy2.default.showToast({
            title: '请填写完整的支付信息', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        //婚庆限制
        if (that.detail_arr.length <= 0) {
          _wepy2.default.showToast({
            title: '请填写收款明细', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        if (this.receipt_or_refund_index == 1) {
          that.form_data.deposit_amount = -that.form_data.deposit_amount;
          that.detail_arr.forEach(function (element) {
            element.collection_money = -element.collection_money;
          });
        }

        var data = {
          deposit_name: that.form_data.deposit_name,
          deposit_amount: that.form_data.deposit_amount,
          payment_type: that.form_data.payment_type,
          payment_team: that.form_data.team_id,
          payment_file: that.show_img_arr.join(','),
          deposit_remark: that.form_data.deposit_remark,
          deposit_status: that.deposit_status,
          payment_time: that.form_data.payment_time,

          collention_team: that.form_data.collention_team_id,
          payment_detail: JSON.stringify(that.detail_arr),
          sign_form_id: that.sign_form_arr[that.sign_form_index].id,
          zhifubao_code: that.form_data.zhifubao_code
        };
        that.is_lock = true;
        if (that.order_deposit_id) {
          data.order_deposit_id = that.order_deposit_id;
          _request2.default.get('updatePayInfo', {
            200: function _(result) {
              _wepy2.default.navigateBack({
                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
              });
            }
          }, data);
        } else {
          data.order_id = that.order_id;
          _request2.default.get('createPayLog', {
            200: function _(result) {
              _wepy2.default.navigateBack({
                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
              });
            }
          }, data);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.order_id = options.order_id;
      that.order_deposit_id = options.order_deposit_id;
      that.deposit_status = options.deposit_status;
      _request2.default.get('getDeposit', {
        200: function _(result) {
          that.form_data.team_name = result.data.data.team_name;
          that.form_data.team_id = result.data.data.team_id;
          that.collection_team = result.data.collection_team;
          that.$apply();
        }
      }, {});
      _request2.default.get('getCompanyPayType', {
        200: function _(result) {
          that.company_list = result.data.data;
          // that.pay_method = result.data.data;
          // that.pay_method.forEach(element => {
          //     that.pay_method_rand.push(element.pay_name);
          // });
          that.$apply();
        }
      }, {});
      _request2.default.get('getTeams', {
        200: function _(result) {
          that.pay_teams = result.data.data;
          that.pay_teams.forEach(function (element) {
            that.pay_teams_rand.push(element.team_name);
          });
          that.$apply();
        }
      }, {});
      _request2.default.get('getSignForm', {
        200: function _(result) {
          that.sign_form_arr = result.data.data;
          that.$apply();
        }
      }, {});
      if (that.order_deposit_id) {
        _request2.default.get('getPayInfoDetail', {
          200: function _(result) {
            that.form_data = result.data.data;
            that.show_img_arr = that.form_data.payment_file.split(',');
            that.form_data.payment_time = that.form_data.payment_date;
            if (that.form_data.deposit_status != 1 && that.form_data.deposit_status != 2) {
              that.is_deposite = 0;
            }
            if (that.form_data.deposit_amount < 0) {
              that.receipt_or_refund_index = 1;
            }
            that.detail_arr = result.data.data.payment_detail;
            that.$apply();
          }
        }, {
          order_deposit_id: that.order_deposit_id
        });
      } else {
        that.is_deposite = 0;
        that.form_data.payment_time = _date2.default.dateFormat('yyyy-MM-dd', new Date());
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/orderpay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycGF5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiY3VzdG9tZXIiLCJzaG93X2ltZ19hcnIiLCJpc2JhY2siLCJpc19kZXBvc2l0ZSIsInBheV9tZXRob2QiLCJwYXlfbWV0aG9kX3JhbmQiLCJwYXlfaW5kZXgiLCJmb3JtX2RhdGEiLCJkZXBvc2l0X25hbWUiLCJkZXBvc2l0X2Ftb3VudCIsInBheW1lbnRfdHlwZSIsInBheW1lbnRfdGVhbSIsInBheW1lbnRfZmlsZSIsInBheW1lbnRfdGltZSIsImRlcG9zaXRfcmVtYXJrIiwiY29tcGFueV9saXN0IiwiY29tcGFueV9waWNrZXJfaW5kZXgiLCJwYXlfdGVhbXMiLCJwYXlfdGVhbXNfcmFuZCIsInBheV90ZWFtX2luZGV4Iiwib3JkZXJfZGVwb3NpdF9pZCIsInBheV9uYW1lX2luZGV4IiwicGF5X25hbWVfcmFuZCIsImRlcG9zaXRfc3RhdHVzIiwiY29sbGVjdGlvbl90ZWFtIiwiY29sbGVjdGlvbl90ZWFtX2luZGV4Iiwic2lnbl9mb3JtX2FyciIsInNpZ25fZm9ybV9pbmRleCIsImRldGFpbF9hcnIiLCJkZXRhaWxfdHlwZV9saXN0IiwiZGV0YWlsX3R5cGVfaW5kZXgiLCJpc19sb2NrIiwicmVjZWlwdF9vcl9yZWZ1bmQiLCJyZWNlaXB0X29yX3JlZnVuZF9pbmRleCIsIm1ldGhvZHMiLCJiaW5kUmVjZWlwdE9yUmVmdW5kQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0RGV0YWlsTWFyayIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb2xsZWN0aW9uX3JlbWFyayIsImJpbmRJbnB1dERldGFpbE51bWJlciIsImNvbGxlY3Rpb25fbW9uZXkiLCJiaW5kRGV0YWlsVHlwZUNoYW5nZSIsImNvbGxlY3Rpb25fdHlwZSIsImNvbGxlY3Rpb25faWQiLCJpZCIsImRlbGV0ZURldGFpbCIsInNwbGljZSIsImFkZERldGFpbCIsIm9iaiIsInB1c2giLCJiaW5kSW5wdXRPcmRlck51bWJlciIsInpoaWZ1YmFvX2NvZGUiLCJiaW5kU2lnbkZvcm1DaGFuZ2UiLCJzaWduX2Zvcm0iLCJjaGlsZHJlbiIsImJpbmREZXBhcnRtZW50Q2hhbmdlIiwiY29sbGVudGlvbl90ZWFtIiwibGFiZWwiLCJjb2xsZW50aW9uX3RlYW1faWQiLCJ2aWV3Q2hlY2siLCJ3ZXB5IiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJkZWxldGVJbWciLCJiaW5kQ29tcGFueUNoYW5nZSIsInN1Yl9jb21wYW55X25hbWUiLCJwYXlfdHlwZSIsImJpbmRQYXlOYW1lQ2hhbmdlIiwiYmluZFBheUNoYW5nZSIsInBheV90eXBlX25hbWUiLCJwYXlfbmFtZSIsImJpbmRQYXlUZWFtQ2hhbmdlIiwidGVhbV9uYW1lIiwiYmluZElucHV0RGVwb3NpdE5hbWUiLCJiaW5kSW5wdXREZXBvc2l0IiwiYmluZElucHV0UGF5TWV0aG9kIiwiYmluZERhdGVDaGFuZ2UiLCJpbnB1dExvZyIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwiZmFpbCIsImNvbXBsZXRlIiwic3VibWl0Iiwiam9pbiIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRlYW1faWQiLCJwYXltZW50X2RldGFpbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaWduX2Zvcm1faWQiLCJycSIsImdldCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3JkZXJfaWQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwicmVzdWx0Iiwic3BsaXQiLCJwYXltZW50X2RhdGUiLCJEIiwiZGF0ZUZvcm1hdCIsIkRhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBO0FBRkUsSyxRQUlaQyxJLEdBQU87QUFDTEMsaUJBQVcsSUFETjtBQUVMQyxhQUFPLE1BRkY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxvQkFBYyxFQUpUO0FBS0xDLGNBQVEsSUFMSDtBQU1MQyxtQkFBYSxDQU5SO0FBT0xDLGtCQUFZLEVBUFA7QUFRTEMsdUJBQWlCLEVBUlo7QUFTTEMsaUJBQVcsQ0FUTjtBQVVMQyxpQkFBVztBQUNUQyxzQkFBYyxFQURMO0FBRVRDLHdCQUFnQixFQUZQO0FBR1RDLHNCQUFjLEVBSEw7QUFJVEMsc0JBQWMsRUFKTDtBQUtUQyxzQkFBYyxFQUxMO0FBTVRDLHNCQUFjLEVBTkw7QUFPVEMsd0JBQWdCO0FBUFAsT0FWTjtBQW1CTEMsb0JBQWMsRUFuQlQ7QUFvQkxDLDRCQUFzQixDQXBCakI7QUFxQkxDLGlCQUFXLEVBckJOO0FBc0JMQyxzQkFBZ0IsRUF0Qlg7QUF1QkxDLHNCQUFnQixDQXZCWDtBQXdCTEMsd0JBQWtCLENBeEJiO0FBeUJMQyxzQkFBZ0IsQ0F6Qlg7QUEwQkxDLHFCQUFlLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFB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a0JBQVAsRUFBMkI7QUFDekIsZUFBSyxtQkFBVTtBQUNiakMsaUJBQUs5RSxTQUFMLEdBQWlCc0gsT0FBT2hJLElBQVAsQ0FBWUEsSUFBN0I7QUFDQXdGLGlCQUFLcEYsWUFBTCxHQUFvQm9GLEtBQUs5RSxTQUFMLENBQWVLLFlBQWYsQ0FBNEJrSCxLQUE1QixDQUFrQyxHQUFsQyxDQUFwQjtBQUNBekMsaUJBQUs5RSxTQUFMLENBQWVNLFlBQWYsR0FBOEJ3RSxLQUFLOUUsU0FBTCxDQUFld0gsWUFBN0M7QUFDQSxnQkFBSTFDLEtBQUs5RSxTQUFMLENBQWVnQixjQUFmLElBQWlDLENBQWpDLElBQXNDOEQsS0FBSzlFLFNBQUwsQ0FBZWdCLGNBQWYsSUFBaUMsQ0FBM0UsRUFBOEU7QUFDNUU4RCxtQkFBS2xGLFdBQUwsR0FBbUIsQ0FBbkI7QUFDRDtBQUNELGdCQUFHa0YsS0FBSzlFLFNBQUwsQ0FBZUUsY0FBZixHQUE4QixDQUFqQyxFQUFtQztBQUNqQzRFLG1CQUFLcEQsdUJBQUwsR0FBNkIsQ0FBN0I7QUFDRDtBQUNEb0QsaUJBQUt6RCxVQUFMLEdBQWtCaUcsT0FBT2hJLElBQVAsQ0FBWUEsSUFBWixDQUFpQm9ILGNBQW5DO0FBQ0E1QixpQkFBS2UsTUFBTDtBQUNEO0FBYndCLFNBQTNCLEVBY0c7QUFDRGhGLDRCQUFrQmlFLEtBQUtqRTtBQUR0QixTQWRIO0FBaUJELE9BbEJELE1Ba0JPO0FBQ0xpRSxhQUFLbEYsV0FBTCxHQUFtQixDQUFuQjtBQUNBa0YsYUFBSzlFLFNBQUwsQ0FBZU0sWUFBZixHQUE4Qm1ILGVBQUVDLFVBQUYsQ0FBYSxZQUFiLEVBQTJCLElBQUlDLElBQUosRUFBM0IsQ0FBOUI7QUFDRDtBQUNGOzs7NkJBQ1EsQ0FBRzs7OztFQWpTcUJqRSxlQUFLa0UsSTs7a0JBQW5CN0ksSyIsImZpbGUiOiJvcmRlcnBheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBDIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBEIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+aUr+S7mOWHreivgScsXG4gICAgY3VzdG9tZXI6IG51bGwsXG4gICAgc2hvd19pbWdfYXJyOiBbXSxcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNfZGVwb3NpdGU6IDEsXG4gICAgcGF5X21ldGhvZDogW10sXG4gICAgcGF5X21ldGhvZF9yYW5kOiBbXSxcbiAgICBwYXlfaW5kZXg6IDAsXG4gICAgZm9ybV9kYXRhOiB7XG4gICAgICBkZXBvc2l0X25hbWU6ICcnLFxuICAgICAgZGVwb3NpdF9hbW91bnQ6ICcnLFxuICAgICAgcGF5bWVudF90eXBlOiAnJyxcbiAgICAgIHBheW1lbnRfdGVhbTogJycsXG4gICAgICBwYXltZW50X2ZpbGU6ICcnLFxuICAgICAgcGF5bWVudF90aW1lOiAnJyxcbiAgICAgIGRlcG9zaXRfcmVtYXJrOiAnJ1xuICAgIH0sXG4gICAgY29tcGFueV9saXN0OiBbXSxcbiAgICBjb21wYW55X3BpY2tlcl9pbmRleDogMCxcbiAgICBwYXlfdGVhbXM6IFtdLFxuICAgIHBheV90ZWFtc19yYW5kOiBbXSxcbiAgICBwYXlfdGVhbV9pbmRleDogMCxcbiAgICBvcmRlcl9kZXBvc2l0X2lkOiAwLFxuICAgIHBheV9uYW1lX2luZGV4OiAwLFxuICAgIHBheV9uYW1lX3JhbmQ6IFsn5YWo5qy+5pSv5LuYJywgJ+WQiOWQjOWGheWumumHkScsICflkIjlkIzlhoXkuK3mrL4nLCAn5ZCI5ZCM5YaF5bC+5qy+JywgJ+i/veWKoOa2iOi0ueasvicsICfmhI/lkJHlrprph5EnXSxcbiAgICBkZXBvc2l0X3N0YXR1czogMCxcbiAgICBjb2xsZWN0aW9uX3RlYW06IFtdLFxuICAgIGNvbGxlY3Rpb25fdGVhbV9pbmRleDogMCxcbiAgICBzaWduX2Zvcm1fYXJyOiBbXSxcbiAgICBzaWduX2Zvcm1faW5kZXg6IDAsXG4gICAgZGV0YWlsX2FycjogW10sXG5cbiAgICBkZXRhaWxfdHlwZV9saXN0OiBbXSxcbiAgICBkZXRhaWxfdHlwZV9pbmRleDogMCxcbiAgICBpc19sb2NrOiBmYWxzZSxcblxuICAgIHJlY2VpcHRfb3JfcmVmdW5kOiBbJ+aUtuasvicsICfpgIDmrL4nXSxcbiAgICByZWNlaXB0X29yX3JlZnVuZF9pbmRleDogMFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmRSZWNlaXB0T3JSZWZ1bmRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5yZWNlaXB0X29yX3JlZnVuZF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgLy8gdGhpcy5mb3JtX2RhdGEucmVjZWlwdF9vcl9yZWZ1bmRfbmFtZSA9IHRoaXMucmVjZWlwdF9vcl9yZWZ1bmRbdGhpcy5yZWNlaXB0X29yX3JlZnVuZF9pbmRleF07XG4gICAgfSxcbiAgICBiaW5kSW5wdXREZXRhaWxNYXJrKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kZXRhaWxfYXJyW2luZGV4XS5jb2xsZWN0aW9uX3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0RGV0YWlsTnVtYmVyKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kZXRhaWxfYXJyW2luZGV4XS5jb2xsZWN0aW9uX21vbmV5ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kRGV0YWlsVHlwZUNoYW5nZShlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMuZGV0YWlsX3R5cGVfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuZGV0YWlsX2FycltpbmRleF0uY29sbGVjdGlvbl90eXBlID0gdGhpcy5kZXRhaWxfdHlwZV9saXN0W3RoaXMuZGV0YWlsX3R5cGVfaW5kZXhdLmNvbGxlY3Rpb25fdHlwZTtcbiAgICAgIHRoaXMuZGV0YWlsX2FycltpbmRleF0uY29sbGVjdGlvbl9pZCA9IHRoaXMuZGV0YWlsX3R5cGVfbGlzdFt0aGlzLmRldGFpbF90eXBlX2luZGV4XS5pZDtcblxuICAgIH0sXG4gICAgZGVsZXRlRGV0YWlsKGUpIHtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kZXRhaWxfYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgICBhZGREZXRhaWwoKSB7XG4gICAgICBsZXQgb2JqID0ge1xuICAgICAgICBjb2xsZWN0aW9uX3R5cGU6ICcnLFxuICAgICAgICBjb2xsZWN0aW9uX3JlbWFyazogJycsXG4gICAgICAgIGNvbGxlY3Rpb25fbW9uZXk6ICcnLFxuICAgICAgICBjb2xsZWN0aW9uX2lkOiAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5kZXRhaWxfYXJyLnB1c2gob2JqKTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dE9yZGVyTnVtYmVyKGUpIHtcbiAgICAgIHRoaXMuZm9ybV9kYXRhLnpoaWZ1YmFvX2NvZGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRTaWduRm9ybUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnNpZ25fZm9ybV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5mb3JtX2RhdGEuc2lnbl9mb3JtID0gdGhpcy5zaWduX2Zvcm1fYXJyW3RoaXMuc2lnbl9mb3JtX2luZGV4XS5zaWduX2Zvcm07XG4gICAgICB0aGlzLmRldGFpbF90eXBlX2xpc3QgPSB0aGlzLnNpZ25fZm9ybV9hcnJbdGhpcy5zaWduX2Zvcm1faW5kZXhdLmNoaWxkcmVuO1xuICAgIH0sXG4gICAgYmluZERlcGFydG1lbnRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5jb2xsZWN0aW9uX3RlYW1faW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuZm9ybV9kYXRhLmNvbGxlbnRpb25fdGVhbSA9IHRoaXMuY29sbGVjdGlvbl90ZWFtW3RoaXMuY29sbGVjdGlvbl90ZWFtX2luZGV4XS5sYWJlbDtcbiAgICAgIHRoaXMuZm9ybV9kYXRhLmNvbGxlbnRpb25fdGVhbV9pZCA9IHRoaXMuY29sbGVjdGlvbl90ZWFtW3RoaXMuY29sbGVjdGlvbl90ZWFtX2luZGV4XS5pbmRleDtcbiAgICB9LFxuICAgIHZpZXdDaGVjayhlKSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IHRoaXMuc2hvd19pbWdfYXJyW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XSxcbiAgICAgICAgdXJsczogdGhpcy5zaG93X2ltZ19hcnIgLy/pnIDopoHpooTop4jnmoTlm77niYfpk77mjqXliJfooagsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZUltZyhlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMuc2hvd19pbWdfYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgICBiaW5kQ29tcGFueUNoYW5nZShlKSB7XG4gICAgICB0aGlzLmNvbXBhbnlfcGlja2VyX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmZvcm1fZGF0YS5zdWJfY29tcGFueV9uYW1lID0gdGhpcy5jb21wYW55X2xpc3RbdGhpcy5jb21wYW55X3BpY2tlcl9pbmRleF0uc3ViX2NvbXBhbnlfbmFtZTtcbiAgICAgIHRoaXMucGF5X21ldGhvZF9yYW5kID0gdGhpcy5jb21wYW55X2xpc3RbdGhpcy5jb21wYW55X3BpY2tlcl9pbmRleF0ucGF5X3R5cGU7XG4gICAgfSxcbiAgICBiaW5kUGF5TmFtZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnBheV9uYW1lX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmZvcm1fZGF0YS5kZXBvc2l0X25hbWUgPSB0aGlzLnBheV9uYW1lX3JhbmRbdGhpcy5wYXlfbmFtZV9pbmRleF07XG4gICAgfSxcbiAgICBiaW5kUGF5Q2hhbmdlKGUpIHtcbiAgICAgIHRoaXMucGF5X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLmZvcm1fZGF0YS5wYXlfdHlwZV9uYW1lID0gdGhpcy5wYXlfbWV0aG9kX3JhbmRbdGhpcy5wYXlfaW5kZXhdLnBheV9uYW1lO1xuICAgICAgdGhpcy5mb3JtX2RhdGEucGF5bWVudF90eXBlID0gdGhpcy5wYXlfbWV0aG9kX3JhbmRbdGhpcy5wYXlfaW5kZXhdLmlkO1xuICAgIH0sXG4gICAgYmluZFBheVRlYW1DaGFuZ2UoZSkge1xuICAgICAgdGhpcy5wYXlfdGVhbV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5mb3JtX2RhdGEudGVhbV9uYW1lID0gdGhpcy5wYXlfdGVhbXNfcmFuZFt0aGlzLnBheV90ZWFtX2luZGV4XTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dERlcG9zaXROYW1lKGUpIHtcbiAgICAgIHRoaXMuZm9ybV9kYXRhLmRlcG9zaXRfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0RGVwb3NpdChlKSB7XG4gICAgICB0aGlzLmZvcm1fZGF0YS5kZXBvc2l0X2Ftb3VudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0UGF5TWV0aG9kKGUpIHtcbiAgICAgIHRoaXMuZm9ybV9kYXRhLnBheW1lbnRfdHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5mb3JtX2RhdGEucGF5bWVudF90aW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBpbnB1dExvZyhlKSB7XG4gICAgICB0aGlzLmZvcm1fZGF0YS5kZXBvc2l0X3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgdXBsb2FkRmlsZSgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6ICc5JywgLy/mnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgZmlsZS51cExvYWRJbWdzKEMuRU5WX1VSTCArICd1cGxvYWRDb21tUHJvb2YnLCByZXMudGVtcEZpbGVQYXRocywgMCwgW10sIFtdLCBmdW5jdGlvbiAobmFtZXMsIHVybHMpIHtcbiAgICAgICAgICAgIC8vIHRoYXQudXBsb2FkX2ltZ19hcnIgPSB0aGF0LnVwbG9hZF9pbWdfYXJyLmNvbmNhdChuYW1lcyk7XG4gICAgICAgICAgICB0aGF0LnNob3dfaW1nX2FyciA9IHRoYXQuc2hvd19pbWdfYXJyLmNvbmNhdCh1cmxzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuc2hvd19pbWdfYXJyKTtcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfSwgLy/ov5Tlm57lm77niYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooaggdGVtcEZpbGVQYXRocyxcbiAgICAgICAgZmFpbDogKCkgPT4geyB9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4geyB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICh0aGF0LmlzX2xvY2spIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGF0LmZvcm1fZGF0YS5kZXBvc2l0X2Ftb3VudCB8fCAhdGhhdC5mb3JtX2RhdGEucGF5bWVudF90eXBlIHx8ICF0aGF0LnNob3dfaW1nX2Fyci5qb2luKCcsJykgfHwgIXRoYXQuZm9ybV9kYXRhLnBheW1lbnRfdGltZSkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7floavlhpnlrozmlbTnmoTmlK/ku5jkv6Hmga8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL+WpmuW6humZkOWItlxuICAgICAgaWYgKHRoYXQuZGV0YWlsX2Fyci5sZW5ndGggPD0gMCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7floavlhpnmlLbmrL7mmI7nu4YnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlY2VpcHRfb3JfcmVmdW5kX2luZGV4PT0xKXtcbiAgICAgICAgdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9hbW91bnQ9LXRoYXQuZm9ybV9kYXRhLmRlcG9zaXRfYW1vdW50O1xuICAgICAgICB0aGF0LmRldGFpbF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNvbGxlY3Rpb25fbW9uZXk9LWVsZW1lbnQuY29sbGVjdGlvbl9tb25leTtcbiAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGRlcG9zaXRfbmFtZTogdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9uYW1lLFxuICAgICAgICBkZXBvc2l0X2Ftb3VudDogdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9hbW91bnQsXG4gICAgICAgIHBheW1lbnRfdHlwZTogdGhhdC5mb3JtX2RhdGEucGF5bWVudF90eXBlLFxuICAgICAgICBwYXltZW50X3RlYW06IHRoYXQuZm9ybV9kYXRhLnRlYW1faWQsXG4gICAgICAgIHBheW1lbnRfZmlsZTogdGhhdC5zaG93X2ltZ19hcnIuam9pbignLCcpLFxuICAgICAgICBkZXBvc2l0X3JlbWFyazogdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9yZW1hcmssXG4gICAgICAgIGRlcG9zaXRfc3RhdHVzOiB0aGF0LmRlcG9zaXRfc3RhdHVzLFxuICAgICAgICBwYXltZW50X3RpbWU6IHRoYXQuZm9ybV9kYXRhLnBheW1lbnRfdGltZSxcblxuICAgICAgICBjb2xsZW50aW9uX3RlYW06IHRoYXQuZm9ybV9kYXRhLmNvbGxlbnRpb25fdGVhbV9pZCxcbiAgICAgICAgcGF5bWVudF9kZXRhaWw6IEpTT04uc3RyaW5naWZ5KHRoYXQuZGV0YWlsX2FyciksXG4gICAgICAgIHNpZ25fZm9ybV9pZDogdGhhdC5zaWduX2Zvcm1fYXJyW3RoYXQuc2lnbl9mb3JtX2luZGV4XS5pZCxcbiAgICAgICAgemhpZnViYW9fY29kZTogdGhhdC5mb3JtX2RhdGEuemhpZnViYW9fY29kZVxuICAgICAgfVxuICAgICAgdGhhdC5pc19sb2NrID0gdHJ1ZTtcbiAgICAgIGlmICh0aGF0Lm9yZGVyX2RlcG9zaXRfaWQpIHtcbiAgICAgICAgZGF0YS5vcmRlcl9kZXBvc2l0X2lkID0gdGhhdC5vcmRlcl9kZXBvc2l0X2lkO1xuICAgICAgICBycS5nZXQoJ3VwZGF0ZVBheUluZm8nLCB7XG4gICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLm9yZGVyX2lkID0gdGhhdC5vcmRlcl9pZDtcbiAgICAgICAgcnEuZ2V0KCdjcmVhdGVQYXlMb2cnLCB7XG4gICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGRhdGEpXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0Lm9yZGVyX2lkID0gb3B0aW9ucy5vcmRlcl9pZDtcbiAgICB0aGF0Lm9yZGVyX2RlcG9zaXRfaWQgPSBvcHRpb25zLm9yZGVyX2RlcG9zaXRfaWQ7XG4gICAgdGhhdC5kZXBvc2l0X3N0YXR1cyA9IG9wdGlvbnMuZGVwb3NpdF9zdGF0dXM7XG4gICAgcnEuZ2V0KCdnZXREZXBvc2l0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmZvcm1fZGF0YS50ZWFtX25hbWUgPSByZXN1bHQuZGF0YS5kYXRhLnRlYW1fbmFtZVxuICAgICAgICB0aGF0LmZvcm1fZGF0YS50ZWFtX2lkID0gcmVzdWx0LmRhdGEuZGF0YS50ZWFtX2lkO1xuICAgICAgICB0aGF0LmNvbGxlY3Rpb25fdGVhbSA9IHJlc3VsdC5kYXRhLmNvbGxlY3Rpb25fdGVhbTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7fSlcbiAgICBycS5nZXQoJ2dldENvbXBhbnlQYXlUeXBlJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmNvbXBhbnlfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIC8vIHRoYXQucGF5X21ldGhvZCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIC8vIHRoYXQucGF5X21ldGhvZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgdGhhdC5wYXlfbWV0aG9kX3JhbmQucHVzaChlbGVtZW50LnBheV9uYW1lKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge30pXG4gICAgcnEuZ2V0KCdnZXRUZWFtcycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYXlfdGVhbXMgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LnBheV90ZWFtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoYXQucGF5X3RlYW1zX3JhbmQucHVzaChlbGVtZW50LnRlYW1fbmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHt9KVxuICAgIHJxLmdldCgnZ2V0U2lnbkZvcm0nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuc2lnbl9mb3JtX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge30pXG4gICAgaWYgKHRoYXQub3JkZXJfZGVwb3NpdF9pZCkge1xuICAgICAgcnEuZ2V0KCdnZXRQYXlJbmZvRGV0YWlsJywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5mb3JtX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5mb3JtX2RhdGEucGF5bWVudF9maWxlLnNwbGl0KCcsJylcbiAgICAgICAgICB0aGF0LmZvcm1fZGF0YS5wYXltZW50X3RpbWUgPSB0aGF0LmZvcm1fZGF0YS5wYXltZW50X2RhdGU7XG4gICAgICAgICAgaWYgKHRoYXQuZm9ybV9kYXRhLmRlcG9zaXRfc3RhdHVzICE9IDEgJiYgdGhhdC5mb3JtX2RhdGEuZGVwb3NpdF9zdGF0dXMgIT0gMikge1xuICAgICAgICAgICAgdGhhdC5pc19kZXBvc2l0ZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHRoYXQuZm9ybV9kYXRhLmRlcG9zaXRfYW1vdW50PDApe1xuICAgICAgICAgICAgdGhhdC5yZWNlaXB0X29yX3JlZnVuZF9pbmRleD0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGF0LmRldGFpbF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhLnBheW1lbnRfZGV0YWlsO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgb3JkZXJfZGVwb3NpdF9pZDogdGhhdC5vcmRlcl9kZXBvc2l0X2lkXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LmlzX2RlcG9zaXRlID0gMDtcbiAgICAgIHRoYXQuZm9ybV9kYXRhLnBheW1lbnRfdGltZSA9IEQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgfVxuICBvblNob3coKSB7IH1cbn1cbiJdfQ==