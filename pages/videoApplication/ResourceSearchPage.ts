import { Page, Locator, expect } from "@playwright/test";

export class ResourceSearchPage {
    readonly page: Page;
    private readonly _leftPanel: Locator;
    private readonly _resourceSearchButton: Locator;
    private readonly _searchField: Locator;
    private readonly _filterButton: Locator;
    private readonly _coordinatesDisplayButton: Locator;
    private readonly _mainRootButton: Locator;
    private readonly _generalCamerasNodeButton: Locator;
    private readonly _queueStreetNodeButton: Locator;
    private readonly _fullViewNodeButton: Locator;
    private readonly _ptzNodeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._leftPanel = this.page.locator("app-e-map-tool-left-panel");
        this._resourceSearchButton = this.page.locator("button[data-testid='e-map-tool-left-panel__button']");
        this._searchField = this.page.locator("input[data-testid='search-input-component__input']");
        this._filterButton = this.page.locator("button[data-testid='e-map-resources__button']").nth(0);
        this._coordinatesDisplayButton = this.page.locator("#filterResourceWithCoordinates");
        this._mainRootButton = this.page.locator("button[data-testid='resources-tab__button--0']").nth(1);
        this._generalCamerasNodeButton = this.page.locator("button[aria-label='Toggle General cameras']");
        this._queueStreetNodeButton = this.page.locator("button[aria-label='Node Черга вулиця']");
        this._fullViewNodeButton = this.page.locator("button[aria-label='Node FullView']");
        this._ptzNodeButton = this.page.locator("button[aria-label='Node PTZ']");
    }

    get leftPanel(): Locator {
        return this._leftPanel;
    }

    get resourceSearchButton(): Locator {
        return this._resourceSearchButton;
    }

    get searchField(): Locator {
        return this._searchField;
    }

    get filterButton(): Locator {
        return this._filterButton;
    }

    get coordinatesDisplayButton(): Locator {
        return this._coordinatesDisplayButton;
    }

    get mainRootButton(): Locator {
        return this._mainRootButton;
    }

    get generalCamerasNodeButton(): Locator {
        return this._generalCamerasNodeButton;
    }

    get queueStreetNodeButton(): Locator {
        return this._queueStreetNodeButton;
    }

    get fullViewNodeButton(): Locator {
        return this._fullViewNodeButton;
    }

    get ptzNodeButton(): Locator {
        return this._ptzNodeButton;
    }

    async clickOnResourceSearchButton() {
        await this.resourceSearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async fillSearchField(text: string) {
        await this.searchField.fill(text);
    }

    async clickOnCoordinatesDisplayButton() {
        await this.coordinatesDisplayButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnMainRootButton() {
        await this.mainRootButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGeneralCamerasNodeButton() {
        await this.generalCamerasNodeButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnQueueStreetNodeButton() {
        await this.queueStreetNodeButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnFullViewNodeButton() {
        await this.fullViewNodeButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnPtzNodeButton() {
        await this.ptzNodeButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyEMapPage() {
        await expect(this.leftPanel).toBeVisible();
        await expect(this.resourceSearchButton).toBeVisible();
        await expect(this.searchField).toBeVisible();
        await expect(this.filterButton).toBeVisible();
        await expect(this.coordinatesDisplayButton).toBeVisible();
        await expect(this.page.getByText(" Resource Search ")).toBeVisible();
        await expect(this.page.getByText("Longitude and Latitude Not Displayed")).toBeVisible();
    }
}