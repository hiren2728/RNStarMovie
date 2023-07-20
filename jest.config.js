module.exports = {
  verbose: true,
  preset: 'react-native',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'jest-transform-stub',
  },
  // This for Load Mock function for specific third party packages
  setupFiles: [
      "<rootDir>/__mock__/setup.js"
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)'
  ],
};
