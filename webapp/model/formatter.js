sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function (mobileLibrary, Currency) {
    "use strict";

    return {

        //formatter for the href link
        /*formatMail: function(sEid) {			
        var oBundle = this.getOwnerComponent().getModel("i18n");
        return mobileLibrary.URLHelper.normalizeEmail(sEid + oBundle.getText("domain"),	
            oBundle.getResourceBundle().getText("mailSubject", [sEid]),	oBundle.getResourceBundle().getText("mailBody"));
        }, */

        formatMail: function (sEid) {
            if (!sEid) {
                return "";
            }

            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + "@accenture.com",
                "Test email to " + sEid,
                "Hi! How are you?"
            );
        },

        //formatter for the current stock value
        formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency();
        return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");	
        }
    };
});