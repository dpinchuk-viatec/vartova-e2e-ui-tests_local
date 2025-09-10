import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { CalendarPage } from "../../../pages/common/CalendarPage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { SelectCamerasPage } from "../../../pages/personApplication/SelectCamerasPage";
import { CardLinks } from "../../../constants/CardLinks";
import { SearchByPicturePage } from "../../../pages/menuManagementCards/SearchByPicturePage";
import { SelectTargetPage } from "../../../pages/personApplication/SelectTargetPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Body by Picture: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/869a6mv5q"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const searchByPicturePage: SearchByPicturePage = new SearchByPicturePage(page);
    const calendarPage: CalendarPage = new CalendarPage(page);
    const selectCamerasPage: SelectCamerasPage = new SelectCamerasPage(page);
    const selectTargetPage: SelectTargetPage = new SelectTargetPage(page);

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'Body By Picture' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.BodyByPicture);
    });

    await test.step("Check 'Select Cameras' module", async () => {
        await searchByPicturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToSelectedPanelByDoubleClick("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.clickOnCancelButton();

        await searchByPicturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.moveTreeNodeToLeftPanelByMovementButton("Select All");

        await selectCamerasPage.verifySelectedListContainsData(false);

        await selectCamerasPage.clickOnCancelButton();

        await searchByPicturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.clickOnClearButton();

        await selectCamerasPage.verifySelectedListContainsData(false);

        await selectCamerasPage.clickOnCancelButton();
    });

    await test.step("Check 'Calendar' module", async () => {
        await searchByPicturePage.clickOnTimeInterval();

        // The first way to select dates
        await calendarPage.selectLastTimePeriodViaCalendarDays("9 days");

        await searchByPicturePage.clickOnResetButton();

        await searchByPicturePage.clickOnTimeInterval();

        // The second way to select dates
        await calendarPage.selectLastMonthTimePeriodViaShortcutItem("Month");

        await searchByPicturePage.clickOnResetButton();

        await searchByPicturePage.clickOnTimeInterval();

        // The third way to select dates
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
    });

    await test.step("Select time interval: last month", async () => {
        await page.reload();
        await page.waitForTimeout(1000);
        await searchByPicturePage.clickOnTimeInterval();
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
        await page.waitForTimeout(1000);
    });

    await test.step("Upload some image with bodies", async () => {
        await searchByPicturePage.uploadImage(searchByPicturePage.selectPictureButton, "bodies.jpg");
    });

    await test.step("Verify uploaded image with bodies", async () => {
        await selectTargetPage.verifyModalWindowIsOpened(true);
        await selectTargetPage.verifyUploadedImage(true, 2);
    });

    await test.step("Click on [Cancel] button", async () => {
        await selectTargetPage.clickOnModalWindowCancelButton();

        await selectTargetPage.verifyModalWindowIsOpened(false);
    });

    await test.step("Upload some image without faces", async () => {
        await searchByPicturePage.uploadImage(searchByPicturePage.selectPictureButton, "image_without_faces.png");
    });

    await test.step("Verify uploaded image without faces", async () => {
        await selectTargetPage.verifyModalWindowIsOpened(true);
        await selectTargetPage.verifyUploadedImage(false, 0);
    });
});