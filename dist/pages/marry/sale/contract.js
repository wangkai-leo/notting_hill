'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _config = require('./../../../common/config.js');

var _config2 = _interopRequireDefault(_config);

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
            title: '合同信息',
            isback: true,
            user_id: -1,
            contract_model: [],
            contract_index: 0,
            contract_list: null,
            display_create_button: true
        }, _this.methods = {
            goToContractDetail: function goToContractDetail(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({
                    url: 'contractdetail?id=' + this.user_id + '&contract_id=' + id
                });
            },
            chooseContract: function chooseContract(e) {
                this.contract_index = e.detail.value;
                _wepy2.default.navigateTo({
                    url: 'contractedit?id=' + this.user_id + '&is_create=true' + '&contract_name=' + this.contract_model[this.contract_index].contract_name
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.user_id = options.id;
            _request2.default.get('getContractTypeList', {
                200: function _(result) {
                    that.contract_model = result.data.data;
                    // that.contract_model.forEach(element => {
                    //     that.contract_model.push(element.contract_name);
                    // });
                    that.$apply();
                }
            }, {
                user_id: that.user_id
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getContractList', {
                200: function _(result) {
                    that.contract_list = result.data.data;
                    var user = _wepy2.default.getStorageSync('user');
                    if (user.is_sale && that.contract_list.length > 0) {
                        // that.display_create_button=false;
                    }
                    that.$apply();
                }
            }, {
                user_id: that.user_id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/contract'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidXNlcl9pZCIsImNvbnRyYWN0X21vZGVsIiwiY29udHJhY3RfaW5kZXgiLCJjb250cmFjdF9saXN0IiwiZGlzcGxheV9jcmVhdGVfYnV0dG9uIiwibWV0aG9kcyIsImdvVG9Db250cmFjdERldGFpbCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaG9vc2VDb250cmFjdCIsImRldGFpbCIsInZhbHVlIiwiY29udHJhY3RfbmFtZSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJ1c2VyIiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zYWxlIiwibGVuZ3RoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsbUJBQU8sTUFGSjtBQUdIQyxvQkFBUSxJQUhMO0FBSUhDLHFCQUFTLENBQUMsQ0FKUDtBQUtIQyw0QkFBZ0IsRUFMYjtBQU1IQyw0QkFBZ0IsQ0FOYjtBQU9IQywyQkFBZSxJQVBaO0FBUUhDLG1DQUF1QjtBQVJwQixTLFFBVVBDLE8sR0FBVTtBQUNOQyw4QkFETSw4QkFDYUMsQ0FEYixFQUNnQjtBQUNsQixvQkFBSUMsS0FBR0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEVBQS9CO0FBQ0FHLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHVCQUF1QixLQUFLYixPQUE1QixHQUFvQyxlQUFwQyxHQUFvRFE7QUFEN0MsaUJBQWhCO0FBR0gsYUFOSztBQU9OTSwwQkFQTSwwQkFPU1AsQ0FQVCxFQU9ZO0FBQ2QscUJBQUtMLGNBQUwsR0FBc0JLLEVBQUVRLE1BQUYsQ0FBU0MsS0FBL0I7QUFDQUwsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUsscUJBQXFCLEtBQUtiLE9BQTFCLEdBQW9DLGlCQUFwQyxHQUF3RCxpQkFBeEQsR0FBNEUsS0FBS0MsY0FBTCxDQUFvQixLQUFLQyxjQUF6QixFQUF5Q2U7QUFEOUcsaUJBQWhCO0FBR0g7QUFaSyxTOzs7OzsrQkFtQkhDLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLckIsT0FBTCxHQUFla0IsUUFBUVYsRUFBdkI7QUFDQWMsOEJBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS3BCLGNBQUwsR0FBc0J1QixPQUFPNUIsSUFBUCxDQUFZQSxJQUFsQztBQUNBO0FBQ0E7QUFDQTtBQUNBeUIseUJBQUtJLE1BQUw7QUFDSDtBQVB5QixhQUE5QixFQVFHO0FBQ0N6Qix5QkFBU3FCLEtBQUtyQjtBQURmLGFBUkg7QUFXSDs7O2lDQUNRO0FBQ0wsZ0JBQUlxQixPQUFPLElBQVg7QUFDQUMsOEJBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN0QixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS2xCLGFBQUwsR0FBcUJxQixPQUFPNUIsSUFBUCxDQUFZQSxJQUFqQztBQUNBLHdCQUFJOEIsT0FBT2YsZUFBS2dCLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWDtBQUNBLHdCQUFHRCxLQUFLRSxPQUFMLElBQWNQLEtBQUtsQixhQUFMLENBQW1CMEIsTUFBbkIsR0FBMEIsQ0FBM0MsRUFBNkM7QUFDekM7QUFDSDtBQUNEUix5QkFBS0ksTUFBTDtBQUNIO0FBUnFCLGFBQTFCLEVBU0c7QUFDQ3pCLHlCQUFTcUIsS0FBS3JCO0FBRGYsYUFUSDtBQVlIOzs7O0VBbkU4QlcsZUFBS21CLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiY29udHJhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbiAgICBpbXBvcnQgQyBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbiAgICBpbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZSc7XG4gICAgaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG4gICAgaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuICAgIGltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jc3MnO1xuICAgIGltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ+WQiOWQjOS/oeaBrycsXG4gICAgICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgICAgICB1c2VyX2lkOiAtMSxcbiAgICAgICAgICAgIGNvbnRyYWN0X21vZGVsOiBbXSxcbiAgICAgICAgICAgIGNvbnRyYWN0X2luZGV4OiAwLFxuICAgICAgICAgICAgY29udHJhY3RfbGlzdDogbnVsbCxcbiAgICAgICAgICAgIGRpc3BsYXlfY3JlYXRlX2J1dHRvbjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub0NvbnRyYWN0RGV0YWlsKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQ9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnY29udHJhY3RkZXRhaWw/aWQ9JyArIHRoaXMudXNlcl9pZCsnJmNvbnRyYWN0X2lkPScraWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaG9vc2VDb250cmFjdChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cmFjdF9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2NvbnRyYWN0ZWRpdD9pZD0nICsgdGhpcy51c2VyX2lkICsgJyZpc19jcmVhdGU9dHJ1ZScgKyAnJmNvbnRyYWN0X25hbWU9JyArIHRoaXMuY29udHJhY3RfbW9kZWxbdGhpcy5jb250cmFjdF9pbmRleF0uY29udHJhY3RfbmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGdvVG9DcmVhdGVDb250cmFjdCgpIHtcbiAgICAgICAgICAgIC8vICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgLy8gICAgICAgICB1cmw6ICdjb250cmFjdGVkaXQ/aWQ9JyArIHRoaXMudXNlcl9pZCArICcmaXNfY3JlYXRlPXRydWUnXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQudXNlcl9pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBycS5nZXQoJ2dldENvbnRyYWN0VHlwZUxpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0X21vZGVsID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC5jb250cmFjdF9tb2RlbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhhdC5jb250cmFjdF9tb2RlbC5wdXNoKGVsZW1lbnQuY29udHJhY3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LnVzZXJfaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRDb250cmFjdExpc3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0X2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlci5pc19zYWxlJiZ0aGF0LmNvbnRyYWN0X2xpc3QubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC5kaXNwbGF5X2NyZWF0ZV9idXR0b249ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC51c2VyX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19