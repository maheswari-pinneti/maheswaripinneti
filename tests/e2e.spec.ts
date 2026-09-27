import { test, expect } from '@playwright/test';

test('has title and renders hero section', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/maheswaripinneti|Vite/);

  // Expect the hero name to be visible
  await expect(page.locator('h1').first()).toHaveText('MAHESWARI PINNETTI');

  // Verify navigation links work
  await page.click('text=Engineering');
  await expect(page.locator('h1').first()).toHaveText('HOW I ENGINEER');
});

test('guestbook renders properly', async ({ page }) => {
  await page.goto('http://localhost:5173/guestbook');
  await expect(page.locator('h1')).toHaveText('GUESTBOOK');
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});
