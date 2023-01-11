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
            title: '试菜申请',
            isback: true,
            taste_list: null,
            id: -1,
            user_id: -1
        }, _this.methods = {
            goToFeedback: function goToFeedback(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: 'feedback?id=' + id });
            },
            goToTasteDetail: function goToTasteDetail(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: 'tastedetail?try_dishes_id=' + id + '&user_id=' + this.user_id });
            },
            goToTasteAdd: function goToTasteAdd() {
                _wepy2.default.navigateTo({ url: 'tastedetail?id=' + this.id + '&user_id=' + this.user_id });
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/execute/taste'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc3RlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidGFzdGVfbGlzdCIsImlkIiwidXNlcl9pZCIsIm1ldGhvZHMiLCJnb1RvRmVlZGJhY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9UYXN0ZURldGFpbCIsImdvVG9UYXN0ZUFkZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJvcmRlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsd0JBQVksSUFKVDtBQUtIQyxnQkFBSSxDQUFDLENBTEY7QUFNSEMscUJBQVEsQ0FBQztBQU5OLFMsUUFRUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1M7QUFDWCxvQkFBSUosS0FBS0ksRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JOLEVBQWpDO0FBQ0FPLCtCQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUssaUJBQWVULEVBQXRCLEVBQWhCO0FBQ0gsYUFKSztBQUtOVSwyQkFMTSwyQkFLVU4sQ0FMVixFQUtZO0FBQ2Qsb0JBQUlKLEtBQUtJLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUFqQztBQUNBTywrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLCtCQUE4QlQsRUFBOUIsR0FBa0MsV0FBbEMsR0FBOEMsS0FBS0MsT0FBMUQsRUFBaEI7QUFDSCxhQVJLO0FBU05VLHdCQVRNLDBCQVNRO0FBQ1ZKLCtCQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUssb0JBQWtCLEtBQUtULEVBQXZCLEdBQTJCLFdBQTNCLEdBQXVDLEtBQUtDLE9BQW5ELEVBQWhCO0FBQ0g7QUFYSyxTOzs7OzsrQkFhSFcsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJRyxPQUFPLElBQVg7QUFDQUEsaUJBQUtmLEVBQUwsR0FBVVksUUFBUVosRUFBbEI7QUFDQWUsaUJBQUtkLE9BQUwsR0FBYVcsUUFBUVgsT0FBckI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUljLE9BQU8sSUFBWDtBQUNBQyw4QkFBR0MsR0FBSCxDQUFPLGtCQUFQLEVBQTJCO0FBQ3ZCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLaEIsVUFBTCxHQUFrQm1CLE9BQU92QixJQUFQLENBQVlBLElBQTlCO0FBQ0FvQix5QkFBS0ksTUFBTDtBQUNIO0FBSnNCLGFBQTNCLEVBS0c7QUFDQ0MsMEJBQVVMLEtBQUtmO0FBRGhCLGFBTEg7QUFRSDs7OztFQTdDOEJPLGVBQUtjLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoidGFzdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+ivleiPnOeUs+ivtycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICB0YXN0ZV9saXN0OiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgdXNlcl9pZDotMSxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGdvVG9GZWVkYmFjayhlKXtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICdmZWVkYmFjaz9pZD0nK2lkfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1Rhc3RlRGV0YWlsKGUpe1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ3Rhc3RlZGV0YWlsP3RyeV9kaXNoZXNfaWQ9JysgaWQgKycmdXNlcl9pZD0nK3RoaXMudXNlcl9pZH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9UYXN0ZUFkZCgpe1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJ3Rhc3RlZGV0YWlsP2lkPScrdGhpcy5pZCArJyZ1c2VyX2lkPScrdGhpcy51c2VyX2lkfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhhdC51c2VyX2lkPW9wdGlvbnMudXNlcl9pZDtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFRyeURpc2hlc0xpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRhc3RlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==