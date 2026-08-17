module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  testMatch: ['**/tests/**/*.test.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
