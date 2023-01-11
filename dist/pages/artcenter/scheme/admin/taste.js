"use strict";

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

var _file = require('./../../../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _canvas = require('./../../../../common/utils/canvas.js');

var _canvas2 = _interopRequireDefault(_canvas);

var _rule = require('./../../../../common/rule.js');

var _rule2 = _interopRequireDefault(_rule);

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
            title: "试菜申请",
            isback: true,
            taste_info: null,
            id: 0,
            user_id: 0,
            try_dishes_id: 0,
            is_submited: false,
            remark: '',
            try_type: null,
            try_index: 0
        }, _this.methods = {
            submit: function submit(e) {
                var pass = e.currentTarget.dataset.pass;
                var that = this;
                if (this.is_submited) {
                    return false;
                }
                this.is_submited = true;
                _request2.default.get('reviewTryDishes', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    try_dishes_id: that.try_dishes_id,
                    pass: pass
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "onLoad",
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.user_id = options.user_id;
            that.try_dishes_id = options.tryid;
        }
    }, {
        key: "onShow",
        value: function onShow() {
            var that = this;
            _request2.default.get("getTryDishesDetail", {
                200: function _(result) {
                    that.taste_info = result.data.data;
                    that.taste_info.package_info = JSON.stringify(result.data.data.package_info);
                    that.try_type = result.data.try_type;
                    var i = 0;
                    that.try_type.forEach(function (element) {
                        if (element.try_type == that.taste_info.try_type) {
                            that.try_index = i;
                        }
                        i++;
                    });
                    that.$apply();
                }
            }, {
                try_dishes_id: that.try_dishes_id,
                user_id: that.user_id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/scheme/admin/taste'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc3RlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidGFzdGVfaW5mbyIsImlkIiwidXNlcl9pZCIsInRyeV9kaXNoZXNfaWQiLCJpc19zdWJtaXRlZCIsInJlbWFyayIsInRyeV90eXBlIiwidHJ5X2luZGV4IiwibWV0aG9kcyIsInN1Ym1pdCIsImUiLCJwYXNzIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0aGF0IiwicnEiLCJnZXQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCIkYXBwbHkiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwidHJ5aWQiLCJyZXN1bHQiLCJwYWNrYWdlX2luZm8iLCJKU09OIiwic3RyaW5naWZ5IiwiaSIsImZvckVhY2giLCJlbGVtZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQU1OQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsd0JBQVksSUFKVDtBQUtIQyxnQkFBSSxDQUxEO0FBTUhDLHFCQUFTLENBTk47QUFPSEMsMkJBQWUsQ0FQWjtBQVFIQyx5QkFBWSxLQVJUO0FBU0hDLG9CQUFRLEVBVEw7QUFVSEMsc0JBQVUsSUFWUDtBQVdIQyx1QkFBVztBQVhSLFMsUUFjUEMsTyxHQUFVO0FBQ05DLGtCQURNLGtCQUNDQyxDQURELEVBQ0k7QUFDTixvQkFBSUMsT0FBS0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLElBQWpDO0FBQ0Esb0JBQUlHLE9BQU8sSUFBWDtBQUNBLG9CQUFJLEtBQUtWLFdBQVQsRUFBc0I7QUFDbEIsMkJBQU8sS0FBUDtBQUNIO0FBQ0QscUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQVcsa0NBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN0Qix5QkFBSyxtQkFBVTtBQUNYQyx1Q0FBS0MsWUFBTCxDQUFrQjtBQUNkQyxtQ0FBTyxDQURPLENBQ0w7QUFESyx5QkFBbEI7QUFHQUwsNkJBQUtNLE1BQUw7QUFDSDtBQU5xQixpQkFBMUIsRUFPRztBQUNDakIsbUNBQWNXLEtBQUtYLGFBRHBCO0FBRUNRLDBCQUFLQTtBQUZOLGlCQVBIO0FBV0g7QUFuQkssUzs7Ozs7K0JBc0JIVSxPLEVBQVM7QUFDWkEsc0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsZ0JBQUlQLE9BQU8sSUFBWDtBQUNBQSxpQkFBS1osT0FBTCxHQUFlbUIsUUFBUW5CLE9BQXZCO0FBQ0FZLGlCQUFLWCxhQUFMLEdBQXFCa0IsUUFBUUcsS0FBN0I7QUFDSDs7O2lDQUVRO0FBQ0wsZ0JBQUlWLE9BQU8sSUFBWDtBQUNBQyw4QkFBR0MsR0FBSCxDQUNJLG9CQURKLEVBQzBCO0FBQ2xCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLZCxVQUFMLEdBQWtCeUIsT0FBTzdCLElBQVAsQ0FBWUEsSUFBOUI7QUFDQWtCLHlCQUFLZCxVQUFMLENBQWdCMEIsWUFBaEIsR0FBK0JDLEtBQUtDLFNBQUwsQ0FBZUgsT0FBTzdCLElBQVAsQ0FBWUEsSUFBWixDQUFpQjhCLFlBQWhDLENBQS9CO0FBQ0FaLHlCQUFLUixRQUFMLEdBQWdCbUIsT0FBTzdCLElBQVAsQ0FBWVUsUUFBNUI7QUFDQSx3QkFBSXVCLElBQUksQ0FBUjtBQUNBZix5QkFBS1IsUUFBTCxDQUFjd0IsT0FBZCxDQUFzQixtQkFBVztBQUM3Qiw0QkFBSUMsUUFBUXpCLFFBQVIsSUFBb0JRLEtBQUtkLFVBQUwsQ0FBZ0JNLFFBQXhDLEVBQWtEO0FBQzlDUSxpQ0FBS1AsU0FBTCxHQUFpQnNCLENBQWpCO0FBQ0g7QUFDREE7QUFDSCxxQkFMRDtBQU1BZix5QkFBS00sTUFBTDtBQUNIO0FBYmlCLGFBRDFCLEVBZU87QUFDQ2pCLCtCQUFlVyxLQUFLWCxhQURyQjtBQUVDRCx5QkFBU1ksS0FBS1o7QUFGZixhQWZQO0FBb0JIOzs7O0VBNUU4QmUsZUFBS2UsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJ0YXN0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBpbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuICAgIGltcG9ydCBycSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3RcIjtcbiAgICBpbXBvcnQgdG9vbCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2xcIjtcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZVwiO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZVwiO1xuICAgIGltcG9ydCBkYXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlXCI7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlXCI7XG4gICAgaW1wb3J0IGNhbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2NhbnZhc1wiO1xuICAgIGltcG9ydCBydWxlIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcnVsZVwiO1xuICAgIGltcG9ydCBjc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzXCI7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogXCLor5Xoj5znlLPor7dcIixcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHRhc3RlX2luZm86IG51bGwsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IDAsXG4gICAgICAgICAgICB0cnlfZGlzaGVzX2lkOiAwLFxuICAgICAgICAgICAgaXNfc3VibWl0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICAgICAgdHJ5X3R5cGU6IG51bGwsXG4gICAgICAgICAgICB0cnlfaW5kZXg6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc3VibWl0KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzcz1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXNzO1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc19zdWJtaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNfc3VibWl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJxLmdldCgncmV2aWV3VHJ5RGlzaGVzJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0cnlfZGlzaGVzX2lkOnRoYXQudHJ5X2Rpc2hlc19pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFzczpwYXNzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LnVzZXJfaWQgPSBvcHRpb25zLnVzZXJfaWQ7XG4gICAgICAgICAgICB0aGF0LnRyeV9kaXNoZXNfaWQgPSBvcHRpb25zLnRyeWlkO1xuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KFxuICAgICAgICAgICAgICAgIFwiZ2V0VHJ5RGlzaGVzRGV0YWlsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50YXN0ZV9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGFzdGVfaW5mby5wYWNrYWdlX2luZm8gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhLnBhY2thZ2VfaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRyeV90eXBlID0gcmVzdWx0LmRhdGEudHJ5X3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRyeV90eXBlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJ5X3R5cGUgPT0gdGhhdC50YXN0ZV9pbmZvLnRyeV90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudHJ5X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0cnlfZGlzaGVzX2lkOiB0aGF0LnRyeV9kaXNoZXNfaWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQudXNlcl9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==