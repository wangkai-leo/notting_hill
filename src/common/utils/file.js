import wepy from 'wepy';
import tool from './tool';

export default {
  //下载多张图片 并处理 前端生成图片比较有用
  downLoadFiles(index, list, cb, param) {
    let that = this;
    if (index == 0) {
      param = [];
    } else {
      param = param;
    }
    wx.downloadFile({
      url: list[index], // 下载资源的 url
      success: res => {
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
      fail: (res) => {
        console.log('下载失败');
        wepy.hideLoading();
        console.log(list[index]);
        console.log(res);
      }
    });
  },

  //下载文件
  downLoadFile(url, cb) {
    wx.downloadFile({
      url: url, // 下载资源的 url
      success: res => {
        cb(res.tempFilePath)
      },
      fail: (res) => {
        console.log('下载失败');
        console.log(res);
      }
    });
  },

  //保存图片到相册
  saveImageToPhotosAlbum(filePath) {
    wx.saveImageToPhotosAlbum({
      filePath: filePath,
      success(result) {
        wepy.hideLoading();
        tool.systemToast('已保存到本地相册');
      },
      fail(res) {
        wepy.hideLoading();
      }
    })
  },


  //上传多张图片
  upLoadImgs(s_url, a_imgs, n_index, a_filenames, a_fileurls, f_cb) {
    let that = this;
    wx.showLoading({
      title: 'Uploading...', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {}
    });
    console.log('kaishi')
    wx.uploadFile({
      url: s_url, //开发者服务器 url
      // url: s_url+'?notting_debug=hang&uid='+wepy.getStorageSync('user').uid, //开发者服务器 url
      header: { 
        'Content-Type': 'multipart/form-data',
      },
      formData:{
        notting_debug:'hang',
        uid: wepy.getStorageSync('user').uid
      },
      filePath: a_imgs[n_index], //要上传文件资源的路径
      name: 'myfile', //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      success: result => {
        console.log('上传...');
        console.log(a_imgs[n_index]);
        let res = JSON.parse(result.data);
        if (res.code == 200) {
          a_filenames.push(res.filePath);
          a_fileurls.push(res.fileUrl);
          n_index++
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
      fail: () => {
        console.log('上传失败');
      },
      complete: () => {}
    });
  }
}