import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    private readonly _menuManagementCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this._menuManagementCard = this.page.locator('app-menu-management-card');
    }

    get menuManagementCard(): Locator {
        return this._menuManagementCard;
    }

    async clickOnMenuManagementCard(cardLink: string) {
        const card = this.menuManagementCard.locator(`a[href="${cardLink}"]`);
        await this.page.waitForTimeout(1000);
        await card.click();
        await this.page.waitForTimeout(3000);
    }

    async verifyHomePageIsOpened() {
        const menuManagementCardList: Locator[] = await this.menuManagementCard.all();

        expect(menuManagementCardList.length).toBeGreaterThan(0);
    }
}