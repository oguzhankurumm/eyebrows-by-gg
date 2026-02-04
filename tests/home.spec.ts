import { test, expect } from '@playwright/test';

test('Home page loads and displays core sections', async ({ page }) => {
    await page.goto('/');

    // Check Title
    await expect(page).toHaveTitle(/Eyebrows by GG/);

    // Check Hero
    await expect(page.locator('h1')).toContainText('Elevating Beauty');

    // Check Services Section
    await expect(page.getByText('Our Signature Services')).toBeVisible();

    // Check Navbar Navigation
    await expect(page.getByRole('navigation')).toBeVisible();

    // Check Contact Info in Footer
    await expect(page.getByText('info@eyebrowsbygg.com')).toBeVisible();
});

test('Navigation works', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    await expect(page.locator('h1')).toContainText('Signature Treatments');
});
