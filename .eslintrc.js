const tslintRulesRecommended = require('tslint/lib/configs/recommended').rules;
const tslintRules = Object.assign({}, tslintRulesRecommended, {
    "member-access": false,
    "ordered-imports": false,
    "quotemark": false,
    "no-var-keyword": false,
    "object-literal-sort-keys": false,
    "no-console": false,
    "arrow-parens": false,
    "max-line-length": false,
});

module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:unicorn/recommended",
    ],
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "unicorn",
        "typescript",
        "import",
        "tslint",
    ],
    "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "indent": 0,
        "unicorn/import-index": 0,
        "tslint/config": [1, {
            rules: tslintRules,
            rulesDirectory: ["node_modules/tslint/lib/rules"],
        }],
        "import/newline-after-import": 1,
        "import/no-duplicates": 1,
        "import/max-dependencies": [1, { "max": 10 }],
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "semi": [1, "always"],
    }
};
