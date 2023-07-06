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

var multiSelect = function (_wepy$component) {
  _inherits(multiSelect, _wepy$component);

  function multiSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, multiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = multiSelect.__proto__ || Object.getPrototypeOf(multiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      ntlabel: {
        type: String,
        default: ''
      },
      range_data: {
        type: Array,
        twoWay: true
      },
      range_key: {
        type: String,
        twoWay: true
      },
      range_value_key: {
        type: String,
        twoWay: true
      }
    }, _this.data = {
      display_panel: false,
      is_check_all: false
    }, _this.components = {}, _this.methods = {
      confirmCheck: function confirmCheck() {
        var ids = [];
        for (var i = 0; i < this.range_data.length; ++i) {
          if (this.range_data[i].checked) {
            ids.push(this.range_data[i][this.range_value_key]);
          }
        }
        this.$emit('confirm', ids.join(','));
        this.display_panel = false;
      },
      toggleCheck: function toggleCheck(e) {
        var index = e.currentTarget.dataset.index;
        if (index == 0) {
          console.log(index);
          for (var i = 0; i < this.range_data.length; ++i) {
            this.range_data[i].checked = false;
          }
          this.range_data[0].checked = true;
          return;
        }
        this.range_data[0].checked = false;
        if (this.range_data[index].checked) {
          this.range_data[index].checked = false;
        } else {
          this.range_data[index].checked = true;
        }
      },
      cancelCheck: function cancelCheck() {
        this.display_panel = false;
      },
      toggleAll: function toggleAll() {
        if (this.range_data[0].checked) {
          this.range_data[0].checked = false;
        } else {
          this.range_data[0].checked = true;
        }
      },
      displayPanel: function displayPanel() {
        this.display_panel = true;
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(multiSelect, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return multiSelect;
}(_wepy2.default.component);

exports.default = multiSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpU2VsZWN0LmpzIl0sIm5hbWVzIjpbIm11bHRpU2VsZWN0IiwicHJvcHMiLCJudGxhYmVsIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJyYW5nZV9kYXRhIiwiQXJyYXkiLCJ0d29XYXkiLCJyYW5nZV9rZXkiLCJyYW5nZV92YWx1ZV9rZXkiLCJkYXRhIiwiZGlzcGxheV9wYW5lbCIsImlzX2NoZWNrX2FsbCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiY29uZmlybUNoZWNrIiwiaWRzIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJwdXNoIiwiJGVtaXQiLCJqb2luIiwidG9nZ2xlQ2hlY2siLCJlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWxDaGVjayIsInRvZ2dsZUFsbCIsImRpc3BsYXlQYW5lbCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFGRixPQURIO0FBS05DLGtCQUFZO0FBQ1ZILGNBQU1JLEtBREk7QUFFVkMsZ0JBQVE7QUFGRSxPQUxOO0FBU05DLGlCQUFXO0FBQ1ROLGNBQU1DLE1BREc7QUFFVEksZ0JBQVE7QUFGQyxPQVRMO0FBYU5FLHVCQUFpQjtBQUNmUCxjQUFNQyxNQURTO0FBRWZJLGdCQUFRO0FBRk87QUFiWCxLLFFBa0JSRyxJLEdBQU87QUFDTEMscUJBQWUsS0FEVjtBQUVMQyxvQkFBYztBQUZULEssUUFJUEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNPO0FBQ2IsWUFBSUMsTUFBSSxFQUFSO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1osVUFBTCxDQUFnQmEsTUFBcEMsRUFBNEMsRUFBRUQsQ0FBOUMsRUFBaUQ7QUFDL0MsY0FBRyxLQUFLWixVQUFMLENBQWdCWSxDQUFoQixFQUFtQkUsT0FBdEIsRUFBOEI7QUFDNUJILGdCQUFJSSxJQUFKLENBQVMsS0FBS2YsVUFBTCxDQUFnQlksQ0FBaEIsRUFBbUIsS0FBS1IsZUFBeEIsQ0FBVDtBQUNEO0FBQ0Y7QUFDRCxhQUFLWSxLQUFMLENBQVcsU0FBWCxFQUFxQkwsSUFBSU0sSUFBSixDQUFTLEdBQVQsQ0FBckI7QUFDQSxhQUFLWCxhQUFMLEdBQW1CLEtBQW5CO0FBQ0QsT0FWTztBQVdSWSxpQkFYUSx1QkFXSUMsQ0FYSixFQVdPO0FBQ2IsWUFBSUMsUUFBUUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEtBQXBDO0FBQ0EsWUFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ2RHLGtCQUFRQyxHQUFSLENBQVlKLEtBQVo7QUFDQSxlQUFLLElBQUlSLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWixVQUFMLENBQWdCYSxNQUFwQyxFQUE0QyxFQUFFRCxDQUE5QyxFQUFpRDtBQUMvQyxpQkFBS1osVUFBTCxDQUFnQlksQ0FBaEIsRUFBbUJFLE9BQW5CLEdBQTZCLEtBQTdCO0FBQ0Q7QUFDRCxlQUFLZCxVQUFMLENBQWdCLENBQWhCLEVBQW1CYyxPQUFuQixHQUE2QixJQUE3QjtBQUNBO0FBQ0Q7QUFDRCxhQUFLZCxVQUFMLENBQWdCLENBQWhCLEVBQW1CYyxPQUFuQixHQUE2QixLQUE3QjtBQUNBLFlBQUksS0FBS2QsVUFBTCxDQUFnQm9CLEtBQWhCLEVBQXVCTixPQUEzQixFQUFvQztBQUNsQyxlQUFLZCxVQUFMLENBQWdCb0IsS0FBaEIsRUFBdUJOLE9BQXZCLEdBQWlDLEtBQWpDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS2QsVUFBTCxDQUFnQm9CLEtBQWhCLEVBQXVCTixPQUF2QixHQUFpQyxJQUFqQztBQUNEO0FBQ0YsT0EzQk87QUE0QlJXLGlCQTVCUSx5QkE0Qk07QUFDWixhQUFLbkIsYUFBTCxHQUFxQixLQUFyQjtBQUNELE9BOUJPO0FBK0JSb0IsZUEvQlEsdUJBK0JJO0FBQ1YsWUFBSSxLQUFLMUIsVUFBTCxDQUFnQixDQUFoQixFQUFtQmMsT0FBdkIsRUFBZ0M7QUFDOUIsZUFBS2QsVUFBTCxDQUFnQixDQUFoQixFQUFtQmMsT0FBbkIsR0FBNkIsS0FBN0I7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLZCxVQUFMLENBQWdCLENBQWhCLEVBQW1CYyxPQUFuQixHQUE2QixJQUE3QjtBQUNEO0FBQ0YsT0FyQ087QUFzQ1JhLGtCQXRDUSwwQkFzQ087QUFDYixhQUFLckIsYUFBTCxHQUFxQixJQUFyQjtBQUNEO0FBeENPLEssUUEwQ1ZzQixNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRSxRQUNSQyxRLEdBQVcsRTs7Ozs7NkJBRUYsQ0FDUjs7OzZCQUNRLENBQ1I7Ozs7RUF6RXNDQyxlQUFLQyxTOztrQkFBekJ0QyxXIiwiZmlsZSI6Im11bHRpU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXVsdGlTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIG50bGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICByYW5nZV9kYXRhOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgcmFuZ2Vfa2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHJhbmdlX3ZhbHVlX2tleToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgZGlzcGxheV9wYW5lbDogZmFsc2UsXG4gICAgaXNfY2hlY2tfYWxsOiBmYWxzZVxuICB9XG4gIGNvbXBvbmVudHMgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGNvbmZpcm1DaGVjaygpIHtcbiAgICAgIGxldCBpZHM9W107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZih0aGlzLnJhbmdlX2RhdGFbaV0uY2hlY2tlZCl7XG4gICAgICAgICAgaWRzLnB1c2godGhpcy5yYW5nZV9kYXRhW2ldW3RoaXMucmFuZ2VfdmFsdWVfa2V5XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnY29uZmlybScsaWRzLmpvaW4oJywnKSk7XG4gICAgICB0aGlzLmRpc3BsYXlfcGFuZWw9ZmFsc2U7XG4gICAgfSxcbiAgICB0b2dnbGVDaGVjayhlKSB7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmFuZ2VfZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHRoaXMucmFuZ2VfZGF0YVtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYW5nZV9kYXRhWzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMucmFuZ2VfZGF0YVswXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5yYW5nZV9kYXRhW2luZGV4XS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMucmFuZ2VfZGF0YVtpbmRleF0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJhbmdlX2RhdGFbaW5kZXhdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsQ2hlY2soKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfcGFuZWwgPSBmYWxzZVxuICAgIH0sXG4gICAgdG9nZ2xlQWxsKCkge1xuICAgICAgaWYgKHRoaXMucmFuZ2VfZGF0YVswXS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMucmFuZ2VfZGF0YVswXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJhbmdlX2RhdGFbMF0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwbGF5UGFuZWwoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfcGFuZWwgPSB0cnVlXG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHt9XG4gIHdhdGNoID0ge31cbiAgY29tcHV0ZWQgPSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9O1xuICBvblNob3coKSB7XG4gIH07XG59XG4iXX0=