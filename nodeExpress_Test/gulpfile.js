//���빤�߰� require('node_modules���Ӧģ��')
var gulp = require('gulp'), //���ذ�װgulp���õ��ĵط�
    less = require('gulp-less'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del');

//����һ��testLess�����Զ����������ƣ�
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest('src/css')); //������src/css������index.css
});

gulp.task('default',['testLess']); //����Ĭ������

gulp.task('css', function () {
    gulp.src('minifytest/*.css')
	    .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

//gulp.task(name[, deps], fn) ��������  name���������� deps�������������� fn���ص�����
//gulp.src(globs[, options]) ִ����������ļ�  globs��������ļ�·��(�ַ��������ַ�������) 
//gulp.dest(path[, options]) ��������ļ�����·��