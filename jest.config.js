module.exports = {
  setupFiles: [
    '<rootDir>/config/jest/setup.js'
  ],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "^modules(.*)$": "<rootDir>/src/modules$1",
    "^MyLib(.*)$": "<rootDir>/src/MyLib$1",
    "^scr(.*)$": "<rootDir>/src$1"
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/assetsTransformer.js',
  }
}
