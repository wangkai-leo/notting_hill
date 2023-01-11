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
            submit: function submit(e) {
                var pass = e.currentTarget.dataset.pass;
                var that = this;
                if (this.is_submited) {
                    return false;
                }
                this.is_submited = true;
                _request2.default.get('reviewRequestMoney', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    order_id: that.id,
                    request_id: that.pay.id,
                    pass: pass
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.order_id;
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
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/scheme/reqaudit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcWF1ZGl0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwicGF5IiwicmVxdWVzdF9tb25leSIsInJlcXVlc3RfcmVhc29uIiwicmVxdWVzdF9yZW1hcmsiLCJpc19zdWJtaXRlZCIsIm1ldGhvZHMiLCJiaW5kSW5wdXRQYXlyZXF1ZXN0X21vbmV5IiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0cmVxdWVzdF9yZWFzb24iLCJiaW5kSW5wdXRNYXJrIiwic3VibWl0IiwicGFzcyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiJGFwcGx5Iiwib3JkZXJfaWQiLCJpZCIsInJlcXVlc3RfaWQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwicmVzdWx0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyxpQkFBSztBQUNEQywrQkFBZSxFQURkO0FBRURDLGdDQUFnQixFQUZmO0FBR0RDLGdDQUFnQjtBQUhmLGFBSkY7QUFTSEMseUJBQWE7QUFUVixTLFFBV1BDLE8sR0FBVTtBQUNOQyxxQ0FETSxxQ0FDb0JDLENBRHBCLEVBQ3VCO0FBQ3pCLHFCQUFLUCxHQUFMLENBQVNDLGFBQVQsR0FBeUJNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEM7QUFDSCxhQUhLO0FBSU5DLG1DQUpNLG1DQUlrQkgsQ0FKbEIsRUFJcUI7QUFDdkIscUJBQUtQLEdBQUwsQ0FBU0UsY0FBVCxHQUEwQkssRUFBRUMsTUFBRixDQUFTQyxLQUFuQztBQUNILGFBTks7QUFPTkUseUJBUE0seUJBT1FKLENBUFIsRUFPVztBQUNiLHFCQUFLUCxHQUFMLENBQVNHLGNBQVQsR0FBMEJJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkM7QUFDSCxhQVRLO0FBVU5HLGtCQVZNLGtCQVVDTCxDQVZELEVBVUk7QUFDTixvQkFBSU0sT0FBS04sRUFBRU8sYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLElBQWpDO0FBQ0Esb0JBQUlHLE9BQU8sSUFBWDtBQUNBLG9CQUFJLEtBQUtaLFdBQVQsRUFBc0I7QUFDbEIsMkJBQU8sS0FBUDtBQUNIO0FBQ0QscUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQWEsa0NBQUdDLEdBQUgsQ0FBTyxvQkFBUCxFQUE2QjtBQUN6Qix5QkFBSyxtQkFBVTtBQUNYQyx1Q0FBS0MsWUFBTCxDQUFrQjtBQUNkQyxtQ0FBTyxDQURPLENBQ0w7QUFESyx5QkFBbEI7QUFHQUwsNkJBQUtNLE1BQUw7QUFDSDtBQU53QixpQkFBN0IsRUFPRztBQUNDQyw4QkFBVVAsS0FBS1EsRUFEaEI7QUFFQ0MsZ0NBQVdULEtBQUtoQixHQUFMLENBQVN3QixFQUZyQjtBQUdDWCwwQkFBS0E7QUFITixpQkFQSDtBQVlIO0FBN0JLLFM7Ozs7OytCQStCSGEsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJVixPQUFPLElBQVg7QUFDQUEsaUJBQUtRLEVBQUwsR0FBVUUsUUFBUUgsUUFBbEI7QUFDQU4sOEJBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS2hCLEdBQUwsR0FBVzZCLE9BQU9qQyxJQUFQLENBQVlBLElBQXZCO0FBQ0FvQix5QkFBS00sTUFBTDtBQUNIO0FBSnlCLGFBQTlCLEVBS0c7QUFDQ0csNEJBQVlDLFFBQVFELFVBRHJCO0FBRUNGLDBCQUFVUCxLQUFLUTtBQUZoQixhQUxIO0FBU0g7OztpQ0FDUSxDQUFFOzs7O0VBaEVvQkwsZUFBS1csSTs7a0JBQW5CekMsSyIsImZpbGUiOiJyZXFhdWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn6K+35qy+55Sz6K+3JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHBheToge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RfbW9uZXk6ICcnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RfcmVhc29uOiAnJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3JlbWFyazogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc19zdWJtaXRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRJbnB1dFBheXJlcXVlc3RfbW9uZXkoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5LnJlcXVlc3RfbW9uZXkgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRyZXF1ZXN0X3JlYXNvbihlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXkucmVxdWVzdF9yZWFzb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBheS5yZXF1ZXN0X3JlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3M9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFzcztcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfc3VibWl0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzX3N1Ym1pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ3Jldmlld1JlcXVlc3RNb25leScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQ6dGhhdC5wYXkuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBhc3M6cGFzc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLm9yZGVyX2lkO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRSZXF1ZXN0TW9uZXlJbmZvJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYXkgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0X2lkOiBvcHRpb25zLnJlcXVlc3RfaWQsXG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=