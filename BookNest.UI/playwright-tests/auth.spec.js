"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('Authentication', () => {
    (0, test_1.test)('should log in with valid credentials', async ({ page }) => {
        await page.goto('/login');
        await page.fill('input[name="email"]', 'user@example.com');
        await page.fill('input[name="password"]', 'Password123');
        await page.click('button[type="submit"]');
        // Check if redirected to home/dashboard
        await (0, test_1.expect)(page).toHaveURL(/dashboard|home/);
        await (0, test_1.expect)(page.getByText('Welcome')).toBeVisible();
    });
    (0, test_1.test)('should show error for invalid credentials', async ({ page }) => {
        await page.goto('/login');
        await page.fill('input[name="email"]', 'wrong@example.com');
        await page.fill('input[name="password"]', 'wrongpass');
        await page.click('button[type="submit"]');
        await (0, test_1.expect)(page.getByText(/Invalid credentials/i)).toBeVisible();
    });
});
