
// 购物车数字校验
exports.numFormat = {
    write: function(val, oldVal) {
	    var number = Number(val);
	    if (isNaN(number)) {
	      return oldVal;
	    }else{
	      return (number <=0) ? 1 : number
	    }
	  }
    
}

/*
*处理json字符串，转为json格式
*/
exports.jsonFormat = (val) => {
	try { 
	   return JSON.parse(val) 
	}catch (e) { 
	   return '';

	} 
}


exports.timeago = (times) => {

  let timestamp = Number(times);	
  let time = new Date(timestamp);

  let delta = parseInt((new Date() - time) / 1000, 10);
  if (delta <= 0) return 'just now';

  let minutes = delta / 60;
  // if (minutes < 1) return 'less than a minute ago';
  // if (minutes < 2) return 'about a minute ago';

  let hours = minutes / 60;
  if (hours < 1) return parseInt(minutes, 10) + ' 分钟前';
  // if (hours < 1.5) return 'about an hour ago';

  let days = hours / 24;
  if (days < 1) return Math.round(hours) + ' 小时前';
  if (days < 7) return parseInt(days, 10) + ' 一天前';

  let month = time.getMonth();
  if (month < 10) month = '0' + month;
  let date = time.getDate();
  if (date < 10) date = '0' + date;
  return [time.getFullYear(), month, date].join('-');

}

/*
*时间格式化
*/
exports.fmtDate = (date, fmt) => { //author: meizz 
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
}



/*exports.runtime = (el,timer) =>{

      let timestamp = timer;
      let isInter;
      
      function interval(){
        if(timestamp<=0){
          console.count();
          clearInterval(isInter);
          return;
        }

        let hm = Math.floor(timestamp % 1000 /10);
        let sec = Math.floor(timestamp / 1000 % 60);
        let mini = Math.floor(timestamp / (60*1000));

        hm = hm < 10 ? "0" + hm : hm;
        sec = sec < 10 ? "0" + sec : sec;
        mini = mini < 10 ? "0" + mini : mini;
        let text = mini + ":" + sec + ":" + hm;

        setTimeout(interval, 1);
        document.getElementById(el).innerHTML = text;
        timestamp--;
      }

      isInter = setInterval(interval, 1000);
}*/