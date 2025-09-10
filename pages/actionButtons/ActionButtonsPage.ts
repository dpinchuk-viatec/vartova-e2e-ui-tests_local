import { Page, Locator } from "@playwright/test";

export class ActionButtonsPage {
    readonly page: Page;
    private readonly _searchResultActionButtonsBlock: Locator;
    private readonly _targetDetailsButton: Locator;
    private readonly _geolocationButton: Locator;
    private readonly _playbackButton: Locator;
    private readonly _searchByPictureButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._searchResultActionButtonsBlock = this.page.locator("app-search-result-action-buttons");
        this._targetDetailsButton = this._searchResultActionButtonsBlock.locator("button").nth(0);
        this._geolocationButton = this._searchResultActionButtonsBlock.locator("button").nth(1);
        this._playbackButton = this._searchResultActionButtonsBlock.locator("button").nth(2);
        this._searchByPictureButton = this._searchResultActionButtonsBlock.locator("button").nth(3);
    }

    get searchResultActionButtonsBlock(): Locator {
        return this._searchResultActionButtonsBlock;
    }

    get targetDetailsButton(): Locator {
        return this._targetDetailsButton;
    }

    get geolocationButton(): Locator {
        return this._geolocationButton;
    }

    get playbackButton(): Locator {
        return this._playbackButton;
    }

    get searchByPictureButton(): Locator {
        return this._searchByPictureButton;
    }

    async clickOnTargetDetailsButton() {
        await this.targetDetailsButton.click();
    }

    async clickOnGeolocationButton() {
        await this.geolocationButton.click();
    }

    async clickOnPlaybackButton() {
        await this.playbackButton.click();
    }

    async clickOnSearchByPictureButton() {
        await this.searchByPictureButton.click();
    }
}