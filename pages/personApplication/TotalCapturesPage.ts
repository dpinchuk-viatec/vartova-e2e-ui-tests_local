import {Page, Locator, expect} from "@playwright/test";

export class TotalCapturesPage {
    readonly page: Page;
    private readonly _totalCaptureWindow: Locator;
    private readonly _topBlock: Locator;
    private readonly _topBlockCardMode: Locator;
    private readonly _topBlockTableMode: Locator;
    private readonly _bottomBlock: Locator;
    private readonly _searchResultBlockCardMode: Locator;
    private readonly _cardItemCardMode: Locator;
    private readonly _tableMode: Locator;
    private readonly _tableModeHeader: Locator;
    private readonly _tableModeBody: Locator;

    constructor(page: Page) {
        this.page = page;
        this._totalCaptureWindow = this.page.locator(".overflow-y-auto").nth(1);
        this._topBlock = this._totalCaptureWindow.locator(".justify-content-between").nth(0);
        this._topBlockCardMode = this._topBlock.locator("button").nth(0);
        this._topBlockTableMode = this._topBlock.locator("button").nth(1);
        this._bottomBlock = this._totalCaptureWindow.locator(".justify-content-between").nth(1);
        this._searchResultBlockCardMode = this._totalCaptureWindow.locator(".grid-search-result-container");
        this._cardItemCardMode = this._searchResultBlockCardMode.locator(".grid-search-result-item");
        this._tableMode = this._totalCaptureWindow.locator("table");
        this._tableModeHeader = this._tableMode.locator("thead");
        this._tableModeBody = this._tableMode.locator("tbody");
    }

    get totalCaptureWindow(): Locator {
        return this._totalCaptureWindow;
    }

    get topBlock(): Locator {
        return this._topBlock;
    }

    get topBlockCardMode(): Locator {
        return this._topBlockCardMode;
    }

    get topBlockTableMode(): Locator {
        return this._topBlockTableMode;
    }

    get bottomBlock(): Locator {
        return this._bottomBlock;
    }

    get searchResultBlockCardMode(): Locator {
        return this._searchResultBlockCardMode;
    }

    get cardItemCardMode(): Locator {
        return this._cardItemCardMode;
    }

    get tableMode(): Locator {
        return this._tableMode;
    }

    get tableModeHeader(): Locator {
        return this._tableModeHeader;
    }

    get tableModeBody(): Locator {
        return this._tableModeBody;
    }

    async verifyTableModeHeaderElements() {
        await expect(this.tableModeHeader.locator("th").nth(0)).toContainText("No.");
        await expect(this.tableModeHeader.locator("th").nth(1)).toContainText(" Photo");
        await expect(this.tableModeHeader.locator("th").nth(2)).toContainText(" Time");
        await expect(this.tableModeHeader.locator("th").nth(3)).toContainText(" Location");
        await expect(this.tableModeHeader.locator("th").nth(4)).toContainText(" Gender");
        await expect(this.tableModeHeader.locator("th").nth(5)).toContainText(" Age Group");
        await expect(this.tableModeHeader.locator("th").nth(6)).toContainText(" Glasses");
        await expect(this.tableModeHeader.locator("th").nth(7)).toContainText(" Smile");
        await expect(this.tableModeHeader.locator("th").nth(8)).toContainText(" Mask");
        await expect(this.tableModeHeader.locator("th").nth(9)).toContainText(" Action");
    }

    async verifyTableModeTableElement(elementNumber: string = "1") {
        await expect(this.tableModeBody.locator("td").nth(0)).toContainText(elementNumber);
        await expect(this.tableModeBody.locator("td").nth(1).locator("img")).toBeVisible();

    }
}