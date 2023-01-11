"use strict";

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

var _upload = require('./../../../components/common/upload.js');

var _upload2 = _interopRequireDefault(_upload);

var _ntpicker = require('./../../../components/common/ntpicker.js');

var _ntpicker2 = _interopRequireDefault(_ntpicker);

var _ntitem = require('./../../../components/common/ntitem.js');

var _ntitem2 = _interopRequireDefault(_ntitem);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "upload": { "label": "上传附件", "size": "9", "v-bind:save_obj.sync": "uplaoded", "ntkey": "images", "v-bind:readonly.sync": "readonly" }, "ntpicker": { "label": "客资状态", "v-bind:ntrange.sync": "status_arr", "ntkey": "user_status_name", "v-bind:checked_index.sync": "status_arr_index", "v-bind:readonly.sync": "readonly" }, "ntitem": { "label": "跟进备注", "placeholder": "请输入客资的备注信息：如预算、风格、喜好等", "v-bind:ntvalue.sync": "form", "ntkey": "status_remark", "nttype": "area", "v-bind:readonly.sync": "readonly" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      upload: _upload2.default,
      ntpicker: _ntpicker2.default,
      ntitem: _ntitem2.default
    }, _this.data = {
      isopacity: true,
      title: "客资跟进",
      isback: true,
      status_arr: [],
      status_arr_index: 0,
      user_id: "",
      uplaoded: {
        images: []
      },
      form: {
        status_remark: ''
      },
      readonly: false
    }, _this.methods = {
      submit: function submit() {
        var that = this;
        if (!that.form.status_remark) {
          _wepy2.default.showToast({
            title: '请填写跟进备注', //提示的内容,
            icon: 'none', //图标,
            duration: 1000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        _request2.default.get("AddFollowUpLog", {
          200: function _(result) {
            _wepy2.default.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            that.$apply();
          }
        }, {
          user_id: this.user_id,
          user_status: this.status_arr[this.status_arr_index].user_status,
          status_remark: this.form.status_remark,
          status_file: this.uplaoded.images.join(',')
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      this.user_id = options.id;
      var that = this;
      _request2.default.get("getOneUserInfo", {
        200: function _(result) {
          that.status_arr = result.data.sales_status;
          that.$apply();
        }
      }, {
        user_id: that.user_id
      });
    }
  }, {
    key: "onShow",
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/editlog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRsb2cuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJ1cGxvYWQiLCJudHBpY2tlciIsIm50aXRlbSIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsInN0YXR1c19hcnIiLCJzdGF0dXNfYXJyX2luZGV4IiwidXNlcl9pZCIsInVwbGFvZGVkIiwiaW1hZ2VzIiwiZm9ybSIsInN0YXR1c19yZW1hcmsiLCJyZWFkb25seSIsIm1ldGhvZHMiLCJzdWJtaXQiLCJ0aGF0Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsInVzZXJfc3RhdHVzIiwic3RhdHVzX2ZpbGUiLCJqb2luIiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsImlkIiwicmVzdWx0Iiwic2FsZXNfc3RhdHVzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHNCQUFxQixRQUFwRSxFQUE2RSx5QkFBd0IsV0FBckcsRUFBVixFQUE0SCxVQUFTLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sR0FBdkIsRUFBMkIsd0JBQXVCLFVBQWxELEVBQTZELFNBQVEsUUFBckUsRUFBOEUsd0JBQXVCLFVBQXJHLEVBQXJJLEVBQXNQLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsdUJBQXNCLFlBQXRDLEVBQW1ELFNBQVEsa0JBQTNELEVBQThFLDZCQUE0QixrQkFBMUcsRUFBNkgsd0JBQXVCLFVBQXBKLEVBQWpRLEVBQWlhLFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsZUFBYyx1QkFBOUIsRUFBc0QsdUJBQXNCLE1BQTVFLEVBQW1GLFNBQVEsZUFBM0YsRUFBMkcsVUFBUyxNQUFwSCxFQUEySCx3QkFBdUIsVUFBbEosRUFBMWEsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBLGdCQUZFO0FBR1ZDLGNBQVFBLGdCQUhFO0FBSVZDLGdCQUFVQSxrQkFKQTtBQUtWQyxjQUFRQTtBQUxFLEssUUFPWkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsYUFBTyxNQUZGO0FBR0xDLGNBQVEsSUFISDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLHdCQUFrQixDQUxiO0FBTUxDLGVBQVMsRUFOSjtBQU9MQyxnQkFBUztBQUNQQyxnQkFBUTtBQURELE9BUEo7QUFVTEMsWUFBSztBQUNIQyx1QkFBYztBQURYLE9BVkE7QUFhTEMsZ0JBQVU7QUFiTCxLLFFBZVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSSxDQUFDQSxLQUFLTCxJQUFMLENBQVVDLGFBQWYsRUFBOEI7QUFDNUJLLHlCQUFLQyxTQUFMLENBQWU7QUFDYmQsbUJBQU8sU0FETSxFQUNLO0FBQ2xCZSxrQkFBTSxNQUZPLEVBRUM7QUFDZEMsc0JBQVUsSUFIRyxFQUdHO0FBQ2hCQyxrQkFBTSxJQUpPLEVBSUQ7QUFDWkMscUJBQVMsc0JBQU8sQ0FBRztBQUxOLFdBQWY7QUFPQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDREMsMEJBQUdDLEdBQUgsQ0FDRSxnQkFERixFQUNvQjtBQUNsQixlQUFLLG1CQUFVO0FBQ2JQLDJCQUFLUSxZQUFMLENBQWtCO0FBQ2hCQyxxQkFBTyxDQURTLENBQ1A7QUFETyxhQUFsQjtBQUdBVixpQkFBS1csTUFBTDtBQUNEO0FBTmlCLFNBRHBCLEVBUUc7QUFDRG5CLG1CQUFTLEtBQUtBLE9BRGI7QUFFRG9CLHVCQUFhLEtBQUt0QixVQUFMLENBQWdCLEtBQUtDLGdCQUFyQixFQUF1Q3FCLFdBRm5EO0FBR0RoQix5QkFBZSxLQUFLRCxJQUFMLENBQVVDLGFBSHhCO0FBSURpQix1QkFBYSxLQUFLcEIsUUFBTCxDQUFjQyxNQUFkLENBQXFCb0IsSUFBckIsQ0FBMEIsR0FBMUI7QUFKWixTQVJIO0FBZUQ7QUE1Qk8sSzs7Ozs7MkJBOEJIQyxPLEVBQVM7QUFDZEEsZ0JBQVVDLGVBQUtDLGlCQUFMLENBQXVCRixPQUF2QixDQUFWO0FBQ0EsV0FBS3ZCLE9BQUwsR0FBZXVCLFFBQVFHLEVBQXZCO0FBQ0EsVUFBSWxCLE9BQU8sSUFBWDtBQUNBTyx3QkFBR0MsR0FBSCxDQUFPLGdCQUFQLEVBQXlCO0FBQ3ZCLGFBQUssbUJBQVU7QUFDYlIsZUFBS1YsVUFBTCxHQUFrQjZCLE9BQU9qQyxJQUFQLENBQVlrQyxZQUE5QjtBQUNBcEIsZUFBS1csTUFBTDtBQUNEO0FBSnNCLE9BQXpCLEVBS0c7QUFDRG5CLGlCQUFTUSxLQUFLUjtBQURiLE9BTEg7QUFRRDs7OzZCQUNRLENBQUc7Ozs7RUFyRXFCUyxlQUFLb0IsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJlZGl0bG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IEcgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9nbG9iYWxcIjtcbmltcG9ydCBycSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3RcIjtcbmltcG9ydCB0b29sIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbFwiO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvdmFsaWRhdGVcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvc3RvcmFnZVwiO1xuaW1wb3J0IGRhdCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBmaWxlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvZmlsZVwiO1xuXG5cbmltcG9ydCBjc3MgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY3NzXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHVwbG9hZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vdXBsb2FkXCI7XG5pbXBvcnQgbnRwaWNrZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL250cGlja2VyXCI7XG5pbXBvcnQgbnRpdGVtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udGl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwidXBsb2FkXCI6e1wibGFiZWxcIjpcIuS4iuS8oOmZhOS7tlwiLFwic2l6ZVwiOlwiOVwiLFwidi1iaW5kOnNhdmVfb2JqLnN5bmNcIjpcInVwbGFvZGVkXCIsXCJudGtleVwiOlwiaW1hZ2VzXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn0sXCJudHBpY2tlclwiOntcImxhYmVsXCI6XCLlrqLotYTnirbmgIFcIixcInYtYmluZDpudHJhbmdlLnN5bmNcIjpcInN0YXR1c19hcnJcIixcIm50a2V5XCI6XCJ1c2VyX3N0YXR1c19uYW1lXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJzdGF0dXNfYXJyX2luZGV4XCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn0sXCJudGl0ZW1cIjp7XCJsYWJlbFwiOlwi6Lef6L+b5aSH5rOoXCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5a6i6LWE55qE5aSH5rOo5L+h5oGv77ya5aaC6aKE566X44CB6aOO5qC844CB5Zac5aW9562JXCIsXCJ2LWJpbmQ6bnR2YWx1ZS5zeW5jXCI6XCJmb3JtXCIsXCJudGtleVwiOlwic3RhdHVzX3JlbWFya1wiLFwibnR0eXBlXCI6XCJhcmVhXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHVwbG9hZDogdXBsb2FkLFxuICAgIG50cGlja2VyOiBudHBpY2tlcixcbiAgICBudGl0ZW06IG50aXRlbVxuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogXCLlrqLotYTot5/ov5tcIixcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgc3RhdHVzX2FycjogW10sXG4gICAgc3RhdHVzX2Fycl9pbmRleDogMCxcbiAgICB1c2VyX2lkOiBcIlwiLFxuICAgIHVwbGFvZGVkOntcbiAgICAgIGltYWdlczogW10sXG4gICAgfSxcbiAgICBmb3JtOntcbiAgICAgIHN0YXR1c19yZW1hcms6JydcbiAgICB9LFxuICAgIHJlYWRvbmx5OiBmYWxzZVxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICghdGhhdC5mb3JtLnN0YXR1c19yZW1hcmspIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ6Lef6L+b5aSH5rOoJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcnEuZ2V0KFxuICAgICAgICBcIkFkZEZvbGxvd1VwTG9nXCIsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxIC8v6L+U5Zue55qE6aG16Z2i5pWw77yM5aaC5p6cIGRlbHRhIOWkp+S6jueOsOaciemhtemdouaVsO+8jOWImei/lOWbnuWIsOmmlumhtSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlcl9pZCxcbiAgICAgICAgdXNlcl9zdGF0dXM6IHRoaXMuc3RhdHVzX2Fyclt0aGlzLnN0YXR1c19hcnJfaW5kZXhdLnVzZXJfc3RhdHVzLFxuICAgICAgICBzdGF0dXNfcmVtYXJrOiB0aGlzLmZvcm0uc3RhdHVzX3JlbWFyayxcbiAgICAgICAgc3RhdHVzX2ZpbGU6IHRoaXMudXBsYW9kZWQuaW1hZ2VzLmpvaW4oJywnKVxuICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgdGhpcy51c2VyX2lkID0gb3B0aW9ucy5pZDtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcnEuZ2V0KFwiZ2V0T25lVXNlckluZm9cIiwge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnN0YXR1c19hcnIgPSByZXN1bHQuZGF0YS5zYWxlc19zdGF0dXM7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdXNlcl9pZDogdGhhdC51c2VyX2lkXG4gICAgfSk7XG4gIH1cbiAgb25TaG93KCkgeyB9XG59XG4iXX0=