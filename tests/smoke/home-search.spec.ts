import { expect, test } from '@playwright/test';

import { openFirstAvailableProduct, searchForPliers } from '../support/app';

test('@smoke busca por texto retorna produtos coerentes', async ({ page }) => {
  await searchForPliers(page);

  const productNames = page.locator('[data-test="product-name"]');
  await expect(productNames.first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /Searched for: Pliers/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Combination Pliers' })).toBeVisible();

  const names = await productNames.allTextContents();
  expect(names.length).toBeGreaterThan(0);
  expect(names.some((name) => name.toLowerCase().includes('pliers'))).toBeTruthy();

  await page.screenshot({
    path: 'evidence/2026-04-14-rodada-smoke-web/01-home-busca.png',
    fullPage: true,
  });
});

test('@smoke detalhe de produto exibe informacoes principais', async ({ page }) => {
  const product = await openFirstAvailableProduct(page);

  await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(page.locator('[data-test="product-name"]')).toHaveText(product.name);
  await expect(page.getByLabel('category')).toBeVisible();
  await expect(page.getByText(product.price, { exact: true })).toBeVisible();

  await page.screenshot({
    path: 'evidence/2026-04-14-rodada-smoke-web/01b-detalhe-produto.png',
    fullPage: true,
  });
});
