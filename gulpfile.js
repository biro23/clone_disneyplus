// importando o gulp, importar tambem o SASS
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');  

// funcao abaixo recupera os arquivos, .pipe(sass) - chamando o sass
function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

// *** para pegar todos os arquivos dentro da pasta images 
function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));  
}

// dentro do gulp.watch = passa os arquivos que serao observados
exports.default = gulp.parallel(styles, images);


exports.watch = function(){
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}
