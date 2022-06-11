// Take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  commandRunner: {
    command: 'node -r ts-node/register node_modules/mocha/bin/mocha src/**/*.spec.ts',
  },
  coverageAnalysis: 'perTest',
  maxConcurrentTestRunners: 1,
  concurrency: 1,
  mutate: [
    'src/**/*.tsx',
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.spec.tsx',
    '!src/examples/**/*.*',
  ],
  // files: [
  //   'jest.config.js',
  //   'src/**/*.tsx',
  //   'src/**/*.ts',
  //   'src/**/*.json',
  //   'package.json',
  // ],
  reporters: ['clear-text', 'progress', 'dashboard', 'html'],
  tsconfigFile: 'tsconfig.json',
};
export default config;
