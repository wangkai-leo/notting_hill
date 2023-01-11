/**
 * auth:leo
 * 远程接口文件
 */
/**
   * 测试接口
   * @param {必需：成功回调方法} cb 
   * @param {可选：请求的参数} data 
   * @param {可选：假数据id，只用走前端显示} fakeid 
   example:
  getTest(cb, data, fakeid) {
    mini.requestAndresponse('getTest', cb);
  }
*/
import C from './config';

import apiart from './api.artcenter';
import marry from './api.marry';
import apicommon from './api.common';
var api=null;

if(C.OFFLICE_LINE=='artcenter'){
  api = Object.assign(apiart, apicommon);
  console.log('apiartcenter')
}else if(C.OFFLICE_LINE=='marry'){
  api = Object.assign(marry, apicommon);
  console.log('apimarry')
}

export default api;