import gulp from 'gulp'
import { html, js, scss, server, reset, image} from './gulp/tasks/tasks.js'

const watch = () => {
    gulp.watch('./*.html', html);
    gulp.watch('./src/scss/**/*.scss', scss);
    gulp.watch('./src/js/**/*.js', js);
}

// html, scss, js
const mainTasks = gulp.parallel(scss, js, image);

export const dev = gulp.series(reset, mainTasks, gulp.parallel(watch, server));

export const build = gulp.parallel(reset, mainTasks);




