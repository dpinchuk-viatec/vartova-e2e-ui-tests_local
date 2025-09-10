import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { superAdminUser } from '../data/user';
import type { Page } from '@playwright/test';

export const test = base.extend<{
    loggedInPage: Page;
}>({
    loggedInPage: async ({ page }, use) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle')

        const loginPage: LoginPage = new LoginPage(page);

        await loginPage.fillUsernameField(superAdminUser.username);
        await loginPage.fillPasswordField(superAdminUser.password);
        await loginPage.selectRememberMeCheckbox();
        await loginPage.clickOnSubmitButton();
        await page.waitForTimeout(1000);

        await use(page);
    },
});