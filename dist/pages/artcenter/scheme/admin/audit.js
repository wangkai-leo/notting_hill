'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _css = require('./../../../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../../../components/header.js');

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
            review_list: null,
            task_list: null,

            tab_index: 0,
            id: -1
        }, _this.methods = {
            goToTaskDetail: function goToTaskDetail(e) {
                var order_id = e.currentTarget.dataset.id;
                var order_id_str = e.currentTarget.dataset.orderstr;
                _wepy2.default.navigateTo({ url: 'task?id=' + order_id + '&order_id_str=' + order_id_str });
            },
            goToTasteDetail: function goToTasteDetail(e) {
                var user_id = e.currentTarget.dataset.id;
                var tryid = e.currentTarget.dataset.tryid;
                _wepy2.default.navigateTo({ url: 'taste?id=' + user_id + '&tryid=' + tryid });
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
            _request2.default.get('getReviewTryDishesList', {
                200: function _(result) {
                    that.review_list = result.data.data;
                    that.$apply();
                }
            }, {});

            _request2.default.get('getReviewTaskInfoList', {
                200: function _(result) {
                    that.task_list = result.data.data;
                    that.$apply();
                }
            }, {});
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/scheme/admin/audit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwicmV2aWV3X2xpc3QiLCJ0YXNrX2xpc3QiLCJ0YWJfaW5kZXgiLCJpZCIsIm1ldGhvZHMiLCJnb1RvVGFza0RldGFpbCIsImUiLCJvcmRlcl9pZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3JkZXJfaWRfc3RyIiwib3JkZXJzdHIiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9UYXN0ZURldGFpbCIsInVzZXJfaWQiLCJ0cnlpZCIsInRvZ2dsZVRhYiIsImluZGV4Iiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInRoYXQiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsbUJBQU8sTUFGSjtBQUdIQyxvQkFBUSxJQUhMO0FBSUhDLHlCQUFhLElBSlY7QUFLSEMsdUJBQVUsSUFMUDs7QUFPSEMsdUJBQVcsQ0FQUjtBQVFIQyxnQkFBSSxDQUFDO0FBUkYsUyxRQVVQQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDVztBQUNiLG9CQUFJQyxXQUFXRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk4sRUFBdkM7QUFDQSxvQkFBSU8sZUFBZUosRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JFLFFBQTNDO0FBQ0FDLCtCQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUssYUFBV1AsUUFBWCxHQUFvQixnQkFBcEIsR0FBcUNHLFlBQTVDLEVBQWhCO0FBQ0gsYUFMSztBQU9OSywyQkFQTSwyQkFPVVQsQ0FQVixFQU9ZO0FBQ2Qsb0JBQUlVLFVBQVVWLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUF0QztBQUNBLG9CQUFJYyxRQUFRWCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlEsS0FBcEM7QUFDQUwsK0JBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyxjQUFZRSxPQUFaLEdBQW9CLFNBQXBCLEdBQThCQyxLQUFyQyxFQUFoQjtBQUNILGFBWEs7QUFZTkMscUJBWk0scUJBWUlaLENBWkosRUFZTztBQUNULHFCQUFLSixTQUFMLEdBQWlCSSxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlUsS0FBekM7QUFDSDtBQWRLLFM7Ozs7OytCQWdCSEMsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJRyxPQUFPLElBQVg7QUFDQUEsaUJBQUtwQixFQUFMLEdBQVVpQixRQUFRakIsRUFBbEI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUlvQixPQUFPLElBQVg7QUFDQUMsOEJBQUdDLEdBQUgsQ0FBTyx3QkFBUCxFQUFpQztBQUM3QixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS3ZCLFdBQUwsR0FBbUIwQixPQUFPOUIsSUFBUCxDQUFZQSxJQUEvQjtBQUNBMkIseUJBQUtJLE1BQUw7QUFDSDtBQUo0QixhQUFqQyxFQUtHLEVBTEg7O0FBT0FILDhCQUFHQyxHQUFILENBQU8sdUJBQVAsRUFBZ0M7QUFDNUIscUJBQUssbUJBQVU7QUFDWEYseUJBQUt0QixTQUFMLEdBQWV5QixPQUFPOUIsSUFBUCxDQUFZQSxJQUEzQjtBQUNBMkIseUJBQUtJLE1BQUw7QUFDSDtBQUoyQixhQUFoQyxFQUtHLEVBTEg7QUFNSDs7OztFQXREOEJmLGVBQUtnQixJOztrQkFBbkJ2QyxLIiwiZmlsZSI6ImF1ZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIFxuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5Lia5Yqh5a6h5qC4JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHJldmlld19saXN0OiBudWxsLFxuICAgICAgICAgICAgdGFza19saXN0Om51bGwsXG5cbiAgICAgICAgICAgIHRhYl9pbmRleDogMCxcbiAgICAgICAgICAgIGlkOiAtMVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub1Rhc2tEZXRhaWwoZSl7XG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyX2lkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyX2lkX3N0ciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9yZGVyc3RyO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ3Rhc2s/aWQ9JytvcmRlcl9pZCsnJm9yZGVyX2lkX3N0cj0nK29yZGVyX2lkX3N0ciB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdvVG9UYXN0ZURldGFpbChlKXtcbiAgICAgICAgICAgICAgICBsZXQgdXNlcl9pZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGxldCB0cnlpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyeWlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ3Rhc3RlP2lkPScrdXNlcl9pZCsnJnRyeWlkPScrdHJ5aWR9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiX2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRSZXZpZXdUcnlEaXNoZXNMaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXZpZXdfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge30pXG5cbiAgICAgICAgICAgIHJxLmdldCgnZ2V0UmV2aWV3VGFza0luZm9MaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50YXNrX2xpc3Q9cmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==