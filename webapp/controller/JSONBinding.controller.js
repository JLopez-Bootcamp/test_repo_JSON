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
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext("ProductsModel");
            if (!oContext) {
                return;
            }

            var oSelectedProduct = oContext.getObject();
            var oDetailsModel = this.getView().getModel("details");

            oDetailsModel.setProperty("/ProductID", oSelectedProduct.ProductID);
            oDetailsModel.setProperty("/ProductName", oSelectedProduct.ProductName);
            oDetailsModel.setProperty("/QuantityPerUnit", oSelectedProduct.QuantityPerUnit);
            oDetailsModel.setProperty("/UnitPrice", oSelectedProduct.UnitPrice);
            oDetailsModel.setProperty("/UnitsInStock", oSelectedProduct.UnitsInStock);
            oDetailsModel.setProperty("/Discontinued", oSelectedProduct.Discontinued);
        }
   });
});