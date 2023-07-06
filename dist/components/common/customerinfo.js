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
      },
      is_search: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.$repeat = {}, _this.$props = { "ntmodea": { "label": "婚礼信息" }, "ntmodeb": { "label": "客户信息" }, "ntitema": { "label": "客户来源", "xmlns:v-bind": "", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "channel_name" }, "ntitemb": { "label": "客户意向", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "intention_name" }, "ntitemc": { "label": "派送客服", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "submit_name" }, "ntitemd": { "label": "备注信息", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_remark", "nttype": "area" }, "ntlista": { "label": "意向城市", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "intention_city_name" }, "ntlistb": { "label": "结婚城市", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_city_name" }, "ntlistc": { "label": "婚礼酒店", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_hotel" }, "ntlistd": { "label": "婚礼时间", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wedding_date" }, "ntliste": { "label": "客户姓名", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_name" }, "ntlistf": { "label": "手机号", "v-bind:is_search.sync": "is_search", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "user_mobile" }, "ntlistg": { "label": "微信号", "v-bind:is_search.sync": "is_search", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "wechat_id" }, "ntlisth": { "label": "编号", "v-bind:ntvalue.sync": "ntcusinfo", "ntkey": "order_id" }, "uploada": { "label": "沟通证明", "v-bind:readonly.once": "uploada_read", "v-bind:save_obj.sync": "ntcusinfo", "ntkey": "comm_proof" } }, _this.$events = {}, _this.components = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyaW5mby5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibnRjdXNpbmZvIiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsImlzX3NlYXJjaCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRtb2RlYSIsIm50bW9kZSIsIm50bW9kZWIiLCJudGl0ZW1hIiwibnRpdGVtIiwibnRpdGVtYiIsIm50aXRlbWMiLCJudGl0ZW1kIiwibnRsaXN0YSIsIm50bGlzdCIsIm50bGlzdGIiLCJudGxpc3RjIiwibnRsaXN0ZCIsIm50bGlzdGUiLCJudGxpc3RmIiwibnRsaXN0ZyIsIm50bGlzdGgiLCJ1cGxvYWRhIiwidXBsb2FkIiwiZGF0YSIsInVzZXIiLCJ1cGxvYWRhX3JlYWQiLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsImNvcHlUZXh0IiwidGV4dCIsInd4Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRDbGlwYm9hcmREYXRhIiwidGl0bGUiLCJpY29uIiwid2F0Y2giLCJvcHRpb25zIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNBQU1DLE1BREc7QUFFVEMsZ0JBQVE7QUFGQyxPQURMO0FBS05DLGlCQUFVO0FBQ1JILGNBQU1JLE9BREU7QUFFUkMsaUJBQVEsS0FGQTtBQUdSSCxnQkFBTztBQUhDO0FBTEosSyxRQVdUSSxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQVgsRUFBNEIsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUF0QyxFQUF1RCxXQUFVLEVBQUMsU0FB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG50aXRlbSBmcm9tICcuL250aXRlbSc7XG5pbXBvcnQgbnRtb2RlIGZyb20gJy4vbnRtb2RlJztcbmltcG9ydCBudGxpc3QgZnJvbSAnLi9udGxpc3QnO1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbnRjdXNpbmZvOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGlzX3NlYXJjaDp7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDpmYWxzZSxcbiAgICAgIHR3b1dheTp0cnVlXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudG1vZGVhXCI6e1wibGFiZWxcIjpcIuWpmuekvOS/oeaBr1wifSxcIm50bW9kZWJcIjp7XCJsYWJlbFwiOlwi5a6i5oi35L+h5oGvXCJ9LFwibnRpdGVtYVwiOntcImxhYmVsXCI6XCLlrqLmiLfmnaXmupBcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJjaGFubmVsX25hbWVcIn0sXCJudGl0ZW1iXCI6e1wibGFiZWxcIjpcIuWuouaIt+aEj+WQkVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGl0ZW1jXCI6e1wibGFiZWxcIjpcIua0vumAgeWuouacjVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwic3VibWl0X25hbWVcIn0sXCJudGl0ZW1kXCI6e1wibGFiZWxcIjpcIuWkh+azqOS/oeaBr1wiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwidXNlcl9yZW1hcmtcIixcIm50dHlwZVwiOlwiYXJlYVwifSxcIm50bGlzdGFcIjp7XCJsYWJlbFwiOlwi5oSP5ZCR5Z+O5biCXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJpbnRlbnRpb25fY2l0eV9uYW1lXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcIndlZGRpbmdfY2l0eV9uYW1lXCJ9LFwibnRsaXN0Y1wiOntcImxhYmVsXCI6XCLlqZrnpLzphZLlupdcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcIndlZGRpbmdfaG90ZWxcIn0sXCJudGxpc3RkXCI6e1wibGFiZWxcIjpcIuWpmuekvOaXtumXtFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0ZVwiOntcImxhYmVsXCI6XCLlrqLmiLflp5PlkI1cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwifSxcIm50bGlzdGZcIjp7XCJsYWJlbFwiOlwi5omL5py65Y+3XCIsXCJ2LWJpbmQ6aXNfc2VhcmNoLnN5bmNcIjpcImlzX3NlYXJjaFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIn0sXCJudGxpc3RnXCI6e1wibGFiZWxcIjpcIuW+ruS/oeWPt1wiLFwidi1iaW5kOmlzX3NlYXJjaC5zeW5jXCI6XCJpc19zZWFyY2hcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50Y3VzaW5mb1wiLFwibnRrZXlcIjpcIndlY2hhdF9pZFwifSxcIm50bGlzdGhcIjp7XCJsYWJlbFwiOlwi57yW5Y+3XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudGN1c2luZm9cIixcIm50a2V5XCI6XCJvcmRlcl9pZFwifSxcInVwbG9hZGFcIjp7XCJsYWJlbFwiOlwi5rKf6YCa6K+B5piOXCIsXCJ2LWJpbmQ6cmVhZG9ubHkub25jZVwiOlwidXBsb2FkYV9yZWFkXCIsXCJ2LWJpbmQ6c2F2ZV9vYmouc3luY1wiOlwibnRjdXNpbmZvXCIsXCJudGtleVwiOlwiY29tbV9wcm9vZlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgbnRtb2RlYTogbnRtb2RlLFxuICAgIG50bW9kZWI6IG50bW9kZSxcbiAgICBudGl0ZW1hOiBudGl0ZW0sXG4gICAgbnRpdGVtYjogbnRpdGVtLFxuICAgIG50aXRlbWM6IG50aXRlbSxcbiAgICBudGl0ZW1kOiBudGl0ZW0sXG4gICAgbnRsaXN0YTogbnRsaXN0LFxuICAgIG50bGlzdGI6IG50bGlzdCxcbiAgICBudGxpc3RjOiBudGxpc3QsXG4gICAgbnRsaXN0ZDogbnRsaXN0LFxuICAgIG50bGlzdGU6IG50bGlzdCxcbiAgICBudGxpc3RmOiBudGxpc3QsXG4gICAgbnRsaXN0ZzogbnRsaXN0LFxuICAgIG50bGlzdGg6IG50bGlzdCxcbiAgICB1cGxvYWRhOiB1cGxvYWQsXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgdXNlcjogbnVsbCxcbiAgICB1cGxvYWRhX3JlYWQ6IHRydWUsXG4gICAgZGVwYXJ0bWVudDogJydcbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICBjb3B5VGV4dCh0ZXh0KSB7XG4gICAgICB3eC5zZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgZGF0YTogdGV4dCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHd4LmdldENsaXBib2FyZERhdGEoe1xuICAgICAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHsgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgfTtcbiAgd2F0Y2ggPSB7XG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgdGhpcy5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgfVxuICBvblNob3coKSB7XG4gIH1cbn1cbiJdfQ==