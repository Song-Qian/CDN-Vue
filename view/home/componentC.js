/**
 *  Developer   : SongQian
 *  Time        : 2018/12/25
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : Test C
 */
define([
    'require',
    'html!view/home/c.view.html',
    'echarts',
    'snapshot'
], function(require, template, echarts, snapshot) {
    'use strict';
    var vue = require('vue');
    var vuex = require('vuex');
    var component = vue.extend({
        template : template,
        data : function() {
            return {
                spinShow : false,
                graph : {
                    el : null,
                    options : {
                        title: {
                            text: '浏览器占比变化',
                            subtext: '纯属虚构',
                            top: 10,
                            left: 10
                        },
                        tooltip: {
                            trigger: 'item',
                            backgroundColor : 'rgba(0,0,250,0.2)'
                        },
                        toolbox : {
                            feature : {

                            }
                        },
                        legend: {
                            type: 'scroll',
                            left : 'left',
                            bottom : 10,
                            orient : 'vertical',
                            data: (function (){
                                var list = [];
                                for (var i = 1; i <=28; i++) {
                                    list.push(i + 2000 + '');
                                }
                                return list;
                            })()
                        },
                        visualMap: {
                            top: 'middle',
                            right: 10,
                            color: ['red', 'yellow'],
                            calculable: true
                        },
                        radar: {
                           indicator : [
                               { text: 'IE8-', max: 400},
                               { text: 'IE9+', max: 400},
                               { text: 'Safari', max: 400},
                               { text: 'Firefox', max: 400},
                               { text: 'Chrome', max: 400}
                            ]
                        },
                        series : (function (){
                            var series = [];
                            for (var i = 1; i <= 28; i++) {
                                series.push({
                                    name:'浏览器（数据纯属虚构）',
                                    type: 'radar',
                                    symbol: 'none',
                                    lineStyle: {
                                        width: 1
                                    },
                                    emphasis: {
                                        areaStyle: {
                                            color: 'rgba(0,250,0,0.3)'
                                        }
                                    },
                                    data:[
                                      {
                                        value:[
                                            (40 - i) * 10,
                                            (38 - i) * 4 + 60,
                                            i * 5 + 10,
                                            i * 9,
                                            i * i /2
                                        ],
                                        name: i + 2000 + ''
                                      }
                                    ]
                                });
                            }
                            return series;
                        })()
                    }
                }
            }
        },
        methods : Object.assign({
            init : function() {
                var me = this;
                me.graph.el = echarts.init(document.getElementById('charts'));
                me.graph.el.setOption(me.graph.options);
            }
        }, vuex.mapActions({
            'Snapshot' : 'Sys/Snapshot'
        })),
        mounted : function() {
            var me = this;
            me.init();
        },
        beforeRouteLeave : function(to, from, next) {
            var me = this;
            me.spinShow = true;
            snapshot(document.getElementById('snapArea')).then(function(canvas) {
                me.Snapshot({ name : 'setImageBottomLeft', image : canvas.toDataURL() });
                me.spinShow = false;
                next();
            })
        }
    });
    return component;
});