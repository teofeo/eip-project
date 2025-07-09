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
    '!src/**/*.d.ts',          // Exclut les fichiers de déclaration de type
    '!src/**/node_modules/**', // Exclut les node_modules dans le dossier src
    '!src/.next/**',           // Exclut le dossier .next (si présent dans src)
    '!src/coverage/**',        // Exclut le dossier coverage
    '!src/*/public/**',        // Exclut les fichiers publics
    '!src/*/*.config.{js,ts}', // Exclut les fichiers de configuration
    '!src/*/dist/**',          // Exclut le dossier dist
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
