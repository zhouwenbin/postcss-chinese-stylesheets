# <img src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/200px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="china" height="32px" width="auto"> PostCSS chinese Stylesheets [![Build Status][ci-img]][ci]

> [PostCSS] plugin for writing chinese Style Sheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/zhouwenbin/postcss-chinese-stylesheets.svg
[ci]:      https://travis-ci.org/zhouwenbin/postcss-chinese-stylesheets
[chinese Values]:      https://github.com/zhouwenbin/chinese-css-values

## Installation

```console
$ npm install postcss-chinese-stylesheets --save-dev
```

### Quick Start

```js
// Dependencies
var fs = require('fs');
var postcss = require('postcss');
var cncss = require('postcss-chinese-stylesheets');

// CSS to be processed
var css = fs.readFileSync('input.css', 'utf8');

// Process our chinese stylesheets css using postcss-chinese-stylesheets
var output = postcss()
  .use(cncss())
  .process(css)
  .css

console.log('\n===>Output CSS:\n', output);
```

Or just:

```js
var output = postcss(cncss())
  .process(css)
  .css
```


### chinese syntax

```css
.foo {
    定位: 相对;
    背景颜色: 三文鱼;
    背景图片: 无;
    字体家族: Helvetica, Arial;
    颜色: 白;
    行高: 1.68;
    字母间距: 2px;
    浮动: 左;
    显示: 无;
    层级: 1000 !重要;
}
```

### CSS output

```css
.foo {
    position: relative;
    background-color: salmon;
    background-image: none;
    font-family: Helvetica, Arial;
    color: white;
    line-height: 1.68;
    letter-spacing: 2px;
    float: left;
    display: none;
    z-index: 1000 !important;
}
```

#### [Here you can see the full list of chinese CSS Properties](https://github.com/zhouwenbin/chinese-css-properties)

#### [Here you can see the full list of chinese CSS Values](https://github.com/zhouwenbin/chinese-css-values)

## Usage

### Gulp

```js
var gulp = require('gulp');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var cncss = require('postcss-chinese-stylesheets')
var autoprefixer = require('autoprefixer-core')

gulp.task('default', function () {
    var processors = [
        autoprefixer({ browsers: ['> 0%'] }), //Other plugin
        cncss()
    ];
    gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(rename('gulp.css'))
        .pipe(gulp.dest('build'))
});
gulp.watch('src/*.css', ['default']);
```

### Grunt

```js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['> 0%'] }).postcss, //Other plugin
          require('postcss-chinese-stylesheets')(),
        ]
      },
      dist: {
        src: ['src/*.css'],
        dest: 'build/grunt.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
}
```

---

## Contributing

Fork, work on a branch, install dependencies & run tests before submitting a PR.

```console
$ git clone https://github.com/YOU/postcss-chinese-stylesheets.git
$ git checkout -b patch-1
$ npm install
$ npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

## thanks [postcss-swedish-stylesheets](https://github.com/johnie/postcss-swedish-stylesheets)

