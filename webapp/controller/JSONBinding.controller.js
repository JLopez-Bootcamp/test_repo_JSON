sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

        formatter: formatter,

        onInit() {
            var oDetailsModel = new JSONModel({
                Eid: "",
                Enabled: false,
                Address: {
                    Street: "Solitaire St",
                    City: "Cavite",
                    Zip: "4107",
                    Country: "PH"
                },
                SalesAmount: 0,
                CurrencyCode: ""
            });

            this.getView().setModel(oDetailsModel, "details");
        },
    
        onProductSelect: function (oEvent) {
            var oList = oEvent.getSource();
            var oSelectedItem = oList.getSelectedItem();
            var oContext = oSelectedItem.getBindingContext("ProductsModel");
            var spath = oContext.getPath();
            var opanel4 = this.getView().byId("panel4");
            opanel4.bindElement({
                path: spath,
                model: "ProductsModel"
            });
        }
   });
});