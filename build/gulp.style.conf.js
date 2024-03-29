const gulp = require("gulp");
const gulpCleanCss = require("gulp-clean-css");
const gulpSass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("css", function() {
	gulp.src("../src/styles/index.less")
		.pipe(gulpSass())
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", "ie > 8"]
			})
		)
		.pipe(gulpCleanCss())
		.pipe(rename("siriusGrid.css"))
		.pipe(gulp.dest("../dist/styles"));
});

gulp.task("default", ["css"]);
