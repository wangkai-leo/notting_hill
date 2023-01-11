'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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
            title: '转让申请',
            id: '',
            customer: null,
            show_img_arr: [],
            isback: true
        }, _this.methods = {
            viewCheck: function viewCheck(e) {
                _wepy2.default.previewImage({
                    current: this.show_img_arr[e.currentTarget.dataset.index],
                    urls: this.show_img_arr //需要预览的图片链接列表,
                });
            },
            submit: function submit(e) {
                var that = this;
                var is_pass = e.currentTarget.dataset.pass;
                _request2.default.get('approvedTransfer', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    transferor_id: that.customer.id,
                    is_pass: is_pass
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            _request2.default.get('transferDetail', {
                200: function _(result) {
                    that.customer = result.data.data;
                    that.show_img_arr = that.customer.comm_proof;
                    that.$apply();
                }
            }, {
                transfer_id: options.id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/transdetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaWQiLCJjdXN0b21lciIsInNob3dfaW1nX2FyciIsImlzYmFjayIsIm1ldGhvZHMiLCJ2aWV3Q2hlY2siLCJlIiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwidXJscyIsInN1Ym1pdCIsInRoYXQiLCJpc19wYXNzIiwicGFzcyIsInJxIiwiZ2V0IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ0cmFuc2Zlcm9yX2lkIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInJlc3VsdCIsImNvbW1fcHJvb2YiLCIkYXBwbHkiLCJ0cmFuc2Zlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE1BRko7QUFHSEMsZ0JBQUksRUFIRDtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLDBCQUFjLEVBTFg7QUFNSEMsb0JBQVE7QUFOTCxTLFFBUVBDLE8sR0FBVTtBQUNOQyxxQkFETSxxQkFDSUMsQ0FESixFQUNPO0FBQ1RDLCtCQUFLQyxZQUFMLENBQWtCO0FBQ2RDLDZCQUFTLEtBQUtQLFlBQUwsQ0FBa0JJLEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUExQyxDQURLO0FBRWRDLDBCQUFNLEtBQUtYLFlBRkcsQ0FFVTtBQUZWLGlCQUFsQjtBQUlILGFBTks7QUFPTlksa0JBUE0sa0JBT0NSLENBUEQsRUFPSTtBQUNOLG9CQUFJUyxPQUFPLElBQVg7QUFDQSxvQkFBSUMsVUFBVVYsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JNLElBQXRDO0FBQ0FDLGtDQUFHQyxHQUFILENBQU8sa0JBQVAsRUFBMkI7QUFDdkIseUJBQUssbUJBQVU7QUFDWFosdUNBQUthLFlBQUwsQ0FBa0I7QUFDZEMsbUNBQU8sQ0FETyxDQUNMO0FBREsseUJBQWxCO0FBR0g7QUFMc0IsaUJBQTNCLEVBTUc7QUFDQ0MsbUNBQWVQLEtBQUtkLFFBQUwsQ0FBY0QsRUFEOUI7QUFFQ2dCLDZCQUFTQTtBQUZWLGlCQU5IO0FBVUg7QUFwQkssUzs7Ozs7K0JBc0JITyxPLEVBQVM7QUFDWkEsc0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsZ0JBQUlSLE9BQU8sSUFBWDtBQUNBQSxpQkFBS2YsRUFBTCxHQUFVdUIsUUFBUXZCLEVBQWxCO0FBQ0FrQiw4QkFBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3JCLHFCQUFLLG1CQUFVO0FBQ1hKLHlCQUFLZCxRQUFMLEdBQWdCeUIsT0FBTzdCLElBQVAsQ0FBWUEsSUFBNUI7QUFDQWtCLHlCQUFLYixZQUFMLEdBQW9CYSxLQUFLZCxRQUFMLENBQWMwQixVQUFsQztBQUNBWix5QkFBS2EsTUFBTDtBQUNIO0FBTG9CLGFBQXpCLEVBTUc7QUFDQ0MsNkJBQWFOLFFBQVF2QjtBQUR0QixhQU5IO0FBU0g7OztpQ0FDUSxDQUFFOzs7O0VBcERvQk8sZUFBS3VCLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoidHJhbnNkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+i9rOiuqeeUs+ivtycsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcbiAgICAgICAgICAgIHNob3dfaW1nX2FycjogW10sXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB2aWV3Q2hlY2soZSkge1xuICAgICAgICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogdGhpcy5zaG93X2ltZ19hcnJbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLnNob3dfaW1nX2FyciAvL+mcgOimgemihOiniOeahOWbvueJh+mTvuaOpeWIl+ihqCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaXNfcGFzcyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhc3M7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdhcHByb3ZlZFRyYW5zZmVyJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyb3JfaWQ6IHRoYXQuY3VzdG9tZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzX3Bhc3M6IGlzX3Bhc3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHJxLmdldCgndHJhbnNmZXJEZXRhaWwnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93X2ltZ19hcnIgPSB0aGF0LmN1c3RvbWVyLmNvbW1fcHJvb2Y7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyX2lkOiBvcHRpb25zLmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19