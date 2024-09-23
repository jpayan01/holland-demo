import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    // Seabourn homepage
    public get homepageLogo () {
        return $('[aria-label="Seabourn Logo"]');
    };

    // Find Cruises main nav menu
    public get findCruises(){
        return $('[data-automation-id="en-findACruise"]');
    };

    // Find a Cruise link
    public get findACruiseLink () {
        return $('[aria-label="Find a Cruise"] li a');
    };

    // Click 'Find Cruises' from Main nav menu
    public async searchForCruises () {
        await this.findCruises.click();
    };  

    // Click 'Find a Cruise' sub menu
    public async clickFindACruise() {
        await this.findACruiseLink.isDisplayed();
        await this.findACruiseLink.click();
    };

    // Navigate to Seabourn homepage
    public open () {
        return super.openSeabourn();
    }
}

export default new HomePage();
