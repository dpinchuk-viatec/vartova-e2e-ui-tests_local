import { Page, Locator, expect } from "@playwright/test";
import {BodyByFeatureFilter, FaceByFeatureFilter, VehicleFilter} from "../../constants/DataTypes";

export class TableItemPage {
    readonly page: Page;
    private readonly _tableItem: Locator;
    private readonly _firstTableItem: Locator;

    private readonly _firstTableItemNumberColumn: Locator;
    private readonly _firstTableItemImageColumn: Locator;
    private readonly _firstTableItemCreatedAtColumn: Locator;
    private readonly _firstTableItemLocationColumn: Locator;
    private readonly _firstTableItemGenderColumn: Locator;
    private readonly _firstTableItemAgeGroupColumn: Locator;
    private readonly _firstTableItemGlassesColumn: Locator;
    private readonly _firstTableItemSmileColumn: Locator;
    private readonly _firstTableItemMaskColumn: Locator;
    private readonly _firstTableItemActionBlock: Locator;
    private readonly _searchResultActionButtonsBlock: Locator;

    private readonly _firstBodyByFeatureTableItem: Locator;
    private readonly _firstBodyByFeatureTableItemNumberColumn: Locator;
    private readonly _firstBodyByFeatureTableItemImageColumn: Locator;
    private readonly _firstBodyByFeatureTableItemCreatedAtColumn: Locator;
    private readonly _firstBodyByFeatureTableItemLocationColumn: Locator;
    private readonly _firstBodyByFeatureTableItemAgeGroupColumn: Locator;
    private readonly _firstBodyByFeatureTableItemJacketTypeColumn: Locator;
    private readonly _firstBodyByFeatureTableItemTrousersTypeColumn: Locator;
    private readonly _firstBodyByFeatureTableItemBagColumn: Locator;
    private readonly _firstBodyByFeatureTableItemGlassesColumn: Locator;

    private readonly _firstVehicleSearchTableItem: Locator;
    private readonly _firstVehicleSearchTableItemPhotoColumn: Locator;
    private readonly _firstVehicleSearchTableItemNumberPlateColumn: Locator;
    private readonly _firstVehicleSearchTableItemTimeColumn: Locator;
    private readonly _firstVehicleSearchTableItemLocationColumn: Locator;
    private readonly _firstVehicleSearchTableItemLaneColumn: Locator;
    private readonly _firstVehicleSearchTableItemActionColumn: Locator;

    constructor(page: Page) {
        this.page = page;
        this._tableItem = this.page.locator("tr[data-testid='table-view-search-result__element']");
        this._firstTableItem = this._tableItem.nth(0);

        this._firstTableItemNumberColumn = this._firstTableItem.locator("td").nth(0);
        this._firstTableItemImageColumn = this._firstTableItem.locator("td").nth(1);
        this._firstTableItemCreatedAtColumn = this._firstTableItem.locator("td").nth(2);
        this._firstTableItemLocationColumn = this._firstTableItem.locator("td").nth(3);
        this._firstTableItemGenderColumn = this._firstTableItem.locator("td").nth(4);
        this._firstTableItemAgeGroupColumn = this._firstTableItem.locator("td").nth(5);
        this._firstTableItemGlassesColumn = this._firstTableItem.locator("td").nth(6);
        this._firstTableItemSmileColumn = this._firstTableItem.locator("td").nth(7);
        this._firstTableItemMaskColumn = this._firstTableItem.locator("td").nth(8);

        this._firstBodyByFeatureTableItemNumberColumn = this._firstTableItem.locator("td").nth(0);
        this._firstBodyByFeatureTableItemImageColumn = this._firstTableItem.locator("td").nth(1);
        this._firstBodyByFeatureTableItemCreatedAtColumn = this._firstTableItem.locator("td").nth(2);
        this._firstBodyByFeatureTableItemLocationColumn = this._firstTableItem.locator("td").nth(3);
        this._firstBodyByFeatureTableItemAgeGroupColumn = this._firstTableItem.locator("td").nth(4);
        this._firstBodyByFeatureTableItemJacketTypeColumn = this._firstTableItem.locator("td").nth(5);
        this._firstBodyByFeatureTableItemTrousersTypeColumn = this._firstTableItem.locator("td").nth(6);
        this._firstBodyByFeatureTableItemBagColumn = this._firstTableItem.locator("td").nth(7);
        this._firstBodyByFeatureTableItemGlassesColumn = this._firstTableItem.locator("td").nth(8);

        this._firstTableItemActionBlock = this._firstTableItem.locator("td").nth(9);
        this._searchResultActionButtonsBlock = this._firstTableItem.locator("app-search-result-action-buttons");

        this._firstVehicleSearchTableItem = this._tableItem.nth(0);
        this._firstBodyByFeatureTableItemNumberColumn = this._firstTableItem.locator("td").nth(0);
        this._firstVehicleSearchTableItemPhotoColumn = this._firstTableItem.locator("td").nth(1);
        this._firstVehicleSearchTableItemNumberPlateColumn = this._firstTableItem.locator("td").nth(2);
        this._firstVehicleSearchTableItemTimeColumn = this._firstTableItem.locator("td").nth(3);
        this._firstVehicleSearchTableItemLocationColumn = this._firstTableItem.locator("td").nth(4);
        this._firstVehicleSearchTableItemLaneColumn = this._firstTableItem.locator("td").nth(5);
        this._firstVehicleSearchTableItemActionColumn = this._firstTableItem.locator("td").nth(6);
    }

