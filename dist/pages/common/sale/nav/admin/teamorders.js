'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../../../../common/global.js');

var _global2 = _interopRequireDefault(_global);

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
            isback: true,
            isopacity: true,
            title: '客资',
            loading: true,
            is_hide: true,
            userList: null,
            user: null,
            user_act: 0 //0 客服 1销售 策划
        }, _this.methods = {
            goToExcuteDetail: function goToExcuteDetail(e) {
                var id = e.currentTarget.dataset.id;
                var tid = e.currentTarget.dataset.tid;
                _wepy2.default.navigateTo({
                    url: '/pages/common/execute/task?order_id_str=' + tid + '&id=' + id
                });
            },
            goToDetail: function goToDetail(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({
                    url: '/pages/common/sale/customer?id=' + id
                });
            },
            toggleDisplay: function toggleDisplay(e) {
                var index = e.currentTarget.dataset.index;
                this.userList[index].is_hide = !this.userList[index].is_hide;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.loading = false;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getTeamOrder', {
                200: function _(result) {
                    that.userList = result.data.data;
                    that.$apply();
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/teamorders'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW1vcmRlcnMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJsb2FkaW5nIiwiaXNfaGlkZSIsInVzZXJMaXN0IiwidXNlciIsInVzZXJfYWN0IiwibWV0aG9kcyIsImdvVG9FeGN1dGVEZXRhaWwiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRpZCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29Ub0RldGFpbCIsInRvZ2dsZURpc3BsYXkiLCJpbmRleCIsIm9wdGlvbnMiLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLG9CQUFRLElBREw7QUFFSEMsdUJBQVcsSUFGUjtBQUdIQyxtQkFBTyxJQUhKO0FBSUhDLHFCQUFTLElBSk47QUFLSEMscUJBQVMsSUFMTjtBQU1IQyxzQkFBVSxJQU5QO0FBT0hDLGtCQUFNLElBUEg7QUFRSEMsc0JBQVUsQ0FSUCxDQVFVO0FBUlYsUyxRQVVQQyxPLEdBQVU7QUFDTkMsNEJBRE0sNEJBQ1dDLENBRFgsRUFDYztBQUNoQixvQkFBSUMsS0FBS0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEVBQWpDO0FBQ0Esb0JBQUlHLE1BQU1KLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxHQUFsQztBQUNBQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyw2Q0FBNkNILEdBQTdDLEdBQW1ELE1BQW5ELEdBQTRESDtBQURyRCxpQkFBaEI7QUFHSCxhQVBLO0FBUU5PLHNCQVJNLHNCQVFLUixDQVJMLEVBUVE7QUFDVixvQkFBSUMsS0FBS0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLEVBQWpDO0FBQ0FJLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLLG9DQUFvQ047QUFEN0IsaUJBQWhCO0FBR0gsYUFiSztBQWNOUSx5QkFkTSx5QkFjUVQsQ0FkUixFQWNXO0FBQ2Isb0JBQUlVLFFBQVFWLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTyxLQUFwQztBQUNBLHFCQUFLZixRQUFMLENBQWNlLEtBQWQsRUFBcUJoQixPQUFyQixHQUErQixDQUFDLEtBQUtDLFFBQUwsQ0FBY2UsS0FBZCxFQUFxQmhCLE9BQXJEO0FBQ0g7QUFqQkssUzs7Ozs7K0JBbUJIaUIsTyxFQUFTO0FBQ1osZ0JBQUlDLE9BQU8sSUFBWDtBQUNBQSxpQkFBS25CLE9BQUwsR0FBZSxLQUFmO0FBQ0g7OztpQ0FDUTtBQUNMLGdCQUFJbUIsT0FBTyxJQUFYO0FBQ0FDLDhCQUFHQyxHQUFILENBQU8sY0FBUCxFQUF1QjtBQUNuQixxQkFBSyxtQkFBVTtBQUNYRix5QkFBS2pCLFFBQUwsR0FBZ0JvQixPQUFPMUIsSUFBUCxDQUFZQSxJQUE1QjtBQUNBdUIseUJBQUtJLE1BQUw7QUFDSDtBQUprQixhQUF2QjtBQU1IOzs7O0VBakQ4QlgsZUFBS1ksSTs7a0JBQW5CbkMsSyIsImZpbGUiOiJ0ZWFtb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflrqLotYQnLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGlzX2hpZGU6IHRydWUsXG4gICAgICAgICAgICB1c2VyTGlzdDogbnVsbCxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICB1c2VyX2FjdDogMCwgLy8wIOWuouacjSAx6ZSA5ZSuIOetluWIklxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Ub0V4Y3V0ZURldGFpbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL2V4ZWN1dGUvdGFzaz9vcmRlcl9pZF9zdHI9JyArIHRpZCArICcmaWQ9JyArIGlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub0RldGFpbChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL2N1c3RvbWVyP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZURpc3BsYXkoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckxpc3RbaW5kZXhdLmlzX2hpZGUgPSAhdGhpcy51c2VyTGlzdFtpbmRleF0uaXNfaGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0VGVhbU9yZGVyJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==