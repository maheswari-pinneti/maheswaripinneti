import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
  test('homepage has expected structure and renders hero', async ({ page }) => {
    await page.goto('/');

    // Check title/brand in nav
    const brand = page.locator('nav').getByText('Maheswari.');
    await expect(brand).toBeVisible();

    // Check hero heading
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toHaveText(/Maheswari Pinneti/);
  });

  test('navigation to about page works', async ({ page }) => {
    await page.goto('/');

    // Click on About link
    await page.getByRole('link', { name: 'About' }).click();

    // Verify URL
    await expect(page).toHaveURL(/.*\/about/);

    // Verify About page content
    const heading = page.getByRole('heading', { name: 'About.' });
    await expect(heading).toBeVisible();
  });

  test('contact form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Find the submit button
    const submitBtn = page.getByRole('button', { name: /Send Message/i });
    await expect(submitBtn).toBeVisible();

    // Try submitting without data - HTML5 validation should block it
    // Playwright handles this implicitly, but we can verify it doesn't show success
    await submitBtn.click();
    
    // Success message should not be visible
    const successMsg = page.getByText(/Message Received/i);
    await expect(successMsg).not.toBeVisible();
  });

  test('projects grid renders in work page', async ({ page }) => {
    await page.goto('/work');
    
    // We expect multiple project cards (links) inside the grid
    const projectCards = page.locator('a[href^="/work/"]');
    expect(await projectCards.count()).toBeGreaterThan(0);
  });
});
