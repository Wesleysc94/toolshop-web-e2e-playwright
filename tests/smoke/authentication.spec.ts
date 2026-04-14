import { expect, test } from '@playwright/test';

import { login, logout, tryInvalidLogin } from '../support/app';

test('@smoke login e logout funcionam com a conta demo', async ({ page }) => {
  await login(page);
  await page.screenshot({
    path: 'evidence/2026-04-14-rodada-smoke-web/02-login-sucesso.png',
    fullPage: true,
  });

  await logout(page);
  await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();
});

test('@negative login invalido exibe mensagem de erro', async ({ page }) => {
  await tryInvalidLogin(page);

  await expect(page.getByText('Invalid email or password')).toBeVisible();

  await page.screenshot({
    path: 'evidence/2026-04-14-rodada-smoke-web/03-login-invalido.png',
    fullPage: true,
  });
});

