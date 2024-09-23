import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/seabourn/home.page.js';
import FindACruise from '../pageobjects/seabourn/find-a-cruise.page.js';
// import cruiseDealsPage from '../pageobjects/holland/cruise-deals.page.js';


describe('Opens Holland America Home page.', () => {
    it('Should navigate to Seabourn home page', async()=> {
        // Navigates to Holland America homepage
        await HomePage.open();

        // Validates home page logo is displayed
        await expect(HomePage.homepageLogo).toBeDisplayed();

        // For testing purposes only
        browser.pause(3000);
    });

    it('should find a cruise', async () => {
        // Click on 'Find Cruises'
        await HomePage.searchForCruises();

        // Click 'Find a Cruise' link
        await HomePage.clickFindACruise();

        // Select Destinations from menu
        await FindACruise.clickDestinationsMenu('Destinations');

        // Select 'Alaska' as a destination
        await FindACruise.findCruiseFilter('ALASKA');

        // Validates Alaska destination is checked
        expect(FindACruise.chooseCruiseFilter).toHaveAttribute('aria-checked', 'true');

        // Clicks Resuls button
        await FindACruise.clickResultsButton();
        
        // For testing purposes only
        browser.pause(3000);
    });

    it('should validate required fields for requesting a quote form', async () => {
        // Click 'REQUEST A QUOTE' button
        await FindACruise.clickRequestAQuoteBtn('14-Day Glacier Bay, Fjords & Inside Passage');

        // Click Contact Me button
        await FindACruise.clickContactMeBtn();

        // First name error should be displayed for required field
        await expect(FindACruise.firstNameErrorLabel).toHaveText('Please provide First Name');

        // Last name error should be displayed for required field
        await expect(FindACruise.lastNameErrorLabel).toHaveText('Please provide Last Name');

        // Email error should be displayed for required field
        await expect(FindACruise.emailAddressErrorLabel).toHaveText('Please provide e-mail address');

        // Phone Number error should be displayed for required field
        await expect(FindACruise.phoneNumberErrorLabel).toHaveText('Please provide phone number');

        // For testing purposes only
        browser.pause(3000);
    });

    it('should request a quote for cruises in Alaska', async () => {
        // // Click 'REQUEST A QUOTE' button
        // await FindACruise.clickRequestAQuoteBtn('14-Day Glacier Bay, Fjords & Inside Passage');

        // fill out form for request a quote
        // Enter first name
        await FindACruise.fillRequestAQuoteForm('FIRST NAME', 'JOHN');

        // Enter Last name
        await FindACruise.fillRequestAQuoteForm('LAST NAME', 'DOE');

        // Enter Email Address
        await FindACruise.fillRequestAQuoteForm('E-MAIL ADDRESS', 'tester@test-email.com');

        // Enter Phone Number
        await FindACruise.fillRequestAQuoteForm('PHONE NUMBER', '510-432-1120');

        // Click Contact Me button
        await FindACruise.clickContactMeBtn();

        // For testing purposes only
        browser.pause(5000);
    });

})

