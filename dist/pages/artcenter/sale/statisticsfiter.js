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
      }, {
        value: 'employee_team',
        name: '按团队分组'
      }],
      params: {},
      list: []
    }, _this.watch = {
      fitler_index: function fitler_index() {
        this.getSalesUserDataGroup();
      }
    }, _this.methods = {
      naviToList: function naviToList(e) {
        var channel = e.currentTarget.dataset.channel;
        _wepy2.default.navigateTo({
          url: '/pages/artcenter/sale/statisticfilterslist?where_map=' + channel + '&start_date=' + this.params.start_date + '&end_date=' + this.params.end_date
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/artcenter/sale/statisticsfiter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NmaXRlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNzcyIsImhlYWRlciIsInRvcGJhciIsIm50cGlja2VyIiwicHJvcHMiLCJkYXRhIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc2JhY2siLCJmaXRsZXJfaW5kZXgiLCJmaXRsZXJfb3B0aW9ucyIsInZhbHVlIiwibmFtZSIsInBhcmFtcyIsImxpc3QiLCJ3YXRjaCIsImdldFNhbGVzVXNlckRhdGFHcm91cCIsIm1ldGhvZHMiLCJuYXZpVG9MaXN0IiwiZSIsImNoYW5uZWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwidGhhdCIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5Iiwib3B0aW9ucyIsInRvb2wiLCJkZWNvZGVRckNvZGVQYXJhbSIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImRhdGFfdHlwZSIsImRhdGF0eXBlIiwiZW1wbG95ZWVfaWQiLCJpbnRlbnRpb25fY2l0eSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILFlBQVcsRUFBQyxTQUFRLElBQVQsRUFBYyx1QkFBc0IsZ0JBQXBDLEVBQXFELDZCQUE0QixjQUFqRixFQUFnRyxTQUFRLE1BQXhHLEVBQXZJLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyxnQkFBVUE7QUFKQSxLLFFBTVpDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxpQkFBVyxJQUROO0FBRUxDLGFBQU8sUUFGRjtBQUdMQyxjQUFRLElBSEg7QUFJTEMsb0JBQWMsQ0FKVDtBQUtMQyxzQkFBZ0IsQ0FDZDtBQUNFQyxlQUFPLGdCQURUO0FBRUVDLGNBQU07QUFGUixPQURjLEVBSVg7QUFDREQsZUFBTyxVQUROO0FBRURDLGNBQU07QUFGTCxPQUpXLEVBT1g7QUFDREQsZUFBTyxhQUROO0FBRURDLGNBQU07QUFGTCxPQVBXLEVBVVg7QUFDREQsZUFBTyxlQUROO0FBRURDLGNBQU07QUFGTCxPQVZXLENBTFg7QUFvQkxDLGNBQVEsRUFwQkg7QUFxQkxDLFlBQU07QUFyQkQsSyxRQXVCUEMsSyxHQUFRO0FBQ05OLGtCQURNLDBCQUNTO0FBQ2IsYUFBS08scUJBQUw7QUFDRDtBQUhLLEssUUFLUkMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsT0FBdEM7QUFDQUcsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSywwREFBMERMLE9BQTFELEdBQW9FLGNBQXBFLEdBQXFGLEtBQUtQLE1BQUwsQ0FBWWEsVUFBakcsR0FBOEcsWUFBOUcsR0FBNkgsS0FBS2IsTUFBTCxDQUFZYztBQURoSSxTQUFoQjtBQUdEO0FBTk8sSzs7Ozs7NENBUWM7QUFDdEIsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS2YsTUFBTCxDQUFZLFlBQVosSUFBNEIsS0FBS0gsY0FBTCxDQUFvQixLQUFLRCxZQUF6QixFQUF1Q0UsS0FBbkU7QUFDQWtCLHdCQUFHQyxHQUFILENBQU8sdUJBQVAsRUFBZ0M7QUFDOUIsYUFBSyxtQkFBVTtBQUNiRixlQUFLZCxJQUFMLEdBQVlpQixPQUFPMUIsSUFBUCxDQUFZQSxJQUF4QjtBQUNBdUIsZUFBS0ksTUFBTDtBQUNEO0FBSjZCLE9BQWhDLEVBS0csS0FBS25CLE1BTFI7QUFNRDs7OzJCQUNNb0IsTyxFQUFTO0FBQ2RBLGdCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLFdBQUtwQixNQUFMLEdBQWM7QUFDWmEsb0JBQVlPLFFBQVFHLFVBRFI7QUFFWlQsa0JBQVVNLFFBQVFJLFFBRk47QUFHWkMsbUJBQVdMLFFBQVFNLFFBSFA7QUFJWkMscUJBQWFQLFFBQVFPLFdBSlQ7QUFLWkMsd0JBQWdCUixRQUFRUTtBQUxaLE9BQWQ7QUFPQSxXQUFLekIscUJBQUw7QUFDQTBCLGNBQVFDLEdBQVIsQ0FBWSxLQUFLOUIsTUFBakI7QUFDRDs7OztFQXJFZ0NVLGVBQUtxQixJOztrQkFBbkJqRCxLIiwiZmlsZSI6InN0YXRpc3RpY3NmaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgdG9wYmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdG9wYmFyJztcbmltcG9ydCBudHBpY2tlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9udHBpY2tlcic7XG5cbmltcG9ydCBjc3MgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY3NzXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkuc3luY1wiOlwiaXNvcGFjaXR5XCJ9LFwibnRwaWNrZXJcIjp7XCJsYWJlbFwiOlwi562b6YCJXCIsXCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJmaXRsZXJfb3B0aW9uc1wiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwiZml0bGVyX2luZGV4XCIsXCJudGtleVwiOlwibmFtZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgdG9wYmFyOiB0b3BiYXIsXG4gICAgbnRwaWNrZXI6IG50cGlja2VyXG4gIH07XG4gIHByb3BzID0ge1xuICB9O1xuICBkYXRhID0ge1xuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+mUgOWUruWuoui1hOaVsOaNricsXG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGZpdGxlcl9pbmRleDogMCxcbiAgICBmaXRsZXJfb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICB2YWx1ZTogJ2ludGVudGlvbl9jaXR5JyxcbiAgICAgICAgbmFtZTogJ+aMieWfjuW4gidcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6ICdzYWxlc19pZCcsXG4gICAgICAgIG5hbWU6ICfmjInkurrlkZgnXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAnY3JlYXRlX2RhdGUnLFxuICAgICAgICBuYW1lOiAn5oyJ5pel5pyfJ1xuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ2VtcGxveWVlX3RlYW0nLFxuICAgICAgICBuYW1lOiAn5oyJ5Zui6Zif5YiG57uEJ1xuICAgICAgfVxuICAgIF0sXG4gICAgcGFyYW1zOiB7fSxcbiAgICBsaXN0OiBbXVxuICB9XG4gIHdhdGNoID0ge1xuICAgIGZpdGxlcl9pbmRleCgpIHtcbiAgICAgIHRoaXMuZ2V0U2FsZXNVc2VyRGF0YUdyb3VwKCk7XG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgY2hhbm5lbCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNoYW5uZWw7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvYXJ0Y2VudGVyL3NhbGUvc3RhdGlzdGljZmlsdGVyc2xpc3Q/d2hlcmVfbWFwPScgKyBjaGFubmVsICsgJyZzdGFydF9kYXRlPScgKyB0aGlzLnBhcmFtcy5zdGFydF9kYXRlICsgJyZlbmRfZGF0ZT0nICsgdGhpcy5wYXJhbXMuZW5kX2RhdGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGdldFNhbGVzVXNlckRhdGFHcm91cCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5wYXJhbXNbJ2dyb3VwX3R5cGUnXSA9IHRoaXMuZml0bGVyX29wdGlvbnNbdGhpcy5maXRsZXJfaW5kZXhdLnZhbHVlXG4gICAgcnEuZ2V0KCdnZXRTYWxlc1VzZXJEYXRhR3JvdXAnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQubGlzdCA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5wYXJhbXMpXG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdG9vbC5kZWNvZGVRckNvZGVQYXJhbShvcHRpb25zKTtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X2RhdGU6IG9wdGlvbnMuc3RhcnRfdGltZSxcbiAgICAgIGVuZF9kYXRlOiBvcHRpb25zLmVuZF90aW1lLFxuICAgICAgZGF0YV90eXBlOiBvcHRpb25zLmRhdGF0eXBlLFxuICAgICAgZW1wbG95ZWVfaWQ6IG9wdGlvbnMuZW1wbG95ZWVfaWQsXG4gICAgICBpbnRlbnRpb25fY2l0eTogb3B0aW9ucy5pbnRlbnRpb25fY2l0eVxuICAgIH1cbiAgICB0aGlzLmdldFNhbGVzVXNlckRhdGFHcm91cCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1zKVxuICB9XG59XG4iXX0=