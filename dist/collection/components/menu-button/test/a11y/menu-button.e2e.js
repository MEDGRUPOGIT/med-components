/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import AxeBuilder from "@axe-core/playwright";
import { expect } from "@playwright/test";
import { configs, test } from "../../../../utils/test/playwright";
configs({ directions: ['ltr'] }).forEach(({ title, screenshot, config }) => {
    test.describe(title('menu-button: a11y'), () => {
        test('should not have accessibility violations', async ({ page }) => {
            await page.goto('/src/components/menu-button/test/a11y', config);
            const results = await new AxeBuilder({ page }).analyze();
            expect(results.violations).toEqual([]);
        });
    });
    test.describe(title('menu-button: font scaling'), () => {
        test('should scale text on larger font sizes', async ({ page }) => {
            await page.setContent(`
        <style>
          html {
            font-size: 310%;
          }
        </style>

        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button auto-hide="false"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      `, config);
            const menuButton = page.locator('ion-menu-button');
            await expect(menuButton).toHaveScreenshot(screenshot(`menu-button-scale`));
        });
    });
});