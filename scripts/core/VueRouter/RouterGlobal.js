/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 全局路由动态加载入口
 */

define([
    'vue',
    'vue-router',
    'vue-resource',
    'smartRouter/Router',
    'smartRouter/RouterConfig'
], function(Vue, VueRouter, VueResource, Router, rConfig) {
    'use strict';
    
    var RouterGlobal = function(store) {
        if(!(this instanceof RouterGlobal)) {
            return new Error('init RouterGlobal fail');
        }
        Vue.use(VueRouter);
        Vue.use(VueResource);
        this.RouterConfig = rConfig;
        this.Router = [];
        this.$router = null;
        this.$store = store;
        return this;
    }

    RouterGlobal.prototype = {
        constructor : RouterGlobal,
        addRouter : function(r) {
            if(r && r instanceof Router && this.$router) {
                this.Router.push(r);
                this.$router.addRoutes(r);
            }
        },
        renderRouter : function() {
            if(!this.RouterConfig)
                throw new Error("dynamic render components fail");
            var routes = this.RouterConfig.getRouter();
            var render = function(it) {
                var router = it.children && it.children.length ? _.map(it.children, render) : [it];
                if(router.length === 1 && !(router[0] instanceof Router)) {
                    return new Router(router[0]);
                }
                it.children = router;
                return new Router(it);
            }
            return _.map(routes, render);
        },
        
        listenersRouter : function(to, from, next) {
            next();
        },

        registerSafetyAjax : function() {
            Vue.http.interceptors.push(function(request, next) {
                next(function(response){

                })
            })
        },
        start : function() {
            var me = this;
            var routes = this.renderRouter();
            me.Router = routes;
            me.$router = new VueRouter({ mode : 'history', routes : routes });
            me.$router.beforeEach(function(to, form, next){
                me.listenersRouter.apply(me, [to, form, next]);
            });
            me.registerSafetyAjax();
            return me.$router;
        },
        stop : function() {

        }
    }

    return RouterGlobal;
});