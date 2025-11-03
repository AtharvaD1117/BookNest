"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('Books Module', () => {
    (0, test_1.test)('should display the book list', async ({ page }) => {
        await page.goto('/books');
        await (0, test_1.expect)(page.getByText(/Books/i)).toBeVisible();
        // ✅ FIXED COUNT CHECK
        const books = page.locator('.book-card');
        const count = await books.count();
        (0, test_1.expect)(count).toBeGreaterThan(0);
    });
    (0, test_1.test)('should add a new book', async ({ page }) => {
        await page.goto('/books/add');
        await page.fill('input[name="title"]', 'The Playwright Guide');
        await page.fill('input[name="author"]', 'Atharva Dhotre');
        await page.fill('textarea[name="description"]', 'An advanced guide to Playwright testing.');
        await page.click('button[type="submit"]');
        // Verify book added
        await (0, test_1.expect)(page.getByText('The Playwright Guide')).toBeVisible();
    });
});
