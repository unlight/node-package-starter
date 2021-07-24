const getJestMappersFromTSConfig = require('tsconfig-paths-jest-mapper');

module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'esbuild-jest',
            {
                // jsxFactory?: string
                // jsxFragment?: string
                // sourcemap?: boolean | 'inline' | 'external'
                // loaders?: {
                //   [ext: string]: Loader
                // },
                target: 'es2020',
                // format?: string
            },
        ],
    },
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageReporters: [
        // "lcov",
        'text',
    ],
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    modulePathIgnorePatterns: ['<rootDir>/dist'],
    moduleNameMapper: {
        ...getJestMappersFromTSConfig(),
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true,
            tsconfig: {
                target: 'es2020',
            },
        },
    },
};
