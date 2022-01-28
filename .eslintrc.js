module.exports = {
  root: true,
  extends: [
    '@storybook/eslint-config-storybook',
    'plugin:storybook/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['testing-library', 'jest-dom'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true, optionalDependencies: true, peerDependencies: true },
        ],
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
      },
    },
  ],
};
