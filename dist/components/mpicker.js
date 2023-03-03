'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mpicker = function (_wepy$component) {
  _inherits(Mpicker, _wepy$component);

  function Mpicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mpicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mpicker.__proto__ || Object.getPrototypeOf(Mpicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      rang_data: {
        type: Array,
        twoWay: true
      },
      rang_index: {
        type: Number,
        twoWay: true
      },
      rang_key: {
        type: String,
        twoWay: true
      },
      rang_display: {
        type: Boolean,
        twoWay: true
      }
    }, _this.data = {
      checked_index: 0,
      search_value: ''
    }, _this.components = {}, _this.methods = {
      filterList: function filterList(e) {
        var _this2 = this;

        this.search_value = e.detail.value;
        this.rang_data.forEach(function (element) {
          if (!_this2.search_value) {
            element.is_hide = false;
            return;
          }
          console.log(element[_this2.rang_key]);
          if (element[_this2.rang_key].indexOf(_this2.search_value) >= 0) {
            element.is_hide = false;
          } else {
            element.is_hide = true;
          }
        });
      },
      cancel: function cancel() {
        this.rang_display = false;
        this.checked_index = this.rang_index;
      },
      checkedItem: function checkedItem(e) {
        this.checked_index = e.currentTarget.dataset.index;
      },
      checkNew: function checkNew() {
        this.rang_index = this.checked_index;
        this.rang_display = false;
        this.$emit('changeMp', this.rang_index);
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mpicker, [{
    key: 'onLoad',
    value: function onLoad() {
      this.checked_index = this.rang_index;
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Mpicker;
}(_wepy2.default.component);

exports.default = Mpicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waWNrZXIuanMiXSwibmFtZXMiOlsiTXBpY2tlciIsInByb3BzIiwicmFuZ19kYXRhIiwidHlwZSIsIkFycmF5IiwidHdvV2F5IiwicmFuZ19pbmRleCIsIk51bWJlciIsInJhbmdfa2V5IiwiU3RyaW5nIiwicmFuZ19kaXNwbGF5IiwiQm9vbGVhbiIsImRhdGEiLCJjaGVja2VkX2luZGV4Iiwic2VhcmNoX3ZhbHVlIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJmaWx0ZXJMaXN0IiwiZSIsImRldGFpbCIsInZhbHVlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc19oaWRlIiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJjYW5jZWwiLCJjaGVja2VkSXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjaGVja05ldyIsIiRlbWl0IiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNBQU1DLEtBREc7QUFFVEMsZ0JBQVE7QUFGQyxPQURMO0FBS05DLGtCQUFZO0FBQ1ZILGNBQU1JLE1BREk7QUFFVkYsZ0JBQVE7QUFGRSxPQUxOO0FBU05HLGdCQUFVO0FBQ1JMLGNBQU1NLE1BREU7QUFFUkosZ0JBQVE7QUFGQSxPQVRKO0FBYU5LLG9CQUFjO0FBQ1pQLGNBQU1RLE9BRE07QUFFWk4sZ0JBQVE7QUFGSTtBQWJSLEssUUFrQlJPLEksR0FBTztBQUNMQyxxQkFBZSxDQURWO0FBRUxDLG9CQUFjO0FBRlQsSyxRQUlQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUFBOztBQUNaLGFBQUtKLFlBQUwsR0FBb0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBN0I7QUFDQSxhQUFLbEIsU0FBTCxDQUFlbUIsT0FBZixDQUF1QixtQkFBVztBQUNoQyxjQUFJLENBQUMsT0FBS1AsWUFBVixFQUF3QjtBQUN0QlEsb0JBQVFDLE9BQVIsR0FBa0IsS0FBbEI7QUFDQTtBQUNEO0FBQ0RDLGtCQUFRQyxHQUFSLENBQVlILFFBQVEsT0FBS2QsUUFBYixDQUFaO0FBQ0EsY0FBSWMsUUFBUSxPQUFLZCxRQUFiLEVBQXVCa0IsT0FBdkIsQ0FBK0IsT0FBS1osWUFBcEMsS0FBcUQsQ0FBekQsRUFBNEQ7QUFDMURRLG9CQUFRQyxPQUFSLEdBQWtCLEtBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xELG9CQUFRQyxPQUFSLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRixTQVhEO0FBWUQsT0FmTztBQWdCUkksWUFoQlEsb0JBZ0JDO0FBQ1AsYUFBS2pCLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxhQUFLRyxhQUFMLEdBQXFCLEtBQUtQLFVBQTFCO0FBQ0QsT0FuQk87QUFvQlJzQixpQkFwQlEsdUJBb0JJVixDQXBCSixFQW9CTztBQUNiLGFBQUtMLGFBQUwsR0FBcUJLLEVBQUVXLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUE3QztBQUNELE9BdEJPO0FBdUJSQyxjQXZCUSxzQkF1Qkc7QUFDVCxhQUFLMUIsVUFBTCxHQUFrQixLQUFLTyxhQUF2QjtBQUNBLGFBQUtILFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxhQUFLdUIsS0FBTCxDQUFXLFVBQVgsRUFBdUIsS0FBSzNCLFVBQTVCO0FBQ0Q7QUEzQk8sSyxRQTZCVjRCLE0sR0FBUyxFLFFBQ1RDLEssR0FBUSxFLFFBQ1JDLFEsR0FBVyxFOzs7Ozs2QkFFRjtBQUNQLFdBQUt2QixhQUFMLEdBQXFCLEtBQUtQLFVBQTFCO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7O0VBN0RrQytCLGVBQUtDLFM7O2tCQUFyQnRDLE8iLCJmaWxlIjoibXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1waWNrZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHJhbmdfZGF0YToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHJhbmdfaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgcmFuZ19rZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgcmFuZ19kaXNwbGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgY2hlY2tlZF9pbmRleDogMCxcbiAgICBzZWFyY2hfdmFsdWU6ICcnXG4gIH1cbiAgY29tcG9uZW50cyA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gICAgZmlsdGVyTGlzdChlKSB7XG4gICAgICB0aGlzLnNlYXJjaF92YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5yYW5nX2RhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNlYXJjaF92YWx1ZSkge1xuICAgICAgICAgIGVsZW1lbnQuaXNfaGlkZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbdGhpcy5yYW5nX2tleV0pXG4gICAgICAgIGlmIChlbGVtZW50W3RoaXMucmFuZ19rZXldLmluZGV4T2YodGhpcy5zZWFyY2hfdmFsdWUpID49IDApIHtcbiAgICAgICAgICBlbGVtZW50LmlzX2hpZGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LmlzX2hpZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNhbmNlbCgpIHtcbiAgICAgIHRoaXMucmFuZ19kaXNwbGF5ID0gZmFsc2U7XG4gICAgICB0aGlzLmNoZWNrZWRfaW5kZXggPSB0aGlzLnJhbmdfaW5kZXg7XG4gICAgfSxcbiAgICBjaGVja2VkSXRlbShlKSB7XG4gICAgICB0aGlzLmNoZWNrZWRfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB9LFxuICAgIGNoZWNrTmV3KCkge1xuICAgICAgdGhpcy5yYW5nX2luZGV4ID0gdGhpcy5jaGVja2VkX2luZGV4O1xuICAgICAgdGhpcy5yYW5nX2Rpc3BsYXkgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZU1wJywgdGhpcy5yYW5nX2luZGV4KTtcbiAgICB9LFxuICB9XG4gIGV2ZW50cyA9IHt9XG4gIHdhdGNoID0ge31cbiAgY29tcHV0ZWQgPSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuY2hlY2tlZF9pbmRleCA9IHRoaXMucmFuZ19pbmRleDtcbiAgfTtcbiAgb25TaG93KCkge1xuICB9O1xufVxuIl19