//Gulp configuration

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	browserify = require('gulp-browserify'),
	browserSync = require('browser-sync').create()
	//htmlclean = require('gulp-htmlclean')

gulp.task('browserSync', ()=>
{
	browserSync.init(
	{
		server:
		{
			baseDir:'./'
		}
	})
})

// Run scss files through autofixer
gulp.task('sass', ()=>
{
	gulp.src('sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload(
		{
			stream:true
		}))
	
})

// Bundle js files for production
gulp.task('bundle', ()=>
{
	gulp.src('js/components/custom.js')
		.pipe(browserify())
		.pipe(gulp.dest('dist/'))
})

// Compress images for productions 
gulp.task('images', ()=> 
{
	
	return gulp.src('images/')
		.pipe(newer('img/'))
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('img/'));
})

gulp.task('watch', ['browserSync', 'sass'], ()=>
{
	gulp.watch(['js/**/*.js', 'sass/**/*.scss'], ['sass','bundle','images'])
})

gulp.task('run', ['watch'])


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


