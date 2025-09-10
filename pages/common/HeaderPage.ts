import { Page, Locator, expect } from "@playwright/test";

export class HeaderPage {
    readonly page: Page;
    private readonly _header: Locator;
    private readonly _logo: Locator;
    private readonly _vartovaButton: Locator;
    private readonly _mainButton: Locator;
    private readonly _selectLanguageButton: Locator;
    private readonly _languageDropdownMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this._header = this.page.locator("header");
        this._logo = this._header.locator("img").first();
        this._vartovaButton = this._header.locator("a[href='#/home']").nth(0);
        this._mainButton = this._header.locator("a[href='#/home']").nth(1);
        this._selectLanguageButton = this._header.locator("button").nth(5);
        this._languageDropdownMenu = this._header.locator(".dropdown-menu").nth(1);
    }

    get header(): Locator {
        return this._header;
    }

    get logo(): Locator {
        return this._logo;
    }

    get vartovaButton(): Locator {
        return this._vartovaButton;
    }

    get mainButton(): Locator {
        return this._mainButton;
    }

    get selectLanguageButton(): Locator {
        return this._selectLanguageButton;
    }

    get languageDropdownMenu(): Locator {
        return this._languageDropdownMenu;
    }

    async clickOnSelectLanguageButton() {
        await this.selectLanguageButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectLanguage(language: string) {
        await this.selectLanguageButton.click();
        await this.languageDropdownMenu.getByText(language).click();
        await this.page.waitForTimeout(2000);
    }

    async verifyHeaderElements() {
        await expect(this.logo).toBeVisible();
        await expect(this.vartovaButton).toBeVisible();
        await expect(this.mainButton).toBeVisible();
    }

    async clickOnVartovaMainButton() {
        await this.vartovaButton.click();
        await this.page.waitForTimeout(1000);
    }
}