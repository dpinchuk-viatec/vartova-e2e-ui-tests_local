import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { CardLinks } from "../../../constants/CardLinks";
import { ResourceSearchPage } from "../../../pages/videoApplication/ResourceSearchPage";
import { NodeWindowPage } from "../../../pages/videoApplication/NodeWindowPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("E-Map: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/8699a348d"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const resourceSearchPage: ResourceSearchPage = new ResourceSearchPage(page);
    const nodeWindowPage: NodeWindowPage = new NodeWindowPage(page);

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'E-Map' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.EMap);
    });

    await test.step("Verify E-Map page", async () => {
        await resourceSearchPage.verifyEMapPage();
    });

    await test.step("Click on [PTZ] button", async () => {
        await resourceSearchPage.clickOnMainRootButton();
        await resourceSearchPage.clickOnGeneralCamerasNodeButton();
        await resourceSearchPage.clickOnPtzNodeButton();
    });

    await test.step("Verify 'PTZ' window", async () => {
        await nodeWindowPage.verifyNodeWindow("PTZ");
        await nodeWindowPage.verifyPtzBasicInformationTab();

        await nodeWindowPage.clickOnFieldOfViewListItem();

        await nodeWindowPage.verifyPtzFieldOfViewTab();

        await nodeWindowPage.clickOnCapabilitiesListItem();

        await nodeWindowPage.verifyPtzCapabilitiesTab();

        await nodeWindowPage.clickOnCloseWindowButton();
    });

    await test.step("Click on [Robot - Ch 01] window", async () => {
        await nodeWindowPage.clickOnRobotButton();
        await nodeWindowPage.clickOnRobotCh01Button();
    });

    await test.step("Verify 'Robot - Ch 01' window", async () => {
        await nodeWindowPage.verifyNodeWindow("Robot - Ch 01", false);
        await nodeWindowPage.verifyRobotCh01BasicInformationTab();

        await nodeWindowPage.clickOnFieldOfViewListItem();

        await nodeWindowPage.verifyRobotCh01FieldOfViewTab();

        await nodeWindowPage.clickOnCapabilitiesListItem();

        await nodeWindowPage.verifyRobotCh01CapabilitiesTab()
    });
});