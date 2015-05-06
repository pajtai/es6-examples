'use strict';

var BB = require('bluebird');
var System = require('es6-module-loader').System;
var highlight = require('console-highlight');
var fs = require('fs');
var chain = BB.resolve();
var prompt = require('prompt');

clear();

BB.each([
    //'arrow-function',
    'classes',
    'let',
    //'object-deconstruction'
], function(module) {

    chain = chain

        .then(function() {
            console.log();
            console.log();
            console.log('--------------------------------------------------------');
            console.log('                      ' + module + '.js');
            console.log('--------------------------------------------------------');
            console.log();
            console.log(highlight(fs.readFileSync(module + '.js', "utf8"), {
                // optional options
                language: 'javascript', // will auto-detect if omitted
                theme: 'tomorrow-night-bright' // a highlight.js theme
            }));

            console.log('output:');
            console.log('--------------------------------------------------------');
            console.log();
            return System
                .import(module)
                .then(function() {
                    return new BB(function(resolve) {
                        process.nextTick(function() {

                            console.log();
                            console.log();

                            prompt.start();
                            prompt.get(['enter to continue'], function(e, r) {

                                console.log();
                                console.log();
                                console.log();

                                if ( e || '' !== r['enter to continue']) {
                                    console.log('Not enter pressed.... exiting!');
                                    process.exit();
                                }

                               clear();

                                resolve();
                            });
                        });
                    });
                })
        })
        .catch(function(e) {
            console.log('error:', e);
        });

});

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}
