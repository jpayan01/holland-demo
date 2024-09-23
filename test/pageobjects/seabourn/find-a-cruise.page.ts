import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for find a cruise page
 */
class FindACruise {
    // Seabourn homepage
    public get homepageLogo () {
        return $('[aria-label="Seabourn Logo"]');
    };

    public chooseCruiseFilter (cruise: string) {
        return $(`[aria-label*="${cruise}"]`);
    };

    // Resuls button
    public get resultsButton(){
        return $('button[data-automation-id="find-a-cruise-Result"]');
    };

    // Request a Quote button
    public requestAQuoteBtn (cruisePackage: string) {
        return $(`[aria-label="Request A Quote ${cruisePackage}"]`)
    };

    // REQUEST A QUOTE FORM INPUTS (e.g. First Name, Last Name, E-Mail, Phone Number)
    public requestQuoteInputFields(firstName: string){
        return $(`input[aria-label="${firstName}"]`)
    };

    // Contact Me button
    public get contactMeBtn(){
        return $('[data-automation-id="master-Submit"]');
    };

    // First name error label
    public get firstNameErrorLabel(){
        return $('.cmp-form__error-summary-wrapper label[for="formtextfname"]');
    };

    // Last name error label
    public get lastNameErrorLabel(){
        return $('.cmp-form__error-summary-wrapper label[for="form-text-lname"]');
    };

    // Email name error label
    public get emailAddressErrorLabel(){
        return $('.cmp-form__error-summary-wrapper label[for="form-text-email"]');
    };

    // Phone Number error label
    public get phoneNumberErrorLabel(){
        return $('.cmp-form__error-summary-wrapper label[for="form-text-phone"]');
    };

    //********** ACTIONS **********/

    // Click an option from menu e.g. Destinations, Departure Date, etc.
    public async clickDestinationsMenu (destination: string) {
        const chooseDestination = await $(`a[aria-label="${destination}"]`);
        await chooseDestination.waitForDisplayed();
        await chooseDestination.click();
    };

    // Click on a Destination e.g. Alaska, Asia, Caribbean, etc.
    public async findCruiseFilter(cruise: string) {
        const findCruise = await this.chooseCruiseFilter(cruise);
        await findCruise.click();
    };

    // Click Results button
    public async clickResultsButton() {
        await this.resultsButton.click();
    };

    // Click Request A Quote button
    public async clickRequestAQuoteBtn(cruisePackage: string){
        await this.requestAQuoteBtn(cruisePackage).click();
    };

    // Fill out Request a Quote form
    public async fillRequestAQuoteForm(inputs: string, info: string){
        await this.requestQuoteInputFields(inputs).setValue(info);
    };

    // Click Contact Me button
    public async clickContactMeBtn(){
        await this.contactMeBtn.click();
    };
}

export default new FindACruise();
