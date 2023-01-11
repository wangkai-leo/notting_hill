'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _ntlist = require('./../../components/common/ntlist.js');

var _ntlist2 = _interopRequireDefault(_ntlist);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "ntlista": { "label": "新密码", "v-bind:ntvalue.sync": "form_data", "ntkey": "first_password", "placeholder": "请输入", "v-bind:readonly.sync": "readonly", "nttype": "password" }, "ntlistb": { "label": "再次输入", "v-bind:ntvalue.sync": "form_data", "ntkey": "second_password", "placeholder": "请输入", "v-bind:readonly.sync": "readonly", "nttype": "password" } }, _this.$events = {}, _this.components = {
            css: _css2.default, //样式表
            header: _header2.default,
            ntlista: _ntlist2.default,
            ntlistb: _ntlist2.default
        }, _this.data = {
            isopacity: true,
            title: '修改密码',
            isback: true,
            readonly: false,
            form_data: {
                first_password: '',
                second_password: ''
            }
        }, _this.methods = {
            save: function save() {
                var that = this;
                if (this.form_data.first_password != this.form_data.second_password) {
                    _wepy2.default.showToast({
                        title: '两次输入密码不一致', //提示的内容,
                        icon: 'none', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透,
                        success: function success(res) {}
                    });
                }
                _request2.default.get('updatePassword', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, this.form_data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/changpw'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5ncHcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJudGxpc3RhIiwibnRsaXN0IiwibnRsaXN0YiIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInJlYWRvbmx5IiwiZm9ybV9kYXRhIiwiZmlyc3RfcGFzc3dvcmQiLCJzZWNvbmRfcGFzc3dvcmQiLCJtZXRob2RzIiwic2F2ZSIsInRoYXQiLCJ3ZXB5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJycSIsImdldCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCxXQUFVLEVBQUMsU0FBUSxLQUFULEVBQWUsdUJBQXNCLFdBQXJDLEVBQWlELFNBQVEsZ0JBQXpELEVBQTBFLGVBQWMsS0FBeEYsRUFBOEYsd0JBQXVCLFVBQXJILEVBQWdJLFVBQVMsVUFBekksRUFBdEksRUFBMlIsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFnQix1QkFBc0IsV0FBdEMsRUFBa0QsU0FBUSxpQkFBMUQsRUFBNEUsZUFBYyxLQUExRixFQUFnRyx3QkFBdUIsVUFBdkgsRUFBa0ksVUFBUyxVQUEzSSxFQUFyUyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQSxnQkFGTjtBQUdGQyxxQkFBUUMsZ0JBSE47QUFJRkMscUJBQVFEO0FBSk4sUyxRQU1ORSxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsc0JBQVMsS0FKTjtBQUtIQyx1QkFBVTtBQUNSQyxnQ0FBZSxFQURQO0FBRVJDLGlDQUFnQjtBQUZSO0FBTFAsUyxRQVVQQyxPLEdBQVU7QUFDTkMsZ0JBRE0sa0JBQ0M7QUFDSCxvQkFBSUMsT0FBTyxJQUFYO0FBQ0Esb0JBQUksS0FBS0wsU0FBTCxDQUFlQyxjQUFmLElBQWlDLEtBQUtELFNBQUwsQ0FBZUUsZUFBcEQsRUFBcUU7QUFDakVJLG1DQUFLQyxTQUFMLENBQWU7QUFDWFYsK0JBQU8sV0FESSxFQUNTO0FBQ3BCVyw4QkFBTSxNQUZLLEVBRUc7QUFDZEMsa0NBQVUsSUFIQyxFQUdLO0FBQ2hCQyw4QkFBTSxJQUpLLEVBSUM7QUFDWkMsaUNBQVMsc0JBQU8sQ0FBRTtBQUxQLHFCQUFmO0FBT0g7QUFDREMsa0NBQUdDLEdBQUgsQ0FBTyxnQkFBUCxFQUF5QjtBQUNyQix5QkFBSyxtQkFBVTtBQUNYUCx1Q0FBS1EsWUFBTCxDQUFrQjtBQUNoQkMsbUNBQU8sQ0FEUyxDQUNQO0FBRE8seUJBQWxCO0FBR0g7QUFMb0IsaUJBQXpCLEVBTUcsS0FBS2YsU0FOUjtBQU9IO0FBbkJLLFM7Ozs7OytCQXFCSGdCLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSVgsT0FBTyxJQUFYO0FBQ0g7OztpQ0FDUSxDQUFFOzs7O0VBN0NvQkMsZUFBS2EsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJjaGFuZ3B3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgaW1wb3J0IG50bGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGxpc3QnO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifSxcIm50bGlzdGFcIjp7XCJsYWJlbFwiOlwi5paw5a+G56CBXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJmb3JtX2RhdGFcIixcIm50a2V5XCI6XCJmaXJzdF9wYXNzd29yZFwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpVwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCIsXCJudHR5cGVcIjpcInBhc3N3b3JkXCJ9LFwibnRsaXN0YlwiOntcImxhYmVsXCI6XCLlho3mrKHovpPlhaVcIixcInYtYmluZDpudHZhbHVlLnN5bmNcIjpcImZvcm1fZGF0YVwiLFwibnRrZXlcIjpcInNlY29uZF9wYXNzd29yZFwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpVwiLFwidi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCIsXCJudHR5cGVcIjpcInBhc3N3b3JkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICBudGxpc3RhOm50bGlzdCxcbiAgICAgICAgICAgIG50bGlzdGI6bnRsaXN0XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+S/ruaUueWvhueggScsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICByZWFkb25seTpmYWxzZSxcbiAgICAgICAgICAgIGZvcm1fZGF0YTp7XG4gICAgICAgICAgICAgIGZpcnN0X3Bhc3N3b3JkOicnLFxuICAgICAgICAgICAgICBzZWNvbmRfcGFzc3dvcmQ6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1fZGF0YS5maXJzdF9wYXNzd29yZCAhPSB0aGlzLmZvcm1fZGF0YS5zZWNvbmRfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkuKTmrKHovpPlhaXlr4bnoIHkuI3kuIDoh7QnLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCd1cGRhdGVQYXNzd29yZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuZm9ybV9kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=