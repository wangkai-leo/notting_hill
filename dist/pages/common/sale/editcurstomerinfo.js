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

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _ntmode = require('./../../../components/common/ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _ntlist = require('./../../../components/common/ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "ntlistn": { "label": "新人称呼", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name", "placeholder": "请输入新人称呼" }, "ntlistp": { "label": "电话", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile", "placeholder": "请输入电话" }, "ntlistq": { "label": "微信号", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "wechat_id", "placeholder": "请输入微信号" }, "ntlistt": { "label": "酒店桌数", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "hotel_tables_number", "placeholder": "请输入酒店桌数" }, "ntlistd": { "label": "婚期时间", "xmlns:wx": "", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date", "nttype": "picker", "pickertype": "date" }, "ntlists": { "label": "婚期", "pickertype": "common", "v-bind:ntindex.sync": "wedding_date_schedule", "xmlns:v-on": "", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "wedding_date_status", "ntkey": "status", "nttype": "picker" }, "ntlistw": { "label": "预算", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_budget", "placeholder": "请输入预算" }, "ntlistc": { "label": "结婚城市", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntrangeprkey": "wedding_province_name", "ntrangecikey": "wedding_city_name", "ntrangearkey": "wedding_area_name", "nttype": "picker", "pickertype": "region" } }, _this.$events = { "ntlists": { "v-on:pickerValueChange": "pickerValueChange" } }, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      ntmode: _ntmode2.default,

      ntlist: _ntlist2.default,
      ntlistn: _ntlist2.default,
      ntlistp: _ntlist2.default,
      ntlistq: _ntlist2.default,
      ntlistt: _ntlist2.default,
      ntlistd: _ntlist2.default,
      ntlists: _ntlist2.default,
      ntlistw: _ntlist2.default,
      ntlistc: _ntlist2.default

    }, _this.data = {
      isopacity: true,
      title: '编辑客资信息',
      customer: null,
      id: '',
      isback: true,
      is_readonly: false,
      wedding_date_schedule: 0,
      wedding_date_status: [{ status: '婚期未定' }, { status: '婚期已定' }]
    }, _this.methods = {
      pickerValueChange: function pickerValueChange(index) {
        if (index == 0) {
          this.customer.wedding_date = "";
        } else {
          this.wedding_date_schedule = 1;
        }
      },
      submit: function submit() {
        var that = this;
        if (!_validate2.default.isPhoneNumber(that.customer.user_mobile)) {
          _wepy2.default.showToast({
            title: '请输入正确的手机号',
            icon: 'none',
            duration: 2000
          });
          return false;
        }
        if (this.wedding_date_schedule && !that.customer.wedding_date) {
          _wepy2.default.showToast({
            title: '请选择结婚日期或者选择婚期未定',
            icon: 'none',
            duration: 2000
          });
          return false;
        }
        _request2.default.get('editUserInfo', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
          }
        }, {
          user_id: that.id,
          user_name: that.customer.user_name,
          user_mobile: that.customer.user_mobile,
          wedding_date: that.customer.wedding_date,
          hotel_tables_number: that.customer.hotel_tables_number,
          wechat_id: that.customer.wechat_id,
          wedding_budget: that.customer.wedding_budget,
          wedding_province_name: that.customer.wedding_province_name,
          wedding_city_name: that.customer.wedding_city_name,
          wedding_area_name: that.customer.wedding_area_name
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.id = options.id;
      _request2.default.get('followUp', {
        200: function _(result) {
          that.customer = result.data.data;
          if (that.customer.wedding_date) {
            that.wedding_date_schedule = 1;
          }
          that.$apply();
        }
      }, {
        user_id: options.id
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/editcurstomerinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRjdXJzdG9tZXJpbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwibnRtb2RlIiwibnRsaXN0IiwibnRsaXN0biIsIm50bGlzdHAiLCJudGxpc3RxIiwibnRsaXN0dCIsIm50bGlzdGQiLCJudGxpc3RzIiwibnRsaXN0dyIsIm50bGlzdGMiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJjdXN0b21lciIsImlkIiwiaXNiYWNrIiwiaXNfcmVhZG9ubHkiLCJ3ZWRkaW5nX2RhdGVfc2NoZWR1bGUiLCJ3ZWRkaW5nX2RhdGVfc3RhdHVzIiwic3RhdHVzIiwibWV0aG9kcyIsInBpY2tlclZhbHVlQ2hhbmdlIiwiaW5kZXgiLCJ3ZWRkaW5nX2RhdGUiLCJzdWJtaXQiLCJ0aGF0IiwidmFsZGF0b3IiLCJpc1Bob25lTnVtYmVyIiwidXNlcl9tb2JpbGUiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJob3RlbF90YWJsZXNfbnVtYmVyIiwid2VjaGF0X2lkIiwid2VkZGluZ19idWRnZXQiLCJ3ZWRkaW5nX3Byb3ZpbmNlX25hbWUiLCJ3ZWRkaW5nX2NpdHlfbmFtZSIsIndlZGRpbmdfYXJlYV9uYW1lIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInJlc3VsdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFo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V0FBS1gsRUFBTCxHQUFVK0IsUUFBUS9CLEVBQWxCO0FBQ0FtQix3QkFBR0MsR0FBSCxDQUFPLFVBQVAsRUFBbUI7QUFDakIsYUFBSyxtQkFBVTtBQUNiVCxlQUFLWixRQUFMLEdBQWdCbUMsT0FBT3RDLElBQVAsQ0FBWUEsSUFBNUI7QUFDQSxjQUFHZSxLQUFLWixRQUFMLENBQWNVLFlBQWpCLEVBQThCO0FBQzVCRSxpQkFBS1IscUJBQUwsR0FBMkIsQ0FBM0I7QUFDRDtBQUNEUSxlQUFLd0IsTUFBTDtBQUNEO0FBUGdCLE9BQW5CLEVBUUc7QUFDRFosaUJBQVNRLFFBQVEvQjtBQURoQixPQVJIO0FBV0Q7Ozs2QkFDUSxDQUFHOzs7O0VBL0ZxQmUsZUFBS3FCLEk7O2tCQUFuQnpELEsiLCJmaWxlIjoiZWRpdGN1cnN0b21lcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBudG1vZGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRtb2RlJztcbmltcG9ydCBudGxpc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRsaXN0JztcbmltcG9ydCB2YWxkYXRvciBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwibnRsaXN0blwiOntcImxhYmVsXCI6XCLmlrDkurrnp7DlkbxcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJpc19yZWFkb25seVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ1c2VyX25hbWVcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXmlrDkurrnp7DlkbxcIn0sXCJudGxpc3RwXCI6e1wibGFiZWxcIjpcIueUteivnVwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcInVzZXJfbW9iaWxlXCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl55S16K+dXCJ9LFwibnRsaXN0cVwiOntcImxhYmVsXCI6XCLlvq7kv6Hlj7dcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJpc19yZWFkb25seVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWNoYXRfaWRcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXlvq7kv6Hlj7dcIn0sXCJudGxpc3R0XCI6e1wibGFiZWxcIjpcIumFkuW6l+ahjOaVsFwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcImhvdGVsX3RhYmxlc19udW1iZXJcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXphZLlupfmoYzmlbBcIn0sXCJudGxpc3RkXCI6e1wibGFiZWxcIjpcIuWpmuacn+aXtumXtFwiLFwieG1sbnM6d3hcIjpcIlwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcIndlZGRpbmdfZGF0ZVwiLFwibnR0eXBlXCI6XCJwaWNrZXJcIixcInBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGxpc3RzXCI6e1wibGFiZWxcIjpcIuWpmuacn1wiLFwicGlja2VydHlwZVwiOlwiY29tbW9uXCIsXCJ2LWJpbmQ6bnRpbmRleC5zeW5jXCI6XCJ3ZWRkaW5nX2RhdGVfc2NoZWR1bGVcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJ3ZWRkaW5nX2RhdGVfc3RhdHVzXCIsXCJudGtleVwiOlwic3RhdHVzXCIsXCJudHR5cGVcIjpcInBpY2tlclwifSxcIm50bGlzdHdcIjp7XCJsYWJlbFwiOlwi6aKE566XXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwiaXNfcmVhZG9ubHlcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19idWRnZXRcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXpooTnrpdcIn0sXCJudGxpc3RjXCI6e1wibGFiZWxcIjpcIue7k+WpmuWfjuW4glwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRyYW5nZXBya2V5XCI6XCJ3ZWRkaW5nX3Byb3ZpbmNlX25hbWVcIixcIm50cmFuZ2VjaWtleVwiOlwid2VkZGluZ19jaXR5X25hbWVcIixcIm50cmFuZ2VhcmtleVwiOlwid2VkZGluZ19hcmVhX25hbWVcIixcIm50dHlwZVwiOlwicGlja2VyXCIsXCJwaWNrZXJ0eXBlXCI6XCJyZWdpb25cIn19O1xyXG4kZXZlbnRzID0ge1wibnRsaXN0c1wiOntcInYtb246cGlja2VyVmFsdWVDaGFuZ2VcIjpcInBpY2tlclZhbHVlQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgbnRtb2RlOiBudG1vZGUsXG5cbiAgICBudGxpc3Q6IG50bGlzdCxcbiAgICBudGxpc3RuOiBudGxpc3QsXG4gICAgbnRsaXN0cDogbnRsaXN0LFxuICAgIG50bGlzdHE6IG50bGlzdCxcbiAgICBudGxpc3R0OiBudGxpc3QsXG4gICAgbnRsaXN0ZDogbnRsaXN0LFxuICAgIG50bGlzdHM6IG50bGlzdCxcbiAgICBudGxpc3R3OiBudGxpc3QsXG4gICAgbnRsaXN0YzogbnRsaXN0LFxuXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn57yW6L6R5a6i6LWE5L+h5oGvJyxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBpZDogJycsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzX3JlYWRvbmx5OiBmYWxzZSxcbiAgICB3ZWRkaW5nX2RhdGVfc2NoZWR1bGU6MCxcbiAgICB3ZWRkaW5nX2RhdGVfc3RhdHVzOiBbXG4gICAgICB7IHN0YXR1czogJ+Wpmuacn+acquWumicgfSxcbiAgICAgIHsgc3RhdHVzOiAn5ama5pyf5bey5a6aJyB9XG4gICAgXVxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHBpY2tlclZhbHVlQ2hhbmdlKGluZGV4KXtcbiAgICAgIGlmKGluZGV4PT0wKXtcbiAgICAgICAgdGhpcy5jdXN0b21lci53ZWRkaW5nX2RhdGU9XCJcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLndlZGRpbmdfZGF0ZV9zY2hlZHVsZT0xXG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBpZiAoIXZhbGRhdG9yLmlzUGhvbmVOdW1iZXIodGhhdC5jdXN0b21lci51c2VyX21vYmlsZSkpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMud2VkZGluZ19kYXRlX3NjaGVkdWxlICYmICF0aGF0LmN1c3RvbWVyLndlZGRpbmdfZGF0ZSl7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqee7k+WpmuaXpeacn+aIluiAhemAieaLqeWpmuacn+acquWumicsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBycS5nZXQoJ2VkaXRVc2VySW5mbycsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICB1c2VyX25hbWU6IHRoYXQuY3VzdG9tZXIudXNlcl9uYW1lLFxuICAgICAgICB1c2VyX21vYmlsZTogdGhhdC5jdXN0b21lci51c2VyX21vYmlsZSxcbiAgICAgICAgd2VkZGluZ19kYXRlOiB0aGF0LmN1c3RvbWVyLndlZGRpbmdfZGF0ZSxcbiAgICAgICAgaG90ZWxfdGFibGVzX251bWJlcjogdGhhdC5jdXN0b21lci5ob3RlbF90YWJsZXNfbnVtYmVyLFxuICAgICAgICB3ZWNoYXRfaWQ6dGhhdC5jdXN0b21lci53ZWNoYXRfaWQsXG4gICAgICAgIHdlZGRpbmdfYnVkZ2V0OiB0aGF0LmN1c3RvbWVyLndlZGRpbmdfYnVkZ2V0LFxuICAgICAgICB3ZWRkaW5nX3Byb3ZpbmNlX25hbWU6IHRoYXQuY3VzdG9tZXIud2VkZGluZ19wcm92aW5jZV9uYW1lLFxuICAgICAgICB3ZWRkaW5nX2NpdHlfbmFtZTogdGhhdC5jdXN0b21lci53ZWRkaW5nX2NpdHlfbmFtZSxcbiAgICAgICAgd2VkZGluZ19hcmVhX25hbWU6IHRoYXQuY3VzdG9tZXIud2VkZGluZ19hcmVhX25hbWVcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICBycS5nZXQoJ2ZvbGxvd1VwJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgaWYodGhhdC5jdXN0b21lci53ZWRkaW5nX2RhdGUpe1xuICAgICAgICAgIHRoYXQud2VkZGluZ19kYXRlX3NjaGVkdWxlPTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiBvcHRpb25zLmlkXG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7IH1cbn1cbiJdfQ==