/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 主页模版视图
 */
define([
    'require',
    'html!view/home/home.view.html'
], function(require, template) {
    'use strict';
    var vue = require('vue');
    var component = vue.extend({
        template : template,
        data : function() {
            return {
                active : 'Home'
            }
        },
        methods : {
            handlerMenuChange : function(navName) {
                var me = this;
                me.active = navName;
                me.$router.push({ name : navName});
            }
        }
    });
    return component;
});