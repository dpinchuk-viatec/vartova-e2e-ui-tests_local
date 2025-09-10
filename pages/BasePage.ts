import { Locator, Page } from "@playwright/test";
import * as path from "node:path";
import * as fs from "node:fs";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getElementByText(text: string) {
        return this.page.getByText(text).first();
    }

    async clickOnElementByText(text: string) {
        await this.page.getByText(text).first().click();
        await this.page.waitForTimeout(1000);
    }

    async uploadImage(button: Locator, imageName: string) {
        const filePath: string = path.resolve(process.cwd(), "resources", imageName);

        // Is file exist
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // Upload the file
        await button.setInputFiles(filePath);

        await this.page.waitForTimeout(3000);
    }
}