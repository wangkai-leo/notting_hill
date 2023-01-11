"use strict";

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
      title: "试菜申请",
      isback: true,
      taste_info: null,
      id: 0,
      user_id: 0,
      try_dishes_id: 0,
      remark: '',
      try_type: null,
      try_index: 0
    }, _this.methods = {
      bindTryChange: function bindTryChange(e) {
        this.taste_info.try_type = this.try_type[e.detail.value].try_type;
        this.taste_info.try_type_text = this.try_type[e.detail.value].lable;
      },
      bindInputMark: function bindInputMark(e) {
        this.taste_info.remark = e.detail.value;
      },
      goSchedule: function goSchedule() {
        var that = this;
        var data = that.taste_info; //Form's data for sumbit.
        var info = that.taste_info.session; //Schedule's info handler.
        //Create a new tasting list first.
        that.id ? _request2.default.get("confirmTryDishesApply", {
          200: function _(result) {
            //Created a tasting list and get try_dishes_id.Other info is empty.
            that.try_dishes_id = result.data.try_dishes_id;
            that.id = false;
            that.$apply();
            if (!info) {
              _request2.default.get("getTryDishesDetail", {
                200: function _(result) {
                  that.taste_info = result.data.data;
                  that.taste_info.package_info = JSON.stringify(result.data.data.package_info);
                  that.$apply();
                  var info = that.taste_info.session; //Schedule's info handler.
                  _wepy2.default.navigateTo({
                    url: 'schedule?id=' + info.id + '&order_id=' + that.try_dishes_id + '&schedule_type=' + info.schedule_type + '&area_name=' + info.area_name + '&schedule_date=' + info.schedule_date + '&session=' + info.session + '&schedule_end_date=' + info.schedule_end_date
                  });
                }
              }, {
                try_dishes_id: that.try_dishes_id,
                user_id: that.user_id
              });
            } else {
              _wepy2.default.navigateTo({
                url: 'schedule?id=' + info.id + '&order_id=' + result.data.try_dishes_id + '&schedule_type=' + info.schedule_type + '&area_name=' + info.area_name + '&schedule_date=' + info.schedule_date + '&session=' + info.session + '&schedule_end_date=' + info.schedule_end_date
              });
            }
          }
        }, data) : false;
        //Edit tasting list directly.
        that.try_dishes_id ? _wepy2.default.navigateTo({
          url: 'schedule?id=' + info.id + '&order_id=' + that.taste_info.id + '&schedule_type=' + info.schedule_type + '&area_name=' + info.area_name + '&schedule_date=' + info.schedule_date + '&session=' + info.session + '&schedule_end_date=' + info.schedule_end_date
        }) : false;
      },
      bindTimeChange: function bindTimeChange(e) {
        this.taste_info.try_time = e.detail.value;
      },
      bindDateChange: function bindDateChange(e) {
        this.taste_info.try_date = e.detail.value;
      },
      submit: function submit() {
        var _this2 = this;

        var that = this;
        var data = that.taste_info;
        that.id ? _request2.default.get("confirmTryDishesApply", {
          200: function _(result) {
            that.try_dishes_id = result.data.try_dishes_id;
            that.id = false;
            that.$apply();
            _wepy2.default.navigateTo({
              url: '/pages/common/scheme/ordermenu?try_dishes_id=' + result.data.try_dishes_id
            });
          }
        }, data) : false;
        //Save msg and navigate to
        that.try_dishes_id ? _request2.default.get("editTryDishesApply", {
          200: function _(result) {
            that.try_dishes_id = result.data.try_dishes_id;
            that.id = false;
            that.$apply();
            _wepy2.default.navigateTo({
              url: '/pages/common/scheme/ordermenu?try_dishes_id=' + _this2.taste_info.id
            });
          }
        }, {
          remark: that.taste_info.remark,
          try_type: that.taste_info.try_type,
          try_dishes_id: that.try_dishes_id,
          wedding_meal_section: that.taste_info.wedding_meal_section,
          try_time: that.taste_info.try_time,
          try_person_number: that.taste_info.try_person_number
        }) : false;
      },
      bindInputUserMobile: function bindInputUserMobile(e) {
        this.taste_info.client_mobile = e.detail.value;
      },
      bindInputUserName: function bindInputUserName(e) {
        this.taste_info.client_name = e.detail.value;
      },
      bindInputMeal: function bindInputMeal(e) {
        this.taste_info.wedding_meal_section = e.detail.value;
      },
      bindInputMealDate: function bindInputMealDate(e) {
        this.taste_info.try_date = e.detail.value;
      },
      bindInputAddress: function bindInputAddress(e) {
        this.taste_info.try_address = e.detail.value;
      },
      bindInputSession: function bindInputSession(e) {
        this.taste_info.try_session = e.detail.value;
      },
      bindInputMealTime: function bindInputMealTime(e) {
        this.taste_info.try_time = e.detail.value;
      },
      bindInput: function bindInput(e) {
        // this.taste_info.wedding_meal_section = e.detail.value;
      },
      bindInputPersonNum: function bindInputPersonNum(e) {
        this.taste_info.try_person_number = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      var that = this;
      that.id = options.id;
      that.user_id = options.user_id;
      that.try_dishes_id = options.try_dishes_id;
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var that = this;
      that.id ? _request2.default.get("applyTryDishes", {
        200: function _(result) {
          that.taste_info = result.data.data;
          that.taste_info.package_info = JSON.stringify(result.data.data.package_info);
          that.try_type = result.data.try_type;
          that.taste_info.try_type = that.try_type[that.try_index].try_type;
          that.taste_info.try_type_text = that.try_type[that.try_index].lable;
          that.$apply();
        }
      }, {
        order_id: that.id,
        user_id: that.user_id
      }) : false;
      that.try_dishes_id ? _request2.default.get("getTryDishesDetail", {
        200: function _(result) {
          that.taste_info = result.data.data;
          that.taste_info.package_info = JSON.stringify(result.data.data.package_info);
          that.try_type = result.data.try_type;

          var i = 0;
          that.try_type.forEach(function (element) {
            if (element.try_type == that.taste_info.try_type) {
              that.try_index = i;
            }
            i++;
          });
          that.$apply();
        }
      }, {
        try_dishes_id: that.try_dishes_id,
        user_id: that.user_id
      }) : false;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/scheme/tastedetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc3RlZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwidGFzdGVfaW5mbyIsImlkIiwidXNlcl9pZCIsInRyeV9kaXNoZXNfaWQiLCJyZW1hcmsiLCJ0cnlfdHlwZSIsInRyeV9pbmRleCIsIm1ldGhvZHMiLCJiaW5kVHJ5Q2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwidHJ5X3R5cGVfdGV4dCIsImxhYmxlIiwiYmluZElucHV0TWFyayIsImdvU2NoZWR1bGUiLCJ0aGF0IiwiaW5mbyIsInNlc3Npb24iLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsInBhY2thZ2VfaW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInNjaGVkdWxlX3R5cGUiLCJhcmVhX25hbWUiLCJzY2hlZHVsZV9kYXRlIiwic2NoZWR1bGVfZW5kX2RhdGUiLCJiaW5kVGltZUNoYW5nZSIsInRyeV90aW1lIiwiYmluZERhdGVDaGFuZ2UiLCJ0cnlfZGF0ZSIsInN1Ym1pdCIsIndlZGRpbmdfbWVhbF9zZWN0aW9uIiwidHJ5X3BlcnNvbl9udW1iZXIiLCJiaW5kSW5wdXRVc2VyTW9iaWxlIiwiY2xpZW50X21vYmlsZSIsImJpbmRJbnB1dFVzZXJOYW1lIiwiY2xpZW50X25hbWUiLCJiaW5kSW5wdXRNZWFsIiwiYmluZElucHV0TWVhbERhdGUiLCJiaW5kSW5wdXRBZGRyZXNzIiwidHJ5X2FkZHJlc3MiLCJiaW5kSW5wdXRTZXNzaW9uIiwidHJ5X3Nlc3Npb24iLCJiaW5kSW5wdXRNZWFsVGltZSIsImJpbmRJbnB1dCIsImJpbmRJbnB1dFBlcnNvbk51bSIsIm9wdGlvbnMiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJvcmRlcl9pZCIsImkiLCJmb3JFYWNo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QU96QixJQUFQLENBQVlBLElBQVosQ0FBaUIyQixZQUFoQyxDQUEvQjtBQUNBUCxlQUFLWCxRQUFMLEdBQWdCZ0IsT0FBT3pCLElBQVAsQ0FBWVMsUUFBNUI7O0FBRUEsY0FBSW9ELElBQUksQ0FBUjtBQUNBekMsZUFBS1gsUUFBTCxDQUFjcUQsT0FBZCxDQUFzQixtQkFBVztBQUMvQixnQkFBSUMsUUFBUXRELFFBQVIsSUFBb0JXLEtBQUtoQixVQUFMLENBQWdCSyxRQUF4QyxFQUFrRDtBQUNoRFcsbUJBQUtWLFNBQUwsR0FBaUJtRCxDQUFqQjtBQUNEO0FBQ0RBO0FBQ0QsV0FMRDtBQU1BekMsZUFBS00sTUFBTDtBQUNEO0FBZHFCLE9BREgsRUFnQmxCO0FBQ0RuQix1QkFBZWEsS0FBS2IsYUFEbkI7QUFFREQsaUJBQVNjLEtBQUtkO0FBRmIsT0FoQmtCLENBQXJCLEdBb0JJLEtBcEJKO0FBcUJEOzs7O0VBekxnQ3dCLGVBQUtrQyxJOztrQkFBbkJ2RSxLIiwiZmlsZSI6InRhc3RlZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHJxIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHRvb2wgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sXCI7XG5cblxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiBcIuivleiPnOeUs+ivt1wiLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICB0YXN0ZV9pbmZvOiBudWxsLFxuICAgIGlkOiAwLFxuICAgIHVzZXJfaWQ6IDAsXG4gICAgdHJ5X2Rpc2hlc19pZDogMCxcbiAgICByZW1hcms6ICcnLFxuICAgIHRyeV90eXBlOiBudWxsLFxuICAgIHRyeV9pbmRleDogMFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmRUcnlDaGFuZ2UoZSkge1xuICAgICAgdGhpcy50YXN0ZV9pbmZvLnRyeV90eXBlID0gdGhpcy50cnlfdHlwZVtlLmRldGFpbC52YWx1ZV0udHJ5X3R5cGU7XG4gICAgICB0aGlzLnRhc3RlX2luZm8udHJ5X3R5cGVfdGV4dCA9IHRoaXMudHJ5X3R5cGVbZS5kZXRhaWwudmFsdWVdLmxhYmxlO1xuICAgIH0sXG4gICAgYmluZElucHV0TWFyayhlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8ucmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBnb1NjaGVkdWxlKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IGRhdGEgPSB0aGF0LnRhc3RlX2luZm87IC8vRm9ybSdzIGRhdGEgZm9yIHN1bWJpdC5cbiAgICAgIGxldCBpbmZvID0gdGhhdC50YXN0ZV9pbmZvLnNlc3Npb247IC8vU2NoZWR1bGUncyBpbmZvIGhhbmRsZXIuXG4gICAgICAvL0NyZWF0ZSBhIG5ldyB0YXN0aW5nIGxpc3QgZmlyc3QuXG4gICAgICB0aGF0LmlkID8gcnEuZ2V0KFxuICAgICAgICBcImNvbmZpcm1UcnlEaXNoZXNBcHBseVwiLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAvL0NyZWF0ZWQgYSB0YXN0aW5nIGxpc3QgYW5kIGdldCB0cnlfZGlzaGVzX2lkLk90aGVyIGluZm8gaXMgZW1wdHkuXG4gICAgICAgICAgdGhhdC50cnlfZGlzaGVzX2lkID0gcmVzdWx0LmRhdGEudHJ5X2Rpc2hlc19pZDtcbiAgICAgICAgICB0aGF0LmlkID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgIHJxLmdldChcbiAgICAgICAgICAgICAgXCJnZXRUcnlEaXNoZXNEZXRhaWxcIiwge1xuICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC50YXN0ZV9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGF0LnRhc3RlX2luZm8ucGFja2FnZV9pbmZvID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuZGF0YS5wYWNrYWdlX2luZm8pO1xuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSB0aGF0LnRhc3RlX2luZm8uc2Vzc2lvbjsgLy9TY2hlZHVsZSdzIGluZm8gaGFuZGxlci5cbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnc2NoZWR1bGU/aWQ9JyArIGluZm8uaWQgKyAnJm9yZGVyX2lkPScgKyB0aGF0LnRyeV9kaXNoZXNfaWQgKyAnJnNjaGVkdWxlX3R5cGU9JyArIGluZm8uc2NoZWR1bGVfdHlwZSArICcmYXJlYV9uYW1lPScgKyBpbmZvLmFyZWFfbmFtZSArICcmc2NoZWR1bGVfZGF0ZT0nICsgaW5mby5zY2hlZHVsZV9kYXRlICsgJyZzZXNzaW9uPScgKyBpbmZvLnNlc3Npb24gKyAnJnNjaGVkdWxlX2VuZF9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2VuZF9kYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdHJ5X2Rpc2hlc19pZDogdGhhdC50cnlfZGlzaGVzX2lkLFxuICAgICAgICAgICAgICB1c2VyX2lkOiB0aGF0LnVzZXJfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnc2NoZWR1bGU/aWQ9JyArIGluZm8uaWQgKyAnJm9yZGVyX2lkPScgKyByZXN1bHQuZGF0YS50cnlfZGlzaGVzX2lkICsgJyZzY2hlZHVsZV90eXBlPScgKyBpbmZvLnNjaGVkdWxlX3R5cGUgKyAnJmFyZWFfbmFtZT0nICsgaW5mby5hcmVhX25hbWUgKyAnJnNjaGVkdWxlX2RhdGU9JyArIGluZm8uc2NoZWR1bGVfZGF0ZSArICcmc2Vzc2lvbj0nICsgaW5mby5zZXNzaW9uICsgJyZzY2hlZHVsZV9lbmRfZGF0ZT0nICsgaW5mby5zY2hlZHVsZV9lbmRfZGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBkYXRhXG4gICAgICApIDogZmFsc2U7XG4gICAgICAvL0VkaXQgdGFzdGluZyBsaXN0IGRpcmVjdGx5LlxuICAgICAgdGhhdC50cnlfZGlzaGVzX2lkID8gd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnc2NoZWR1bGU/aWQ9JyArIGluZm8uaWQgKyAnJm9yZGVyX2lkPScgKyB0aGF0LnRhc3RlX2luZm8uaWQgKyAnJnNjaGVkdWxlX3R5cGU9JyArIGluZm8uc2NoZWR1bGVfdHlwZSArICcmYXJlYV9uYW1lPScgKyBpbmZvLmFyZWFfbmFtZSArICcmc2NoZWR1bGVfZGF0ZT0nICsgaW5mby5zY2hlZHVsZV9kYXRlICsgJyZzZXNzaW9uPScgKyBpbmZvLnNlc3Npb24gKyAnJnNjaGVkdWxlX2VuZF9kYXRlPScgKyBpbmZvLnNjaGVkdWxlX2VuZF9kYXRlXG4gICAgICB9KSA6IGZhbHNlO1xuICAgIH0sXG4gICAgYmluZFRpbWVDaGFuZ2UoZSkge1xuICAgICAgdGhpcy50YXN0ZV9pbmZvLnRyeV90aW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8udHJ5X2RhdGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBkYXRhID0gdGhhdC50YXN0ZV9pbmZvO1xuICAgICAgdGhhdC5pZCA/IHJxLmdldChcbiAgICAgICAgXCJjb25maXJtVHJ5RGlzaGVzQXBwbHlcIiwge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC50cnlfZGlzaGVzX2lkID0gcmVzdWx0LmRhdGEudHJ5X2Rpc2hlc19pZDtcbiAgICAgICAgICB0aGF0LmlkID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvb3JkZXJtZW51P3RyeV9kaXNoZXNfaWQ9JyArIHJlc3VsdC5kYXRhLnRyeV9kaXNoZXNfaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgZGF0YVxuICAgICAgKSA6IGZhbHNlO1xuICAgICAgLy9TYXZlIG1zZyBhbmQgbmF2aWdhdGUgdG9cbiAgICAgIHRoYXQudHJ5X2Rpc2hlc19pZCA/IHJxLmdldChcbiAgICAgICAgXCJlZGl0VHJ5RGlzaGVzQXBwbHlcIiwge1xuICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhhdC50cnlfZGlzaGVzX2lkID0gcmVzdWx0LmRhdGEudHJ5X2Rpc2hlc19pZDtcbiAgICAgICAgICB0aGF0LmlkID0gZmFsc2U7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zY2hlbWUvb3JkZXJtZW51P3RyeV9kaXNoZXNfaWQ9JyArIHRoaXMudGFzdGVfaW5mby5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmVtYXJrOiB0aGF0LnRhc3RlX2luZm8ucmVtYXJrLFxuICAgICAgICB0cnlfdHlwZTogdGhhdC50YXN0ZV9pbmZvLnRyeV90eXBlLFxuICAgICAgICB0cnlfZGlzaGVzX2lkOiB0aGF0LnRyeV9kaXNoZXNfaWQsXG4gICAgICAgIHdlZGRpbmdfbWVhbF9zZWN0aW9uOiB0aGF0LnRhc3RlX2luZm8ud2VkZGluZ19tZWFsX3NlY3Rpb24sXG4gICAgICAgIHRyeV90aW1lOiB0aGF0LnRhc3RlX2luZm8udHJ5X3RpbWUsXG4gICAgICAgIHRyeV9wZXJzb25fbnVtYmVyOiB0aGF0LnRhc3RlX2luZm8udHJ5X3BlcnNvbl9udW1iZXJcbiAgICAgIH1cbiAgICAgICkgOiBmYWxzZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFVzZXJNb2JpbGUoZSkge1xuICAgICAgdGhpcy50YXN0ZV9pbmZvLmNsaWVudF9tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFVzZXJOYW1lKGUpIHtcbiAgICAgIHRoaXMudGFzdGVfaW5mby5jbGllbnRfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0TWVhbChlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8ud2VkZGluZ19tZWFsX3NlY3Rpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dE1lYWxEYXRlKGUpIHtcbiAgICAgIHRoaXMudGFzdGVfaW5mby50cnlfZGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0QWRkcmVzcyhlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8udHJ5X2FkZHJlc3MgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFNlc3Npb24oZSkge1xuICAgICAgdGhpcy50YXN0ZV9pbmZvLnRyeV9zZXNzaW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBiaW5kSW5wdXRNZWFsVGltZShlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8udHJ5X3RpbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dChlKSB7XG4gICAgICAvLyB0aGlzLnRhc3RlX2luZm8ud2VkZGluZ19tZWFsX3NlY3Rpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dFBlcnNvbk51bShlKSB7XG4gICAgICB0aGlzLnRhc3RlX2luZm8udHJ5X3BlcnNvbl9udW1iZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgIHRoYXQudXNlcl9pZCA9IG9wdGlvbnMudXNlcl9pZDtcbiAgICB0aGF0LnRyeV9kaXNoZXNfaWQgPSBvcHRpb25zLnRyeV9kaXNoZXNfaWQ7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmlkID8gcnEuZ2V0KFxuICAgICAgXCJhcHBseVRyeURpc2hlc1wiLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQudGFzdGVfaW5mbyA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQudGFzdGVfaW5mby5wYWNrYWdlX2luZm8gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQuZGF0YS5kYXRhLnBhY2thZ2VfaW5mbyk7XG4gICAgICAgIHRoYXQudHJ5X3R5cGUgPSByZXN1bHQuZGF0YS50cnlfdHlwZTtcbiAgICAgICAgdGhhdC50YXN0ZV9pbmZvLnRyeV90eXBlID0gdGhhdC50cnlfdHlwZVt0aGF0LnRyeV9pbmRleF0udHJ5X3R5cGU7XG4gICAgICAgIHRoYXQudGFzdGVfaW5mby50cnlfdHlwZV90ZXh0ID0gdGhhdC50cnlfdHlwZVt0aGF0LnRyeV9pbmRleF0ubGFibGU7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgb3JkZXJfaWQ6IHRoYXQuaWQsXG4gICAgICB1c2VyX2lkOiB0aGF0LnVzZXJfaWRcbiAgICB9XG4gICAgKSA6IGZhbHNlO1xuICAgIHRoYXQudHJ5X2Rpc2hlc19pZCA/IHJxLmdldChcbiAgICAgIFwiZ2V0VHJ5RGlzaGVzRGV0YWlsXCIsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC50YXN0ZV9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC50YXN0ZV9pbmZvLnBhY2thZ2VfaW5mbyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmRhdGEucGFja2FnZV9pbmZvKTtcbiAgICAgICAgdGhhdC50cnlfdHlwZSA9IHJlc3VsdC5kYXRhLnRyeV90eXBlO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgdGhhdC50cnlfdHlwZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LnRyeV90eXBlID09IHRoYXQudGFzdGVfaW5mby50cnlfdHlwZSkge1xuICAgICAgICAgICAgdGhhdC50cnlfaW5kZXggPSBpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHRyeV9kaXNoZXNfaWQ6IHRoYXQudHJ5X2Rpc2hlc19pZCxcbiAgICAgIHVzZXJfaWQ6IHRoYXQudXNlcl9pZFxuICAgIH1cbiAgICApIDogZmFsc2U7XG4gIH1cbn1cbiJdfQ==