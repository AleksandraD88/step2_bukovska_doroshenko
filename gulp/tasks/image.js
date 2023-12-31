import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

export const image = () => {
    return gulp.src('./src/img/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/img'))
}