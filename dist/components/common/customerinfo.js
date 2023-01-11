'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ntitem = require('./ntitem.js');

var _ntitem2 = _interopRequireDefault(_ntitem);

var _ntmode = require('./ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _ntlist = require('./ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _upload = require('./upload.js');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      ntcusinfo: {
        type: Object,
        twoWay: true
      }
    }, _this.$repeat = {}, _this.$props = { "ntmodea": { "label": "婚礼信息" }, "ntmodeb": { "label": "客户信息" }, "ntitema": { "label": "客户来源", "xmlns:v-bind": "", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "channel_name" }, "ntitemb": { "label": "客户意向", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "intention_name" }, "ntitemc": { "label": "派送客服", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "submit_name" }, "ntitemd": { "label": "备注信息", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_remark", "nttype": "area" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_date" }, "ntliste": { "label": "客户姓名", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wechat_id" }, "ntlisth": { "label": "编号", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "order_id" }, "uploada": { "label": "沟通证明", "v-bind:readonly.once": "uploada_read", "v-bind:save_obj.sync": "ntcusinfo", "ntkey": "comm_proof" } }, _this.$events = {}, _this.components = {
      ntmodea: _ntmode2.default,
      ntmodeb: _ntmode2.default,
      ntitema: _ntitem2.default,
      ntitemb: _ntitem2.default,
      ntitemc: _ntitem2.default,
      ntitemd: _ntitem2.default,
      ntlista: _ntlist2.default,
      ntlistb: _ntlist2.default,
      ntlistc: _ntlist2.default,
      ntlistd: _ntlist2.default,
      ntliste: _ntlist2.default,
      ntlistf: _ntlist2.default,
      ntlistg: _ntlist2.default,
      ntlisth: _ntlist2.default,
      uploada: _upload2.default
    }, _this.data = {
      user: null,
      uploada_read: true,
      department: ''
    }, _this.methods = {
      copyText: function copyText(text) {
        wx.setClipboardData({
          data: text,
          success: function success(res) {
            wx.getClipboardData({
              title: '复制成功', //提示的内容,
              icon: 'none',
              success: function success(res) {}
            });
          }
        });
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.user = _wepy2.default.getStorageSync('user');
      this.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyaW5mby5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibnRjdXNpbmZvIiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm50bW9kZWEiLCJudG1vZGUiLCJudG1vZGViIiwibnRpdGVtYSIsIm50aXRlbSIsIm50aXRlbWIiLCJudGl0ZW1jIiwibnRpdGVtZCIsIm50bGlzdGEiLCJudGxpc3QiLCJudGxpc3RiIiwibnRsaXN0YyIsIm50bGlzdGQiLCJudGxpc3RlIiwibnRsaXN0ZiIsIm50bGlzdGciLCJudGxpc3RoIiwidXBsb2FkYSIsInVwbG9hZCIsImRhdGEiLCJ1c2VyIiwidXBsb2FkYV9yZWFkIiwiZGVwYXJ0bWVudCIsIm1ldGhvZHMiLCJjb3B5VGV4dCIsInRleHQiLCJ3eCIsInNldENsaXBib2FyZERhdGEiLCJzdWNjZXNzIiwicmVzIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsInRpdGxlIiwiaWNvbiIsIndhdGNoIiwib3B0aW9ucyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFNQyxNQURHO0FBRVRDLGdCQUFRO0FBRkM7QUFETCxLLFFBTVRDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBWCxFQUE0QixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQXRDLEVBQXVELFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsZ0JBQWUsRUFBL0IsRUFBa0MsdUJBQXNCLFdBQXhELEVBQW9FLFNBQVEsY0FBNUUsRUFBakUsRUFBNkosV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsV0FBdEMsRUFBa0QsU0FBUSxnQkFBMUQsRUFBdkssRUFBbVAsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsV0FBdEMsRUFBa0QsU0FBUSxhQUExRCxFQUE3UCxFQUFzVSxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixXQUF0QyxFQUFrRCxTQUFRLGFBQTFELEVBQXdFLFVBQVMsTUFBakYsRUFBaFYsRUFBeWEsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsV0FBdEMsRUFBa0QsU0FBUSxxQkFBMUQsRUFBbmIsRUFBb2dCLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFdBQXRDLEVBQWtELFNBQVEsbUJBQTFELEVBQTlnQixFQUE2bEIsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsV0FBdEMsRUFBa0QsU0FBUSxlQUExRCxFQUF2bUIsRUFBa3JCLFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFdBQXRDLEVBQWtELFNBQVEsY0FBMUQsRUFBNXJCLEVBQXN3QixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQWdCLHVCQUFzQixXQUF0QyxFQUFrRCxTQUFRLFdBQTFELEVBQWh4QixFQUF1MUIsV0FBVSxFQUFDLFNBQVEsS0FBVCxFQUFlLHVCQUFzQixXQUFyQyxFQUFpRCxTQUFRLGFBQXpELEVBQWoyQixFQUF5NkIsV0FBVSxFQUFDLFNBQVEsS0FBVCxFQUFlLHVCQUFzQixXQUFyQyxFQUFpRCxTQUFRLFdBQXpELEVBQW43QixFQUF5L0IsV0FBVSxFQUFDLFNBQVEsSUFBVCxFQUFjLHVCQUFzQixXQUFwQyxFQUFnRCxTQUFRLFVBQXhELEVBQW5nQyxFQUF1a0MsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix3QkFBdUIsY0FBdkMsRUFBc0Qsd0JBQXVCLFdBQTdFLEVBQXlGLFNBQVEsWUFBakcsRUFBamxDLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGVBQVNDLGdCQURDO0FBRVZDLGVBQVNELGdCQUZDO0FBR1ZFLGVBQVNDLGdCQUhDO0FBSVZDLGVBQVNELGdCQUpDO0FBS1ZFLGVBQVNGLGdCQUxDO0FBTVZHLGVBQVNILGdCQU5DO0FBT1ZJLGVBQVNDLGdCQVBDO0FBUVZDLGVBQVNELGdCQVJDO0FBU1ZFLGVBQVNGLGdCQVRDO0FBVVZHLGVBQVNILGdCQVZDO0FBV1ZJLGVBQVNKLGdCQVhDO0FBWVZLLGVBQVNMLGdCQVpDO0FBYVZNLGVBQVNOLGdCQWJDO0FBY1ZPLGVBQVNQLGdCQWRDO0FBZVZRLGVBQVNDO0FBZkMsSyxRQWlCWkMsSSxHQUFPO0FBQ0xDLFlBQU0sSUFERDtBQUVMQyxvQkFBYyxJQUZUO0FBR0xDLGtCQUFZO0FBSFAsSyxRQUtQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsSUFERCxFQUNPO0FBQ2JDLFdBQUdDLGdCQUFILENBQW9CO0FBQ2xCUixnQkFBTU0sSUFEWTtBQUVsQkcsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkgsZUFBR0ksZ0JBQUgsQ0FBb0I7QUFDbEJDLHFCQUFPLE1BRFcsRUFDSDtBQUNmQyxvQkFBTSxNQUZZO0FBR2xCSix1QkFBUyxpQkFBVUMsR0FBVixFQUFlLENBQUc7QUFIVCxhQUFwQjtBQUtEO0FBUmlCLFNBQXBCO0FBVUQ7QUFaTyxLLFFBY1ZJLEssR0FBUSxFOzs7OzsyQkFFREMsTyxFQUFTO0FBQ2QsV0FBS2QsSUFBTCxHQUFZZSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxXQUFLZCxVQUFMLEdBQWtCYSxlQUFLQyxjQUFMLENBQW9CLGFBQXBCLENBQWxCO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7O0VBckRnQ0QsZUFBS0UsUzs7a0JBQW5CL0MsSyIsImZpbGUiOiJjdXN0b21lcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG50aXRlbSBmcm9tICcuL250aXRlbSc7XG5pbXBvcnQgbnRtb2RlIGZyb20gJy4vbnRtb2RlJztcbmltcG9ydCBudGxpc3QgZnJvbSAnLi9udGxpc3QnO1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbnRjdXNpbmZvOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudG1vZGVhXCI6e1wibGFiZWxcIjpcIuWpmuekvOS/oeaBr1wifSxcIm50bW9kZWJcIjp7XCJsYWJlbFwiOlwi5a6i5oi35L+h5oGvXCJ9LFwibnRpdGVtYVwiOntcImxhYmVsXCI6XCLlrqLmiLfmnaXmupBcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJjaGFubmVsX25hbWVcIn0sXCJudGl0ZW1iXCI6e1wibGFiZWxcIjpcIuWuouaIt+aEj+WQkVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGl0ZW1jXCI6e1wibGFiZWxcIjpcIua0vumAgeWuouacjVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwic3VibWl0X25hbWVcIn0sXCJudGl0ZW1kXCI6e1wibGFiZWxcIjpcIuWkh+azqOS/oeaBr1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwidXNlcl9yZW1hcmtcIixcIm50dHlwZVwiOlwiYXJlYVwifSxcIm50bGlzdGFcIjp7XCJsYWJlbFwiOlwi5oSP5ZCR5Z+O5biCXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJpbnRlbnRpb25fY2l0eV9uYW1lXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcIndlZGRpbmdfY2l0eV9uYW1lXCJ9LFwibnRsaXN0Y1wiOntcImxhYmVsXCI6XCLlqZrnpLzphZLlupdcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcIndlZGRpbmdfaG90ZWxcIn0sXCJudGxpc3RkXCI6e1wibGFiZWxcIjpcIuWpmuekvOaXtumXtFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0ZVwiOntcImxhYmVsXCI6XCLlrqLmiLflp5PlkI1cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwifSxcIm50bGlzdGZcIjp7XCJsYWJlbFwiOlwi5omL5py65Y+3XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJ1c2VyX21vYmlsZVwifSxcIm50bGlzdGdcIjp7XCJsYWJlbFwiOlwi5b6u5L+h5Y+3XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJ3ZWNoYXRfaWRcIn0sXCJudGxpc3RoXCI6e1wibGFiZWxcIjpcIue8luWPt1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwib3JkZXJfaWRcIn0sXCJ1cGxvYWRhXCI6e1wibGFiZWxcIjpcIuayn+mAmuivgeaYjlwiLFwidi1iaW5kOnJlYWRvbmx5Lm9uY2VcIjpcInVwbG9hZGFfcmVhZFwiLFwidi1iaW5kOnNhdmVfb2JqLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcImNvbW1fcHJvb2ZcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50bW9kZWE6IG50bW9kZSxcbiAgICBudG1vZGViOiBudG1vZGUsXG4gICAgbnRpdGVtYTogbnRpdGVtLFxuICAgIG50aXRlbWI6IG50aXRlbSxcbiAgICBudGl0ZW1jOiBudGl0ZW0sXG4gICAgbnRpdGVtZDogbnRpdGVtLFxuICAgIG50bGlzdGE6IG50bGlzdCxcbiAgICBudGxpc3RiOiBudGxpc3QsXG4gICAgbnRsaXN0YzogbnRsaXN0LFxuICAgIG50bGlzdGQ6IG50bGlzdCxcbiAgICBudGxpc3RlOiBudGxpc3QsXG4gICAgbnRsaXN0ZjogbnRsaXN0LFxuICAgIG50bGlzdGc6IG50bGlzdCxcbiAgICBudGxpc3RoOiBudGxpc3QsXG4gICAgdXBsb2FkYTogdXBsb2FkLFxuICB9O1xuICBkYXRhID0ge1xuICAgIHVzZXI6IG51bGwsXG4gICAgdXBsb2FkYV9yZWFkOiB0cnVlLFxuICAgIGRlcGFydG1lbnQ6ICcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgY29weVRleHQodGV4dCkge1xuICAgICAgd3guc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgIGRhdGE6IHRleHQsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICB3eC5nZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5aSN5Yi25oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7IH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gIH07XG4gIHdhdGNoID0ge1xuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoaXMuZGVwYXJ0bWVudCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29mZmljZV9saW5lJyk7XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG59XG4iXX0=