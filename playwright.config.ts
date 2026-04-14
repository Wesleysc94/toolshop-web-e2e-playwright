import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    viewport: { width: 1400, height: 900 },
    trace: 'off',
    screenshot: 'off',
    video: 'off',
    headless: true,
  },
});
