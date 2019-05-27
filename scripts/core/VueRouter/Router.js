/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 动态路由生成打包器
 */

define(['lodash', 'vue'], function(_, Vue) {
    'use strict';

    function defineProperty(me, paramArgs) {
        Object.defineProperty(me, 'name', {
            get : function() {
                return paramArgs.$name;
            },
            set : function(val) {
                if(val && typeof val !== "string"){
                    throw new Error("arguments name type not a String");
                }
                paramArgs.$name = val;
            }
        })

        Object.defineProperty(me, 'path', {
            set: function(val){
                if(val && typeof val !== "string"){
                    throw new Error("arguments path type not a String");
                }
                paramArgs.$path = val;
            },
            get: function(){
                return paramArgs.$path;
            }
        })

        Object.defineProperty(me, 'redirect', {
            set: function(val){
                if(val && (typeof val !== "string" && typeof val !== "object")) {
                    throw new Error("arguments redirect type not a String or object");
                }
                paramArgs.$redirect = val;
            },
            get: function(){
                return paramArgs.$redirect;
            }
        })

        Object.defineProperty(me, 'alias', {
            set: function(val){
                if(val && typeof val !== "string"){
                    throw new Error("arguments alias type not a String");
                }
                paramArgs.$alias = val;
            },
            get: function(){
                return paramArgs.$alias;
            }
        })

        Object.defineProperty(me, 'meta', {
            get: function(){
                return paramArgs.$meta;
            },
            set: function(val){
                if(val && typeof val !== "object"){
                    throw  new Error("arguments meta type not a Object");
                }
                paramArgs.$meta = val;
            }
        })

        Object.defineProperty(me, 'component', {
            set : function(val) {
                paramArgs.$component = val;
            },
            get : function() {
                return paramArgs.$component;
            }
        })

        Object.defineProperty(me, 'components', {
            set: function(val){
                if(val && (!(val instanceof Array) && typeof val !== "object")){
                    throw new Error("arguments componets type not a Array or object");
                }
                paramArgs.$components = val instanceof Array ? val : val ? [val] : undefined;
            },
            get: function(){
                let me = this;
                let dynamicComponent = paramArgs.$components && paramArgs.$components.length ? {} : null;
                paramArgs.$components && _.map(paramArgs.$components, function(it) {
                    dynamicComponent[it.name || "default"] = it.view(function(c){
                        return Vue.extend(c);
                    });
                });
                return dynamicComponent;
            }
        })

        Object.defineProperty(me, 'children', {
            set: function(val){
                if(val  && !(val instanceof Array)){
                    throw new Error("arguments componet type not a Array");
                }
                paramArgs.$children = val;
            },
            get: function(){
                return paramArgs.$children && paramArgs.$children.length ? paramArgs.$children : undefined;
            }
        })

        Object.defineProperty(me, 'props', {
            set : function(val) {
                if(val && !(val instanceof Boolean)) {
                    throw new Error("arguments props type not a Boolean");
                }
                paramArgs.$props = val;
            },
            get: function() {
                return paramArgs.$props;
            }
        })

        Object.defineProperty(me, 'iterator', {
            get : function() {
                return paramArgs.$children;
            }
        })
    }
    
    /**
     * vue-router对象封装模型
     * @param {name, path, redirect, alias, props, components, children, meta } r
     * @returns router 
     */
    var router = function(r) {
        if(!(this instanceof router)) {
            return new Error('init router model fail');
        }
        /**
         * 私有参数
         */
        var paramArgs = {
            $name : '',
            $path : '/',
            $redirect : undefined,
            $alias : undefined,
            $props : undefined,
            $component : null,
            $components : [],
            $children : [],
            $meta : {}
        }
        defineProperty(this, paramArgs);
        this.name = r.name || '';
        this.path = r.path || '/';
        this.redirect = r.redirect || undefined;
        this.alias = r.$alias || undefined;
        this.component = r.component;
        this.components = r.components;
        this.children = r.children;
        this.meta = r.meta;
        this.props = r.props;
        return this;
    }

    router.prototype = {
        hasChildrenRouter : function(){
            return this.children.length > 0;
        }
    }

    return router;
});
