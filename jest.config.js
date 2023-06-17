/** @type {import('jest').Config} */
const config = {
    verbose: true,
    setupFiles: ['<rootDir>/src/setupTests.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
};

module.exports = config;