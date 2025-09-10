import { Page, Locator, expect } from "@playwright/test";
import { FaceByFeatureFilter } from "../../constants/DataTypes";

export class FeatureFilterPage {
    readonly page: Page;
    private readonly _ageGenderSectionBlock: Locator;
    private readonly _ageGenderSectionOptionStyleAgeBlock: Locator;
    private readonly _ageGenderSectionOptionStyleGenderBlock: Locator;
    private readonly _glassesSmileMaskSectionBlock: Locator;
    private readonly _glassesSmileMaskSectionOptionStyleGlassesBlock: Locator;
    private readonly _glassesSmileMaskSectionOptionStyleSmileBlock: Locator;
    private readonly _glassesSmileMaskSectionOptionStyleMaskBlock: Locator;

    private readonly _ageBlockAllButton: Locator;
    private readonly _ageBlockChildButton: Locator;
    private readonly _ageBlockYoungButton: Locator;
    private readonly _ageBlockMiddleButton: Locator;
    private readonly _ageBlockElderlyButton: Locator;
    private readonly _ageBlockUnknownButton: Locator;

    private readonly _genderBlockAllButton: Locator;
    private readonly _genderBlockMaleButton: Locator;
    private readonly _genderBlockFemaleButton: Locator;
    private readonly _genderBlockUnknownButton: Locator;

    private readonly _glassesBlockAllButton: Locator;
    private readonly _glassesBlockYesButton: Locator;
    private readonly _glassesBlockNoButton: Locator;
    private readonly _glassesBlockUnknownButton: Locator;

    private readonly _smileBlockAllButton: Locator;
    private readonly _smileBlockYesButton: Locator;
    private readonly _smileBlockNoButton: Locator;
    private readonly _smileBlockUnknownButton: Locator;

    private readonly _maskBlockAllButton: Locator;
    private readonly _maskBlockYesButton: Locator;
    private readonly _maskBlockNoButton: Locator;
    private readonly _maskBlockUnknownButton: Locator;

    private readonly _ageSelectedButton: (age: string) => Locator;
    private readonly _genderSelectedButton: (gender: string) => Locator;
    private readonly _glassesSelectedButton: (glasses: string) => Locator;
    private readonly _smileSelectedButton: (smile: string) => Locator;
    private readonly _maskSelectedButton: (mask: string) => Locator;

    constructor(page: Page) {
        this.page = page;

        this._ageGenderSectionBlock = this.page.locator('.selection-container').nth(0);
        this._glassesSmileMaskSectionBlock = this.page.locator('.selection-container').nth(1);

        this._ageGenderSectionOptionStyleAgeBlock = this.page.locator('app-selection[optionsstyle="primaryOutline"]').nth(0);
        this._ageGenderSectionOptionStyleGenderBlock = this.page.locator('app-selection[optionsstyle="primaryOutline"]').nth(1);
        this._glassesSmileMaskSectionOptionStyleGlassesBlock = this.page.locator('app-selection[optionsstyle="primaryOutline"]').nth(2);
        this._glassesSmileMaskSectionOptionStyleSmileBlock = this.page.locator('app-selection[optionsstyle="primaryOutline"]').nth(3);
        this._glassesSmileMaskSectionOptionStyleMaskBlock = this.page.locator('app-selection[optionsstyle="primaryOutline"]').nth(4);

        this._ageBlockAllButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(0);
        this._ageBlockChildButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(1);
        this._ageBlockYoungButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(2);
        this._ageBlockMiddleButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(3);
        this._ageBlockElderlyButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(4);
        this._ageBlockUnknownButton = this._ageGenderSectionOptionStyleAgeBlock.locator('button').nth(5);

        this._genderBlockAllButton = this._ageGenderSectionOptionStyleGenderBlock.locator('button').nth(0);
        this._genderBlockMaleButton = this._ageGenderSectionOptionStyleGenderBlock.locator('button').nth(1);
        this._genderBlockFemaleButton = this._ageGenderSectionOptionStyleGenderBlock.locator('button').nth(2);
        this._genderBlockUnknownButton = this._ageGenderSectionOptionStyleGenderBlock.locator('button').nth(3);

        this._glassesBlockAllButton = this._glassesSmileMaskSectionOptionStyleGlassesBlock.locator('button').nth(0);
        this._glassesBlockYesButton = this._glassesSmileMaskSectionOptionStyleGlassesBlock.locator('button').nth(1);
        this._glassesBlockNoButton = this._glassesSmileMaskSectionOptionStyleGlassesBlock.locator('button').nth(2);
        this._glassesBlockUnknownButton = this._glassesSmileMaskSectionOptionStyleGlassesBlock.locator('button').nth(3);

        this._smileBlockAllButton = this._glassesSmileMaskSectionOptionStyleSmileBlock.locator('button').nth(0);
        this._smileBlockYesButton = this._glassesSmileMaskSectionOptionStyleSmileBlock.locator('button').nth(1);
        this._smileBlockNoButton = this._glassesSmileMaskSectionOptionStyleSmileBlock.locator('button').nth(2);
        this._smileBlockUnknownButton = this._glassesSmileMaskSectionOptionStyleSmileBlock.locator('button').nth(3);

        this._maskBlockAllButton = this._glassesSmileMaskSectionOptionStyleMaskBlock.locator('button').nth(0);
        this._maskBlockYesButton = this._glassesSmileMaskSectionOptionStyleMaskBlock.locator('button').nth(1);
        this._maskBlockNoButton = this._glassesSmileMaskSectionOptionStyleMaskBlock.locator('button').nth(2);
        this._maskBlockUnknownButton = this._glassesSmileMaskSectionOptionStyleMaskBlock.locator('button').nth(3);

        this._ageSelectedButton = (age: string): any => {
            return this.page.locator(
                `xpath=(//app-selection[@optionsstyle='primaryOutline'])[1]//button[contains(text(), '${age}')]`
            );
        }
        this._genderSelectedButton = (gender: string): any => {
            return this.page.locator(
                `xpath=(//app-selection[@optionsstyle='primaryOutline'])[2]//button[contains(text(), '${gender}')]`
            );
        }
        this._glassesSelectedButton = (glasses: string): any => {
            return this.page.locator(
                `xpath=(//app-selection[@optionsstyle='primaryOutline'])[3]//button[contains(text(), '${glasses}')]`
            );
        }
        this._smileSelectedButton = (smile: string): any => {
            return this.page.locator(
                `xpath=(//app-selection[@optionsstyle='primaryOutline'])[4]//button[contains(text(), '${smile}')]`
            );
        }
        this._maskSelectedButton = (mask: string): any => {
            return this.page.locator(
                `xpath=(//app-selection[@optionsstyle='primaryOutline'])[5]//button[contains(text(), '${mask}')]`
            );
        }
    }

