export default {
  //格式化日期 "yyyy-MM-dd hh:mm:ss"
  dateFormat(fmt, date) {
    var o = {
      "M+": date.getMonth() + 1, //月份   
      "d+": date.getDate(), //日   
      "h+": date.getHours(), //小时   
      "m+": date.getMinutes(), //分   
      "s+": date.getSeconds(), //秒   
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
      "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },

  //获取一周的时间
  getWeekList(fmt, date) {
    var dateTime = date.getTime(); // 获取现在的时间
    var dateDay = date.getDay(); //星期
    var oneDayTime = 24 * 60 * 60 * 1000; //一天的时间
    var startDateTime = dateTime - oneDayTime * dateDay;
    var weeklist = [];
    for (var i = 0; i < 7; i++) {
      var time = startDateTime + i * oneDayTime;
      weeklist[i] = this.dateFormat(fmt, new Date(time));
    }
    return weeklist;
  },

  /**
   * 
   * 获取一个月的天数
   */

  getCountDays(curDate) {
    /* 获取当前月份 */
    var curMonth = this.getMonth(curDate);
    var curYear = this.getYear(curDate);
    console.log('&&&&&');
    console.log(curDate);
    console.log(curMonth);
    console.log(curYear);
    console.log(new Date(curYear,curMonth,0).getDate());

    return new Date(curYear,curMonth,0).getDate();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    // curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
    // curDate.setDate(0);
    /* 返回当月的天数 */
    // return curDate.getDate();
  },



  /**
   * 获取某月第一天是周几
   */
  getDate(year, month) {
    let nowdate = new Date( year , month-1,1);
    return nowdate.getDay();
  },

  /*
   *获取月份
   */
  getMonth(date) {
    let pur_date = date ? date : new Date();
    return pur_date.getMonth() + 1;
  },

  /**
   * 
   * 获取年份
   */

  getYear(date) {
    let pur_date = date ? date : new Date();
    return pur_date.getFullYear()
  },

  getWeek(date) {
    let pur_date = date ? date : new Date();
    return pur_date.getDay()
  },


  //通过时间点获取该月的每天
  getMonthEveryDay(date) {
    let pru_date = date ? date : new Date();
    // console.log('当前月日期：');
    // console.log(pru_date);
    let mon = this.getMonth(pru_date);
    let year = this.getYear(pru_date);
    let start = this.getDate(year, mon); //第一天的星期
    let count = this.getCountDays(pru_date); //当月总数
    console.log(pru_date);
    // console.log(mon);
    // console.log(year);
    // console.log(start);
    // console.log(count);

    let preMonthDate = this.getPreMonth(this.dateFormat('yyyy-MM-dd', pru_date)); //上一个月的最后一天
    console.log(preMonthDate);

    let pre_month_count = this.getCountDays(new Date(preMonthDate.replace(/-/g,"/"))); //上个月的天数
    let pre_month_day = new Date(preMonthDate.replace(/-/g,"/"));
    let pre_month_year = this.getYear(pre_month_day);
    let pre_month_month = this.getMonth(pre_month_day);
    // console.log('上');
    // console.log(preMonthDate);
    // console.log(pre_month_count);
    // console.log(pre_month_day);
    // console.log(pre_month_year+'年');
    // console.log(pre_month_month+'月');

    let nextMonthDate = this.getNextMonth(this.dateFormat('yyyy-MM-dd', pru_date));
    console.log(nextMonthDate);
    let next_month_day = new Date(nextMonthDate.replace(/-/g,"/"));
    // let next_month_day = new Date(nextMonthDate.replace(/-/g,"/"));
    let next_month_year = this.getYear(next_month_day);
    let next_month_month = this.getMonth(next_month_day);
    // console.log('下');

    // console.log(nextMonthDate);
    // console.log(next_month_day);
    // console.log(next_month_year+'年');
    // console.log(next_month_month+'月');


    let rl = []; //日历的结果
    let st = 0; //循环开始点
    let len = 7; //一星期七天
    let d = 1; //日期具体
    let next_d = 1; //下一个月的日期
    let pre_d = pre_month_count - start + 1; //上个月开始时间


    // let line = Math.ceil((count + start) / len); //日历的行数
    let line = 6; //日历的行数
    for (let i = 0; i < line; i++) {
      let y = [];
      for (let j = st; j < st + len; j++) {
        if ((i == 0 && j < start)) {
          let curr_day = new Date(pre_month_year, pre_month_month - 1, pre_d);
          let curr_t = {
            d: pre_d,
            full: this.dateFormat('yyyy-MM-dd', curr_day),
            show: this.dateFormat('M/dd', curr_day),
            num: this.dateFormat('dd', curr_day),
            has_activity: false,
            current: false
          }
          y.push(curr_t);
          pre_d++;
        } else if ((j - start) > count - 1) {
          let curr_day = new Date(next_month_year, next_month_month - 1, next_d);
          let curr_t = {
            d: next_d,
            full: this.dateFormat('yyyy-MM-dd', curr_day),
            show: this.dateFormat('M/dd', curr_day),
            num: this.dateFormat('dd', curr_day),
            has_activity: false,
            current: false

          }
          y.push(curr_t);
          next_d++;
        } else {
          let curr_day = new Date(year, mon - 1, d);
          let curr_t = {
            d: d,
            full: this.dateFormat('yyyy-MM-dd', curr_day),
            show: this.dateFormat('M/dd', curr_day),
            num: this.dateFormat('dd', curr_day),
            has_activity: false,
            current: true
          }
          y.push(curr_t);
          d++;
        }
      }
      st += len;
      rl.push(y);
    }
    return rl;
  },

  /**
   * 获取上一个月离结束的两天
   *
   * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
   */
  getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
      year2 = parseInt(year2) - 1;
      month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    if (month2 < 10) {
      month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + 1;
    return t2;
  },

  /**
   * 获取下一个月离结束的前两天
   *
   * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
   */
  getNextMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
      year2 = parseInt(year2) + 1;
      month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    if (month2 < 10) {
      month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + 1;
    return t2;
  },


  //获取一周的天数
  getOneMonth(date) {
    var curDate = new Date();
    /* 获取当前月份 */
    var curMonth = curDate.getMonth();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
    curDate.setDate(0);
    /* 返回当月的天数 */
    return curDate.getDate();
  },

  //一周时间的毫秒数
  getOneWeekTime() {
    return 7 * 24 * 60 * 60 * 1000;
  },

  getDateDiff(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24);
    return dates;
  },

  //计算当前时间戳相对 其他时间时间戳小时分秒数
  countTimeLong(timestramp_start, timestramp_end, double) {
    let now = parseInt(new Date().getTime() / 1000);
    let end = timestramp_end ? timestramp_end : now;
    let long = end - timestramp_start;

    let hours = parseInt(long / (60 * 60));

    let mins = parseInt((long - hours * 60 * 60) / 60);
    let scen = long - hours * 60 * 60 - mins * 60;
    if (double) {
      if (hours < 10) {
        hours = '0' + hours
      }
      if (mins < 10) {
        mins = '0' + mins
      }
      if (scen < 10) {
        scen = '0' + scen
      }
    }
    return {
      h: hours,
      m: mins,
      s: scen
    }
  }
}