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
            title: '分配存放申请',
            isback: true,
            gift_info: null,
            id: -1,
            teams_employee: null,
            employee_index: 0,
            user: null
        }, _this.methods = {
            confirm: function confirm() {
                var that = this;
                _request2.default.get("confirmGiftSave", {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    save_id: that.id
                });
            },
            assignTask: function assignTask() {
                var that = this;
                _request2.default.get("distributionGiftSave", {
                    200: function _(result) {
                        _wepy2.default.navigateBack({
                            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
                        });
                    }
                }, {
                    save_id: that.id,
                    employee_id: that.teams_employee[that.employee_index].id
                });
            },
            bindTeamChange: function bindTeamChange(e) {
                this.employee_index = e.detail.value;
            },
            bindInputClientMobile: function bindInputClientMobile(e) {
                this.gift_info.client_mobile = e.detail.value;
            },
            bindInputClientName: function bindInputClientName(e) {
                this.gift_info.client_name = e.detail.value;
            },
            bindInputArriveTime: function bindInputArriveTime(e) {
                this.gift_info.arrive_time = e.detail.value;
            },
            bindInputMark: function bindInputMark(e) {
                this.gift_info.remark = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            options = _tool2.default.decodeQrCodeParam(options);
            var that = this;
            that.id = options.id;
            var is_create = options.is_create;
            this.user = _wepy2.default.getStorageSync('user');
            _request2.default.get('getGiftSaveInfo', {
                200: function _(result) {
                    that.gift_info = result.data.data;
                    that.$apply();
                }
            }, {
                save_id: that.id
            });
            if (this.user.is_excute_leader) {
                _request2.default.get("getLoginerTeamEmployee", {
                    200: function _(result) {
                        that.teams_employee = result.data.employee_list;
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/common/execute/depot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG90LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3NzIiwiaGVhZGVyIiwiZGF0YSIsImlzb3BhY2l0eSIsInRpdGxlIiwiaXNiYWNrIiwiZ2lmdF9pbmZvIiwiaWQiLCJ0ZWFtc19lbXBsb3llZSIsImVtcGxveWVlX2luZGV4IiwidXNlciIsIm1ldGhvZHMiLCJjb25maXJtIiwidGhhdCIsInJxIiwiZ2V0Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2F2ZV9pZCIsImFzc2lnblRhc2siLCJlbXBsb3llZV9pZCIsImJpbmRUZWFtQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0Q2xpZW50TW9iaWxlIiwiY2xpZW50X21vYmlsZSIsImJpbmRJbnB1dENsaWVudE5hbWUiLCJjbGllbnRfbmFtZSIsImJpbmRJbnB1dEFycml2ZVRpbWUiLCJhcnJpdmVfdGltZSIsImJpbmRJbnB1dE1hcmsiLCJyZW1hcmsiLCJvcHRpb25zIiwidG9vbCIsImRlY29kZVFyQ29kZVBhcmFtIiwiaXNfY3JlYXRlIiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXN1bHQiLCIkYXBwbHkiLCJpc19leGN1dGVfbGVhZGVyIiwiZW1wbG95ZWVfbGlzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxzQkFBcUIsUUFBcEUsRUFBNkUseUJBQXdCLFdBQXJHLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUJBQUtBLGFBREgsRUFDUTtBQUNWQyxvQkFBUUE7QUFGTixTLFFBSU5DLEksR0FBTztBQUNIQyx1QkFBVyxJQURSO0FBRUhDLG1CQUFPLFFBRko7QUFHSEMsb0JBQVEsSUFITDtBQUlIQyx1QkFBVyxJQUpSO0FBS0hDLGdCQUFJLENBQUMsQ0FMRjtBQU1IQyw0QkFBZ0IsSUFOYjtBQU9IQyw0QkFBZ0IsQ0FQYjtBQVFIQyxrQkFBTTtBQVJILFMsUUFVUEMsTyxHQUFVO0FBQ05DLG1CQURNLHFCQUNJO0FBQ04sb0JBQUlDLE9BQUssSUFBVDtBQUNBQyxrQ0FBR0MsR0FBSCxDQUFPLGlCQUFQLEVBQTBCO0FBQ3RCLHlCQUFLLG1CQUFVO0FBQ1hDLHVDQUFLQyxZQUFMLENBQWtCO0FBQ2RDLG1DQUFPLENBRE8sQ0FDTDtBQURLLHlCQUFsQjtBQUdIO0FBTHFCLGlCQUExQixFQU1HO0FBQ0NDLDZCQUFTTixLQUFLTjtBQURmLGlCQU5IO0FBU0gsYUFaSztBQWFOYSxzQkFiTSx3QkFhTztBQUNULG9CQUFJUCxPQUFPLElBQVg7QUFDQUMsa0NBQUdDLEdBQUgsQ0FBTyxzQkFBUCxFQUErQjtBQUMzQix5QkFBSyxtQkFBVTtBQUNYQyx1Q0FBS0MsWUFBTCxDQUFrQjtBQUNkQyxtQ0FBTyxDQURPLENBQ0w7QUFESyx5QkFBbEI7QUFHSDtBQUwwQixpQkFBL0IsRUFNRztBQUNDQyw2QkFBU04sS0FBS04sRUFEZjtBQUVDYyxpQ0FBYVIsS0FBS0wsY0FBTCxDQUFvQkssS0FBS0osY0FBekIsRUFBeUNGO0FBRnZELGlCQU5IO0FBVUgsYUF6Qks7QUEwQk5lLDBCQTFCTSwwQkEwQlNDLENBMUJULEVBMEJZO0FBQ2QscUJBQUtkLGNBQUwsR0FBc0JjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0I7QUFDSCxhQTVCSztBQTZCTkMsaUNBN0JNLGlDQTZCZ0JILENBN0JoQixFQTZCbUI7QUFDckIscUJBQUtqQixTQUFMLENBQWVxQixhQUFmLEdBQStCSixFQUFFQyxNQUFGLENBQVNDLEtBQXhDO0FBQ0gsYUEvQks7QUFnQ05HLCtCQWhDTSwrQkFnQ2NMLENBaENkLEVBZ0NpQjtBQUNuQixxQkFBS2pCLFNBQUwsQ0FBZXVCLFdBQWYsR0FBNkJOLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEM7QUFDSCxhQWxDSztBQW1DTkssK0JBbkNNLCtCQW1DY1AsQ0FuQ2QsRUFtQ2lCO0FBQ25CLHFCQUFLakIsU0FBTCxDQUFleUIsV0FBZixHQUE2QlIsRUFBRUMsTUFBRixDQUFTQyxLQUF0QztBQUNILGFBckNLO0FBc0NOTyx5QkF0Q00seUJBc0NRVCxDQXRDUixFQXNDVztBQUNiLHFCQUFLakIsU0FBTCxDQUFlMkIsTUFBZixHQUF3QlYsRUFBRUMsTUFBRixDQUFTQyxLQUFqQztBQUNIO0FBeENLLFM7Ozs7OytCQTBDSFMsTyxFQUFTO0FBQ1pBLHNCQUFVQyxlQUFLQyxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBVjtBQUNBLGdCQUFJckIsT0FBTyxJQUFYO0FBQ0FBLGlCQUFLTixFQUFMLEdBQVUyQixRQUFRM0IsRUFBbEI7QUFDQSxnQkFBSThCLFlBQVlILFFBQVFHLFNBQXhCO0FBQ0EsaUJBQUszQixJQUFMLEdBQVlNLGVBQUtzQixjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQXhCLDhCQUFHQyxHQUFILENBQU8saUJBQVAsRUFBMEI7QUFDdEIscUJBQUssbUJBQVU7QUFDWEYseUJBQUtQLFNBQUwsR0FBaUJpQyxPQUFPckMsSUFBUCxDQUFZQSxJQUE3QjtBQUNBVyx5QkFBSzJCLE1BQUw7QUFDSDtBQUpxQixhQUExQixFQUtHO0FBQ0NyQix5QkFBU04sS0FBS047QUFEZixhQUxIO0FBUUEsZ0JBQUksS0FBS0csSUFBTCxDQUFVK0IsZ0JBQWQsRUFBZ0M7QUFDNUIzQixrQ0FBR0MsR0FBSCxDQUFPLHdCQUFQLEVBQWlDO0FBQzdCLHlCQUFLLG1CQUFVO0FBQ1hGLDZCQUFLTCxjQUFMLEdBQXNCK0IsT0FBT3JDLElBQVAsQ0FBWXdDLGFBQWxDO0FBQ0E3Qiw2QkFBSzJCLE1BQUw7QUFDSDtBQUo0QixpQkFBakMsRUFLRyxFQUxIO0FBTUg7QUFDSjs7O2lDQUNRLENBQUU7Ozs7RUFuRm9CeEIsZUFBSzJCLEk7O2tCQUFuQmhELEsiLCJmaWxlIjoiZGVwb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgcnEgZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuICAgIGltcG9ydCB0b29sIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy90b29sJztcbiAgICBpbXBvcnQgY3NzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY3NzJztcbiAgICBpbXBvcnQgaGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJoZWFkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6aXNiYWNrLm9uY2VcIjpcImlzYmFja1wiLFwidi1iaW5kOmlzb3BhY2l0eS5vbmNlXCI6XCJpc29wYWNpdHlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY3NzOiBjc3MsIC8v5qC35byP6KGoXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXNvcGFjaXR5OiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICfliIbphY3lrZjmlL7nlLPor7cnLFxuICAgICAgICAgICAgaXNiYWNrOiB0cnVlLFxuICAgICAgICAgICAgZ2lmdF9pbmZvOiBudWxsLFxuICAgICAgICAgICAgaWQ6IC0xLFxuICAgICAgICAgICAgdGVhbXNfZW1wbG95ZWU6IG51bGwsXG4gICAgICAgICAgICBlbXBsb3llZV9pbmRleDogMCxcbiAgICAgICAgICAgIHVzZXI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoXCJjb25maXJtR2lmdFNhdmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDEgLy/ov5Tlm57nmoTpobXpnaLmlbDvvIzlpoLmnpwgZGVsdGEg5aSn5LqO546w5pyJ6aG16Z2i5pWw77yM5YiZ6L+U5Zue5Yiw6aaW6aG1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVfaWQ6IHRoYXQuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3NpZ25UYXNrKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBycS5nZXQoXCJkaXN0cmlidXRpb25HaWZ0U2F2ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMSAvL+i/lOWbnueahOmhtemdouaVsO+8jOWmguaenCBkZWx0YSDlpKfkuo7njrDmnInpobXpnaLmlbDvvIzliJnov5Tlm57liLDpppbpobUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZV9pZDogdGhhdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVfaWQ6IHRoYXQudGVhbXNfZW1wbG95ZWVbdGhhdC5lbXBsb3llZV9pbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kVGVhbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZV9pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dENsaWVudE1vYmlsZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0X2luZm8uY2xpZW50X21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dENsaWVudE5hbWUoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2lmdF9pbmZvLmNsaWVudF9uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0QXJyaXZlVGltZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0X2luZm8uYXJyaXZlX3RpbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNYXJrKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdpZnRfaW5mby5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0b29sLmRlY29kZVFyQ29kZVBhcmFtKG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICBsZXQgaXNfY3JlYXRlID0gb3B0aW9ucy5pc19jcmVhdGU7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgICAgICBycS5nZXQoJ2dldEdpZnRTYXZlSW5mbycsIHtcbiAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2lmdF9pbmZvID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc2F2ZV9pZDogdGhhdC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuaXNfZXhjdXRlX2xlYWRlcikge1xuICAgICAgICAgICAgICAgIHJxLmdldChcImdldExvZ2luZXJUZWFtRW1wbG95ZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRlYW1zX2VtcGxveWVlID0gcmVzdWx0LmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge31cbiAgICB9XG4iXX0=