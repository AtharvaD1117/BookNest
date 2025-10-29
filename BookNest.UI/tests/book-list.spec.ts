import { test, expect } from '@playwright/test';

test('Book list page should load', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Adjust if your UI runs on another port
  await expect(page).toHaveTitle(/BookNest/i);

  // Check for the Available Books heading
  await expect(page.getByRole('heading', { name: 'Available Books' })).toBeVisible();
});

test('Add a new book via API', async ({ request }) => {
  const newBook = { title: 'CI Book', author: 'CI', price: 99 };

  const response = await request.post('http://localhost:5000/api/books', {
    data: newBook,
  });

  expect(response.ok()).toBeTruthy();
});
