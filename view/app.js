/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : app入口环境
 */

 define([
     'vue',
     'iview',
     'smartRouter/RouterGlobal',
     'scripts/core/Vuex/Store',
     'polyfill'
 ], function(Vue, IView, VueGlobal, VueStore) {
     'use strict';
     
    Vue.config.debug = true;
    var store = new VueStore().store;
    var route = new VueGlobal(store);
    Vue.use(IView,  {
        size: 'small'
    });
    var app = new Vue({
        el : '#app',
        router : route.start(),
        store : store
    })

 });