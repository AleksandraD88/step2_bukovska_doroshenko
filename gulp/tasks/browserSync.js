import bs from "browser-sync";

export const browserSync = bs.create()
export const server = () => {
    browserSync.init({server: {baseDir: './'}})
}