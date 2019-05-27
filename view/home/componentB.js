/**
 *  Developer   : SongQian
 *  Time        : 2018/12/25
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : Test B
 */
define([
    'require',
    'html!view/home/b.view.html',
    'echarts',
    'echarts-gl',
    'snapshot'
], function(require, template, echarts, echartsGl, snapshot) {
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
                        backgroundColor: '#000',
                        globe: {
                            baseTexture: "../assets/echarts-gl-data/world.topo.bathy.200401.jpg",
                            heightTexture: "../assets/echarts-gl-data/world.topo.bathy.200401.jpg",
                            displacementScale: 0.04,
                            shading: 'realistic',
                            environment: '../assets/echarts-gl-data/starfield.jpg',
                            realisticMaterial: {
                                roughness: 0.9
                            },
                            postEffect: {
                                enable: true
                            },
                            light: {
                                main: {
                                    intensity: 5,
                                    shadow: true
                                },
                                ambientCubemap: {
                                    texture: '../assets/echarts-gl-data/pisa.hdr',
                                    diffuseIntensity: 0.2
                                }
                            }
                        }
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
                me.Snapshot({ name : 'setImageTopRight', image : canvas.toDataURL() });
                me.spinShow = false;
                next();
            })
        }
    });
    return component;
});