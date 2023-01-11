//json 字符串处理
export default {
  //奖json 对象转换为 字符串
  jsonToString(json) {
    return JSON.stringify(json);
  },

  //字符串转jons
  stringToJson(str) {
    return JSON.parse(str);
  }
}
