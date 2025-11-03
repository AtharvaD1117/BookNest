"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('should search for a book by title', async ({ page }) => {
    await page.goto('/books');
    await page.fill('input[placeholder="Search books"]', 'Harry Potter');
    await page.press('input[placeholder="Search books"]', 'Enter');
    await (0, test_1.expect)(page.getByText(/Harry Potter/i)).toBeVisible();
});
