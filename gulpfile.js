// Gulp file
const { src, dest, watch, series, parallel } = require('gulp');
const del                  = require('del');
const browserSync          = require('browser-sync');
const postcss              = require('gulp-postcss');
const concat               = require('gulp-concat');
const uglify               = require('gulp-terser');
const cleanCSS             = require('gulp-clean-css');
const purgecss             = require('gulp-purgecss');
const logSymbols           = require('log-symbols');

//Load Previews on development
function livePreview(done){
  browserSync.init({
    files: "./*.html",
    startPath: "index.html",
    server: {
      baseDir: "./",
    },
    port: 3000 || 5000
  });
  done();
}
function watchFiles(){
  watch('./**/*.html',series(devStyles,previewReload));
  watch(["./tailwind.config.js", "./src/tailwindcss/tailwind.css"],series(devStyles, previewReload));
  watch("./src/js/vendor.js",series(previewReload));
  console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
}
function previewReload(done){
  console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}
// generate css
function devStyles(){
  const tailwindcss = require('tailwindcss'); 
  return src("./src/tailwindcss/tailwind.css")
    .pipe(postcss([
      tailwindcss("./tailwind.config.js"),
      require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'style.css'}))
    .pipe(dest("./src/css"));
}
// delete dist
function devClean(){
  console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
  return del(["./dist"]);
}
// minify css
function prodStyles(){
  return src("./src/css/style.css").pipe(purgecss({
    content: ['./*.html','./**/*.html','./src/js/*.js'],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    }
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest("./dist/css/"));
}
// finish log
function buildFinish(done){
  console.log("\n\t" + logSymbols.info,`Production is complete. Files are located at dist\n`);
  done();
}
// Clean vendors folder
function cleanvendor() {
  return del(["./vendors/"]);
}
// Copy plugins from node modules
function copyvendors() {
  return src([
    './node_modules/*@splidejs/*splide/**/*',
    './node_modules/*chart.js/**/*',
    './node_modules/*dragula/**/*',
    './node_modules/*dropzone/**/*',
    './node_modules/*flatpickr/**/*',
    './node_modules/*@fullcalendar/**/*',
    './node_modules/*glightbox/**/*',
    './node_modules/*jsvectormap/**/*',
    './node_modules/*prismjs/**/*',
    './node_modules/*simple-datatables/**/*',
    './node_modules/*simplemde/**/*',
  ])
  .pipe( dest('./vendors/'))
}
// update all plugins
exports.updateplugins = series(cleanvendor, copyvendors);
// start development
exports.default = series( devStyles, livePreview, watchFiles);
// productions
exports.prod = series(
  devClean,
  prodStyles,
  buildFinish
);