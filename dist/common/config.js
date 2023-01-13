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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJBVVRPX0xPR0lOIiwiQVVUT19VUERBVEUiLCJNVUxUSUxJTkdVQUwiLCJERUZBVUxUX0xBTkciLCJMQU5HVV9TVE9SQUdFX0tFWSIsIkRFQlVHSU5HIiwiU0hPV19MT0FESU5HIiwiSEFTX0JHTSIsIkVOVl9NRVRIT0QiLCJFTlZfVVJMIiwiT0ZGTElDRV9MSU5FIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWU7QUFDYkEsY0FBWSxJQURDLEVBQ0s7QUFDbEJDLGVBQWEsSUFGQSxFQUVNOztBQUVuQkMsZ0JBQWMsSUFKRCxFQUlPO0FBQ3BCQyxnQkFBYSxJQUxBLEVBS0s7QUFDbEJDLHFCQUFrQixNQU5MO0FBT2JDLFlBQVMsS0FQSTtBQVFiQyxnQkFBYSxLQVJBOztBQVViQyxXQUFRLEtBVkssRUFVQztBQUNkO0FBQ0E7O0FBRUFDLGNBQVksTUFkQyxFQWNPOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUFDLFdBQVMsa0RBcEJJO0FBcUJiO0FBQ0FDLGdCQUFjLHVCQUF1QixXQUF2QixHQUFxQzs7QUF0QnRDLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g57q/5LiL5a6i5pyN77ya5rWL6K+V5a6i5pyN5oyH5a6aXG4vLyDlrqLmnI3nu4Tplb/vvJrmtYvor5XlrqLmnI3kuLvnrqFcbi8vIOeUteWVhuWuouacje+8mua1i+ivleWuouacjVxuLy8g6ZSA5ZSu77ya5rWL6K+V6ZSA5ZSuXG4vLyDplIDllK7nu4/nkIbvvJoxNTkwNTkzMjMxOVxuLy8g5rWL6K+V562W5YiSXG4vLyDmtYvor5Xov5DokKVcblxuLy8gLS0tLS1cbi8vIOa1i+ivleWuouacjeaMh+WumlxuLy8gMTIzNDU2XG5cbi8vIOe6v+S4iuWuouacje+8muWuouacjeW+kCDvvIxcbi8vIOe6v+S4i+WuouacjTog6YKA57qm5a6i5pyN5b6QIO+8jFxuLy8g6ZSA5ZSuIE5USC1zYWxlIO+8jCDplIDllK7lvpBcbi8vIOmUgOWUrue7hOmVvyBOVEgtc2FsZW1hbmFnZXJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBVVRPX0xPR0lOOiB0cnVlLCAvL+aYr+WQpuW8gOWQr+W+ruS/oeeZu+mZhlxuICBBVVRPX1VQREFURTogdHJ1ZSwgLy/mmK/lkKbmj5DnpLrot5/mlrDniYjmnKxcbiAgXG4gIE1VTFRJTElOR1VBTDogdHJ1ZSwgLy/mmK/lkKblkK/nlKjlpJror63oqIBcbiAgREVGQVVMVF9MQU5HOidlbicsLy/pu5jorqTor63oqIDniYjmnKxcbiAgTEFOR1VfU1RPUkFHRV9LRVk6J2xhbmcnLFxuICBERUJVR0lORzpmYWxzZSxcbiAgU0hPV19MT0FESU5HOmZhbHNlLFxuICBcbiAgSEFTX0JHTTpmYWxzZSwvL+aYr+WQpuWFt+acieiDjOaZr+mfs+S5kFxuICAvLyBCR19NVVNJQzonaHR0cDovL3Jlcy5pbmNrZXIuY29tL1JlZnVzZUNsYXNzaWZpY2F0aW9uLzcubXAzJywvL+iDjOaZr+mfs+S5kOWcsOWdgFxuICAvLyBCR19TVE9SQUdFX0tFWTonYmdfbXVzaWMnLCAvL3N0b3JhZ2Uga2V55YC8XG4gIFxuICBFTlZfTUVUSE9EOiAnUE9TVCcsIC8v5o+Q5Lqk5pa55byPXG5cbiAgLy/lnLDlnYBcbiAgLy8gRU5WX1VSTDogJ2h0dHBzOi8vbm90dGluZ2hpbGwuaW5ja2VyLmNvbS9uZHNXeGFwcC8nLFxuICAvLyBFTlZfVVJMOiAnaHR0cHM6Ly9ub3R0aW5naGlsbC1ncm91cC5pbmNrZXIuY29tL25kc1d4YXBwLycsXG5cbiAgRU5WX1VSTDogJ2h0dHBzOi8vZGV2LWNybS5ub3R0aW5naGlsbHdlZGRpbmcuY29tL25kc1d4YXBwLycsXG4gIC8vIEVOVl9VUkw6ICdodHRwczovL2NybS5ub3R0aW5naGlsbHdlZGRpbmcuY29tL25kc1d4YXBwLycsXG4gIE9GRkxJQ0VfTElORTogJ3d4YWQ3YzMyYzk2OWZjYTNiZScgPyAnYXJ0Y2VudGVyJyA6ICdtYXJyeSdcbiAgXG59XG4iXX0=