'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fnav = function (_wepy$component) {
    _inherits(Fnav, _wepy$component);

    function Fnav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Fnav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fnav.__proto__ || Object.getPrototypeOf(Fnav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            currIndex: Number
        }, _this.components = {}, _this.data = {
            navImgs: ['../images/nav-c.png', '../images/nav-b.png', '../images/nav-a.png', '../images/nav-d.png'],
            navImgsCurr: ['../images/nav-ch.png', '../images/nav-bh.png', '../images/nav-ah.png', '../images/nav-dh.png'],
            navList: ['index', '', '', '']
        }, _this.methods = {
            formsubmit: function formsubmit(e) {
                var formId = e.detail.formId;
                console.log(formId);
                _api2.default.saveFormId(formId);
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Fnav, [{
        key: 'onLoad',
        value: function onLoad(options) {
            console.log(this.currIndex);
        }
    }]);

    return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYXYuanMiXSwibmFtZXMiOlsiRm5hdiIsInByb3BzIiwiY3VyckluZGV4IiwiTnVtYmVyIiwiY29tcG9uZW50cyIsImRhdGEiLCJuYXZJbWdzIiwibmF2SW1nc0N1cnIiLCJuYXZMaXN0IiwibWV0aG9kcyIsImZvcm1zdWJtaXQiLCJlIiwiZm9ybUlkIiwiZGV0YWlsIiwiY29uc29sZSIsImxvZyIsImFwaSIsInNhdmVGb3JtSWQiLCJldmVudHMiLCJvcHRpb25zIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSyxHQUFRO0FBQ0pDLHVCQUFXQztBQURQLFMsUUFHUkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLHFCQUFTLENBQUMscUJBQUQsRUFBd0IscUJBQXhCLEVBQStDLHFCQUEvQyxFQUFzRSxxQkFBdEUsQ0FETjtBQUVIQyx5QkFBYSxDQUFDLHNCQUFELEVBQXlCLHNCQUF6QixFQUFpRCxzQkFBakQsRUFBeUUsc0JBQXpFLENBRlY7QUFHSEMscUJBQVMsQ0FBQyxPQUFELEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEI7QUFITixTLFFBS1BDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNRO0FBQ1Ysb0JBQUlDLFNBQVNELEVBQUVFLE1BQUYsQ0FBU0QsTUFBdEI7QUFDQUUsd0JBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBSSw4QkFBSUMsVUFBSixDQUFlTCxNQUFmO0FBQ0g7QUFMSyxTLFFBVVZNLE0sR0FBUyxFOzs7OzsrQkFIRkMsTyxFQUFTO0FBQ1pMLG9CQUFRQyxHQUFSLENBQVksS0FBS2IsU0FBakI7QUFDSDs7OztFQW5CNkJrQixlQUFLQyxTOztrQkFBbEJyQixJIiwiZmlsZSI6ImZuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBHIGZyb20gJy4uL2NvbW1vbi9nbG9iYWwuanMnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGkuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbmF2IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgY3VyckluZGV4OiBOdW1iZXJcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbmF2SW1nczogWycuLi9pbWFnZXMvbmF2LWMucG5nJywgJy4uL2ltYWdlcy9uYXYtYi5wbmcnLCAnLi4vaW1hZ2VzL25hdi1hLnBuZycsICcuLi9pbWFnZXMvbmF2LWQucG5nJ10sXHJcbiAgICAgICAgbmF2SW1nc0N1cnI6IFsnLi4vaW1hZ2VzL25hdi1jaC5wbmcnLCAnLi4vaW1hZ2VzL25hdi1iaC5wbmcnLCAnLi4vaW1hZ2VzL25hdi1haC5wbmcnLCAnLi4vaW1hZ2VzL25hdi1kaC5wbmcnXSxcclxuICAgICAgICBuYXZMaXN0OiBbJ2luZGV4JywgJycsICcnLCAnJ11cclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGZvcm1zdWJtaXQoZSkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybUlkID0gZS5kZXRhaWwuZm9ybUlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtSWQpO1xyXG4gICAgICAgICAgICBhcGkuc2F2ZUZvcm1JZChmb3JtSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VyckluZGV4KTtcclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHt9O1xyXG59XHJcbiJdfQ==