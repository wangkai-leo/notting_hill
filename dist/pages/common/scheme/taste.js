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
            title: '试菜申请',
            isback: true,
            taste_list: null,
            id: -1,
            user_id: -1
        }, _this.methods = {
            goToFeedback: function goToFeedback(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: '/pages/common/scheme/feedback?id=' + id });
            },
            goToTasteDetail: function goToTasteDetail(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: '/pages/common/scheme/tastedetail?try_dishes_id=' + id + '&user_id=' + this.user_id });
            },
            goToTasteAdd: function goToTasteAdd() {
                _wepy2.default.navigateTo({ url: '/pages/common/scheme/tastedetail?id=' + this.id + '&user_id=' + this.user_id });
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
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getTryDishesList', {
                200: function _(result) {
                    that.taste_list = result.data.data;
                    that.$apply();
                }
            }, {
                order_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/taste'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc3RlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidGFzdGVfbGlzdCIsImlkIiwidXNlcl9pZCIsIm1ldGhvZHMiLCJnb1RvRmVlZGJhY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9UYXN0ZURldGFpbCIsImdvVG9UYXN0ZUFkZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJvcmRlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyx3QkFBWSxJQUpUO0FBS0hDLGdCQUFJLENBQUMsQ0FMRjtBQU1IQyxxQkFBUSxDQUFDO0FBTk4sUyxRQVFQQyxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDUztBQUNYLG9CQUFJSixLQUFLSSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk4sRUFBakM7QUFDQU8sK0JBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyxzQ0FBb0NULEVBQTNDLEVBQWhCO0FBQ0gsYUFKSztBQUtOVSwyQkFMTSwyQkFLVU4sQ0FMVixFQUtZO0FBQ2Qsb0JBQUlKLEtBQUtJLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUFqQztBQUNBTywrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLG9EQUFtRFQsRUFBbkQsR0FBdUQsV0FBdkQsR0FBbUUsS0FBS0MsT0FBL0UsRUFBaEI7QUFDSCxhQVJLO0FBU05VLHdCQVRNLDBCQVNRO0FBQ1ZKLCtCQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUsseUNBQXVDLEtBQUtULEVBQTVDLEdBQWdELFdBQWhELEdBQTRELEtBQUtDLE9BQXhFLEVBQWhCO0FBQ0g7QUFYSyxTOzs7OzsrQkFhSFcsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJRyxPQUFPLElBQVg7QUFDQUEsaUJBQUtmLEVBQUwsR0FBVVksUUFBUVosRUFBbEI7QUFDQWUsaUJBQUtkLE9BQUwsR0FBYVcsUUFBUVgsT0FBckI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUljLE9BQU8sSUFBWDtBQUNBQyw4QkFBR0MsR0FBSCxDQUFPLGtCQUFQLEVBQTJCO0FBQ3ZCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLaEIsVUFBTCxHQUFrQm1CLE9BQU92QixJQUFQLENBQVlBLElBQTlCO0FBQ0FvQix5QkFBS0ksTUFBTDtBQUNIO0FBSnNCLGFBQTNCLEVBS0c7QUFDQ0MsMEJBQVVMLEtBQUtmO0FBRGhCLGFBTEg7QUFRSDs7OztFQTdDOEJPLGVBQUtjLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoidGFzdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfor5Xoj5znlLPor7cnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgdGFzdGVfbGlzdDogbnVsbCxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIHVzZXJfaWQ6LTEsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1RvRmVlZGJhY2soZSl7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvZmVlZGJhY2s/aWQ9JytpZH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9UYXN0ZURldGFpbChlKXtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvY29tbW9uL3NjaGVtZS90YXN0ZWRldGFpbD90cnlfZGlzaGVzX2lkPScrIGlkICsnJnVzZXJfaWQ9Jyt0aGlzLnVzZXJfaWR9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvVGFzdGVBZGQoKXtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvY29tbW9uL3NjaGVtZS90YXN0ZWRldGFpbD9pZD0nK3RoaXMuaWQgKycmdXNlcl9pZD0nK3RoaXMudXNlcl9pZH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoYXQudXNlcl9pZD1vcHRpb25zLnVzZXJfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRUcnlEaXNoZXNMaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50YXN0ZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=