import { Page, Locator } from "@playwright/test";
import { SearchPage } from "./SearchPage";

export class SearchByFeaturePage extends SearchPage {
    private readonly _showMoreButton: Locator;

    constructor(page: Page) {
        super(page);
        this._showMoreButton = this.page.locator(".filter-buttons").locator("button").nth(0);
    }

    get showMoreButton(): Locator {
        return this._showMoreButton;
    }

    async clickOnShowMoreButton() {
        await this.showMoreButton.click();
    }
}