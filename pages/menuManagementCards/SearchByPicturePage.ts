import { Page, Locator } from "@playwright/test";
import { SearchPage } from "./SearchPage";

export class SearchByPicturePage extends SearchPage {
    private readonly _selectPictureButton: Locator;
    private readonly _thresholdField: Locator;
    private readonly _pictureRequiredText: Locator;

    constructor(page: Page) {
        super(page);
        this._selectPictureButton = page.locator("#fileInput");
        this._thresholdField = page.locator("input[data-testid='face-search-by-picture-filter__input']").first();
        this._pictureRequiredText = page.getByText("*3840×2160 px / 8MB / .jpg, .jpeg, .png, .bmp");
    }

    get selectPictureButton(): Locator {
        return this._selectPictureButton;
    }

    get thresholdField(): Locator {
        return this._thresholdField;
    }

    get pictureRequiredText(): Locator {
        return this._pictureRequiredText;
    }
}
