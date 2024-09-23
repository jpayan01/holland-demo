import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
   
    // Holland America homepage Logo
    public get homepageLogo () {
        return $('[aria-label="Holland America Line Logo"]');
    };

    public get searchCruises(){
        return $('a button.marketing');
    };

    public async searchForCruises () {
        await this.searchCruises.click();
    };  

    // Navigates to Holland America homepage
    public open () {
        return super.openHollandAmerica();
    };
}

export default new HomePage();
