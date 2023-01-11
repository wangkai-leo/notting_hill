'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _css = require('./../../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../../components/header.js');

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
            title: '业务审核',
            isback: true,
            customer_reject: null,
            pay_reject: null,

            tab_index: 0,
            id: -1
        }, _this.methods = {
            goToOderPay: function goToOderPay(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: '/pages/common/sale/orderpay?order_deposit_id=' + id });
            },
            goToSaleCustomer: function goToSaleCustomer(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/customer?id=' + id
                });
            },
            toggleTab: function toggleTab(e) {
                this.tab_index = e.currentTarget.dataset.index;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getRejectOrder', {
                200: function _(result) {
                    that.customer_reject = result.data.data;
                    that.$apply();
                }
            }, {});

            _request2.default.get('getRejectPay', {
                200: function _(result) {
                    that.pay_reject = result.data.data;
                    that.$apply();
                }
            }, {});
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/reject'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlamVjdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImN1c3RvbWVyX3JlamVjdCIsInBheV9yZWplY3QiLCJ0YWJfaW5kZXgiLCJpZCIsIm1ldGhvZHMiLCJnb1RvT2RlclBheSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29Ub1NhbGVDdXN0b21lciIsInRvZ2dsZVRhYiIsImluZGV4Iiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInRoYXQiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsNkJBQWlCLElBSmQ7QUFLSEMsd0JBQVcsSUFMUjs7QUFPSEMsdUJBQVcsQ0FQUjtBQVFIQyxnQkFBSSxDQUFDO0FBUkYsUyxRQVVQQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01DLENBRE4sRUFDUTtBQUNWLG9CQUFJSCxLQUFLRyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkwsRUFBakM7QUFDQU0sK0JBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyxrREFBZ0RSLEVBQXZELEVBQWhCO0FBQ0gsYUFKSztBQUtOUyw0QkFMTSw0QkFLV04sQ0FMWCxFQUthO0FBQ2Ysb0JBQUlILEtBQUtHLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTCxFQUFqQztBQUNJTSwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyxvQ0FBb0NSO0FBRDdCLGlCQUFoQjtBQUdQLGFBVks7QUFXTlUscUJBWE0scUJBV0lQLENBWEosRUFXTztBQUNULHFCQUFLSixTQUFMLEdBQWlCSSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk0sS0FBekM7QUFDSDtBQWJLLFM7Ozs7OytCQWVIQyxPLEVBQVM7QUFDWkEsc0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsZ0JBQUlHLE9BQU8sSUFBWDtBQUNBQSxpQkFBS2YsRUFBTCxHQUFVWSxRQUFRWixFQUFsQjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSWUsT0FBTyxJQUFYO0FBQ0FDLDhCQUFHQyxHQUFILENBQU8sZ0JBQVAsRUFBeUI7QUFDckIscUJBQUssbUJBQVU7QUFDWEYseUJBQUtsQixlQUFMLEdBQXVCcUIsT0FBT3pCLElBQVAsQ0FBWUEsSUFBbkM7QUFDQXNCLHlCQUFLSSxNQUFMO0FBQ0g7QUFKb0IsYUFBekIsRUFLRyxFQUxIOztBQU9BSCw4QkFBR0MsR0FBSCxDQUFPLGNBQVAsRUFBdUI7QUFDbkIscUJBQUssbUJBQVU7QUFDWEYseUJBQUtqQixVQUFMLEdBQWdCb0IsT0FBT3pCLElBQVAsQ0FBWUEsSUFBNUI7QUFDQXNCLHlCQUFLSSxNQUFMO0FBQ0g7QUFKa0IsYUFBdkIsRUFLRyxFQUxIO0FBTUg7Ozs7RUFyRDhCYixlQUFLYyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6InJlamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5Lia5Yqh5a6h5qC4JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGN1c3RvbWVyX3JlamVjdDogbnVsbCxcbiAgICAgICAgICAgIHBheV9yZWplY3Q6bnVsbCxcblxuICAgICAgICAgICAgdGFiX2luZGV4OiAwLFxuICAgICAgICAgICAgaWQ6IC0xXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1RvT2RlclBheShlKXtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJwYXk/b3JkZXJfZGVwb3NpdF9pZD0nK2lkIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9TYWxlQ3VzdG9tZXIoZSl7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWRcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFJlamVjdE9yZGVyJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXN0b21lcl9yZWplY3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KVxuXG4gICAgICAgICAgICBycS5nZXQoJ2dldFJlamVjdFBheScsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucGF5X3JlamVjdD1yZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICB9XG4gICAgfVxuIl19