    get tableItem(): Locator {
        return this._tableItem;
    }

    get firstTableItem(): Locator {
        return this._firstTableItem;
    }

    get firstTableItemNumberColumn(): Locator {
        return this._firstTableItemNumberColumn;
    }

    get firstTableItemImageColumn(): Locator {
        return this._firstTableItemImageColumn;
    }

    get firstTableItemCreatedAtColumn(): Locator {
        return this._firstTableItemCreatedAtColumn;
    }

    get firstTableItemLocationColumn(): Locator {
        return this._firstTableItemLocationColumn;
    }

    get firstTableItemGenderColumn(): Locator {
        return this._firstTableItemGenderColumn;
    }

    get firstTableItemAgeGroupColumn(): Locator {
        return this._firstTableItemAgeGroupColumn;
    }

    get firstTableItemGlassesColumn(): Locator {
        return this._firstTableItemGlassesColumn;
    }

    get firstTableItemSmileColumn(): Locator {
        return this._firstTableItemSmileColumn;
    }

    get firstTableItemMaskColumn(): Locator {
        return this._firstTableItemMaskColumn;
    }

    get firstTableItemActionBlock(): Locator {
        return this._firstTableItemActionBlock;
    }

    get searchResultActionButtonsBlock(): Locator {
        return this._searchResultActionButtonsBlock;
    }

    get firstBodyByFeatureTableItem(): Locator {
        return this._firstBodyByFeatureTableItem;
    }

    get firstBodyByFeatureTableItemNumberColumn(): Locator {
        return this._firstBodyByFeatureTableItemNumberColumn;
    }

    get firstBodyByFeatureTableItemImageColumn(): Locator {
        return this._firstBodyByFeatureTableItemImageColumn;
    }

    get firstBodyByFeatureTableItemCreatedAtColumn(): Locator {
        return this._firstBodyByFeatureTableItemCreatedAtColumn;
    }

    get firstBodyByFeatureTableItemLocationColumn(): Locator {
        return this._firstBodyByFeatureTableItemLocationColumn;
    }

    get firstBodyByFeatureTableItemAgeGroupColumn(): Locator {
        return this._firstBodyByFeatureTableItemAgeGroupColumn;
    }

    get firstBodyByFeatureTableItemJacketTypeColumn(): Locator {
        return this._firstBodyByFeatureTableItemJacketTypeColumn;
    }

    get firstBodyByFeatureTableItemTrousersTypeColumn(): Locator {
        return this._firstBodyByFeatureTableItemTrousersTypeColumn;
    }

    get firstBodyByFeatureTableItemBagColumn(): Locator {
        return this._firstBodyByFeatureTableItemBagColumn;
    }

    get firstBodyByFeatureTableItemGlassesColumn(): Locator {
        return this._firstBodyByFeatureTableItemGlassesColumn;
    }

    get firstVehicleSearchTableItem(): Locator {
        return this._firstVehicleSearchTableItem;
    }

    get firstVehicleSearchTableItemPhotoColumn(): Locator {
        return this._firstVehicleSearchTableItemPhotoColumn;
    }

    get firstVehicleSearchTableItemNumberPlateColumn(): Locator {
        return this._firstVehicleSearchTableItemNumberPlateColumn;
    }

    get firstVehicleSearchTableItemTimeColumn(): Locator {
        return this._firstVehicleSearchTableItemTimeColumn;
    }

    get firstVehicleSearchTableItemLocationColumn(): Locator {
        return this._firstVehicleSearchTableItemLocationColumn;
    }

    get firstVehicleSearchTableItemLaneColumn(): Locator {
        return this._firstVehicleSearchTableItemLaneColumn;
    }

