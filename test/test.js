var _ = require('lodash');
var postcss = require('postcss');
var expect  = require('chai').expect;
var SEProperties = require('chinese-css-properties');
var SEValues = require('chinese-css-values');

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

var chinesePropertiesTest = function (chinese, english, value) {
    it('converts ' + chinese + ' to ' + english, function (done) {
        test(
            'a{ ' + chinese + ': ' + value + '; }',
            'a{ ' + english + ': ' + value + '; }',
            {},
            done
        );
    });
};

var chineseValuesTest = function (chinese, english, property) {
    it('converts ' + chinese + ' to ' + english, function (done) {
        test(
            'a{ ' + property + ': ' + chinese + '; }',
            'a{ ' + property + ': ' + english + '; }',
            {},
            done
        );
    });
};

describe('postcss-chinese-stylesheets', function () {

    // Test Properties
    _.forEach(SEProperties, function (value, key) {
        chinesePropertiesTest(value, key, '10px');
    });

    // Test Values
    _.forEach(SEValues, function (value, key) {
        chineseValuesTest(value, key, 'color');
    });

    // Test important
    it('converts !重要 to !important', function (done) {
        test(
            'a{ color: white !重要; }',
            'a{ color: white !important; }',
            {},
            done
        );
    });

});
