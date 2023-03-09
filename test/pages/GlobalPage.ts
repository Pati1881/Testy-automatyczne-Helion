class GlobalPage {

    get cookiesAcceptBtn(){
        return $("a#rodo-ok");
    }
    async acceptCookies(){
        const btn:WebdriverIO.Element = await this.cookiesAcceptBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }
    
    async openPage(pageUrl:string, expectedUrl:string){
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedUrl);
    }
}
export default new GlobalPage;