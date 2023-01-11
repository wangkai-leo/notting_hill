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
            title: '试菜反馈',
            isback: true,
            id: -1,
            page_info: null,
            menu_info: [],
            cool_arr: [],
            menu_info_rand: [],
            cool_arr_rand: [],
            cool_index: 0,
            hot_index: 0,
            hot_arr: [],
            hot_arr_rand: [],
            product_arr: [],
            product_arr_rand: [],
            multiArrayProduct: [['新增', '赠送'], []],
            satisf_rand: ['一般', '满意'],
            satisf_index: 0,
            user: null,

            department: ''
        }, _this.methods = {
            bindInputRemark: function bindInputRemark(e) {
                this.page_info.remark = e.detail.value;
            },
            submit: function submit() {
                var that = this;
                var p_info = '';
                if (that.menu_info.cool) {
                    that.menu_info.cool.forEach(function (element) {
                        p_info += element.id + ',';
                    });
                }
                if (that.menu_info.hot) {
                    that.menu_info.hot.forEach(function (element) {
                        p_info += element.id + ',';
                    });
                }
                _request2.default.get('writeFeedback', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    satisfaction: that.page_info.satisfaction, //满意度
                    try_dishes_id: that.id, //试菜id
                    package_info: p_info, //包
                    remark: that.page_info.remark //备注
                });
            },
            confrim: function confrim() {
                var that = this;
                _request2.default.get('confirmTryDishesFeedback', {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    try_dishes_id: that.id //试菜id
                });
            },
            bindSatisfyChange: function bindSatisfyChange(e) {
                var index = this.satisf_index = e.detail.value;
                this.page_info.satisfaction = this.satisf_rand[index];
            },
            bindAddProduct: function bindAddProduct(e) {
                var values = e.detail.value;
                var that = this;
                _request2.default.get('addProduct', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '更改成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.getTryDishesFeedback();
                    }
                }, {
                    type: 1, //试菜 新增菜
                    try_dishes_id: that.page_info.id,
                    change_remark: that.multiArrayProduct[0][values[0]], //备注
                    product_str: that.product_arr[values[1]].id //新菜品的id
                });
            },
            bindCoolChange: function bindCoolChange(e) {
                var value = e.detail.value;
                var id = e.currentTarget.dataset.id;
                var that = this;
                _request2.default.get('editProduct', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '更改成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.getTryDishesFeedback();
                    }
                }, {
                    order_product_id: id, //旧菜品的id
                    supplier_product_id: that.cool_arr[value].id //新菜品的id
                });
            },
            bindHotChange: function bindHotChange(e) {
                var value = e.detail.value;
                var id = e.currentTarget.dataset.id;
                var that = this;
                _request2.default.get('editProduct', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '更改成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.getTryDishesFeedback();
                    }
                }, {
                    order_product_id: id, //旧菜品的id
                    supplier_product_id: that.hot_arr[value].id //新菜品的id
                });
            },
            backMenu: function backMenu(e) {
                var id = e.currentTarget.dataset.id;
                var index = e.currentTarget.dataset.index;
                var session = e.currentTarget.dataset.session;
                var that = this;
                _request2.default.get('delProduct', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '恢复成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.getTryDishesFeedback();
                        that.$apply();
                    }
                }, {
                    product_id: id,
                    is_delete: 0
                });
            },
            deleteMenu: function deleteMenu(e) {
                var id = e.currentTarget.dataset.id;
                var index = e.currentTarget.dataset.index;
                var session = e.currentTarget.dataset.session;
                var that = this;
                _request2.default.get('delProduct', {
                    200: function _(result) {
                        _wepy2.default.showToast({
                            title: '删除成功', //提示的内容,
                            icon: 'none', //图标,
                            duration: 2000, //延迟时间,
                            mask: true, //显示透明蒙层，防止触摸穿透,
                            success: function success(res) {}
                        });
                        that.getTryDishesFeedback();
                        that.$apply();
                    }
                }, {
                    product_id: id,
                    is_delete: 1
                });
            },
            addNew: function addNew() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getTryDishesFeedback',
        value: function getTryDishesFeedback() {
            var that = this;
            _request2.default.get('getTryDishesFeedback', {
                200: function _(result) {
                    that.page_info = result.data.data;
                    that.menu_info = result.data.data.package_info;
                    if (that.user.is_excute && (!that.page_info.satisfaction || that.page_info.satisfaction == '-')) {
                        that.page_info.satisfaction = that.satisf_rand[that.satisf_index];
                    }
                    that.$apply();
                }
            }, {
                try_dishes_id: that.id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            that.user = _wepy2.default.getStorageSync('user');
            that.department = _wepy2.default.getStorageSync('office_line');
            that.getTryDishesFeedback();
            _request2.default.get('getPackageProduct', {
                200: function _(result) {
                    that.hot_arr = result.data.data;
                    that.hot_arr.forEach(function (element) {
                        that.hot_arr_rand.push(element.product_name);
                    });
                    that.$apply();
                }
            }, {
                product_sub_category: '热菜'
            });
            _request2.default.get('getPackageProduct', {
                200: function _(result) {
                    that.cool_arr = result.data.data;
                    that.cool_arr.forEach(function (element) {
                        that.cool_arr_rand.push(element.product_name);
                    });
                    that.$apply();
                }
            }, {
                product_sub_category: '冷菜'
            });

            if (that.department == 'artcenter') {
                _request2.default.get('getAddFreePackageProduct', {
                    200: function _(result) {
                        that.product_arr = result.data.data;
                        that.product_arr.forEach(function (element) {
                            that.product_arr_rand.push(element.product_name);
                        });
                        that.multiArrayProduct[1] = that.product_arr_rand;
                        that.$apply();
                    }
                }, {});
            } else if (that.department == 'marry') {
                _request2.default.get('getPackageProduct', {
                    200: function _(result) {
                        that.product_arr = result.data.data;
                        that.product_arr.forEach(function (element) {
                            that.product_arr_rand.push(element.product_name);
                        });
                        that.multiArrayProduct[1] = that.product_arr_rand;
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/feedback'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiaWQiLCJwYWdlX2luZm8iLCJtZW51X2luZm8iLCJjb29sX2FyciIsIm1lbnVfaW5mb19yYW5kIiwiY29vbF9hcnJfcmFuZCIsImNvb2xfaW5kZXgiLCJob3RfaW5kZXgiLCJob3RfYXJyIiwiaG90X2Fycl9yYW5kIiwicHJvZHVjdF9hcnIiLCJwcm9kdWN0X2Fycl9yYW5kIiwibXVsdGlBcnJheVByb2R1Y3QiLCJzYXRpc2ZfcmFuZCIsInNhdGlzZl9pbmRleCIsInVzZXIiLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJyZW1hcmsiLCJkZXRhaWwiLCJ2YWx1ZSIsInN1Ym1pdCIsInRoYXQiLCJwX2luZm8iLCJjb29sIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJob3QiLCJycSIsImdldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNhdGlzZmFjdGlvbiIsInRyeV9kaXNoZXNfaWQiLCJwYWNrYWdlX2luZm8iLCJjb25mcmltIiwiYmluZFNhdGlzZnlDaGFuZ2UiLCJpbmRleCIsImJpbmRBZGRQcm9kdWN0IiwidmFsdWVzIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJnZXRUcnlEaXNoZXNGZWVkYmFjayIsInR5cGUiLCJjaGFuZ2VfcmVtYXJrIiwicHJvZHVjdF9zdHIiLCJiaW5kQ29vbENoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3JkZXJfcHJvZHVjdF9pZCIsInN1cHBsaWVyX3Byb2R1Y3RfaWQiLCJiaW5kSG90Q2hhbmdlIiwiYmFja01lbnUiLCJzZXNzaW9uIiwiJGFwcGx5IiwicHJvZHVjdF9pZCIsImlzX2RlbGV0ZSIsImRlbGV0ZU1lbnUiLCJhZGROZXciLCJyZXN1bHQiLCJpc19leGN1dGUiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9zdWJfY2F0ZWdvcnkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlCQUFLQSxhQURILEVBQ1E7QUFDVkMsb0JBQVFBO0FBRk4sUyxRQUlOQyxJLEdBQU87QUFDSEMsdUJBQVcsSUFEUjtBQUVIQyxtQkFBTyxNQUZKO0FBR0hDLG9CQUFRLElBSEw7QUFJSEMsZ0JBQUksQ0FBQyxDQUpGO0FBS0hDLHVCQUFXLElBTFI7QUFNSEMsdUJBQVcsRUFOUjtBQU9IQyxzQkFBVSxFQVBQO0FBUUhDLDRCQUFnQixFQVJiO0FBU0hDLDJCQUFlLEVBVFo7QUFVSEMsd0JBQVksQ0FWVDtBQVdIQyx1QkFBVyxDQVhSO0FBWUhDLHFCQUFTLEVBWk47QUFhSEMsMEJBQWMsRUFiWDtBQWNIQyx5QkFBYSxFQWRWO0FBZUhDLDhCQUFrQixFQWZmO0FBZ0JIQywrQkFBbUIsQ0FDZixDQUFDLElBQUQsRUFBTyxJQUFQLENBRGUsRUFFZixFQUZlLENBaEJoQjtBQW9CSEMseUJBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQXBCVjtBQXFCSEMsMEJBQWMsQ0FyQlg7QUFzQkhDLGtCQUFNLElBdEJIOztBQXdCSEMsd0JBQVc7QUF4QlIsUyxRQTBCUEMsTyxHQUFVO0FBQ05DLDJCQURNLDJC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VztBQUNoQ0gsaUNBQUtiLGdCQUFMLENBQXNCNEQsSUFBdEIsQ0FBMkIzQyxRQUFRNEMsWUFBbkM7QUFDSCx5QkFGRDtBQUdBaEQsNkJBQUtaLGlCQUFMLENBQXVCLENBQXZCLElBQTRCWSxLQUFLYixnQkFBakM7QUFDQWEsNkJBQUtvQyxNQUFMO0FBQ0g7QUFSOEIsaUJBQW5DLEVBU0csRUFUSDtBQVVELGFBWEQsTUFXTSxJQUFHcEMsS0FBS1IsVUFBTCxJQUFpQixPQUFwQixFQUE0QjtBQUNoQ2Msa0NBQUdDLEdBQUgsQ0FBTyxtQkFBUCxFQUE0QjtBQUMxQix5QkFBSyxtQkFBVTtBQUNYUCw2QkFBS2QsV0FBTCxHQUFtQnVELE9BQU9yRSxJQUFQLENBQVlBLElBQS9CO0FBQ0E0Qiw2QkFBS2QsV0FBTCxDQUFpQmlCLE9BQWpCLENBQXlCLG1CQUFXO0FBQ2hDSCxpQ0FBS2IsZ0JBQUwsQ0FBc0I0RCxJQUF0QixDQUEyQjNDLFFBQVE0QyxZQUFuQztBQUNILHlCQUZEO0FBR0FoRCw2QkFBS1osaUJBQUwsQ0FBdUIsQ0FBdkIsSUFBNEJZLEtBQUtiLGdCQUFqQztBQUNBYSw2QkFBS29DLE1BQUw7QUFDSDtBQVJ5QixpQkFBNUIsRUFTQyxFQVREO0FBVUQ7QUFDSjs7O2lDQUNRLENBQUU7Ozs7RUFoUW9CNUIsZUFBSzBDLEk7O2tCQUFuQnJGLEsiLCJmaWxlIjoiZmVlZGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfor5Xoj5zlj43ppognLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgcGFnZV9pbmZvOiBudWxsLFxuICAgICAgICAgICAgbWVudV9pbmZvOiBbXSxcbiAgICAgICAgICAgIGNvb2xfYXJyOiBbXSxcbiAgICAgICAgICAgIG1lbnVfaW5mb19yYW5kOiBbXSxcbiAgICAgICAgICAgIGNvb2xfYXJyX3JhbmQ6IFtdLFxuICAgICAgICAgICAgY29vbF9pbmRleDogMCxcbiAgICAgICAgICAgIGhvdF9pbmRleDogMCxcbiAgICAgICAgICAgIGhvdF9hcnI6IFtdLFxuICAgICAgICAgICAgaG90X2Fycl9yYW5kOiBbXSxcbiAgICAgICAgICAgIHByb2R1Y3RfYXJyOiBbXSxcbiAgICAgICAgICAgIHByb2R1Y3RfYXJyX3JhbmQ6IFtdLFxuICAgICAgICAgICAgbXVsdGlBcnJheVByb2R1Y3Q6IFtcbiAgICAgICAgICAgICAgICBbJ+aWsOWinicsICfotaDpgIEnXSxcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNhdGlzZl9yYW5kOiBbJ+S4gOiIrCcsICfmu6HmhI8nXSxcbiAgICAgICAgICAgIHNhdGlzZl9pbmRleDogMCxcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG5cbiAgICAgICAgICAgIGRlcGFydG1lbnQ6JydcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGJpbmRJbnB1dFJlbWFyayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlX2luZm8ucmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgcF9pbmZvID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQubWVudV9pbmZvLmNvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tZW51X2luZm8uY29vbC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcF9pbmZvICs9IGVsZW1lbnQuaWQgKyAnLCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm1lbnVfaW5mby5ob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tZW51X2luZm8uaG90LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwX2luZm8gKz0gZWxlbWVudC5pZCArICcsJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnEuZ2V0KCd3cml0ZUZlZWRiYWNrJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHNhdGlzZmFjdGlvbjogdGhhdC5wYWdlX2luZm8uc2F0aXNmYWN0aW9uLCAvL+a7oeaEj+W6plxuICAgICAgICAgICAgICAgICAgICB0cnlfZGlzaGVzX2lkOiB0aGF0LmlkLCAvL+ivleiPnGlkXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2VfaW5mbzogcF9pbmZvLCAvL+WMhVxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IHRoYXQucGFnZV9pbmZvLnJlbWFyaywgLy/lpIfms6hcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZyaW0oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnY29uZmlybVRyeURpc2hlc0ZlZWRiYWNrJywge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyeV9kaXNoZXNfaWQ6IHRoYXQuaWQsIC8v6K+V6I+caWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRTYXRpc2Z5Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNhdGlzZl9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZV9pbmZvLnNhdGlzZmFjdGlvbiA9IHRoaXMuc2F0aXNmX3JhbmRbaW5kZXhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRBZGRQcm9kdWN0KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnYWRkUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0VHJ5RGlzaGVzRmVlZGJhY2soKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLCAvL+ivleiPnCDmlrDlop7oj5xcbiAgICAgICAgICAgICAgICAgICAgdHJ5X2Rpc2hlc19pZDogdGhhdC5wYWdlX2luZm8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZV9yZW1hcms6IHRoYXQubXVsdGlBcnJheVByb2R1Y3RbMF1bdmFsdWVzWzBdXSwgLy/lpIfms6hcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9zdHI6IHRoYXQucHJvZHVjdF9hcnJbdmFsdWVzWzFdXS5pZCAvL+aWsOiPnOWTgeeahGlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQ29vbENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZWRpdFByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaUueaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFRyeURpc2hlc0ZlZWRiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfcHJvZHVjdF9pZDogaWQsIC8v5pen6I+c5ZOB55qEaWRcbiAgICAgICAgICAgICAgICAgICAgc3VwcGxpZXJfcHJvZHVjdF9pZDogdGhhdC5jb29sX2Fyclt2YWx1ZV0uaWQgLy/mlrDoj5zlk4HnmoRpZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEhvdENoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZWRpdFByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaUueaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFRyeURpc2hlc0ZlZWRiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfcHJvZHVjdF9pZDogaWQsIC8v5pen6I+c5ZOB55qEaWRcbiAgICAgICAgICAgICAgICAgICAgc3VwcGxpZXJfcHJvZHVjdF9pZDogdGhhdC5ob3RfYXJyW3ZhbHVlXS5pZCAvL+aWsOiPnOWTgeeahGlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrTWVudShlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb24gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zZXNzaW9uO1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoJ2RlbFByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aBouWkjeaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFRyeURpc2hlc0ZlZWRiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBpc19kZWxldGU6IDAsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVNZW51KGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlc3Npb247XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJxLmdldCgnZGVsUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0VHJ5RGlzaGVzRmVlZGJhY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzX2RlbGV0ZTogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkTmV3KCkge31cbiAgICAgICAgfTtcbiAgICAgICAgZ2V0VHJ5RGlzaGVzRmVlZGJhY2soKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2dldFRyeURpc2hlc0ZlZWRiYWNrJywge1xuICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1lbnVfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGEucGFja2FnZV9pbmZvO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC51c2VyLmlzX2V4Y3V0ZSAmJiAoIXRoYXQucGFnZV9pbmZvLnNhdGlzZmFjdGlvbiB8fCB0aGF0LnBhZ2VfaW5mby5zYXRpc2ZhY3Rpb24gPT0gJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlX2luZm8uc2F0aXNmYWN0aW9uID0gdGhhdC5zYXRpc2ZfcmFuZFt0aGF0LnNhdGlzZl9pbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0cnlfZGlzaGVzX2lkOiB0aGF0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICAgICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICAgICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgICAgICAgICAgIHRoYXQuZ2V0VHJ5RGlzaGVzRmVlZGJhY2soKTtcbiAgICAgICAgICAgIHJxLmdldCgnZ2V0UGFja2FnZVByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmhvdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmhvdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaG90X2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICfng63oj5wnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcnEuZ2V0KCdnZXRQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY29vbF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvb2xfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmNvb2xfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogJ+WGt+iPnCdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKHRoYXQuZGVwYXJ0bWVudD09J2FydGNlbnRlcicpe1xuICAgICAgICAgICAgICBycS5nZXQoJ2dldEFkZEZyZWVQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnJfcmFuZC5wdXNoKGVsZW1lbnQucHJvZHVjdF9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm11bHRpQXJyYXlQcm9kdWN0WzFdID0gdGhhdC5wcm9kdWN0X2Fycl9yYW5kO1xuICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgfWVsc2UgaWYodGhhdC5kZXBhcnRtZW50PT0nbWFycnknKXtcbiAgICAgICAgICAgICAgcnEuZ2V0KCdnZXRQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm11bHRpQXJyYXlQcm9kdWN0WzFdID0gdGhhdC5wcm9kdWN0X2Fycl9yYW5kO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uU2hvdygpIHt9XG4gICAgfVxuIl19