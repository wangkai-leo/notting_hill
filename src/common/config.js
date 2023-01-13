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

export default {
  AUTO_LOGIN: true, //是否开启微信登陆
  AUTO_UPDATE: true, //是否提示跟新版本
  
  MULTILINGUAL: true, //是否启用多语言
  DEFAULT_LANG:'en',//默认语言版本
  LANGU_STORAGE_KEY:'lang',
  DEBUGING:false,
  SHOW_LOADING:false,
  
  HAS_BGM:false,//是否具有背景音乐
  // BG_MUSIC:'http://res.incker.com/RefuseClassification/7.mp3',//背景音乐地址
  // BG_STORAGE_KEY:'bg_music', //storage key值
  
  ENV_METHOD: 'POST', //提交方式

  //地址
  // ENV_URL: 'https://nottinghill.incker.com/ndsWxapp/',
  // ENV_URL: 'https://nottinghill-group.incker.com/ndsWxapp/',

  ENV_URL: 'https://dev-crm.nottinghillwedding.com/ndsWxapp/',
  // ENV_URL: 'https://crm.nottinghillwedding.com/ndsWxapp/',
  OFFLICE_LINE: 'wxad7c32c969fca3be' ? 'artcenter' : 'marry'
  
}
