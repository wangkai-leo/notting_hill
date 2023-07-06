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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "upload": { "label": "变更凭证", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" }, "ntmodualweidingmsg": { "label": "客户信息" }, "ntitemIchannel": { "label": "客户来源", "v-bind:ntvalue.sync": "customer", "ntkey": "channel_name" }, "ntitemtime": { "xmlns:wx": "", "label": "创建时间", "v-bind:ntvalue.sync": "sbumit_data", "ntkey": "create_date" }, "ntitemIremark": { "label": "变更备注", "nttype": "area", "v-bind:ntvalue.sync": "sbumit_data", "ntkey": "status_remark", "v-bind:readonly.sync": "readonly", "placeholder": "请输入备注信息" }, "ntitemIintend": { "label": "客户意向", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_name" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date" }, "ntliste": { "label": "客户姓名", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:ntvalue.sync": "customer", "ntkey": "wechat_id" }, "ntpickera": { "label": "状态变更", "v-bind:ntrange.sync": "status_arr", "v-bind:checked_index.sync": "status_arr_index", "ntkey": "status" } }, _this.$events = {}, _this.components = {
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
            that.sbumit_data.create_date = result.data.data.create_date;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZWJhY2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ1cGxvYWQiLCJ0b3BiYXIiLCJudG1vZHVhbHdlaWRpbmdtc2ciLCJudG1vZGUiLCJudGl0ZW1JY2hhbm5lbCIsIm50aXRlbSIsIm50aXRlbXRpbWUiLCJudGl0ZW1JcmVtYXJrIiwibnRpdGVtSWludGVuZCIsIm50bGlzdGEiLCJudGxpc3QiLCJudGxpc3RiIiwibnRsaXN0YyIsIm50bGlzdGQiLCJudGxpc3RlIiwibnRsaXN0ZiIsIm50bGlzdGciLCJudHBpY2tlcmEiLCJudHBpY2tlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlkIiwiY3VzdG9tZXIiLCJpc2JhY2siLCJzYnVtaXRfZGF0YSIsInN0YXR1c19yZW1hcmsiLCJzdGF0dXNfYXJyIiwic3RhdHVzIiwic3RhdHVzX2Fycl9pbmRleCIsInJlYWRvbmx5IiwidXBsYW9kZWQiLCJpbWFnZXMiLCJzdWJtaXRfbG9jayIsImRyb3BfaWQiLCJtZXRob2RzIiwic3VibWl0IiwidGhhdCIsInRvX3N0YXR1cyIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXNlcl9pZCIsImRyb3BfcmVtYXJrIiwiZHJvcF9maWxlIiwiam9pbiIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJjcmVhdGVfZGF0ZSIsInNwbGl0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMs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QVIsaUJBQUtaLFdBQUwsQ0FBaUIyQixXQUFqQixHQUE2QkQsT0FBT2hDLElBQVAsQ0FBWUEsSUFBWixDQUFpQmlDLFdBQTlDO0FBQ0FmLGlCQUFLTixRQUFMLENBQWNDLE1BQWQsR0FBdUJtQixPQUFPaEMsSUFBUCxDQUFZQSxJQUFaLENBQWlCMkIsU0FBakIsQ0FBMkJPLEtBQTNCLENBQWlDLEdBQWpDLENBQXZCO0FBQ0FoQixpQkFBS2lCLE1BQUw7QUFDRDtBQU4wQixTQUE3QixFQU9HO0FBQ0RwQixtQkFBU0csS0FBS0g7QUFEYixTQVBIO0FBVUQ7QUFDREssd0JBQUdDLEdBQUgsQ0FBTyxnQkFBUCxFQUF5QjtBQUN2QixhQUFLLG1CQUFVO0FBQ2JILGVBQUtkLFFBQUwsR0FBZ0I0QixPQUFPaEMsSUFBUCxDQUFZQSxJQUE1QjtBQUNBa0IsZUFBS2lCLE1BQUw7QUFDRDtBQUpzQixPQUF6QixFQUtHO0FBQ0RWLGlCQUFTSSxRQUFRMUI7QUFEaEIsT0FMSDtBQVFEOzs7NkJBQ1EsQ0FBRzs7OztFQS9GcUJtQixlQUFLYyxJOztrQkFBbkI5RCxLIiwiZmlsZSI6ImNoYXJnZWJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgdXBsb2FkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi91cGxvYWRcIjtcbmltcG9ydCBudGl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRpdGVtJztcbmltcG9ydCBudG1vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250bW9kZVwiXG5pbXBvcnQgbnRsaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGxpc3RcIlxuaW1wb3J0IG50cGlja2VyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udHBpY2tlclwiXG5cbmltcG9ydCB0b3BiYXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9wYmFyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJ1cGxvYWRcIjp7XCJsYWJlbFwiOlwi5Y+Y5pu05Yet6K+BXCIsXCJzaXplXCI6XCI5XCIsXCJ2LWJpbmQ6c2F2ZV9vYmouc3luY1wiOlwidXBsYW9kZWRcIixcIm50a2V5XCI6XCJpbWFnZXNcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJyZWFkb25seVwifSxcIm50bW9kdWFsd2VpZGluZ21zZ1wiOntcImxhYmVsXCI6XCLlrqLmiLfkv6Hmga9cIn0sXCJudGl0ZW1JY2hhbm5lbFwiOntcImxhYmVsXCI6XCLlrqLmiLfmnaXmupBcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwiY2hhbm5lbF9uYW1lXCJ9LFwibnRpdGVtdGltZVwiOntcInhtbG5zOnd4XCI6XCJcIixcImxhYmVsXCI6XCLliJvlu7rml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcInNidW1pdF9kYXRhXCIsXCJudGtleVwiOlwiY3JlYXRlX2RhdGVcIn0sXCJudGl0ZW1JcmVtYXJrXCI6e1wibGFiZWxcIjpcIuWPmOabtOWkh+azqFwiLFwibnR0eXBlXCI6XCJhcmVhXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJzYnVtaXRfZGF0YVwiLFwibnRrZXlcIjpcInN0YXR1c19yZW1hcmtcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJyZWFkb25seVwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpeWkh+azqOS/oeaBr1wifSxcIm50aXRlbUlpbnRlbmRcIjp7XCJsYWJlbFwiOlwi5a6i5oi35oSP5ZCRXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcImludGVudGlvbl9uYW1lXCJ9LFwibnRsaXN0YVwiOntcImxhYmVsXCI6XCLmhI/lkJHln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX2NpdHlfbmFtZVwifSxcIm50bGlzdGJcIjp7XCJsYWJlbFwiOlwi57uT5ama5Z+O5biCXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcIndlZGRpbmdfY2l0eV9uYW1lXCJ9LFwibnRsaXN0Y1wiOntcImxhYmVsXCI6XCLlqZrnpLzphZLlupdcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19ob3RlbFwifSxcIm50bGlzdGRcIjp7XCJsYWJlbFwiOlwi5ama56S85pe26Ze0XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcIndlZGRpbmdfZGF0ZVwifSxcIm50bGlzdGVcIjp7XCJsYWJlbFwiOlwi5a6i5oi35aeT5ZCNXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwifSxcIm50bGlzdGZcIjp7XCJsYWJlbFwiOlwi5omL5py65Y+3XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcInVzZXJfbW9iaWxlXCJ9LFwibnRsaXN0Z1wiOntcImxhYmVsXCI6XCLlvq7kv6Hlj7dcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VjaGF0X2lkXCJ9LFwibnRwaWNrZXJhXCI6e1wibGFiZWxcIjpcIueKtuaAgeWPmOabtFwiLFwidi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwic3RhdHVzX2FyclwiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwic3RhdHVzX2Fycl9pbmRleFwiLFwibnRrZXlcIjpcInN0YXR1c1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgdXBsb2FkOiB1cGxvYWQsXG4gICAgdG9wYmFyOiB0b3BiYXIsXG4gICAgbnRtb2R1YWx3ZWlkaW5nbXNnOiBudG1vZGUsXG4gICAgbnRpdGVtSWNoYW5uZWw6IG50aXRlbSxcbiAgICBudGl0ZW10aW1lOiBudGl0ZW0sXG4gICAgbnRpdGVtSXJlbWFyazogbnRpdGVtLFxuICAgIG50aXRlbUlpbnRlbmQ6IG50aXRlbSxcbiAgICBudGxpc3RhOiBudGxpc3QsXG4gICAgbnRsaXN0YjogbnRsaXN0LFxuICAgIG50bGlzdGM6IG50bGlzdCxcbiAgICBudGxpc3RkOiBudGxpc3QsXG4gICAgbnRsaXN0ZTogbnRsaXN0LFxuICAgIG50bGlzdGY6IG50bGlzdCxcbiAgICBudGxpc3RnOiBudGxpc3QsXG4gICAgbnRwaWNrZXJhOiBudHBpY2tlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+eKtuaAgeWPmOabtCcsXG4gICAgaWQ6ICcnLFxuICAgIGN1c3RvbWVyOiBudWxsLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBzYnVtaXRfZGF0YToge1xuICAgICAgc3RhdHVzX3JlbWFyazogJydcbiAgICB9LFxuICAgIHN0YXR1c19hcnI6IFt7XG4gICAgICBzdGF0dXM6ICfml6DmlYjlrqLotYQnLFxuICAgIH0sIHtcbiAgICAgIHN0YXR1czogJ+Wuoui1hOW3suatuycsXG4gICAgfV0sXG4gICAgc3RhdHVzX2Fycl9pbmRleDogMCxcbiAgICByZWFkb25seTogZmFsc2UsXG4gICAgdXBsYW9kZWQ6IHtcbiAgICAgIGltYWdlczogW11cbiAgICB9LFxuICAgIHN1Ym1pdF9sb2NrOiBmYWxzZSxcbiAgICBkcm9wX2lkOiAwXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IHRvX3N0YXR1cyA9IDI7XG4gICAgICBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDApIHtcbiAgICAgICAgdG9fc3RhdHVzID0gMjsgLy/pgIDlrqJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDEpIHtcbiAgICAgICAgdG9fc3RhdHVzID0gMTsgLy/lt7LmrbtcbiAgICAgIH1cbiAgICAgIHJxLmdldCgnc3VibWl0RHJvcEFwcGx5Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHVzZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgIGRyb3BfcmVtYXJrOiB0aGF0LnNidW1pdF9kYXRhLnN0YXR1c19yZW1hcmssXG4gICAgICAgIHRvX3N0YXR1czogdG9fc3RhdHVzLFxuICAgICAgICBkcm9wX2ZpbGU6IHRoYXQudXBsYW9kZWQuaW1hZ2VzLmpvaW4oJywnKVxuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgIGlmIChvcHRpb25zLmRyb3BfaWQgIT0gMCkgeyAvL2lmIGhhcyBkcm9wIGluZm8gXG4gICAgICB0aGF0LmRyb3BfaWQgPSBvcHRpb25zLmRyb3BfaWQ7XG4gICAgICB0aGF0LnJlYWRvbmx5ID0gdHJ1ZTtcbiAgICAgIHJxLmdldCgnZHJvcEN1c3RvbWVyRGV0YWlsJywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5zYnVtaXRfZGF0YS5zdGF0dXNfcmVtYXJrID0gcmVzdWx0LmRhdGEuZGF0YS5kcm9wX3JlbWFyaztcbiAgICAgICAgICB0aGF0LnNidW1pdF9kYXRhLmNyZWF0ZV9kYXRlPXJlc3VsdC5kYXRhLmRhdGEuY3JlYXRlX2RhdGU7XG4gICAgICAgICAgdGhhdC51cGxhb2RlZC5pbWFnZXMgPSByZXN1bHQuZGF0YS5kYXRhLmRyb3BfZmlsZS5zcGxpdCgnLCcpXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBkcm9wX2lkOiB0aGF0LmRyb3BfaWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJxLmdldCgnZ2V0T25lVXNlckluZm8nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IG9wdGlvbnMuaWRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19