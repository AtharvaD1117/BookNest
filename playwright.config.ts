import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4200',  // ✅ Angular UI port
    headless: true,
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
