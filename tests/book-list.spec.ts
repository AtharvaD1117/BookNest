import { test, expect } from '@playwright/test';

test('Book list page should load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/BookNest/i);
  await expect(page.getByText('Books')).toBeVisible();
});

test('Add a new book via API', async ({ request }) => {
  const newBook = {
    title: 'Playwright Mastery',
    author: 'Atharva Dhotre',
    price: 499
  };

  const response = await request.post('http://localhost:5000/api/books', { data: newBook });
  expect(response.ok()).toBeTruthy();
});
