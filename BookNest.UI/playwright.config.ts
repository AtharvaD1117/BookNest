import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'], // shows results in console
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // generates HTML report
  ],
  use: {
    baseURL: process.env.API_URL || 'http://localhost:5000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
