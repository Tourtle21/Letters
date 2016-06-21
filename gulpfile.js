"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var concat = require("vinyl-source-stream");

var config = {
	port: 1921,
	devBaseUrl: "http://localhost",
	paths: {
		html: "./src/*.html",
		js: "./src/**/*.js",
		mainJs: "./src/main.js",
		images: "./src/images/*",
		css: [
			"node_modules/bootstrap/dist/css/bootstrap.min.css",
			"node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
			"node_modules/toastr/build/toastr.css"
		],
	}	dist: './dist',
}

gulp.task("connect", function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devbaseUrl,
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(config.paths.html)
})