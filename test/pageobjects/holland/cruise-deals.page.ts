import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CruiseDealsPage {
   
    public async selectCruiseDestination (destination: string) {
        await $(`[aria-label="${destination}"]`).click();
    };

}

export default new CruiseDealsPage();
