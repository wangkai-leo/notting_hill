"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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
            title: "婚礼任务单",
            isback: true,
            id: -1,
            order_id_str: -1,
            task_info: {},
            teams_info: {},
            teams_index: 0,
            display_flesh: true,

            is_submited: false
        }, _this.methods = {
            submit: function submit(e) {
                var pass = e.currentTarget.dataset.pass;
                var that = this;
                if (this.is_submited) {
                    return false;
                }
                this.is_submited = true;
                _request2.default.get('reviewTaskInfo', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    wedding_task_id: that.task_info.id,
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
            that.id = options.id;
            that.order_id_str = options.order_id_str;
            _request2.default.get("getWeddingTask", {
                200: function _(result) {
                    that.task_info = result.data.data;
                    that.$apply();
                    _request2.default.get("getTeams", {
                        200: function _(result) {
                            that.teams_info = result.data.data;
                            var i = 0;
                            that.teams_info.forEach(function (element) {
                                if (element.team_name == that.task_info.team_name) {
                                    that.teams_index = i;
                                }
                                i++;
                            });
                            that.$apply();
                        }
                    }, {
                        team_type: 2
                    });
                }
            }, {
                order_id_str: that.order_id_str,
                order_id: that.id
            });
        }
    }, {
        key: "onShow",
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/scheme/admin/task'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJpZCIsIm9yZGVyX2lkX3N0ciIsInRhc2tfaW5mbyIsInRlYW1zX2luZm8iLCJ0ZWFtc19pbmRleCIsImRpc3BsYXlfZmxlc2giLCJpc19zdWJtaXRlZCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJlIiwicGFzcyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiJGFwcGx5Iiwid2VkZGluZ190YXNrX2lkIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInJlc3VsdCIsImkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRlYW1fbmFtZSIsInRlYW1fdHlwZSIsIm9yZGVyX2lkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLE9BRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyxnQkFBSSxDQUFDLENBSkY7QUFLSEMsMEJBQWMsQ0FBQyxDQUxaO0FBTUhDLHVCQUFXLEVBTlI7QUFPSEMsd0JBQVksRUFQVDtBQVFIQyx5QkFBYSxDQVJWO0FBU0hDLDJCQUFlLElBVFo7O0FBV0hDLHlCQUFZO0FBWFQsUyxRQWFQQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0NDLENBREQsRUFDSTtBQUNOLG9CQUFJQyxPQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsSUFBakM7QUFDQSxvQkFBSUcsT0FBTyxJQUFYO0FBQ0Esb0JBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQiwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxxQkFBS0EsV0FBTCxHQUFtQixJQUFuQjtBQUNBUSxrQ0FBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3JCLHlCQUFLLG1CQUFVO0FBQ1hDLHVDQUFLQyxZQUFMLENBQWtCO0FBQ2RDLG1DQUFPLENBRE8sQ0FDTDtBQURLLHlCQUFsQjtBQUdBTCw2QkFBS00sTUFBTDtBQUNIO0FBTm9CLGlCQUF6QixFQU9HO0FBQ0NDLHFDQUFnQlAsS0FBS1gsU0FBTCxDQUFlRixFQURoQztBQUVDVSwwQkFBS0E7QUFGTixpQkFQSDtBQVdIO0FBbkJLLFM7Ozs7OytCQXNCSFcsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJUixPQUFPLElBQVg7QUFDQUEsaUJBQUtiLEVBQUwsR0FBVXFCLFFBQVFyQixFQUFsQjtBQUNBYSxpQkFBS1osWUFBTCxHQUFvQm9CLFFBQVFwQixZQUE1QjtBQUNBYSw4QkFBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3JCLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLWCxTQUFMLEdBQWlCc0IsT0FBTzVCLElBQVAsQ0FBWUEsSUFBN0I7QUFDQWlCLHlCQUFLTSxNQUFMO0FBQ0FMLHNDQUFHQyxHQUFILENBQU8sVUFBUCxFQUFtQjtBQUNmLDZCQUFLLG1CQUFVO0FBQ1hGLGlDQUFLVixVQUFMLEdBQWtCcUIsT0FBTzVCLElBQVAsQ0FBWUEsSUFBOUI7QUFDQSxnQ0FBSTZCLElBQUUsQ0FBTjtBQUNBWixpQ0FBS1YsVUFBTCxDQUFnQnVCLE9BQWhCLENBQXdCLG1CQUFXO0FBQy9CLG9DQUFHQyxRQUFRQyxTQUFSLElBQW1CZixLQUFLWCxTQUFMLENBQWUwQixTQUFyQyxFQUErQztBQUMzQ2YseUNBQUtULFdBQUwsR0FBaUJxQixDQUFqQjtBQUNIO0FBQ0RBO0FBQ0gsNkJBTEQ7QUFNQVosaUNBQUtNLE1BQUw7QUFDSDtBQVhjLHFCQUFuQixFQVlHO0FBQ0NVLG1DQUFXO0FBRFoscUJBWkg7QUFlSDtBQW5Cb0IsYUFBekIsRUFvQkc7QUFDQzVCLDhCQUFjWSxLQUFLWixZQURwQjtBQUVDNkIsMEJBQVVqQixLQUFLYjtBQUZoQixhQXBCSDtBQXdCSDs7O2lDQUNRLENBQUU7Ozs7RUF6RW9CZ0IsZUFBS2UsSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJ0YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBpbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuICAgIGltcG9ydCBDIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vY29uZmlnXCI7XG4gICAgaW1wb3J0IHJxIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdFwiO1xuICAgIGltcG9ydCB0b29sIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbFwiO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlXCI7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlXCI7XG4gICAgaW1wb3J0IGRhdCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGVcIjtcbiAgICBpbXBvcnQgZmlsZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGVcIjtcbiAgICBpbXBvcnQgY2FuIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvY2FudmFzXCI7XG4gICAgaW1wb3J0IHJ1bGUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9ydWxlXCI7XG4gICAgaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogXCLlqZrnpLzku7vliqHljZVcIixcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIG9yZGVyX2lkX3N0cjogLTEsXG4gICAgICAgICAgICB0YXNrX2luZm86IHt9LFxuICAgICAgICAgICAgdGVhbXNfaW5mbzoge30sXG4gICAgICAgICAgICB0ZWFtc19pbmRleDogMCxcbiAgICAgICAgICAgIGRpc3BsYXlfZmxlc2g6IHRydWUsXG5cbiAgICAgICAgICAgIGlzX3N1Ym1pdGVkOmZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzdWJtaXQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhc3M7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzX3N1Ym1pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc19zdWJtaXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdyZXZpZXdUYXNrSW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgd2VkZGluZ190YXNrX2lkOnRoYXQudGFza19pbmZvLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXNzOnBhc3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGF0Lm9yZGVyX2lkX3N0ciA9IG9wdGlvbnMub3JkZXJfaWRfc3RyO1xuICAgICAgICAgICAgcnEuZ2V0KFwiZ2V0V2VkZGluZ1Rhc2tcIiwge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50YXNrX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICBycS5nZXQoXCJnZXRUZWFtc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50ZWFtc19pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaT0wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfaW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRlYW1fbmFtZT09dGhhdC50YXNrX2luZm8udGVhbV9uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfaW5kZXg9aTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbV90eXBlOiAyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvcmRlcl9pZF9zdHI6IHRoYXQub3JkZXJfaWRfc3RyLFxuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7fVxuICAgIH1cbiJdfQ==