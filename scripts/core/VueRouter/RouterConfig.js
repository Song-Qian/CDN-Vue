/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 页面路径配置写在此处即可
 */
define(function(require, factory) {
    'use strict';
    var RouterConfig = {
        getRouter : function() {
            return [
                { 
                    name : 'SmartApp', 
                    path : '/', 
                    redirect : { name : 'Home' } 
                },
                { 
                    name : 'Home', 
                    path : '/home',
                    redirect : '/home/index',
                    components : {
                        view : function(resolve) {
                            return resolve(require('view/home/home'))
                        }
                    },
                    children : [
                        { 
                            path : 'index', 
                            components : {
                                view : function(resolve) {
                                    return resolve(require('view/home/index'))
                                }
                            }
                        },
                        {
                            name : "A",
                            path : 'a',
                            components : {
                                view : function(resolve) {
                                    return resolve(require('view/home/componentA'))
                                }
                            }
                        },
                        {
                            name : "B",
                            path : 'b',
                            components : {
                                view : function(resolve) {
                                    return resolve(require('view/home/componentB'))
                                }
                            }
                        },
                        {
                            name : "C",
                            path : 'c',
                            components : {
                                view : function(resolve) {
                                    return resolve(require('view/home/componentC'))
                                }
                            }
                        },
                        {
                            name : "D",
                            path : 'd',
                            components : {
                                view : function(resolve) {
                                    return resolve(require('view/home/componentD'))
                                }
                            }
                        }
                    ]
                },
                {
                    name : "test",
                    path : "/test",
                    components : {
                        view : function(resolve) {
                            return resolve(require('view/test/index'))
                        }
                    }
                }
            ]
        }
    }

    return RouterConfig;
});