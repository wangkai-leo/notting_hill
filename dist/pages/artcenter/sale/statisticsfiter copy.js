'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _topbar = require('./../../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _ntpicker = require('./../../../components/common/ntpicker.js');

var _ntpicker2 = _interopRequireDefault(_ntpicker);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.sync": "isopacity" }, "ntpicker": { "label": "筛选", "v-bind:ntrange.sync": "fitler_options", "v-bind:checked_index.sync": "fitler_index", "ntkey": "name" } }, _this.$events = {}, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      ntpicker: _ntpicker2.default
    }, _this.props = {}, _this.data = {
      isopacity: true,
      title: '销售客资数据',
      isback: true,
      fitler_index: 0,
      fitler_options: [{
        value: 'intention_city',
        name: '按城市'
      }, {
        value: 'sales_id',
        name: '按人员'
      }, {
        value: 'create_date',
        name: '按日期'
      }],
      params: {},
      list: []
    }, _this.watch = {
      fitler_index: function fitler_index() {
        this.getSalesUserDataGroup();
      }
    }, _this.methods = {
      naviToList: function naviToList() {
        var channel = e.currentTarget.dataset.channel;
        _wepy2.default.navigateTo({
          url: '/pages/common/statisticscustomerlistsale?' + params
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getSalesUserDataGroup',
    value: function getSalesUserDataGroup() {
      var that = this;
      this.params['group_type'] = this.fitler_options[this.fitler_index].value;
      _request2.default.get('getSalesUserDataGroup', {
        200: function _(result) {
          that.list = result.data.data;
          that.$apply();
        }
      }, this.params);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      options = _tool2.default.decodeQrCodeParam(options);
      this.params = {
        start_date: options.start_time,
        end_date: options.end_time,
        data_type: options.datatype,
        employee_id: options.employee_id,
        intention_city: options.intention_city
      };
      this.getSalesUserDataGroup();
      console.log(this.params);
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NmaXRlciBjb3B5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwidG9wYmFyIiwibnRwaWNrZXIiLCJwcm9wcyIsImRhdGEiLCJpc29wYWNpdHkiLCJ0aXRsZSIsImlzYmFjayIsImZpdGxlcl9pbmRleCIsImZpdGxlcl9vcHRpb25zIiwidmFsdWUiLCJuYW1lIiwicGFyYW1zIiwibGlzdCIsIndhdGNoIiwiZ2V0U2FsZXNVc2VyRGF0YUdyb3VwIiwibWV0aG9kcyIsIm5hdmlUb0xpc3QiLCJjaGFubmVsIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0IiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwic3RhcnRfZGF0ZSIsInN0YXJ0X3RpbWUiLCJlbmRfZGF0ZSIsImVuZF90aW1lIiwiZGF0YV90eXBlIiwiZGF0YXR5cGUiLCJlbXBsb3llZV9pZCIsImludGVudGlvbl9jaXR5IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRUFBNEgsWUFBVyxFQUFDLFNBQVEsSUFBVCxFQUFjLHVCQUFzQixnQkFBcEMsRUFBcUQsNkJBQTRCLGNBQWpGLEVBQWdHLFNBQVEsTUFBeEcsRUFBdkksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBLGdCQUZFO0FBR1ZDLGNBQVFBLGdCQUhFO0FBSVZDLGdCQUFVQTtBQUpBLEssUUFNWkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsYUFBTyxRQUZGO0FBR0xDLGNBQVEsSUFISDtBQUlMQyxvQkFBYyxDQUpUO0FBS0xDLHNCQUFnQixDQUNkO0FBQ0VDLGVBQU8sZ0JBRFQ7QUFFRUMsY0FBTTtBQUZSLE9BRGMsRUFJWDtBQUNERCxlQUFPLFVBRE47QUFFREMsY0FBTTtBQUZMLE9BSlcsRUFPWDtBQUNERCxlQUFPLGFBRE47QUFFREMsY0FBTTtBQUZMLE9BUFcsQ0FMWDtBQWlCTEMsY0FBUSxFQWpCSDtBQWtCTEMsWUFBTTtBQWxCRCxLLFFBb0JQQyxLLEdBQVE7QUFDTk4sa0JBRE0sMEJBQ1M7QUFDYixhQUFLTyxxQkFBTDtBQUNEO0FBSEssSyxRQUtSQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0k7QUFDVixZQUFJQyxVQUFVQyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkgsT0FBdEM7QUFDQUksdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyw4Q0FBOENaO0FBRHJDLFNBQWhCO0FBR0Q7QUFOTyxLOzs7Ozs0Q0FRYztBQUN0QixVQUFJYSxPQUFPLElBQVg7QUFDQSxXQUFLYixNQUFMLENBQVksWUFBWixJQUE0QixLQUFLSCxjQUFMLENBQW9CLEtBQUtELFlBQXpCLEVBQXVDRSxLQUFuRTtBQUNBZ0Isd0JBQUdDLEdBQUgsQ0FBTyx1QkFBUCxFQUFnQztBQUM5QixhQUFLLG1CQUFVO0FBQ2JGLGVBQUtaLElBQUwsR0FBWWUsT0FBT3hCLElBQVAsQ0FBWUEsSUFBeEI7QUFDQXFCLGVBQUtJLE1BQUw7QUFDRDtBQUo2QixPQUFoQyxFQUtHLEtBQUtqQixNQUxSO0FBTUQ7OzsyQkFDTWtCLE8sRUFBUztBQUNkQSxnQkFBVUMsZUFBS0MsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQVY7QUFDQSxXQUFLbEIsTUFBTCxHQUFjO0FBQ1pxQixvQkFBWUgsUUFBUUksVUFEUjtBQUVaQyxrQkFBVUwsUUFBUU0sUUFGTjtBQUdaQyxtQkFBV1AsUUFBUVEsUUFIUDtBQUlaQyxxQkFBYVQsUUFBUVMsV0FKVDtBQUtaQyx3QkFBZ0JWLFFBQVFVO0FBTFosT0FBZDtBQU9BLFdBQUt6QixxQkFBTDtBQUNBMEIsY0FBUUMsR0FBUixDQUFZLEtBQUs5QixNQUFqQjtBQUNEOzs7O0VBbEVnQ1UsZUFBS3FCLEk7O2tCQUFuQmpELEsiLCJmaWxlIjoic3RhdGlzdGljc2ZpdGVyIGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3Rvb2wnO1xuaW1wb3J0IHRvcGJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RvcGJhcic7XG5pbXBvcnQgbnRwaWNrZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vbnRwaWNrZXInO1xuXG5pbXBvcnQgY3NzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Nzc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5LnN5bmNcIjpcImlzb3BhY2l0eVwifSxcIm50cGlja2VyXCI6e1wibGFiZWxcIjpcIuetm+mAiVwiLFwidi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwiZml0bGVyX29wdGlvbnNcIixcInYtYmluZDpjaGVja2VkX2luZGV4LnN5bmNcIjpcImZpdGxlcl9pbmRleFwiLFwibnRrZXlcIjpcIm5hbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHRvcGJhcjogdG9wYmFyLFxuICAgIG50cGlja2VyOiBudHBpY2tlclxuICB9O1xuICBwcm9wcyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc29wYWNpdHk6IHRydWUsXG4gICAgdGl0bGU6ICfplIDllK7lrqLotYTmlbDmja4nLFxuICAgIGlzYmFjazogdHJ1ZSxcbiAgICBmaXRsZXJfaW5kZXg6IDAsXG4gICAgZml0bGVyX29wdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6ICdpbnRlbnRpb25fY2l0eScsXG4gICAgICAgIG5hbWU6ICfmjInln47luIInXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAnc2FsZXNfaWQnLFxuICAgICAgICBuYW1lOiAn5oyJ5Lq65ZGYJ1xuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ2NyZWF0ZV9kYXRlJyxcbiAgICAgICAgbmFtZTogJ+aMieaXpeacnydcbiAgICAgIH1cbiAgICBdLFxuICAgIHBhcmFtczoge30sXG4gICAgbGlzdDogW11cbiAgfVxuICB3YXRjaCA9IHtcbiAgICBmaXRsZXJfaW5kZXgoKSB7XG4gICAgICB0aGlzLmdldFNhbGVzVXNlckRhdGFHcm91cCgpO1xuICAgIH1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG5hdmlUb0xpc3QoKXtcbiAgICAgIGxldCBjaGFubmVsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hhbm5lbDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGU/JyArIHBhcmFtc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0U2FsZXNVc2VyRGF0YUdyb3VwKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLnBhcmFtc1snZ3JvdXBfdHlwZSddID0gdGhpcy5maXRsZXJfb3B0aW9uc1t0aGlzLmZpdGxlcl9pbmRleF0udmFsdWVcbiAgICBycS5nZXQoJ2dldFNhbGVzVXNlckRhdGFHcm91cCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5saXN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLnBhcmFtcylcbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgc3RhcnRfZGF0ZTogb3B0aW9ucy5zdGFydF90aW1lLFxuICAgICAgZW5kX2RhdGU6IG9wdGlvbnMuZW5kX3RpbWUsXG4gICAgICBkYXRhX3R5cGU6IG9wdGlvbnMuZGF0YXR5cGUsXG4gICAgICBlbXBsb3llZV9pZDogb3B0aW9ucy5lbXBsb3llZV9pZCxcbiAgICAgIGludGVudGlvbl9jaXR5OiBvcHRpb25zLmludGVudGlvbl9jaXR5XG4gICAgfVxuICAgIHRoaXMuZ2V0U2FsZXNVc2VyRGF0YUdyb3VwKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5wYXJhbXMpXG4gIH1cbn1cbiJdfQ==