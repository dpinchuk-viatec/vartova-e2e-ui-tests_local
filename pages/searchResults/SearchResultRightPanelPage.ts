import { Page, Locator, expect } from "@playwright/test";
import {BodyByFeatureFilter, FaceByFeatureFilter, VehicleFilter} from "../../constants/DataTypes";

export class SearchResultRightPanelPage {
    readonly page: Page;
    private readonly _rightPanel: Locator;
    private readonly _detailsButton: Locator;
    private readonly _geographicLocationButton: Locator;
    private readonly _fullScreenButton: Locator;
    private readonly _editButton: Locator;
    private readonly _facePictureInfoBar: Locator;
    private readonly _facePictureInfoBarItem: Locator;
    private readonly _detailedPictureBar: Locator;
    private readonly _searchResultActionButtonsBlock: Locator;
    private readonly _actionButtonsBlockTargetDetailsButton: Locator;
    private readonly _actionButtonsBlockGeolocationButton: Locator;
    private readonly _actionButtonsBlockPlaybackButton: Locator;
    private readonly _actionButtonsBlockVehiclePathButton: Locator;
    private readonly _actionButtonsBlockVehicleArmingButton: Locator;
    private readonly _actionButtonsBlockSearchByPictureButton: Locator;
    private readonly _infoBarItemCollectLocation: Locator;
    private readonly _infoBarItemCollectTime: Locator;
    private readonly _infoBarItemGender: Locator;
    private readonly _infoBarItemGlasses: Locator;
    private readonly _infoBarItemAgeGroup: Locator;
    private readonly _infoBarItemSmile: Locator;

    private readonly _infoBarBodyByFeaturesItemHairstyle: Locator;
    private readonly _infoBarBodyByFeaturesItemAgeGroup: Locator;
    private readonly _infoBarBodyByFeaturesItemJacketType: Locator;
    private readonly _infoBarBodyByFeaturesItemColorOfJacket: Locator;
    private readonly _infoBarBodyByFeaturesItemTrousersType: Locator;
    private readonly _infoBarBodyByFeaturesItemColorOfTrousers: Locator;
    private readonly _infoBarBodyByFeaturesItemGlasses: Locator;
    private readonly _infoBarBodyByFeaturesItemBag: Locator;

    private readonly _infoBarVehicleSearchItemRegNumber: Locator; //app-vehicle-plate-item
    private readonly _infoBarVehicleSearchItemTime: Locator; //app-view-short-info-item[6]
    private readonly _infoBarVehicleSearchItemCheckpoint: Locator; //app-view-short-info-item[7]
    private readonly _infoBarVehicleSearchItemVehicleBrand: Locator; //app-view-short-info-item[8]
    private readonly _infoBarVehicleSearchItemVehicleSpeed: Locator; //app-view-short-info-item[9]
    private readonly _infoBarVehicleSearchItemVehicleType: Locator; //app-view-short-info-item[10]
    private readonly _infoBarVehicleSearchItemVehicleColor: Locator; //app-view-short-info-item[11]
    private readonly _infoBarVehicleSearchItemPlateColor: Locator; //app-view-short-info-item[12]

    private readonly _detailsPictureImage: Locator;
    private readonly _canvasOfflineOsm: Locator;
    private readonly _canvasOlLayer: Locator;
    private readonly _image: Locator;

