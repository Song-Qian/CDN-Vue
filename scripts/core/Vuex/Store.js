/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 所有的全局状态属性存储器
 */

 define([
     'vue',
     'vuex',
     'vuexCore/state',
     'vuexCore/getters',
     'vuexCore/mutations',
     'vuexCore/actions',
     'vuexCore/modules'
 ], function(Vue, Vuex, stateGlobal, gettersGlobal, mutationsGlobal, actionsGlobal, modulesGlobal) {
    'use strict';
    var Store = function() {
        if(!(this instanceof Store)) {
            throw new Error('init Store fail');
        }

        Vue.use(Vuex);
        var global = {};
        var modules = new modulesGlobal();
        //在生产环境开启vuex Store严格模式，控制开发人员的代码质量。
        Object.assign(global, stateGlobal, gettersGlobal, mutationsGlobal, actionsGlobal, modules.getModules(), { strict : true });
        this.store = new Vuex.Store(global);
    }

    Store.prototype = {
        constructor : Store,
        startHot : function() {

        }
    }

    return Store;
 });