module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ['eslint:recommended', "plugin:react/recommended"],
  "plugins": ['react'],
  "rules": {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs,jsx}",

      ],
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": ['**/*.jsx', '**/**/*.jsx', '**/**/**/*.jsx', '**/**/**/*.jsx'],
      "parserOptions": {
        "sourceType": "module",
      },
    },
    {
      "env": {
        "node": true
      },
      "files": [
        "**/*.js",
        "*.js",
        "*/*.js"
      ],
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": [
        "**/*.json"
      ],
      "parserOptions": {
        "sourceType": "module"
      }
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [
    "node_modules/",
    "build/",
    "*.json"
  ],
  "globals": {
    "process": "readonly"
  }
};
