import { test, expect } from '@playwright/test';

test.describe('BookNest UI Tests', () => {

  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/BookNest/i);
    await expect(page.locator('h1')).toBeVisible();

    const navItems = page.locator('nav a');
    const count = await navItems.count();
    expect(count).toBeGreaterThan(0);  // ✅ Correct Playwright + Jest syntax
  });

});
