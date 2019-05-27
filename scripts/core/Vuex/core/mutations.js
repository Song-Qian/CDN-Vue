/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 全局跟踪事件，此处禁止写异步函数，禁止写入非全局跟踪事件
 */
define(function() {
    'use strict';
    return {
        mutations : {
            /**
             * 合局事件处理器示例
             * @param { [any : string] : string } state 
             * @param { [any : string] : string } user 
             */
            addUser : function(state, user) {
                if(state.userList) {
                    state.userList.push(user);
                }
            }
        }
    }
});
