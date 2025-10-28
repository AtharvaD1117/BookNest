import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should log in with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[type="submit"]');

    // Check if redirected to home/dashboard
    await expect(page).toHaveURL(/dashboard|home/);
    await expect(page.getByText('Welcome')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button[type="submit"]');

    await expect(page.getByText(/Invalid credentials/i)).toBeVisible();
  });
});
