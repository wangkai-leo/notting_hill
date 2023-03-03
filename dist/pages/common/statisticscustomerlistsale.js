'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tool = require('./../../common/utils/tool.js');

var _tool2 = _interopRequireDefault(_tool);

var _css = require('./../../components/css.js');

var _css2 = _interopRequireDefault(_css);

var _header = require('./../../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _topbar = require('./../../components/topbar.js');

var _topbar2 = _interopRequireDefault(_topbar);

var _statisticscustomerlistsale = require('./../../components/statisticscustomerlistsale.js');

var _statisticscustomerlistsale2 = _interopRequireDefault(_statisticscustomerlistsale);

var _statisticscustomerlistfilter = require('./../../components/statisticscustomerlistfilter.js');

var _statisticscustomerlistfilter2 = _interopRequireDefault(_statisticscustomerlistfilter);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:title.once": "title", "v-bind:isback.once": "isback", "v-bind:isopacity.once": "isopacity" }, "statisticscustomerlistsale": { "v-bind:total.sync": "total", "v-bind:list.sync": "list", "xmlns:wx": "" }, "statisticscustomerlistfilter": { "v-bind:filter_option.sync": "filter_option", "v-bind:channel_arr.sync": "channel_arr", "v-bind:intention_arr.sync": "intention_arr", "v-bind:sales_arr.sync": "sales_arr", "v-bind:intention_city_arr.sync": "intention_city_arr", "xmlns:v-on": "" } }, _this.$events = { "statisticscustomerlistfilter": { "v-on:search": "search" } }, _this.components = {
      css: _css2.default, //样式表
      header: _header2.default,
      topbar: _topbar2.default,
      statisticscustomerlistsale: _statisticscustomerlistsale2.default,
      statisticscustomerlistfilter: _statisticscustomerlistfilter2.default
    }, _this.data = {
      isback: true,
      isopacity: true,
      title: '客资',
      user: null,

      list: [],
      origin_list: [],

      list_success: [],
      params: null,
      display_filter: false,
      total: 0,

      filter_option: {
        start_date: '',
        end_date: '',
        order_id: '',
        channel_name: '',
        intention_name: '',
        sales_name: '',
        intention_city_name: ''
      },

      channel_arr: [],
      intention_arr: [],
      sales_arr: [],
      intention_city_arr: [],

      list_size: 1000
    }, _this.methods = {
      editStatus: function editStatus() {
        this.display_filter = true;
      },
      search: function search() {
        var _this2 = this;

        var pur = [];
        this.origin_list.forEach(function (element) {
          var is_add = true;
          var s_order_id = _this2.filter_option.order_id;
          {
            if (!element.create_time || element.create_time < new Date(_this2.filter_option.start_date).getTime() / 1000 || element.create_time > new Date(_this2.filter_option.end_date).getTime() / 1000) {
              is_add = false;
            };
          }
          if (s_order_id && element.order_id.indexOf(s_order_id) < 0) {
            is_add = false;
          }
          if (_this2.filter_option.channel_name && element.channel_name != _this2.filter_option.channel_name) {
            is_add = false;
          }
          if (_this2.filter_option.intention_name && element.intention_name != _this2.filter_option.intention_name) {
            is_add = false;
          }
          if (_this2.filter_option.sales_name && element.sales_name != _this2.filter_option.sales_name) {
            is_add = false;
          }
          if (_this2.filter_option.intention_city_name && element.intention_city_name != _this2.filter_option.intention_city_name) {
            is_add = false;
          }
          if (is_add) {
            pur.push(element);
          }
        });
        this.display_filter = false;
        this.total = pur.length;
        this.list = pur.slice(0, this.list_size);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'arrayHaveItem',
    value: function arrayHaveItem(list, it) {
      var has = false;
      list.forEach(function (el) {
        if (el == it) {
          has = true;
        }
      });
      if (!it) {
        has = true;
      }
      return has;
    }
  }, {
    key: 'prepareFilterCondition',
    value: function prepareFilterCondition() {
      var _this3 = this;

      this.origin_list.forEach(function (element) {
        if (!_this3.arrayHaveItem(_this3.channel_arr, element.channel_name)) {
          _this3.channel_arr.push(element.channel_name);
        }
        if (!_this3.arrayHaveItem(_this3.intention_arr, element.intention_name)) {
          _this3.intention_arr.push(element.intention_name);
        }
        if (!_this3.arrayHaveItem(_this3.sales_arr, element.sales_name)) {
          _this3.sales_arr.push(element.sales_name);
        }
        if (!_this3.arrayHaveItem(_this3.intention_city_arr, element.intention_city_name)) {
          _this3.intention_city_arr.push(element.intention_city_name);
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var _this4 = this;

      var that = this;
      that.params = _tool2.default.decodeQrCodeParam(options);
      that.user = _wepy2.default.getStorageSync('user');
      if (that.user.is_sale) {
        _request2.default.get('getDataStatisticsDetail', {
          200: function _(result) {
            that.list = that.origin_list = result.data.data;
            that.prepareFilterCondition();
            that.total = that.origin_list.length;
            that.list = that.origin_list.slice(0, _this4.list_size);
            that.$apply();
          }
        }, {
          map: that.params.map
        });
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/statisticscustomerlistsale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwidG9wYmFyIiwic3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUiLCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0ZmlsdGVyIiwiZGF0YSIsImlzYmFjayIsImlzb3BhY2l0eSIsInRpdGxlIiwidXNlciIsImxpc3QiLCJvcmlnaW5fbGlzdCIsImxpc3Rfc3VjY2VzcyIsInBhcmFtcyIsImRpc3BsYXlfZmlsdGVyIiwidG90YWwiLCJmaWx0ZXJfb3B0aW9uIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwib3JkZXJfaWQiLCJjaGFubmVsX25hbWUiLCJpbnRlbnRpb25fbmFtZSIsInNhbGVzX25hbWUiLCJpbnRlbnRpb25fY2l0eV9uYW1lIiwiY2hhbm5lbF9hcnIiLCJpbnRlbnRpb25fYXJyIiwic2FsZXNfYXJyIiwiaW50ZW50aW9uX2NpdHlfYXJyIiwibGlzdF9zaXplIiwibWV0aG9kcyIsImVkaXRTdGF0dXMiLCJzZWFyY2giLCJwdXIiLCJmb3JFYWNoIiwiaXNfYWRkIiwic19vcmRlcl9pZCIsImVsZW1lbnQiLCJjcmVhdGVfdGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaW5kZXhPZiIsInB1c2giLCJsZW5ndGgiLCJzbGljZSIsIml0IiwiaGFzIiwiZWwiLCJhcnJheUhhdmVJdGVtIiwib3B0aW9ucyIsInRoYXQiLCJ0b29sIiwiZGVjb2RlUXJDb2RlUGFyYW0iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zYWxlIiwicnEiLCJnZXQiLCJyZXN1bHQiLCJwcmVwYXJlRmlsdGVyQ29uZGl0aW9uIiwiJGFwcGx5IiwibWFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0Msc0JBQXFCLFFBQXBFLEVBQTZFLHlCQUF3QixXQUFyRyxFQUFWLEVBQTRILDhCQUE2QixFQUFDLHFCQUFvQixPQUFyQixFQUE2QixvQkFBbUIsTUFBaEQsRUFBdUQsWUFBVyxFQUFsRSxFQUF6SixFQUErTixnQ0FBK0IsRUFBQyw2QkFBNEIsZUFBN0IsRUFBNkMsMkJBQTBCLGFBQXZFLEVBQXFGLDZCQUE0QixlQUFqSCxFQUFpSSx5QkFBd0IsV0FBekosRUFBcUssa0NBQWlDLG9CQUF0TSxFQUEyTixjQUFhLEVBQXhPLEVBQTlQLEUsUUFDVEMsTyxHQUFVLEVBQUMsZ0NBQStCLEVBQUMsZUFBYyxRQUFmLEVBQWhDLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFdBQUtBLGFBREssRUFDQTtBQUNWQyxjQUFRQSxnQkFGRTtBQUdWQyxjQUFRQSxnQkFIRTtBQUlWQyxrQ0FBNEJBLG9DQUpsQjtBQUtWQyxvQ0FBOEJBO0FBTHBCLEssUUFPWkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxZQUFNLElBSkQ7O0FBTUxDLFlBQU0sRUFORDtBQU9MQyxtQkFBYSxFQVBSOztBQVNMQyxvQkFBYyxFQVRUO0FBVUxDLGNBQVEsSUFWSDtBQVdMQyxzQkFBZ0IsS0FYWDtBQVlMQyxhQUFPLENBWkY7O0FBY0xDLHFCQUFlO0FBQ2JDLG9CQUFZLEVBREM7QUFFYkMsa0JBQVUsRUFGRztBQUdiQyxrQkFBVSxFQUhHO0FBSWJDLHNCQUFjLEVBSkQ7QUFLYkMsd0JBQWdCLEVBTEg7QUFNYkMsb0JBQVksRUFOQztBQU9iQyw2QkFBcUI7QUFQUixPQWRWOztBQXdCTEMsbUJBQWEsRUF4QlI7QUF5QkxDLHFCQUFlLEVBekJWO0FBMEJMQyxpQkFBVyxFQTFCTjtBQTJCTEMsMEJBQW9CLEVBM0JmOztBQTZCTEMsaUJBQVU7QUE3QkwsSyxRQStCUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsYUFBS2hCLGNBQUwsR0FBc0IsSUFBdEI7QUFDRCxPQUhPO0FBSVJpQixZQUpRLG9CQUlDO0FBQUE7O0FBQ1AsWUFBSUMsTUFBTSxFQUFWO0FBQ0EsYUFBS3JCLFdBQUwsQ0FBaUJzQixPQUFqQixDQUF5QixtQkFBVztBQUNsQyxjQUFJQyxTQUFTLElBQWI7QUFDQSxjQUFJQyxhQUFhLE9BQUtuQixhQUFMLENBQW1CRyxRQUFwQztBQUNBO0FBQ0UsZ0JBQUksQ0FBQ2lCLFFBQVFDLFdBQVQsSUFBd0JELFFBQVFDLFdBQVIsR0FBc0IsSUFBSUMsSUFBSixDQUFTLE9BQUt0QixhQUFMLENBQW1CQyxVQUE1QixFQUF3Q3NCLE9BQXhDLEtBQW9ELElBQWxHLElBQTBHSCxRQUFRQyxXQUFSLEdBQXNCLElBQUlDLElBQUosQ0FBUyxPQUFLdEIsYUFBTCxDQUFtQkUsUUFBNUIsRUFBc0NxQixPQUF0QyxLQUFrRCxJQUF0TCxFQUE0TDtBQUMxTEwsdUJBQVMsS0FBVDtBQUNEO0FBQ0Y7QUFDRCxjQUFJQyxjQUFjQyxRQUFRakIsUUFBUixDQUFpQnFCLE9BQWpCLENBQXlCTCxVQUF6QixJQUF1QyxDQUF6RCxFQUE0RDtBQUMxREQscUJBQVMsS0FBVDtBQUNEO0FBQ0QsY0FBSSxPQUFLbEIsYUFBTCxDQUFtQkksWUFBbkIsSUFBbUNnQixRQUFRaEIsWUFBUixJQUF3QixPQUFLSixhQUFMLENBQW1CSSxZQUFsRixFQUFnRztBQUM5RmMscUJBQVMsS0FBVDtBQUNEO0FBQ0QsY0FBSSxPQUFLbEIsYUFBTCxDQUFtQkssY0FBbkIsSUFBcUNlLFFBQVFmLGNBQVIsSUFBMEIsT0FBS0wsYUFBTCxDQUFtQkssY0FBdEYsRUFBc0c7QUFDcEdhLHFCQUFTLEtBQVQ7QUFDRDtBQUNELGNBQUksT0FBS2xCLGFBQUwsQ0FBbUJNLFVBQW5CLElBQWlDYyxRQUFRZCxVQUFSLElBQXNCLE9BQUtOLGFBQUwsQ0FBbUJNLFVBQTlFLEVBQTBGO0FBQ3hGWSxxQkFBUyxLQUFUO0FBQ0Q7QUFDRCxjQUFJLE9BQUtsQixhQUFMLENBQW1CTyxtQkFBbkIsSUFBMENhLFFBQVFiLG1CQUFSLElBQStCLE9BQUtQLGFBQUwsQ0FBbUJPLG1CQUFoRyxFQUFxSDtBQUNuSFcscUJBQVMsS0FBVDtBQUNEO0FBQ0QsY0FBSUEsTUFBSixFQUFZO0FBQ1ZGLGdCQUFJUyxJQUFKLENBQVNMLE9BQVQ7QUFDRDtBQUNGLFNBMUJEO0FBMkJBLGFBQUt0QixjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsYUFBS0MsS0FBTCxHQUFhaUIsSUFBSVUsTUFBakI7QUFDQSxhQUFLaEMsSUFBTCxHQUFVc0IsSUFBSVcsS0FBSixDQUFVLENBQVYsRUFBYSxLQUFLZixTQUFsQixDQUFWO0FBQ0Q7QUFwQ08sSzs7Ozs7a0NBc0NJbEIsSSxFQUFNa0MsRSxFQUFJO0FBQ3RCLFVBQUlDLE1BQU0sS0FBVjtBQUNBbkMsV0FBS3VCLE9BQUwsQ0FBYSxjQUFNO0FBQ2pCLFlBQUlhLE1BQU1GLEVBQVYsRUFBYztBQUNaQyxnQkFBTSxJQUFOO0FBQ0Q7QUFDRixPQUpEO0FBS0EsVUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDUEMsY0FBTSxJQUFOO0FBQ0Q7QUFDRCxhQUFPQSxHQUFQO0FBQ0Q7Ozs2Q0FDd0I7QUFBQTs7QUFDdkIsV0FBS2xDLFdBQUwsQ0FBaUJzQixPQUFqQixDQUF5QixtQkFBVztBQUNsQyxZQUFJLENBQUMsT0FBS2MsYUFBTCxDQUFtQixPQUFLdkIsV0FBeEIsRUFBcUNZLFFBQVFoQixZQUE3QyxDQUFMLEVBQWlFO0FBQy9ELGlCQUFLSSxXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0JMLFFBQVFoQixZQUE5QjtBQUNEO0FBQ0QsWUFBSSxDQUFDLE9BQUsyQixhQUFMLENBQW1CLE9BQUt0QixhQUF4QixFQUF1Q1csUUFBUWYsY0FBL0MsQ0FBTCxFQUFxRTtBQUNuRSxpQkFBS0ksYUFBTCxDQUFtQmdCLElBQW5CLENBQXdCTCxRQUFRZixjQUFoQztBQUNEO0FBQ0QsWUFBSSxDQUFDLE9BQUswQixhQUFMLENBQW1CLE9BQUtyQixTQUF4QixFQUFtQ1UsUUFBUWQsVUFBM0MsQ0FBTCxFQUE2RDtBQUMzRCxpQkFBS0ksU0FBTCxDQUFlZSxJQUFmLENBQW9CTCxRQUFRZCxVQUE1QjtBQUNEO0FBQ0QsWUFBSSxDQUFDLE9BQUt5QixhQUFMLENBQW1CLE9BQUtwQixrQkFBeEIsRUFBNENTLFFBQVFiLG1CQUFwRCxDQUFMLEVBQStFO0FBQzdFLGlCQUFLSSxrQkFBTCxDQUF3QmMsSUFBeEIsQ0FBNkJMLFFBQVFiLG1CQUFyQztBQUNEO0FBQ0YsT0FiRDtBQWNEOzs7MkJBQ015QixPLEVBQVM7QUFBQTs7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS3BDLE1BQUwsR0FBY3FDLGVBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFkO0FBQ0FDLFdBQUt4QyxJQUFMLEdBQVkyQyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxVQUFJSixLQUFLeEMsSUFBTCxDQUFVNkMsT0FBZCxFQUF1QjtBQUNyQkMsMEJBQUdDLEdBQUgsQ0FBTyx5QkFBUCxFQUFrQztBQUNoQyxlQUFLLG1CQUFVO0FBQ2JQLGlCQUFLdkMsSUFBTCxHQUFZdUMsS0FBS3RDLFdBQUwsR0FBbUI4QyxPQUFPcEQsSUFBUCxDQUFZQSxJQUEzQztBQUNBNEMsaUJBQUtTLHNCQUFMO0FBQ0FULGlCQUFLbEMsS0FBTCxHQUFha0MsS0FBS3RDLFdBQUwsQ0FBaUIrQixNQUE5QjtBQUNBTyxpQkFBS3ZDLElBQUwsR0FBWXVDLEtBQUt0QyxXQUFMLENBQWlCZ0MsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEIsT0FBS2YsU0FBL0IsQ0FBWjtBQUNBcUIsaUJBQUtVLE1BQUw7QUFDRDtBQVArQixTQUFsQyxFQVFHO0FBQ0RDLGVBQUtYLEtBQUtwQyxNQUFMLENBQVkrQztBQURoQixTQVJIO0FBV0Q7QUFDRjs7OzZCQUNRLENBRVI7Ozs7RUFoSWdDUixlQUFLUyxJOztrQkFBbkJsRSxLIiwiZmlsZSI6InN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBycSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHRvcGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RvcGJhcic7XG5pbXBvcnQgc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSc7XG5pbXBvcnQgc3RhdGlzdGljc2N1c3RvbWVybGlzdGZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RmaWx0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVhZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5vbmNlXCI6XCJ0aXRsZVwiLFwidi1iaW5kOmlzYmFjay5vbmNlXCI6XCJpc2JhY2tcIixcInYtYmluZDppc29wYWNpdHkub25jZVwiOlwiaXNvcGFjaXR5XCJ9LFwic3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGVcIjp7XCJ2LWJpbmQ6dG90YWwuc3luY1wiOlwidG90YWxcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0ZmlsdGVyXCI6e1widi1iaW5kOmZpbHRlcl9vcHRpb24uc3luY1wiOlwiZmlsdGVyX29wdGlvblwiLFwidi1iaW5kOmNoYW5uZWxfYXJyLnN5bmNcIjpcImNoYW5uZWxfYXJyXCIsXCJ2LWJpbmQ6aW50ZW50aW9uX2Fyci5zeW5jXCI6XCJpbnRlbnRpb25fYXJyXCIsXCJ2LWJpbmQ6c2FsZXNfYXJyLnN5bmNcIjpcInNhbGVzX2FyclwiLFwidi1iaW5kOmludGVudGlvbl9jaXR5X2Fyci5zeW5jXCI6XCJpbnRlbnRpb25fY2l0eV9hcnJcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0ZmlsdGVyXCI6e1widi1vbjpzZWFyY2hcIjpcInNlYXJjaFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNzczogY3NzLCAvL+agt+W8j+ihqFxuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHRvcGJhcjogdG9wYmFyLFxuICAgIHN0YXRpc3RpY3NjdXN0b21lcmxpc3RzYWxlOiBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZSxcbiAgICBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0ZmlsdGVyOiBzdGF0aXN0aWNzY3VzdG9tZXJsaXN0ZmlsdGVyXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaXNiYWNrOiB0cnVlLFxuICAgIGlzb3BhY2l0eTogdHJ1ZSxcbiAgICB0aXRsZTogJ+Wuoui1hCcsXG4gICAgdXNlcjogbnVsbCxcblxuICAgIGxpc3Q6IFtdLFxuICAgIG9yaWdpbl9saXN0OiBbXSxcblxuICAgIGxpc3Rfc3VjY2VzczogW10sXG4gICAgcGFyYW1zOiBudWxsLFxuICAgIGRpc3BsYXlfZmlsdGVyOiBmYWxzZSxcbiAgICB0b3RhbDogMCxcblxuICAgIGZpbHRlcl9vcHRpb246IHtcbiAgICAgIHN0YXJ0X2RhdGU6ICcnLFxuICAgICAgZW5kX2RhdGU6ICcnLFxuICAgICAgb3JkZXJfaWQ6ICcnLFxuICAgICAgY2hhbm5lbF9uYW1lOiAnJyxcbiAgICAgIGludGVudGlvbl9uYW1lOiAnJyxcbiAgICAgIHNhbGVzX25hbWU6ICcnLFxuICAgICAgaW50ZW50aW9uX2NpdHlfbmFtZTogJydcbiAgICB9LFxuXG4gICAgY2hhbm5lbF9hcnI6IFtdLFxuICAgIGludGVudGlvbl9hcnI6IFtdLFxuICAgIHNhbGVzX2FycjogW10sXG4gICAgaW50ZW50aW9uX2NpdHlfYXJyOiBbXSxcblxuICAgIGxpc3Rfc2l6ZToxMDAwLFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGVkaXRTdGF0dXMoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlfZmlsdGVyID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNlYXJjaCgpIHtcbiAgICAgIGxldCBwdXIgPSBbXTtcbiAgICAgIHRoaXMub3JpZ2luX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGlzX2FkZCA9IHRydWU7XG4gICAgICAgIGxldCBzX29yZGVyX2lkID0gdGhpcy5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkO1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKCFlbGVtZW50LmNyZWF0ZV90aW1lIHx8IGVsZW1lbnQuY3JlYXRlX3RpbWUgPCBuZXcgRGF0ZSh0aGlzLmZpbHRlcl9vcHRpb24uc3RhcnRfZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCB8fCBlbGVtZW50LmNyZWF0ZV90aW1lID4gbmV3IERhdGUodGhpcy5maWx0ZXJfb3B0aW9uLmVuZF9kYXRlKS5nZXRUaW1lKCkgLyAxMDAwKSB7XG4gICAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzX29yZGVyX2lkICYmIGVsZW1lbnQub3JkZXJfaWQuaW5kZXhPZihzX29yZGVyX2lkKSA8IDApIHtcbiAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJfb3B0aW9uLmNoYW5uZWxfbmFtZSAmJiBlbGVtZW50LmNoYW5uZWxfbmFtZSAhPSB0aGlzLmZpbHRlcl9vcHRpb24uY2hhbm5lbF9uYW1lKSB7XG4gICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fbmFtZSAmJiBlbGVtZW50LmludGVudGlvbl9uYW1lICE9IHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fbmFtZSkge1xuICAgICAgICAgIGlzX2FkZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcl9vcHRpb24uc2FsZXNfbmFtZSAmJiBlbGVtZW50LnNhbGVzX25hbWUgIT0gdGhpcy5maWx0ZXJfb3B0aW9uLnNhbGVzX25hbWUpIHtcbiAgICAgICAgICBpc19hZGQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWx0ZXJfb3B0aW9uLmludGVudGlvbl9jaXR5X25hbWUgJiYgZWxlbWVudC5pbnRlbnRpb25fY2l0eV9uYW1lICE9IHRoaXMuZmlsdGVyX29wdGlvbi5pbnRlbnRpb25fY2l0eV9uYW1lKSB7XG4gICAgICAgICAgaXNfYWRkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX2FkZCkge1xuICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGxheV9maWx0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMudG90YWwgPSBwdXIubGVuZ3RoO1xuICAgICAgdGhpcy5saXN0PXB1ci5zbGljZSgwLCB0aGlzLmxpc3Rfc2l6ZSk7XG4gICAgfSxcbiAgfTtcbiAgYXJyYXlIYXZlSXRlbShsaXN0LCBpdCkge1xuICAgIGxldCBoYXMgPSBmYWxzZTtcbiAgICBsaXN0LmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsID09IGl0KSB7XG4gICAgICAgIGhhcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpdCkge1xuICAgICAgaGFzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhcztcbiAgfVxuICBwcmVwYXJlRmlsdGVyQ29uZGl0aW9uKCkge1xuICAgIHRoaXMub3JpZ2luX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5hcnJheUhhdmVJdGVtKHRoaXMuY2hhbm5lbF9hcnIsIGVsZW1lbnQuY2hhbm5lbF9uYW1lKSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxfYXJyLnB1c2goZWxlbWVudC5jaGFubmVsX25hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmFycmF5SGF2ZUl0ZW0odGhpcy5pbnRlbnRpb25fYXJyLCBlbGVtZW50LmludGVudGlvbl9uYW1lKSkge1xuICAgICAgICB0aGlzLmludGVudGlvbl9hcnIucHVzaChlbGVtZW50LmludGVudGlvbl9uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5hcnJheUhhdmVJdGVtKHRoaXMuc2FsZXNfYXJyLCBlbGVtZW50LnNhbGVzX25hbWUpKSB7XG4gICAgICAgIHRoaXMuc2FsZXNfYXJyLnB1c2goZWxlbWVudC5zYWxlc19uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5hcnJheUhhdmVJdGVtKHRoaXMuaW50ZW50aW9uX2NpdHlfYXJyLCBlbGVtZW50LmludGVudGlvbl9jaXR5X25hbWUpKSB7XG4gICAgICAgIHRoaXMuaW50ZW50aW9uX2NpdHlfYXJyLnB1c2goZWxlbWVudC5pbnRlbnRpb25fY2l0eV9uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnBhcmFtcyA9IHRvb2wuZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucyk7XG4gICAgdGhhdC51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGlmICh0aGF0LnVzZXIuaXNfc2FsZSkge1xuICAgICAgcnEuZ2V0KCdnZXREYXRhU3RhdGlzdGljc0RldGFpbCcsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQubGlzdCA9IHRoYXQub3JpZ2luX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoYXQucHJlcGFyZUZpbHRlckNvbmRpdGlvbigpXG4gICAgICAgICAgdGhhdC50b3RhbCA9IHRoYXQub3JpZ2luX2xpc3QubGVuZ3RoO1xuICAgICAgICAgIHRoYXQubGlzdCA9IHRoYXQub3JpZ2luX2xpc3Quc2xpY2UoMCwgdGhpcy5saXN0X3NpemUpO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbWFwOiB0aGF0LnBhcmFtcy5tYXBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hvdygpIHtcblxuICB9XG59XG4iXX0=