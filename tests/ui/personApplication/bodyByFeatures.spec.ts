import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { CalendarPage } from "../../../pages/common/CalendarPage";
import { SearchByFeaturePage } from "../../../pages/menuManagementCards/SearchByFeaturePage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { BodyByFeatureFilter } from "../../../constants/DataTypes";
import { SelectCamerasPage } from "../../../pages/personApplication/SelectCamerasPage";
import { CardLinks } from "../../../constants/CardLinks";
import { SearchResultLeftPanelPage } from "../../../pages/searchResults/SearchResultLeftPanelPage";
import { CardItemPage } from "../../../pages/searchResults/CardItemPage";
import { TableItemPage } from "../../../pages/personApplication/TableItemPage";
import { SearchResultRightPanelPage } from "../../../pages/searchResults/SearchResultRightPanelPage";
import { FilterPage } from "../../../pages/filters/FilterPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Body by Features: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/869a6muxr"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const searchByFeaturePage: SearchByFeaturePage = new SearchByFeaturePage(page);
    const calendarPage: CalendarPage = new CalendarPage(page);
    const selectCamerasPage: SelectCamerasPage = new SelectCamerasPage(page);
    const searchResultLeftPanelPage: SearchResultLeftPanelPage = new SearchResultLeftPanelPage(page);
    const searchResultRightPanelPage: SearchResultRightPanelPage = new SearchResultRightPanelPage(page);
    const cardItemPage: CardItemPage = new CardItemPage(page);
    const tableItemPage: TableItemPage = new TableItemPage(page);
    const filterPage: FilterPage = new FilterPage(page);

    let filter: BodyByFeatureFilter;
    let extFilter: BodyByFeatureFilter;
    let actualFilterData: BodyByFeatureFilter;
    let imageUrlLeftCardMode: string | null;
    let imageUrlRightDetails: string | null;
    let imageUrlRightFullScreen: string | null;

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'Body By Features' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.BodyByFeatures);
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
            Glasses: "No",
            Hairstyle: "Unknown",
            AgeGroup: "Middle",
            JacketType: "Unknown",
            Bag: "No",
            TrousersType: "All",
            ColorOfJacket: "All",
            ColorOfTrousers: "White, Silver",
        }

        await searchByFeaturePage.clickOnShowMoreButton();
        await filterPage.selectMultipleFilters(filter);

        await searchByFeaturePage.clickOnResetButton();
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
            Glasses: "All",
            Hairstyle: "All",
            AgeGroup: "All",
            JacketType: "All",
            Bag: "All",
            TrousersType: "All",
            ColorOfJacket: "All",
            ColorOfTrousers: "All",
        }

        await searchByFeaturePage.clickOnShowMoreButton();
        await filterPage.selectMultipleFilters(filter);

        await searchByFeaturePage.clickOnQueryButton();
        await page.waitForTimeout(1000);
    });

    await test.step("Verify 'Left' panel: check 'Card mode' by default", async () => {
        await searchResultLeftPanelPage.verifyCardModeElementsOnTableView();
        await cardItemPage.verifyCardModeFirstCardItem();

        extFilter = {
            ...filter,
            CollectLocation: String(await cardItemPage.getFirstCardCollectLocationText()),
            CollectTime: String(await cardItemPage.getFirstCardBodyCollectTimeText()),
        }

        imageUrlLeftCardMode = await searchResultLeftPanelPage.getImageUrl(false);
    });

    await test.step("Verify 'Left' panel: change 'Table mode' and verify", async () => {
        await searchResultLeftPanelPage.clickOnListButton();
        await page.waitForTimeout(1000);

        await tableItemPage.verifyBodyByFeatureFirstTableModeItem(extFilter);

        actualFilterData = await tableItemPage.getBodyByFeatureFilterData();
    });

    await test.step("Verify 'Right' panel: check 'Details' view", async () => {
        await searchResultRightPanelPage.verifyBodyByFeatureDetailsPanelContent(actualFilterData);

        imageUrlRightDetails = await searchResultRightPanelPage.getImageUrl();
    });

    await test.step("Verify 'Right' panel: check 'Geographic Location' view", async () => {
        await searchResultRightPanelPage.clickOnGeographicLocationButton();
        await searchResultRightPanelPage.verifyGeographicLocationPanelContent();
    });

    await test.step("Click on 'Full Screen' button", async () => {
        await searchResultRightPanelPage.clickOnFullScreenButton();

        imageUrlRightFullScreen = await searchResultLeftPanelPage.getFullScreenImageUrl(false);

        expect(imageUrlRightDetails).toBe(imageUrlRightFullScreen);
        expect(imageUrlLeftCardMode).toBe(imageUrlRightDetails);

        await searchResultLeftPanelPage.verifyBodiesOnImage();
    });
});