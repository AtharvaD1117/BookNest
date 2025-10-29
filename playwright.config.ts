import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,            // each test timeout
  expect: { timeout: 5000 },     // default expect timeout
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    headless: true,
    baseURL: 'http://localhost:4200',
    actionTimeout: 10 * 1000,
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ]
});
