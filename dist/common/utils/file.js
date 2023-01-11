'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tool = require('./tool.js');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  //下载多张图片 并处理 前端生成图片比较有用
  downLoadFiles: function downLoadFiles(index, list, cb, param) {
    var that = this;
    if (index == 0) {
      param = [];
    } else {
      param = param;
    }
    wx.downloadFile({
      url: list[index], // 下载资源的 url
      success: function success(res) {
        // console.log('成功下载一张')
        index++;
        param.push(res.tempFilePath);
        if (index == list.length) {
          console.log('获得下载后的图片列表');
          console.log(param);
          cb(param);
        } else {
          that.downLoadFiles(index, list, cb, param);
        }
      },
      fail: function fail(res) {
        console.log('下载失败');
        _wepy2.default.hideLoading();
        console.log(list[index]);
        console.log(res);
      }
    });
  },


  //下载文件
  downLoadFile: function downLoadFile(url, cb) {
    wx.downloadFile({
      url: url, // 下载资源的 url
      success: function success(res) {
        cb(res.tempFilePath);
      },
      fail: function fail(res) {
        console.log('下载失败');
        console.log(res);
      }
    });
  },


  //保存图片到相册
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum(filePath) {
    wx.saveImageToPhotosAlbum({
      filePath: filePath,
      success: function success(result) {
        _wepy2.default.hideLoading();
        _tool2.default.systemToast('已保存到本地相册');
      },
      fail: function fail(res) {
        _wepy2.default.hideLoading();
      }
    });
  },


  //上传多张图片
  upLoadImgs: function upLoadImgs(s_url, a_imgs, n_index, a_filenames, a_fileurls, f_cb) {
    var that = this;
    wx.showLoading({
      title: 'Uploading...', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: function success(res) {}
    });
    console.log('kaishi');
    wx.uploadFile({
      url: s_url, //开发者服务器 url
      // url: s_url+'?notting_debug=hang&uid='+wepy.getStorageSync('user').uid, //开发者服务器 url
      header: {
        'Content-Type': 'multipart/form-data'
      },
      formData: {
        notting_debug: 'hang',
        uid: _wepy2.default.getStorageSync('user').uid
      },
      filePath: a_imgs[n_index], //要上传文件资源的路径
      name: 'myfile', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      success: function success(result) {
        console.log('上传...');
        console.log(a_imgs[n_index]);
        var res = JSON.parse(result.data);
        if (res.code == 200) {
          a_filenames.push(res.filePath);
          a_fileurls.push(res.fileUrl);
          n_index++;
          if (n_index < a_imgs.length) {
            that.upLoadImgs(s_url, a_imgs, n_index, a_filenames, a_fileurls, f_cb);
          } else {
            wx.hideLoading();
            if (f_cb) {
              f_cb(a_filenames, a_fileurls);
            }
          }
        }
      },
      fail: function fail() {
        console.log('上传失败');
      },
      complete: function complete() {}
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsiZG93bkxvYWRGaWxlcyIsImluZGV4IiwibGlzdCIsImNiIiwicGFyYW0iLCJ0aGF0Iiwid3giLCJkb3dubG9hZEZpbGUiLCJ1cmwiLCJzdWNjZXNzIiwicHVzaCIsInJlcyIsInRlbXBGaWxlUGF0aCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwid2VweSIsImhpZGVMb2FkaW5nIiwiZG93bkxvYWRGaWxlIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwicmVzdWx0IiwidG9vbCIsInN5c3RlbVRvYXN0IiwidXBMb2FkSW1ncyIsInNfdXJsIiwiYV9pbWdzIiwibl9pbmRleCIsImFfZmlsZW5hbWVzIiwiYV9maWxldXJscyIsImZfY2IiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInVwbG9hZEZpbGUiLCJoZWFkZXIiLCJmb3JtRGF0YSIsIm5vdHRpbmdfZGVidWciLCJ1aWQiLCJnZXRTdG9yYWdlU3luYyIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiY29kZSIsImZpbGVVcmwiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2I7QUFDQUEsZUFGYSx5QkFFQ0MsS0FGRCxFQUVRQyxJQUZSLEVBRWNDLEVBRmQsRUFFa0JDLEtBRmxCLEVBRXlCO0FBQ3BDLFFBQUlDLE9BQU8sSUFBWDtBQUNBLFFBQUlKLFNBQVMsQ0FBYixFQUFnQjtBQUNkRyxjQUFRLEVBQVI7QUFDRCxLQUZELE1BRU87QUFDTEEsY0FBUUEsS0FBUjtBQUNEO0FBQ0RFLE9BQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsV0FBS04sS0FBS0QsS0FBTCxDQURTLEVBQ0k7QUFDbEJRLGVBQVMsc0JBQU87QUFDZDtBQUNBUjtBQUNBRyxjQUFNTSxJQUFOLENBQVdDLElBQUlDLFlBQWY7QUFDQSxZQUFJWCxTQUFTQyxLQUFLVyxNQUFsQixFQUEwQjtBQUN4QkMs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Q1JBLG1CQUFLRixXQUFMLEVBQWtCQyxVQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BN0JXO0FBOEJaZCxZQUFNLGdCQUFNO0FBQ1ZGLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNELE9BaENXO0FBaUNaZ0MsZ0JBQVUsb0JBQU0sQ0FBRTtBQWpDTixLQUFkO0FBbUNEO0FBekdZLEMiLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHRvb2wgZnJvbSAnLi90b29sJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvL+S4i+i9veWkmuW8oOWbvueJhyDlubblpITnkIYg5YmN56uv55Sf5oiQ5Zu+54mH5q+U6L6D5pyJ55SoXG4gIGRvd25Mb2FkRmlsZXMoaW5kZXgsIGxpc3QsIGNiLCBwYXJhbSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgcGFyYW0gPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW0gPSBwYXJhbTtcbiAgICB9XG4gICAgd3guZG93bmxvYWRGaWxlKHtcbiAgICAgIHVybDogbGlzdFtpbmRleF0sIC8vIOS4i+i9vei1hOa6kOeahCB1cmxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmiJDlip/kuIvovb3kuIDlvKAnKVxuICAgICAgICBpbmRleCsrO1xuICAgICAgICBwYXJhbS5wdXNoKHJlcy50ZW1wRmlsZVBhdGgpO1xuICAgICAgICBpZiAoaW5kZXggPT0gbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6I635b6X5LiL6L295ZCO55qE5Zu+54mH5YiX6KGoJyk7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFyYW0pO1xuICAgICAgICAgIGNiKHBhcmFtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LmRvd25Mb2FkRmlsZXMoaW5kZXgsIGxpc3QsIGNiLCBwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfkuIvovb3lpLHotKUnKTtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0W2luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy/kuIvovb3mlofku7ZcbiAgZG93bkxvYWRGaWxlKHVybCwgY2IpIHtcbiAgICB3eC5kb3dubG9hZEZpbGUoe1xuICAgICAgdXJsOiB1cmwsIC8vIOS4i+i9vei1hOa6kOeahCB1cmxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGNiKHJlcy50ZW1wRmlsZVBhdGgpXG4gICAgICB9LFxuICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5LiL6L295aSx6LSlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy/kv53lrZjlm77niYfliLDnm7jlhoxcbiAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bShmaWxlUGF0aCkge1xuICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICB0b29sLnN5c3RlbVRvYXN0KCflt7Lkv53lrZjliLDmnKzlnLDnm7jlhownKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuXG4gIC8v5LiK5Lyg5aSa5byg5Zu+54mHXG4gIHVwTG9hZEltZ3Moc191cmwsIGFfaW1ncywgbl9pbmRleCwgYV9maWxlbmFtZXMsIGFfZmlsZXVybHMsIGZfY2IpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICdVcGxvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2thaXNoaScpXG4gICAgd3gudXBsb2FkRmlsZSh7XG4gICAgICB1cmw6IHNfdXJsLCAvL+W8gOWPkeiAheacjeWKoeWZqCB1cmxcbiAgICAgIC8vIHVybDogc191cmwrJz9ub3R0aW5nX2RlYnVnPWhhbmcmdWlkPScrd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpLnVpZCwgLy/lvIDlj5HogIXmnI3liqHlmaggdXJsXG4gICAgICBoZWFkZXI6IHsgXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICB9LFxuICAgICAgZm9ybURhdGE6e1xuICAgICAgICBub3R0aW5nX2RlYnVnOidoYW5nJyxcbiAgICAgICAgdWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJykudWlkXG4gICAgICB9LFxuICAgICAgZmlsZVBhdGg6IGFfaW1nc1tuX2luZGV4XSwgLy/opoHkuIrkvKDmlofku7botYTmupDnmoTot6/lvoRcbiAgICAgIG5hbWU6ICdteWZpbGUnLCAvL+aWh+S7tuWvueW6lOeahCBrZXkgLCDlvIDlj5HogIXlnKjmnI3liqHlmajnq6/pgJrov4fov5nkuKoga2V5IOWPr+S7peiOt+WPluWIsOaWh+S7tuS6jOi/m+WItuWGheWuuVxuICAgICAgc3VjY2VzczogcmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+S4iuS8oC4uLicpO1xuICAgICAgICBjb25zb2xlLmxvZyhhX2ltZ3Nbbl9pbmRleF0pO1xuICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICBhX2ZpbGVuYW1lcy5wdXNoKHJlcy5maWxlUGF0aCk7XG4gICAgICAgICAgYV9maWxldXJscy5wdXNoKHJlcy5maWxlVXJsKTtcbiAgICAgICAgICBuX2luZGV4KytcbiAgICAgICAgICBpZiAobl9pbmRleCA8IGFfaW1ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoYXQudXBMb2FkSW1ncyhzX3VybCwgYV9pbWdzLCBuX2luZGV4LCBhX2ZpbGVuYW1lcywgYV9maWxldXJscywgZl9jYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICBpZiAoZl9jYikge1xuICAgICAgICAgICAgICBmX2NiKGFfZmlsZW5hbWVzLCBhX2ZpbGV1cmxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfkuIrkvKDlpLHotKUnKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge31cbiAgICB9KTtcbiAgfVxufSJdfQ==