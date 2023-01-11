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
            title: '存放申请',
            isback: true,
            gift_info: null,
            id: -1,
            teams_info: null,
            teams_index: 0,
            teams_rand: [],
            is_create: false,
            is_submited: false
        }, _this.methods = {
            bindTeamChange: function bindTeamChange(e) {
                this.teams_index = e.detail.value;
            },
            bindInputClientMobile: function bindInputClientMobile(e) {
                this.gift_info.client_mobile = e.detail.value;
            },
            bindInputClientName: function bindInputClientName(e) {
                this.gift_info.client_name = e.detail.value;
            },
            bindInputArriveTime: function bindInputArriveTime(e) {
                this.gift_info.arrive_time = e.detail.value;
            },
            bindInputMark: function bindInputMark(e) {
                this.gift_info.remark = e.detail.value;
            },
            submit: function submit() {
                var that = this;
                if (this.is_submited) {
                    return false;
                }
                this.is_submited = true;
                _request2.default.get('giftDepostApply', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                        that.$apply();
                    }
                }, {
                    order_id: that.id,
                    client_mobile: that.gift_info.client_mobile,
                    client_name: that.gift_info.client_name,
                    arrive_time: that.gift_info.arrive_time,
                    remark: that.gift_info.remark,
                    team_id: that.teams_info[that.teams_index].id
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
            var is_create = options.is_create;
            if (is_create == 'yes') {
                this.is_create = true;
                _request2.default.get('requestGiftSaveData', {
                    200: function _(result) {
                        that.gift_info = result.data.data;
                        that.$apply();
                    }
                }, {
                    order_id: that.id
                });
            } else {
                _request2.default.get('getGiftSaveInfo', {
                    200: function _(result) {
                        that.gift_info = result.data.data;
                        that.$apply();
                    }
                }, {
                    save_id: that.id
                });
            }
            _request2.default.get("getTeams", {
                200: function _(result) {
                    that.teams_info = result.data.data;
                    that.teams_info.forEach(function (element) {
                        that.teams_rand.push(element.team_name);
                    });
                    that.$apply();
                }
            }, {
                team_type: 2
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/depot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG90LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiZ2lmdF9pbmZvIiwiaWQiLCJ0ZWFtc19pbmZvIiwidGVhbXNfaW5kZXgiLCJ0ZWFtc19yYW5kIiwiaXNfY3JlYXRlIiwiaXNfc3VibWl0ZWQiLCJtZXRob2RzIiwiYmluZFRlYW1DaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRDbGllbnRNb2JpbGUiLCJjbGllbnRfbW9iaWxlIiwiYmluZElucHV0Q2xpZW50TmFtZSIsImNsaWVudF9uYW1lIiwiYmluZElucHV0QXJyaXZlVGltZSIsImFycml2ZV90aW1lIiwiYmluZElucHV0TWFyayIsInJlbWFyayIsInN1Ym1pdCIsInRoYXQiLCJycSIsImdldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsIm9yZGVyX2lkIiwidGVhbV9pZCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJyZXN1bHQiLCJzYXZlX2lkIiwiZm9yRWFjaCIsInB1c2giLCJlbGVtZW50IiwidGVhbV9uYW1lIiwidGVhbV90eXBlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMs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O0FBUUg7QUFDRHFCLDhCQUFHQyxHQUFILENBQU8sVUFBUCxFQUFtQjtBQUNmLHFCQUFLLG1CQUFVO0FBQ1hGLHlCQUFLbkIsVUFBTCxHQUFrQitCLE9BQU9yQyxJQUFQLENBQVlBLElBQTlCO0FBQ0F5Qix5QkFBS25CLFVBQUwsQ0FBZ0JpQyxPQUFoQixDQUF3QixtQkFBVztBQUMvQmQsNkJBQUtqQixVQUFMLENBQWdCZ0MsSUFBaEIsQ0FBcUJDLFFBQVFDLFNBQTdCO0FBQ0gscUJBRkQ7QUFHQWpCLHlCQUFLTSxNQUFMO0FBQ0g7QUFQYyxhQUFuQixFQVFHO0FBQ0NZLDJCQUFXO0FBRFosYUFSSDtBQVdIOzs7aUNBQ1EsQ0FBRTs7OztFQWhHb0JmLGVBQUtnQixJOztrQkFBbkJuRCxLIiwiZmlsZSI6ImRlcG90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5a2Y5pS+55Sz6K+3JyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGdpZnRfaW5mbzogbnVsbCxcbiAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgIHRlYW1zX2luZm86IG51bGwsXG4gICAgICAgICAgICB0ZWFtc19pbmRleDogMCxcbiAgICAgICAgICAgIHRlYW1zX3JhbmQ6IFtdLFxuICAgICAgICAgICAgaXNfY3JlYXRlOmZhbHNlLFxuICAgICAgICAgICAgaXNfc3VibWl0ZWQ6ZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRUZWFtQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW1zX2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0Q2xpZW50TW9iaWxlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdpZnRfaW5mby5jbGllbnRfbW9iaWxlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0Q2xpZW50TmFtZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0X2luZm8uY2xpZW50X25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRBcnJpdmVUaW1lKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdpZnRfaW5mby5hcnJpdmVfdGltZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1hcmsoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2lmdF9pbmZvLnJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc19zdWJtaXRlZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc19zdWJtaXRlZD10cnVlO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZ2lmdERlcG9zdEFwcGx5Jywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X21vYmlsZTogdGhhdC5naWZ0X2luZm8uY2xpZW50X21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50X25hbWU6IHRoYXQuZ2lmdF9pbmZvLmNsaWVudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhcnJpdmVfdGltZTogdGhhdC5naWZ0X2luZm8uYXJyaXZlX3RpbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbWFyazogdGhhdC5naWZ0X2luZm8ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICB0ZWFtX2lkOiB0aGF0LnRlYW1zX2luZm9bdGhhdC50ZWFtc19pbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICAgICAgICAgIGxldCBpc19jcmVhdGUgPSBvcHRpb25zLmlzX2NyZWF0ZTtcbiAgICAgICAgICAgIGlmIChpc19jcmVhdGUgPT0gJ3llcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2NyZWF0ZT10cnVlO1xuICAgICAgICAgICAgICAgIHJxLmdldCgncmVxdWVzdEdpZnRTYXZlRGF0YScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5naWZ0X2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2dldEdpZnRTYXZlSW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5naWZ0X2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZV9pZDogdGhhdC5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBycS5nZXQoXCJnZXRUZWFtc1wiLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zX2luZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGVhbXNfcmFuZC5wdXNoKGVsZW1lbnQudGVhbV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRlYW1fdHlwZTogMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=