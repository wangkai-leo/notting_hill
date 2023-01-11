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

      multiArrayProduct: [['新增', '赠送'], []],

      department: ''
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
      that.department = _wepy2.default.getStorageSync('office_line');

      if (that.department == 'marry') {
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
      } else if (that.department == 'artcenter') {

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
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/marry/sale/ordermenu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybWVudS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInBhZ2VfaW5mbyIsImlkIiwiaG90X2FyciIsImNvb2xfYXJyIiwiaG90X2Fycl9yYW5kIiwiY29vbF9hcnJfcmFuZCIsImNvb2xfaW5kZXgiLCJob3RfaW5kZXgiLCJwcm9kdWN0X2FyciIsInByb2R1Y3RfYXJyX3JhbmQiLCJyZWFkb25seSIsIm11bHRpQXJyYXlQcm9kdWN0IiwiZGVwYXJ0bWVudCIsIm1ldGhvZHMiLCJiaW5kQWRkUHJvZHVjdCIsImUiLCJ2YWx1ZXMiLCJkZXRhaWwiLCJ2YWx1ZSIsInRoYXQiLCJycSIsImdldCIsIndlcHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwic3VjY2VzcyIsImdldFdlZGRpbmdNZW51SW5mbyIsIm9yZGVyX2lkIiwiY2hhbmdlX3JlbWFyayIsInByb2R1Y3Rfc3RyIiwiYmluZENvb2xDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9yZGVyX3Byb2R1Y3RfaWQiLCJzdXBwbGllcl9wcm9kdWN0X2lkIiwiYmluZEhvdENoYW5nZSIsImJhY2tNZW51IiwiaW5kZXgiLCJzZXNzaW9uIiwiJGFwcGx5IiwicHJvZHVjdF9pZCIsImlzX2RlbGV0ZSIsImRlbGV0ZU1lbnUiLCJhZGROZXciLCJyZXN1bHQiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJmb3JFYWNoIiwicHVzaCIsImVsZW1lbnQiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3N1Yl9jYXRlZ29yeSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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LG1CQUFLVixnQkFBTCxDQUFzQjJDLElBQXRCLENBQTJCQyxRQUFRQyxZQUFuQztBQUNELGFBRkQ7QUFHQW5DLGlCQUFLUixpQkFBTCxDQUF1QixDQUF2QixJQUE0QlEsS0FBS1YsZ0JBQWpDO0FBQ0FVLGlCQUFLc0IsTUFBTDtBQUNEO0FBUmdDLFNBQW5DLEVBU0csRUFUSDtBQVlEO0FBRUY7Ozs2QkFDUSxDQUVSOzs7O0VBeFBnQ25CLGVBQUtrQyxJOztrQkFBbkJuRSxLIiwiZmlsZSI6Im9yZGVybWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICflrqLotYTkv6Hmga8nLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBwYWdlX2luZm86IG51bGwsXG4gICAgaWQ6IC0xLFxuXG4gICAgaG90X2FycjogW10sXG4gICAgY29vbF9hcnI6IFtdLFxuXG4gICAgaG90X2Fycl9yYW5kOiBbXSxcbiAgICBjb29sX2Fycl9yYW5kOiBbXSxcbiAgICBjb29sX2luZGV4OiAwLFxuICAgIGhvdF9pbmRleDogMCxcblxuICAgIHByb2R1Y3RfYXJyOiBbXSxcbiAgICBwcm9kdWN0X2Fycl9yYW5kOiBbXSxcblxuICAgIHJlYWRvbmx5OiBmYWxzZSxcblxuICAgIG11bHRpQXJyYXlQcm9kdWN0OiBbXG4gICAgICBbJ+aWsOWinicsICfotaDpgIEnXSxcbiAgICAgIFtdXG4gICAgXSxcblxuICAgIGRlcGFydG1lbnQ6ICcnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZEFkZFByb2R1Y3QoZSkge1xuICAgICAgbGV0IHZhbHVlcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgcnEuZ2V0KCdhZGRQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmm7TmlLnmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LmdldFdlZGRpbmdNZW51SW5mbygpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgb3JkZXJfaWQ6IHRoYXQuaWQsXG4gICAgICAgIGNoYW5nZV9yZW1hcms6IHRoYXQubXVsdGlBcnJheVByb2R1Y3RbMF1bdmFsdWVzWzBdXSwgLy/lpIfms6hcbiAgICAgICAgcHJvZHVjdF9zdHI6IHRoYXQucHJvZHVjdF9hcnJbdmFsdWVzWzFdXS5pZCAvL+aWsOiPnOWTgeeahGlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZENvb2xDaGFuZ2UoZSkge1xuICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHJxLmdldCgnZWRpdFByb2R1Y3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+abtOaUueaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKClcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBvcmRlcl9wcm9kdWN0X2lkOiBpZCwgLy/ml6foj5zlk4HnmoRpZFxuICAgICAgICBzdXBwbGllcl9wcm9kdWN0X2lkOiB0aGF0LmNvb2xfYXJyW3ZhbHVlXS5pZCAvL+aWsOiPnOWTgeeahGlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZEhvdENoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgcnEuZ2V0KCdlZGl0UHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC5nZXRXZWRkaW5nTWVudUluZm8oKVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9yZGVyX3Byb2R1Y3RfaWQ6IGlkLCAvL+aXp+iPnOWTgeeahGlkXG4gICAgICAgIHN1cHBsaWVyX3Byb2R1Y3RfaWQ6IHRoYXQuaG90X2Fyclt2YWx1ZV0uaWQgLy/mlrDoj5zlk4HnmoRpZFxuICAgICAgfSlcbiAgICB9LFxuICAgIGJhY2tNZW51KGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgc2Vzc2lvbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlc3Npb247XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ2RlbFByb2R1Y3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aBouWkjeaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKClcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IGlkLFxuICAgICAgICBpc19kZWxldGU6IDAsXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGVsZXRlTWVudShlKSB7XG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgbGV0IHNlc3Npb24gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zZXNzaW9uO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgcnEuZ2V0KCdkZWxQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfliKDpmaTmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LmdldFdlZGRpbmdNZW51SW5mbygpXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwcm9kdWN0X2lkOiBpZCxcbiAgICAgICAgaXNfZGVsZXRlOiAxXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhZGROZXcoKSB7XG5cbiAgICB9XG4gIH07XG5cbiAgZ2V0V2VkZGluZ01lbnVJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBycS5nZXQoJ2dldFdlZGRpbmdNZW51SW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2luZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG9yZGVyX2lkOiB0aGF0LmlkXG4gICAgfSlcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLm9yZGVyX2lkO1xuICAgIHRoYXQucmVhZG9ubHkgPSBvcHRpb25zLnJlYWRvbmx5ID09ICd5ZXMnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoYXQuZ2V0V2VkZGluZ01lbnVJbmZvKCk7XG4gICAgdGhhdC5kZXBhcnRtZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcblxuICAgIGlmICh0aGF0LmRlcGFydG1lbnQgPT0gJ21hcnJ5Jykge1xuICAgICAgcnEuZ2V0KCdnZXRQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuaG90X2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cbiAgICAgICAgICB0aGF0LmhvdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRoYXQuaG90X2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogJ+eDreiPnCdcbiAgICAgIH0pXG4gICAgICBycS5nZXQoJ2dldFBhY2thZ2VQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5jb29sX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5jb29sX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhhdC5jb29sX2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICflhrfoj5wnXG4gICAgICB9KVxuICAgICAgcnEuZ2V0KCdnZXRQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnJfcmFuZC5wdXNoKGVsZW1lbnQucHJvZHVjdF9uYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0Lm11bHRpQXJyYXlQcm9kdWN0WzFdID0gdGhhdC5wcm9kdWN0X2Fycl9yYW5kO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcblxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoYXQuZGVwYXJ0bWVudCA9PSAnYXJ0Y2VudGVyJykge1xuXG4gICAgICBycS5nZXQoJ2dldEFkZEZyZWVQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuaG90X2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cbiAgICAgICAgICB0aGF0LmhvdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRoYXQuaG90X2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogJ+eDreiPnCdcbiAgICAgIH0pXG5cbiAgICAgIHJxLmdldCgnZ2V0QWRkRnJlZVBhY2thZ2VQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5jb29sX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5jb29sX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhhdC5jb29sX2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICflhrfoj5wnXG4gICAgICB9KVxuXG4gICAgICBycS5nZXQoJ2dldEFkZEZyZWVQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnJfcmFuZC5wdXNoKGVsZW1lbnQucHJvZHVjdF9uYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0Lm11bHRpQXJyYXlQcm9kdWN0WzFdID0gdGhhdC5wcm9kdWN0X2Fycl9yYW5kO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcblxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuICBvblNob3coKSB7XG5cbiAgfVxufVxuIl19