'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ntmode = require('./ntmode.js');

var _ntmode2 = _interopRequireDefault(_ntmode);

var _ntlist = require('./ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

var _maintain = require('./maintain.js');

var _maintain2 = _interopRequireDefault(_maintain);

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
      id: {
        type: Number
      },
      customer: {
        type: Object,
        twoWay: true
      },
      ntvalue: {
        type: Object,
        twoWay: true
      }
    }, _this.$repeat = {}, _this.$props = { "ntmodeaa": { "label": "接单信息" }, "ntmodeab": { "label": "接单状态" }, "ntmodeac": { "label": "客资状态" }, "ntmodead": { "label": "客资最新信息" }, "ntlistba": { "label": "接单团队", "xmlns:v-bind": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "team_name" }, "ntlistbb": { "label": "客户意向", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "intention_name" }, "ntlistbc": { "label": "销售", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "sales_name" }, "ntlistbd": { "label": "分配时间", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "distribution_date" }, "ntlistbe": { "label": "转让人", "xmlns:wx": "", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "transferor" }, "ntlistbf": { "label": "已接单", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "accept_date" }, "ntlistbg": { "v-bind:ntvalue.sync": "ntvalue", "ntkey": "status_name" }, "ntlistbh": { "label": "新人称呼", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_name" }, "ntlistbi": { "label": "电话", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "user_mobile" }, "ntlistbj": { "label": "婚期", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_date" }, "ntlistbk": { "label": "结婚城市", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_city_name" }, "ntlistbl": { "label": "酒店桌数", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "hotel_tables_number" }, "ntlistbm": { "label": "预算", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "wedding_budget" }, "maintain": { "label": "跟进备注", "v-bind:ntvalue.sync": "ntvalue", "ntkey": "change_log" } }, _this.$events = {}, _this.components = {
      ntmodeaa: _ntmode2.default,
      ntmodeab: _ntmode2.default,
      ntmodeac: _ntmode2.default,
      ntmodead: _ntmode2.default,

      ntlistba: _ntlist2.default,
      ntlistbb: _ntlist2.default,
      ntlistbc: _ntlist2.default,
      ntlistbd: _ntlist2.default,
      ntlistbe: _ntlist2.default,
      ntlistbf: _ntlist2.default,
      ntlistbg: _ntlist2.default,
      ntlistbh: _ntlist2.default,
      ntlistbi: _ntlist2.default,
      ntlistbj: _ntlist2.default,
      ntlistbk: _ntlist2.default,
      ntlistbl: _ntlist2.default,
      ntlistbm: _ntlist2.default,
      ntlistbn: _ntlist2.default,

      maintain: _maintain2.default
    }, _this.data = {
      user: null,
      department: ''
    }, _this.methods = {
      goToEditUserMsg: function goToEditUserMsg() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editcurstomerinfo?id=' + this.id
        });
      },
      goToLogEdit: function goToLogEdit() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/editlog?id=' + this.id
        });
      },
      dropCustomer: function dropCustomer() {
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/chargeback?id=' + this.id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyZm9sbG93LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpZCIsInR5cGUiLCJOdW1iZXIiLCJjdXN0b21lciIsIk9iamVjdCIsInR3b1dheSIsIm50dmFsdWUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJudG1vZGVhYSIsIm50bW9kZSIsIm50bW9kZWFiIiwibnRtb2RlYWMiLCJudG1vZGVhZCIsIm50bGlzdGJhIiwibnRsaXN0IiwibnRsaXN0YmIiLCJudGxpc3RiYyIsIm50bGlzdGJkIiwibnRsaXN0YmUiLCJudGxpc3RiZiIsIm50bGlzdGJnIiwibnRsaXN0YmgiLCJudGxpc3RiaSIsIm50bGlzdGJqIiwibnRsaXN0YmsiLCJudGxpc3RibCIsIm50bGlzdGJtIiwibnRsaXN0Ym4iLCJtYWludGFpbiIsImRhdGEiLCJ1c2VyIiwiZGVwYXJ0bWVudCIsIm1ldGhvZHMiLCJnb1RvRWRpdFVzZXJNc2ciLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9Mb2dFZGl0IiwiZHJvcEN1c3RvbWVyIiwib3B0aW9ucyIsImdldFN0b3JhZ2VTeW5jIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxVQUFHO0FBQ0RDLGNBQU1DO0FBREwsT0FERztBQUlOQyxnQkFBUztBQUNQRixjQUFNRyxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FKSDtBQVFOQyxlQUFTO0FBQ1BMLGNBQU1HLE1BREM7QUFFUEMsZ0JBQVE7QUFGRDtBQVJILEssUUFhVEUsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLFNBQVEsTUFBVCxFQUFaLEVBQTZCLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBeEMsRUFBeUQsWUFBVyxFQUFDLFNBQVEsTUFBVCxF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QUFZSSxlQUFLTSxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxXQUFLVCxVQUFMLEdBQWdCRyxlQUFLTSxjQUFMLENBQW9CLGFBQXBCLENBQWhCO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7O0VBbEVnQ04sZUFBS08sUzs7a0JBQW5COUMsSyIsImZpbGUiOiJjdXN0b21lcmZvbGxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgbnRtb2RlIGZyb20gJy4vbnRtb2RlJztcbmltcG9ydCBudGxpc3QgZnJvbSAnLi9udGxpc3QnO1xuaW1wb3J0IG1haW50YWluIGZyb20gJy4vbWFpbnRhaW4nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGlkOntcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICAgIGN1c3RvbWVyOntcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbnR2YWx1ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudG1vZGVhYVwiOntcImxhYmVsXCI6XCLmjqXljZXkv6Hmga9cIn0sXCJudG1vZGVhYlwiOntcImxhYmVsXCI6XCLmjqXljZXnirbmgIFcIn0sXCJudG1vZGVhY1wiOntcImxhYmVsXCI6XCLlrqLotYTnirbmgIFcIn0sXCJudG1vZGVhZFwiOntcImxhYmVsXCI6XCLlrqLotYTmnIDmlrDkv6Hmga9cIn0sXCJudGxpc3RiYVwiOntcImxhYmVsXCI6XCLmjqXljZXlm6LpmJ9cIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwidGVhbV9uYW1lXCJ9LFwibnRsaXN0YmJcIjp7XCJsYWJlbFwiOlwi5a6i5oi35oSP5ZCRXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiaW50ZW50aW9uX25hbWVcIn0sXCJudGxpc3RiY1wiOntcImxhYmVsXCI6XCLplIDllK5cIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJzYWxlc19uYW1lXCJ9LFwibnRsaXN0YmRcIjp7XCJsYWJlbFwiOlwi5YiG6YWN5pe26Ze0XCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiZGlzdHJpYnV0aW9uX2RhdGVcIn0sXCJudGxpc3RiZVwiOntcImxhYmVsXCI6XCLovazorqnkurpcIixcInhtbG5zOnd4XCI6XCJcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJ0cmFuc2Zlcm9yXCJ9LFwibnRsaXN0YmZcIjp7XCJsYWJlbFwiOlwi5bey5o6l5Y2VXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwiYWNjZXB0X2RhdGVcIn0sXCJudGxpc3RiZ1wiOntcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJzdGF0dXNfbmFtZVwifSxcIm50bGlzdGJoXCI6e1wibGFiZWxcIjpcIuaWsOS6uuensOWRvFwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInVzZXJfbmFtZVwifSxcIm50bGlzdGJpXCI6e1wibGFiZWxcIjpcIueUteivnVwiLFwidi1iaW5kOm50dmFsdWUuc3luY1wiOlwibnR2YWx1ZVwiLFwibnRrZXlcIjpcInVzZXJfbW9iaWxlXCJ9LFwibnRsaXN0YmpcIjp7XCJsYWJlbFwiOlwi5ama5pyfXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwid2VkZGluZ19kYXRlXCJ9LFwibnRsaXN0YmtcIjp7XCJsYWJlbFwiOlwi57uT5ama5Z+O5biCXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwid2VkZGluZ19jaXR5X25hbWVcIn0sXCJudGxpc3RibFwiOntcImxhYmVsXCI6XCLphZLlupfmoYzmlbBcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJob3RlbF90YWJsZXNfbnVtYmVyXCJ9LFwibnRsaXN0Ym1cIjp7XCJsYWJlbFwiOlwi6aKE566XXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJudHZhbHVlXCIsXCJudGtleVwiOlwid2VkZGluZ19idWRnZXRcIn0sXCJtYWludGFpblwiOntcImxhYmVsXCI6XCLot5/ov5vlpIfms6hcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcIm50dmFsdWVcIixcIm50a2V5XCI6XCJjaGFuZ2VfbG9nXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBudG1vZGVhYTogbnRtb2RlLFxuICAgIG50bW9kZWFiOiBudG1vZGUsXG4gICAgbnRtb2RlYWM6IG50bW9kZSxcbiAgICBudG1vZGVhZDogbnRtb2RlLFxuXG4gICAgbnRsaXN0YmE6IG50bGlzdCxcbiAgICBudGxpc3RiYjogbnRsaXN0LFxuICAgIG50bGlzdGJjOiBudGxpc3QsXG4gICAgbnRsaXN0YmQ6IG50bGlzdCxcbiAgICBudGxpc3RiZTogbnRsaXN0LFxuICAgIG50bGlzdGJmOiBudGxpc3QsXG4gICAgbnRsaXN0Ymc6IG50bGlzdCxcbiAgICBudGxpc3RiaDogbnRsaXN0LFxuICAgIG50bGlzdGJpOiBudGxpc3QsXG4gICAgbnRsaXN0Ymo6IG50bGlzdCxcbiAgICBudGxpc3RiazogbnRsaXN0LFxuICAgIG50bGlzdGJsOiBudGxpc3QsXG4gICAgbnRsaXN0Ym06IG50bGlzdCxcbiAgICBudGxpc3RibjogbnRsaXN0LFxuXG4gICAgbWFpbnRhaW46bWFpbnRhaW5cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICB1c2VyOm51bGwsXG4gICAgZGVwYXJ0bWVudDonJ1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGdvVG9FZGl0VXNlck1zZygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9lZGl0Y3Vyc3RvbWVyaW5mbz9pZD0nICsgdGhpcy5pZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvTG9nRWRpdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9lZGl0bG9nP2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRyb3BDdXN0b21lcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9jaGFyZ2ViYWNrP2lkPScgKyB0aGlzLmlkXG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGlzLmRlcGFydG1lbnQ9d2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgfVxuICBvblNob3coKSB7XG4gIH1cbn1cbiJdfQ==