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
      multiArrayProduct: [['新增', '赠送'], []],
      teams_info: null,
      teams_index: 0,

      try_dishes_id: 0,
      department: ''
    }, _this.methods = {
      bindTeamChange: function bindTeamChange(e) {
        this.teams_index = e.detail.value;
      },
      submit: function submit(e) {
        var that = this;
        _request2.default.get('submitTryDishesApply', {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 2 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
          }
        }, {
          try_dishes_id: that.id,
          team_id: that.teams_info[that.teams_index].id
        });
      },
      bindAddProduct: function bindAddProduct(e) {
        var values = e.detail.value;
        var that = this;
        _request2.default.get('addTryDishesProduct', {
          200: function _(result) {
            _wepy2.default.showToast({
              title: '更改成功', //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: function success(res) {}
            });
            that.getTryDishesDetail();
          }
        }, {
          try_dishes_id: that.id,
          change_remark: that.multiArrayProduct[0][values[0]], //备注
          product_id: that.product_arr[values[1]].id //新菜品的id
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
            that.getTryDishesDetail();
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
            that.getTryDishesDetail();
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
            that.getTryDishesDetail();
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
            that.getTryDishesDetail();
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
    key: 'getTryDishesDetail',
    value: function getTryDishesDetail() {
      var that = this;
      _request2.default.get('getTryDishesDetail', {
        200: function _(result) {
          that.page_info = result.data.data.package_info;
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
      that.id = options.try_dishes_id;
      that.getTryDishesDetail();
      that.department = _wepy2.default.getStorageSync('office_line');

      if (that.department == 'artcenter') {
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
      } else if (that.department == 'marry') {
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
      }
      _request2.default.get("getTeams", {
        200: function _(result) {
          that.teams_info = result.data.data;
          that.teams_info.unshift({
            id: 0,
            team_name: '全部'
          });
          that.$apply();
        }
      }, {
        team_type: 2
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/ordermenu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVybWVudS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInBhZ2VfaW5mbyIsImlkIiwiaG90X2FyciIsImNvb2xfYXJyIiwiaG90X2Fycl9yYW5kIiwiY29vbF9hcnJfcmFuZCIsImNvb2xfaW5kZXgiLCJob3RfaW5kZXgiLCJwcm9kdWN0X2FyciIsInByb2R1Y3RfYXJyX3JhbmQiLCJtdWx0aUFycmF5UHJvZHVjdCIsInRlYW1zX2luZm8iLCJ0ZWFtc19pbmRleCIsInRyeV9kaXNoZXNfaWQiLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsImJpbmRUZWFtQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic3VibWl0IiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidGVhbV9pZCIsImJpbmRBZGRQcm9kdWN0IiwidmFsdWVzIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInN1Y2Nlc3MiLCJnZXRUcnlEaXNoZXNEZXRhaWwiLCJjaGFuZ2VfcmVtYXJrIiwicHJvZHVjdF9pZCIsImJpbmRDb29sQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvcmRlcl9wcm9kdWN0X2lkIiwic3VwcGxpZXJfcHJvZHVjdF9pZCIsImJpbmRIb3RDaGFuZ2UiLCJiYWNrTWVudSIsImluZGV4Iiwic2Vzc2lvbiIsIiRhcHBseSIsImlzX2RlbGV0ZSIsImRlbGV0ZU1lbnUiLCJhZGROZXciLCJyZXN1bHQiLCJwYWNrYWdlX2luZm8iLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJmb3JFYWNoIiwicHVzaCIsImVsZW1lbnQiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3N1Yl9jYXRl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ZXJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjc3M6IGNzcywgLy/moLflvI/ooahcbiAgICBoZWFkZXI6IGhlYWRlclxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+Wuoui1hOS/oeaBrycsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIHBhZ2VfaW5mbzogbnVsbCxcbiAgICBpZDogLTEsXG4gICAgaG90X2FycjogW10sXG4gICAgY29vbF9hcnI6IFtdLFxuICAgIGhvdF9hcnJfcmFuZDogW10sXG4gICAgY29vbF9hcnJfcmFuZDogW10sXG4gICAgY29vbF9pbmRleDogMCxcbiAgICBob3RfaW5kZXg6IDAsXG4gICAgcHJvZHVjdF9hcnI6IFtdLFxuICAgIHByb2R1Y3RfYXJyX3JhbmQ6IFtdLFxuICAgIG11bHRpQXJyYXlQcm9kdWN0OiBbXG4gICAgICBbJ+aWsOWinicsICfotaDpgIEnXSxcbiAgICAgIFtdXG4gICAgXSxcbiAgICB0ZWFtc19pbmZvOiBudWxsLFxuICAgIHRlYW1zX2luZGV4OiAwLFxuXG4gICAgdHJ5X2Rpc2hlc19pZDogMCxcbiAgICBkZXBhcnRtZW50OiAnJ1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmRUZWFtQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMudGVhbXNfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHN1Ym1pdChlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ3N1Ym1pdFRyeURpc2hlc0FwcGx5Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDIgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRyeV9kaXNoZXNfaWQ6IHRoYXQuaWQsXG4gICAgICAgIHRlYW1faWQ6IHRoYXQudGVhbXNfaW5mb1t0aGF0LnRlYW1zX2luZGV4XS5pZFxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRBZGRQcm9kdWN0KGUpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHJxLmdldCgnYWRkVHJ5RGlzaGVzUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC5nZXRUcnlEaXNoZXNEZXRhaWwoKVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRyeV9kaXNoZXNfaWQ6IHRoYXQuaWQsXG4gICAgICAgIGNoYW5nZV9yZW1hcms6IHRoYXQubXVsdGlBcnJheVByb2R1Y3RbMF1bdmFsdWVzWzBdXSwgLy/lpIfms6hcbiAgICAgICAgcHJvZHVjdF9pZDogdGhhdC5wcm9kdWN0X2Fyclt2YWx1ZXNbMV1dLmlkIC8v5paw6I+c5ZOB55qEaWRcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kQ29vbENoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgcnEuZ2V0KCdlZGl0UHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pu05pS55oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC5nZXRUcnlEaXNoZXNEZXRhaWwoKVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9yZGVyX3Byb2R1Y3RfaWQ6IGlkLCAvL+aXp+iPnOWTgeeahGlkXG4gICAgICAgIHN1cHBsaWVyX3Byb2R1Y3RfaWQ6IHRoYXQuY29vbF9hcnJbdmFsdWVdLmlkIC8v5paw6I+c5ZOB55qEaWRcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kSG90Q2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ2VkaXRQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmm7TmlLnmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LmdldFRyeURpc2hlc0RldGFpbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgb3JkZXJfcHJvZHVjdF9pZDogaWQsIC8v5pen6I+c5ZOB55qEaWRcbiAgICAgICAgc3VwcGxpZXJfcHJvZHVjdF9pZDogdGhhdC5ob3RfYXJyW3ZhbHVlXS5pZCAvL+aWsOiPnOWTgeeahGlkXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmFja01lbnUoZSkge1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGxldCBzZXNzaW9uID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2Vzc2lvbjtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHJxLmdldCgnZGVsUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5oGi5aSN5oiQ5YqfJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsIC8v5bu26L+f5pe26Ze0LFxuICAgICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC5nZXRUcnlEaXNoZXNEZXRhaWwoKVxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZHVjdF9pZDogaWQsXG4gICAgICAgIGlzX2RlbGV0ZTogMCxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZWxldGVNZW51KGUpIHtcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBsZXQgc2Vzc2lvbiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNlc3Npb247XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBycS5nZXQoJ2RlbFByb2R1Y3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuZ2V0VHJ5RGlzaGVzRGV0YWlsKClcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IGlkLFxuICAgICAgICBpc19kZWxldGU6IDFcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhZGROZXcoKSB7XG4gICAgfVxuICB9O1xuICBnZXRUcnlEaXNoZXNEZXRhaWwoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHJxLmdldCgnZ2V0VHJ5RGlzaGVzRGV0YWlsJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2VfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGEucGFja2FnZV9pbmZvO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHRyeV9kaXNoZXNfaWQ6IHRoYXQuaWRcbiAgICB9KVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLnRyeV9kaXNoZXNfaWRcbiAgICB0aGF0LmdldFRyeURpc2hlc0RldGFpbCgpO1xuICAgIHRoYXQuZGVwYXJ0bWVudCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29mZmljZV9saW5lJyk7XG5cbiAgICBpZiAodGhhdC5kZXBhcnRtZW50ID09ICdhcnRjZW50ZXInKSB7XG4gICAgICBycS5nZXQoJ2dldEFkZEZyZWVQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQuaG90X2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5ob3RfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICB0aGF0LmhvdF9hcnJfcmFuZC5wdXNoKGVsZW1lbnQucHJvZHVjdF9uYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHByb2R1Y3Rfc3ViX2NhdGVnb3J5OiAn54Ot6I+cJ1xuICAgICAgfSlcbiAgICAgIHJxLmdldCgnZ2V0QWRkRnJlZVBhY2thZ2VQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5jb29sX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5jb29sX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhhdC5jb29sX2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICflhrfoj5wnXG4gICAgICB9KVxuICAgICAgcnEuZ2V0KCdnZXRBZGRGcmVlUGFja2FnZVByb2R1Y3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICB0aGF0LnByb2R1Y3RfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC5tdWx0aUFycmF5UHJvZHVjdFsxXSA9IHRoYXQucHJvZHVjdF9hcnJfcmFuZDtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhhdC5kZXBhcnRtZW50ID09ICdtYXJyeScpIHtcbiAgICAgIHJxLmdldCgnZ2V0UGFja2FnZVByb2R1Y3QnLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LmhvdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQuaG90X2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhhdC5ob3RfYXJyX3JhbmQucHVzaChlbGVtZW50LnByb2R1Y3RfbmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBwcm9kdWN0X3N1Yl9jYXRlZ29yeTogJ+eDreiPnCdcbiAgICAgIH0pXG4gICAgICBycS5nZXQoJ2dldFBhY2thZ2VQcm9kdWN0Jywge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC5jb29sX2FyciA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC5jb29sX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhhdC5jb29sX2Fycl9yYW5kLnB1c2goZWxlbWVudC5wcm9kdWN0X25hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZHVjdF9zdWJfY2F0ZWdvcnk6ICflhrfoj5wnXG4gICAgICB9KVxuICAgICAgcnEuZ2V0KCdnZXRQYWNrYWdlUHJvZHVjdCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHRoYXQucHJvZHVjdF9hcnJfcmFuZC5wdXNoKGVsZW1lbnQucHJvZHVjdF9uYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0Lm11bHRpQXJyYXlQcm9kdWN0WzFdID0gdGhhdC5wcm9kdWN0X2Fycl9yYW5kO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgIH0pXG4gICAgfVxuICAgIHJxLmdldChcImdldFRlYW1zXCIsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50ZWFtc19pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC50ZWFtc19pbmZvLnVuc2hpZnQoe1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIHRlYW1fbmFtZTogJ+WFqOmDqCdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdGVhbV90eXBlOiAyXG4gICAgfSk7XG4gIH1cbiAgb25TaG93KCkge1xuICB9XG59XG4iXX0=