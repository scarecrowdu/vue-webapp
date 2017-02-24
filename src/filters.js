// 购物车数字校验
exports.numFormat = {
    write: function(val, oldVal) {
        var number = Number(val);
        if (isNaN(number)) {
            return oldVal;
        } else {
            return (number <= 0) ? 1 : number
        }
    }

}

/*
 *处理json字符串，转为json格式
 */
exports.jsonFormat = (val) => {
    try {
        return JSON.parse(val)
    } catch (e) {
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

/**
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
 *   "yyyy-M-d h:m:s.S"      ==> 2006-7-2 8:9:4.18 
 */
exports.dateFormat = (date, format) => {
    date = Number(date);
    date = new Date(date);

    var map = {
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
};