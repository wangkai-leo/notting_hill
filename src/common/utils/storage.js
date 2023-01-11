import wepy from 'wepy'; //框架

export default {
  //保存数据到本地，同步版
  set(key, value) {
    wepy.setStorageSync(key, value);
  },
  //获取本地的数据，同步版
  get(key) {
    return wepy.getStorageSync(key);
  }
}
