//Gulp configuration

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch')
// var imagemin = require('gulp-imagemin');
// var newer = require('gulp-newer');
// var htmlclean = require('gulp-htmlclean');

// Run scss files through autofixer
gulp.task('sass', ()=>
{
	gulp.src('sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css/'))
	
})

gulp.task('watch', ()=>
{
	gulp.watch('sass/**/*', ['sass'])
})
gulp.task('run', ['watch'])
// Compress images for productions 
// gulp.task('images', ()=> 
// {
// 	var out = folder.dist + 'images/';
// 	return gulp.src(folder.src + 'img/**/*')
// 		.pipe(newer())
// 		.pipe(imagemin({optimizationLevel: 5}))
// 		.pipe(gulp.dest(out));
// })
// After the images task is complete, clean HTML files for production
// gulp.task('html', ['images'], ()=>
// {
// 	var out = folder.dist + 'html/';
// 	var page = gulp.src(folder.src + 'html/**/*')
// 	.pipe(newer(out))

// 	if(!devBuild)
// 	{
// 		page = page.pipe(gulp.dest(out));
// 	}

// 	return page.pipe(dest(out));
// })


