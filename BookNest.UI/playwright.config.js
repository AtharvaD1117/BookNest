"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    timeout: 30000,
    use: {
        baseURL: process.env.FRONTEND_URL || 'http://localhost:3000',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...test_1.devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...test_1.devices['Desktop Firefox'] } },
    ],
});
