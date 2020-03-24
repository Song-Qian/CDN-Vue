/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 全局模块化状态器，自动加载各开发人员的模块状态。禁止对此类进行非框架性需求修改。
 */
define([
    'vuexModules/module_namespace',
    'vuexModules/module_imports'
], function(module_namespace, packages) {
    'use strict';
    
    var Modules = function() {
        if(!(this instanceof Modules)) {
            throw new Error('init Modules fail')
        }
        this.modules = {};
        this.namespaces = module_namespace;
        this.packages = packages;
        this.init();
    }

    Modules.prototype = {
        constructor : Modules,
        init : function() {
            for(let namespace in this.namespaces){
                this.modules[this.namespaces[namespace]] = this.packages[namespace][this.namespaces[namespace]]() || {};
                // Object.assign(this.modules[this.namespaces[namespace]], this.packages[namespace][this.namespaces[namespace]]());
            }
        },
        getModules : function() {
            return { modules : this.modules };
        }
    }

    return Modules;

});