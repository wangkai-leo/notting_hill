'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _api = require('./api.artcenter.js');

var _api2 = _interopRequireDefault(_api);

var _api3 = require('./api.marry.js');

var _api4 = _interopRequireDefault(_api3);

var _api5 = require('./api.common.js');

var _api6 = _interopRequireDefault(_api5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var api = null;

if (_config2.default.OFFLICE_LINE == 'artcenter') {
  api = Object.assign(_api2.default, _api6.default);
  console.log('apiartcenter');
} else if (_config2.default.OFFLICE_LINE == 'marry') {
  api = Object.assign(_api4.default, _api6.default);
  console.log('apimarry');
}

exports.default = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJhcGkiLCJDIiwiT0ZGTElDRV9MSU5FIiwiT2JqZWN0IiwiYXNzaWduIiwiYXBpYXJ0IiwiYXBpY29tbW9uIiwiY29uc29sZSIsImxvZyIsIm1hcnJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFjQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBbEJBOzs7O0FBSUE7Ozs7Ozs7Ozs7QUFlQSxJQUFJQSxNQUFJLElBQVI7O0FBRUEsSUFBR0MsaUJBQUVDLFlBQUYsSUFBZ0IsV0FBbkIsRUFBK0I7QUFDN0JGLFFBQU1HLE9BQU9DLE1BQVAsQ0FBY0MsYUFBZCxFQUFzQkMsYUFBdEIsQ0FBTjtBQUNBQyxVQUFRQyxHQUFSLENBQVksY0FBWjtBQUNELENBSEQsTUFHTSxJQUFHUCxpQkFBRUMsWUFBRixJQUFnQixPQUFuQixFQUEyQjtBQUMvQkYsUUFBTUcsT0FBT0MsTUFBUCxDQUFjSyxhQUFkLEVBQXFCSCxhQUFyQixDQUFOO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0Q7O2tCQUVjUixHIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYXV0aDpsZW9cbiAqIOi/nOeoi+aOpeWPo+aWh+S7tlxuICovXG4vKipcbiAgICog5rWL6K+V5o6l5Y+jXG4gICAqIEBwYXJhbSB75b+F6ZyA77ya5oiQ5Yqf5Zue6LCD5pa55rOVfSBjYiBcbiAgICogQHBhcmFtIHvlj6/pgInvvJror7fmsYLnmoTlj4LmlbB9IGRhdGEgXG4gICAqIEBwYXJhbSB75Y+v6YCJ77ya5YGH5pWw5o2uaWTvvIzlj6rnlKjotbDliY3nq6/mmL7npLp9IGZha2VpZCBcbiAgIGV4YW1wbGU6XG4gIGdldFRlc3QoY2IsIGRhdGEsIGZha2VpZCkge1xuICAgIG1pbmkucmVxdWVzdEFuZHJlc3BvbnNlKCdnZXRUZXN0JywgY2IpO1xuICB9XG4qL1xuaW1wb3J0IEMgZnJvbSAnLi9jb25maWcnO1xuXG5pbXBvcnQgYXBpYXJ0IGZyb20gJy4vYXBpLmFydGNlbnRlcic7XG5pbXBvcnQgbWFycnkgZnJvbSAnLi9hcGkubWFycnknO1xuaW1wb3J0IGFwaWNvbW1vbiBmcm9tICcuL2FwaS5jb21tb24nO1xudmFyIGFwaT1udWxsO1xuXG5pZihDLk9GRkxJQ0VfTElORT09J2FydGNlbnRlcicpe1xuICBhcGkgPSBPYmplY3QuYXNzaWduKGFwaWFydCwgYXBpY29tbW9uKTtcbiAgY29uc29sZS5sb2coJ2FwaWFydGNlbnRlcicpXG59ZWxzZSBpZihDLk9GRkxJQ0VfTElORT09J21hcnJ5Jyl7XG4gIGFwaSA9IE9iamVjdC5hc3NpZ24obWFycnksIGFwaWNvbW1vbik7XG4gIGNvbnNvbGUubG9nKCdhcGltYXJyeScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTsiXX0=