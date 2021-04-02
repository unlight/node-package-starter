const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
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
        // This ensures any path aliases in tsconfig also work in jest
        ...pathsToModuleNameMapper(compilerOptions.paths || {}),
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
