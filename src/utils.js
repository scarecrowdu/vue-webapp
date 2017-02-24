//字符串值转换为布尔值。否则,返回的值
//没有修改所以Vue可以抛出一个警告。
// export default (val) => (typeof val !== "string" ? val :
//   val === "true" ? true :
//   val === "false" ? false :
//   val === "null" ? false :
//   val === "undefined" ? false : val)


const EventListener = {
    /** 
     * @description 事件绑定，兼容各浏览器 
     * @param target 事件触发对象 
     * @param eventType 事件 
     * @param callback 事件处理函数 
     */
    addEvents(target, eventType, callback) {
        if (target.addEventListener) //非ie 和ie9 
            target.addEventListener(eventType, callback, false);
        else if (target.attachEvent) //ie6到ie8 
            target.attachEvent("on" + eventType, callback);
        else target["on" + type] = callback; //ie5 
    },


    /** 
     * @description 事件移除，兼容各浏览器 
     * @param target 事件触发对象 
     * @param eventType 事件 
     * @param callback 事件处理函数 
     */
    removeEvents(target, eventType, callback) {
        if (target.removeEventListener)
            target.removeEventListener(eventType, callback, false);
        else if (target.detachEvent)
            target.detachEvent("on" + eventType, callback);
        else target["on" + eventType] = null;
    }

}

export default EventListener