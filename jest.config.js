const path = require('path');

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, './jest-config/setup-test-env.js')],
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(tsx?|jsx?)$': '<rootDir>/jest-config/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^fixtures(.*)$': '<rootDir>/__fixtures__$1',
    '^mocks(.*)$': '<rootDir>/__mocks__$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^utils(.*)$': '<rootDir>/utils$1',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/jest-config/loadershim.js'],
};
