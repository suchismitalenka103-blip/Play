import { Page, Locator , expect} from '@playwright/test';
import {play_Data} from '../testdata/playdata'
const playData = new play_Data();
export class Play{
    //Locators
    readonly page: Page;
    // readonly locator: Locator
    readonly loginId: Locator;
    readonly password: Locator;
    readonly loginButton: Locator
    readonly process_tab : Locator
    readonly process_tab_ttl : Locator
    readonly addnew : Locator
     constructor(page: Page) {
        this.page = page;
        // this.locator = locator;
        // this.locator = Locator
        this.loginId = page.locator("//input[@id='loginForm.username']")
        this.password = page.locator("//input[@id='password']")
        this.loginButton = page.getByText("Login")
        this.process_tab = page.locator('a[href="/play/process"] .tm_opts_btn')
        // .getByTitle("Process", {exact: true})

        this.process_tab_ttl = page.locator(".chtl_primary")
        this.addnew= page.getByText("Add New")
    }
    async login(){
        await this.page.goto(playData.url)
        await this.loginId.fill(playData.login_details.login_id)
        await this.password.fill(playData.login_details.password)
        await this.loginButton.nth(3).click()
        await expect(this.page).toHaveTitle(playData.page_validation.title)
    }
    async process_list_nav(){
        await this.process_tab.click()
        await expect(this.page).toHaveURL(playData.page_validation.process_tab)
        await expect(this.process_tab_ttl).toBeVisible()
        await expect(this.process_tab_ttl).toHaveText("Process")
    }
    async manual_process_add(){
        await this.addnew.click()
        await expect(this.process_tab_ttl).toHaveText(playData.page_validation.add_process_ttl)


    }
}