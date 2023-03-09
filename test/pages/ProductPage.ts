class ProductPage{

    get productTitle(){
        return $("div.title-group > h1 >span[itemprop='name']");
    }

    get addToBasketBtn(){
        return $("#addToBasket_tesapl");
    }

    get productPrice(){
        return $("ins#cena_d");
    }

    async clickOnAddToBasketBtn(){
        const btn:WebdriverIO.Element = await this.addToBasketBtn;
        await btn.waitForDisplayed();   
        await btn.click();
    }

    async productTitleIsVisible(){
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }

    async getProductTitleValue():Promise<string>{
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async getProductPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        await price.scrollIntoView();
        return await price.getText();
    }

    async addToBasketBtnIsVisible(){
        const btn:WebdriverIO.Element = await this.addToBasketBtn;
        await btn.waitForDisplayed();       
    }
}
export default new ProductPage;