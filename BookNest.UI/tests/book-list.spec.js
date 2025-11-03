"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Book list page should load', async ({ page }) => {
    await page.goto('/');
    await (0, test_1.expect)(page).toHaveTitle(/BookNest/i);
    await (0, test_1.expect)(page.getByText('Books')).toBeVisible();
});
(0, test_1.test)('Add a new book via API', async ({ request }) => {
    const newBook = {
        title: 'Playwright Mastery',
        author: 'Atharva Dhotre',
        price: 499
    };
    const response = await request.post('http://localhost:5000/api/books', { data: newBook });
    (0, test_1.expect)(response.ok()).toBeTruthy();
});
