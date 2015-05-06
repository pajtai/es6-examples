
var System = require('es6-module-loader').System;

System
    .import('classes')
    .catch(function(err){
        console.log('err', err);
    });
