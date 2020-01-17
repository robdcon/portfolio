//Gulp configuration

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	browserify = require('gulp-browserify'),
	browserSync = require('browser-sync').create()
	htmlclean = require('gulp-htmlclean')

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
	gulp.src('src/sass/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css'))
	
})
// Bundle js files for production
gulp.task('bundle', ()=>
{
	gulp.src('src/js/custom.js')
		.pipe(browserify())
		.pipe(gulp.dest('dist/js'))
})

// Compress images for productions 
gulp.task('images', ()=> 
{
	
	gulp.src('src/img/*')
		.pipe(newer('dist/img/'))
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('dist/img'));
})
// Clean HTML files
gulp.task('html', ()=>
{
	
	gulp.src('./src/*.html')
	.pipe(newer('dist/'))
	.pipe(htmlclean())
	.pipe(gulp.dest('dist/'))

})
gulp.task('json', ()=>
{
	
	gulp.src('./src/**/*.json')
	.pipe(newer('dist/'))
	.pipe(gulp.dest('dist/'))

})

gulp.task('watch', [ 'sass'], ()=>
{
	browserSync.init({
		opan:'external',
		proxy:'localhost/my_portfolio/dist/',
		port:8080
	})
	gulp.watch(['js/**/*.js', 'sass/**/*.scss', 'src/**/*.html', 'json/**/*.json'] , ['sass','bundle','images', 'html', 'json'])
})

gulp.task('run', ['watch'])

gulp.task('default', ['run'])





