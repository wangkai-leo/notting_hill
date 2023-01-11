'use strict';

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
            title: '客资信息',
            isback: true,
            customer: null,
            id: -1,
            four_cate: [],
            checked_data: false
        }, _this.methods = {
            modalBindaconfirm: function modalBindaconfirm() {
                var that = this;
                var pindex = that.checked_data.pindex;
                var index = that.checked_data.index;
                var sindex = that.checked_data.sindex;
                _request2.default.get('finishProcessFourcate', {
                    200: function _(result) {
                        that.four_cate[index].children[sindex].is_finish = 1;
                        that.checked_data = false;
                        that.$apply();
                    }
                }, {
                    process_id: that.checked_data.value_key,
                    order_id: that.customer.order_id
                });
            },
            modalBindcancel: function modalBindcancel() {
                this.checked_data = false;
            },
            checkedFourChange: function checkedFourChange(e) {
                var that = this;
                var value_key = e.currentTarget.dataset.key;
                var index = e.currentTarget.dataset.index;
                var sindex = e.currentTarget.dataset.sindex;
                that.checked_data = {
                    // value: value,
                    value_key: value_key,
                    index: index,
                    sindex: sindex,
                    is_four: true
                };
            },
            changeTheFourStatus: function changeTheFourStatus(e) {
                var index = e.currentTarget.dataset.index;
            },
            toggleFourGroup: function toggleFourGroup(e) {
                var index = e.currentTarget.dataset.index;
                if (this.four_cate[index].show) {
                    this.four_cate[index].show = false;
                } else {
                    this.four_cate[index]['show'] = true;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getOrderInfo',
        value: function getOrderInfo() {
            var that = this;
            _request2.default.get('getOneOrderInfo', {
                200: function _(result) {
                    that.customer = result.data.data;
                    that.four_cate = result.data.four_cate;
                    that.$apply();
                }
            }, {
                user_id: that.id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.getOrderInfo();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/checkfour'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrZm91ci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImN1c3RvbWVyIiwiaWQiLCJmb3VyX2NhdGUiLCJjaGVja2VkX2RhdGEiLCJtZXRob2RzIiwibW9kYWxCaW5kYWNvbmZpcm0iLCJ0aGF0IiwicGluZGV4IiwiaW5kZXgiLCJzaW5kZXgiLCJycSIsImdldCIsImNoaWxkcmVuIiwiaXNfZmluaXNoIiwiJGFwcGx5IiwicHJvY2Vzc19pZCIsInZhbHVlX2tleSIsIm9yZGVyX2lkIiwibW9kYWxCaW5kY2FuY2VsIiwiY2hlY2tlZEZvdXJDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJrZXkiLCJpc19mb3VyIiwiY2hhbmdlVGhlRm91clN0YXR1cyIsInRvZ2dsZUZvdXJHcm91cCIsInNob3ciLCJyZXN1bHQiLCJ1c2VyX2lkIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsImdldE9yZGVySW5mbyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxpQkFBS0EsYUFESCxFQUNRO0FBQ1ZDLG9CQUFRQTtBQUZOLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHVCQUFX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Q1I7Ozs7RUFsRjhCQyxlQUFLQyxJOztrQkFBbkI5QyxLIiwiZmlsZSI6ImNoZWNrZm91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5a6i6LWE5L+h5oGvJyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgZm91cl9jYXRlOiBbXSxcbiAgICAgICAgICAgIGNoZWNrZWRfZGF0YTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG1vZGFsQmluZGFjb25maXJtKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgcGluZGV4ID0gdGhhdC5jaGVja2VkX2RhdGEucGluZGV4O1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoYXQuY2hlY2tlZF9kYXRhLmluZGV4O1xuICAgICAgICAgICAgICAgIGxldCBzaW5kZXggPSB0aGF0LmNoZWNrZWRfZGF0YS5zaW5kZXg7XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCdmaW5pc2hQcm9jZXNzRm91cmNhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZm91cl9jYXRlW2luZGV4XS5jaGlsZHJlbltzaW5kZXhdLmlzX2ZpbmlzaCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNoZWNrZWRfZGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NfaWQ6IHRoYXQuY2hlY2tlZF9kYXRhLnZhbHVlX2tleSxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuY3VzdG9tZXIub3JkZXJfaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsQmluZGNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRfZGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrZWRGb3VyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlX2tleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgc2luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2luZGV4O1xuICAgICAgICAgICAgICAgIHRoYXQuY2hlY2tlZF9kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX2tleTogdmFsdWVfa2V5LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHNpbmRleDogc2luZGV4LFxuICAgICAgICAgICAgICAgICAgICBpc19mb3VyOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZVRoZUZvdXJTdGF0dXMoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUZvdXJHcm91cChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm91cl9jYXRlW2luZGV4XS5zaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm91cl9jYXRlW2luZGV4XS5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3VyX2NhdGVbaW5kZXhdWydzaG93J10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0T3JkZXJJbmZvKCkge1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRPbmVPcmRlckluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmN1c3RvbWVyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5mb3VyX2NhdGUgPSByZXN1bHQuZGF0YS5mb3VyX2NhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICB0aGF0LmdldE9yZGVySW5mbygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=