// see video explanation: https://youtu.be/ubHwScDfRQA

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

//compile, prefix, and min scss
function compilescss() {
  return src('src/sass/*.sass') // change to your source directory
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/css')) // change to your final/public directory
};




// minify js
function jsmin(){
  return src('src/js/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('dist/js')); // change to your final/public directory
}

//watchtask
function watchTask(){
  watch('src/sass/**/*.sass', compilescss); // change to your source directory
  watch('src/js/*.js', jsmin); // change to your source directory
}


// Default Gulp task 
exports.default = series(
  compilescss,
  jsmin,
  watchTask
);