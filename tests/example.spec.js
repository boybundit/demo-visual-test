const { test, expect } = require('@playwright/test');

test('visual test', async ({ page }) => {
  await page.setViewportSize({ width: 1512, height: 982 });
  await page.goto('https://bundit.net');
  await expect(page).toHaveScreenshot('landing.png');
});
