import { Page, Locator, expect } from "@playwright/test";

export class SearchResultLeftPanelPage {
    readonly page: Page;
    private readonly _leftPanel: Locator;
    private readonly _totalCapturesAmount: Locator;
    private readonly _gridButton: Locator;
    private readonly _listButton: Locator;
    private readonly _cardItem: Locator;
    private readonly _firstCardItem: Locator;
    private readonly _firstCardItemImage: Locator;
    private readonly _firstCardFullScreenItemImage: Locator;
    private readonly _firstCardItemImg: Locator;
    private readonly _rectItem: Locator;
    private readonly _firstRectItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this._leftPanel = this.page.locator("div[data-testid='entity-search-result__card']").nth(0);
        this._totalCapturesAmount = this._leftPanel.locator("xpath=//*[text()='Total Captures:']//following::span");
        this._gridButton = this._leftPanel.locator("button[icon='grid']");
        this._listButton = this._leftPanel.locator("button[icon='list']");
        this._cardItem = this._leftPanel.locator("div[data-testid='grid-view-search-result__card']");
        this._firstCardItem = this._leftPanel.locator("div[data-testid='grid-view-search-result__card']").nth(0);
        this._firstCardItemImage = this._leftPanel.locator("image[data-testid='image-slicer-component__element']").nth(0);
        this._firstCardFullScreenItemImage = this.page.locator("image[data-testid='image-slicer-component__element']").nth(0);
        this._firstCardItemImg = this._leftPanel.locator("img[data-testid='entity-search-result-image-component__element']").nth(0);
        this._rectItem = this.page.locator(".stroke-frame");
        this._firstRectItem = this.page.locator(".stroke-frame").nth(0);
    }

    get leftPanel(): Locator {
        return this._leftPanel;
    }

    get totalCapturesAmount(): Locator {
        return this._totalCapturesAmount;
    }

    get gridButton(): Locator {
        return this._gridButton;
    }

    get listButton(): Locator {
        return this._listButton;
    }

    get cardItem(): Locator {
        return this._cardItem;
    }

    get firstCardItem(): Locator {
        return this._firstCardItem;
    }

    get firstCardItemImage(): Locator {
        return this._firstCardItemImage;
    }

    get firstCardFullScreenItemImage(): Locator {
        return this._firstCardFullScreenItemImage;
    }

    get firstCardItemImg(): Locator {
        return this._firstCardItemImg;
    }

    get rectItem(): Locator {
        return this._rectItem;
    }

    get firstRectItem(): Locator {
        return this._firstRectItem;
    }

    async clickOnGridButton() {
        await this.gridButton.click();
    }

    async clickOnListButton() {
        await this.listButton.click();
    }

    async verifyCardModeElementsOnTableView() {
        const cards: Locator[] = await this.cardItem.all();

        await expect(this.leftPanel).toBeVisible();
        await expect(this.gridButton).toBeVisible();
        await expect(this.gridButton).toHaveCSS("background-color", "rgb(47, 106, 214)");
        await expect(this.listButton).toBeVisible();
        expect(cards.length).toBeGreaterThan(0);
        expect(cards.length).toBeLessThanOrEqual(20);
    }

    async getImageUrl(isTableMode: boolean = true) {
        if (isTableMode) {
            return await this.firstCardItemImg.getAttribute("src");
        }
       return await this.firstCardItemImage.getAttribute("href");
    }

    async getFullScreenImageUrl(isTableMode: boolean = true) {
       return await this.firstCardFullScreenItemImage.getAttribute("href");
    }

    async verifyBodiesOnImage() {
        const rectList: Locator[] = await this.rectItem.all();

        expect(rectList.length).toBeGreaterThan(0);
    }
}