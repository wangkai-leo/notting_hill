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
            title: "分配试菜",
            isback: true,
            taste_list: null,
            id: 0,
            user_id: 0,
            try_dishes_id: 0,
            user: null,
            teams_employee: null,
            employee_index: 0
        }, _this.methods = {
            assignTask: function assignTask() {
                var that = this;
                _request2.default.get("distributionTryDishes", {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    try_dishes_id: that.try_dishes_id,
                    employee_id: that.teams_employee[that.employee_index].id
                });
            },
            bindTeamChange: function bindTeamChange(e) {
                this.employee_index = e.detail.value;
            },
            bindTimeChange: function bindTimeChange(e) {
                this.taste_list.try_time = e.detail.value;
            },
            bindDateChange: function bindDateChange(e) {
                this.taste_list.try_date = e.detail.value;
            },
            goToFeedback: function goToFeedback() {
                _wepy2.default.navigateTo({
                    url: '/pages/artcenter/scheme/feedback?id=' + this.try_dishes_id
                });
            },
            bindInputUserMobile: function bindInputUserMobile(e) {
                this.taste_list.client_mobile = e.detail.value;
            },
            bindInputUserName: function bindInputUserName(e) {
                this.taste_list.client_name = e.detail.value;
            },
            bindInputMeal: function bindInputMeal(e) {
                this.taste_list.wedding_meal_section = e.detail.value;
            },
            bindInputMealDate: function bindInputMealDate(e) {
                this.taste_list.try_date = e.detail.value;
            },
            bindInputAddress: function bindInputAddress(e) {
                this.taste_list.try_address = e.detail.value;
            },
            bindInputSession: function bindInputSession(e) {
                this.taste_list.try_session = e.detail.value;
            },
            bindInputMealTime: function bindInputMealTime(e) {
                this.taste_list.try_time = e.detail.value;
            },
            bindInputPersonNum: function bindInputPersonNum(e) {
                this.taste_list.try_person_number = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "onLoad",
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.user_id = options.user_id;
            that.try_dishes_id = options.try_dishes_id;
        }
    }, {
        key: "onShow",
        value: function onShow() {
            var that = this;
            this.user = _wepy2.default.getStorageSync('user');
            _request2.default.get("getTryDishesDetail", {
                200: function _(result) {
                    that.taste_list = result.data.data;
                    that.$apply();
                }
            }, {
                try_dishes_id: that.try_dishes_id,
                user_id: that.user_id
            });
            _request2.default.get("getLoginerTeamEmployee", {
                200: function _(result) {
                    that.teams_employee = result.data.employee_list;
                    that.$apply();
                }
            }, {});
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/execute/trydetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyeWRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInRhc3RlX2xpc3QiLCJpZCIsInVzZXJfaWQiLCJ0cnlfZGlzaGVzX2lkIiwidXNlciIsInRlYW1zX2VtcGxveWVlIiwiZW1wbG95ZWVfaW5kZXgiLCJtZXRob2RzIiwiYXNzaWduVGFzayIsInRoYXQiLCJycSIsImdldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImVtcGxveWVlX2lkIiwiYmluZFRlYW1DaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kVGltZUNoYW5nZSIsInRyeV90aW1lIiwiYmluZERhdGVDaGFuZ2UiLCJ0cnlfZGF0ZSIsImdvVG9GZWVkYmFjayIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kSW5wdXRVc2VyTW9iaWxlIiwiY2xpZW50X21vYmlsZSIsImJpbmRJbnB1dFVzZXJOYW1lIiwiY2xpZW50X25hbWUiLCJiaW5kSW5wdXRNZWFsIiwid2VkZGluZ19tZWFsX3NlY3Rpb24iLCJiaW5kSW5wdXRNZWFsRGF0ZSIsImJpbmRJbnB1dEFkZHJlc3MiLCJ0cnlfYWRkcmVzcyIsImJpbmRJbnB1dFNlc3Npb24iLCJ0cnlfc2Vzc2lvbiIsImJpbmRJbnB1dE1lYWxUaW1lIiwiYmluZElucHV0UGVyc29uTnVtIiwidHJ5X3BlcnNvbl9udW1iZXIiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCIkYXBwbHkiLCJlbXBsb3llZV9saXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7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aW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBpbXBvcnQgRyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2dsb2JhbFwiO1xuICAgIGltcG9ydCBycSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3RcIjtcbiAgICBpbXBvcnQgdG9vbCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2xcIjtcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZVwiO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZVwiO1xuICAgIGltcG9ydCBkYXQgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlXCI7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlXCI7XG4gICAgXG4gICAgXG4gICAgaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogXCLliIbphY3or5Xoj5xcIixcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIHRhc3RlX2xpc3Q6IG51bGwsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IDAsXG4gICAgICAgICAgICB0cnlfZGlzaGVzX2lkOiAwLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIHRlYW1zX2VtcGxveWVlOiBudWxsLFxuICAgICAgICAgICAgZW1wbG95ZWVfaW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGFzc2lnblRhc2soKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoXCJkaXN0cmlidXRpb25UcnlEaXNoZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5X2Rpc2hlc19pZDogdGhhdC50cnlfZGlzaGVzX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfaWQ6IHRoYXQudGVhbXNfZW1wbG95ZWVbdGhhdC5lbXBsb3llZV9pbmRleF0uaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFRlYW1DaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kVGltZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXN0ZV9saXN0LnRyeV90aW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFzdGVfbGlzdC50cnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVG9GZWVkYmFjaygpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9mZWVkYmFjaz9pZD0nICsgdGhpcy50cnlfZGlzaGVzX2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0VXNlck1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXN0ZV9saXN0LmNsaWVudF9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRVc2VyTmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXN0ZV9saXN0LmNsaWVudF9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TWVhbChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXN0ZV9saXN0LndlZGRpbmdfbWVhbF9zZWN0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TWVhbERhdGUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFzdGVfbGlzdC50cnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEFkZHJlc3MoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFzdGVfbGlzdC50cnlfYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dFNlc3Npb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFzdGVfbGlzdC50cnlfc2Vzc2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1lYWxUaW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc3RlX2xpc3QudHJ5X3RpbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRQZXJzb25OdW0oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFzdGVfbGlzdC50cnlfcGVyc29uX251bWJlciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIHRoYXQudXNlcl9pZCA9IG9wdGlvbnMudXNlcl9pZDtcbiAgICAgICAgICAgIHRoYXQudHJ5X2Rpc2hlc19pZCA9IG9wdGlvbnMudHJ5X2Rpc2hlc19pZDtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBycS5nZXQoXCJnZXRUcnlEaXNoZXNEZXRhaWxcIiwge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50YXN0ZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHJ5X2Rpc2hlc19pZDogdGhhdC50cnlfZGlzaGVzX2lkLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQudXNlcl9pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBycS5nZXQoXCJnZXRMb2dpbmVyVGVhbUVtcGxveWVlXCIsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfZW1wbG95ZWUgPSByZXN1bHQuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==