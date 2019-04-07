const gulp = require('gulp');
const sass = require('gulp-sass');

/*Tarefas CSS - Bootstrap */
gulp.task('sass', gulp.series( function(){
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
}));

/*Tarefa JS - Bootstrap Jquery Popper.js */

gulp.task('js', gulp.series( function(){
    return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/popper.js/dist/popper.min.js',
    'node_modules/jquery/dist/jquery.min.js'
])
    .pipe(gulp.dest('src/js'));
   
}));

/*Tarefa SERVE */
gulp.task('serve', gulp.series( function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss',
    'src/scss/*.scss'],
    gulp.parallel( ['sass'] ));
}));

gulp.task('default', gulp.series( ['sass', 'js', 'serve'] ));