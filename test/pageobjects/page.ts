import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
    public openHollandAmerica() {
        return browser.url("https://www.hollandamerica.com");
    };

    public openSeabourn() {
        return browser.url("https://www.seabourn.com");
    };
}
