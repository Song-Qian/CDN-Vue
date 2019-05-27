/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 此处引用自己所定义的状态管理模块
 */

define([
    'vuexModules/code/User_Module',
    'vuexModules/code/Sys_Module'
], function(
    User,
    Sys
) {
    'use strict';
    return {
        User : User,
        Sys : Sys
    }
});