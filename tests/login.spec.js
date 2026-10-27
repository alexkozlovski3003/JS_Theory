// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Авторизация на Sauce Demo', () => {
  test('User can login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('User can login unsuccessfully', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });
});