    get ageGenderSectionBlock(): Locator {
        return this._ageGenderSectionBlock;
    }

    get ageGenderSectionOptionStyleAgeBlock(): Locator {
        return this._ageGenderSectionOptionStyleAgeBlock;
    }

    get ageGenderSectionOptionStyleGenderBlock(): Locator {
        return this._ageGenderSectionOptionStyleGenderBlock;
    }

    get glassesSmileMaskSectionBlock(): Locator {
        return this._glassesSmileMaskSectionBlock;
    }

    get glassesSmileMaskSectionOptionStyleGlassesBlock(): Locator {
        return this._glassesSmileMaskSectionOptionStyleGlassesBlock;
    }

    get glassesSmileMaskSectionOptionStyleSmileBlock(): Locator {
        return this._glassesSmileMaskSectionOptionStyleSmileBlock;
    }

    get glassesSmileMaskSectionOptionStyleMaskBlock(): Locator {
        return this._glassesSmileMaskSectionOptionStyleMaskBlock;
    }

    get ageBlockAllButton(): Locator {
        return this._ageBlockAllButton;
    }

    get ageBlockChildButton(): Locator {
        return this._ageBlockChildButton;
    }

    get ageBlockYoungButton(): Locator {
        return this._ageBlockYoungButton;
    }

    get ageBlockMiddleButton(): Locator {
        return this._ageBlockMiddleButton;
    }

    get ageBlockElderlyButton(): Locator {
        return this._ageBlockElderlyButton;
    }

    get ageBlockUnknownButton(): Locator {
        return this._ageBlockUnknownButton;
    }

    get genderBlockAllButton(): Locator {
        return this._genderBlockAllButton;
    }

    get genderBlockMaleButton(): Locator {
        return this._genderBlockMaleButton;
    }

    get genderBlockFemaleButton(): Locator {
        return this._genderBlockFemaleButton;
    }

    get genderBlockUnknownButton(): Locator {
        return this._genderBlockUnknownButton;
    }

    get glassesBlockAllButton(): Locator {
        return this._glassesBlockAllButton;
    }

    get glassesBlockYesButton(): Locator {
        return this._glassesBlockYesButton;
    }

    get glassesBlockNoButton(): Locator {
        return this._glassesBlockNoButton;
    }

    get glassesBlockUnknownButton(): Locator {
        return this._glassesBlockUnknownButton;
    }

    get smileBlockAllButton(): Locator {
        return this._smileBlockAllButton;
    }

    get smileBlockYesButton(): Locator {
        return this._smileBlockYesButton;
    }

    get smileBlockNoButton(): Locator {
        return this._smileBlockNoButton;
    }

    get smileBlockUnknownButton(): Locator {
        return this._smileBlockUnknownButton;
    }

    get maskBlockAllButton(): Locator {
        return this._maskBlockAllButton;
    }

    get maskBlockYesButton(): Locator {
        return this._maskBlockYesButton;
    }

    get maskBlockNoButton(): Locator {
        return this._maskBlockNoButton;
    }

    get maskBlockUnknownButton(): Locator {
        return this._maskBlockUnknownButton;
    }

    get ageSelectedButton(): (age: string) => Locator {
        return this._ageSelectedButton;
    }

