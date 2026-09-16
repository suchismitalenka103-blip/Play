import { test, expect } from '@playwright/test'
import{play_Data} from '../testdata/playdata'
import { Play} from '../operations/playlogin'
// const playData = new play_Data();
// const play = new Play(page);
test('play login', async({page})=>{
    const playData = new play_Data()
    const play = new Play(page)
    // await page.goto(playData.url)
    // await expect(page).toHaveTitle("NUCLEUS | Sign-In")
    await play.login()
    await play.process_list_nav()
    await play.manual_process_add()
})