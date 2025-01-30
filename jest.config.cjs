module.exports = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Поддержка алиасов, если они используются
        '^@/(.*)$': '<rootDir>/',
    },
};
