module.exports = function (config) {
  config.set({
    maxConcurrentTestRunners: 1,
    mutate: [
      'src/**/*.tsx',
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      '!src/**/*.spec.tsx',
      '!src/examples/**/*.*',
    ],
    files: [
      'jest.config.js',
      'src/**/*.tsx',
      'src/**/*.ts',
      'src/**/*.json',
      'package.json',
    ],
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: [
      'clear-text',
      'progress',
      'dashboard',
      // "html",
    ],
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
  });
};
