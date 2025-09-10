import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { CalendarPage } from "../../../pages/common/CalendarPage";
import { SearchByFeaturePage } from "../../../pages/menuManagementCards/SearchByFeaturePage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { FeatureFilterPage } from "../../../pages/filters/FeatureFilterPage";
import { FaceByFeatureFilter } from "../../../constants/DataTypes";
import { SelectCamerasPage } from "../../../pages/personApplication/SelectCamerasPage";
import { CardLinks } from "../../../constants/CardLinks";
import { SearchResultLeftPanelPage } from "../../../pages/searchResults/SearchResultLeftPanelPage";
import { CardItemPage } from "../../../pages/searchResults/CardItemPage";
import { TableItemPage } from "../../../pages/personApplication/TableItemPage";
import { SearchResultRightPanelPage } from "../../../pages/searchResults/SearchResultRightPanelPage";
import { FaceBodyPictureDetailsPage } from "../../../pages/personApplication/FaceBodyPictureDetailsPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Search by Features: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/8699a4jba"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const searchByFeaturePage: SearchByFeaturePage = new SearchByFeaturePage(page);
    const calendarPage: CalendarPage = new CalendarPage(page);
    const featureFilterPage: FeatureFilterPage = new FeatureFilterPage(page);
    const selectCamerasPage: SelectCamerasPage = new SelectCamerasPage(page);
    const searchResultLeftPanelPage: SearchResultLeftPanelPage = new SearchResultLeftPanelPage(page);
    const searchResultRightPanelPage: SearchResultRightPanelPage = new SearchResultRightPanelPage(page);
    const cardItemPage: CardItemPage = new CardItemPage(page);
    const tableItemPage: TableItemPage = new TableItemPage(page);
    const facePictureDetailsPage: FaceBodyPictureDetailsPage = new FaceBodyPictureDetailsPage(page);

    let filter: FaceByFeatureFilter;
    let extData: FaceByFeatureFilter;
    let imageUrl: string | null;

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'Search By Features' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.SearchByFeatures);
    });

    await test.step("Check 'Select Cameras' module", async () => {
        await searchByFeaturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToSelectedPanelByDoubleClick("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.clickOnCancelButton();

        await searchByFeaturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.moveTreeNodeToLeftPanelByMovementButton("Select All");

        await selectCamerasPage.verifySelectedListContainsData(false);

        await selectCamerasPage.clickOnCancelButton();

        await searchByFeaturePage.clickOnSelectSearchArea();

        await selectCamerasPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await selectCamerasPage.verifySelectedListContainsData(true);

        await selectCamerasPage.clickOnClearButton();

        await selectCamerasPage.verifySelectedListContainsData(false);

        await selectCamerasPage.clickOnCancelButton();
    });

    await test.step("Check 'Calendar' module", async () => {
        await searchByFeaturePage.clickOnTimeInterval();

        // The first way to select dates
        await calendarPage.selectLastTimePeriodViaCalendarDays("9 days");

        await searchByFeaturePage.clickOnResetButton();

        await searchByFeaturePage.clickOnTimeInterval();

        // The second way to select dates
        await calendarPage.selectLastMonthTimePeriodViaShortcutItem("Month");

        await searchByFeaturePage.clickOnResetButton();

        await searchByFeaturePage.clickOnTimeInterval();

        // The third way to select dates
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
    });

    await test.step("Check 'Reset' button", async () => {
        await searchByFeaturePage.clickOnTimeInterval();

        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");

        filter = {
            age: "Child",
            gender: "Male",
            glasses: "All",
            smile: "Yes",
            mask: "No",
        }

        await searchByFeaturePage.clickOnShowMoreButton();
        await featureFilterPage.selectFilters(filter);

        await featureFilterPage.verifySelectedFilters(filter);

        await searchByFeaturePage.clickOnResetButton();

        const resetData: FaceByFeatureFilter = {
            age: "All",
            gender: "All",
            glasses: "All",
            smile: "All",
            mask: "All",
        }

        await featureFilterPage.verifySelectedFilters(resetData);
    });

    await test.step("Select time interval: last month", async () => {
        await page.reload();
        await page.waitForTimeout(1000);
        await searchByFeaturePage.clickOnTimeInterval();
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
        await page.waitForTimeout(1000);
    });

    await test.step("Press 'Show More Conditions' and select filter", async () => {
        filter = {
            age: "Middle",
            gender: "Male",
            glasses: "No",
            smile: "No",
            mask: "No",
        }

        await searchByFeaturePage.clickOnShowMoreButton();
        await featureFilterPage.selectFilters(filter);

        await searchByFeaturePage.clickOnQueryButton();
        await page.waitForTimeout(1000);
    });

    await test.step("Verify 'Left' panel: check 'Card mode' by default", async () => {
        await searchResultLeftPanelPage.verifyCardModeElementsOnTableView();
        await cardItemPage.verifyCardModeFirstCardItem();

        extData = {
            ...filter,
            collectLocation: await cardItemPage.getFirstCardCollectLocationText(),
            collectTime: await cardItemPage.getFirstCardBodyCollectTimeText(),
        }
    });

    await test.step("Verify 'Left' panel: change 'Table mode' and verify", async () => {
        await searchResultLeftPanelPage.clickOnListButton();
        await page.waitForTimeout(1000);

        await tableItemPage.verifyFaceByFeatureFirstTableModeItem(filter);
    });

    await test.step("Verify 'Right' panel: check 'Details' view", async () => {
        await searchResultRightPanelPage.verifyFaceByFeatureDetailsPanelContent(extData);

        imageUrl = await searchResultRightPanelPage.getImageUrl();
    });

    await test.step("Verify 'Right' panel: check 'Geographic Location' view", async () => {
        await searchResultRightPanelPage.clickOnGeographicLocationButton();
        await searchResultRightPanelPage.verifyGeographicLocationPanelContent();
    });

    await test.step("Click on 'Full Screen' button", async () => {
        await searchResultRightPanelPage.clickOnFullScreenButton();
        await facePictureDetailsPage.verifyFacePictureDetailsContent(imageUrl);
    });
});