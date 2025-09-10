import {expect, Locator, Page} from "@playwright/test";

export class CardItemPage {
    readonly page: Page;
    private readonly _cardItem: Locator;
    private readonly _firstCardItem: Locator;
    private readonly _firstCardBody: Locator;
    private readonly _firstCardCollectLocation: Locator;
    private readonly _firstVehicleCardRegNumber: Locator;
    private readonly _firstCardBodyCollectTime: Locator;
    private readonly _firstVehicleCardCheckpoint: Locator;
    private readonly _firstCardBodyVideoInLabElement: Locator;
    private readonly _firstCardDateCreation: Locator;
    private readonly _searchResultActionButtonsBlock: Locator;
    private readonly _firstVehicleCardBodyCollect: Locator;
    private readonly _firstVehicleTargetDetailsActionButton: Locator;
    private readonly _firstVehicleGeolocationActionButton: Locator;
    private readonly _firstVehiclePlaybackActionButton: Locator;
    private readonly _firstVehiclePathActionButton: Locator;
    private readonly _firstVehicleArmingActionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._cardItem = this.page.locator(".grid-search-result-item");
        this._firstCardItem = this._cardItem.nth(0);
        this._firstCardBody = this._firstCardItem.locator(".card-body");
        this._firstCardCollectLocation = this._firstCardItem.locator("app-view-short-info-item").nth(0);
        this._firstVehicleCardRegNumber = this._firstCardItem.locator("xpath=//div[contains(@class, 'vehicle-plate-wrapper')]").nth(0);
        this._firstVehicleCardCheckpoint = this.page.locator("xpath=(//div[@class='card-body'])[1]//app-view-short-info-item[1]");
        this._firstCardBodyCollectTime = this.page.locator("xpath=(//div[@class='card-body'])[1]//app-view-short-info-item[2]");
        this._firstCardBodyVideoInLabElement = this._firstCardItem.locator("div[data-testid='truncate-content-component__element']").nth(0);
        this._firstCardDateCreation = this._firstCardItem.locator("div[data-testid='truncate-content-component__element']").nth(1);
        this._searchResultActionButtonsBlock = this._firstCardItem.locator("app-search-result-action-buttons");
        this._firstVehicleCardBodyCollect = this._firstCardItem.locator("app-view-short-info-item").nth(1);
        this._firstVehicleTargetDetailsActionButton = this.page.locator("app-search-result-action-buttons").nth(0).locator("button").nth(0);
        this._firstVehicleGeolocationActionButton = this.page.locator("app-search-result-action-buttons").nth(0).locator("button").nth(1);
        this._firstVehiclePlaybackActionButton = this.page.locator("app-search-result-action-buttons").nth(0).locator("button").nth(2);
        this._firstVehiclePathActionButton = this.page.locator("app-search-result-action-buttons").nth(0).locator("button").nth(3);
        this._firstVehicleArmingActionButton = this.page.locator("app-search-result-action-buttons").nth(0).locator("button").nth(4);
    }

    get cardItem(): Locator {
        return this._cardItem;
    }

    get firstCardItem(): Locator {
        return this._firstCardItem;
    }

    get firstCardBody(): Locator {
        return this._firstCardBody;
    }

    get firstCardCollectLocation(): Locator {
        return this._firstCardCollectLocation;
    }

    get firstVehicleCardRegNumber(): Locator {
        return this._firstVehicleCardRegNumber;
    }

    get firstCardBodyCollectTime(): Locator {
        return this._firstCardBodyCollectTime;
    }

    get firstCardBodyVideoInLabElement(): Locator {
        return this._firstCardBodyVideoInLabElement;
    }

    get firstVehicleCardCheckpoint(): Locator {
        return this._firstVehicleCardCheckpoint;
    }

    get firstCardDateCreation(): Locator {
        return this._firstCardDateCreation;
    }

    get searchResultActionButtonsBlock(): Locator {
        return this._searchResultActionButtonsBlock;
    }

    get firstVehicleCardBodyCollectTime(): Locator {
        return this._firstVehicleCardBodyCollect;
    }

    get firstVehicleCardBodyCollect(): Locator {
        return this._firstVehicleCardBodyCollect;
    }

    get firstVehicleTargetDetailsActionButton(): Locator {
        return this._firstVehicleTargetDetailsActionButton;
    }

    get firstVehicleGeolocationActionButton(): Locator {
        return this._firstVehicleGeolocationActionButton;
    }

    get firstVehiclePlaybackActionButton(): Locator {
        return this._firstVehiclePlaybackActionButton;
    }

    get firstVehiclePathActionButton(): Locator {
        return this._firstVehiclePathActionButton;
    }

    get firstVehicleArmingActionButton(): Locator {
        return this._firstVehicleArmingActionButton;
    }

    async clickOnFirstVehicleTargetDetailsActionButton() {
        await this.firstVehicleTargetDetailsActionButton.click();
    }

    async clickOnFirstVehicleGeolocationActionButton() {
        await this.firstVehicleGeolocationActionButton.click();
    }

    async clickOnFirstVehiclePlaybackActionButton() {
        await this.firstVehiclePlaybackActionButton.click();
    }

    async clickOnFirstVehiclePathActionButton() {
        await this.firstVehiclePathActionButton.click();
    }

    async clickOnFirstVehicleArmingActionButton() {
        await this.firstVehicleArmingActionButton.click();
    }

    async clickOnCardItem() {
        await this.cardItem.click();
    }

    async getFirstCardCollectLocationText() {
        return await this.firstCardCollectLocation.textContent();
    }

    async getFirstVehicleCardRegNumberText() {
        return await this.firstVehicleCardRegNumber.textContent();
    }

    async getFirstCardBodyCollectTimeText() {
        return await this.firstCardBodyCollectTime.textContent();
    }

    async getFirstVehicleCardCheckpointText() {
        return await this.firstVehicleCardCheckpoint.textContent();
    }

    async verifyCardModeFirstCardItem() {
        await this.firstCardItem.hover();

        await expect(this.firstCardCollectLocation).toBeVisible();
        await expect(this.firstCardBodyCollectTime).toBeVisible();
        await expect(this.firstCardDateCreation).toBeVisible();
        await expect(this.searchResultActionButtonsBlock).toBeVisible();
    }

    async getFirstVehicleCardBodyCollectTimeText() {
        return await this.firstVehicleCardBodyCollectTime.textContent();
    }

    async verifyVehicleCardModeFirstCardItem() {

        await expect(this.firstVehicleCardRegNumber).toBeVisible();
        await expect(this.firstVehicleCardCheckpoint).toBeVisible();
        await expect(this.firstVehicleCardBodyCollectTime).toBeVisible();

        await this.firstCardItem.hover();

        await expect(this.firstVehicleTargetDetailsActionButton).toBeVisible();
        await expect(this.firstVehicleGeolocationActionButton).toBeVisible();
        await expect(this.firstVehiclePlaybackActionButton).toBeVisible();
        await expect(this.firstVehiclePathActionButton).toBeVisible();
        await expect(this.firstVehicleArmingActionButton).toBeVisible();
    }
}