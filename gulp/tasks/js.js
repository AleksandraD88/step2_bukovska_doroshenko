import gulp from 'gulp'
import minify from 'gulp-minify'
import concat from 'gulp-concat';
import { browserSync } from './browserSync.js'

export const js = () => {
    return gulp.src('./src/js/**/*.js').pipe(concat('scripts.min.js')).pipe(minify()).pipe(gulp.dest('./dist/scripts')).pipe(browserSync.stream())
}