import { test, expect } from '@playwright/test';

test.describe('Books Module', () => {
  test('should display the book list', async ({ page }) => {
    await page.goto('http://localhost:4200');

    await expect(page.getByText(/Books/i)).toBeVisible();

    const books = page.locator('.book-card');
    const count = await books.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should add a new book', async ({ page }) => {
    await page.goto('http://localhost:4200');

    await page.fill('input[name="title"]', 'The Playwright Guide');
    await page.fill('input[name="author"]', 'Atharva Dhotre');
    await page.fill('textarea[name="description"]', 'An advanced guide to Playwright testing.');
    await page.click('button[type="submit"]');

    // Verify book added
    await expect(page.getByText('The Playwright Guide')).toBeVisible();
  });
});
