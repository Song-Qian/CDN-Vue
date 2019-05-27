/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 示例 User状态模块
 */

 define(function() {
    'use strict';
    return {
        User : function() {
            return {
                namespaced : true,
                /**
                 * User modules 中状态保持示例
                 * @returns any
                 */
                state : function() {
                    return {
                        name : ''
                    }
                },
                getters : {
                    /**
                     * User modules 中访问器示例， root 是全局访问
                     * @param { [any : string] : any } state 
                     * @param { [any : FunctionName] : any } getters 
                     * @param { [any : string] : any } rootState 
                     * @param { [any : FunctionName] : any} rootGetters 
                     */
                    getUserName(state, getters, rootState, rootGetters) {
                        return state.name;
                    }
                },
                mutations : {
                    /**
                     * User modules 事件处理器示例
                     * @param { [any : string] : any } state 
                     * @param { [any : string] : any } content 
                     */
                    setUserName : function(state, content) {
                        state.name = content;
                    }
                },
                actions : {
                    /**
                     * User modules 分发器示例
                     * @param { [any : string] : any } context 
                     * @param { [any : string] : any } user 
                     */
                    change : function(context, user) {
                        context.commit('setUserName', user.name);
                    }
                }
            }
        }
    }
 });