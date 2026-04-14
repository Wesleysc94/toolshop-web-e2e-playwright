import { expect, Page } from '@playwright/test';

import { checkoutAddress, demoUser, invalidPassword, searchTerm } from './test-data';

type ProductSummary = {
  name: string;
  price: string;
};

export async function openHome(page: Page) {
  await page.goto('/');
  await expect(page).toHaveTitle(/Practice Software Testing/);
}

export async function login(page: Page) {
  await page.goto('/auth/login');
  await page.locator('[data-test="email"]').fill(demoUser.email);
  await page.locator('[data-test="password"]').fill(demoUser.password);
  await page.locator('[data-test="login-submit"]').click();

  await expect(page).toHaveURL(/\/account/);
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
}

export async function logout(page: Page) {
  await page.goto('/');
  await page.locator('[data-test="nav-menu"]').click();
  await expect(page.locator('[data-test="nav-sign-out"]')).toBeVisible();
  await page.locator('[data-test="nav-sign-out"]').click();
  await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
}

export async function tryInvalidLogin(page: Page) {
  await page.goto('/auth/login');
  await page.locator('[data-test="email"]').fill(demoUser.email);
  await page.locator('[data-test="password"]').fill(invalidPassword);
  await page.locator('[data-test="login-submit"]').click();
}

export async function searchForPliers(page: Page) {
  await openHome(page);
  await page.locator('[data-test="search-query"]').fill(searchTerm);
  await page.locator('[data-test="search-submit"]').click();
}

export async function openFirstAvailableProduct(page: Page): Promise<ProductSummary> {
  await openHome(page);

  const productCard = page
    .locator('a[data-test^="product-"]')
    .filter({
      has: page.locator('[data-test="product-name"]'),
      hasNot: page.locator('[data-test="out-of-stock"]'),
    })
    .first();

  await expect(productCard).toBeVisible();

  const name = (await productCard.locator('[data-test="product-name"]').textContent())?.trim() ?? '';
  const price = (await productCard.locator('[data-test="product-price"]').textContent())?.trim() ?? '';

  expect(name).not.toBe('');
  expect(price).not.toBe('');

  await productCard.click();
  await expect(page.locator('[data-test="product-name"]')).toHaveText(name);

  return { name, price };
}

export async function completeHappyPathCheckout(page: Page) {
  await login(page);
  const product = await openFirstAvailableProduct(page);
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1');

  await page.goto('/checkout', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-test="product-title"]')).toContainText(product.name);
  await expect(page.locator('[data-test="line-price"]')).toContainText(product.price);
  await expect(page.locator('[data-test="cart-total"]')).toContainText(product.price);

  await page.locator('[data-test="proceed-1"]').click();
  await page.locator('[data-test="proceed-2"]').click();

  const stateField = page.locator('[data-test="state"]');
  const streetField = page.locator('[data-test="street"]');
  const cityField = page.locator('[data-test="city"]');
  const countryField = page.locator('[data-test="country"]');
  const postalCodeField = page.locator('[data-test="postal_code"]');

  await streetField.fill(checkoutAddress.street);
  await cityField.fill(checkoutAddress.city);
  await stateField.fill(checkoutAddress.state);
  await countryField.fill(checkoutAddress.country);
  await postalCodeField.fill(checkoutAddress.postalCode);

  await expect(page.locator('[data-test="proceed-3"]')).toBeEnabled();
  await page.locator('[data-test="proceed-3"]').click();
  await page.locator('[data-test="payment-method"]').selectOption('Cash on Delivery');
  await page.locator('[data-test="finish"]').click();

  await expect(page.getByText('Payment was successful')).toBeVisible();
}
