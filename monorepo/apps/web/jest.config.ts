import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true, // Active la collecte de couverture
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Inclut tous les fichiers dans le dossier src
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/types/**',
    '!src/app/**/layout.tsx', // Layout généraux rarement utiles à couvrir
    '!src/app/**/page.tsx',   // Pages peuvent être testées e2e
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

export default createJestConfig(config)
