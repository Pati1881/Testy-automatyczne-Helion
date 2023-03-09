import GlobalPage from "../../pages/GlobalPage";
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import { helionHomeUrl, searchPageUrl, notFoundUrl } from "../../config/pagesUrl";
import { searchPhrase, incorrectSearchPhrase, searchResultTitle, notFoundMessage } from "../../config/data";

describe("E2E - SearchBar", async () => {
    it("Should open helion page and verify url and visible searchbar", async () =>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchbarPage.searchBarIsVisible();
        await GlobalPage.acceptCookies();
    })

    it("Should click on search icon and verify url", async () => {
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("Should type search value and verify if popup is visible", async () => {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.suggestPopupIsVisible();
    })

    it("Should click on seeAllBooks button", async () => {
        await SearchbarPage.clickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    })

    it("Should verify page title and number of books in result", async () => {
        const title:string = await SearchResultPage.getPageTitle();
        const numberOfBooks:number = await SearchResultPage.getNumberOfBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })

    it("Should clear input value", async() => {
        await SearchbarPage.clearSearchBar();
        await expect(await SearchbarPage.getInputValue()).toContain("");
    })
    
    it("Should type incorrect book name and verify alert", async () => {
        await SearchbarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(await SearchbarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async () => {
        await SearchbarPage.clearSearchBar();
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await SearchbarPage.getInputValue()).toContain(incorrectSearchPhrase);


    })
})