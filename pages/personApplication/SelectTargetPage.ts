import {Page, Locator, expect} from "@playwright/test";

export class SelectTargetPage {
    readonly page: Page;
    private readonly _modalWindow: Locator;
    private readonly _modalWindowTitle: Locator;
    private readonly _modalWindowCloseButton: Locator;
    private readonly _modalWindowCancelButton: Locator;
    private readonly _modalWindowOkButton: Locator;
    private readonly _modalWindowMainImage: Locator;
    private readonly _modalWindowMainImageSearchedImage: Locator;
    private readonly _modalWindowSideImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this._modalWindow = this.page.locator(".modal-content").last();
        this._modalWindowTitle = this._modalWindow.locator("h3");
        this._modalWindowCloseButton = this._modalWindow.locator("button[data-testid='popup-header-component__button']");
        this._modalWindowCancelButton = this._modalWindow.locator("button[data-testid='person-parts-recognition-modal__button']");
        this._modalWindowOkButton = this._modalWindow.locator("button[data-testid='person-parts-recognition-modal__button--0']");
        this._modalWindowMainImage = this._modalWindow.locator("svg[data-testid='person-parts-recognition-image__element']").first();
        this._modalWindowMainImageSearchedImage = this._modalWindow.locator("rect[data-testid='person-parts-recognition-image__element--0']");
        this._modalWindowSideImage = this._modalWindow.locator("div[data-testid='person-parts-recognition-modal__element']");
    }

    get modalWindow(): Locator {
        return this._modalWindow;
    }

    get modalWindowTitle(): Locator {
        return this._modalWindowTitle;
    }

    get modalWindowCloseButton(): Locator {
        return this._modalWindowCloseButton;
    }

    get modalWindowCancelButton(): Locator {
        return this._modalWindowCancelButton;
    }

    get modalWindowOkButton(): Locator {
        return this._modalWindowOkButton;
    }

    get modalWindowMainImage(): Locator {
        return this._modalWindowMainImage;
    }

    get modalWindowMainImageSearchedImage(): Locator {
        return this._modalWindowMainImageSearchedImage;
    }

    get modalWindowSideImage(): Locator {
        return this._modalWindowSideImage;
    }

    async clickOnModalWindowCloseButton() {
        await this.modalWindowCloseButton.click();
    }

    async clickOnModalWindowCancelButton() {
        await this.modalWindowCancelButton.click();
    }

    async clickOnModalWindowOkButton() {
        await this.modalWindowOkButton.click();
    }

    async verifyUploadedImage(isImageWithFacesOrBodies: boolean, amount: number) {
        const mainImageSearchedImageArray: Array<Locator> = await this.modalWindowMainImageSearchedImage.all();
        const sideImageArray: Array<Locator> = await this.modalWindowSideImage.all();

        await expect(this.modalWindowMainImage).toBeVisible();

        expect(mainImageSearchedImageArray.length).toBe(amount);
        expect(sideImageArray.length).toBe(amount);

        if (!isImageWithFacesOrBodies) {
            await expect(this.page.getByText("Failed to detect a face in the photo. Please try a different image or make sure the face is clearly visible")).toBeVisible()
        }
    }

    async verifyModalWindowIsOpened(isModalWindowOpened: boolean) {
        if (isModalWindowOpened) {
            await expect(this.modalWindow).toBeVisible();
            await expect(this.modalWindowCloseButton).toBeVisible();
            await expect(this.modalWindowTitle).toHaveText("Select Target");
            await expect(this.modalWindowCancelButton).toBeVisible();
            await expect(this.modalWindowOkButton).toBeVisible();
        } else {
            await expect(this.modalWindow).toBeHidden();
            await expect(this.modalWindowTitle).toBeHidden();
        }
    }
}