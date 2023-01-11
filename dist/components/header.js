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

var Header = function (_wepy$component) {
    _inherits(Header, _wepy$component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            title: String,
            iphonex: Boolean,
            bounding_center_top: Number,
            isback: Boolean,
            isopacity: Boolean
        }, _this.data = {}, _this.components = {}, _this.methods = {
            backHistory: function backHistory() {
                var cps = getCurrentPages();
                if (cps.length > 1) {
                    _wepy2.default.navigateBack({
                        delta: 1, //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        fail: function fail(res) {
                            console.log(res);
                        }
                    });
                } else {
                    _wepy2.default.switchTab({
                        url: '/pages/index'
                    });
                }
            },
            backHome: function backHome() {
                _wepy2.default.switchTab({
                    url: '/pages/index'
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Header;
}(_wepy2.default.component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiaXBob25leCIsIkJvb2xlYW4iLCJib3VuZGluZ19jZW50ZXJfdG9wIiwiTnVtYmVyIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiYmFja0hpc3RvcnkiLCJjcHMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsInJlcyIsInN3aXRjaFRhYiIsInVybCIsImJhY2tIb21lIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU9DLE1BREg7QUFFSkMscUJBQVNDLE9BRkw7QUFHSkMsaUNBQXFCQyxNQUhqQjtBQUlKQyxvQkFBUUgsT0FKSjtBQUtKSSx1QkFBVUo7QUFMTixTLFFBT1JLLEksR0FBTyxFLFFBQ1BDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNOQyx1QkFETSx5QkFDUTtBQUNWLG9CQUFJQyxNQUFNQyxpQkFBVjtBQUNBLG9CQUFJRCxJQUFJRSxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJDLG1DQUFLQyxZQUFMLENBQWtCO0FBQ2RDLCtCQUFPLENBRE8sRUFDSjtBQUNWQyw4QkFBTSxtQkFBTztBQUNUQyxvQ0FBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0g7QUFKYSxxQkFBbEI7QUFNSCxpQkFQRCxNQU9PO0FBQ0hOLG1DQUFLTyxTQUFMLENBQWU7QUFDWEMsNkJBQUs7QUFETSxxQkFBZjtBQUdIO0FBQ0osYUFmSztBQWdCTkMsb0JBaEJNLHNCQWdCSztBQUNQVCwrQkFBS08sU0FBTCxDQUFlO0FBQ1hDLHlCQUFLO0FBRE0saUJBQWY7QUFHSDtBQXBCSyxTLFFBc0JWRSxNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRSxRQUNSQyxRLEdBQVcsRTs7Ozs7aUNBQ0YsQ0FBRTs7O2lDQUNGLENBQUU7Ozs7RUFwQ3FCWixlQUFLYSxTOztrQkFBcEI5QixNIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICBpcGhvbmV4OiBCb29sZWFuLFxuICAgICAgICAgICAgYm91bmRpbmdfY2VudGVyX3RvcDogTnVtYmVyLFxuICAgICAgICAgICAgaXNiYWNrOiBCb29sZWFuLFxuICAgICAgICAgICAgaXNvcGFjaXR5OkJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgY29tcG9uZW50cyA9IHt9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiYWNrSGlzdG9yeSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3BzID0gZ2V0Q3VycmVudFBhZ2VzKClcbiAgICAgICAgICAgICAgICBpZiAoY3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEsIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja0hvbWUoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB7fVxuICAgICAgICB3YXRjaCA9IHt9XG4gICAgICAgIGNvbXB1dGVkID0ge31cbiAgICAgICAgb25Mb2FkKCkge307XG4gICAgICAgIG9uU2hvdygpIHt9O1xuICAgIH1cbiJdfQ==