import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SelectCamerasPage extends BasePage{
    readonly page: Page;
    private readonly _modalWindow: Locator;
    private readonly _modalWindowConfirmButton: Locator;
    private readonly _modalWindowCancelButton: Locator;
    private readonly _leftPanel: Locator;
    private readonly _rightPanel: Locator;
    private readonly _navPillsList: Locator;
    private readonly _navPillsListTreeItem: Locator;
    private readonly _navPillsListMapItem: Locator;
    private readonly _leftPanelSearchPlaceField: Locator;
    private readonly _leftPanelTreeNodeContent: Locator;
    private readonly _rightPanelSearchPlaceField: Locator;
    private readonly _rightPanelClearButton: Locator;
    private readonly _treeItem: Locator;
    private readonly _mainTreeItem: Locator;
    private readonly _selectedList: Locator;
    private readonly _clearButton: Locator;
    private readonly _confirmButton: Locator;
    private readonly _cancelButton: Locator;
    private readonly _moveNodesToRightButton: Locator;
    private readonly _moveNodesToLeftButton: Locator;
    private readonly _selectAllCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this._modalWindow = this.page.locator(".modal-dialog");
        this._modalWindowConfirmButton = this._modalWindow.locator("button[aria-label='Confirm Button']");
        this._modalWindowCancelButton = this._modalWindow.locator("button[aria-label='Cancel Button']");
        this._leftPanel = this._modalWindow.locator("#left-panel");
        this._rightPanel = this._modalWindow.locator("#right-panel");
        this._navPillsList = this._leftPanel.locator(".nav-pills");
        this._navPillsListTreeItem = this._navPillsList.locator("li").nth(0);
        this._navPillsListMapItem = this._navPillsList.locator("li").nth(1);
        this._leftPanelSearchPlaceField = this._leftPanel.locator("input");
        this._leftPanelTreeNodeContent = this._leftPanel.locator("li").locator(".tree-node-container");
        this._rightPanelSearchPlaceField = this._rightPanel.locator("input");
        this._rightPanelClearButton = this._rightPanel.locator("button[aria-label='Clear Button']");
        this._treeItem = this._rightPanel.locator("xpath=//*[@role='treeitem']");
        this._mainTreeItem = this._rightPanel.locator("xpath=//*[contains(@id, 'left-panel')]//ul//div//button");
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

    get modalWindowConfirmButton(): Locator {
        return this._modalWindowConfirmButton;
    }

    get modalWindowCancelButton(): Locator {
        return this._modalWindowCancelButton;
    }

    get leftPanel(): Locator {
        return this._leftPanel;
    }

    get rightPanel(): Locator {
        return this._rightPanel;
    }

    get navPillsList(): Locator {
        return this._navPillsList;
    }

    get navPillsListTreeItem(): Locator {
        return this._navPillsListTreeItem;
    }

    get navPillsListMapItem(): Locator {
        return this._navPillsListMapItem;
    }

    get leftPanelSearchPlaceField(): Locator {
        return this._leftPanelSearchPlaceField;
    }

    get leftPanelTreeNodeContent(): Locator {
        return this._leftPanelTreeNodeContent;
    }

    get rightPanelSearchPlaceField(): Locator {
        return this._rightPanelSearchPlaceField;
    }

    get rightPanelClearButton(): Locator {
        return this._rightPanelClearButton;
    }

    get treeItem(): Locator {
        return this._treeItem;
    }

    get mainTreeItem(): Locator {
        return this._mainTreeItem;
    }

    get selectedList(): Locator {
        return this._selectedList;
    }

    get clearButton(): Locator {
        return this._clearButton;
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

    get moveNodesToLeftButton(): Locator {
        return this._moveNodesToLeftButton;
    }

    get selectAllCheckbox(): Locator {
        return this._selectAllCheckbox;
    }

    async clickOnClearButton() {
        await this.clearButton.click();
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

    private getTreeNodeByName(nodeName: string) {
        return this.page.locator(`//*[contains(@id, 'left-panel')]//ul//div//*[contains(text(), '${nodeName}')]`)
    }

    private async clickOnCheckboxByNodeName(nodeName: string) {
        await this.page.locator(`//*[contains(text(), '${nodeName}')]//ancestor-or-self::button//*[contains(@class, 'form-check-input')]`).click();
    }

    async getAllTreeItems() {
        return await this.treeItem.all()
    }

    async doubleClickOnMainTreeItem() {
        await this.leftPanel.getByRole("button", { name: "Main" }).dblclick();
        await this.page.waitForTimeout(1000);
    }

    async verifySelectedCamerasModalWindow() {

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

    async moveTreeNodeToRightPanelByMovementButton(nodeName: string) {
        await this.clickOnCheckboxByNodeName(nodeName);
        await this.moveNodesToRightButton.click();
        await this.page.waitForTimeout(1000);
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
}