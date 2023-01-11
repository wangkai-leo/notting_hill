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
            page_info: null,
            id: -1,

            hot_arr: [],
            cool_arr: [],

            hot_arr_rand: [],
            cool_arr_rand: [],
            cool_index: 0,
            hot_index: 0,

            product_arr: [],
            product_arr_rand: [],

            readonly: false,

            multiArrayProduct: [['新增', '赠送'], []]
        }, _this.methods = {
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
                        that.getWeddingMenuInfo();
                    }
                }, {
                    order_id: that.id,
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
                        that.getWeddingMenuInfo();
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
                        that.getWeddingMenuInfo();
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
                        that.getWeddingMenuInfo();
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
                        that.getWeddingMenuInfo();
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
        key: 'getWeddingMenuInfo',
        value: function getWeddingMenuInfo() {
            var that = this;
            _request2.default.get('getWeddingMenuInfo', {
                200: function _(result) {
                    that.page_info = result.data.data;
                    that.$apply();
                }
            }, {
                order_id: that.id
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.order_id;
            that.readonly = options.readonly == 'yes' ? true : false;
            that.getWeddingMenuInfo();

            _request2.default.get('getAddFreePackageProduct', {
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

            _request2.default.get('getAddFreePackageProduct', {
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
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/ordermenu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybWVudS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInBhZ2VfaW5mbyIsImlkIiwiaG90X2FyciIsImNvb2xfYXJyIiwiaG90X2Fycl9yYW5kIiwiY29vbF9hcnJfcmFuZCIsImNvb2xfaW5kZXgiLCJob3RfaW5kZXgiLCJwcm9kdWN0X2FyciIsInByb2R1Y3RfYXJyX3JhbmQiLCJyZWFkb25seSIsIm11bHRpQXJyYXlQcm9kdWN0IiwibWV0aG9kcyIsImJpbmRBZGRQcm9kdWN0IiwiZSIsInZhbHVlcyIsImRldGFpbCIsInZhbHVlIiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiZ2V0V2VkZGluZ01lbnVJbmZvIiwib3JkZXJfaWQiLCJjaGFuZ2VfcmVtYXJrIiwicHJvZHVjdF9zdHIiLCJiaW5kQ29vbENoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3JkZXJfcHJvZHVjdF9pZCIsInN1cHBsaWVyX3Byb2R1Y3RfaWQiLCJiaW5kSG90Q2hhbmdlIiwiYmFja01lbnUiLCJpbmRleCIsInNlc3Npb24iLCIkYXBwbHkiLCJwcm9kdWN0X2lkIiwiaXNfZGVsZXRlIiwiZGVsZXRlTWVudSIsImFkZE5ldyIsInJlc3VsdCIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJmb3JFYWNoIiwicHVzaCIsImVsZW1lbnQiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3N1Yl9jYXRlZ29yeSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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Uyx5QkFBS3NCLE1BQUw7QUFDSDtBQVI4QixhQUFuQyxFQVNHLEVBVEg7QUFhSDs7O2lDQUNRLENBRVI7Ozs7RUEvTThCbkIsZUFBS2lDLEk7O2tCQUFuQmpFLEsiLCJmaWxlIjoib3JkZXJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBHIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9nbG9iYWwnO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGUnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IGRhdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgZmlsZSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZSc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICflrqLotYTkv6Hmga8nLFxuICAgICAgICBpc2JhY2s6IHRydWUsXG4gICAgICAgIHBhZ2VfaW5mbzogbnVsbCxcbiAgICAgICAgaWQ6IC0xLFxuXG4gICAgICAgIGhvdF9hcnI6IFtdLFxuICAgICAgICBjb29sX2FycjogW10sXG5cbiAgICAgICAgaG90X2Fycl9yYW5kOiBbXSxcbiAgICAgICAgY29vbF9hcnJfcmFuZDogW10sXG4gICAgICAgIGNvb2xfaW5kZXg6IDAsXG4gICAgICAgIGhvdF9pbmRleDogMCxcblxuICAgICAgICBwcm9kdWN0X2FycjogW10sXG4gICAgICAgIHByb2R1Y3RfYXJyX3JhbmQ6IFtdLFxuXG4gICAgICAgIHJlYWRvbmx5OmZhbHNlLFxuXG4gICAgICAgIG11bHRpQXJyYXlQcm9kdWN0OiBbXG4gICAgICAgICAgICBbJ+aWsOWinicsICfotaDpgIEnXSxcbiAgICAgICAgICAgIFtdXG4gICAgICAgIF1cbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGJpbmRBZGRQcm9kdWN0KGUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnYWRkUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgICAgICAgICAgY2hhbmdlX3JlbWFyazogdGhhdC5tdWx0aUFycmF5UHJvZHVjdFswXVt2YWx1ZXNbMF1dLCAvL+Wkh+azqFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rfc3RyOiB0aGF0LnByb2R1Y3RfYXJyW3ZhbHVlc1sxXV0uaWQgLy/mlrDoj5zlk4HnmoRpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYmluZENvb2xDaGFuZ2UoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZWRpdFByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaUueaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFdlZGRpbmdNZW51SW5mbygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX3Byb2R1Y3RfaWQ6IGlkLCAvL+aXp+iPnOWTgeeahGlkXG4gICAgICAgICAgICAgICAgc3VwcGxpZXJfcHJvZHVjdF9pZDogdGhhdC5jb29sX2Fyclt2YWx1ZV0uaWQgLy/mlrDoj5zlk4HnmoRpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYmluZEhvdENoYW5nZShlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcnEuZ2V0KCdlZGl0UHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfcHJvZHVjdF9pZDogaWQsIC8v5pen6I+c5ZOB55qEaWRcbiAgICAgICAgICAgICAgICBzdXBwbGllcl9wcm9kdWN0X2lkOiB0aGF0LmhvdF9hcnJbdmFsdWVdLmlkIC8v5paw6I+c5ZOB55qEaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tNZW51KGUpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlc3Npb247XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBycS5nZXQoJ2RlbFByb2R1Y3QnLCB7XG4gICAgICAgICAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aBouWkjeaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFdlZGRpbmdNZW51SW5mbygpXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGlzX2RlbGV0ZTogMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZU1lbnUoZSkge1xuICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIGxldCBzZXNzaW9uID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2Vzc2lvbjtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJxLmdldCgnZGVsUHJvZHVjdCcsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogaWQsXG4gICAgICAgICAgICAgICAgaXNfZGVsZXRlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZE5ldygpIHtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldFdlZGRpbmdNZW51SW5mbygpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBycS5nZXQoJ2dldFdlZGRpbmdNZW51SW5mbycsIHtcbiAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGF0LmlkID0gb3B0aW9ucy5vcmRlcl9pZDtcbiAgICAgICAgdGhhdC5yZWFkb25seSA9IG9wdGlvbnMucmVhZG9ubHk9PSd5ZXMnP3RydWU6ZmFsc2U7XG4gICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKCk7XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBycS5nZXQoJ2dldEFkZEZyZWVQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LmhvdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgdGhhdC5ob3RfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaG90X2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICfng63oj5wnXG4gICAgICAgIH0pXG5cbiAgICAgICAgcnEuZ2V0KCdnZXRBZGRGcmVlUGFja2FnZVByb2R1Y3QnLCB7XG4gICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5jb29sX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhhdC5jb29sX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvb2xfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICflhrfoj5wnXG4gICAgICAgIH0pXG5cbiAgICAgICAgcnEuZ2V0KCdnZXRBZGRGcmVlUGFja2FnZVByb2R1Y3QnLCB7XG4gICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5wcm9kdWN0X2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhhdC5wcm9kdWN0X2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhhdC5tdWx0aUFycmF5UHJvZHVjdFsxXSA9IHRoYXQucHJvZHVjdF9hcnJfcmFuZDtcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG5cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBvblNob3coKSB7XG5cbiAgICB9XG59XG4iXX0=