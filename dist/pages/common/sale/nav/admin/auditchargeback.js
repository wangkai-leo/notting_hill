'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _upload = require('./../../../../../components/common/upload.js');

var _upload2 = _interopRequireDefault(_upload);

var _maintain = require('./../../../../../components/common/maintain.js');

var _maintain2 = _interopRequireDefault(_maintain);

var _ntitem = require('./../../../../../components/common/ntitem.js');

var _ntitem2 = _interopRequireDefault(_ntitem);

var _ntlist = require('./../../../../../components/common/ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _ntmode = require('./../../../../../components/common/ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _topbar = require('./../../../../../components/topbar.js');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "upload": { "label": "变更凭证", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" }, "maintain": { "label": "跟进日志", "v-bind:ntvalue.sync": "maintain_value", "ntkey": "list" }, "ntitema": { "label": "客户来源", "v-bind:ntvalue.sync": "customer", "ntkey": "channel_name" }, "ntitemb": { "label": "客资编号", "v-bind:ntvalue.sync": "customer", "ntkey": "order_id" }, "ntitemc": { "label": "发布客服", "v-bind:ntvalue.sync": "customer", "ntkey": "submit_name" }, "ntitemd": { "label": "发布时间", "v-bind:ntvalue.sync": "customer", "ntkey": "submit_date" }, "ntiteme": { "label": "变更备注", "nttype": "area", "v-bind:ntvalue.sync": "customer", "ntkey": "drop_remark" }, "ntmode": { "label": "客户信息" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "customer", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date" }, "ntliste": { "label": "婚礼时间", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:ntvalue.sync": "customer", "ntkey": "wechat_id" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      upload: _upload2.default,
      maintain: _maintain2.default,

      ntitema: _ntitem2.default,
      ntitemb: _ntitem2.default,
      ntitemc: _ntitem2.default,
      ntitemd: _ntitem2.default,
      ntiteme: _ntitem2.default,

      ntmode: _ntmode2.default,

      ntlista: _ntlist2.default,
      ntlistb: _ntlist2.default,
      ntlistc: _ntlist2.default,
      ntlistd: _ntlist2.default,
      ntliste: _ntlist2.default,
      ntlistf: _ntlist2.default,
      ntlistg: _ntlist2.default
    }, _this.data = {
      isopacity: true,
      title: '状态变更',
      id: '',
      customer: null,
      isback: true,
      readonly: true,
      status_arr: ['退客申请', '客资已死'],
      status_arr_index: 0,
      uplaoded: {
        images: []
      },
      maintain_value: {
        list: []
      },
      drop_status: 0
    }, _this.methods = {
      recover: function recover() {
        var that = this;
        if (that.submit_lock) {
          return false;
        }
        that.submit_lock = true;
        _request2.default.get('rollbackDropCustomer', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
          }
        }, {
          user_id: that.customer.user_id,
          drop_id: that.id
        });
      },
      submit: function submit(e) {
        var that = this;
        var is_pass = e.currentTarget.dataset.pass;
        if (that.status_arr_index == 0) {
          _request2.default.get('approvedDropCustomer', {
            200: function _(result) {
              _wepy2.default.navigateBack({
                delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
              });
            }
          }, {
            drop_id: that.id,
            user_id: that.customer.user_id,
            sales_id: that.customer.sales_id,
            is_pass: is_pass
          });
        } else if (that.status_arr_index == 1) {}
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.id = options.id;
      that.drop_status = options.drop_status;
      _request2.default.get('dropCustomerDetail', {
        200: function _(result) {
          that.customer = result.data.data;
          that.maintain_value.list = result.data.status_log;
          that.uplaoded.images = that.customer.drop_file.split(',');
          that.$apply();
        }
      }, {
        drop_id: options.id
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/auditchargeback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0Y2hhcmdlYmFjay5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsInRvcGJhciIsInVwbG9hZCIsIm1haW50YWluIiwibnRpdGVtYSIsIm50aXRlbSIsIm50aXRlbWIiLCJudGl0ZW1jIiwibnRpdGVtZCIsIm50aXRlbWUiLCJudG1vZGUiLCJudGxpc3RhIiwibnRsaXN0IiwibnRsaXN0YiIsIm50bGlzdGMiLCJudGxpc3RkIiwibnRsaXN0ZSIsIm50bGlzdGYiLCJudGxpc3RnIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaWQiLCJjdXN0b21lciIsImlzYmFjayIsInJlYWRvbmx5Iiwic3RhdHVzX2FyciIsInN0YXR1c19hcnJfaW5kZXgiLCJ1cGxhb2RlZCIsImltYWdlcyIsIm1haW50YWluX3ZhbHVlIiwibGlzdCIsImRyb3Bfc3RhdHVzIiwibWV0aG9kcyIsInJlY292ZXIiLCJ0aGF0Iiwic3VibWl0X2xvY2siLCJycSIsImdldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInVzZXJfaWQiLCJkcm9wX2lkIiwic3VibWl0IiwiZSIsImlzX3Bhc3MiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInBhc3MiLCJzYWxlc19pZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJzdGF0dXNfbG9nIiwiZHJvcF9maWxlIiwic3BsaXQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRUFBNEgsVUFBUyxFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLEdBQXZCLEVBQTJCLHdCQUF1QixVQUFsRCxFQUE2RCxTQUFRLFFBQXJFLEVBQThFLHdCQUF1QixVQUFyRyxFQUFySSxFQUFzUCxZQUFXLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixnQkFBdEMsRUFBdUQsU0FBUSxNQUEvRCxFQUFqUSxFQUF3VSxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixVQUF0QyxFQUFpRCxTQUFRLGNBQXpELEVBQWxWLEVBQTJaLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFVBQXRDLEVBQWlELFNBQVEsVUFBekQsRUFBcmEsRUFBMGUsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxhQUF6RCxFQUFwZixFQUE0akIsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxhQUF6RCxFQUF0a0IsRUFBOG9CLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsVUFBUyxNQUF6QixFQUFnQyx1QkFBc0IsVUFBdEQsRUFBaUUsU0FBUSxhQUF6RSxFQUF4cEIsRUFBZ3ZCLFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBenZCLEVBQTB3QixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixVQUF0QyxFQUFpRCxTQUFRLHFCQUF6RCxFQUFweEIsRUFBbzJCLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFVBQXRDLEVBQWlELFNBQVEsbUJBQXpELEVBQTkyQixFQUE0N0IsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsVUFBdEMsRUFBaUQsU0FBUSxlQUF6RCxFQUF0OEIsRUFBZ2hDLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFVBQXRDLEVBQWlELFNBQVEsY0FBekQsRUFBMWhDLEVBQW1tQyxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixVQUF0QyxFQUFpRCxTQUFRLFdBQXpELEVBQTdtQyxFQUFtckMsV0FBVSxFQUFDLFNBQVEsS0FBVCxFQUFlLHVCQUFzQixVQUFyQyxFQUFnRCxTQUFRLGFBQXhELEVBQTdyQyxFQUFvd0MsV0FBVSxFQUFDLFNBQVEsS0FBVCxFQUFlLHVCQUFzQixVQUFyQyxFQUFnRCxTQUFRLFdBQXhELEVBQTl3QyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxXQUFLQSxhQURLLEVBQ0E7QUFDVkMsY0FBUUEsZ0JBRkU7QUFHVkMsY0FBT0EsZ0JBSEc7QUFJVkMsY0FBUUEsZ0JBSkU7QUFLVkMsZ0JBQVVBLGtCQUxBOztBQU9WQyxlQUFTQyxnQkFQQztBQVFWQyxlQUFTRCxnQkFSQztBQVNWRSxlQUFTRixnQkFUQztBQVVWRyxlQUFTSCxnQkFWQztBQVdWSSxlQUFTSixnQkFYQzs7QUFhVkssY0FBUUEsZ0JBYkU7O0FBZVZDLGVBQVNDLGdCQWZDO0FBZ0JWQyxlQUFTRCxnQkFoQkM7QUFpQlZFLGVBQVNGLGdCQWpCQztBQWtCVkcsZUFBU0gsZ0JBbEJDO0FBbUJWSSxlQUFTSixnQkFuQkM7QUFvQlZLLGVBQVNMLGdCQXBCQztBQXFCVk0sZUFBU047QUFyQkMsSyxRQXVCWk8sSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsYUFBTyxNQUZGO0FBR0xDLFVBQUksRUFIQztBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGNBQVEsSUFMSDtBQU1MQyxnQkFBVSxJQU5MO0FBT0xDLGtCQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FQUDtBQVFMQyx3QkFBa0IsQ0FSYjtBQVNMQyxnQkFBVTtBQUNSQyxnQkFBUTtBQURBLE9BVEw7QUFZTEMsc0JBQWdCO0FBQ2RDLGNBQU07QUFEUSxPQVpYO0FBZUxDLG1CQUFhO0FBZlIsSyxRQWlCUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLQyxXQUFULEVBQXNCO0FBQ3BCLGlCQUFPLEtBQVA7QUFDRDtBQUNERCxhQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0FDLDBCQUFHQyxHQUFILENBQU8sc0JBQVAsRUFBK0I7QUFDN0IsZUFBSyxtQkFBVTtBQUNiQywyQkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQU8sQ0FEUyxDQUNQO0FBRE8sYUFBbEI7QUFHRDtBQUw0QixTQUEvQixFQU1HO0FBQ0RDLG1CQUFTUCxLQUFLWixRQUFMLENBQWNtQixPQUR0QjtBQUVEQyxtQkFBU1IsS0FBS2I7QUFGYixTQU5IO0FBVUQsT0FqQk87QUFrQlJzQixZQWxCUSxrQkFrQkRDLENBbEJDLEVBa0JFO0FBQ1IsWUFBSVYsT0FBTyxJQUFYO0FBQ0EsWUFBSVcsVUFBVUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXRDO0FBQ0EsWUFBSWQsS0FBS1IsZ0JBQUwsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUJVLDRCQUFHQyxHQUFILENBQU8sc0JBQVAsRUFBK0I7QUFDN0IsaUJBQUssbUJBQVU7QUFDYkMsNkJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLHVCQUFPLENBRFMsQ0FDUDtBQURPLGVBQWxCO0FBR0Q7QUFMNEIsV0FBL0IsRUFNRztBQUNERSxxQkFBU1IsS0FBS2IsRUFEYjtBQUVEb0IscUJBQVNQLEtBQUtaLFFBQUwsQ0FBY21CLE9BRnRCO0FBR0RRLHNCQUFVZixLQUFLWixRQUFMLENBQWMyQixRQUh2QjtBQUlESixxQkFBU0E7QUFKUixXQU5IO0FBWUQsU0FiRCxNQWFPLElBQUlYLEtBQUtSLGdCQUFMLElBQXlCLENBQTdCLEVBQWdDLENBQ3RDO0FBQ0Y7QUFwQ08sSzs7Ozs7MkJBc0NId0IsTyxFQUFTO0FBQ2RBLGdCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLFVBQUloQixPQUFPLElBQVg7QUFDQUEsV0FBS2IsRUFBTCxHQUFVNkIsUUFBUTdCLEVBQWxCO0FBQ0FhLFdBQUtILFdBQUwsR0FBbUJtQixRQUFRbkIsV0FBM0I7QUFDQUssd0JBQUdDLEdBQUgsQ0FBTyxvQkFBUCxFQUE2QjtBQUMzQixhQUFLLG1CQUFVO0FBQ2JILGVBQUtaLFFBQUwsR0FBZ0IrQixPQUFPbkMsSUFBUCxDQUFZQSxJQUE1QjtBQUNBZ0IsZUFBS0wsY0FBTCxDQUFvQkMsSUFBcEIsR0FBMkJ1QixPQUFPbkMsSUFBUCxDQUFZb0MsVUFBdkM7QUFDQXBCLGVBQUtQLFFBQUwsQ0FBY0MsTUFBZCxHQUF1Qk0sS0FBS1osUUFBTCxDQUFjaUMsU0FBZCxDQUF3QkMsS0FBeEIsQ0FBOEIsR0FBOUIsQ0FBdkI7QUFDQXRCLGVBQUt1QixNQUFMO0FBQ0Q7QUFOMEIsT0FBN0IsRUFPRztBQUNEZixpQkFBU1EsUUFBUTdCO0FBRGhCLE9BUEg7QUFVRDs7OzZCQUNRLENBQUc7Ozs7RUFsR3FCaUIsZUFBS29CLEk7O2tCQUFuQmpFLEsiLCJmaWxlIjoiYXVkaXRjaGFyZ2ViYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHVwbG9hZCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vdXBsb2FkXCI7XG5pbXBvcnQgbWFpbnRhaW4gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL21haW50YWluXCI7XG5pbXBvcnQgbnRpdGVtIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGl0ZW1cIjtcbmltcG9ydCBudGxpc3QgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250bGlzdFwiO1xuaW1wb3J0IG50bW9kZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRtb2RlXCI7XG5pbXBvcnQgdG9wYmFyIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RvcGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJ1cGxvYWRcIjp7XCJsYWJlbFwiOlwi5Y+Y5pu05Yet6K+BXCIsXCJzaXplXCI6XCI5XCIsXCJ2LWJpbmQ6c2F2ZV9vYmouc3luY1wiOlwidXBsYW9kZWRcIixcIm50a2V5XCI6XCJpbWFnZXNcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJyZWFkb25seVwifSxcIm1haW50YWluXCI6e1wibGFiZWxcIjpcIui3n+i/m+aXpeW/l1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibWFpbnRhaW5fdmFsdWVcIixcIm50a2V5XCI6XCJsaXN0XCJ9LFwibnRpdGVtYVwiOntcImxhYmVsXCI6XCLlrqLmiLfmnaXmupBcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwiY2hhbm5lbF9uYW1lXCJ9LFwibnRpdGVtYlwiOntcImxhYmVsXCI6XCLlrqLotYTnvJblj7dcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwib3JkZXJfaWRcIn0sXCJudGl0ZW1jXCI6e1wibGFiZWxcIjpcIuWPkeW4g+WuouacjVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJzdWJtaXRfbmFtZVwifSxcIm50aXRlbWRcIjp7XCJsYWJlbFwiOlwi5Y+R5biD5pe26Ze0XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcInN1Ym1pdF9kYXRlXCJ9LFwibnRpdGVtZVwiOntcImxhYmVsXCI6XCLlj5jmm7TlpIfms6hcIixcIm50dHlwZVwiOlwiYXJlYVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJkcm9wX3JlbWFya1wifSxcIm50bW9kZVwiOntcImxhYmVsXCI6XCLlrqLmiLfkv6Hmga9cIn0sXCJudGxpc3RhXCI6e1wibGFiZWxcIjpcIuaEj+WQkeWfjuW4glwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJpbnRlbnRpb25fY2l0eV9uYW1lXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19jaXR5X25hbWVcIn0sXCJudGxpc3RjXCI6e1wibGFiZWxcIjpcIuWpmuekvOmFkuW6l1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWRkaW5nX2hvdGVsXCJ9LFwibnRsaXN0ZFwiOntcImxhYmVsXCI6XCLlqZrnpLzml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0ZVwiOntcImxhYmVsXCI6XCLlqZrnpLzml7bpl7RcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9uYW1lXCJ9LFwibnRsaXN0ZlwiOntcImxhYmVsXCI6XCLmiYvmnLrlj7dcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIn0sXCJudGxpc3RnXCI6e1wibGFiZWxcIjpcIuW+ruS/oeWPt1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50a2V5XCI6XCJ3ZWNoYXRfaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHRvcGJhcjp0b3BiYXIsXG4gICAgdXBsb2FkOiB1cGxvYWQsXG4gICAgbWFpbnRhaW46IG1haW50YWluLFxuXG4gICAgbnRpdGVtYTogbnRpdGVtLFxuICAgIG50aXRlbWI6IG50aXRlbSxcbiAgICBudGl0ZW1jOiBudGl0ZW0sXG4gICAgbnRpdGVtZDogbnRpdGVtLFxuICAgIG50aXRlbWU6IG50aXRlbSxcblxuICAgIG50bW9kZTogbnRtb2RlLFxuXG4gICAgbnRsaXN0YTogbnRsaXN0LFxuICAgIG50bGlzdGI6IG50bGlzdCxcbiAgICBudGxpc3RjOiBudGxpc3QsXG4gICAgbnRsaXN0ZDogbnRsaXN0LFxuICAgIG50bGlzdGU6IG50bGlzdCxcbiAgICBudGxpc3RmOiBudGxpc3QsXG4gICAgbnRsaXN0ZzogbnRsaXN0LFxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+eKtuaAgeWPmOabtCcsXG4gICAgaWQ6ICcnLFxuICAgIGN1c3RvbWVyOiBudWxsLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICByZWFkb25seTogdHJ1ZSxcbiAgICBzdGF0dXNfYXJyOiBbJ+mAgOWuoueUs+ivtycsICflrqLotYTlt7LmrbsnXSxcbiAgICBzdGF0dXNfYXJyX2luZGV4OiAwLFxuICAgIHVwbGFvZGVkOiB7XG4gICAgICBpbWFnZXM6IFtdXG4gICAgfSxcbiAgICBtYWludGFpbl92YWx1ZToge1xuICAgICAgbGlzdDogW11cbiAgICB9LFxuICAgIGRyb3Bfc3RhdHVzOiAwXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgcmVjb3ZlcigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICh0aGF0LnN1Ym1pdF9sb2NrKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuc3VibWl0X2xvY2sgPSB0cnVlO1xuICAgICAgcnEuZ2V0KCdyb2xsYmFja0Ryb3BDdXN0b21lcicsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB1c2VyX2lkOiB0aGF0LmN1c3RvbWVyLnVzZXJfaWQsXG4gICAgICAgIGRyb3BfaWQ6IHRoYXQuaWRcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdWJtaXQoZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IGlzX3Bhc3MgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXNzO1xuICAgICAgaWYgKHRoYXQuc3RhdHVzX2Fycl9pbmRleCA9PSAwKSB7XG4gICAgICAgIHJxLmdldCgnYXBwcm92ZWREcm9wQ3VzdG9tZXInLCB7XG4gICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkcm9wX2lkOiB0aGF0LmlkLFxuICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuY3VzdG9tZXIudXNlcl9pZCxcbiAgICAgICAgICBzYWxlc19pZDogdGhhdC5jdXN0b21lci5zYWxlc19pZCxcbiAgICAgICAgICBpc19wYXNzOiBpc19wYXNzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuc3RhdHVzX2Fycl9pbmRleCA9PSAxKSB7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICB0aGF0LmRyb3Bfc3RhdHVzID0gb3B0aW9ucy5kcm9wX3N0YXR1cztcbiAgICBycS5nZXQoJ2Ryb3BDdXN0b21lckRldGFpbCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5jdXN0b21lciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQubWFpbnRhaW5fdmFsdWUubGlzdCA9IHJlc3VsdC5kYXRhLnN0YXR1c19sb2c7XG4gICAgICAgIHRoYXQudXBsYW9kZWQuaW1hZ2VzID0gdGhhdC5jdXN0b21lci5kcm9wX2ZpbGUuc3BsaXQoJywnKVxuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGRyb3BfaWQ6IG9wdGlvbnMuaWRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19