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
    "parserOptions": {
        "parser":  "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "ignorePatterns": ["src/*.css"]
}