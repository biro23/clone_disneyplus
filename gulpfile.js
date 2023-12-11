// importando o gulp, importar tambem o SASS
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// funcao abaixo recupera os arquivos, .pipe(sass) - chamando o sass
function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

// dentro do gulp.watch = passa os arquivos que serao observados
exports.default = styles;
exports.watch = function(){
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}
