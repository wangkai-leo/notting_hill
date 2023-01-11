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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Web = function (_wepy$page) {
    _inherits(Web, _wepy$page);

    function Web() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Web);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Web.__proto__ || Object.getPrototypeOf(Web)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            url: ''
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Web, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;

            _request2.default.get('questionTable', {
                200: function _(result) {
                    if (options.type == 1) {
                        that.url = result.data.female;
                    } else if (options.type == 2) {
                        that.url = result.data.male;
                    }
                    that.$apply();
                }
            }, {
                order_id_str: options.order_id_str
            });
        }
    }]);

    return Web;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Web , 'pages/marry/scheme/web'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5qcyJdLCJuYW1lcyI6WyJXZWIiLCJjb21wb25lbnRzIiwiZGF0YSIsInVybCIsIm1ldGhvZHMiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidGhhdCIsInJxIiwiZ2V0IiwidHlwZSIsInJlc3VsdCIsImZlbWFsZSIsIm1hbGUiLCIkYXBwbHkiLCJvcmRlcl9pZF9zdHIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O29MQUNqQkMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLGlCQUFLO0FBREYsUyxRQUdQQyxPLEdBQVUsRTs7Ozs7K0JBQ0hDLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBSyxJQUFUOztBQUVBQyw4QkFBR0MsR0FBSCxDQUFPLGVBQVAsRUFBd0I7QUFDcEIscUJBQUssbUJBQVU7QUFDWCx3QkFBSUwsUUFBUU0sSUFBUixJQUFnQixDQUFwQixFQUF1QjtBQUNuQkgsNkJBQUtMLEdBQUwsR0FBV1MsT0FBT1YsSUFBUCxDQUFZVyxNQUF2QjtBQUNILHFCQUZELE1BRU8sSUFBSVIsUUFBUU0sSUFBUixJQUFnQixDQUFwQixFQUF1QjtBQUMxQkgsNkJBQUtMLEdBQUwsR0FBV1MsT0FBT1YsSUFBUCxDQUFZWSxJQUF2QjtBQUNIO0FBQ0ROLHlCQUFLTyxNQUFMO0FBQ0g7QUFSbUIsYUFBeEIsRUFTRztBQUNDQyw4QkFBY1gsUUFBUVc7QUFEdkIsYUFUSDtBQVlIOzs7O0VBdEI0QkMsZUFBS0MsSTs7a0JBQWpCbEIsRyIsImZpbGUiOiJ3ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb21wb25lbnRzID0ge307XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xuXG4gICAgICAgICAgICBycS5nZXQoJ3F1ZXN0aW9uVGFibGUnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXJsID0gcmVzdWx0LmRhdGEuZmVtYWxlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVybCA9IHJlc3VsdC5kYXRhLm1hbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWRfc3RyOiBvcHRpb25zLm9yZGVyX2lkX3N0clxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==