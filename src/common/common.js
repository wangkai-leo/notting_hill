/**
 * auth:leo
 * 功能:小程序通用文件
 */
import wepy from 'wepy'; //框架
import C from './config'; //配置
import G from './global'; //全局
import api from './api'; //接口文件
import lan from './language';
import storage from './utils/storage';

export default {
  //获取key3rd值
  chk3rdKey(code) {
    return wepy.request({
      url: C.LOGIN_URL,
      method: C.ENV_METHOD,
      data: {
        code: code
      },
      header: {
        "Content-Type":  "application/x-www-form-urlencoded"
      }
    })
  },
  //保存key3rd
  set3rdKey(key) {
    G.openid = key;
    storage.set('openid', key);
  },
  //微信账号登录
  async doLogin() {
    //登录,用登录凭证去服务器端换取session_key,并保存
    await wepy.login()
      .then(res => this.chk3rdKey(res.code))
      .then(res => {
        this.set3rdKey(
          //保存session_key
          C.ENV_METHOD === 'GET' ? res.data.key : res.data
        )
      })
  },

  //微信登录
  login() {
    /**
     *微信授权登录小程序
     */
    //查询配置是否自动登陆
    if (C.AUTO_LOGIN) {
      // 检查登录是否过期
      wepy.checkSession().then(res => {
        //如果登录没有过期
        let openid = wepy.getStorageSync('openid');
        if (openid) {
          //重新保存下客户端session
          this.set3rdKey(openid);
        } else {
          //客户端session过期，重新登录
          this.doLogin();
        }
      }).catch(res => {
        //登录过期，重新登录
        C.DEBUGING?console.log('微信端已过期，重新登录'):'';
        this.doLogin();
      });
    } else {
      //不做登录验证
      this.set3rdKey('fake_key3rd');
    }
  },

  //检查小程序版本及跟新
  autoUpdate() {
    if (C.AUTO_UPDATE) {
      if (wx.canIUse("getUpdateManager")) {
        let updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate((res) => {
          // 请求完新版本信息的回调
          console.log(res.hasUpdate);
        })
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: (res) => {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              } else if (res.cancel) {
                return false;
              }
            }
          })
        })
        updateManager.onUpdateFailed(() => {
          // 新的版本下载失败
          wx.hideLoading();
          wx.showModal({
            title: '升级失败',
            content: '新版本下载失败，请检查网络！',
            showCancel: false
          });
        });
      }
    }
  },

  //或是屏幕是否是iphonex比例
  isIphonex() {
    wx.getSystemInfo({
      success: function (res) {
        if (res.model.search('iPhone X') != -1 || res.screenHeight / res.screenWidth >= 1.9) {
          G.iphonex = true;
        }
        C.DEBUGING?console.log('查看是否是iphonex:' + G.iphonex):false;
      }
    })
  },

  // 加载语言
  loadLanguagePackage() {
    if (C.MULTILINGUAL) {
      let lang = storage.get(C.LANGU_STORAGE_KEY);
      if (!lang) {
        G.language = lan[C.DEFAULT_LANG];
        storage.set(C.LANGU_STORAGE_KEY, G.language);
      }
    }
  },


  //打印小程序配置及模式信息
  logConfigMsg() {
    if (C.DEBUGING) {
      console.log('配置文件信息如下..........');
      console.log('当前是否为开发模式:' + (C.ENV_METHOD === 'GET' ? '是' : '否'))
      console.log('数据接口是否为json假数据:' + (C.ENV_METHOD === 'GET' ? '是' : '否'));
      console.log('小程序开启微信登陆:' + (C.AUTO_LOGIN === C.AUTO_LOGIN ? '是' : '否'));
      console.log('再次打开小程序是否提示更新最新版:' + (C.AUTO_UPDATE ? '是' : '否'));
      console.log('所有接口如下：');
      console.log('**********************************************************************');
      let count = 0;
      for (let key in api) {
        count++;
        console.log('接口' + count + '-------------------------------------');
        console.log(api[key].descript + ':' + key);
        if (C.LOG_API_DETAIL) {
          if (api[key].request_data) {
            console.log('请求格式：');
            console.log(api[key].request_data);
          }
          console.log('返回格式：');
          console.log(api[key].response_data);
          console.log('');
          console.log('');
        }
      }
      console.log('**********************************************************************');
    }
  },


  getBoundingClientCenterTop(){
    let bound = wx.getMenuButtonBoundingClientRect();
    G.bounding_center_top = bound.top + bound.height / 2;
  }
}
