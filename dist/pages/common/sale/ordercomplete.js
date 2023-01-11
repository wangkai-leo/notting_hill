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
      isback: true,
      isopacity: true,
      title: '已完成订单',
      is_hide: true,
      userList: null,
      sourceList: [],
      user: null
    }, _this.methods = {
      bindInputSearch: function bindInputSearch(e) {
        var key_word = e.detail.value;
        var pur = [];
        if (key_word) {
          this.sourceList.forEach(function (element) {
            if (element.order_id.indexOf(key_word) >= 0 || element.user_name.indexOf(key_word) >= 0 || element.user_mobile && element.user_mobile.indexOf(key_word) >= 0) {
              pur.push(element);
            };
          });
          this.userList = pur;
        } else {
          this.userList = this.sourceList;
        }
      },
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({
          url: '/pages/common/sale/customer?id=' + id
        });
      },
      toggleDisplay: function toggleDisplay(e) {
        var index = e.currentTarget.dataset.index;
        this.userList[index].is_hide = !this.userList[index].is_hide;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      var user = this.user = _wepy2.default.getStorageSync('user');
      _request2.default.get('gotFinishedUserInfo', {
        200: function _(result) {
          result.data.userList ? that.userList = result.data.userList : '';
          result.data.data ? that.userList = result.data.data : '';
          if (that.userList) {
            that.userList.forEach(function (element) {
              element['is_hide'] = true;
            });
          }
          that.sourceList = that.userList;
          that.$apply();
        }
      });
    }
    // onShareAppMessage() {
    //   return {
    //     title: '诺丁山',
    //     path: '/pages/index',
    //     imageUrl: 'none',
    //     success: res => {},
    //     fail: () => {},
    //     complete: () => {}
    //   };
    // }

  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/sale/ordercomplete'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyY29tcGxldGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjc3MiLCJoZWFkZXIiLCJkYXRhIiwiaXNiYWNrIiwiaXNvcGFjaXR5IiwidGl0bGUiLCJpc19oaWRlIiwidXNlckxpc3QiLCJzb3VyY2VMaXN0IiwidXNlciIsIm1ldGhvZHMiLCJiaW5kSW5wdXRTZWFyY2giLCJlIiwia2V5X3dvcmQiLCJkZXRhaWwiLCJ2YWx1ZSIsInB1ciIsImZvckVhY2giLCJlbGVtZW50Iiwib3JkZXJfaWQiLCJpbmRleE9mIiwidXNlcl9uYW1lIiwidXNlcl9tb2JpbGUiLCJwdXNoIiwiZ29Ub0RldGFpbCIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInRvZ2dsZURpc3BsYXkiLCJpbmRleCIsIm9wdGlvbnMiLCJ0aGF0IiwiZ2V0U3RvcmFnZVN5bmMiLCJycSIsImdldCIsInJlc3VsdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsV0FBS0EsYUFESyxFQUNBO0FBQ1ZDLGNBQVFBO0FBRkUsSyxRQUlaQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsYUFBTyxPQUhGO0FBSUxDLGVBQVMsSUFKSjtBQUtMQyxnQkFBVSxJQUxMO0FBTUxDLGtCQUFZLEVBTlA7QUFPTEMsWUFBTTtBQVBELEssUUFTUEMsTyxHQUFVO0FBQ1JDLHFCQURRLDJCQUNRQyxDQURSLEVBQ1c7QUFDakIsWUFBSUMsV0FBV0QsRUFBRUUsTUFBRixDQUFTQyxLQUF4QjtBQUNBLFlBQUlDLE1BQU0sRUFBVjtBQUNBLFlBQUlILFFBQUosRUFBYztBQUNaLGVBQUtMLFVBQUwsQ0FBZ0JTLE9BQWhCLENBQXdCLG1CQUFXO0FBQ2pDLGdCQUFJQyxRQUFRQyxRQUFSLENBQWlCQyxPQUFqQixDQUF5QlAsUUFBekIsS0FBc0MsQ0FBdEMsSUFDRkssUUFBUUcsU0FBUixDQUFrQkQsT0FBbEIsQ0FBMEJQLFFBQTFCLEtBQXVDLENBRHJDLElBRURLLFFBQVFJLFdBQVIsSUFBdUJKLFFBQVFJLFdBQVIsQ0FBb0JGLE9BQXBCLENBQTRCUCxRQUE1QixLQUF5QyxDQUZuRSxFQUV1RTtBQUNyRUcsa0JBQUlPLElBQUosQ0FBU0wsT0FBVDtBQUNEO0FBQ0YsV0FORDtBQU9BLGVBQUtYLFFBQUwsR0FBZ0JTLEdBQWhCO0FBQ0QsU0FURCxNQVNPO0FBQ0wsZUFBS1QsUUFBTCxHQUFnQixLQUFLQyxVQUFyQjtBQUNEO0FBQ0YsT0FoQk87QUFpQlJnQixnQkFqQlEsc0JBaUJHWixDQWpCSCxFQWlCTTtBQUNaLFlBQUlhLEtBQUtiLEVBQUVjLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUFqQztBQUNBRyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLG9DQUFvQ0w7QUFEM0IsU0FBaEI7QUFHRCxPQXRCTztBQXVCUk0sbUJBdkJRLHlCQXVCTW5CLENBdkJOLEVBdUJTO0FBQ2YsWUFBSW9CLFFBQVFwQixFQUFFYyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkssS0FBcEM7QUFDQSxhQUFLekIsUUFBTCxDQUFjeUIsS0FBZCxFQUFxQjFCLE9BQXJCLEdBQStCLENBQUMsS0FBS0MsUUFBTCxDQUFjeUIsS0FBZCxFQUFxQjFCLE9BQXJEO0FBQ0Q7QUExQk8sSzs7Ozs7MkJBNEJIMkIsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlBLE9BQU8sSUFBWDtBQUNBLFVBQUl6QixPQUFPLEtBQUtBLElBQUwsR0FBWW1CLGVBQUtPLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBdkI7QUFDQUMsd0JBQUdDLEdBQUgsQ0FBTyxxQkFBUCxFQUE4QjtBQUM1QixhQUFLLG1CQUFVO0FBQ2JDLGlCQUFPcEMsSUFBUCxDQUFZSyxRQUFaLEdBQXVCMkIsS0FBSzNCLFFBQUwsR0FBZ0IrQixPQUFPcEMsSUFBUCxDQUFZSyxRQUFuRCxHQUE4RCxFQUE5RDtBQUNBK0IsaUJBQU9wQyxJQUFQLENBQVlBLElBQVosR0FBbUJnQyxLQUFLM0IsUUFBTCxHQUFnQitCLE9BQU9wQyxJQUFQLENBQVlBLElBQS9DLEdBQXNELEVBQXREO0FBQ0EsY0FBSWdDLEtBQUszQixRQUFULEVBQW1CO0FBQ2pCMkIsaUJBQUszQixRQUFMLENBQWNVLE9BQWQsQ0FBc0IsbUJBQVc7QUFDL0JDLHNCQUFRLFNBQVIsSUFBcUIsSUFBckI7QUFDRCxhQUZEO0FBR0Q7QUFDRGdCLGVBQUsxQixVQUFMLEdBQWtCMEIsS0FBSzNCLFFBQXZCO0FBQ0EyQixlQUFLSyxNQUFMO0FBQ0Q7QUFYMkIsT0FBOUI7QUFjRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQTNFaUNYLGVBQUtZLEk7O2tCQUFuQjdDLEsiLCJmaWxlIjoib3JkZXJjb21wbGV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgRyBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2xvYmFsJztcbmltcG9ydCBycSBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgdG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvdG9vbCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3ZhbGlkYXRlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBkYXQgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Nzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIixcInYtYmluZDppc2JhY2sub25jZVwiOlwiaXNiYWNrXCIsXCJ2LWJpbmQ6aXNvcGFjaXR5Lm9uY2VcIjpcImlzb3BhY2l0eVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgaGVhZGVyOiBoZWFkZXJcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc2JhY2s6IHRydWUsXG4gICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgIHRpdGxlOiAn5bey5a6M5oiQ6K6i5Y2VJyxcbiAgICBpc19oaWRlOiB0cnVlLFxuICAgIHVzZXJMaXN0OiBudWxsLFxuICAgIHNvdXJjZUxpc3Q6IFtdLFxuICAgIHVzZXI6IG51bGwsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZElucHV0U2VhcmNoKGUpIHtcbiAgICAgIGxldCBrZXlfd29yZCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgbGV0IHB1ciA9IFtdO1xuICAgICAgaWYgKGtleV93b3JkKSB7XG4gICAgICAgIHRoaXMuc291cmNlTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50Lm9yZGVyX2lkLmluZGV4T2Yoa2V5X3dvcmQpID49IDAgfHxcbiAgICAgICAgICAgIGVsZW1lbnQudXNlcl9uYW1lLmluZGV4T2Yoa2V5X3dvcmQpID49IDAgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnVzZXJfbW9iaWxlICYmIGVsZW1lbnQudXNlcl9tb2JpbGUuaW5kZXhPZihrZXlfd29yZCkgPj0gMCkpIHtcbiAgICAgICAgICAgIHB1ci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gcHVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IHRoaXMuc291cmNlTGlzdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdvVG9EZXRhaWwoZSkge1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvY3VzdG9tZXI/aWQ9JyArIGlkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRvZ2dsZURpc3BsYXkoZSkge1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLnVzZXJMaXN0W2luZGV4XS5pc19oaWRlID0gIXRoaXMudXNlckxpc3RbaW5kZXhdLmlzX2hpZGU7XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyID0gdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHJxLmdldCgnZ290RmluaXNoZWRVc2VySW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgcmVzdWx0LmRhdGEudXNlckxpc3QgPyB0aGF0LnVzZXJMaXN0ID0gcmVzdWx0LmRhdGEudXNlckxpc3QgOiAnJztcbiAgICAgICAgcmVzdWx0LmRhdGEuZGF0YSA/IHRoYXQudXNlckxpc3QgPSByZXN1bHQuZGF0YS5kYXRhIDogJyc7XG4gICAgICAgIGlmICh0aGF0LnVzZXJMaXN0KSB7XG4gICAgICAgICAgdGhhdC51c2VyTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudFsnaXNfaGlkZSddID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LnNvdXJjZUxpc3QgPSB0aGF0LnVzZXJMaXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuICAvLyBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgdGl0bGU6ICfor7rkuIHlsbEnLFxuICAvLyAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXG4gIC8vICAgICBpbWFnZVVybDogJ25vbmUnLFxuICAvLyAgICAgc3VjY2VzczogcmVzID0+IHt9LFxuICAvLyAgICAgZmFpbDogKCkgPT4ge30sXG4gIC8vICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgLy8gICB9O1xuICAvLyB9XG59XG4iXX0=