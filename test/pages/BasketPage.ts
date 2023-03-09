class BasketPage{

    get successAlert(){
        return $("div.successbox > p");
    }

    get totalPrice(){
        return $("h3#cart-edit-summary");
    }

    get checkbox(){
        return $("form#formularz tr th.checkbox");
    }

    get removeSelectedLabel(){
        return $("div#usun a");
    }

    get deletedAlertMessage(){
        return $("div.infobox > p");
    }

    async getDeletedAlertMessage():Promise<string>{
        const alert: WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async clickOnRemoveSelectedLabel(){
        const label:WebdriverIO.Element = await this.removeSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async acceptDeletionAlert(){
        await browser.acceptAlert();
    }

    async getTotalPriceValue():Promise<string>{
        const totalPrice:WebdriverIO.Element = await this.totalPrice;
        await totalPrice.waitForDisplayed();
        return await totalPrice.getText();
    }

    async getSuccessAlertValue():Promise<string>{
        const alert:WebdriverIO.Element = await this.successAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}
export default new BasketPage;