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

var _validate = require('./../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

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
            title: '请款申请',
            isback: true,
            pay: {
                request_money: '',
                request_reason: '',
                request_remark: ''
            },
            is_submited: false
        }, _this.methods = {
            bindInputPayrequest_money: function bindInputPayrequest_money(e) {
                this.pay.request_money = e.detail.value;
            },
            bindInputrequest_reason: function bindInputrequest_reason(e) {
                this.pay.request_reason = e.detail.value;
            },
            bindInputMark: function bindInputMark(e) {
                this.pay.request_remark = e.detail.value;
            },
            submit: function submit() {
                var that = this;
                if (this.is_submited) {
                    return false;
                }
                this.is_submited = true;
                var api = '';
                var data = {
                    request_money: that.pay.request_money,
                    request_reason: that.pay.request_reason,
                    request_remark: that.pay.request_remark
                };
                if (this.is_edit) {
                    api = "editRequestMoney";
                    data['request_id'] = that.pay.id;
                } else {
                    api = "submitRequestMoney";
                    data['order_id'] = that.id;
                }
                _request2.default.get(api, {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.order_id;
            var is_edit = that.is_edit = options.is_edit;
            if (is_edit) {
                _request2.default.get('getRequestMoneyInfo', {
                    200: function _(result) {
                        that.pay = result.data.data;
                        that.$apply();
                    }
                }, {
                    request_id: options.request_id,
                    order_id: that.id
                });
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/scheme/requestpay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RwYXkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJwYXkiLCJyZXF1ZXN0X21vbmV5IiwicmVxdWVzdF9yZWFzb24iLCJyZXF1ZXN0X3JlbWFyayIsImlzX3N1Ym1pdGVkIiwibWV0aG9kcyIsImJpbmRJbnB1dFBheXJlcXVlc3RfbW9uZXkiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRyZXF1ZXN0X3JlYXNvbiIsImJpbmRJbnB1dE1hcmsiLCJzdWJtaXQiLCJ0aGF0IiwiYXBpIiwiaXNfZWRpdCIsImlkIiwicnEiLCJnZXQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCIkYXBwbHkiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwib3JkZXJfaWQiLCJyZXN1bHQiLCJyZXF1ZXN0X2lkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyxpQkFBSztBQUNEQywrQkFBZSxFQURkO0FBRURDLGdDQUFnQixFQUZmO0FBR0RDLGdDQUFnQjtBQUhmLGFBSkY7QUFTSEMseUJBQWE7QUFUVixTLFFBV1BDLE8sR0FBVTtBQUNOQyxxQ0FETSxxQ0FDb0JDLENBRHBCLEVBQ3VCO0FBQ3pCLHFCQUFLUCxHQUFMLENBQVNDLGFBQVQsR0FBeUJNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEM7QUFDSCxhQUhLO0FBSU5DLG1DQUpNLG1DQUlrQkgsQ0FKbEIsRUFJcUI7QUFDdkIscUJBQUtQLEdBQUwsQ0FBU0UsY0FBVCxHQUEwQkssRUFBRUMsTUFBRixDQUFTQyxLQUFuQztBQUNILGFBTks7QUFPTkUseUJBUE0seUJBT1FKLENBUFIsRUFPVztBQUNiLHFCQUFLUCxHQUFMLENBQVNHLGNBQVQsR0FBMEJJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkM7QUFDSCxhQVRLO0FBVU5HLGtCQVZNLG9CQVVHO0FBQ0wsb0JBQUlDLE9BQU8sSUFBWDtBQUNBLG9CQUFJLEtBQUtULFdBQVQsRUFBc0I7QUFDbEIsMkJBQU8sS0FBUDtBQUNIO0FBQ0QscUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxvQkFBSVUsTUFBTSxFQUFWO0FBQ0Esb0JBQUlsQixPQUFPO0FBQ1BLLG1DQUFlWSxLQUFLYixHQUFMLENBQVNDLGFBRGpCO0FBRVBDLG9DQUFnQlcsS0FBS2IsR0FBTCxDQUFTRSxjQUZsQjtBQUdQQyxvQ0FBZ0JVLEtBQUtiLEdBQUwsQ0FBU0c7QUFIbEIsaUJBQVg7QUFLQSxvQkFBSSxLQUFLWSxPQUFULEVBQWtCO0FBQ2RELDBCQUFNLGtCQUFOO0FBQ0FsQix5QkFBSyxZQUFMLElBQXFCaUIsS0FBS2IsR0FBTCxDQUFTZ0IsRUFBOUI7QUFDSCxpQkFIRCxNQUdPO0FBQ0hGLDBCQUFNLG9CQUFOO0FBQ0FsQix5QkFBSyxVQUFMLElBQW1CaUIsS0FBS0csRUFBeEI7QUFDSDtBQUNEQyxrQ0FBR0MsR0FBSCxDQUFPSixHQUFQLEVBQVk7QUFDUix5QkFBSyxtQkFBVTtBQUNYSyx1Q0FBS0MsWUFBTCxDQUFrQjtBQUNkQyxtQ0FBTyxDQURPLENBQ0w7QUFESyx5QkFBbEI7QUFHQVIsNkJBQUtTLE1BQUw7QUFDSDtBQU5PLGlCQUFaLEVBT0cxQixJQVBIO0FBUUg7QUFyQ0ssUzs7Ozs7K0JBdUNIMkIsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJVixPQUFPLElBQVg7QUFDQUEsaUJBQUtHLEVBQUwsR0FBVU8sUUFBUUcsUUFBbEI7QUFDQSxnQkFBSVgsVUFBVUYsS0FBS0UsT0FBTCxHQUFlUSxRQUFRUixPQUFyQztBQUNBLGdCQUFJQSxPQUFKLEVBQWE7QUFDVEUsa0NBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQix5QkFBSyxtQkFBVTtBQUNYTCw2QkFBS2IsR0FBTCxHQUFXMkIsT0FBTy9CLElBQVAsQ0FBWUEsSUFBdkI7QUFDQWlCLDZCQUFLUyxNQUFMO0FBQ0g7QUFKeUIsaUJBQTlCLEVBS0c7QUFDQ00sZ0NBQVlMLFFBQVFLLFVBRHJCO0FBRUNGLDhCQUFVYixLQUFLRztBQUZoQixpQkFMSDtBQVNIO0FBQ0o7OztpQ0FDUSxDQUFFOzs7O0VBM0VvQkcsZUFBS1UsSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJyZXF1ZXN0cGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfor7fmrL7nlLPor7cnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF5OiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdF9tb25leTogJycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdF9yZWFzb246ICcnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RfcmVtYXJrOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzX3N1Ym1pdGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZElucHV0UGF5cmVxdWVzdF9tb25leShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXkucmVxdWVzdF9tb25leSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dHJlcXVlc3RfcmVhc29uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBheS5yZXF1ZXN0X3JlYXNvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5LnJlcXVlc3RfcmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc19zdWJtaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNfc3VibWl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBhcGkgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9tb25leTogdGhhdC5wYXkucmVxdWVzdF9tb25leSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9yZWFzb246IHRoYXQucGF5LnJlcXVlc3RfcmVhc29uLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0X3JlbWFyazogdGhhdC5wYXkucmVxdWVzdF9yZW1hcmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfZWRpdCkge1xuICAgICAgICAgICAgICAgICAgICBhcGkgPSBcImVkaXRSZXF1ZXN0TW9uZXlcIjtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsncmVxdWVzdF9pZCddID0gdGhhdC5wYXkuaWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpID0gXCJzdWJtaXRSZXF1ZXN0TW9uZXlcIjtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnb3JkZXJfaWQnXSA9IHRoYXQuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJxLmdldChhcGksIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLm9yZGVyX2lkO1xuICAgICAgICAgICAgbGV0IGlzX2VkaXQgPSB0aGF0LmlzX2VkaXQgPSBvcHRpb25zLmlzX2VkaXQ7XG4gICAgICAgICAgICBpZiAoaXNfZWRpdCkge1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0UmVxdWVzdE1vbmV5SW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXkgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9pZDogb3B0aW9ucy5yZXF1ZXN0X2lkLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=