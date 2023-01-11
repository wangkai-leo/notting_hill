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
            request_list: null,
            id: -1
            // user_id: -1,
            // user: null,
        }, _this.methods = {
            goToDetail: function goToDetail(e) {
                var request_id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: '/pages/marry/scheme/requestpay?order_id=' + this.id + '&is_edit=true' + '&request_id=' + request_id });
            },
            goToRequestPay: function goToRequestPay() {
                _wepy2.default.navigateTo({ url: '/pages/marry/scheme/requestpay?order_id=' + this.id });
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
            that.id = options.order_id;
            // that.user_id = options.user_id;
            // that.user = wepy.getStorageSync('user');
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getRequestMoneyList', {
                200: function _(result) {
                    that.request_list = result.data.data;
                    that.$apply();
                }
            }, {
                order_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/scheme/reqpaylist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXBheWxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJyZXF1ZXN0X2xpc3QiLCJpZCIsIm1ldGhvZHMiLCJnb1RvRGV0YWlsIiwiZSIsInJlcXVlc3RfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29Ub1JlcXVlc3RQYXkiLCJnb1RvRGVwb3QiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidGhhdCIsIm9yZGVyX2lkIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsbUJBQU8sTUFGSjtBQUdIQyxvQkFBUSxJQUhMO0FBSUhDLDBCQUFjLElBSlg7QUFLSEMsZ0JBQUksQ0FBQztBQUNMO0FBQ0E7QUFQRyxTLFFBU1BDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNPO0FBQ1Qsb0JBQUlDLGFBQWFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUF6QztBQUNBTywrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLDZDQUEyQyxLQUFLVCxFQUFoRCxHQUFtRCxlQUFuRCxHQUFtRSxjQUFuRSxHQUFrRkksVUFBekYsRUFBaEI7QUFDSCxhQUpLO0FBS05NLDBCQUxNLDRCQUtVO0FBQ1pILCtCQUFLQyxVQUFMLENBQWdCLEVBQUVDLEtBQUssNkNBQTJDLEtBQUtULEVBQXZELEVBQWhCO0FBQ0gsYUFQSztBQVFOVyxxQkFSTSx1QkFRTTtBQUNSSiwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyxtQ0FBbUMsS0FBS1QsRUFBeEMsR0FBNkM7QUFEdEMsaUJBQWhCO0FBR0g7QUFaSyxTOzs7OzsrQkFjSFksTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJRyxPQUFPLElBQVg7QUFDQUEsaUJBQUtmLEVBQUwsR0FBVVksUUFBUUksUUFBbEI7QUFDQTtBQUNBO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJRCxPQUFPLElBQVg7QUFDQUUsOEJBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQixxQkFBSyxtQkFBVTtBQUNYSCx5QkFBS2hCLFlBQUwsR0FBb0JvQixPQUFPeEIsSUFBUCxDQUFZQSxJQUFoQztBQUNBb0IseUJBQUtLLE1BQUw7QUFDSDtBQUp5QixhQUE5QixFQUtHO0FBQ0NKLDBCQUFVRCxLQUFLZjtBQURoQixhQUxIO0FBUUg7Ozs7RUFoRDhCTyxlQUFLYyxJOztrQkFBbkJqQyxLIiwiZmlsZSI6InJlcXBheWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+ivt+asvueUs+ivtycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICByZXF1ZXN0X2xpc3Q6IG51bGwsXG4gICAgICAgICAgICBpZDogLTEsXG4gICAgICAgICAgICAvLyB1c2VyX2lkOiAtMSxcbiAgICAgICAgICAgIC8vIHVzZXI6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1RvRGV0YWlsKGUpe1xuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0X2lkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL21hcnJ5L3NjaGVtZS9yZXF1ZXN0cGF5P29yZGVyX2lkPScrdGhpcy5pZCsnJmlzX2VkaXQ9dHJ1ZScrJyZyZXF1ZXN0X2lkPScrcmVxdWVzdF9pZCB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvUmVxdWVzdFBheSgpe1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9tYXJyeS9zY2hlbWUvcmVxdWVzdHBheT9vcmRlcl9pZD0nK3RoaXMuaWQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0RlcG90KCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2NoZW1lL2RlcG90P2lkPScgKyB0aGlzLmlkICsgJyZpc19jcmVhdGU9eWVzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5vcmRlcl9pZDtcbiAgICAgICAgICAgIC8vIHRoYXQudXNlcl9pZCA9IG9wdGlvbnMudXNlcl9pZDtcbiAgICAgICAgICAgIC8vIHRoYXQudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFJlcXVlc3RNb25leUxpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlcXVlc3RfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19