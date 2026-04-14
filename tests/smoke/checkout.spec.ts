import { test } from '@playwright/test';

import { completeHappyPathCheckout } from '../support/app';

test('@smoke checkout feliz pode ser concluido', async ({ page }) => {
  await completeHappyPathCheckout(page);

  await page.screenshot({
    path: 'evidence/2026-04-14-rodada-smoke-web/04-checkout-sucesso.png',
    fullPage: true,
  });
});

