/**
 * Tictac计时组件
 *
 * @module Tactic
 */
(function () {
    'use strict';

    /**
     * tictac
     *
     * @class tictac
     */
    var tictac = {

        /**
         * 当前时间
         * @property _currentTime
         */
        _currentTime: 0,

        /**
         * 上次执行callback的时间
         * @property _lastTimeForCallback
         */
        _lastTimeForCallback: 0,

        /**
         * 上次setInterval的时间
         * @property _lastTimeForInterval
         */
        _lastTimeForInterval: 0,

        /**
         * setInterval
         * @property _timer
         */
        _timer: null,

        /**
         * create的倒计时列表
         * @property _instanceHash
         */
        _instanceHash: {},

        /**
         * 执行callback的时间间隔
         * @property _callbackInterval
         */
        _callbackInterval: 0,

        /**
         * Tictac setInterval的间隔
         * @property _timerInterval
         */
        _timerInterval: 300,

        /**
         * 执行callback的倒计时
         * @property _callbackCountDown
         */
        _callbackCountDown: 0,

        /**
         * 定时执行的回调
         * @property _callback
         */
        _callback: null,

        /**
         * 初始化
         *
         * @method init
         * @param options
         */
        init: function (options) {
            var self = this;

            self._currentTime = options.currentTime;
            self._lastTimeForCallback = options.currentTime;
            self._lastTimeForInterval = +new Date();
            self._callback = options.callback;
            self._callbackInterval = options.interval;
            self._callbackCountDown = 0;

            self._run();
        },

        /**
         * 运行
         *
         * @method _run
         * @private
         */
        _run: function () {
            var self = this;

            self._timer = setInterval(function () {
                self._currentTime += +new Date() - self._lastTimeForInterval;
                self._lastTimeForInterval = +new Date();

                self._check();
            }, self._timerInterval);
        },

        /**
         * 判断检查，执行相应操作
         *
         * @method _check
         * @private
         */
        _check: function () {
            var self = this;

            for (var i in self._instanceHash) {
                if (!self._instanceHash.hasOwnProperty(i)) {
                    continue;
                }
                //同步所有的倒计时显示
                self._sync(i);
            }

            //判断是否执行callback
            if (self._callbackCountDown >= self._callbackInterval) {
                self._callbackCountDown -= self._callbackInterval;
                self._lastTimeForCallback = self._currentTime - self._callbackCountDown;

                self._callback();
            } else {
                self._callbackCountDown = self._currentTime - self._lastTimeForCallback;
            }
        },

        /**
         * 立即执行回调
         *
         * @method execute
         */
        execute: function () {
            var self = this;

            self._lastTimeForCallback = self._currentTime;
            self._callbackCountDown = 0;
            self._callback();
        },

        /**
         * 同步时间
         *
         * @method _sync
         * @param key
         * @private
         */
        _sync: function (key) {
            var self = this,
                item = self._instanceHash[key],
                span = item.expires <= self._currentTime ? 0 : item.expires - self._currentTime;

            //是否过期
            if (span === 0) {
                self.remove(key);//先remove，在执行回调，不然后面执行顺序会有错
                typeof item.timeout === 'function' && item.timeout();
            } else {
                if (typeof item.targetId === 'string') {
                    var $targetObj = document.getElementById(item.targetId);
                    if ($targetObj) {
                        $targetObj.innerHTML = self.util.format(span, item.format, item.formatIgnore);
                    }
                }
            }
        },

        /**
         * 创建计时器
         *
         * @method create
         * @param id
         * @param options
         */
        create: function (id, options) {
            var self = this;

            if (self._instanceHash.hasOwnProperty(id)) {
                return;
            }

            self._instanceHash[id] = options;
        },

        /**
         * 根据ID重置计时器
         *
         * @param id {*} 计时器ID
         * @param options {Object} 要重置的内容
         */
        reset: function (id, options) {
            var self = this;

            if (!self._instanceHash.hasOwnProperty(id)) {
                return;
            }

            self._instanceHash[id] = tictac.util.extend(self._instanceHash[id], options);
        },

        /**
         * 移除一个计时器
         *
         * @method remove
         * @param id
         */
        remove: function (id) {
            var self = this;

            if (!self._instanceHash.hasOwnProperty(id)) {
                return;
            }

            if (self._instanceHash[id].targetId) {
                document.getElementById(self._instanceHash[id].targetId).innerHTML = '';
            }

            delete self._instanceHash[id];
        },

        /**
         * 获取当前时间
         *
         * @method getCurrentTime
         * @returns {number} 当前的时间戳
         */
        getCurrentTime: function () {
            return this._currentTime;
        },

        /**
         * 校正时间
         *
         * @method regulate
         * @param currentTime {int} 当前正确的事件戳
         */
        regulate: function (currentTime) {
            var self = this;

            self._currentTime = currentTime;
            self._lastTimeForCallback = currentTime;
            self._lastTimeForInterval = +new Date();
            self._callbackCountDown = 0;

            clearInterval(self._timer);
            self._run();
        },

        /**
         * 销毁Tictac
         *
         * @method destroy
         */
        destroy: function () {
            clearInterval(this._timer);
            this._timer = null;
            for (var i in this._instanceHash) {
                this.remove(i);
            }
            this._instanceHash = {};
        }
    };

    /**
     * 工具类
     *
     * @class util
     */
    tictac.util = {
        /**
         * 格式化时间
         *
         * @param timestamp {int} 当前的时间戳
         * @param format {string} 格式字符串
         * @param ignore {boolean} 是否忽略
         * @returns {string} 格式化后的时间字符串
         */
        format: function (timestamp, format, ignore) {
            var result = '';
            if (timestamp < 0 || typeof format !== 'object') {
                return result;
            }

            if (Object.prototype.toString.call(ignore) !== '[object Boolean]') {
                ignore = true;
            }

            var timestampObject = {
                days: Math.floor(timestamp / 86400000),
                hours: Math.floor((timestamp % 86400000) / 3600000),
                minutes: Math.floor((timestamp % 3600000) / 60000),
                seconds: Math.floor((timestamp % 60000) / 1000)
            };

            for (var i in format) {
                if (!format.hasOwnProperty(i)) {
                    continue;
                }
                var value = timestampObject[i];
                if (value === 0 && result === '' && ignore && i !== 'seconds') {
                    continue;
                }
                result += format[i].replace(REGEX[i], function () {
                    if (value < 10 && arguments[0].length > 3) {
                        value = '0' + value;
                    }
                    return value;
                });
            }

            return result;
        },

        /**
         * 对象的合并
         *
         * @returns {*}
         */
        extend: function () {
            var dest = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var src = arguments[i];
                if (src) {
                    for (var k in src) {
                        dest[k] = src[k];
                    }
                }
            }
            return dest;
        }
    };

    var REGEX = {
        days: /{[Dd]}/g,
        hours: /{[Hh]{2}}|{[Hh]}/g,
        minutes: /{[Mm]{2}}|{[Mm]}/g,
        seconds: /{[Ss]{2}}|{[Ss]}/g
    };

    if (!window.Tictac) {
        window.Tictac = tictac;
    }

})();