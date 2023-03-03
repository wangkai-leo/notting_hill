'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _upload = require('./../../../components/common/upload.js');

var _upload2 = _interopRequireDefault(_upload);

var _ntitem = require('./../../../components/common/ntitem.js');

var _ntitem2 = _interopRequireDefault(_ntitem);

var _ntmode = require('./../../../components/common/ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _ntlist = require('./../../../components/common/ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _ntpicker = require('./../../../components/common/ntpicker.js');

var _ntpicker2 = _interopRequireDefault(_ntpicker);

var _topbar = require('./../../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "upload": { "label": "变更凭证", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" }, "ntmodualweidingmsg": { "label": "客户信息" }, "ntitemIchannel": { "label": "客户来源", "v-bind:ntvalue.sync": "customer", "ntkey": "channel_name" }, "ntitemtime": { "xmlns:wx": "", "label": "创建时间", "v-bind:ntvalue.sync": "customer", "ntkey": "create_date" }, "ntitemIremark": { "label": "变更备注", "nttype": "area", "v-bind:ntvalue.sync": "sbumit_data", "ntkey": "status_remark", "v-bind:readonly.sync": "readonly", "placeholder": "请输入备注信息" }, "ntitemIintend": { "label": "客户意向", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_name" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date" }, "ntliste": { "label": "客户姓名", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:ntvalue.sync": "customer", "ntkey": "wechat_id" }, "ntpickera": { "label": "状态变更", "v-bind:ntrange.sync": "status_arr", "v-bind:checked_index.sync": "status_arr_index", "ntkey": "status" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      upload: _upload2.default,
      topbar: _topbar2.default,
      ntmodualweidingmsg: _ntmode2.default,
      ntitemIchannel: _ntitem2.default,
      ntitemtime: _ntitem2.default,
      ntitemIremark: _ntitem2.default,
      ntitemIintend: _ntitem2.default,
      ntlista: _ntlist2.default,
      ntlistb: _ntlist2.default,
      ntlistc: _ntlist2.default,
      ntlistd: _ntlist2.default,
      ntliste: _ntlist2.default,
      ntlistf: _ntlist2.default,
      ntlistg: _ntlist2.default,
      ntpickera: _ntpicker2.default
    }, _this.data = {
      isopacity: true,
      title: '状态变更',
      id: '',
      customer: null,
      isback: true,
      sbumit_data: {
        status_remark: ''
      },
      status_arr: [{
        status: '无效客资'
      }, {
        status: '客资已死'
      }],
      status_arr_index: 0,
      readonly: false,
      uplaoded: {
        images: []
      },
      submit_lock: false,
      drop_id: 0
    }, _this.methods = {
      submit: function submit() {
        var that = this;
        var to_status = 2;
        if (that.status_arr_index == 0) {
          to_status = 2; //退客
        } else if (that.status_arr_index == 1) {
          to_status = 1; //已死
        }
        _request2.default.get('submitDropApply', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
          }
        }, {
          user_id: that.id,
          drop_remark: that.sbumit_data.status_remark,
          to_status: to_status,
          drop_file: that.uplaoded.images.join(',')
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
      if (options.drop_id != 0) {
        //if has drop info 
        that.drop_id = options.drop_id;
        that.readonly = true;
        _request2.default.get('dropCustomerDetail', {
          200: function _(result) {
            that.sbumit_data.status_remark = result.data.data.drop_remark;
            that.uplaoded.images = result.data.data.drop_file.split(',');
            that.$apply();
          }
        }, {
          drop_id: that.drop_id
        });
      }
      _request2.default.get('getOneUserInfo', {
        200: function _(result) {
          that.customer = result.data.data;
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/chargeback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZWJhY2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ1cGxvYWQiLCJ0b3BiYXIiLCJudG1vZHVhbHdlaWRpbmdtc2ciLCJudG1vZGUiLCJudGl0ZW1JY2hhbm5lbCIsIm50aXRlbSIsIm50aXRlbXRpbWUiLCJudGl0ZW1JcmVtYXJrIiwibnRpdGVtSWludGVuZCIsIm50bGlzdGEiLCJudGxpc3QiLCJudGxpc3RiIiwibnRsaXN0YyIsIm50bGlzdGQiLCJudGxpc3RlIiwibnRsaXN0ZiIsIm50bGlzdGciLCJudHBpY2tlcmEiLCJudHBpY2tlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlkIiwiY3VzdG9tZXIiLCJpc2JhY2siLCJzYnVtaXRfZGF0YSIsInN0YXR1c19yZW1hcmsiLCJzdGF0dXNfYXJyIiwic3RhdHVzIiwic3RhdHVzX2Fycl9pbmRleCIsInJlYWRvbmx5IiwidXBsYW9kZWQiLCJpbWFnZXMiLCJzdWJtaXRfbG9jayIsImRyb3BfaWQiLCJtZXRob2RzIiwic3VibWl0IiwidGhhdCIsInRvX3N0YXR1cyIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXNlcl9pZCIsImRyb3BfcmVtYXJrIiwiZHJvcF9maWxlIiwiam9pbiIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJzcGxpdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFB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LENBQWNDLE1BQWQsR0FBdUJtQixPQUFPaEMsSUFBUCxDQUFZQSxJQUFaLENBQWlCMkIsU0FBakIsQ0FBMkJNLEtBQTNCLENBQWlDLEdBQWpDLENBQXZCO0FBQ0FmLGlCQUFLZ0IsTUFBTDtBQUNEO0FBTDBCLFNBQTdCLEVBTUc7QUFDRG5CLG1CQUFTRyxLQUFLSDtBQURiLFNBTkg7QUFTRDtBQUNESyx3QkFBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3ZCLGFBQUssbUJBQVU7QUFDYkgsZUFBS2QsUUFBTCxHQUFnQjRCLE9BQU9oQyxJQUFQLENBQVlBLElBQTVCO0FBQ0FrQixlQUFLZ0IsTUFBTDtBQUNEO0FBSnNCLE9BQXpCLEVBS0c7QUFDRFQsaUJBQVNJLFFBQVExQjtBQURoQixPQUxIO0FBUUQ7Ozs2QkFDUSxDQUFHOzs7O0VBOUZxQm1CLGVBQUthLEk7O2tCQUFuQjdELEsiLCJmaWxlIjoiY2hhcmdlYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB1cGxvYWQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL3VwbG9hZFwiO1xuaW1wb3J0IG50aXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGl0ZW0nO1xuaW1wb3J0IG50bW9kZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRtb2RlXCJcbmltcG9ydCBudGxpc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250bGlzdFwiXG5pbXBvcnQgbnRwaWNrZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250cGlja2VyXCJcblxuaW1wb3J0IHRvcGJhciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b3BiYXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcInVwbG9hZFwiOntcImxhYmVsXCI6XCLlj5jmm7Tlh63or4FcIixcInNpemVcIjpcIjlcIixcInYtYmluZDpzYXZlX29iai5zeW5jXCI6XCJ1cGxhb2RlZFwiLFwibnRrZXlcIjpcImltYWdlc1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCJ9LFwibnRtb2R1YWx3ZWlkaW5nbXNnXCI6e1wibGFiZWxcIjpcIuWuouaIt+S/oeaBr1wifSxcIm50aXRlbUljaGFubmVsXCI6e1wibGFiZWxcIjpcIuWuouaIt+adpea6kFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJjaGFubmVsX25hbWVcIn0sXCJudGl0ZW10aW1lXCI6e1wieG1sbnM6d3hcIjpcIlwiLFwibGFiZWxcIjpcIuWIm+W7uuaXtumXtFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJjcmVhdGVfZGF0ZVwifSxcIm50aXRlbUlyZW1hcmtcIjp7XCJsYWJlbFwiOlwi5Y+Y5pu05aSH5rOoXCIsXCJudHR5cGVcIjpcImFyZWFcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcInNidW1pdF9kYXRhXCIsXCJudGtleVwiOlwic3RhdHVzX3JlbWFya1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5aSH5rOo5L+h5oGvXCJ9LFwibnRpdGVtSWludGVuZFwiOntcImxhYmVsXCI6XCLlrqLmiLfmhI/lkJFcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGxpc3RhXCI6e1wibGFiZWxcIjpcIuaEj+WQkeWfjuW4glwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJpbnRlbnRpb25fY2l0eV9uYW1lXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19jaXR5X25hbWVcIn0sXCJudGxpc3RjXCI6e1wibGFiZWxcIjpcIuWpmuekvOmFkuW6l1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2hvdGVsXCJ9LFwibnRsaXN0ZFwiOntcImxhYmVsXCI6XCLlqZrnpLzml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0ZVwiOntcImxhYmVsXCI6XCLlrqLmiLflp5PlkI1cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9uYW1lXCJ9LFwibnRsaXN0ZlwiOntcImxhYmVsXCI6XCLmiYvmnLrlj7dcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIn0sXCJudGxpc3RnXCI6e1wibGFiZWxcIjpcIuW+ruS/oeWPt1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWNoYXRfaWRcIn0sXCJudHBpY2tlcmFcIjp7XCJsYWJlbFwiOlwi54q25oCB5Y+Y5pu0XCIsXCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJzdGF0dXNfYXJyXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJzdGF0dXNfYXJyX2luZGV4XCIsXCJudGtleVwiOlwic3RhdHVzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICB1cGxvYWQ6IHVwbG9hZCxcbiAgICB0b3BiYXI6IHRvcGJhcixcbiAgICBudG1vZHVhbHdlaWRpbmdtc2c6IG50bW9kZSxcbiAgICBudGl0ZW1JY2hhbm5lbDogbnRpdGVtLFxuICAgIG50aXRlbXRpbWU6IG50aXRlbSxcbiAgICBudGl0ZW1JcmVtYXJrOiBudGl0ZW0sXG4gICAgbnRpdGVtSWludGVuZDogbnRpdGVtLFxuICAgIG50bGlzdGE6IG50bGlzdCxcbiAgICBudGxpc3RiOiBudGxpc3QsXG4gICAgbnRsaXN0YzogbnRsaXN0LFxuICAgIG50bGlzdGQ6IG50bGlzdCxcbiAgICBudGxpc3RlOiBudGxpc3QsXG4gICAgbnRsaXN0ZjogbnRsaXN0LFxuICAgIG50bGlzdGc6IG50bGlzdCxcbiAgICBudHBpY2tlcmE6IG50cGlja2VyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn54q25oCB5Y+Y5pu0JyxcbiAgICBpZDogJycsXG4gICAgY3VzdG9tZXI6IG51bGwsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIHNidW1pdF9kYXRhOiB7XG4gICAgICBzdGF0dXNfcmVtYXJrOiAnJ1xuICAgIH0sXG4gICAgc3RhdHVzX2FycjogW3tcbiAgICAgIHN0YXR1czogJ+aXoOaViOWuoui1hCcsXG4gICAgfSwge1xuICAgICAgc3RhdHVzOiAn5a6i6LWE5bey5q27JyxcbiAgICB9XSxcbiAgICBzdGF0dXNfYXJyX2luZGV4OiAwLFxuICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICB1cGxhb2RlZDoge1xuICAgICAgaW1hZ2VzOiBbXVxuICAgIH0sXG4gICAgc3VibWl0X2xvY2s6IGZhbHNlLFxuICAgIGRyb3BfaWQ6MFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCB0b19zdGF0dXMgPSAyO1xuICAgICAgaWYgKHRoYXQuc3RhdHVzX2Fycl9pbmRleCA9PSAwKSB7XG4gICAgICAgIHRvX3N0YXR1cyA9IDI7IC8v6YCA5a6iXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuc3RhdHVzX2Fycl9pbmRleCA9PSAxKSB7XG4gICAgICAgIHRvX3N0YXR1cyA9IDE7IC8v5bey5q27XG4gICAgICB9XG4gICAgICBycS5nZXQoJ3N1Ym1pdERyb3BBcHBseScsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICBkcm9wX3JlbWFyazogdGhhdC5zYnVtaXRfZGF0YS5zdGF0dXNfcmVtYXJrLFxuICAgICAgICB0b19zdGF0dXM6IHRvX3N0YXR1cyxcbiAgICAgICAgZHJvcF9maWxlOiB0aGF0LnVwbGFvZGVkLmltYWdlcy5qb2luKCcsJylcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICBpZiAob3B0aW9ucy5kcm9wX2lkICE9IDApIHsgLy9pZiBoYXMgZHJvcCBpbmZvIFxuICAgICAgdGhhdC5kcm9wX2lkPW9wdGlvbnMuZHJvcF9pZDtcbiAgICAgIHRoYXQucmVhZG9ubHkgPSB0cnVlO1xuICAgICAgcnEuZ2V0KCdkcm9wQ3VzdG9tZXJEZXRhaWwnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LnNidW1pdF9kYXRhLnN0YXR1c19yZW1hcmsgPSByZXN1bHQuZGF0YS5kYXRhLmRyb3BfcmVtYXJrO1xuICAgICAgICAgIHRoYXQudXBsYW9kZWQuaW1hZ2VzID0gcmVzdWx0LmRhdGEuZGF0YS5kcm9wX2ZpbGUuc3BsaXQoJywnKVxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgZHJvcF9pZDogdGhhdC5kcm9wX2lkXG4gICAgICB9KVxuICAgIH1cbiAgICBycS5nZXQoJ2dldE9uZVVzZXJJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB1c2VyX2lkOiBvcHRpb25zLmlkXG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7IH1cbn1cbiJdfQ==