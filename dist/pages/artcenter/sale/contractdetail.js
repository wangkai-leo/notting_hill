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
            title: '合同详情',
            isback: true,
            order_info: null,
            id: -1,
            edit_base: false,
            show_img_arr: [],
            contract_info: {},
            review: null,
            log: null,
            review_reason: '',
            contract_id: ''
        }, _this.methods = {
            viewCheck: function viewCheck(e) {
                _wepy2.default.previewImage({
                    current: this.show_img_arr[e.currentTarget.dataset.index],
                    urls: this.show_img_arr //需要预览的图片链接列表,
                });
            },

            // edit() {
            //     wepy.navigateTo({
            //         url: 'contractedit?id=' + this.id+'&contract_id'+that.contract_id
            //     });
            // },
            goToContractEdit: function goToContractEdit() {
                _wepy2.default.navigateTo({
                    url: 'contractedit?id=' + this.id + '&contract_id=' + this.contract_id
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
            that.contract_id = options.contract_id;

            console.log(that.contract_id);
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var that = this;
            _request2.default.get('getContractInfo', {
                200: function _(result) {
                    that.contract_info = result.data.data.contract;
                    that.review_reason = result.data.data.review_reason;
                    that.review = result.data.data.review;
                    that.log = result.data.data.log;
                    that.show_img_arr = that.contract_info.contract_proof;
                    that.$apply();
                }
            }, {
                user_id: that.id,
                contract_id: that.contract_id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/contractdetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0ZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwib3JkZXJfaW5mbyIsImlkIiwiZWRpdF9iYXNlIiwic2hvd19pbWdfYXJyIiwiY29udHJhY3RfaW5mbyIsInJldmlldyIsImxvZyIsInJldmlld19yZWFzb24iLCJjb250cmFjdF9pZCIsIm1ldGhvZHMiLCJ2aWV3Q2hlY2siLCJlIiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwidXJscyIsImdvVG9Db250cmFjdEVkaXQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInRoYXQiLCJjb25zb2xlIiwicnEiLCJnZXQiLCJyZXN1bHQiLCJjb250cmFjdCIsImNvbnRyYWN0X3Byb29mIiwiJGFwcGx5IiwidXNlcl9pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsd0JBQVksSUFKVDtBQUtIQyxnQkFBSSxDQUFDLENBTEY7QUFNSEMsdUJBQVcsS0FOUjtBQU9IQywwQkFBYyxFQVBYO0FBUUhDLDJCQUFlLEVBUlo7QUFTSEMsb0JBQVEsSUFUTDtBQVVIQyxpQkFBSyxJQVZGO0FBV0hDLDJCQUFlLEVBWFo7QUFZSEMseUJBQVk7QUFaVCxTLFFBY1BDLE8sR0FBVTtBQUNOQyxxQkFETSxxQkFDSUMsQ0FESixFQUNNO0FBQ1JDLCtCQUFLQyxZQUFMLENBQWtCO0FBQ2RDLDZCQUFTLEtBQUtYLFlBQUwsQ0FBa0JRLEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUExQyxDQURLO0FBRWRDLDBCQUFNLEtBQUtmLFlBRkcsQ0FFVTtBQUZWLGlCQUFsQjtBQUlILGFBTks7O0FBT047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBZ0IsNEJBWk0sOEJBWWE7QUFDZlAsK0JBQUtRLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUsscUJBQXFCLEtBQUtwQixFQUExQixHQUE2QixlQUE3QixHQUE2QyxLQUFLTztBQUQzQyxpQkFBaEI7QUFHSDtBQWhCSyxTOzs7OzsrQkFxQkhjLE8sRUFBUztBQUNaQSxzQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxnQkFBSUcsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLeEIsRUFBTCxHQUFVcUIsUUFBUXJCLEVBQWxCO0FBQ0F3QixpQkFBS2pCLFdBQUwsR0FBaUJjLFFBQVFkLFdBQXpCOztBQUVBa0Isb0JBQVFwQixHQUFSLENBQVltQixLQUFLakIsV0FBakI7QUFDSDs7O2lDQUNRO0FBQ0wsZ0JBQUlpQixPQUFLLElBQVQ7QUFDQUUsOEJBQUdDLEdBQUgsQ0FBTyxpQkFBUCxFQUEwQjtBQUN0QixxQkFBSyxtQkFBVTtBQUNYSCx5QkFBS3JCLGFBQUwsR0FBcUJ5QixPQUFPakMsSUFBUCxDQUFZQSxJQUFaLENBQWlCa0MsUUFBdEM7QUFDQUwseUJBQUtsQixhQUFMLEdBQXFCc0IsT0FBT2pDLElBQVAsQ0FBWUEsSUFBWixDQUFpQlcsYUFBdEM7QUFDQWtCLHlCQUFLcEIsTUFBTCxHQUFjd0IsT0FBT2pDLElBQVAsQ0FBWUEsSUFBWixDQUFpQlMsTUFBL0I7QUFDQW9CLHlCQUFLbkIsR0FBTCxHQUFXdUIsT0FBT2pDLElBQVAsQ0FBWUEsSUFBWixDQUFpQlUsR0FBNUI7QUFDQW1CLHlCQUFLdEIsWUFBTCxHQUFvQnNCLEtBQUtyQixhQUFMLENBQW1CMkIsY0FBdkM7QUFDQU4seUJBQUtPLE1BQUw7QUFDSDtBQVJxQixhQUExQixFQVNHO0FBQ0NDLHlCQUFTUixLQUFLeEIsRUFEZjtBQUVDTyw2QkFBWWlCLEtBQUtqQjtBQUZsQixhQVRIO0FBYUg7Ozs7RUFsRThCSSxlQUFLc0IsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJjb250cmFjdGRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuICAgIGltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG4gICAgaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuICAgIGltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuICAgIGltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbiAgICBpbXBvcnQgZGF0IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9kYXRlJztcbiAgICBpbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG4gICAgaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG4gICAgaW1wb3J0IGhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAn5ZCI5ZCM6K+m5oOFJyxcbiAgICAgICAgICAgIGlzYmFjazogdHJ1ZSxcbiAgICAgICAgICAgIG9yZGVyX2luZm86IG51bGwsXG4gICAgICAgICAgICBpZDogLTEsXG4gICAgICAgICAgICBlZGl0X2Jhc2U6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd19pbWdfYXJyOiBbXSxcbiAgICAgICAgICAgIGNvbnRyYWN0X2luZm86IHt9LFxuICAgICAgICAgICAgcmV2aWV3OiBudWxsLFxuICAgICAgICAgICAgbG9nOiBudWxsLFxuICAgICAgICAgICAgcmV2aWV3X3JlYXNvbjogJycsXG4gICAgICAgICAgICBjb250cmFjdF9pZDonJ1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdmlld0NoZWNrKGUpe1xuICAgICAgICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogdGhpcy5zaG93X2ltZ19hcnJbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLnNob3dfaW1nX2FyciAvL+mcgOimgemihOiniOeahOWbvueJh+mTvuaOpeWIl+ihqCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBlZGl0KCkge1xuICAgICAgICAgICAgLy8gICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHVybDogJ2NvbnRyYWN0ZWRpdD9pZD0nICsgdGhpcy5pZCsnJmNvbnRyYWN0X2lkJyt0aGF0LmNvbnRyYWN0X2lkXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgZ29Ub0NvbnRyYWN0RWRpdCgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjb250cmFjdGVkaXQ/aWQ9JyArIHRoaXMuaWQrJyZjb250cmFjdF9pZD0nK3RoaXMuY29udHJhY3RfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBiaW5kSW5wdXRHcm9vbUlkQ2FyZChlKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jb250cmFjdF9pbmZvLmdyb29tX2lkX2NhcmQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH07XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhhdC5jb250cmFjdF9pZD1vcHRpb25zLmNvbnRyYWN0X2lkO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNvbnRyYWN0X2lkKTtcbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdnZXRDb250cmFjdEluZm8nLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0X2luZm8gPSByZXN1bHQuZGF0YS5kYXRhLmNvbnRyYWN0O1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnJldmlld19yZWFzb24gPSByZXN1bHQuZGF0YS5kYXRhLnJldmlld19yZWFzb247XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmV2aWV3ID0gcmVzdWx0LmRhdGEuZGF0YS5yZXZpZXc7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubG9nID0gcmVzdWx0LmRhdGEuZGF0YS5sb2c7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd19pbWdfYXJyID0gdGhhdC5jb250cmFjdF9pbmZvLmNvbnRyYWN0X3Byb29mO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LmlkLFxuICAgICAgICAgICAgICAgIGNvbnRyYWN0X2lkOnRoYXQuY29udHJhY3RfaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=