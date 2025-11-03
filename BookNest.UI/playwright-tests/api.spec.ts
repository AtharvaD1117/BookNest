import { test, expect } from '@playwright/test';

const API_BASE = 'http://localhost:5000'; // ✅ replace with your real backend port

test('API should return list of books', async ({ request }) => {
  const response = await request.get(`${API_BASE}/api/books`);
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log('Books:', data);
  expect(Array.isArray(data)).toBeTruthy();
  expect(data[0]).toHaveProperty('title');
});
