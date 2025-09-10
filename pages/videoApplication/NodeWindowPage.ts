import { Page, Locator, expect } from "@playwright/test";

export class NodeWindowPage {
    readonly page: Page;
    private readonly _nodeWindow: Locator;
    private readonly _editCoordinatesButton: Locator;
    private readonly _deleteCoordinatesButton: Locator;
    private readonly _closeWindowButton: Locator;
    private readonly _liveViewButton: Locator;
    private readonly _playbackButton: Locator;
    private readonly _nearbyButton: Locator;
    private readonly _tabList: Locator;
    private readonly _basicInformationListItem: Locator;
    private readonly _fieldOfViewListItem: Locator;
    private readonly _capabilitiesListItem: Locator;
    private readonly _fieldOfViewListItemEditButton: Locator;
    private readonly _tabPanelLeft: Locator;
    private readonly _tabPanelRight: Locator;
    private readonly _robotButton: Locator;
    private readonly _robotCh01Button: Locator;

    private readonly _capabilitiesListItemIOCapabilityButton: Locator;
    private readonly _capabilitiesListItemFoVEventCapabilityButton: Locator;
    private readonly _capabilitiesListItemVehicleComparisonCapabilityButton: Locator;
    private readonly _capabilitiesListItemFoVCapabilityButton: Locator;
    private readonly _capabilitiesListItemVehicleCaptureCapabilityButton: Locator;
    private readonly _capabilitiesListItemVehicleRecognitionCapabilityButton: Locator;
    private readonly _capabilitiesListItemTrafficStatisticsCapabilityButton: Locator;
    private readonly _capabilitiesListItemIntrusionAlarmCapabilitySecurityControlPanelButton: Locator;
    private readonly _capabilitiesListItemVideoCapabilityButton: Locator;
    private readonly _capabilitiesListItemPTZCapabilityButton: Locator;
    private readonly _capabilitiesListItemSmartLinkageCapabilityButton: Locator;
    private readonly _capabilitiesListItemAutoTrackCapabilityButton: Locator;
    private readonly _capabilitiesListItem360PanoramicCameraCapabilityButton: Locator;
    private readonly _capabilitiesListItemPanoramicPTZCameraCapabilityButton: Locator;
    private readonly _capabilitiesListItemThermalImagingCapabilityButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._nodeWindow = this.page.locator("app-e-map-camera-popup");
        this._editCoordinatesButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button']").nth(0);
        this._deleteCoordinatesButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button']").nth(1);
        this._closeWindowButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button']").nth(2);
        this._liveViewButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button--0']").nth(0);
        this._playbackButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button--0']").nth(1);
        this._nearbyButton = this._nodeWindow.locator("button[data-testid='e-map-camera-popup__button--0']").nth(2);
        this._tabList = this._nodeWindow.locator("ul[data-testid='e-map-camera-popup__list']");
        this._basicInformationListItem = this._nodeWindow.locator("li[data-testid='e-map-camera-popup__list-item']");
        this._fieldOfViewListItem = this._nodeWindow.locator("li[data-testid='e-map-camera-popup__list-item--0']");
        this._capabilitiesListItem = this._nodeWindow.locator("li[data-testid='e-map-camera-popup__list-item--1']");
        this._fieldOfViewListItemEditButton = this._nodeWindow.getByRole("button", { name: " Edit " });
        this._robotButton = this.page.locator("button[aria-label='Toggle Robot']");
        this._robotCh01Button = this.page.locator("button[aria-label='Node Robot - Ch 01']");

