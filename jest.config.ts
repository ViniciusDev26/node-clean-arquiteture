export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: 'ts-jest'
}
