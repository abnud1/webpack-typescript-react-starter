module.exports = {
    extends: [
        'airbnb-typescript',
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/prettier",
        "prettier/react",
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
};