        this._capabilitiesListItemIOCapabilityButton = this._nodeWindow.getByRole("button", { name: " IO Capability " });
        this._capabilitiesListItemFoVEventCapabilityButton = this._nodeWindow.getByRole("button", { name: " FoV Event Capability " });
        this._capabilitiesListItemVehicleComparisonCapabilityButton = this._nodeWindow.getByRole("button", { name: " Vehicle Comparison Capability " });
        this._capabilitiesListItemFoVCapabilityButton = this._nodeWindow.getByRole("button", { name: " FoV Capability " });
        this._capabilitiesListItemVehicleCaptureCapabilityButton = this._nodeWindow.getByRole("button", { name: " Vehicle Capture Capability " });
        this._capabilitiesListItemVehicleRecognitionCapabilityButton = this._nodeWindow.getByRole("button", { name: " Vehicle Recognition Capability " });
        this._capabilitiesListItemTrafficStatisticsCapabilityButton = this._nodeWindow.getByRole("button", { name: " Traffic Statistics Capability " });
        this._capabilitiesListItemIntrusionAlarmCapabilitySecurityControlPanelButton = this._nodeWindow.getByRole("button", { name: " Intrusion Alarm Capability (Security Control Panel) " });
        this._capabilitiesListItemVideoCapabilityButton = this._nodeWindow.getByRole("button", { name: " Video Capability " });
        this._capabilitiesListItemPTZCapabilityButton = this._nodeWindow.getByRole("button", { name: " PTZ Capability " });
        this._capabilitiesListItemSmartLinkageCapabilityButton = this._nodeWindow.getByRole("button", { name: " Smart Linkage Capability " });
        this._capabilitiesListItemAutoTrackCapabilityButton = this._nodeWindow.getByRole("button", { name: " Auto Track Capability " });
        this._capabilitiesListItem360PanoramicCameraCapabilityButton = this._nodeWindow.getByRole("button", { name: " 360° Panoramic Camera Capability " });
        this._capabilitiesListItemPanoramicPTZCameraCapabilityButton = this._nodeWindow.getByRole("button", { name: " Panoramic PTZ Camera Capability " });
        this._capabilitiesListItemThermalImagingCapabilityButton = this._nodeWindow.getByRole("button", { name: " Thermal Imaging Capability " });

