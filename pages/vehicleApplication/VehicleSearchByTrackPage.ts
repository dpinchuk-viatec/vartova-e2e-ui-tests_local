import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class VehicleSearchByTrackPage extends BasePage{
    private readonly _searchVehicleForm: Locator;
    private readonly _searchVehicleButton: Locator;
    private readonly _enterLicencePlateNumberField: Locator;
    private readonly _timeRangeField: Locator;
    private readonly _selectSearchArea: Locator;
    private readonly _searchButton: Locator;
    private readonly _backToSearchButton: Locator;
    private readonly _collapseButton: Locator;
    private readonly _allButton: Locator;
    private readonly _byTimeButton: Locator;
    private readonly _showRouteCheckbox: Locator;
    private readonly _hideResultsButton: Locator;
    private readonly _mapHistoryRulerBlock: Locator;
    private readonly _mapHistoryRulerBlockLeftButton: Locator;
    private readonly _mapHistoryRulerBlockRightButton: Locator;
    private readonly _mapHistoryForm: Locator;
    private readonly _patchSearchResultButton: Locator;

    constructor(page: Page) {
        super(page);
        this._searchVehicleForm = this.page.locator("form").nth(0);
        this._searchVehicleButton = this._searchVehicleForm.locator(".card-header-actions").first();
        this._enterLicencePlateNumberField = this._searchVehicleForm.locator("input[placeholder='Enter license plate number']").first();
        this._timeRangeField = this._searchVehicleForm.locator("input[data-testid='date-time-range-picker__input']").first();
        this._selectSearchArea = this._searchVehicleForm.locator(".custom-multiple-select").first();
        this._searchButton = this._searchVehicleForm.getByRole("button", {  name: " Search " });
        this._backToSearchButton = this.page.locator(".card-header-actions").first();
        this._collapseButton = this.page.locator("div[data-testid='map-overlay__element--0']");
        this._allButton = this._searchVehicleForm.locator("button", { hasText: " All " });
        this._byTimeButton = this._searchVehicleForm.getByRole("button", { name: " By Time " });
        this._showRouteCheckbox = this._searchVehicleForm.locator("li[data-testid='path-search-result__list-item--1']").locator("input");
        this._hideResultsButton = this._searchVehicleForm.locator("button[data-testid='path-search-result__button--1']").first();
        this._mapHistoryRulerBlock = this.page.locator("app-map-history-ruler").first();
        this._mapHistoryRulerBlockLeftButton = this._mapHistoryRulerBlock.locator("button[data-testid='map-history-ruler__button']").nth(0);
        this._mapHistoryRulerBlockRightButton = this._mapHistoryRulerBlock.locator("button[data-testid='map-history-ruler__button--0']");
        this._mapHistoryForm = this.page.locator("form").nth(1);
        this._patchSearchResultButton = this.page.locator("button[data-testid='path-search-result__button--2']");
    }

    get searchVehicleForm(): Locator {
        return this._searchVehicleForm;
    }

    get searchVehicleButton(): Locator {
        return this._searchVehicleButton;
    }

    get enterLicencePlateNumberField(): Locator {
        return this._enterLicencePlateNumberField;
    }

    get timeRangeField(): Locator {
        return this._timeRangeField;
    }

    get selectSearchArea(): Locator {
        return this._selectSearchArea;
    }

    get searchButton(): Locator {
        return this._searchButton;
    }

    get backToSearchButton(): Locator {
        return this._backToSearchButton;
    }

    get collapseButton(): Locator {
        return this._collapseButton;
    }

    get allButton(): Locator {
        return this._allButton;
    }

    get byTimeButton(): Locator {
        return this._byTimeButton;
    }

    get showRouteCheckbox(): Locator {
        return this._showRouteCheckbox;
    }

    get mapHistoryRulerBlock(): Locator {
        return this._mapHistoryRulerBlock;
    }

    get mapHistoryRulerBlockLeftButton(): Locator {
        return this._mapHistoryRulerBlockLeftButton;
    }

    get mapHistoryRulerBlockRightButton(): Locator {
        return this._mapHistoryRulerBlockRightButton;
    }

    get mapHistoryForm(): Locator {
        return this._mapHistoryForm;
    }

    get hideResultsButton(): Locator {
        return this._hideResultsButton;
    }

    get patchSearchResultButton(): Locator {
        return this._patchSearchResultButton;
    }

    async clickOnSearchVehicleButton() {
        await this.searchVehicleButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnAllButton() {
        await this.allButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnByTimeButton() {
        await this.byTimeButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnShowRouteCheckbox() {
        await this.showRouteCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnHideResultsButton() {
        await this.hideResultsButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnBackToSearchButton() {
        await this.backToSearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async fillEnterLicencePlateNumberField(licencePlateNumber: string) {
        await this.enterLicencePlateNumberField.fill(licencePlateNumber);
    }

    async verifyElementsOnThePage() {
        const searchResults: Locator[] = await this.patchSearchResultButton.all();

        expect(searchResults.length).toBeGreaterThan(0);

        await expect(this.backToSearchButton).toBeVisible();
        await expect(this.collapseButton).toBeVisible();
        await expect(this.allButton).toBeVisible();
        await expect(this.byTimeButton).toBeVisible();
        await expect(this.showRouteCheckbox).toBeVisible();
        await expect(this.hideResultsButton).toBeVisible();

        await expect(this.mapHistoryRulerBlock).toBeVisible();
        await expect(this.mapHistoryForm).toBeVisible();
        await expect(this.mapHistoryRulerBlockLeftButton).toBeVisible();
        await expect(this.mapHistoryRulerBlockRightButton).toBeVisible();
    }
}