import { helionHomeUrl, searchPageUrl, searchProductUrl, basketUrl } from "../../config/pagesUrl";
import { searchPhrase, alertMessage, deletedProductMessage } from "../../config/data";  
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import GlobalPage from "../../pages/GlobalPage";
import ProductPage from "../../pages/ProductPage";
import BasketPage from "../../pages/BasketPage";

describe("E2E - Products", async () => {
    let productTitle:string = "";
    let productPrice:string = "";
    before(() => {
        browser.url(helionHomeUrl);
        GlobalPage.acceptCookies();
    })

    it("Should type search phrase and click search icon", async () => {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first book item", async () => {
        await SearchResultPage.clickOnfirstBookItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToBasketBtnIsVisible();
        productTitle = await ProductPage.getProductTitleValue();
        productPrice = await ProductPage.getProductPrice();
    })

    it("Should click on add to basket button", async () => {
        await ProductPage.clickOnAddToBasketBtn();
        await expect(browser).toHaveUrlContaining(basketUrl);
        await expect(await BasketPage.getSuccessAlertValue()).toContain(productTitle);
        await expect(await BasketPage.getTotalPriceValue()).toEqual(productPrice);
    })

    it("Should remove product from basket", async () => {
        await BasketPage.clickOnCheckbox();
        await BasketPage.clickOnRemoveSelectedLabel();
       
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await BasketPage.acceptDeletionAlert();
        await expect(await BasketPage.getDeletedAlertMessage()).toContain(deletedProductMessage);
    })


})