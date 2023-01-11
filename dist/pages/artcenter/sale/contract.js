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
                        that.display_create_button = false;
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/contract'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidXNlcl9pZCIsImNvbnRyYWN0X21vZGVsIiwiY29udHJhY3RfaW5kZXgiLCJjb250cmFjdF9saXN0IiwiZGlzcGxheV9jcmVhdGVfYnV0dG9uIiwibWV0aG9kcyIsImdvVG9Db250cmFjdERldGFpbCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaG9vc2VDb250cmFjdCIsImRldGFpbCIsInZhbHVlIiwiY29udHJhY3RfbmFtZSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJ1c2VyIiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zYWxlIiwibGVuZ3RoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsbUJBQU8sTUFGSjtBQUdIQyxvQkFBUSxJQUhMO0FBSUhDLHFCQUFTLENBQUMsQ0FKUDtBQUtIQyw0QkFBZ0IsRUFMYjtBQU1IQyw0QkFBZ0IsQ0FOYjtBQU9IQywyQkFBZSxJQVBaO0FBUUhDLG1DQUF1QjtBQVJwQixTLFFBVVBDLE8sR0FBVTtBQUNOQyw4QkFETSw4QkFDYUMsQ0FEYixFQUNnQjtBQUNsQixvQkFBSUMsS0FBR0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEVBQS9CO0FBQ0FHLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLHVCQUF1QixLQUFLYixPQUE1QixHQUFvQyxlQUFwQyxHQUFvRFE7QUFEN0MsaUJBQWhCO0FBR0gsYUFOSztBQU9OTSwwQkFQTSwwQkFPU1AsQ0FQVCxFQU9ZO0FBQ2QscUJBQUtMLGNBQUwsR0FBc0JLLEVBQUVRLE1BQUYsQ0FBU0MsS0FBL0I7QUFDQUwsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUsscUJBQXFCLEtBQUtiLE9BQTFCLEdBQW9DLGlCQUFwQyxHQUF3RCxpQkFBeEQsR0FBNEUsS0FBS0MsY0FBTCxDQUFvQixLQUFLQyxjQUF6QixFQUF5Q2U7QUFEOUcsaUJBQWhCO0FBR0g7QUFaSyxTOzs7OzsrQkFtQkhDLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLckIsT0FBTCxHQUFla0IsUUFBUVYsRUFBdkI7QUFDQWMsOEJBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUMxQixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS3BCLGNBQUwsR0FBc0J1QixPQUFPNUIsSUFBUCxDQUFZQSxJQUFsQztBQUNBO0FBQ0E7QUFDQTtBQUNBeUIseUJBQUtJLE1BQUw7QUFDSDtBQVB5QixhQUE5QixFQVFHO0FBQ0N6Qix5QkFBU3FCLEtBQUtyQjtBQURmLGFBUkg7QUFXSDs7O2lDQUNRO0FBQ0wsZ0JBQUlxQixPQUFPLElBQVg7QUFDQUMsOEJBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN0QixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS2xCLGFBQUwsR0FBcUJxQixPQUFPNUIsSUFBUCxDQUFZQSxJQUFqQztBQUNBLHdCQUFJOEIsT0FBT2YsZUFBS2dCLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWDtBQUNBLHdCQUFHRCxLQUFLRSxPQUFMLElBQWNQLEtBQUtsQixhQUFMLENBQW1CMEIsTUFBbkIsR0FBMEIsQ0FBM0MsRUFBNkM7QUFDekNSLDZCQUFLakIscUJBQUwsR0FBMkIsS0FBM0I7QUFDSDtBQUNEaUIseUJBQUtJLE1BQUw7QUFDSDtBQVJxQixhQUExQixFQVNHO0FBQ0N6Qix5QkFBU3FCLEtBQUtyQjtBQURmLGFBVEg7QUFZSDs7OztFQW5FOEJXLGVBQUttQixJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImNvbnRyYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IEMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflkIjlkIzkv6Hmga8nLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgdXNlcl9pZDogLTEsXG4gICAgICAgICAgICBjb250cmFjdF9tb2RlbDogW10sXG4gICAgICAgICAgICBjb250cmFjdF9pbmRleDogMCxcbiAgICAgICAgICAgIGNvbnRyYWN0X2xpc3Q6IG51bGwsXG4gICAgICAgICAgICBkaXNwbGF5X2NyZWF0ZV9idXR0b246IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGdvVG9Db250cmFjdERldGFpbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2NvbnRyYWN0ZGV0YWlsP2lkPScgKyB0aGlzLnVzZXJfaWQrJyZjb250cmFjdF9pZD0nK2lkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hvb3NlQ29udHJhY3QoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJhY3RfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjb250cmFjdGVkaXQ/aWQ9JyArIHRoaXMudXNlcl9pZCArICcmaXNfY3JlYXRlPXRydWUnICsgJyZjb250cmFjdF9uYW1lPScgKyB0aGlzLmNvbnRyYWN0X21vZGVsW3RoaXMuY29udHJhY3RfaW5kZXhdLmNvbnRyYWN0X25hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBnb1RvQ3JlYXRlQ29udHJhY3QoKSB7XG4gICAgICAgICAgICAvLyAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdXJsOiAnY29udHJhY3RlZGl0P2lkPScgKyB0aGlzLnVzZXJfaWQgKyAnJmlzX2NyZWF0ZT10cnVlJ1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LnVzZXJfaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRDb250cmFjdFR5cGVMaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250cmFjdF9tb2RlbCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQuY29udHJhY3RfbW9kZWwuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoYXQuY29udHJhY3RfbW9kZWwucHVzaChlbGVtZW50LmNvbnRyYWN0X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhhdC51c2VyX2lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0Q29udHJhY3RMaXN0Jywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jb250cmFjdF9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHVzZXIuaXNfc2FsZSYmdGhhdC5jb250cmFjdF9saXN0Lmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZGlzcGxheV9jcmVhdGVfYnV0dG9uPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQudXNlcl9pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==