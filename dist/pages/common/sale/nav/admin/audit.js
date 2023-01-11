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
            customer_audit: null,
            customer_trans: null,

            tab_index: 0,
            id: -1
        }, _this.methods = {
            goToChargeback: function goToChargeback(e) {
                var transform_id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: 'transdetail?id=' + transform_id });
            },
            goToAuditDetail: function goToAuditDetail(e) {
                var user_id = e.currentTarget.dataset.id;
                var contract_id = e.currentTarget.dataset.contractid;
                _wepy2.default.navigateTo({ url: 'auditdetail?id=' + user_id + '&contract_id=' + contract_id });
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
            _request2.default.get('orderReviewList', {
                200: function _(result) {
                    that.customer_audit = result.data.data;
                    that.$apply();
                }
            }, {});

            _request2.default.get('getTransferReview', {
                200: function _(result) {
                    that.customer_trans = result.data.data;
                    that.$apply();
                }
            }, {});
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/audit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiY3VzdG9tZXJfYXVkaXQiLCJjdXN0b21lcl90cmFucyIsInRhYl9pbmRleCIsImlkIiwibWV0aG9kcyIsImdvVG9DaGFyZ2ViYWNrIiwiZSIsInRyYW5zZm9ybV9pZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb1RvQXVkaXREZXRhaWwiLCJ1c2VyX2lkIiwiY29udHJhY3RfaWQiLCJjb250cmFjdGlkIiwidG9nZ2xlVGFiIiwiaW5kZXgiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidGhhdCIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyw0QkFBZ0IsSUFKYjtBQUtIQyw0QkFBZSxJQUxaOztBQU9IQyx1QkFBVyxDQVBSO0FBUUhDLGdCQUFJLENBQUM7QUFSRixTLFFBVVBDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsQ0FEVCxFQUNXO0FBQ2Isb0JBQUlDLGVBQWVELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUEzQztBQUNBTywrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLG9CQUFrQkwsWUFBekIsRUFBaEI7QUFDSCxhQUpLO0FBS05NLDJCQUxNLDJCQUtVUCxDQUxWLEVBS1k7QUFDZCxvQkFBSVEsVUFBVVIsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JOLEVBQXRDO0FBQ0Esb0JBQUlZLGNBQWNULEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTyxVQUExQztBQUNBTiwrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLG9CQUFrQkUsT0FBbEIsR0FBMEIsZUFBMUIsR0FBMENDLFdBQWpELEVBQWhCO0FBQ0gsYUFUSztBQVVORSxxQkFWTSxxQkFVSVgsQ0FWSixFQVVPO0FBQ1QscUJBQUtKLFNBQUwsR0FBaUJJLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCUyxLQUF6QztBQUNIO0FBWkssUzs7Ozs7K0JBY0hDLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLbkIsRUFBTCxHQUFVZ0IsUUFBUWhCLEVBQWxCO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJbUIsT0FBTyxJQUFYO0FBQ0FDLDhCQUFHQyxHQUFILENBQU8saUJBQVAsRUFBMEI7QUFDdEIscUJBQUssbUJBQVU7QUFDWEYseUJBQUt0QixjQUFMLEdBQXNCeUIsT0FBTzdCLElBQVAsQ0FBWUEsSUFBbEM7QUFDQTBCLHlCQUFLSSxNQUFMO0FBQ0g7QUFKcUIsYUFBMUIsRUFLRyxFQUxIOztBQU9BSCw4QkFBR0MsR0FBSCxDQUFPLG1CQUFQLEVBQTRCO0FBQ3hCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLckIsY0FBTCxHQUFvQndCLE9BQU83QixJQUFQLENBQVlBLElBQWhDO0FBQ0EwQix5QkFBS0ksTUFBTDtBQUNIO0FBSnVCLGFBQTVCLEVBS0csRUFMSDtBQU1IOzs7O0VBcEQ4QmhCLGVBQUtpQixJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImF1ZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfkuJrliqHlrqHmoLgnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgY3VzdG9tZXJfYXVkaXQ6IG51bGwsXG4gICAgICAgICAgICBjdXN0b21lcl90cmFuczpudWxsLFxuXG4gICAgICAgICAgICB0YWJfaW5kZXg6IDAsXG4gICAgICAgICAgICBpZDogLTFcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGdvVG9DaGFyZ2ViYWNrKGUpe1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1faWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICd0cmFuc2RldGFpbD9pZD0nK3RyYW5zZm9ybV9pZCB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvQXVkaXREZXRhaWwoZSl7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJfaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgY29udHJhY3RfaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb250cmFjdGlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ2F1ZGl0ZGV0YWlsP2lkPScrdXNlcl9pZCsnJmNvbnRyYWN0X2lkPScrY29udHJhY3RfaWR9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdvcmRlclJldmlld0xpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1c3RvbWVyX2F1ZGl0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7fSlcblxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRUcmFuc2ZlclJldmlldycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VzdG9tZXJfdHJhbnM9cmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==