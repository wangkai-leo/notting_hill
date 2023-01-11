'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//框架

exports.default = {
  //获得当前执行方法的方法名称（无效）
  getFnName: function getFnName(fn) {
    return (/^[\s\(]*function(?:\s+([\w$_][\w\d$_]*))?\(/.exec(fn.toString())[1] || ''
    );
  },


  //获取解析二维码的参数
  decodeQrCodeParam: function decodeQrCodeParam(options) {
    if (options.scene) {
      var str = decodeURIComponent(options.scene);
      var str_arr = str.split('&');
      if (str_arr.length > 1) {
        str_arr.forEach(function (element) {
          var item = element.split('=');
          options[item[0]] = item[1];
        });
      }
    }
    return options;
  },


  //系统提示
  systemToast: function systemToast(text) {
    _wepy2.default.showToast({
      title: text, //提示的内容,
      icon: 'none', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: function success(res) {}
    });
  },


  //检查是否具有写入相册的权限，没有去手动授权
  checkWritePhotosAlbum: function checkWritePhotosAlbum(default_handle, has_handle, ready_handle) {
    wx.getSetting({
      success: function success(res) {
        // 第一，直接调取保存，系统会自动调取授权
        if (res.authSetting['scope.writePhotosAlbum'] == undefined) {
          default_handle();
        } else if (!res.authSetting['scope.writePhotosAlbum']) {
          // 不授权
          has_handle();
        } else {
          // 授权
          ready_handle();
        }
      }
    });
  },


  //获取上一页的的名字
  getPrevPageName: function getPrevPageName() {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    return prevPage;
  },


  //设置上一页的data数据
  setPrevPageData: function setPrevPageData(key, value) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    prevPage.setData({
      key: value
    }); //设置数据
  },


  //动态设置tab内容
  setTab: function setTab(list) {
    for (var i = 0; i < list.length; i++) {
      wx.setTabBarItem({
        index: i,
        text: list.text,
        iconPath: list.iconPath,
        selectedIconPath: list.selectedIconPath
      });
    }
  },


  //页面回到顶部
  pageScrollTo: function pageScrollTo(position, duration) {
    wx.pageScrollTo({
      scrollTop: position,
      duration: duration
    });
  },


  //获得触碰开始的位置
  getTouchStartPosition: function getTouchStartPosition(e) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  },


  //获得触碰接触的的位置
  getTouchEndPositon: function getTouchEndPositon(e) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    };
  },


  // getNumNo(m, n) {
  //   return Math.floor(Math.random() * (m - n) + n);
  // },

  //供使用者调用  
  trim: function trim(s) {
    return this.trimRight(this.trimLeft(s));
  },

  //去掉左边的空白  
  trimLeft: function trimLeft(s) {
    if (s == null) {
      return "";
    }
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(0)) != -1) {
      var j = 0,
          i = str.length;
      while (j < i && whitespace.indexOf(str.charAt(j)) != -1) {
        j++;
      }
      str = str.substring(j, i);
    }
    return str;
  },

  //去掉右边的空白 www.2cto.com   
  trimRight: function trimRight(s) {
    if (s == null) return "";
    var whitespace = new String(" \t\n\r");
    var str = new String(s);
    if (whitespace.indexOf(str.charAt(str.length - 1)) != -1) {
      var i = str.length - 1;
      while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1) {
        i--;
      }
      str = str.substring(0, i + 1);
    }
    return str;
  },
  getClientMenuRect: function getClientMenuRect() {
    return wx.getMenuButtonBoundingClientRect();
  },
  setTabBarBadge: function setTabBarBadge(text) {
    if (text == 0) {
      _wepy2.default.removeTabBarBadge({
        index: 3
      });
    } else {
      _wepy2.default.setTabBarBadge({
        index: 3, //tabBar的哪一项，从左边算起,
        text: text + '' //显示的文本，超过 3 个字符则显示成“…”,
      });
    }
  },
  copyText: function copyText(text) {
    var that = this;
    wx.setClipboardData({
      data: text,
      success: function success(res) {
        wx.getClipboardData({
          success: function success(res) {
            that.systemToast('Copied');
          }
        });
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wuanMiXSwibmFtZXMiOlsiZ2V0Rm5OYW1lIiwiZm4iLCJleGVjIiwidG9TdHJpbmciLCJkZWNvZGVRckNvZGVQYXJhbSIsIm9wdGlvbnMiLCJzY2VuZSIsInN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsInN0cl9hcnIiLCJzcGxpdCIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwiZWxlbWVudCIsInN5c3RlbVRvYXN0IiwidGV4dCIsIndlcHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwiY2hlY2tXcml0ZVBob3Rvc0FsYnVtIiwiZGVmYXVsdF9oYW5kbGUiLCJoYXNfaGFuZGxlIiwicmVhZHlfaGFuZGxlIiwid3giLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJ1bmRlZmluZWQiLCJnZXRQcmV2UGFnZU5hbWUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwic2V0UHJldlBhZ2VEYXRhIiwia2V5IiwidmFsdWUiLCJzZXREYXRhIiwic2V0VGFiIiwibGlzdCIsImkiLCJzZXRUYWJCYXJJdGVtIiwiaW5kZXgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJwYWdlU2Nyb2xsVG8iLCJwb3NpdGlvbiIsInNjcm9sbFRvcCIsImdldFRvdWNoU3RhcnRQb3NpdGlvbiIsImUiLCJ4IiwidG91Y2hlcyIsInBhZ2VYIiwieSIsInBhZ2VZIiwiZ2V0VG91Y2hFbmRQb3NpdG9uIiwiY2hhbmdlZFRvdWNoZXMiLCJ0cmltIiwicyIsInRyaW1SaWdodCIsInRyaW1MZWZ0Iiwid2hpdGVzcGFjZSIsIlN0cmluZyIsImluZGV4T2YiLCJjaGFyQXQiLCJqIiwic3Vic3RyaW5nIiwiZ2V0Q2xpZW50TWVudVJlY3QiLCJnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0Iiwic2V0VGFiQmFyQmFkZ2UiLCJyZW1vdmVUYWJCYXJCYWRnZSIsImNvcHlUZXh0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RCxVQS9KYSxvQkErSkoxRCxJQS9KSSxFQStKRTtBQUNiLFFBQUkyRCxPQUFLLElBQVQ7QUFDQS9DLE9BQUdnRCxnQkFBSCxDQUFvQjtBQUNsQkMsWUFBTTdELElBRFk7QUFFbEJPLGVBQVMsaUJBQVVPLEdBQVYsRUFBZTtBQUN0QkYsV0FBR2tELGdCQUFILENBQW9CO0FBQ2xCdkQsbUJBQVMsaUJBQVVPLEdBQVYsRUFBZTtBQUN0QjZDLGlCQUFLNUQsV0FBTCxDQUFpQixRQUFqQjtBQUNEO0FBSGlCLFNBQXBCO0FBS0Q7QUFSaUIsS0FBcEI7QUFVRDtBQTNLWSxDIiwiZmlsZSI6InRvb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JzsgLy/moYbmnrZcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvL+iOt+W+l+W9k+WJjeaJp+ihjOaWueazleeahOaWueazleWQjeensO+8iOaXoOaViO+8iVxuICBnZXRGbk5hbWUoZm4pIHtcbiAgICByZXR1cm4gKC9eW1xcc1xcKF0qZnVuY3Rpb24oPzpcXHMrKFtcXHckX11bXFx3XFxkJF9dKikpP1xcKC8pLmV4ZWMoZm4udG9TdHJpbmcoKSlbMV0gfHwgJyc7XG4gIH0sXG5cbiAgLy/ojrflj5bop6PmnpDkuoznu7TnoIHnmoTlj4LmlbBcbiAgZGVjb2RlUXJDb2RlUGFyYW0ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnNjZW5lKSB7XG4gICAgICBsZXQgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2NlbmUpO1xuICAgICAgbGV0IHN0cl9hcnIgPSBzdHIuc3BsaXQoJyYnKTtcbiAgICAgIGlmIChzdHJfYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc3RyX2Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGxldCBpdGVtID0gZWxlbWVudC5zcGxpdCgnPScpO1xuICAgICAgICAgIG9wdGlvbnNbaXRlbVswXV0gPSBpdGVtWzFdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH0sXG5cbiAgLy/ns7vnu5/mj5DnpLpcbiAgc3lzdGVtVG9hc3QodGV4dCkge1xuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0ZXh0LCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXG4gICAgICBkdXJhdGlvbjogMjAwMCwgLy/lu7bov5/ml7bpl7QsXG4gICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7fVxuICAgIH0pO1xuICB9LFxuXG4gIC8v5qOA5p+l5piv5ZCm5YW35pyJ5YaZ5YWl55u45YaM55qE5p2D6ZmQ77yM5rKh5pyJ5Y675omL5Yqo5o6I5p2DXG4gIGNoZWNrV3JpdGVQaG90b3NBbGJ1bShkZWZhdWx0X2hhbmRsZSwgaGFzX2hhbmRsZSwgcmVhZHlfaGFuZGxlKSB7XG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAvLyDnrKzkuIDvvIznm7TmjqXosIPlj5bkv53lrZjvvIzns7vnu5/kvJroh6rliqjosIPlj5bmjojmnYNcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUud3JpdGVQaG90b3NBbGJ1bSddID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlZmF1bHRfaGFuZGxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUud3JpdGVQaG90b3NBbGJ1bSddKSB7IC8vIOS4jeaOiOadg1xuICAgICAgICAgIGhhc19oYW5kbGUoKTtcbiAgICAgICAgfSBlbHNlIHsgLy8g5o6I5p2DXG4gICAgICAgICAgcmVhZHlfaGFuZGxlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8v6I635Y+W5LiK5LiA6aG155qE55qE5ZCN5a2XXG4gIGdldFByZXZQYWdlTmFtZSgpIHtcbiAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICB2YXIgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXTsgLy/kuIrkuIDkuKrpobXpnaJcbiAgICByZXR1cm4gcHJldlBhZ2U7XG4gIH0sXG5cbiAgLy/orr7nva7kuIrkuIDpobXnmoRkYXRh5pWw5o2uXG4gIHNldFByZXZQYWdlRGF0YShrZXksIHZhbHVlKSB7XG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgdmFyIHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXG4gICAgcHJldlBhZ2Uuc2V0RGF0YSh7XG4gICAgICBrZXk6IHZhbHVlXG4gICAgfSkgLy/orr7nva7mlbDmja5cbiAgfSxcblxuICAvL+WKqOaAgeiuvue9rnRhYuWGheWuuVxuICBzZXRUYWIobGlzdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgd3guc2V0VGFiQmFySXRlbSh7XG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB0ZXh0OiBsaXN0LnRleHQsXG4gICAgICAgIGljb25QYXRoOiBsaXN0Lmljb25QYXRoLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBsaXN0LnNlbGVjdGVkSWNvblBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuXG4gIC8v6aG16Z2i5Zue5Yiw6aG26YOoXG4gIHBhZ2VTY3JvbGxUbyhwb3NpdGlvbiwgZHVyYXRpb24pIHtcbiAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgc2Nyb2xsVG9wOiBwb3NpdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0pXG4gIH0sXG5cbiAgLy/ojrflvpfop6bnorDlvIDlp4vnmoTkvY3nva5cbiAgZ2V0VG91Y2hTdGFydFBvc2l0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZS50b3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgeTogZS50b3VjaGVzWzBdLnBhZ2VZXG4gICAgfVxuICB9LFxuXG4gIC8v6I635b6X6Kem56Kw5o6l6Kem55qE55qE5L2N572uXG4gIGdldFRvdWNoRW5kUG9zaXRvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfVxuICB9LFxuXG5cbiAgLy8gZ2V0TnVtTm8obSwgbikge1xuICAvLyAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobSAtIG4pICsgbik7XG4gIC8vIH0sXG5cbiAgLy/kvpvkvb/nlKjogIXosIPnlKggIFxuICB0cmltKHMpIHtcbiAgICByZXR1cm4gdGhpcy50cmltUmlnaHQodGhpcy50cmltTGVmdChzKSk7XG4gIH0sXG4gIC8v5Y675o6J5bem6L6555qE56m655m9ICBcbiAgdHJpbUxlZnQocykge1xuICAgIGlmIChzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB2YXIgd2hpdGVzcGFjZSA9IG5ldyBTdHJpbmcoXCIgXFx0XFxuXFxyXCIpO1xuICAgIHZhciBzdHIgPSBuZXcgU3RyaW5nKHMpO1xuICAgIGlmICh3aGl0ZXNwYWNlLmluZGV4T2Yoc3RyLmNoYXJBdCgwKSkgIT0gLTEpIHtcbiAgICAgIHZhciBqID0gMCxcbiAgICAgICAgaSA9IHN0ci5sZW5ndGg7XG4gICAgICB3aGlsZSAoaiA8IGkgJiYgd2hpdGVzcGFjZS5pbmRleE9mKHN0ci5jaGFyQXQoaikpICE9IC0xKSB7XG4gICAgICAgIGorKztcbiAgICAgIH1cbiAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoaiwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH0sXG4gIC8v5Y675o6J5Y+z6L6555qE56m655m9IHd3dy4yY3RvLmNvbSAgIFxuICB0cmltUmlnaHQocykge1xuICAgIGlmIChzID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHZhciB3aGl0ZXNwYWNlID0gbmV3IFN0cmluZyhcIiBcXHRcXG5cXHJcIik7XG4gICAgdmFyIHN0ciA9IG5ldyBTdHJpbmcocyk7XG4gICAgaWYgKHdoaXRlc3BhY2UuaW5kZXhPZihzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSkgIT0gLTEpIHtcbiAgICAgIHZhciBpID0gc3RyLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+PSAwICYmIHdoaXRlc3BhY2UuaW5kZXhPZihzdHIuY2hhckF0KGkpKSAhPSAtMSkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcblxuICBnZXRDbGllbnRNZW51UmVjdCgpIHtcbiAgICByZXR1cm4gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9LFxuXG4gIHNldFRhYkJhckJhZGdlKHRleHQpIHtcbiAgICBpZiAodGV4dCA9PSAwKSB7XG4gICAgICB3ZXB5LnJlbW92ZVRhYkJhckJhZGdlKHtcbiAgICAgICAgaW5kZXg6IDNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZXB5LnNldFRhYkJhckJhZGdlKHtcbiAgICAgICAgaW5kZXg6IDMsIC8vdGFiQmFy55qE5ZOq5LiA6aG577yM5LuO5bem6L65566X6LW3LFxuICAgICAgICB0ZXh0OiB0ZXh0ICsgJycgLy/mmL7npLrnmoTmlofmnKzvvIzotoXov4cgMyDkuKrlrZfnrKbliJnmmL7npLrmiJDigJzigKbigJ0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29weVRleHQodGV4dCkge1xuICAgIGxldCB0aGF0PXRoaXM7XG4gICAgd3guc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICBkYXRhOiB0ZXh0LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB3eC5nZXRDbGlwYm9hcmREYXRhKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB0aGF0LnN5c3RlbVRvYXN0KCdDb3BpZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSJdfQ==