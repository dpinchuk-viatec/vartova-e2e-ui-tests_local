import { Locator, Page } from '@playwright/test';
import {BodyByFeatureFilter, FaceByFeatureFilter, VehicleSearchFilter} from "../../constants/DataTypes";
import { Filters, getFilterValue } from "../../constants/FilterList";

export class FilterPage {
    private readonly _simpleFilter = (filterName: string, option: string): Locator => {
        return this.page.locator(
            `xpath=//p[text()='${filterName}']//following-sibling::app-selection//button[contains(text(), '${option}')]`
        ).first();
    };
    private readonly _colorFilter = (filterName: string, option: string): Locator => {
        return this.page.locator(
            `//p[text()='${filterName}']//following-sibling::app-color-selection//button//span[contains(text(), '${option}')]`
        ).first();
    };

    constructor(private page: Page) {
    };

    get simpleFilter(): (filterName: string, option: string) => Locator {
        return this._simpleFilter;
    }

    get colorFilter(): (filterName: string, option: string) => Locator {
        return this._colorFilter;
    }

    private formatBodyByFeatureFilter(key: string): string {
        switch (key) {
            case "glasses": return "Glasses";
            case "hairstyle": return "Hairstyle";
            case "ageGroup": return "Age Group";
            case "jacketType": return "Jacket Type";
            case "bag": return "Bag";
            case "trousersType": return "Trousers Type";
            case "colorOfJacket": return "Color of jacket";
            case "colorOfTrousers": return "Color of trousers";
            default: return key.charAt(0).toUpperCase() + key.slice(1);
        }
    }

    /**
     * Select single filter's parameter
     */
    async selectFilterOption(filterName: any, option: string) {
        if ([Filters.ColorOfJacket, Filters.ColorOfTrousers].includes(filterName)) {
            await this.colorFilter(filterName, option).click();
            await this.page.waitForTimeout(1000);
        } else {
            await this.simpleFilter(filterName, option).click();
            await this.page.waitForTimeout(1000);
        }
    }

    /**
     * Select multiple filter options
     */
    async selectMultipleOptions(filterName: string, options: string[]) {
        for (const option of options) {
            await this.selectFilterOption(filterName, option);
        }
    }

    /**
     * Select multiple filters
     */
    async selectMultipleFilters(filter: FaceByFeatureFilter | BodyByFeatureFilter) {
        for (const [filterName, value] of Object.entries(filter)) {

            if (!value || value.includes("All")) {
                continue; // Skip empty values
            }

            if (value.includes(",")) {
                // if several values are separated by commas
                const options: string[] = String(value).split(",").map(v => v.trim());

                for (const option of options) {
                    // @ts-ignore
                    await this.selectFilterOption(getFilterValue(filterName), option);
                }
            } else {
                // @ts-ignore
                await this.selectFilterOption(getFilterValue(filterName), value);
            }
        }
    }

    /**
     * Reset filter to 'All' status
     */
    async resetFilter(filterName: string) {
        await this.selectFilterOption(filterName, "All");
    }

    /**
     * Reset all filters to 'All' status
     */
    async resetAllFilters() {
        const allButtons = await this.page.locator("text=All").all();
        for (const btn of allButtons) {
            await btn.click();
        }
    }
}
