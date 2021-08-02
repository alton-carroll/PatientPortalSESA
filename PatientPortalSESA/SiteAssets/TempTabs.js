$(document).ready(function () {
    $("#tabstrip").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn",
            }
        },
        contentUrls: [
            "../SiteAssets/Patients.js"]
    })
}).data("kendoTabStrip");