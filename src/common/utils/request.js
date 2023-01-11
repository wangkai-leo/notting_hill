import wepy from 'wepy'; //框架
import C from '../config'; //配置
import G from '../global'; //全局
import api from '../api'; //接口配追文件
import storage from './storage'; //接口配追文件
import F from '../filter'

export default {
  /**
   * 
   * 检查key3rd的值方法1
   */
  key3rdPromise(fn) {
    let that = this;
    G.openid ? fn() : setTimeout(function () {
      that.key3rdPromise(fn)
    }, 100)
  },

  /**
   * 
   *  检查key3rd的值方法2
   */
  key3rdPromiseInter(fn) {
    let intval = setInterval(function () {
      let user_info = storage.get('user_info');
      console.log(user_info);
      if (user_info) {
        fn();
        clearInterval(intval);
      }
    }, 100);
  },

  /**
   * 
   * 发起请求
   */
  get(name, cb, data, is_filter, fake) {
    let request = api[name];
    let url = request.url;
    console.log('----------------------');
    console.log(url);
    this.requestAndresponse(url, cb, data, fake, name, is_filter);
  },

  /**
   * 请求数据接口
   * param:api:接口名字
   * data:求情的参数
   * id:假数据id
   */
  requestUrl(api, data, id) {
    let fake = '';
    if (id) {
      fake = C.ENV_METHOD === 'GET' ? '/' + api + id + '' : '';
    };
    if (data) {
      return wepy.request({
        url: C.ENV_URL + api + fake,
        method: C.ENV_METHOD,
        data: data,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    } else {
      return wepy.request({
        url: C.ENV_URL + api + fake,
        method: C.ENV_METHOD,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    }
  },

  /**
   * 
   * @param {返回结果回调} cb 
   * @param {返回结果} result 
   */
  response(cb, result) {
    let fn = cb[result.data.code];
    if (C.SHOW_LOADING) wepy.hideLoading();
    console.log('--------');
    if (result.data.code == 500) {
      wepy.reLaunch({
        url: '/pages/login'
      });
      return false;
    } else if (result.data.code == 600) {
      wepy.reLaunch({
        url: '/pages/white'
      });
      return false;
    }

    fn != undefined ? cb[result.data.code](result) : (C.DEBUGING ? console.log('异常的状态，状态码为：' + result.data) : false);

  },

  /**
   * 
   * @param {请求的接口名称} api 
   * @param {成功的回调方法} cb 
   * @param {请求的参数} data 
   * @param {假数据接口} fakeid 
   */
  requestAndresponse(api, cb, data, fakeid, name, is_filter) {
    let that = this;
    if (!data) {
      data = {};
    }
    if (C.SHOW_LOADING && !data.hide_loading) {
      wepy.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {}
      });
    }
    if (data.no_key) {
      C.DEBUGING ? console.log('请求接口:' + api) : false;
      that.requestUrl(api, data, fakeid).then((result) => {
        console.log('结果', result.data);
        that.convertNull(result.data);
        let filter = name;
        (F[filter] && is_filter) ? that.response(cb, F[filter](result)): that.response(cb, result); //结果处理
      })
    } else {
      that.key3rdPromiseInter(function () { //只有ke3rd才会请求接口
        C.DEBUGING ? console.log('请求接口:' + api) : false;
        that.requestUrl(api, data, fakeid).then((result) => {
          console.log('结果', result.data);
          that.convertNull(result.data);
          if(result.data.code==202||result.data.code==201||result.data.code==400){
            wepy.showToast({
              title: result.data.msg, //提示的内容,
              icon: 'none', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: res => {}
            });
            if(result.data.code==400){
              wepy.redirectTo({url:'/pages/login'})
            }
          }
          let filter = name;
          (F[filter] && is_filter) ? that.response(cb, F[filter](result)): that.response(cb, result); //结果处理
        })
      });
    }
  },

  convertNull(data) {
    let has_next = false;
    let that = this;
    for (var key in data) {
      if (typeof data[key] === 'object') {
        has_next = true;
      } else if (typeof data[key] === 'array') {
        has_next = true;
      }
      if (data[key] == null) {
        data[key] = '';
        // data[key]='';
      }
      if (has_next) {
        that.convertNull(data[key]);
      }
    }
  }
}