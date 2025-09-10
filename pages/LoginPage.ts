import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    private readonly _form: Locator;
    private readonly _usernameField: Locator;
    private readonly _passwordField: Locator;
    private readonly _rememberMeCheckbox: Locator;
    private readonly _submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this._form = this.page.locator("form");
        this._usernameField = this._form.locator("input").nth(0);
        this._passwordField = this._form.locator("input").nth(1);
        this._rememberMeCheckbox = this._form.locator("#auth-remember-check");
        this._submitButton = this._form.locator("button").nth(1);
    }

    get form(): Locator {
        return this._form;
    }

    get usernameField(): Locator {
        return this._usernameField;
    }

    get passwordField(): Locator {
        return this._passwordField;
    }

    get rememberMeCheckbox(): Locator {
        return this._rememberMeCheckbox;
    }

    get submitButton(): Locator {
        return this._submitButton;
    }

    async fillUsernameField(username: string) {
        await this.usernameField.fill(username);
    }

    async fillPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    async selectRememberMeCheckbox() {
        await this.rememberMeCheckbox.check();
    }

    async clickOnSubmitButton() {
        await this.submitButton.click();
        await this.page.waitForTimeout(1000);
    }
}