import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/holland/home.page.js';
import cruiseDealsPage from '../pageobjects/holland/cruise-deals.page.js';


describe('Opens Holland America Home page.', () => {
    it('Should navigate to Holland America home page', async()=> {
         // Navigates to Holland America homepage
         await HomePage.open();

         // Validates home page logo is displayed
         await expect(HomePage.homepageLogo).toBeDisplayed();
    });

    it('should navigate to find cruises page', async () => {
        // Click on 'Ver Cruseros' - 'Find Cruises'
        await HomePage.searchForCruises();

        const browserPage = await browser.getUrl();
        expect(browserPage).toContain('cruise-deals');

        // For testing purposes only
        browser.pause(3000);
    });

    it('should find cruises for Europe', async () => {
        // Select Europe Cruises
        await cruiseDealsPage.selectCruiseDestination('EUROPE CRUISES');

        const browserPage = await browser.getUrl();
        expect(browserPage).toContain('cruise-deals');

        // For testing purposes only
        browser.pause(3000);
    });

})

