define([
    'require',
    'html!view/test/index.view.html',
    'lodash',
    'css!assets/css/skin-media.css',
    'css!assets/css/skin-media-2x.css'
], function(require, template, _) {
    'use strict';
    var vue = require("vue");

    var component = vue.extend({
        template : template,
        data : function() {
            return {
                items : [
                    '../assets/css/images/322061_300.jpg',
                    '../assets/css/images/323431_300.jpg',
                    '../assets/css/images/323589_300.jpg',
                    '../assets/css/images/323674_300.jpg',
                    '../assets/css/images/323696_300.jpg',
                    '../assets/css/images/323732_300.jpg',
                    '../assets/css/images/323733_300.jpg',
                    '../assets/css/images/323763_300.jpg'
                ],
                active : 0,
                clientHeight : 0,
                scrollHeight : 0,
                wheel : '',
                scroll : 'void 0;'
            }
        },
        computed : {
            getScrollPageSize : function () {
                var me = this;
                return _.toInteger(me.scrollHeight / me.clientHeight);
            },
            getScrollTo : function() {
                var me = this;
                var h = me.clientHeight;
                var top = me.active * h;
                return "translateY(-"+ top +"px)";
            },
            getScrollAnimation : function() {
                var me = this;
                var css = {};
                css['item-' + me.active] = true;
                css.up = me.wheel === 'up';
                css.down = me.wheel === 'down';
                return css;
            }
        },
        methods : {
            handlerScrollPage : function(e) {
                var me = this;
                if(e.deltaY > 0 && me.active < (me.getScrollPageSize - 1)) {
                    me.active += 1;
                    me.wheel = 'up';
                } else if(e.deltaY > 0 ){
                    me.active = 0;
                    me.wheel = 'up';
                }

                if(e.deltaY < 0 && me.active > 0) {
                    me.active -= 1;
                    me.wheel = 'down';
                } else if(e.deltaY < 0){
                    me.wheel = 'down';
                    me.active = me.getScrollPageSize - 1;
                }
            }
        },
        mounted : function() {
            var me = this;
            var resizeCallback = function(e) {
                me.scrollHeight = document.querySelector("div.skin-media-items").scrollHeight;
                me.clientHeight = document.querySelector("div.skin-media-items").clientHeight;
            }
            window.onresize = _.debounce(resizeCallback, 500);
            me.scroll = _.debounce(me.handlerScrollPage, 500);
            resizeCallback();
        }
    });
    return component;
});