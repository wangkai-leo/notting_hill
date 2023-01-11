"use strict";

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
            title: "转让信息",
            isback: true,
            customer: null,
            id: ""
        }, _this.methods = {
            goToEditTurn: function goToEditTurn() {
                _wepy2.default.navigateTo({
                    url: "editturn?id=" + this.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "onLoad",
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
        }
    }, {
        key: "onShow",
        value: function onShow() {
            var that = this;
            _request2.default.get("getTransferLog", {
                200: function _(result) {
                    that.customer = result.data.data;
                    that.$apply();
                }
            }, {
                user_id: that.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/turninfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cm5pbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiY3VzdG9tZXIiLCJpZCIsIm1ldGhvZHMiLCJnb1RvRWRpdFR1cm4iLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJ1c2VyX2lkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQyxpQkFBS0EsYUFEQyxFQUNJO0FBQ1ZDLG9CQUFRQTtBQUZGLFMsUUFJVkMsSSxHQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsbUJBQU8sTUFGSjtBQUdIQyxvQkFBUSxJQUhMO0FBSUhDLHNCQUFVLElBSlA7QUFLSEMsZ0JBQUk7QUFMRCxTLFFBT1BDLE8sR0FBVTtBQUNOQyx3QkFETSwwQkFDUztBQUNYQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyxpQkFBaUIsS0FBS0w7QUFEZixpQkFBaEI7QUFHSDtBQUxLLFM7Ozs7OytCQU9ITSxPLEVBQVM7QUFDWkEsc0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsZ0JBQUlHLE9BQU8sSUFBWDtBQUNBQSxpQkFBS1QsRUFBTCxHQUFVTSxRQUFRTixFQUFsQjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSVMsT0FBTyxJQUFYO0FBQ0FDLDhCQUFHQyxHQUFILENBQ0ksZ0JBREosRUFDc0I7QUFDZCxxQkFBSyxtQkFBVTtBQUNYRix5QkFBS1YsUUFBTCxHQUFnQmEsT0FBT2pCLElBQVAsQ0FBWUEsSUFBNUI7QUFDQWMseUJBQUtJLE1BQUw7QUFDSDtBQUphLGFBRHRCLEVBTU87QUFDQ0MseUJBQVNMLEtBQUtUO0FBRGYsYUFOUDtBQVVIOzs7O0VBdkM4QkcsZUFBS1ksSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJ0dXJuaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBHIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZ2xvYmFsXCI7XG5pbXBvcnQgcnEgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0XCI7XG5pbXBvcnQgdG9vbCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2xcIjtcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2VcIjtcbmltcG9ydCBkYXQgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlXCI7XG5pbXBvcnQgZmlsZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGVcIjtcblxuXG5pbXBvcnQgY3NzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Nzc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgfTtcbiAgICBkYXRhID0ge1xuICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgIHRpdGxlOiBcIui9rOiuqeS/oeaBr1wiLFxuICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgIGN1c3RvbWVyOiBudWxsLFxuICAgICAgICBpZDogXCJcIlxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ29Ub0VkaXRUdXJuKCkge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiZWRpdHR1cm4/aWQ9XCIgKyB0aGlzLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgfVxuICAgIG9uU2hvdygpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBycS5nZXQoXG4gICAgICAgICAgICBcImdldFRyYW5zZmVyTG9nXCIsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VzdG9tZXIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19