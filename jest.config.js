module.exports = {
  preset: "@lwc/jest-preset",
  moduleNameMapper: {
    "^(x)/(.+)$": "<rootDir>/src/modules/$1/$2/$2",
  },
  testEnvironment: "jsdom",
};
