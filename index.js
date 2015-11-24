var _ = require('lodash');
var postcss = require('postcss');
var SEProperties = require('chinese-css-properties');
var SEValues = require('chinese-css-values');

module.exports = postcss.plugin('postcss-chinese-stylesheets', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        css.walkDecls(function transformDecl(decl) {
            // Properties
            _.forEach(SEProperties, function (value, key) {
                if (decl.prop === value) {
                    decl.prop = key;
                }
            });

            // Values
            _.forEach(SEValues, function (value, key) {
                decl.value = decl.value.replace(value, key);
            });

            // Important
            if (decl.value.indexOf('!重要') >= 0) {
                decl.value = decl.value.replace(/\s*!重要\s*/, '');
                decl.important = true;
            }
        });

    };
});
