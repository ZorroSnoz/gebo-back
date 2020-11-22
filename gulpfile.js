const gulp = require("gulp")
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json")

gulp.task("typescript",  () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./"))
})

gulp.task('watch', ()=> gulp.watch('src/*.ts', gulp.series('typescript')))

gulp.task('default', gulp.series('watch'))