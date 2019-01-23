/* eslint-disable */
/// <reference path="node_modules/typescript/lib/lib.esnext.d.ts" />
import * as gulp from 'gulp';
import { resolve } from 'path';
const g = require('gulp-load-plugins')();
const { sh } = require('sh-thunk');

gulp.task('remark', function() {
    return gulp.src('README.md')
        .pipe(
            g.remark()
                .use(require('remark-toc'))
                .use(require('remark-license'))
        );
});

gulp.task('build_node', sh`
    PATH="$PWD"/node_modules/.bin:$PATH
    pushd dist
    mkdir -p cjs
    cp -r -v fesm2015/* cjs
    tsc $(ls fesm2015/*.js) --allowJs true --outDir cjs --target esnext --module commonjs --removeComments false --sourceMap false --inlineSources false --isolatedModules true
    file=$(ls cjs/*.js)
    sed -i '1,2d' $file
    mainLine=$(cat package.json | grep -n main | cut -d: -f1)
    sed -i $mainLine's|.*|'"$(echo \\"main\\": \\"$file\\",)"'|' package.json
    popd
`);

gulp.task('remark:fix', function(done) {
    const doclint: any = gulp.task('doclint');
    return doclint().pipe(gulp.dest('.'));
});

gulp.task('eslint', () => {
    const specRules = {
        'no-unused-vars': 0,
        'no-underscore-dangle': 0,
        'max-nested-callbacks': 0,
        'function-paren-newline': 0,
        'jasmine/no-spec-dupes': 0,
        'lodash/import-scope': 0,
        'prefer-const': 0,
        'prefer-destructuring': 0,
        'import/no-duplicates': 0,
        'import/max-dependencies': 0,
        'tslint/config': 0,
    };
    return gulp.src('src/**/*.ts', { since: g.memoryCache.lastMtime('source') })
        .pipe(g.memoryCache('source'))
        .pipe(g.ignore.exclude('*.d.ts'))
        .pipe(g.if('*.spec.ts', g.eslint({ rules: specRules }), g.eslint()))
        .pipe(g.eslint.format());
});

gulp.task('eslint:w', (done) => {
    const w = gulp.watch('src/**/*.ts', { ignoreInitial: false }, gulp.series('eslint'));
    w.on('change', g.memoryCache.update('source'));
    w.on('unlink', file => g.memoryCache.forget('source', file, file => resolve(file)));
    process.on('SIGINT', () => {
        w.close();
        done();
    });
});
