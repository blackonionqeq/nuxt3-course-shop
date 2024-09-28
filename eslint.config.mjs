// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  javascript: {
    overrides: {
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
  typescript: {
    parserOptions: {
      ecmaVersion: 2022,
    },
  },
})
