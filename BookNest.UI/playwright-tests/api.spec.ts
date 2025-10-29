import { test, expect, request } from '@playwright/test';

test('API should return list of books', async ({ request }) => {
  const response = await request.get('http://localhost:4200/api/books');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(Array.isArray(data)).toBeTruthy();
  expect(data[0]).toHaveProperty('title');
});
