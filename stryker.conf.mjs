// Take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'npm',
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  concurrency: 2,
  mutate: ['src/**/*.ts', '!src/**/*.spec.ts'],
  // reporters: ['clear-text', 'progress', 'dashboard', 'html'],
  reporters: ['clear-text', 'dots'],
  tsconfigFile: 'tsconfig.json',
  plugins: ['@stryker-mutator/vitest-runner'],
};
