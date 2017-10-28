'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const gutil = require('gulp-util');

const jsTestFilesGlob = 'test/**/*.js';
const jsFilesGlob = [
  'bin/www',
  'migrations/*.js',
  'seeders/*.js',
  'src/**/*.js',
  jsTestFilesGlob,
  'gulpfile.js',
  'knexfile.js'
];

gulp.task('lint', () => gulp.src(jsFilesGlob)
  .pipe(eslint())
  .pipe(eslint.format())
);

gulp.task('watch', () => gulp.watch(jsFilesGlob, ['lint']));

gulp.task('nodemon', () => nodemon({
  script: 'bin/www',
  ext: 'json js',
  ignore: ['.git/**', 'node_modules/**'],
  env: { 'NODE_PATH': '.' }
}).on('restart', () => gutil.log('nodemon restarted'))
);

gulp.task('default', ['lint', 'watch', 'nodemon']);
