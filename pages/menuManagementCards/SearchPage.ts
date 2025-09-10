import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SearchPage extends BasePage{
    private readonly _breadcrumbBar: Locator;
    private readonly _timeInterval: Locator;
    private readonly _queryButton: Locator;
    private readonly _resetButton: Locator;
    private readonly _selectSearchArea: Locator;

    constructor(page: Page) {
        super(page);
        this._breadcrumbBar = this.page.locator(".breadcrumb-bar");
        this._timeInterval = this.page.locator("input[data-testid='date-time-range-picker__input']");
        this._queryButton = this.page.locator("button[data-testid='entity-search-filter-control-buttons-component__button--0']");
        this._resetButton = this.page.locator("button[data-testid='entity-search-filter-control-buttons-component__button--1']");
        this._selectSearchArea = this.page.locator("ng-select[data-testid='face-search-by-features-filter__select']");
    }

    get breadcrumbBar(): Locator {
        return this._breadcrumbBar;
    }

    get timeInterval(): Locator {
        return this._timeInterval;
    }

    get queryButton(): Locator {
        return this._queryButton;
    }

    get resetButton(): Locator {
        return this._resetButton;
    }

    get selectSearchArea(): Locator {
        return this._selectSearchArea;
    }

    async clickOnTimeInterval() {
        await this.timeInterval.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnQueryButton() {
        await this.queryButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnResetButton() {
        await this.resetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSelectSearchArea() {
        await this.selectSearchArea.click();
    }
}