    constructor(page: Page) {
        this.page = page;
        this._rightPanel = this.page.locator("xpath=//div[@data-testid='entity-search-result__card--0']");
        this._detailsButton = this._rightPanel.locator("li[data-testid='search-result-entity-details__list-item']").nth(0).locator("a");
        this._geographicLocationButton = this._rightPanel.locator("li[data-testid='search-result-entity-details__list-item--0']").locator("a");
        this._fullScreenButton = this._rightPanel.locator("button[data-testid='search-result-entity-details__button--2']");
        this._editButton = this._rightPanel.locator("button[data-testid='search-result-entity-details__button--1']");
        this._facePictureInfoBar = this._rightPanel.locator(".accordion-body").nth(0);
        this._facePictureInfoBarItem = this._facePictureInfoBar.locator("app-view-short-info-item");
        this._detailedPictureBar = this._rightPanel.locator(".accordion-body").nth(1);

        this._searchResultActionButtonsBlock = this._rightPanel.locator("app-search-result-action-buttons");
        this._actionButtonsBlockTargetDetailsButton = this._searchResultActionButtonsBlock.getByRole("button").locator(".i-vrt-document");
        this._actionButtonsBlockGeolocationButton = this._searchResultActionButtonsBlock.getByRole("button").locator(".i-vrt-round-pin-drop");
        this._actionButtonsBlockPlaybackButton = this._searchResultActionButtonsBlock.getByRole("button").locator(".i-vrt-mdi_play-circle");
        this._actionButtonsBlockVehiclePathButton = this._searchResultActionButtonsBlock.locator("button[data-testid='vehicle-path-action']");
        this._actionButtonsBlockVehicleArmingButton = this._searchResultActionButtonsBlock.locator("button[data-testid='vehicle-arming-action']");
        this._actionButtonsBlockSearchByPictureButton = this._searchResultActionButtonsBlock.getByRole("button").locator(".i-vrt-user-search-filled");

        this._infoBarItemCollectLocation = this._facePictureInfoBarItem.nth(0);
        this._infoBarItemCollectTime = this._facePictureInfoBarItem.nth(1);

        this._infoBarItemGender = this._facePictureInfoBarItem.nth(2);
        this._infoBarItemGlasses = this._facePictureInfoBarItem.nth(3);
        this._infoBarItemAgeGroup = this._facePictureInfoBarItem.nth(4);
        this._infoBarItemSmile = this._facePictureInfoBarItem.nth(5);

        this._infoBarBodyByFeaturesItemHairstyle = this._facePictureInfoBarItem.nth(2);
        this._infoBarBodyByFeaturesItemAgeGroup = this._facePictureInfoBarItem.nth(3);
        this._infoBarBodyByFeaturesItemJacketType = this._facePictureInfoBarItem.nth(4);
        this._infoBarBodyByFeaturesItemColorOfJacket = this._facePictureInfoBarItem.nth(5);
        this._infoBarBodyByFeaturesItemTrousersType = this._facePictureInfoBarItem.nth(6);
        this._infoBarBodyByFeaturesItemColorOfTrousers = this._facePictureInfoBarItem.nth(7);
        this._infoBarBodyByFeaturesItemGlasses = this._facePictureInfoBarItem.nth(8);
        this._infoBarBodyByFeaturesItemBag = this._facePictureInfoBarItem.nth(9);

        this._detailsPictureImage = this._rightPanel.locator("image[data-testid='image-slicer-component__element']");

        this._canvasOfflineOsm = this._rightPanel.locator(".offline_osm").locator("canvas");
        this._canvasOlLayer = this._rightPanel.locator(".ol-layer").locator("canvas");

        this._image = this._rightPanel.locator("image").first();

        this._infoBarVehicleSearchItemRegNumber = this._rightPanel.locator("app-vehicle-plate-item").first();
        this._infoBarVehicleSearchItemTime = this._rightPanel.locator("app-view-short-info-item").nth(0);
        this._infoBarVehicleSearchItemCheckpoint = this._rightPanel.locator("app-view-short-info-item").nth(1);
        this._infoBarVehicleSearchItemVehicleBrand = this._rightPanel.locator("app-view-short-info-item").nth(2);
        this._infoBarVehicleSearchItemVehicleSpeed = this._rightPanel.locator("app-view-short-info-item").nth(3);
        this._infoBarVehicleSearchItemVehicleType = this._rightPanel.locator("app-view-short-info-item").nth(4);
        this._infoBarVehicleSearchItemVehicleColor = this._rightPanel.locator("app-view-short-info-item").nth(5);
        this._infoBarVehicleSearchItemPlateColor = this._rightPanel.locator("app-view-short-info-item").nth(6);
    }

    get rightPanel(): Locator {
        return this._rightPanel;
    }

    get detailsButton(): Locator {
        return this._detailsButton;
    }

    get geographicLocationButton(): Locator {
        return this._geographicLocationButton;
    }

    get fullScreenButton(): Locator {
        return this._fullScreenButton;
    }

    get editButton(): Locator {
        return this._editButton;
    }

    get facePictureInfoBar(): Locator {
        return this._facePictureInfoBar;
    }

    get facePictureInfoBarItem(): Locator {
        return this._facePictureInfoBarItem;
    }

    get detailedPictureBar(): Locator {
        return this._detailedPictureBar;
    }

    get searchResultActionButtonsBlock(): Locator {
        return this._searchResultActionButtonsBlock;
    }

    get actionButtonsBlockTargetDetailsButton(): Locator {
        return this._actionButtonsBlockTargetDetailsButton;
    }

    get actionButtonsBlockGeolocationButton(): Locator {
        return this._actionButtonsBlockGeolocationButton;
    }

    get actionButtonsBlockPlaybackButton(): Locator {
        return this._actionButtonsBlockPlaybackButton;
    }

    get actionButtonsBlockVehiclePathButton(): Locator {
        return this._actionButtonsBlockVehiclePathButton;
    }

    get actionButtonsBlockVehicleArmingButton(): Locator {
        return this._actionButtonsBlockVehicleArmingButton;
    }