    get genderSelectedButton(): (gender: string) => Locator {
        return this._genderSelectedButton;
    }

    get glassesSelectedButton(): (glasses: string) => Locator {
        return this._glassesSelectedButton;
    }

    get smileSelectedButton(): (smile: string) => Locator {
        return this._smileSelectedButton;
    }

    get maskSelectedButton(): (mask: string) => Locator {
        return this._maskSelectedButton;
    }

    async clickOnAgeBlockAllButton() {
        await this.ageBlockAllButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAgeBlockChildButton() {
        await this.ageBlockChildButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAgeBlockYoungButton() {
        await this.ageBlockYoungButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAgeBlockMiddleButton() {
        await this.ageBlockMiddleButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAgeBlockElderlyButton() {
        await this.ageBlockElderlyButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnAgeBlockUnknownButton() {
        await this.ageBlockUnknownButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGenderBlockAllButton() {
        await this.genderBlockAllButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGenderBlockMaleButton() {
        await this.genderBlockMaleButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGenderBlockFemaleButton() {
        await this.genderBlockFemaleButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGenderBlockUnknownButton() {
        await this.genderBlockUnknownButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGlassesBlockAllButton() {
        await this.glassesBlockAllButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGlassesBlockYesButton() {
        await this.glassesBlockYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGlassesBlockNoButton() {
        await this.glassesBlockNoButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnGlassesBlockUnknownButton() {
        await this.glassesBlockUnknownButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSmileBlockAllButton() {
        await this.smileBlockAllButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSmileBlockYesButton() {
        await this.smileBlockYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSmileBlockNoButton() {
        await this.smileBlockNoButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSmileBlockUnknownButton() {
        await this.smileBlockUnknownButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnMaskBlockAllButton() {
        await this.maskBlockAllButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnMaskBlockYesButton() {
        await this.maskBlockYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnMaskBlockNoButton() {
        await this.maskBlockNoButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnMaskBlockUnknownButton() {
        await this.maskBlockUnknownButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectFilters(data: FaceByFeatureFilter) {
        const { age, gender, glasses, smile, mask } = data;

        switch (data.age) {
            case "All": {
                await this.ageBlockAllButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Child": {
                await this.ageBlockChildButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Young": {
                await this.ageBlockYoungButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Middle": {
                await this.ageBlockMiddleButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Elderly": {
                await this.ageBlockElderlyButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            default: {
                await this.ageBlockUnknownButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        switch (data.gender) {
            case "All": {
                await this.genderBlockAllButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Male": {
                await this.genderBlockMaleButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Female": {
                await this.genderBlockFemaleButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            default: {
                await this.genderBlockUnknownButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        switch (data.glasses) {
            case "All": {
                await this.glassesBlockAllButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Yes": {
                await this.glassesBlockYesButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "No": {
                await this.glassesBlockNoButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            default: {
                await this.glassesBlockUnknownButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        switch (data.smile) {
            case "All": {
                await this.smileBlockAllButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Yes": {
                await this.smileBlockYesButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "No": {
                await this.smileBlockNoButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            default: {
                await this.smileBlockUnknownButton.click();
                await this.page.waitForTimeout(1000);
            }
        }

        switch (data.mask) {
            case "All": {
                await this.maskBlockAllButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "Yes": {
                await this.maskBlockYesButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            case "No": {
                await this.maskBlockNoButton.click();
                await this.page.waitForTimeout(1000);
                break;
            }
            default: {
                await this.maskBlockUnknownButton.click();
                await this.page.waitForTimeout(1000);
            }
        }
    }

    async verifySelectedFilters(data: FaceByFeatureFilter) {
        await this.ageSelectedButton(data.age).waitFor({ state: "visible" });
        await this.page.waitForTimeout(100);
        await expect(this.ageSelectedButton(data.age)).toHaveCSS("background-color", "rgb(75, 56, 179)");

        await this.genderSelectedButton(data.gender).waitFor({ state: "visible" });
        await this.page.waitForTimeout(100);
        await expect(this.genderSelectedButton(data.gender)).toHaveCSS("background-color", "rgb(75, 56, 179)");

        await this.glassesSelectedButton(data.glasses).waitFor({ state: "visible" });
        await this.page.waitForTimeout(100);
        await expect(this.glassesSelectedButton(data.glasses)).toHaveCSS("background-color", "rgb(75, 56, 179)");

        await this.smileSelectedButton(data.smile).waitFor({ state: "visible" });
        await this.page.waitForTimeout(100);
        await expect(this.smileSelectedButton(data.smile)).toHaveCSS("background-color", "rgb(75, 56, 179)");

        await this.maskSelectedButton(data.mask).waitFor({ state: "visible" });
        await this.page.waitForTimeout(5000);
        await expect(this.maskSelectedButton(data.mask)).toHaveCSS("background-color", "rgb(75, 56, 179)");
    }
}