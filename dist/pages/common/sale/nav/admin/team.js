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
            isopacity: true,
            title: '团队管理',
            isback: true,
            user_list: null
        }, _this.methods = {
            goToDepart: function goToDepart(e) {
                var id = e.currentTarget.dataset.id;
                _wepy2.default.navigateTo({ url: 'department?team_id=' + id });
            },
            toggleTeams: function toggleTeams(e) {
                var index = e.currentTarget.dataset.index;
                this.user_list[index].show_teams = !this.user_list[index].show_teams;
            },
            submit: function submit() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var that = this;
            that.user = _wepy2.default.getStorageSync('user');
            _request2.default.get('getTeamsManageList', {
                200: function _(result) {
                    that.user_list = result.data.data;
                    that.user_list.forEach(function (element) {
                        element.show_teams = false;
                    });
                    that.$apply();
                }
            });
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/nav/admin/team'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJ1c2VyX2xpc3QiLCJtZXRob2RzIiwiZ29Ub0RlcGFydCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGVUZWFtcyIsImluZGV4Iiwic2hvd190ZWFtcyIsInN1Ym1pdCIsIm9wdGlvbnMiLCJ0aGF0IiwidXNlciIsImdldFN0b3JhZ2VTeW5jIiwicnEiLCJnZXQiLCJyZXN1bHQiLCJmb3JFYWNoIiwiZWxlbWVudCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsdUJBQVc7QUFKUixTLFFBTVBDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNPO0FBQ1Qsb0JBQUlDLEtBQUdELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUEvQjtBQUNBRywrQkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLHdCQUFzQkwsRUFBN0IsRUFBaEI7QUFDSCxhQUpLO0FBS05NLHVCQUxNLHVCQUtNUCxDQUxOLEVBS1M7QUFDWCxvQkFBSVEsUUFBTVIsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JLLEtBQWxDO0FBQ0EscUJBQUtYLFNBQUwsQ0FBZVcsS0FBZixFQUFzQkMsVUFBdEIsR0FBaUMsQ0FBQyxLQUFLWixTQUFMLENBQWVXLEtBQWYsRUFBc0JDLFVBQXhEO0FBQ0gsYUFSSztBQVNOQyxrQkFUTSxvQkFTRyxDQUNSO0FBVkssUzs7Ozs7K0JBWUhDLE8sRUFBUztBQUNaLGdCQUFJQyxPQUFPLElBQVg7QUFDQUEsaUJBQUtDLElBQUwsR0FBWVQsZUFBS1UsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0FDLDhCQUFHQyxHQUFILENBQU8sb0JBQVAsRUFBNkI7QUFDekIscUJBQUssbUJBQVU7QUFDWEoseUJBQUtmLFNBQUwsR0FBaUJvQixPQUFPeEIsSUFBUCxDQUFZQSxJQUE3QjtBQUNBbUIseUJBQUtmLFNBQUwsQ0FBZXFCLE9BQWYsQ0FBdUIsbUJBQVc7QUFDOUJDLGdDQUFRVixVQUFSLEdBQXFCLEtBQXJCO0FBQ0gscUJBRkQ7QUFHQUcseUJBQUtRLE1BQUw7QUFDSDtBQVB3QixhQUE3QjtBQVNIOzs7aUNBQ1EsQ0FBRTs7OztFQXZDb0JoQixlQUFLaUIsSTs7a0JBQW5CbkMsSyIsImZpbGUiOiJ0ZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICflm6LpmJ/nrqHnkIYnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgdXNlcl9saXN0OiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1RvRGVwYXJ0KGUpe1xuICAgICAgICAgICAgICAgIGxldCBpZD1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICdkZXBhcnRtZW50P3RlYW1faWQ9JytpZCB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVUZWFtcyhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4PWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcl9saXN0W2luZGV4XS5zaG93X3RlYW1zPSF0aGlzLnVzZXJfbGlzdFtpbmRleF0uc2hvd190ZWFtcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGF0LnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFRlYW1zTWFuYWdlTGlzdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXNlcl9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VyX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2hvd190ZWFtcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19