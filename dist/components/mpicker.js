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
            checked_index: 0
        }, _this.components = {}, _this.methods = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waWNrZXIuanMiXSwibmFtZXMiOlsiTXBpY2tlciIsInByb3BzIiwicmFuZ19kYXRhIiwidHlwZSIsIkFycmF5IiwidHdvV2F5IiwicmFuZ19pbmRleCIsIk51bWJlciIsInJhbmdfa2V5IiwiU3RyaW5nIiwicmFuZ19kaXNwbGF5IiwiQm9vbGVhbiIsImRhdGEiLCJjaGVja2VkX2luZGV4IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJjYW5jZWwiLCJjaGVja2VkSXRlbSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY2hlY2tOZXciLCIkZW1pdCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDakJDLEssR0FBUTtBQUNKQyx1QkFBVztBQUNQQyxzQkFBS0MsS0FERTtBQUVQQyx3QkFBTztBQUZBLGFBRFA7QUFLSkMsd0JBQVk7QUFDUkgsc0JBQUtJLE1BREc7QUFFUkYsd0JBQU87QUFGQyxhQUxSO0FBU0pHLHNCQUFVO0FBQ05MLHNCQUFLTSxNQURDO0FBRU5KLHdCQUFPO0FBRkQsYUFUTjtBQWFKSywwQkFBYztBQUNWUCxzQkFBS1EsT0FESztBQUVWTix3QkFBTztBQUZHO0FBYlYsUyxRQWtCUk8sSSxHQUFPO0FBQ0hDLDJCQUFjO0FBRFgsUyxRQUdQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDTkMsa0JBRE0sb0JBQ0U7QUFDSixxQkFBS04sWUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLRyxhQUFMLEdBQW1CLEtBQUtQLFVBQXhCO0FBQ0gsYUFKSztBQUtOVyx1QkFMTSx1QkFLTUMsQ0FMTixFQUtTO0FBQ1gscUJBQUtMLGFBQUwsR0FBcUJLLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUE3QztBQUNILGFBUEs7QUFRTkMsb0JBUk0sc0JBUUk7QUFDTixxQkFBS2hCLFVBQUwsR0FBZ0IsS0FBS08sYUFBckI7QUFDQSxxQkFBS0gsWUFBTCxHQUFrQixLQUFsQjtBQUNBLHFCQUFLYSxLQUFMLENBQVcsVUFBWCxFQUFzQixLQUFLakIsVUFBM0I7QUFDSDtBQVpLLFMsUUFjVmtCLE0sR0FBUyxFLFFBQ1RDLEssR0FBUSxFLFFBQ1JDLFEsR0FBVyxFOzs7OztpQ0FDRjtBQUNMLGlCQUFLYixhQUFMLEdBQW1CLEtBQUtQLFVBQXhCO0FBQ0g7OztpQ0FDUSxDQUNSOzs7O0VBNUNnQ3FCLGVBQUtDLFM7O2tCQUFyQjVCLE8iLCJmaWxlIjoibXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXBpY2tlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICByYW5nX2RhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOkFycmF5LFxuICAgICAgICAgICAgICAgIHR3b1dheTp0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ19pbmRleDoge1xuICAgICAgICAgICAgICAgIHR5cGU6TnVtYmVyLFxuICAgICAgICAgICAgICAgIHR3b1dheTp0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ19rZXk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICB0d29XYXk6dHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhbmdfZGlzcGxheToge1xuICAgICAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICAgICAgICB0d29XYXk6dHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjaGVja2VkX2luZGV4OjBcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRzID0ge31cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNhbmNlbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZ19kaXNwbGF5PWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZF9pbmRleD10aGlzLnJhbmdfaW5kZXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tlZEl0ZW0oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZF9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTmV3KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nX2luZGV4PXRoaXMuY2hlY2tlZF9pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdfZGlzcGxheT1mYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2VNcCcsdGhpcy5yYW5nX2luZGV4KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge31cbiAgICAgICAgd2F0Y2ggPSB7fVxuICAgICAgICBjb21wdXRlZCA9IHt9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZF9pbmRleD10aGlzLnJhbmdfaW5kZXg7XG4gICAgICAgIH07XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgfTtcbiAgICB9XG4iXX0=