    get actionButtonsBlockSearchByPictureButton(): Locator {
        return this._actionButtonsBlockSearchByPictureButton;
    }

    get infoBarItemCollectLocation(): Locator {
        return this._infoBarItemCollectLocation;
    }

    get infoBarItemCollectTime(): Locator {
        return this._infoBarItemCollectTime;
    }

    get infoBarItemGender(): Locator {
        return this._infoBarItemGender;
    }

    get infoBarItemGlasses(): Locator {
        return this._infoBarItemGlasses;
    }

    get infoBarItemAgeGroup(): Locator {
        return this._infoBarItemAgeGroup;
    }

    get infoBarItemSmile(): Locator {
        return this._infoBarItemSmile;
    }

    get infoBarBodyByFeaturesItemHairstyle(): Locator {
        return this._infoBarBodyByFeaturesItemHairstyle;
    }

    get infoBarBodyByFeaturesItemAgeGroup(): Locator {
        return this._infoBarBodyByFeaturesItemAgeGroup;
    }

    get infoBarBodyByFeaturesItemJacketType(): Locator {
        return this._infoBarBodyByFeaturesItemJacketType;
    }

    get infoBarBodyByFeaturesItemColorOfJacket(): Locator {
        return this._infoBarBodyByFeaturesItemColorOfJacket;
    }

    get infoBarBodyByFeaturesItemTrousersType(): Locator {
        return this._infoBarBodyByFeaturesItemTrousersType;
    }

    get infoBarBodyByFeaturesItemColorOfTrousers(): Locator {
        return this._infoBarBodyByFeaturesItemColorOfTrousers;
    }

    get infoBarBodyByFeaturesItemBag(): Locator {
        return this._infoBarBodyByFeaturesItemBag;
    }

    get infoBarVehicleSearchItemRegNumber(): Locator {
        return this._infoBarVehicleSearchItemRegNumber;
    }

    get infoBarVehicleSearchItemTime(): Locator {
        return this._infoBarVehicleSearchItemTime;
    }

    get infoBarVehicleSearchItemCheckpoint(): Locator {
        return this._infoBarVehicleSearchItemCheckpoint;
    }

    get infoBarVehicleSearchItemVehicleBrand(): Locator {
        return this._infoBarVehicleSearchItemVehicleBrand;
    }

    get infoBarVehicleSearchItemVehicleSpeed(): Locator {
        return this._infoBarVehicleSearchItemVehicleSpeed;
    }

    get infoBarVehicleSearchItemVehicleType(): Locator {
        return this._infoBarVehicleSearchItemVehicleType;
    }

    get infoBarVehicleSearchItemVehicleColor(): Locator {
        return this._infoBarVehicleSearchItemVehicleColor;
    }

    get infoBarVehicleSearchItemPlateColor(): Locator {
        return this._infoBarVehicleSearchItemPlateColor;
    }

    get detailsPictureImage(): Locator {
        return this._detailsPictureImage;
    }

    get canvasOfflineOsm(): Locator {
        return this._canvasOfflineOsm;
    }

    get canvasOlLayer(): Locator {
        return this._canvasOlLayer;
    }

    get image(): Locator {
        return this._image;
    }

    get infoBarBodyByFeaturesItemGlasses(): Locator {
        return this._infoBarBodyByFeaturesItemGlasses;
    }

    async getImageUrl() {
        return this.image.getAttribute("href");
    }

