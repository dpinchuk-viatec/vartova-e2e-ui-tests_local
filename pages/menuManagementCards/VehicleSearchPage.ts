import { Page, Locator, expect } from "@playwright/test";
import { SearchPage } from "./SearchPage";

export class VehicleSearchPage extends SearchPage {
    private readonly _modalWindow: Locator;
    private readonly _showMoreButton: Locator;
    private readonly _choiceScope: Locator;
    private readonly _selectedList: Locator;
    private readonly _clearButton: Locator;
    private readonly _confirmButton: Locator;
    private readonly _cancelButton: Locator;
    private readonly _moveNodesToRightButton: Locator;
    private readonly _moveNodesToLeftButton: Locator;
    private readonly _selectAllCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this._modalWindow = this.page.locator(".modal-dialog");
        this._showMoreButton = this.page.locator(".filter-buttons").locator("button").nth(0);
        this._choiceScope = this.page.locator("ng-select[data-testid='vehicle-filter__select--0']").first();
        this._selectedList = this.page.locator("#selected-list");
        this._clearButton = this.page.getByRole("button", { name: " Clear " });
        this._confirmButton = this.page.getByRole("button", { name: " Confirm " });
        this._cancelButton = this.page.getByRole("button", { name: "Cancel" });
        this._moveNodesToRightButton = this._modalWindow.locator("button[aria-label='Set Right Button']");
        this._moveNodesToLeftButton = this._modalWindow.locator("button[aria-label='Set Left Button']");
        this._selectAllCheckbox = this._modalWindow.locator("#select-all");
    }

    get modalWindow(): Locator {
        return this._modalWindow;
    }

    get showMoreButton(): Locator {
        return this._showMoreButton;
    }

    get choiceScope(): Locator {
        return this._choiceScope;
    }

    get selectedList(): Locator {
        return this._selectedList;
    }

    get confirmButton(): Locator {
        return this._confirmButton;
    }

    get cancelButton(): Locator {
        return this._cancelButton;
    }

    get moveNodesToRightButton(): Locator {
        return this._moveNodesToRightButton;
    }

    get selectAllCheckbox(): Locator {
        return this._selectAllCheckbox;
    }

    get moveNodesToLeftButton(): Locator {
        return this._moveNodesToLeftButton;
    }

    get clearButton(): Locator {
        return this._clearButton;
    }

    async clickOnShowMoreButton() {
        await this.showMoreButton.click();
    }

    async clickOnChoiceScope() {
        await this.choiceScope.click();
    }

    private getTreeNodeByName(nodeName: string) {
        return this.page.locator(`//*[contains(@id, 'left-panel')]//ul//div//*[contains(text(), '${nodeName}')]`)
    }

    private async clickOnCheckboxByNodeName(nodeName: string) {
        await this.page.locator(`//*[contains(text(), '${nodeName}')]//ancestor-or-self::button//*[contains(@class, 'form-check-input')]`).click();
    }

    async moveTreeNodeToRightPanelByMovementButton(nodeName: string) {
        await this.clickOnCheckboxByNodeName(nodeName);
        await this.moveNodesToRightButton.click();
        await this.page.waitForTimeout(1000);
    }

    async moveTreeNodeToSelectedPanelByDoubleClick(nodeName: string) {
        await this.getTreeNodeByName(nodeName).dblclick();
        await this.page.waitForTimeout(1000);
    }

    async verifySelectedListContainsData(isContains: boolean) {
        const selectedListItems: Locator[] = await this.selectedList.locator("li").all();

        if (isContains) {
            expect(selectedListItems.length).toBeGreaterThan(0);
        } else {
            expect(selectedListItems.length).toBe(0);
        }
    }

    async moveTreeNodeToLeftPanelByMovementButton(nodeName: string) {
        if (nodeName === "Select All") {
            await this.selectAllCheckbox.click();
            await this.page.waitForTimeout(1000);
        } else {
            await this.page.locator(`xpath=//*[@id='selected-list']//li//label//span[text()=' ${nodeName} ']`).click();
        }
        await this.moveNodesToLeftButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCancelButton() {
        await this.cancelButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnClearButton() {
        await this.clearButton.click();
        await this.page.waitForTimeout(1000);
    }
}