import { test, expect } from '@playwright/test';

test('should search for a book by title', async ({ page }) => {
  await page.goto('/books');

  await page.fill('input[placeholder="Search books"]', 'Harry Potter');
  await page.press('input[placeholder="Search books"]', 'Enter');

  await expect(page.getByText(/Harry Potter/i)).toBeVisible();
});

