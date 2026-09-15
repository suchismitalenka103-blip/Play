import { Page, Locator , expect} from '@playwright/test';
import {play_Data} from '../testdata/playdata'
const playData = new play_Data();
export class Play{
    //Locators
    readonly page: Page;
    readonly loginId: Locator;
    readonly password: Locator;
    readonly loginButton: Locator
     constructor(page: Page) {
        this.page = page;
        this.loginId = page.locator("//input[@id='loginForm.username']")
        this.password = page.locator("//input[@id='password']")
        this.loginButton = page.getByText("Login")
    }
    async login(){
        await this.page.goto(playData.url)
        await this.loginId.fill(playData.login_details.login_id)
        await this.password.fill(playData.login_details.password)
        await this.loginButton.nth(3).click()
        await expect(this.page).toHaveTitle("PLAY")
    }
}