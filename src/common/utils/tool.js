import wepy from 'wepy'; //框架

export default {
  //获得当前执行方法的方法名称（无效）
  getFnName(fn) {
    return (/^[\s\(]*function(?:\s+([\w$_][\w\d$_]*))?\(/).exec(fn.toString())[1] || '';
  },

  //获取解析二维码的参数
  decodeQrCodeParam(options) {
    if (options.scene) {
      let str = decodeURIComponent(options.scene);
      let str_arr = str.split('&');
      if (str_arr.length > 1) {
        str_arr.forEach(element => {
          let item = element.split('=');
          options[item[0]] = item[1];
        });
      }
    }
    return options;
  },

  //系统提示
  systemToast(text) {
    wepy.showToast({
      title: text, //提示的内容,
      icon: 'none', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {}
    });
  },

  //检查是否具有写入相册的权限，没有去手动授权
  checkWritePhotosAlbum(default_handle, has_handle, ready_handle) {
    wx.getSetting({
      success(res) {
        // 第一，直接调取保存，系统会自动调取授权
        if (res.authSetting['scope.writePhotosAlbum'] == undefined) {
          default_handle();
        } else if (!res.authSetting['scope.writePhotosAlbum']) { // 不授权
          has_handle();
        } else { // 授权
          ready_handle();
        }
      }
    })
  },

  //获取上一页的的名字
  getPrevPageName() {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    return prevPage;
  },

  //设置上一页的data数据
  setPrevPageData(key, value) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    prevPage.setData({
      key: value
    }) //设置数据
  },

  //动态设置tab内容
  setTab(list) {
    for (let i = 0; i < list.length; i++) {
      wx.setTabBarItem({
        index: i,
        text: list.text,
        iconPath: list.iconPath,
        selectedIconPath: list.selectedIconPath
      });
    }
  },


  //页面回到顶部
  pageScrollTo(position, duration) {
    wx.pageScrollTo({
      scrollTop: position,
      duration: duration
    })
  },

  //获得触碰开始的位置
  getTouchStartPosition(e) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    }
  },

  //获得触碰接触的的位置
  getTouchEndPositon(e) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    }
  },


  // getNumNo(m, n) {
  //   return Math.floor(Math.random() * (m - n) + n);
  // },

  //供使用者调用  
  trim(s) {
    return this.trimRight(this.trimLeft(s));
  },
  //去掉左边的空白  
  trimLeft(s) {
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
  trimRight(s) {
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

  getClientMenuRect() {
    return wx.getMenuButtonBoundingClientRect();
  },

  setTabBarBadge(text) {
    if (text == 0) {
      wepy.removeTabBarBadge({
        index: 3
      });
    } else {
      wepy.setTabBarBadge({
        index: 3, //tabBar的哪一项，从左边算起,
        text: text + '' //显示的文本，超过 3 个字符则显示成“…”,
      });
    }
  },

  copyText(text) {
    let that=this;
    wx.setClipboardData({
      data: text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            that.systemToast('Copied');
          }
        })
      }
    })
  }
}