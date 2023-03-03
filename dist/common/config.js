'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 线下客服：测试客服指定
// 客服组长：测试客服主管
// 电商客服：测试客服
// 销售：测试销售
// 销售经理：15905932319
// 测试策划
// 测试运营

// -----
// 测试客服指定
// 123456

// 线上客服：客服徐 ，
// 线下客服: 邀约客服徐 ，
// 销售 NTH-sale ， 销售徐
// 销售组长 NTH-salemanager

exports.default = {
  AUTO_LOGIN: true, //是否开启微信登陆
  AUTO_UPDATE: true, //是否提示跟新版本

  MULTILINGUAL: true, //是否启用多语言
  DEFAULT_LANG: 'en', //默认语言版本
  LANGU_STORAGE_KEY: 'lang',
  DEBUGING: false,
  SHOW_LOADING: false,

  HAS_BGM: false, //是否具有背景音乐
  // BG_MUSIC:'http://res.incker.com/RefuseClassification/7.mp3',//背景音乐地址
  // BG_STORAGE_KEY:'bg_music', //storage key值
  ENV_METHOD: 'POST', //提交方式
  //地址
  // ENV_URL: 'https://nottinghill.incker.com/ndsWxapp/',
  // ENV_URL: 'https://nottinghill-group.incker.com/ndsWxapp/',
  ENV_URL: 'https://dev-crm.nottinghillwedding.com/ndsWxapp/',
  // ENV_URL: 'https://crm.nottinghillwedding.com/ndsWxapp/',
  OFFLICE_LINE: 'wxad7c32c969fca3be' ? 'artcenter' : 'marry'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJBVVRPX0xPR0lOIiwiQVVUT19VUERBVEUiLCJNVUxUSUxJTkdVQUwiLCJERUZBVUxUX0xBTkciLCJMQU5HVV9TVE9SQUdFX0tFWSIsIkRFQlVHSU5HIiwiU0hPV19MT0FESU5HIiwiSEFTX0JHTSIsIkVOVl9NRVRIT0QiLCJFTlZfVVJMIiwiT0ZGTElDRV9MSU5FIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWU7QUFDYkEsY0FBWSxJQURDLEVBQ0s7QUFDbEJDLGVBQWEsSUFGQSxFQUVNOztBQUVuQkMsZ0JBQWMsSUFKRCxFQUlPO0FBQ3BCQyxnQkFBYSxJQUxBLEVBS0s7QUFDbEJDLHFCQUFrQixNQU5MO0FBT2JDLFlBQVMsS0FQSTtBQVFiQyxnQkFBYSxLQVJBOztBQVViQyxXQUFRLEtBVkssRUFVQztBQUNkO0FBQ0E7QUFDQUMsY0FBWSxNQWJDLEVBYU87QUFDcEI7QUFDQTtBQUNBO0FBQ0FDLFdBQVMsa0RBakJJO0FBa0JiO0FBQ0FDLGdCQUFjLHVCQUF1QixXQUF2QixHQUFxQztBQW5CdEMsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnur/kuIvlrqLmnI3vvJrmtYvor5XlrqLmnI3mjIflrppcbi8vIOWuouacjee7hOmVv++8mua1i+ivleWuouacjeS4u+euoVxuLy8g55S15ZWG5a6i5pyN77ya5rWL6K+V5a6i5pyNXG4vLyDplIDllK7vvJrmtYvor5XplIDllK5cbi8vIOmUgOWUrue7j+eQhu+8mjE1OTA1OTMyMzE5XG4vLyDmtYvor5XnrZbliJJcbi8vIOa1i+ivlei/kOiQpVxuXG4vLyAtLS0tLVxuLy8g5rWL6K+V5a6i5pyN5oyH5a6aXG4vLyAxMjM0NTZcblxuLy8g57q/5LiK5a6i5pyN77ya5a6i5pyN5b6QIO+8jFxuLy8g57q/5LiL5a6i5pyNOiDpgoDnuqblrqLmnI3lvpAg77yMXG4vLyDplIDllK4gTlRILXNhbGUg77yMIOmUgOWUruW+kFxuLy8g6ZSA5ZSu57uE6ZW/IE5USC1zYWxlbWFuYWdlclxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFVVE9fTE9HSU46IHRydWUsIC8v5piv5ZCm5byA5ZCv5b6u5L+h55m76ZmGXG4gIEFVVE9fVVBEQVRFOiB0cnVlLCAvL+aYr+WQpuaPkOekuui3n+aWsOeJiOacrFxuICBcbiAgTVVMVElMSU5HVUFMOiB0cnVlLCAvL+aYr+WQpuWQr+eUqOWkmuivreiogFxuICBERUZBVUxUX0xBTkc6J2VuJywvL+m7mOiupOivreiogOeJiOacrFxuICBMQU5HVV9TVE9SQUdFX0tFWTonbGFuZycsXG4gIERFQlVHSU5HOmZhbHNlLFxuICBTSE9XX0xPQURJTkc6ZmFsc2UsXG4gIFxuICBIQVNfQkdNOmZhbHNlLC8v5piv5ZCm5YW35pyJ6IOM5pmv6Z+z5LmQXG4gIC8vIEJHX01VU0lDOidodHRwOi8vcmVzLmluY2tlci5jb20vUmVmdXNlQ2xhc3NpZmljYXRpb24vNy5tcDMnLC8v6IOM5pmv6Z+z5LmQ5Zyw5Z2AXG4gIC8vIEJHX1NUT1JBR0VfS0VZOidiZ19tdXNpYycsIC8vc3RvcmFnZSBrZXnlgLxcbiAgRU5WX01FVEhPRDogJ1BPU1QnLCAvL+aPkOS6pOaWueW8j1xuICAvL+WcsOWdgFxuICAvLyBFTlZfVVJMOiAnaHR0cHM6Ly9ub3R0aW5naGlsbC5pbmNrZXIuY29tL25kc1d4YXBwLycsXG4gIC8vIEVOVl9VUkw6ICdodHRwczovL25vdHRpbmdoaWxsLWdyb3VwLmluY2tlci5jb20vbmRzV3hhcHAvJyxcbiAgRU5WX1VSTDogJ2h0dHBzOi8vZGV2LWNybS5ub3R0aW5naGlsbHdlZGRpbmcuY29tL25kc1d4YXBwLycsXG4gIC8vIEVOVl9VUkw6ICdodHRwczovL2NybS5ub3R0aW5naGlsbHdlZGRpbmcuY29tL25kc1d4YXBwLycsXG4gIE9GRkxJQ0VfTElORTogJ3d4YWQ3YzMyYzk2OWZjYTNiZScgPyAnYXJ0Y2VudGVyJyA6ICdtYXJyeSdcbn1cbiJdfQ==