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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "ntlistn": { "label": "新人称呼", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "user_name", "placeholder": "请输入新人称呼" }, "ntlistp": { "label": "电话", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "user_mobile", "placeholder": "请输入电话" }, "ntlistt": { "label": "酒店桌数", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "hotel_tables_number", "placeholder": "请输入酒店桌数" }, "ntlistd": { "label": "婚期", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_date", "nttype": "picker", "pickertype": "date" }, "ntlistw": { "label": "预算", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntkey": "wedding_budget", "placeholder": "请输入预算" }, "ntlistc": { "label": "结婚城市", "v-bind:readonly.sync": "is_readonly", "v-bind:ntvalue.sync": "customer", "ntrangeprkey": "wedding_province_name", "ntrangecikey": "wedding_city_name", "ntrangearkey": "wedding_area_name", "nttype": "picker", "pickertype": "region" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      ntmode: _ntmode2.default,

      ntlist: _ntlist2.default,
      ntlistn: _ntlist2.default,
      ntlistp: _ntlist2.default,
      ntlistt: _ntlist2.default,
      ntlistd: _ntlist2.default,
      ntlistw: _ntlist2.default,
      ntlistc: _ntlist2.default
    }, _this.data = {
      isopacity: true,
      title: '编辑客资信息',
      customer: null,
      id: '',
      isback: true,
      is_readonly: false
    }, _this.methods = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRjdXJzdG9tZXJpbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwibnRtb2RlIiwibnRsaXN0IiwibnRsaXN0biIsIm50bGlzdHAiLCJudGxpc3R0IiwibnRsaXN0ZCIsIm50bGlzdHciLCJudGxpc3RjIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiY3VzdG9tZXIiLCJpZCIsImlzYmFjayIsImlzX3JlYWRvbmx5IiwibWV0aG9kcyIsInN1Ym1pdCIsInRoYXQiLCJ2YWxkYXRvciIsImlzUGhvbmVOdW1iZXIiLCJ1c2VyX21vYmlsZSIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJycSIsImdldCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXNlcl9pZCIsInVzZXJfbmFtZSIsIndlZGRpbmdfZGF0ZSIsImhvdGVsX3RhYmxlc19udW1iZXIiLCJ3ZWRkaW5nX2J1ZGdldCIsIndlZGRpbmdfcHJvdmluY2VfbmFtZSIsIndlZGRpbmdfY2l0eV9uYW1lIiwid2VkZGluZ19hcmVhX25hbWUiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwicmVzdWx0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRUFBNEgsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix3QkFBdUIsYUFBdkMsRUFBcUQs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RUFBbEI7QUFDQWEsd0JBQUdDLEdBQUgsQ0FBTyxVQUFQLEVBQW1CO0FBQ2pCLGFBQUssbUJBQVU7QUFDYlQsZUFBS04sUUFBTCxHQUFnQjZCLE9BQU9oQyxJQUFQLENBQVlBLElBQTVCO0FBQ0FTLGVBQUt3QixNQUFMO0FBQ0Q7QUFKZ0IsT0FBbkIsRUFLRztBQUNEWixpQkFBU1EsUUFBUXpCO0FBRGhCLE9BTEg7QUFRRDs7OzZCQUNRLENBQUc7Ozs7RUFwRXFCUyxlQUFLcUIsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJlZGl0Y3Vyc3RvbWVyaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IG50bW9kZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udG1vZGUnO1xuaW1wb3J0IG50bGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGxpc3QnO1xuaW1wb3J0IHZhbGRhdG9yIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn0sXCJudGxpc3RuXCI6e1wibGFiZWxcIjpcIuaWsOS6uuensOWRvFwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpeaWsOS6uuensOWRvFwifSxcIm50bGlzdHBcIjp7XCJsYWJlbFwiOlwi55S16K+dXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwiaXNfcmVhZG9ubHlcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImN1c3RvbWVyXCIsXCJudGtleVwiOlwidXNlcl9tb2JpbGVcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXnlLXor51cIn0sXCJudGxpc3R0XCI6e1wibGFiZWxcIjpcIumFkuW6l+ahjOaVsFwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcImhvdGVsX3RhYmxlc19udW1iZXJcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXphZLlupfmoYzmlbBcIn0sXCJudGxpc3RkXCI6e1wibGFiZWxcIjpcIuWpmuacn1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcIndlZGRpbmdfZGF0ZVwiLFwibnR0eXBlXCI6XCJwaWNrZXJcIixcInBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGxpc3R3XCI6e1wibGFiZWxcIjpcIumihOeul1wiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcImlzX3JlYWRvbmx5XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJjdXN0b21lclwiLFwibnRrZXlcIjpcIndlZGRpbmdfYnVkZ2V0XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl6aKE566XXCJ9LFwibnRsaXN0Y1wiOntcImxhYmVsXCI6XCLnu5PlqZrln47luIJcIixcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJpc19yZWFkb25seVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwiY3VzdG9tZXJcIixcIm50cmFuZ2VwcmtleVwiOlwid2VkZGluZ19wcm92aW5jZV9uYW1lXCIsXCJudHJhbmdlY2lrZXlcIjpcIndlZGRpbmdfY2l0eV9uYW1lXCIsXCJudHJhbmdlYXJrZXlcIjpcIndlZGRpbmdfYXJlYV9uYW1lXCIsXCJudHR5cGVcIjpcInBpY2tlclwiLFwicGlja2VydHlwZVwiOlwicmVnaW9uXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBudG1vZGU6IG50bW9kZSxcblxuICAgIG50bGlzdDogbnRsaXN0LFxuICAgIG50bGlzdG46IG50bGlzdCxcbiAgICBudGxpc3RwOiBudGxpc3QsXG4gICAgbnRsaXN0dDogbnRsaXN0LFxuICAgIG50bGlzdGQ6IG50bGlzdCxcbiAgICBudGxpc3R3OiBudGxpc3QsXG4gICAgbnRsaXN0YzogbnRsaXN0XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn57yW6L6R5a6i6LWE5L+h5oGvJyxcbiAgICBjdXN0b21lcjogbnVsbCxcbiAgICBpZDogJycsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzX3JlYWRvbmx5OmZhbHNlXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VibWl0KCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYoIXZhbGRhdG9yLmlzUGhvbmVOdW1iZXIodGhhdC5jdXN0b21lci51c2VyX21vYmlsZSkpe1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxuICAgICAgICAgIGljb246J25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBycS5nZXQoJ2VkaXRVc2VySW5mbycsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICB1c2VyX25hbWU6IHRoYXQuY3VzdG9tZXIudXNlcl9uYW1lLFxuICAgICAgICB1c2VyX21vYmlsZTogdGhhdC5jdXN0b21lci51c2VyX21vYmlsZSxcbiAgICAgICAgd2VkZGluZ19kYXRlOiB0aGF0LmN1c3RvbWVyLndlZGRpbmdfZGF0ZSxcbiAgICAgICAgaG90ZWxfdGFibGVzX251bWJlcjogdGhhdC5jdXN0b21lci5ob3RlbF90YWJsZXNfbnVtYmVyLFxuICAgICAgICB3ZWRkaW5nX2J1ZGdldDogdGhhdC5jdXN0b21lci53ZWRkaW5nX2J1ZGdldCxcbiAgICAgICAgd2VkZGluZ19wcm92aW5jZV9uYW1lOiB0aGF0LmN1c3RvbWVyLndlZGRpbmdfcHJvdmluY2VfbmFtZSxcbiAgICAgICAgd2VkZGluZ19jaXR5X25hbWU6IHRoYXQuY3VzdG9tZXIud2VkZGluZ19jaXR5X25hbWUsXG4gICAgICAgIHdlZGRpbmdfYXJlYV9uYW1lOiB0aGF0LmN1c3RvbWVyLndlZGRpbmdfYXJlYV9uYW1lXG4gICAgICB9KVxuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgcnEuZ2V0KCdmb2xsb3dVcCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5jdXN0b21lciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogb3B0aW9ucy5pZFxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkgeyB9XG59XG4iXX0=