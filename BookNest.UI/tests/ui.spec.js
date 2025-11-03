"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('BookNest UI Tests', () => {
    (0, test_1.test)('should load the homepage successfully', async ({ page }) => {
        await page.goto('/');
        await (0, test_1.expect)(page).toHaveTitle(/BookNest/i);
        await (0, test_1.expect)(page.locator('h1')).toBeVisible();
        const navItems = page.locator('nav a');
        const count = await navItems.count();
        (0, test_1.expect)(count).toBeGreaterThan(0); // ✅ Correct Playwright + Jest syntax
    });
});
