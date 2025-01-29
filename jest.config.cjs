module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest', // Используйте @vue/vue2-jest для Vue 2
    },
    testEnvironment: 'jsdom', // Для тестирования в браузерной среде
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Поддержка алиасов, если они используются
        '^@/(.*)$': '<rootDir>/',
    },
    testMatch: ['**/tests/**/*.spec.js'], // Где искать тесты
};