        this._tabPanelLeft = this.page.locator(".tab-pane").nth(0);
        this._tabPanelRight = this.page.locator(".tab-pane").nth(1);
    }

    get fullNodeWindow(): Locator {
        return this._nodeWindow;
    }

    get editCoordinatesButton(): Locator {
        return this._editCoordinatesButton;
    }

    get deleteCoordinatesButton(): Locator {
        return this._deleteCoordinatesButton;
    }

    get closeWindowButton(): Locator {
        return this._closeWindowButton;
    }

    get liveViewButton(): Locator {
        return this._liveViewButton;
    }

    get playbackButton(): Locator {
        return this._playbackButton;
    }

    get nearbyButton(): Locator {
        return this._nearbyButton;
    }

    get tabList(): Locator {
        return this._tabList;
    }

    get basicInformationListItem(): Locator {
        return this._basicInformationListItem;
    }

    get fieldOfViewListItem(): Locator {
        return this._fieldOfViewListItem;
    }

    get capabilitiesListItem(): Locator {
        return this._capabilitiesListItem;
    }

    get fieldOfViewListItemEditButton(): Locator {
        return this._fieldOfViewListItemEditButton;
    }

    get capabilitiesListItemIOCapabilityButton(): Locator {
        return this._capabilitiesListItemIOCapabilityButton;
    }

    get capabilitiesListItemFoVEventCapabilityButton(): Locator {
        return this._capabilitiesListItemFoVEventCapabilityButton;
    }

    get capabilitiesListItemVehicleComparisonCapabilityButton(): Locator {
        return this._capabilitiesListItemVehicleComparisonCapabilityButton;
    }

    get capabilitiesListItemFoVCapabilityButton(): Locator {
        return this._capabilitiesListItemFoVCapabilityButton;
    }

    get capabilitiesListItemVehicleCaptureCapabilityButton(): Locator {
        return this._capabilitiesListItemVehicleCaptureCapabilityButton;
    }

    get capabilitiesListItemVehicleRecognitionCapabilityButton(): Locator {
        return this._capabilitiesListItemVehicleRecognitionCapabilityButton;
    }

    get capabilitiesListItemTrafficStatisticsCapabilityButton(): Locator {
        return this._capabilitiesListItemTrafficStatisticsCapabilityButton;
    }

    get capabilitiesListItemIntrusionAlarmCapabilitySecurityControlPanelButton(): Locator {
        return this._capabilitiesListItemIntrusionAlarmCapabilitySecurityControlPanelButton;
    }

    get capabilitiesListItemVideoCapabilityButton(): Locator {
        return this._capabilitiesListItemVideoCapabilityButton;
    }

    get capabilitiesListItemPTZCapabilityButton(): Locator {
        return this._capabilitiesListItemPTZCapabilityButton;
    }

    get capabilitiesListItemSmartLinkageCapabilityButton(): Locator {
        return this._capabilitiesListItemSmartLinkageCapabilityButton;
    }

    get capabilitiesListItemAutoTrackCapabilityButton(): Locator {
        return this._capabilitiesListItemAutoTrackCapabilityButton;
    }

    get capabilitiesListItem360PanoramicCameraCapabilityButton(): Locator {
        return this._capabilitiesListItem360PanoramicCameraCapabilityButton;
    }

    get capabilitiesListItemPanoramicPTZCameraCapabilityButton(): Locator {
        return this._capabilitiesListItemPanoramicPTZCameraCapabilityButton;
    }

    get capabilitiesListItemThermalImagingCapabilityButton(): Locator {
        return this._capabilitiesListItemThermalImagingCapabilityButton;
    }

    get nodeWindow(): Locator {
        return this._nodeWindow;
    }

    get tabPanelLeft(): Locator {
        return this._tabPanelLeft;
    }

    get tabPanelRight(): Locator {
        return this._tabPanelRight;
    }

    get robotButton(): Locator {
        return this._robotButton;
    }

    get robotCh01Button(): Locator {
        return this._robotCh01Button;
    }

    async clickOnBasicInformationListItem() {
        await this.basicInformationListItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnFieldOfViewListItem() {
        await this.fieldOfViewListItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCapabilitiesListItem() {
        await this.capabilitiesListItem.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnCloseWindowButton() {
        await this.closeWindowButton.click();
        await this.page.waitForTimeout(1000);
    }
    async clickOnRobotButton() {
        await this.robotButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnRobotCh01Button() {
        await this.robotCh01Button.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyNodeWindow(windowName: string, isLiveViewActive: boolean = true) {
        await expect(this.fullNodeWindow.locator(".card-header").getByText(windowName)).toBeVisible();
        await expect(this.editCoordinatesButton).toBeVisible();
        await expect(this.deleteCoordinatesButton).toBeVisible();
        await expect(this.closeWindowButton).toBeVisible();
        await expect(this.basicInformationListItem).toBeVisible();
        await expect(this.fieldOfViewListItem).toBeVisible();
        await expect(this.capabilitiesListItem).toBeVisible();
        await expect(this.liveViewButton).toBeVisible();

        if (isLiveViewActive) {
            await expect(this.liveViewButton).not.toHaveAttribute("disabled");
        } else {
            await expect(this.liveViewButton).toHaveAttribute("disabled");
        }

        await expect(this.playbackButton).toBeVisible();
        await expect(this.nearbyButton).toBeVisible();
    }

    async verifyPtzBasicInformationTab() {
        await expect(this.tabPanelRight.getByText("Status")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Organization")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Root Node")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Main")).toBeVisible();
        await expect(this.tabPanelRight.getByText("General cameras")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Type")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Longitude & Latitude")).toBeVisible();
    }

    async verifyPtzFieldOfViewTab() {
        await expect(this.tabPanelRight.getByText(" View Radius: ")).toBeVisible();
        await expect(this.tabPanelRight.getByText(" Horizontal: ")).toBeVisible();
        await expect(this.tabPanelRight.getByText(" Azimuth: ")).toBeVisible();
        await expect(this.fieldOfViewListItemEditButton).toBeVisible();
    }

    async verifyPtzCapabilitiesTab() {
        await expect(this.capabilitiesListItemSmartLinkageCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemAutoTrackCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemIOCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemFoVEventCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItem360PanoramicCameraCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemPanoramicPTZCameraCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemFoVCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemIntrusionAlarmCapabilitySecurityControlPanelButton).toBeVisible();
        await expect(this.capabilitiesListItemVideoCapabilityButton).toBeVisible();
    }

    async verifyRobotCh01Window() {

    }

    async verifyRobotCh01BasicInformationTab() {
        await expect(this.tabPanelRight.getByText("Status")).toBeVisible();
        await expect(this.tabPanelRight.getByText(" Offline")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Organization")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Root Node")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Main")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Robot")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Type")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Dome Camera")).toBeVisible();
        await expect(this.tabPanelRight.getByText("Longitude & Latitude")).toBeVisible();
    }

    async verifyRobotCh01FieldOfViewTab() {
        await expect(this.tabPanelRight.getByText(" View Radius: ")).toBeVisible();
        await expect(this.tabPanelRight.getByText(" Horizontal: ")).toBeVisible();
        await expect(this.tabPanelRight.getByText(" Azimuth: ")).toBeVisible();
        await expect(this.fieldOfViewListItemEditButton).toBeVisible();
    }

    async verifyRobotCh01CapabilitiesTab() {
        await expect(this.capabilitiesListItemIOCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemFoVEventCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemFoVCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemThermalImagingCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemVideoCapabilityButton).toBeVisible();
        await expect(this.capabilitiesListItemPTZCapabilityButton).toBeVisible();
    }
}