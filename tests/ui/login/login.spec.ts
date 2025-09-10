import { test } from "../../../fixtures/login.fixture";
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { HeaderPage } from "../../../pages/common/HeaderPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Checking successful user login", async ({ page }) => {
    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);

    await test.step("Open the Log Page", async () => {
        await homePage.verifyHomePageIsOpened();
        await headerPage.verifyHeaderElements();
    });
});