/**
 *  Developer   : SongQian
 *  Time        : 2018/12/20
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 主页模版内容视图
 */
define([
    'require',
    'html!view/home/index.view.html'
], function(require, template) {
    'use strict';
    var vue = require('vue');
    var vuex = require('vuex');
    var component = vue.extend({
        template : template,
        data : function() {
            return {
                count : 0
            }
        },
        computed : Object.assign({ }, vuex.mapGetters({
            'getImageTopLeft' : 'Sys/getImageTopLeft',
            'getImageTopRight' : 'Sys/getImageTopRight',
            'getImageBottomLeft' : 'Sys/getImageBottomLeft',
            'getImageBottomRight' : 'Sys/getImageBottomRight'
          })
        ),
        mounted : function() {
            // var me = this;
            // var timer = setInterval(function() {
            //     me.$nextTick(function() {
            //         me.count++;
            //         console.log(me.count);
            //     })
            // }, 1);

            // me.$once("hook:beforeDestroy", function() {
            //     clearInterval(timer);
            // })
        }
    });
    return component;
});