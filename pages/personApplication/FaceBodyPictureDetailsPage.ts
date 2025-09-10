import { Page, Locator, expect } from "@playwright/test";

export class FaceBodyPictureDetailsPage {
    readonly page: Page;
    private readonly _leftPanel: Locator;
    private readonly _rightPanel: Locator;
    private readonly _leftPanelImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this._leftPanel = this.page.locator("div[data-testid='target-details__card']").nth(0);
        this._rightPanel = this.page.locator("div[data-testid='target-details__card']").nth(1);
        this._leftPanelImage = this.page.locator("image[data-testid='image-slicer-component__element']").nth(0);
    }

    get leftPanel(): Locator {
        return this._leftPanel;
    }

    get rightPanel(): Locator {
        return this._rightPanel;
    }

    get leftPanelImage(): Locator {
        return this._leftPanelImage;
    }

    async getImageUrl() {
        return this.leftPanelImage.getAttribute("href");
    }

    async verifyFacePictureDetailsContent(imageUrl: string | null) {
        const currentImageUrl: string | null = await this.getImageUrl();

        expect(currentImageUrl).toBe(imageUrl);
    }
}