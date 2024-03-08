module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/no-unused-vars': 'error',
        'vue/no-unused-properties': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-refs': 'error'
    },
    "ignorePatterns": ["src/*.css"]
}