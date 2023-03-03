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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "upload": { "label": "变更凭证", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" }, "ntmodualweidingmsg": { "label": "客户信息" }, "ntitemIchannel": { "label": "客户来源", "v-bind:ntvalue.sync": "customer", "ntkey": "channel_name" }, "ntitemIremark": { "label": "变更备注", "nttype": "area", "v-bind:ntvalue.sync": "sbumit_data", "ntkey": "status_remark", "v-bind:readonly.sync": "readonly", "placeholder": "请输入备注信息" }, "ntitemIintend": { "label": "客户意向", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_name" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date" }, "ntliste": { "label": "客户姓名", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:ntvalue.sync": "customer", "ntkey": "wechat_id" }, "ntpickera": { "label": "状态变更", "v-bind:ntrange.sync": "status_arr", "v-bind:checked_index.sync": "status_arr_index", "ntkey": "status" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      upload: _upload2.default,
      topbar: _topbar2.default,
      ntmodualweidingmsg: _ntmode2.default,
      ntitemIchannel: _ntitem2.default,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnZWJhY2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ1cGxvYWQiLCJ0b3BiYXIiLCJudG1vZHVhbHdlaWRpbmdtc2ciLCJudG1vZGUiLCJudGl0ZW1JY2hhbm5lbCIsIm50aXRlbSIsIm50aXRlbUlyZW1hcmsiLCJudGl0ZW1JaW50ZW5kIiwibnRsaXN0YSIsIm50bGlzdCIsIm50bGlzdGIiLCJudGxpc3RjIiwibnRsaXN0ZCIsIm50bGlzdGUiLCJudGxpc3RmIiwibnRsaXN0ZyIsIm50cGlja2VyYSIsIm50cGlja2VyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaWQiLCJjdXN0b21lciIsImlzYmFjayIsInNidW1pdF9kYXRhIiwic3RhdHVzX3JlbWFyayIsInN0YXR1c19hcnIiLCJzdGF0dXMiLCJzdGF0dXNfYXJyX2luZGV4IiwicmVhZG9ubHkiLCJ1cGxhb2RlZCIsImltYWdlcyIsInN1Ym1pdF9sb2NrIiwiZHJvcF9pZCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJ0aGF0IiwidG9fc3RhdHVzIiwicnEiLCJnZXQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ1c2VyX2lkIiwiZHJvcF9yZW1hcmsiLCJkcm9wX2ZpbGUiLCJqb2luIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInJlc3VsdCIsInNwbGl0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxHQUF2QixFQUEyQix3QkFBdUIsVUFBbEQsRUFBNkQsU0FBUSxRQUFyRSxFQUE4RSx3QkFBdUIsVUFBckcsRUFBckksRUFBc1Asc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQTNRLEVBQTRSLGtCQUFpQixFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxjQUF6RCxFQUE3UyxFQUFzWCxpQkFBZ0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsVUFBUyxNQUF6QixFQUFnQyx1QkFBc0IsYUFBdEQsRUFBb0UsU0FBUSxlQUE1RSxFQUE0Rix3QkFBdUIsVUFBbkgsRUFBOEgsZUFBYyxTQUE1SSxFQUF0WSxFQUE2aEIsaUJBQWdCLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixVQUF0QyxFQUFpRCxTQUFRLGdCQUF6RCxFQUE3aUIsRUFBd25CLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFVBQXRDLEVBQWlELFNBQVEscUJBQXpELEVBQWxvQixFQUFrdEIsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxtQkFBekQsRUFBNXRCLEVBQTB5QixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixVQUF0QyxFQUFpRCxTQUFRLGVBQXpELEVBQXB6QixFQUE4M0IsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxjQUF6RCxFQUF4NEIsRUFBaTlCLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFVBQXRDLEVBQWlELFNBQVEsV0FBekQsRUFBMzlCLEVBQWlpQyxXQUFVLEVBQUMsU0FBUSxLQUFULEVBQWUsdUJBQXNCLFVBQXJDLEVBQWdELFNBQVEsYUFBeEQsRUFBM2lDLEVBQWtuQyxXQUFVLEVBQUMsU0FBUSxLQUFULEVBQWUsdUJBQXNCLFVBQXJDLEVBQWdELFNBQVEsV0FBeEQsRUFBNW5DLEVBQWlzQyxhQUFZLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixZQUF0QyxFQUFtRCw2QkFBNEIsa0JBQS9FLEVBQWtHLFNBQVEsUUFBMUcsRUFBN3NDLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyxjQUFRQSxnQkFKRTtBQUtWQywwQkFBb0JDLGdCQUxWO0FBTVZDLHNCQUFnQkMsZ0JBTk47QUFPVkMscUJBQWVELGdCQVBMO0FBUVZFLHFCQUFlRixnQkFSTDtBQVNWRyxlQUFTQyxnQkFUQztBQVVWQyxlQUFTRCxnQkFWQztBQVdWRSxlQUFTRixnQkFYQztBQVlWRyxlQUFTSCxnQkFaQztBQWFWSSxlQUFTSixnQkFiQztBQWNWSyxlQUFTTCxnQkFkQztBQWVWTSxlQUFTTixnQkFmQztBQWdCVk8saUJBQVdDO0FBaEJELEssUUFrQlpDLEksR0FBTztBQUNMQyxpQkFBVyxJQUROO0FBRUxDLGFBQU8sTUFGRjtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyxjQUFRLElBTEg7QUFNTEMsbUJBQWE7QUFDWEMsdUJBQWU7QUFESixPQU5SO0FBU0xDLGtCQUFZLENBQUM7QUFDWEMsZ0JBQVE7QUFERyxPQUFELEVBRVQ7QUFDREEsZ0JBQVE7QUFEUCxPQUZTLENBVFA7QUFjTEMsd0JBQWtCLENBZGI7QUFlTEMsZ0JBQVUsS0FmTDtBQWdCTEMsZ0JBQVU7QUFDUkMsZ0JBQVE7QUFEQSxPQWhCTDtBQW1CTEMsbUJBQWEsS0FuQlI7QUFvQkxDLGVBQVE7QUFwQkgsSyxRQXNCUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxZQUFZLENBQWhCO0FBQ0EsWUFBSUQsS0FBS1IsZ0JBQUwsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUJTLHNCQUFZLENBQVosQ0FEOEIsQ0FDZjtBQUNoQixTQUZELE1BRU8sSUFBSUQsS0FBS1IsZ0JBQUwsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDckNTLHNCQUFZLENBQVosQ0FEcUMsQ0FDdEI7QUFDaEI7QUFDREMsMEJBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN4QixlQUFLLG1CQUFVO0FBQ2JDLDJCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxxQkFBTyxDQURTLENBQ1A7QUFETyxhQUFsQjtBQUdEO0FBTHVCLFNBQTFCLEVBTUc7QUFDREMsbUJBQVNQLEtBQUtmLEVBRGI7QUFFRHVCLHVCQUFhUixLQUFLWixXQUFMLENBQWlCQyxhQUY3QjtBQUdEWSxxQkFBV0EsU0FIVjtBQUlEUSxxQkFBV1QsS0FBS04sUUFBTCxDQUFjQyxNQUFkLENBQXFCZSxJQUFyQixDQUEwQixHQUExQjtBQUpWLFNBTkg7QUFZRDtBQXJCTyxLOzs7OzsyQkF1QkhDLE8sRUFBUztBQUNkQSxnQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxVQUFJWCxPQUFPLElBQVg7QUFDQUEsV0FBS2YsRUFBTCxHQUFVMEIsUUFBUTFCLEVBQWxCO0FBQ0EsVUFBSTBCLFFBQVFkLE9BQVIsSUFBbUIsQ0FBdkIsRUFBMEI7QUFBRTtBQUMxQkcsYUFBS0gsT0FBTCxHQUFhYyxRQUFRZCxPQUFyQjtBQUNBRyxhQUFLUCxRQUFMLEdBQWdCLElBQWhCO0FBQ0FTLDBCQUFHQyxHQUFILENBQU8sb0JBQVAsRUFBNkI7QUFDM0IsZUFBSyxtQkFBVTtBQUNiSCxpQkFBS1osV0FBTCxDQUFpQkMsYUFBakIsR0FBaUN5QixPQUFPaEMsSUFBUCxDQUFZQSxJQUFaLENBQWlCMEIsV0FBbEQ7QUFDQVIsaUJBQUtOLFFBQUwsQ0FBY0MsTUFBZCxHQUF1Qm1CLE9BQU9oQyxJQUFQLENBQVlBLElBQVosQ0FBaUIyQixTQUFqQixDQUEyQk0sS0FBM0IsQ0FBaUMsR0FBakMsQ0FBdkI7QUFDQWYsaUJBQUtnQixNQUFMO0FBQ0Q7QUFMMEIsU0FBN0IsRUFNRztBQUNEbkIsbUJBQVNHLEtBQUtIO0FBRGIsU0FOSDtBQVNEO0FBQ0RLLHdCQUFHQyxHQUFILENBQU8sZ0JBQVAsRUFBeUI7QUFDdkIsYUFBSyxtQkFBVTtBQUNiSCxlQUFLZCxRQUFMLEdBQWdCNEIsT0FBT2hDLElBQVAsQ0FBWUEsSUFBNUI7QUFDQWtCLGVBQUtnQixNQUFMO0FBQ0Q7QUFKc0IsT0FBekIsRUFLRztBQUNEVCxpQkFBU0ksUUFBUTFCO0FBRGhCLE9BTEg7QUFRRDs7OzZCQUNRLENBQUc7Ozs7RUE3RnFCbUIsZUFBS2EsSTs7a0JBQW5CNUQsSyIsImZpbGUiOiJjaGFyZ2ViYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHVwbG9hZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vdXBsb2FkXCI7XG5pbXBvcnQgbnRpdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250aXRlbSc7XG5pbXBvcnQgbnRtb2RlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udG1vZGVcIlxuaW1wb3J0IG50bGlzdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRsaXN0XCJcbmltcG9ydCBudHBpY2tlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRwaWNrZXJcIlxuXG5pbXBvcnQgdG9wYmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RvcGJhclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwidXBsb2FkXCI6e1wibGFiZWxcIjpcIuWPmOabtOWHreivgVwiLFwic2l6ZVwiOlwiOVwiLFwidi1iaW5kOnNhdmVfb2JqLnN5bmNcIjpcInVwbGFvZGVkXCIsXCJudGtleVwiOlwiaW1hZ2VzXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn0sXCJudG1vZHVhbHdlaWRpbmdtc2dcIjp7XCJsYWJlbFwiOlwi5a6i5oi35L+h5oGvXCJ9LFwibnRpdGVtSWNoYW5uZWxcIjp7XCJsYWJlbFwiOlwi5a6i5oi35p2l5rqQXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcImNoYW5uZWxfbmFtZVwifSxcIm50aXRlbUlyZW1hcmtcIjp7XCJsYWJlbFwiOlwi5Y+Y5pu05aSH5rOoXCIsXCJudHR5cGVcIjpcImFyZWFcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcInNidW1pdF9kYXRhXCIsXCJudGtleVwiOlwic3RhdHVzX3JlbWFya1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5aSH5rOo5L+h5oGvXCJ9LFwibnRpdGVtSWludGVuZFwiOntcImxhYmVsXCI6XCLlrqLmiLfmhI/lkJFcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGxpc3RhXCI6e1wibGFiZWxcIjpcIuaEj+WQkeWfjuW4glwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJpbnRlbnRpb25fY2l0eV9uYW1lXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19jaXR5X25hbWVcIn0sXCJudGxpc3RjXCI6e1wibGFiZWxcIjpcIuWpmuekvOmFkuW6l1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2hvdGVsXCJ9LFwibnRsaXN0ZFwiOntcImxhYmVsXCI6XCLlqZrnpLzml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0ZVwiOntcImxhYmVsXCI6XCLlrqLmiLflp5PlkI1cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9uYW1lXCJ9LFwibnRsaXN0ZlwiOntcImxhYmVsXCI6XCLmiYvmnLrlj7dcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIn0sXCJudGxpc3RnXCI6e1wibGFiZWxcIjpcIuW+ruS/oeWPt1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWNoYXRfaWRcIn0sXCJudHBpY2tlcmFcIjp7XCJsYWJlbFwiOlwi54q25oCB5Y+Y5pu0XCIsXCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJzdGF0dXNfYXJyXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJzdGF0dXNfYXJyX2luZGV4XCIsXCJudGtleVwiOlwic3RhdHVzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICB1cGxvYWQ6IHVwbG9hZCxcbiAgICB0b3BiYXI6IHRvcGJhcixcbiAgICBudG1vZHVhbHdlaWRpbmdtc2c6IG50bW9kZSxcbiAgICBudGl0ZW1JY2hhbm5lbDogbnRpdGVtLFxuICAgIG50aXRlbUlyZW1hcms6IG50aXRlbSxcbiAgICBudGl0ZW1JaW50ZW5kOiBudGl0ZW0sXG4gICAgbnRsaXN0YTogbnRsaXN0LFxuICAgIG50bGlzdGI6IG50bGlzdCxcbiAgICBudGxpc3RjOiBudGxpc3QsXG4gICAgbnRsaXN0ZDogbnRsaXN0LFxuICAgIG50bGlzdGU6IG50bGlzdCxcbiAgICBudGxpc3RmOiBudGxpc3QsXG4gICAgbnRsaXN0ZzogbnRsaXN0LFxuICAgIG50cGlja2VyYTogbnRwaWNrZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICfnirbmgIHlj5jmm7QnLFxuICAgIGlkOiAnJyxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgc2J1bWl0X2RhdGE6IHtcbiAgICAgIHN0YXR1c19yZW1hcms6ICcnXG4gICAgfSxcbiAgICBzdGF0dXNfYXJyOiBbe1xuICAgICAgc3RhdHVzOiAn5peg5pWI5a6i6LWEJyxcbiAgICB9LCB7XG4gICAgICBzdGF0dXM6ICflrqLotYTlt7LmrbsnLFxuICAgIH1dLFxuICAgIHN0YXR1c19hcnJfaW5kZXg6IDAsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHVwbGFvZGVkOiB7XG4gICAgICBpbWFnZXM6IFtdXG4gICAgfSxcbiAgICBzdWJtaXRfbG9jazogZmFsc2UsXG4gICAgZHJvcF9pZDowXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IHRvX3N0YXR1cyA9IDI7XG4gICAgICBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDApIHtcbiAgICAgICAgdG9fc3RhdHVzID0gMjsgLy/pgIDlrqJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC5zdGF0dXNfYXJyX2luZGV4ID09IDEpIHtcbiAgICAgICAgdG9fc3RhdHVzID0gMTsgLy/lt7LmrbtcbiAgICAgIH1cbiAgICAgIHJxLmdldCgnc3VibWl0RHJvcEFwcGx5Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHVzZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgIGRyb3BfcmVtYXJrOiB0aGF0LnNidW1pdF9kYXRhLnN0YXR1c19yZW1hcmssXG4gICAgICAgIHRvX3N0YXR1czogdG9fc3RhdHVzLFxuICAgICAgICBkcm9wX2ZpbGU6IHRoYXQudXBsYW9kZWQuaW1hZ2VzLmpvaW4oJywnKVxuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgIGlmIChvcHRpb25zLmRyb3BfaWQgIT0gMCkgeyAvL2lmIGhhcyBkcm9wIGluZm8gXG4gICAgICB0aGF0LmRyb3BfaWQ9b3B0aW9ucy5kcm9wX2lkO1xuICAgICAgdGhhdC5yZWFkb25seSA9IHRydWU7XG4gICAgICBycS5nZXQoJ2Ryb3BDdXN0b21lckRldGFpbCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuc2J1bWl0X2RhdGEuc3RhdHVzX3JlbWFyayA9IHJlc3VsdC5kYXRhLmRhdGEuZHJvcF9yZW1hcms7XG4gICAgICAgICAgdGhhdC51cGxhb2RlZC5pbWFnZXMgPSByZXN1bHQuZGF0YS5kYXRhLmRyb3BfZmlsZS5zcGxpdCgnLCcpXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBkcm9wX2lkOiB0aGF0LmRyb3BfaWRcbiAgICAgIH0pXG4gICAgfVxuICAgIHJxLmdldCgnZ2V0T25lVXNlckluZm8nLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHVzZXJfaWQ6IG9wdGlvbnMuaWRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19