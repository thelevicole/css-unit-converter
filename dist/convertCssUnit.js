'use strict';function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function convertCssUnit(a,b){b=b||document.body;var c={px:function(a){return a},cm:function(a){return 38*a},mm:function(a){return 3.8*a},q:function(a){return .95*a},in:function(a){return 96*a},pc:function(a){return 16*a},pt:function(a){return 1.333333*a},rem:function(a){return a*parseFloat(getComputedStyle(document.documentElement).fontSize)},em:function(a){return a*parseFloat(getComputedStyle(b).fontSize)},vw:function(a){return a/100*window.innerWidth},vh:function(a){return a/100*window.innerHeight},ms:function(a){return a},s:function(a){return 1e3*a},deg:function(a){return a},rad:function(a){var b=Math.PI;return a*(180/b)},grad:function(a){return a*(180/200)},turn:function(a){return 360*a}},d=new RegExp("^([-+]?(?:\\d+(?:\\.\\d+)?))(".concat(Object.keys(c).join("|"),")$"),"i"),e=String.prototype.toString.apply(a).trim().match(d);if(e){var f=+e[1],g=e[2].toLocaleLowerCase();if(g in c)return c[g](f)}return a}"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)&&(module.exports=convertCssUnit);