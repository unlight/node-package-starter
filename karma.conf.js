const path = require('path');
const webpackConfig =  require('./webpack.config');

module.exports = (config) => {

    const files = [
        { pattern: 'src/index.spec.ts' },
    ];
    const webpackOptions = { hmr: false, test: true, coverage: false };
    const buildPath = path.join(__dirname, 'dist');

    config.set({
        preprocessors: {
            '**/index.spec.ts': ['webpack', 'sourcemap'],
            '**/index.ts': ['coverage'],
        },
        browsers: ['ChromeCustom'],
        customLaunchers: {
            ChromeCustom: {
                base: 'ChromeHeadless',
                // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
                // more permissions than Docker allows by default)
                flags: ['--no-sandbox'],
            }
        },
        frameworks: [
            'jasmine',
        ],
        reporters: ['progress'],
        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },
        port: 9876,
    });

    if (process.argv.indexOf('--coverage') !== -1) {
        const testResultsOutput = `${__dirname}/~testresults`;
        webpackOptions.coverage = true;
        config.set({
            reporters: ['coverage', 'remap-coverage'],
            coverageReporter: {
                type: 'in-memory'
            },
            remapCoverageReporter: {
                text: null,
                // html: `${testResultsOutput}/coverage`
            },
        });
    } else {
        files.unshift({ pattern: path.join(buildPath, 'libs.js'), watched: false });
    }

    const webpackConfiguration = webpackConfig(webpackOptions);

    config.set({
        files: files,
        webpack: webpackConfiguration,
        webpackMiddleware: {
            stats: webpackConfiguration.stats,
        },
    });

};
