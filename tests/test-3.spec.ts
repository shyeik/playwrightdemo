import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.everfirstloans.com/');
  await page.locator('#menu-item-9354').getByRole('link', { name: 'About Us' }).dblclick();
  await expect(page.getByText('EverFirst Company Profile')).toBeVisible();
  await page.getByRole('link', { name: 'Apply Loan' }).click();
  await page.locator('#map').contentFrame().locator('.gm-style > div > div:nth-child(2)').first().click();
  await expect(page.getByRole('heading', { name: 'Inquire for a Loan' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Inquire for a Loan' })).toBeVisible();
  
});