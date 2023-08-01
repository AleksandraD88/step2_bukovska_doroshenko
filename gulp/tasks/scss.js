import gulp from 'gulp'
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import { browserSync } from './browserSync.js'

const sass = gulpSass(dartSass);

export const scss = () => {
    return gulp.src('./src/scss/**/*.scss').pipe(sass()).pipe(autoPrefixer({overrideBrowserslist : ['last 2 versions']})).pipe(cleanCss()).pipe(gulp.dest('./dist/styles')).pipe(browserSync.stream())
}