    async clickOnDetailsButton() {
        await this.detailsButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGeographicLocationButton() {
        await this.geographicLocationButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnFullScreenButton() {
        await this.fullScreenButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnEditButton() {
        await this.editButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyFaceByFeatureDetailsPanelContent(filter: FaceByFeatureFilter) {
        const collectLocationText: string | null = await this.infoBarItemCollectLocation.textContent();
        const collectTimeText: string | null = await this.infoBarItemCollectTime.textContent();
        const genderText: string | null = await this.infoBarItemGender.textContent();
        const glassesText: string | null = await this.infoBarItemGlasses.textContent();
        const ageGroupText: string | null = await this.infoBarItemAgeGroup.textContent();
        const smileText: string | null = await this.infoBarItemSmile.textContent();

        expect(collectLocationText).toContain(filter.collectLocation);
        expect(collectTimeText).toContain(filter.collectTime);
        expect(genderText).toContain(filter.gender);
        expect(glassesText).toContain(filter.glasses);
        expect(ageGroupText).toContain(filter.age);
        expect(smileText).toContain(filter.smile);

        await expect(this.detailsPictureImage).toBeVisible();
        await expect(this.detailsPictureImage).toHaveAttribute("width");
        await expect(this.detailsPictureImage).toHaveAttribute("height");

        await expect(this.searchResultActionButtonsBlock).toBeVisible();
        await expect(this.actionButtonsBlockTargetDetailsButton).toBeVisible();
        await expect(this.actionButtonsBlockGeolocationButton).toBeVisible();
        await expect(this.actionButtonsBlockPlaybackButton).toBeVisible();
        await expect(this.actionButtonsBlockSearchByPictureButton).toBeVisible();

        await expect(this.fullScreenButton).toBeVisible();
    }

    async verifyBodyByFeatureDetailsPanelContent(filter: BodyByFeatureFilter) {
        const collectLocationText: string | null = await this.infoBarItemCollectLocation.textContent();
        const collectTimeText: string | null = await this.infoBarItemCollectTime.textContent();
        const ageGroup: string | null = await this.infoBarBodyByFeaturesItemAgeGroup.textContent();
        const jacketType: string | null = await this.infoBarBodyByFeaturesItemJacketType.textContent();
        const trousersType: string | null = await this.infoBarBodyByFeaturesItemTrousersType.textContent();
        const glasses: string | null = await this.infoBarBodyByFeaturesItemGlasses.textContent();
        const bag: string | null = await this.infoBarBodyByFeaturesItemBag.textContent();

        expect(collectLocationText).toContain(String(filter.CollectLocation).trim());
        expect(collectTimeText).toContain(String(filter.CollectTime).trim());
        expect(ageGroup).toContain(filter.AgeGroup.trim());
        expect(jacketType).toContain(filter.JacketType.trim());
        expect(trousersType).toContain(filter.TrousersType.trim());
        expect(glasses).toContain(filter.Glasses.trim());
        expect(bag).toContain(filter.Bag.trim());

        await expect(this.detailsPictureImage).toBeVisible();
        await expect(this.detailsPictureImage).toHaveAttribute("width");
        await expect(this.detailsPictureImage).toHaveAttribute("height");

        await expect(this.searchResultActionButtonsBlock).toBeVisible();
        await expect(this.actionButtonsBlockTargetDetailsButton).toBeVisible();
        await expect(this.actionButtonsBlockGeolocationButton).toBeVisible();
        await expect(this.actionButtonsBlockPlaybackButton).toBeVisible();
        await expect(this.actionButtonsBlockSearchByPictureButton).toBeVisible();

        await expect(this.fullScreenButton).toBeVisible();
    }

    async verifyVehicleSearchDetailsPanelContent(filter: VehicleFilter) {
        const regNumber: string | null = await this.infoBarVehicleSearchItemRegNumber.textContent();
        const time: string | null = await this.infoBarVehicleSearchItemTime.textContent();
        const location: string | null = await this.infoBarVehicleSearchItemCheckpoint.textContent();
        const brand: string | null = await this.infoBarVehicleSearchItemVehicleBrand.textContent();
        const speed: string | null = await this.infoBarVehicleSearchItemVehicleSpeed.textContent();
        const type: string | null = await this.infoBarVehicleSearchItemVehicleType.textContent();
        const color: string | null = await this.infoBarVehicleSearchItemVehicleColor.textContent();
        const plateColor: string | null = await this.infoBarVehicleSearchItemPlateColor.textContent();

        expect(regNumber).toContain(filter.RegNumber);
        expect(time).toContain(filter.CollectTime);
        expect(location).toContain(filter.Checkpoint);

        await expect(this.detailsPictureImage).toBeVisible();
        await expect(this.detailsPictureImage).toHaveAttribute("width");
        await expect(this.detailsPictureImage).toHaveAttribute("height");

        await expect(this.searchResultActionButtonsBlock).toBeVisible();
        await expect(this.actionButtonsBlockTargetDetailsButton).toBeVisible();
        await expect(this.actionButtonsBlockGeolocationButton).toBeVisible();
        await expect(this.actionButtonsBlockPlaybackButton).toBeVisible();
        await expect(this.actionButtonsBlockVehiclePathButton).toBeVisible();
        await expect(this.actionButtonsBlockVehicleArmingButton).toBeVisible();

        await expect(this.editButton).toBeVisible();
    }

    async verifyGeographicLocationPanelContent() {
        await expect(this.canvasOfflineOsm).toBeVisible();
        await expect(this.canvasOlLayer).toBeVisible();

        await expect(this.searchResultActionButtonsBlock).toBeVisible();
        await expect(this.actionButtonsBlockTargetDetailsButton).toBeVisible();
        await expect(this.actionButtonsBlockPlaybackButton).toBeVisible();
        await expect(this.actionButtonsBlockVehiclePathButton).toBeVisible();
        await expect(this.actionButtonsBlockVehicleArmingButton).toBeVisible();

        await expect(this.fullScreenButton).toBeVisible();
    }
}