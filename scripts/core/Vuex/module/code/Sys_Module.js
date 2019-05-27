/**
 *  Developer   : SongQian
 *  Time        : 2018/12/25
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 全局系统状态配置
 */
define(function(require, factory) {
    'use strict';
    return {
        Sys : function() {
            return {
                namespaced : true,
                state : function() {
                    return {
                        imgGraphList : {
                            snapArea1 : '',
                            snapArea2 : '',
                            snapArea3 : '',
                            snapArea4 : ''
                        }
                    }
                },
                getters : {
                    getImageTopLeft(state, getters, rootState, rootGetters) {
                        return state.imgGraphList.snapArea1;
                    },
                    getImageTopRight(state, getters, rootState, rootGetters) {
                        return state.imgGraphList.snapArea2;
                    },
                    getImageBottomLeft(state, getters, rootState, rootGetters) {
                        return state.imgGraphList.snapArea3;
                    },
                    getImageBottomRight(state, getters, rootState, rootGetters) {
                        return state.imgGraphList.snapArea4;
                    }
                },
                mutations : {
                    setImageTopLeft : function(state, content) {
                        if(content) {
                            state.imgGraphList.snapArea1 = content;
                        }
                    },
                    setImageTopRight : function(state, content) {
                        if(content) {
                            state.imgGraphList.snapArea2 = content;
                        }
                    },
                    setImageBottomLeft : function(state, content) {
                        if(content) {
                            state.imgGraphList.snapArea3 = content;
                        }
                    },
                    setImageBottomRight : function(state, content) {
                        if(content) {
                            state.imgGraphList.snapArea4 = content;
                        }
                    }
                },
                actions : {
                    /**
                     * Sys modules 分发器示例
                     * @param { [any : string] : any } context 
                     * @param { [any : string] : any } user 
                     */
                    Snapshot : function(context, snap) {
                        context.commit(snap.name, snap.image);
                    }
                }
            }
        }
    }
});