    get firstVehicleSearchTableItemActionColumn(): Locator {
        return this._firstVehicleSearchTableItemActionColumn;
    }

    async verifyFaceByFeatureFirstTableModeItem(filter: FaceByFeatureFilter) {
        await this.page.waitForLoadState("domcontentloaded");

        await expect(this.firstTableItemNumberColumn).toHaveText("1");
        await expect(this.firstTableItemImageColumn).toBeVisible();
        await expect(this.firstTableItemCreatedAtColumn).toBeVisible();
        await expect(this.firstTableItemLocationColumn).toBeVisible();
        await expect(this.firstTableItemGenderColumn).toHaveText(filter.gender);
        await expect(this.firstTableItemAgeGroupColumn).toHaveText(filter.age);
        await expect(this.firstTableItemGlassesColumn).toHaveText(filter.glasses);
        await expect(this.firstTableItemSmileColumn).toHaveText(filter.smile);
        await expect(this.firstTableItemMaskColumn).toHaveText(filter.mask);
        await expect(this.firstTableItemActionBlock).toBeVisible();
        await expect(this.searchResultActionButtonsBlock).toBeVisible();
    }

    async verifyBodyByFeatureFirstTableModeItem(filter: BodyByFeatureFilter) {
        await this.page.waitForLoadState("domcontentloaded");

        await expect(this.firstBodyByFeatureTableItemNumberColumn).toHaveText("1");
        await expect(this.firstBodyByFeatureTableItemImageColumn).toBeVisible();
        await expect(this.firstBodyByFeatureTableItemCreatedAtColumn).toHaveText(filter.CollectTime);
        await expect(this.firstBodyByFeatureTableItemLocationColumn).toHaveText(filter.CollectLocation);
        await expect(this.firstBodyByFeatureTableItemAgeGroupColumn).toBeVisible();
        await expect(this.firstBodyByFeatureTableItemJacketTypeColumn).toBeVisible();
        await expect(this.firstBodyByFeatureTableItemTrousersTypeColumn).toBeVisible();
        await expect(this.firstBodyByFeatureTableItemBagColumn).toBeVisible();
        await expect(this.firstBodyByFeatureTableItemGlassesColumn).toBeVisible();
        await expect(this.firstTableItemActionBlock).toBeVisible();
        await expect(this.searchResultActionButtonsBlock).toBeVisible();
    }

    async verifyVehicleSearchFirstTableModeItem(filter: VehicleFilter) {
        await this.page.waitForLoadState("domcontentloaded");

        await expect(this.firstBodyByFeatureTableItemNumberColumn).toHaveText("1");
        await expect(this.firstVehicleSearchTableItemPhotoColumn).toBeVisible();
        await expect(this.firstVehicleSearchTableItemNumberPlateColumn).toBeVisible();
        await expect(this.firstVehicleSearchTableItemTimeColumn).toBeVisible();
        await expect(this.firstVehicleSearchTableItemLocationColumn).toBeVisible();
        await expect(this.firstVehicleSearchTableItemLaneColumn).toBeVisible();
        await expect(this.firstVehicleSearchTableItemActionColumn).toBeVisible();
    }

    async getBodyByFeatureFilterData() {
        const actualFilter: BodyByFeatureFilter = {};

        actualFilter.CollectTime = await this.firstBodyByFeatureTableItemCreatedAtColumn.textContent();
        actualFilter.CollectLocation = await this.firstBodyByFeatureTableItemLocationColumn.textContent();
        actualFilter.AgeGroup = await this.firstBodyByFeatureTableItemAgeGroupColumn.textContent();
        actualFilter.JacketType = await this.firstBodyByFeatureTableItemJacketTypeColumn.textContent();
        actualFilter.TrousersType = await this.firstBodyByFeatureTableItemTrousersTypeColumn.textContent();
        actualFilter.Bag = await this.firstBodyByFeatureTableItemBagColumn.textContent();
        actualFilter.Glasses = await this.firstBodyByFeatureTableItemGlassesColumn.textContent();

        return actualFilter;
    }

    async getVehicleSearchFilterData() {
        const actualFilter: VehicleFilter = {};

        actualFilter.RegNumber = await this.firstVehicleSearchTableItemNumberPlateColumn.textContent();
        actualFilter.CollectTime = await this.firstVehicleSearchTableItemTimeColumn.textContent();
        actualFilter.Checkpoint = await this.firstVehicleSearchTableItemLocationColumn.textContent();

        return actualFilter;
    }

    async getFirstVehicleRegistryNumber() {
        const regNumber = await this.firstVehicleSearchTableItemNumberPlateColumn.textContent();
        return regNumber;
    }
}