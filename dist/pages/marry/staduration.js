'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _request = require('./../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _validate = require('./../../common/utils/validate.js');

var _validate2 = _interopRequireDefault(_validate);

var _storage = require('./../../common/utils/storage.js');

var _storage2 = _interopRequireDefault(_storage);

var _date = require('./../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _file = require('./../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

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
            title: '统计时间',
            isback: true,
            start_date: '',
            end_date: '',
            is_server: false,
            employee_list: null,
            servers_name: '全部',
            servers_ids: '',
            show_server_check: false,
            is_pay: false
        }, _this.methods = {
            reset: function reset() {
                this.servers_ids = '';
                this.servers_name = '全部';
                this.show_server_check = false;
            },
            sure: function sure() {
                var pur_name = '';
                var pur_ids = '';
                this.employee_list.forEach(function (element) {
                    element.children.forEach(function (it) {
                        if (it.checked) {
                            if (!pur_ids) {
                                pur_ids = it.id;
                                pur_name = it.employee_name;
                            } else {
                                pur_ids += ',' + it.id;
                                pur_name += ',' + it.employee_name;
                            }
                        }
                    });
                });
                this.servers_ids = pur_ids;
                this.servers_name = pur_name;
                this.show_server_check = false;
            },
            bindToggleChecked: function bindToggleChecked(e) {
                var index = e.currentTarget.dataset.index;
                var sindex = e.currentTarget.dataset.sindex;
                console.log(index);
                console.log(sindex);
                if (this.employee_list[index].children[sindex].checked) {
                    this.employee_list[index].children[sindex].checked = false;
                } else {
                    this.employee_list[index].children[sindex].checked = true;
                }
            },
            displayServers: function displayServers() {
                this.show_server_check = true;
            },
            save: function save() {
                var that = this;
                if (that.is_server) {
                    _wepy2.default.setStorageSync('pick_date', {
                        start_date: that.start_date,
                        end_date: that.end_date,
                        servers_ids: that.servers_ids
                    });
                } else {
                    _wepy2.default.setStorageSync('pick_date', {
                        start_date: that.start_date,
                        end_date: that.end_date,
                        is_pay: that.is_pay
                    });
                }
                _wepy2.default.navigateBack({
                    delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                });
            },
            bindStartChange: function bindStartChange(e) {
                this.start_date = e.detail.value;
            },
            bindEndChange: function bindEndChange(e) {
                this.end_date = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            this.is_pay = options.pay;
            this.start_date = options.start_date;
            this.end_date = options.end_date;
            this.is_pay = options.pay;
            var user = _wepy2.default.getStorageSync('user');
            if (user.is_server || user.is_server_offline) {
                that.is_server = true;
                _request2.default.get('getLoginerServerTeamEmployee', {
                    200: function _(result) {
                        that.employee_list = result.data.employee_list;
                        // array.forEach(element => {

                        // });
                        that.$apply();
                    }
                }, {});
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/staduration'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWR1cmF0aW9uLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaXNfc2VydmVyIiwiZW1wbG95ZWVfbGlzdCIsInNlcnZlcnNfbmFtZSIsInNlcnZlcnNfaWRzIiwic2hvd19zZXJ2ZXJfY2hlY2siLCJpc19wYXkiLCJtZXRob2RzIiwicmVzZXQiLCJzdXJlIiwicHVyX25hbWUiLCJwdXJfaWRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsIml0IiwiY2hlY2tlZCIsImlkIiwiZW1wbG95ZWVfbmFtZSIsImJpbmRUb2dnbGVDaGVja2VkIiwiZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheVNlcnZlcnMiLCJzYXZlIiwidGhhdCIsIndlcHkiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiYmluZFN0YXJ0Q2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kRW5kQ2hhbmdlIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInBheSIsInVzZXIiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NlcnZlcl9vZmZsaW5lIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIs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c0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IEcgZnJvbSAnLi4vLi4vY29tbW9uL2dsb2JhbCc7XG4gICAgaW1wb3J0IHJxIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbiAgICBpbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG4gICAgaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy92YWxpZGF0ZSc7XG4gICAgaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuICAgIGltcG9ydCBkYXQgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuICAgIGltcG9ydCBmaWxlIGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9maWxlJztcbiAgICBcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfnu5/orqHml7bpl7QnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogJycsXG4gICAgICAgICAgICBlbmRfZGF0ZTogJycsXG4gICAgICAgICAgICBpc19zZXJ2ZXI6IGZhbHNlLFxuICAgICAgICAgICAgZW1wbG95ZWVfbGlzdDogbnVsbCxcbiAgICAgICAgICAgIHNlcnZlcnNfbmFtZTogJ+WFqOmDqCcsXG4gICAgICAgICAgICBzZXJ2ZXJzX2lkczogJycsXG4gICAgICAgICAgICBzaG93X3NlcnZlcl9jaGVjazogZmFsc2UsXG4gICAgICAgICAgICBpc19wYXk6ZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyc19pZHMgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlcnNfbmFtZSA9ICflhajpg6gnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd19zZXJ2ZXJfY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdXJlKCkge1xuICAgICAgICAgICAgICAgIGxldCBwdXJfbmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBwdXJfaWRzID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHVyX2lkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJfaWRzID0gaXQuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cl9uYW1lID0gaXQuZW1wbG95ZWVfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJfaWRzICs9ICcsJyArIGl0LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJfbmFtZSArPSAnLCcgKyBpdC5lbXBsb3llZV9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJzX2lkcyA9IHB1cl9pZHM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJzX25hbWUgPSBwdXJfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfc2VydmVyX2NoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFRvZ2dsZUNoZWNrZWQoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCBzaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNpbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW1wbG95ZWVfbGlzdFtpbmRleF0uY2hpbGRyZW5bc2luZGV4XS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVfbGlzdFtpbmRleF0uY2hpbGRyZW5bc2luZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9saXN0W2luZGV4XS5jaGlsZHJlbltzaW5kZXhdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNwbGF5U2VydmVycygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dfc2VydmVyX2NoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5pc19zZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygncGlja19kYXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogdGhhdC5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IHRoYXQuZW5kX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJzX2lkczogdGhhdC5zZXJ2ZXJzX2lkc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdwaWNrX2RhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiB0aGF0LnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogdGhhdC5lbmRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX3BheTp0aGF0LmlzX3BheVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFN0YXJ0Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kRW5kQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZF9kYXRlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmlzX3BheT1vcHRpb25zLnBheTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRfZGF0ZSA9IG9wdGlvbnMuc3RhcnRfZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZW5kX2RhdGUgPSBvcHRpb25zLmVuZF9kYXRlO1xuICAgICAgICAgICAgdGhpcy5pc19wYXk9b3B0aW9ucy5wYXk7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgICAgIGlmICh1c2VyLmlzX3NlcnZlciB8fCB1c2VyLmlzX3NlcnZlcl9vZmZsaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5pc19zZXJ2ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZ2V0TG9naW5lclNlcnZlclRlYW1FbXBsb3llZScsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7fVxuICAgIH1cbiJdfQ==