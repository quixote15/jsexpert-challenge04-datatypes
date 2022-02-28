/*
 * For a detailed explanation regarding each configuration property, visit:
 */

export default {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  // força um coverage para todos os arquivos
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],
  coverageThreshold: {
    global: {
      branch: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  maxWorkers: "50%",
  testEnvironment: "node",
  watchPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    chalk: "chalk/source/index.js",
    "#ansi-styles": "chalk/source/vendor/ansi-styles/index.js",
    "#supports-color": "chalk/source/vendor/supports-color/index.js",
  },
  transform: {},
};
