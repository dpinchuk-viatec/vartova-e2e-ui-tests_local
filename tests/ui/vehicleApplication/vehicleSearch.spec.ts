import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { CalendarPage } from "../../../pages/common/CalendarPage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { VehicleFilter } from "../../../constants/DataTypes";
import { CardLinks } from "../../../constants/CardLinks";
import { SearchResultLeftPanelPage } from "../../../pages/searchResults/SearchResultLeftPanelPage";
import { CardItemPage } from "../../../pages/searchResults/CardItemPage";
import { TableItemPage } from "../../../pages/personApplication/TableItemPage";
import { SearchResultRightPanelPage } from "../../../pages/searchResults/SearchResultRightPanelPage";
import { VehicleSearchPage } from "../../../pages/menuManagementCards/VehicleSearchPage";
import { VehicleFilterPage } from "../../../pages/filters/VehicleFilterPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Vehicle Search: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/8699a4jpz"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const vehicleSearchPage: VehicleSearchPage = new VehicleSearchPage(page);
    const calendarPage: CalendarPage = new CalendarPage(page);
    const searchResultLeftPanelPage: SearchResultLeftPanelPage = new SearchResultLeftPanelPage(page);
    const searchResultRightPanelPage: SearchResultRightPanelPage = new SearchResultRightPanelPage(page);
    const cardItemPage: CardItemPage = new CardItemPage(page);
    const tableItemPage: TableItemPage = new TableItemPage(page);
    const vehicleFilterPage: VehicleFilterPage = new VehicleFilterPage(page);

    let filter: VehicleFilter;
    let extFilter: VehicleFilter;
    let actualFilterData: VehicleFilter;
    let imageUrlLeftCardMode: string | null;
    let imageUrlRightDetails: string | null;
    let imageUrlRightFullScreen: string | null;

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'Vehicle Search' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.VehicleSearch);
    });

    await test.step("Check 'Choice Scope' module", async () => {
        await vehicleSearchPage.clickOnChoiceScope();

        await vehicleSearchPage.moveTreeNodeToSelectedPanelByDoubleClick("Main");

        await vehicleSearchPage.verifySelectedListContainsData(true);

        await vehicleSearchPage.clickOnCancelButton();

        await vehicleSearchPage.clickOnChoiceScope();

        await vehicleSearchPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await vehicleSearchPage.verifySelectedListContainsData(true);

        await vehicleSearchPage.moveTreeNodeToLeftPanelByMovementButton("Select All");

        await vehicleSearchPage.verifySelectedListContainsData(false);

        await vehicleSearchPage.clickOnCancelButton();

        await vehicleSearchPage.clickOnChoiceScope();

        await vehicleSearchPage.moveTreeNodeToRightPanelByMovementButton("Main");

        await vehicleSearchPage.verifySelectedListContainsData(true);

        await vehicleSearchPage.clickOnClearButton();

        await vehicleSearchPage.verifySelectedListContainsData(false);

        await vehicleSearchPage.clickOnCancelButton();
    });

    await test.step("Check 'Calendar' module", async () => {
        await vehicleSearchPage.clickOnTimeInterval();

        // The first way to select dates
        await calendarPage.selectLastTimePeriodViaCalendarDays("9 days");

        await vehicleSearchPage.clickOnResetButton();

        await vehicleSearchPage.clickOnTimeInterval();

        // The second way to select dates
        await calendarPage.selectLastMonthTimePeriodViaShortcutItem("Month");

        await vehicleSearchPage.clickOnResetButton();

        await vehicleSearchPage.clickOnTimeInterval();

        // The third way to select dates
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
    });

    await test.step("Check 'Reset' button", async () => {
        await vehicleSearchPage.clickOnTimeInterval();

        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");

        filter = {
            VehicleBrand: ["All"],
            VehicleType: ["Others"],
            LicensePlateType: "Without License Plate",
            SortPassingTime: "Descending",
            VehicleColor: ["White", "Silver", "Gray", "Unknown"],
            LicensePlateColor: ["Black", "Green", "Red", "Other"],
        }

        await vehicleSearchPage.clickOnShowMoreButton();
        await vehicleFilterPage.applyFilters(filter);

        await vehicleSearchPage.clickOnResetButton();
    });

    await test.step("Select time interval: last month", async () => {
        await page.reload();
        await page.waitForTimeout(1000);
        await vehicleSearchPage.clickOnTimeInterval();
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
        await page.waitForTimeout(1000);
    });

    await test.step("Press 'Show More Conditions' and select filter", async () => {

        filter = {
            VehicleBrand: ["All"],
            VehicleType: ["All"],
            LicensePlateType: "With License Plate",
            SortPassingTime: "Descending",
            VehicleColor: ["White", "Silver", "Gray", "Unknown"],
            LicensePlateColor: ["Black", "Green", "Red", "Other"],
        }

        await vehicleSearchPage.clickOnShowMoreButton();
        await vehicleFilterPage.applyFilters(filter);

        await vehicleSearchPage.clickOnQueryButton();
        await page.waitForTimeout(5000);
    });

    await test.step("Verify 'Left' panel: check 'Card mode' by default", async () => {
        await searchResultLeftPanelPage.verifyCardModeElementsOnTableView();
        await cardItemPage.verifyVehicleCardModeFirstCardItem();

        extFilter = {
            ...filter,
            RegNumber: String(await cardItemPage.getFirstVehicleCardRegNumberText()),
            Checkpoint: String(await cardItemPage.getFirstVehicleCardCheckpointText()),
            CollectTime: String(await cardItemPage.getFirstVehicleCardBodyCollectTimeText()),
        }

        imageUrlLeftCardMode = await searchResultLeftPanelPage.getImageUrl(false);
    });

    await test.step("Verify 'Left' panel: change 'Table mode' and verify", async () => {
        await searchResultLeftPanelPage.clickOnListButton();
        await page.waitForTimeout(1000);

        await tableItemPage.verifyVehicleSearchFirstTableModeItem(extFilter);

        actualFilterData = await tableItemPage.getVehicleSearchFilterData();
    });

    await test.step("Verify 'Right' panel: check 'Details' view", async () => {
        await searchResultRightPanelPage.verifyVehicleSearchDetailsPanelContent(actualFilterData);

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