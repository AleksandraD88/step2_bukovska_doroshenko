import gulp from 'gulp'
import { browserSync } from './browserSync.js'

export const html = (next) => {
    browserSync.reload();
    next();
}