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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" } }, _this.$events = {}, _this.components = {
            css: _css2.default, //样式表
            header: _header2.default
        }, _this.data = {
            isopacity: true,
            title: '存放申请',
            isback: true,
            gift_list: null,
            id: -1,
            user_id: -1,
            user: null
        }, _this.methods = {
            goToDepotMsg: function goToDepotMsg(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/depot?id=' + id + '&is_create=no'
                });
            },
            goToDepot: function goToDepot() {
                _wepy2.default.navigateTo({
                    url: '/pages/common/scheme/depot?id=' + this.id + '&is_create=yes'
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
            that.user_id = options.user_id;
            that.user = _wepy2.default.getStorageSync('user');
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getGifSaveList', {
                200: function _(result) {
                    that.gift_list = result.data.data;
                    that.$apply();
                }
            }, {
                order_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/depotlist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG90bGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImdpZnRfbGlzdCIsImlkIiwidXNlcl9pZCIsInVzZXIiLCJtZXRob2RzIiwiZ29Ub0RlcG90TXNnIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb1RvRGVwb3QiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidGhhdCIsImdldFN0b3JhZ2VTeW5jIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJvcmRlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyx1QkFBVyxJQUpSO0FBS0hDLGdCQUFJLENBQUMsQ0FMRjtBQU1IQyxxQkFBUyxDQUFDLENBTlA7QUFPSEMsa0JBQU07QUFQSCxTLFFBU1BDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1osb0JBQUlMLEtBQUtLLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCUCxFQUFqQztBQUNBUSwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyxtQ0FBbUNWLEVBQW5DLEdBQXdDO0FBRGpDLGlCQUFoQjtBQUdILGFBTks7QUFPTlcscUJBUE0sdUJBT007QUFDUkgsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssbUNBQW1DLEtBQUtWLEVBQXhDLEdBQTZDO0FBRHRDLGlCQUFoQjtBQUdIO0FBWEssUzs7Ozs7K0JBYUhZLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLZixFQUFMLEdBQVVZLFFBQVFaLEVBQWxCO0FBQ0FlLGlCQUFLZCxPQUFMLEdBQWVXLFFBQVFYLE9BQXZCO0FBQ0FjLGlCQUFLYixJQUFMLEdBQVlNLGVBQUtRLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSUQsT0FBTyxJQUFYO0FBQ0FFLDhCQUFHQyxHQUFILENBQU8sZ0JBQVAsRUFBeUI7QUFDckIscUJBQUssbUJBQVU7QUFDWEgseUJBQUtoQixTQUFMLEdBQWlCb0IsT0FBT3hCLElBQVAsQ0FBWUEsSUFBN0I7QUFDQW9CLHlCQUFLSyxNQUFMO0FBQ0g7QUFKb0IsYUFBekIsRUFLRztBQUNDQywwQkFBVU4sS0FBS2Y7QUFEaEIsYUFMSDtBQVFIOzs7O0VBL0M4QlEsZUFBS2MsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJkZXBvdGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrZjmlL7nlLPor7cnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgZ2lmdF9saXN0OiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgdXNlcl9pZDogLTEsXG4gICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub0RlcG90TXNnKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NjaGVtZS9kZXBvdD9pZD0nICsgaWQgKyAnJmlzX2NyZWF0ZT1ubydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvRGVwb3QoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvZGVwb3Q/aWQ9JyArIHRoaXMuaWQgKyAnJmlzX2NyZWF0ZT15ZXMnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhhdC51c2VyX2lkID0gb3B0aW9ucy51c2VyX2lkO1xuICAgICAgICAgICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0R2lmU2F2ZUxpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdpZnRfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19