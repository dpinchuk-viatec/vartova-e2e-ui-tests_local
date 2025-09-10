import { test } from '../../../fixtures/login.fixture';
import { expect } from "@playwright/test";
import { HomePage } from "../../../pages/HomePage";
import { CalendarPage } from "../../../pages/common/CalendarPage";
import { HeaderPage } from "../../../pages/common/HeaderPage";
import { VehicleFilter } from "../../../constants/DataTypes";
import { CardLinks } from "../../../constants/CardLinks";
import { TableItemPage } from "../../../pages/personApplication/TableItemPage";
import { VehicleSearchPage } from "../../../pages/menuManagementCards/VehicleSearchPage";
import { VehicleFilterPage } from "../../../pages/filters/VehicleFilterPage";
import { SearchResultLeftPanelPage } from "../../../pages/searchResults/SearchResultLeftPanelPage";
import { VehicleSearchByTrackPage } from "../../../pages/vehicleApplication/VehicleSearchByTrackPage";

test.beforeEach(async({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/\/home/);
})

test("Search by Track: checking different features", async ({ page }) => {
    test.info().annotations.push({
        type: "test_id",
        description: "https://app.clickup.com/t/8699a4jt1"
    });

    const homePage: HomePage = new HomePage(page);
    const headerPage: HeaderPage = new HeaderPage(page);
    const vehicleSearchPage: VehicleSearchPage = new VehicleSearchPage(page);
    const calendarPage: CalendarPage = new CalendarPage(page);
    const tableItemPage: TableItemPage = new TableItemPage(page);
    const vehicleFilterPage: VehicleFilterPage = new VehicleFilterPage(page);
    const searchResultLeftPanelPage: SearchResultLeftPanelPage = new SearchResultLeftPanelPage(page);
    const vehicleSearchByTrackPage: VehicleSearchByTrackPage = new VehicleSearchByTrackPage(page);

    let filter: VehicleFilter;
    let regNumber: string | null;

    await test.step("Select 'English' language", async () => {
        await headerPage.selectLanguage("English");
    });

    await test.step("Select 'Search By Track' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.VehicleSearch);
    });

    await test.step("Select time interval: last month", async () => {
        await page.reload();
        await page.waitForTimeout(1000);
        await vehicleSearchPage.clickOnTimeInterval();
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
        await page.waitForTimeout(1000);
    });

    await test.step("Press 'Show More Conditions' and select filter and click on table mode", async () => {

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
        await searchResultLeftPanelPage.clickOnListButton();
        await page.waitForTimeout(1000);
    });

    await test.step("Get first Vehicle Registry Number", async () => {
        regNumber =  await tableItemPage.getFirstVehicleRegistryNumber();
    });

    await test.step("Click on [Vartova] main button", async () => {
       await headerPage.clickOnVartovaMainButton();
    });

    await test.step("Select 'Search By Track' card", async () => {
        await homePage.clickOnMenuManagementCard(CardLinks.SearchByTrack);
    });

    await test.step("Fill licence plate number", async () => {
        await vehicleSearchByTrackPage.fillEnterLicencePlateNumberField(String(regNumber));
    });

    await test.step("Select time interval: last month", async () => {
        await vehicleSearchPage.clickOnTimeInterval();
        await calendarPage.selectLastMonthTimePeriodViaFillingField("Month");
        await page.waitForTimeout(1000);
    });

    await test.step("Click on [Search] button", async () => {
        await vehicleSearchByTrackPage.clickOnSearchButton();
    });

    await test.step("Verify getting results", async () => {
        await vehicleSearchByTrackPage.verifyElementsOnThePage();
    });
});