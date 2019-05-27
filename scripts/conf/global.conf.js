/**
 *  Developer   : SongQian
 *  Time        : 2018/12/19
 *  Email       : onlylove1172559463@vip.qq.com
 *  Description : 环境运行配置脚本
 */
require.config({
    baseUrl : 'http://localhost:8001/',
    paths : {
        'vue' : 'scripts/libs/vue',
        'vue-resource' : 'scripts/libs/vue-resource',
        'vuex' : 'scripts/libs/vuex',
        'vue-router' : 'scripts/libs/vue-router',
        'iview' : 'scripts/libs/iview',
        'lodash' : 'scripts/common/lodash',
        'polyfill' : 'scripts/libs/polyfill',
        'echarts' : 'scripts/libs/echarts.min',
        'echarts-gl' : 'scripts/libs/echarts-gl.min',
        'snapshot' : 'scripts/libs/html2canvas'
    },
    map : {
        '*' : {
            "text" : "scripts/loader/text",
            "html" : "scripts/loader/html",
            "css" : "scripts/loader/css"
        }
    },
    shim : {
        'iview' : ['css!assets/css/iview.css','css!assets/css/skin-default.css'],
        'view' : ['vue', 'vue-resource','vue-router', 'vuex']
    },
    packages : [
        {
            name : 'view',
            location : 'view'
        },
        {
            name : 'smartRouter',
            location : 'scripts/core/VueRouter'
        },
        {
            name : 'vuexCore',
            location : 'scripts/core/Vuex/core'
        },
        {
            name : 'vuexModules',
            location : 'scripts/core/Vuex/module'
        }
    ]
});
require(["view/app"]);