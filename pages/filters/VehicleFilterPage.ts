import { Locator, Page } from "@playwright/test";
import { VehicleFilter } from "../../constants/DataTypes";
import { VehicleFilters } from "../../constants/FilterList";

export class VehicleFilterPage {

    private readonly _vehicleBrand: Locator;
    private readonly _vehicleType: Locator;
    private readonly _licensePlateType: Locator;
    private readonly _sortPassingTime: Locator;
    private readonly _searchBrandConfirmButton: Locator;

    constructor(private page: Page) {
        this._vehicleBrand = this.page.locator("ul[data-testid='select-vehicle-brand__list']").first();
        this._vehicleType = this.page.locator("ng-select[data-testid='vehicle-filter__select--2']").first();
        this._licensePlateType = this.page.locator("ng-select[data-testid='vehicle-filter__select--3']").first();
        this._sortPassingTime = this.page.locator("ng-select[data-testid='vehicle-filter__select--4']").first();
        this._searchBrandConfirmButton = this.page.locator("button[data-testid='select-vehicle-brand__button--1']").first();
    }

    get vehicleBrand(): Locator {
        return this._vehicleBrand;
    }

    get vehicleType(): Locator {
        return this._vehicleType;
    }

    get licensePlateType(): Locator {
        return this._licensePlateType;
    }

    get sortPassingTime(): Locator {
        return this._sortPassingTime;
    }

    get searchBrandConfirmButton(): Locator {
        return this._searchBrandConfirmButton;
    }

    async clickOnSearchBrandConfirmButton() {
        await this.searchBrandConfirmButton.click();
    }

    /**
     * Button filters (click on button)
     */
    private async selectButtonFilter(filterName: string, option: string) {
        switch (filterName) {
            case "VehicleColor": {
                await this.page.locator("app-color-selection").nth(0).locator(`*:text-is('${option}')`).click();
                break;
            }
            case "LicensePlateColor": {
                await this.page.locator("app-color-selection").nth(1).locator(`*:text-is('${option}')`).click();
                break;
            }
            default: {
                console.log(filterName);
            }
        }
    }

    /**
     * Dropdown filters (open select and choose option)
     */
    private async selectDropdownFilter(filterName: string, option: string) {
        const dropdown = this.page.locator(`xpath=//ng-select[@data-testid='${VehicleFilters[filterName]}']`).locator("..");

        await dropdown.click(); // open a list
        await this.page.waitForTimeout(1000);

        switch (filterName) {
            case "VehicleBrand": {
                await this.page.locator(`xpath=//ul[@data-testid="select-vehicle-brand__list"]//*[text()='${option}']`).click();
                break;
            }
            case "VehicleType": {
                await this.page.locator(`xpath=//ng-select[@data-testid='vehicle-filter__select--2']//div[contains(@class, 'ng-dropdown-panel-items')]//*[text()='${option}']`).click();
                break;
            }
            case "LicensePlateType": {
                await this.page.locator(`xpath=//ng-select[@data-testid='vehicle-filter__select--3']//div[contains(@class, 'ng-dropdown-panel')]//*[text()='${option}']`).click();
                break;
            }
            case "SortPassingTime": {
                await this.page.locator(`xpath=//ng-select[@data-testid='vehicle-filter__select--4']//div[contains(@class, 'ng-dropdown-panel')]//*[text()='${option}']`).click();
                break;
            }
            default: {
                console.log(filterName);
            }
        }

        if (filterName === "VehicleBrand") {
            await this.searchBrandConfirmButton.click();
            await this.page.waitForTimeout(1000);
        } else if (filterName === "VehicleType") {
            await this.page.getByText("Search by Vehicle Features").first().click();
            await this.page.waitForTimeout(1000);
        }
    }

    /**
     * Using filters
     */
    async applyFilters(filter: VehicleFilter) {
        for (const [filterName, value] of Object.entries(filter)) {
            if (!value || value[0] === "All") {
                continue;
            };

            const values = Array.isArray(value) ? value : [value];

            for (const option of values) {
                if (["VehicleBrand", "VehicleType", "LicensePlateType", "SortPassingTime"].includes(filterName)) {
                    await this.selectDropdownFilter(filterName, option);
                } else {
                    await this.selectButtonFilter(filterName, option);
                }
            }
        }
    }
}