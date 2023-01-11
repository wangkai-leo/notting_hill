'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _global = require('./../../common/global.js');

var _global2 = _interopRequireDefault(_global);

var _api = require('./../../common/api.js');

var _api2 = _interopRequireDefault(_api);

var _file = require('./../../common/utils/file.js');

var _file2 = _interopRequireDefault(_file);

var _config = require('./../../common/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fnav = function (_wepy$component) {
  _inherits(Fnav, _wepy$component);

  function Fnav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fnav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fnav.__proto__ || Object.getPrototypeOf(Fnav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      readonly: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      label: {
        type: String
      },
      size: {
        type: String
      },
      ntkey: {
        type: String
      },
      save_obj: {
        type: Object,
        twoWay: true
      }
    }, _this.components = {}, _this.data = {}, _this.methods = {
      deleteImg: function deleteImg(e) {
        var index = e.currentTarget.dataset.index;
        this.save_obj[this.ntkey].splice(index, 1);
      },
      viewCheck: function viewCheck(e) {
        if (this.save_obj[this.ntkey].length <= 0 || this.save_obj[this.ntkey].length == 1 && this.save_obj[this.ntkey][0] == "") {
          return;
        }
        _wepy2.default.previewImage({
          current: this.save_obj[this.ntkey][e.currentTarget.dataset.index],
          urls: this.save_obj[this.ntkey] //需要预览的图片链接列表,
        });
      },
      uploadFile: function uploadFile() {
        var that = this;
        wx.chooseImage({
          count: that.size - that.save_obj[that.ntkey].length, //最多可以选择的图片张数,
          success: function success(res) {
            _file2.default.upLoadImgs(_config2.default.ENV_URL + 'uploadCommProof', res.tempFilePaths, 0, [], [], function (names, urls) {
              that.save_obj[that.ntkey] = that.save_obj[that.ntkey].concat(urls);
              that.$apply();
            });
          },
          fail: function fail() {},
          complete: function complete() {}
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fnav, [{
    key: 'onLoad',
    value: function onLoad(options) {}
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJyZWFkb25seSIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImxhYmVsIiwiU3RyaW5nIiwic2l6ZSIsIm50a2V5Iiwic2F2ZV9vYmoiLCJPYmplY3QiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJkZWxldGVJbWciLCJlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNwbGljZSIsInZpZXdDaGVjayIsImxlbmd0aCIsIndlcHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInVwbG9hZEZpbGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic3VjY2VzcyIsImZpbGUiLCJ1cExvYWRJbWdzIiwiQyIsIkVOVl9VUkwiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZXMiLCJjb25jYXQiLCIkYXBwbHkiLCJmYWlsIiwiY29tcGxldGUiLCJldmVudHMiLCJvcHRpb25zIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE9BREU7QUFFUkMsaUJBQVMsS0FGRDtBQUdSQyxnQkFBUTtBQUhBLE9BREo7QUFNTkMsYUFBTztBQUNMSixjQUFNSztBQURELE9BTkQ7QUFTTkMsWUFBTTtBQUNKTixjQUFNSztBQURGLE9BVEE7QUFZTkUsYUFBTztBQUNMUCxjQUFNSztBQURELE9BWkQ7QUFlTkcsZ0JBQVU7QUFDUlIsY0FBTVMsTUFERTtBQUVSTixnQkFBUTtBQUZBO0FBZkosSyxRQW9CUk8sVSxHQUFhLEUsUUFDYkMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLENBREYsRUFDSztBQUNYLFlBQUlDLFFBQVFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUFwQztBQUNBLGFBQUtQLFFBQUwsQ0FBYyxLQUFLRCxLQUFuQixFQUEwQlcsTUFBMUIsQ0FBaUNILEtBQWpDLEVBQXdDLENBQXhDO0FBQ0QsT0FKTztBQUtSSSxlQUxRLHFCQUtFTCxDQUxGLEVBS0s7QUFDWCxZQUFHLEtBQUtOLFFBQUwsQ0FBYyxLQUFLRCxLQUFuQixFQUEwQmEsTUFBMUIsSUFBa0MsQ0FBbEMsSUFBc0MsS0FBS1osUUFBTCxDQUFjLEtBQUtELEtBQW5CLEVBQTBCYSxNQUExQixJQUFrQyxDQUFsQyxJQUFxQyxLQUFLWixRQUFMLENBQWMsS0FBS0QsS0FBbkIsRUFBMEIsQ0FBMUIsS0FBOEIsRUFBNUcsRUFBZ0g7QUFDOUc7QUFDRDtBQUNDYyx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsbUJBQVMsS0FBS2YsUUFBTCxDQUFjLEtBQUtELEtBQW5CLEVBQTBCTyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBbEQsQ0FETztBQUVoQlMsZ0JBQU0sS0FBS2hCLFFBQUwsQ0FBYyxLQUFLRCxLQUFuQixDQUZVLENBRWdCO0FBRmhCLFNBQWxCO0FBSUgsT0FiTztBQWNSa0IsZ0JBZFEsd0JBY0s7QUFDWCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0MsV0FBSCxDQUFlO0FBQ2JDLGlCQUFPSCxLQUFLcEIsSUFBTCxHQUFZb0IsS0FBS2xCLFFBQUwsQ0FBY2tCLEtBQUtuQixLQUFuQixFQUEwQmEsTUFEaEMsRUFDd0M7QUFDckRVLG1CQUFTLHNCQUFPO0FBQ2RDLDJCQUFLQyxVQUFMLENBQWdCQyxpQkFBRUMsT0FBRixHQUFZLGlCQUE1QixFQUErQ0MsSUFBSUMsYUFBbkQsRUFBa0UsQ0FBbEUsRUFBcUUsRUFBckUsRUFBeUUsRUFBekUsRUFBNkUsVUFBVUMsS0FBVixFQUFpQmIsSUFBakIsRUFBdUI7QUFDbEdFLG1CQUFLbEIsUUFBTCxDQUFja0IsS0FBS25CLEtBQW5CLElBQTRCbUIsS0FBS2xCLFFBQUwsQ0FBY2tCLEtBQUtuQixLQUFuQixFQUEwQitCLE1BQTFCLENBQWlDZCxJQUFqQyxDQUE1QjtBQUNBRSxtQkFBS2EsTUFBTDtBQUNELGFBSEQ7QUFJRCxXQVBZO0FBUWJDLGdCQUFNLGdCQUFNLENBQUcsQ0FSRjtBQVNiQyxvQkFBVSxvQkFBTSxDQUFHO0FBVE4sU0FBZjtBQVdEO0FBM0JPLEssUUErQlZDLE0sR0FBUyxFOzs7OzsyQkFGRkMsTyxFQUFTLENBQ2Y7Ozs7RUF0RCtCdEIsZUFBS3VCLFM7O2tCQUFsQi9DLEkiLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgRyBmcm9tICcuLi8uLi9jb21tb24vZ2xvYmFsLmpzJztcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpLmpzJztcclxuaW1wb3J0IGZpbGUgZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL2ZpbGUnO1xyXG5pbXBvcnQgQyBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm5hdiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIHJlYWRvbmx5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICB0d29XYXk6IHRydWVcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIG50a2V5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHNhdmVfb2JqOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICB9LFxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBkZWxldGVJbWcoZSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgdGhpcy5zYXZlX29ialt0aGlzLm50a2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfSxcclxuICAgIHZpZXdDaGVjayhlKSB7XHJcbiAgICAgIGlmKHRoaXMuc2F2ZV9vYmpbdGhpcy5udGtleV0ubGVuZ3RoPD0wfHwodGhpcy5zYXZlX29ialt0aGlzLm50a2V5XS5sZW5ndGg9PTEmJnRoaXMuc2F2ZV9vYmpbdGhpcy5udGtleV1bMF09PVwiXCIpKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICBjdXJyZW50OiB0aGlzLnNhdmVfb2JqW3RoaXMubnRrZXldW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XSxcclxuICAgICAgICAgIHVybHM6IHRoaXMuc2F2ZV9vYmpbdGhpcy5udGtleV0gLy/pnIDopoHpooTop4jnmoTlm77niYfpk77mjqXliJfooagsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBsb2FkRmlsZSgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IHRoYXQuc2l6ZSAtIHRoYXQuc2F2ZV9vYmpbdGhhdC5udGtleV0ubGVuZ3RoLCAvL+acgOWkmuWPr+S7pemAieaLqeeahOWbvueJh+W8oOaVsCxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgZmlsZS51cExvYWRJbWdzKEMuRU5WX1VSTCArICd1cGxvYWRDb21tUHJvb2YnLCByZXMudGVtcEZpbGVQYXRocywgMCwgW10sIFtdLCBmdW5jdGlvbiAobmFtZXMsIHVybHMpIHtcclxuICAgICAgICAgICAgdGhhdC5zYXZlX29ialt0aGF0Lm50a2V5XSA9IHRoYXQuc2F2ZV9vYmpbdGhhdC5udGtleV0uY29uY2F0KHVybHMpO1xyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoKSA9PiB7IH0sXHJcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHsgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gIH1cclxuICBldmVudHMgPSB7XHJcblxyXG4gIH07XHJcbn1cclxuIl19